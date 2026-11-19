"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Illustration } from "@/components/dsh/illustration";
import { MiniChart } from "@/components/dsh/mini-chart";
import { ReadingPane } from "@/components/dsh/reading-pane";
import { ResultView, type AiState } from "@/components/dsh/result-view";
import type { DshCopy } from "@/lib/dsh/copy";
import { summarize } from "@/lib/dsh/scoring";
import {
  countAnswered,
  emptyAnswers,
  evaluateSimulation,
  hasAnswer,
  type DshAnswers,
  type DshEvaluation,
} from "@/lib/dsh/scoring";
import { loadAnswers, recordAttempt, saveAnswers } from "@/lib/dsh/storage";
import type {
  DshOpenQuestion,
  DshSimulation,
  DshStructureTask,
  DshTrueFalseQuestion,
  DshVocabQuestion,
} from "@/lib/dsh/types";
import { cn } from "@/lib/utils";

const EXAM_SECONDS = 90 * 60;

type Pane = "text" | "tasks";

type AiResponse = {
  results: {
    id: string;
    points: number;
    criteria: { id: string; achieved: boolean; comment?: string }[];
    feedback: string;
    rewrite?: string;
  }[];
  summary?: string;
};

function formatTime(seconds: number) {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

export function SimulationRunner({
  simulation,
  copy,
  hrefHub,
}: {
  simulation: DshSimulation;
  copy: DshCopy;
  hrefHub: string;
}) {
  const [answers, setAnswers] = useState<DshAnswers>(() => ({
    ...emptyAnswers(simulation),
    ...(loadAnswers(simulation.id) ?? {}),
  }));
  const [phase, setPhase] = useState<"work" | "results">("work");
  const [evaluation, setEvaluation] = useState<DshEvaluation | null>(null);
  const [pane, setPane] = useState<Pane>("tasks");
  const [timer, setTimer] = useState({ remaining: EXAM_SECONDS, running: false });
  const [timerVisible, setTimerVisible] = useState(true);
  const [aiState, setAiState] = useState<AiState>("idle");
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const saveTimer = useRef<number | null>(null);

  const { remaining, running } = timer;

  useEffect(() => {
    if (!timer.running) return;
    const interval = window.setInterval(() => {
      setTimer((current) => {
        if (current.remaining <= 1) return { remaining: 0, running: false };
        return { remaining: current.remaining - 1, running: true };
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timer.running]);

  useEffect(() => {
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => saveAnswers(simulation.id, answers), 450);
    return () => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
    };
  }, [answers, simulation.id]);

  const totalFields = Object.keys(answers).length;
  const answered = countAnswered(answers);
  const progress = totalFields === 0 ? 0 : Math.round((answered / totalFields) * 100);

  const openPoints = useMemo(
    () =>
      simulation.leseverstehen
        .filter((question) => question.kind === "open")
        .reduce((sum, question) => sum + question.points, 0),
    [simulation],
  );

  function update(key: string, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function submit() {
    if (!hasAnswer(answers)) return;
    if (answered < totalFields) {
      const confirmed = window.confirm(copy.sim.confirmIncomplete);
      if (!confirmed) return;
    }
    const result = evaluateSimulation(simulation, answers);
    setEvaluation(result);
    setPhase("results");
    setTimer((current) => ({ remaining: current.remaining, running: false }));
    recordAttempt({
      simulationId: simulation.id,
      at: new Date().toISOString(),
      points: result.total.points,
      max: result.total.max,
      percent: result.total.percent,
      level: result.total.level,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function requestAi() {
    if (!evaluation) return;
    setAiState("loading");
    setAiMessage(null);
    try {
      const response = await fetch("/api/dsh/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: simulation.slug, answers }),
      });

      if (response.status === 501) {
        setAiState("unconfigured");
        setAiMessage(copy.sim.aiUnavailable);
        return;
      }
      if (!response.ok) {
        setAiState("error");
        setAiMessage(copy.sim.aiError);
        return;
      }

      const payload = (await response.json()) as AiResponse;
      const merged = { ...evaluation.results };
      for (const entry of payload.results) {
        const local = merged[entry.id];
        if (!local) continue;
        const labels = new Map(local.met.map((criterion) => [criterion.id, criterion.label]));
        merged[entry.id] = {
          id: entry.id,
          points: entry.points,
          max: local.max,
          source: "ai",
          met: entry.criteria.map((criterion) => ({
            id: criterion.id,
            label: labels.get(criterion.id) ?? criterion.comment ?? criterion.id,
            achieved: criterion.achieved,
          })),
          feedback: entry.rewrite
            ? `${entry.feedback}\n\n→ ${entry.rewrite}`
            : entry.feedback,
        };
      }
      setEvaluation({ results: merged, ...summarize(simulation, merged) });
      setAiState("done");
      setAiMessage(payload.summary ?? null);
    } catch {
      setAiState("error");
      setAiMessage(copy.sim.aiError);
    }
  }

  function restart() {
    const fresh = emptyAnswers(simulation);
    setAnswers(fresh);
    saveAnswers(simulation.id, fresh);
    setEvaluation(null);
    setPhase("work");
    setTimer({ remaining: EXAM_SECONDS, running: false });
    setAiState("idle");
    setAiMessage(null);
    setPane("tasks");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const urgent = remaining <= 10 * 60;

  return (
    <div>
      <header className="sticky top-[6.4rem] z-30 border-b-2 border-line bg-ink/95 lg:top-16">
        <div className="shell flex flex-wrap items-center gap-x-4 gap-y-3 py-3">
          <Link
            href={hrefHub}
            className="flex items-center gap-1.5 border-b border-line pb-0.5 font-mono text-[0.58rem] tracking-[0.14em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
          >
            <span aria-hidden="true">←</span>
            {copy.sim.back}
          </Link>

          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-[1.05rem] leading-tight text-chalk">
              {simulation.title}
            </p>
            <p className="truncate font-mono text-[0.55rem] tracking-[0.12em] text-violet uppercase">
              {String(simulation.number).padStart(2, "0")} · {simulation.topic}
            </p>
          </div>

          {timerVisible ? (
            <div
              className={cn(
                "flex items-center gap-2 border px-2.5 py-1.5",
                urgent && running
                  ? "border-amber-300 bg-amber-300/10"
                  : "border-line bg-ink-card",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[0.95rem] tabular-nums",
                  urgent ? "text-amber-300" : "text-chalk",
                )}
                aria-live="off"
              >
                {remaining === 0 ? copy.sim.timeUp : formatTime(remaining)}
              </span>
              <button
                type="button"
                onClick={() =>
                  setTimer((current) =>
                    current.remaining === 0
                      ? { remaining: EXAM_SECONDS, running: true }
                      : { remaining: current.remaining, running: !current.running },
                  )
                }
                className="border border-line bg-ink-soft px-2.5 py-1 font-mono text-[0.52rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
              >
                {running ? copy.sim.pause : remaining === EXAM_SECONDS ? copy.sim.start : copy.sim.resume}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setTimerVisible(true)}
              className="border border-line px-3 py-1.5 font-mono text-[0.55rem] tracking-[0.12em] text-mute uppercase transition-colors hover:text-chalk"
            >
              {copy.sim.timerOn}
            </button>
          )}

          <button
            type="button"
            onClick={() => setTimerVisible(false)}
            className="hidden font-mono text-[0.55rem] tracking-[0.1em] text-mute/80 uppercase transition-colors hover:text-violet sm:block"
          >
            {copy.sim.timerOff}
          </button>

          <button
            type="button"
            onClick={submit}
            disabled={!hasAnswer(answers)}
            className={cn(
              "px-4 py-2 text-xs font-medium transition-colors",
              hasAnswer(answers)
                ? "bg-violet text-ink-card hover:bg-violet/90"
                : "cursor-not-allowed bg-ink-soft text-mute/80",
            )}
          >
            {copy.sim.submit}
          </button>
        </div>

        <div className="h-0.5 w-full bg-line">
          <div
            className="h-full bg-violet transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="shell pt-1.5 pb-2 font-mono text-[0.55rem] tracking-[0.14em] text-mute uppercase">
          {answered} / {totalFields} {copy.sim.answered}
        </p>
      </header>

      {phase === "work" ? (
        <>
          <div className="shell flex gap-1 border-b border-line py-2 lg:hidden">
            {(["text", "tasks"] as Pane[]).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setPane(value)}
                aria-pressed={pane === value}
                className={cn(
                  "border-b-2 px-3.5 py-1.5 font-mono text-[0.6rem] tracking-[0.14em] uppercase transition-colors",
                  pane === value
                    ? "border-violet text-violet"
                    : "border-transparent text-mute hover:text-chalk",
                )}
              >
                {value === "text" ? copy.sim.reading : copy.sim.tasks}
              </button>
            ))}
          </div>

          <div className="lg:grid lg:h-[calc(100svh-10rem)] lg:grid-cols-2">
            <section
              className={cn(
                "min-h-0 border-line lg:block lg:border-r",
                pane === "text" ? "block" : "hidden",
              )}
            >
              <div className="h-[calc(100svh-11rem)] min-h-[24rem] lg:h-full">
                <ReadingPane
                  lines={simulation.text.lines}
                  storageKey={`dsh:marks:${simulation.id}`}
                  searchLabel={copy.sim.readingSearch}
                  markLabel={copy.sim.readingMarks}
                  resetLabel={copy.sim.readingReset}
                />
              </div>
            </section>

            <section
              className={cn(
                "min-h-0 lg:block",
                pane === "tasks" ? "block" : "hidden",
              )}
            >
              <div className="h-[calc(100svh-11rem)] min-h-[24rem] overflow-y-auto px-4 py-5 sm:px-6 lg:h-full">
                <div className="mx-auto max-w-[46rem] space-y-4">
                  <div className="border-l-2 border-violet bg-ink-card/70 px-4 py-3">
                    <p className="dsh-margin-note">{copy.sim.part1}</p>
                    <p className="mt-1 font-display text-[0.95rem] leading-relaxed text-mute">
                      {copy.sim.intro}
                    </p>
                    <Link
                      href={`${hrefHub}/lernen/leseverstehen`}
                      className="mt-2 inline-block border-b border-line pb-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
                    >
                      {copy.learn.nav} →
                    </Link>
                  </div>

                  {simulation.leseverstehen.map((question) => {
                    if (question.kind === "vocab") {
                      return (
                        <VocabCard
                          key={question.id}
                          question={question}
                          answers={answers}
                          copy={copy}
                          onChange={update}
                        />
                      );
                    }
                    if (question.kind === "truefalse") {
                      return (
                        <TrueFalseCard
                          key={question.id}
                          question={question}
                          answers={answers}
                          copy={copy}
                          onChange={update}
                        />
                      );
                    }
                    return (
                      <OpenCard
                        key={question.id}
                        question={question}
                        answers={answers}
                        copy={copy}
                        onChange={update}
                      />
                    );
                  })}

                  <div className="border-l-2 border-cyan bg-ink-card/70 px-4 py-3">
                    <p className="dsh-margin-note text-cyan">{copy.sim.part2}</p>
                    <p className="mt-1 font-display text-[0.95rem] leading-relaxed text-mute">
                      {copy.sim.part2Note}
                    </p>
                    <Link
                      href={`${hrefHub}/lernen/strukturen`}
                      className="mt-2 inline-block border-b border-line pb-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
                    >
                      {copy.learn.nav} →
                    </Link>
                  </div>

                  {simulation.strukturen.map((task) => (
                    <StructureCard
                      key={task.id}
                      task={task}
                      answers={answers}
                      copy={copy}
                      onChange={update}
                    />
                  ))}

                  <div className="flex items-center justify-between gap-3 border border-line bg-ink-card px-4 py-4">
                    <p className="font-mono text-[0.58rem] text-mute">
                      {openPoints} P · {copy.sim.openPoints} ·{" "}
                      {simulation.strukturen.reduce((sum, task) => sum + task.points, 0)} P{" "}
                      {copy.sim.strukturen}
                    </p>
                    <button
                      type="button"
                      onClick={submit}
                      disabled={!hasAnswer(answers)}
                      className={cn(
                        "px-4 py-2 text-xs font-medium transition-colors",
                        hasAnswer(answers)
                          ? "bg-violet text-ink-card hover:bg-violet/90"
                          : "cursor-not-allowed bg-ink-soft text-mute/80",
                      )}
                    >
                      {copy.sim.submit}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : evaluation ? (
        <div className="shell pt-8">
          <p className="mb-1 font-mono text-[0.6rem] tracking-[0.24em] text-cyan uppercase">
            {copy.sim.results} · Simulation {String(simulation.number).padStart(2, "0")}
          </p>
          <h1 className="mb-8 text-[clamp(1.6rem,3.4vw,2.3rem)] leading-tight font-medium tracking-[-0.02em]">
            {simulation.title}
          </h1>
          <ResultView
            simulation={simulation}
            answers={answers}
            evaluation={evaluation}
            copy={copy}
            aiState={aiState}
            aiMessage={aiMessage}
            onRequestAi={requestAi}
            onRestart={restart}
            hrefHub={hrefHub}
          />
        </div>
      ) : null}
    </div>
  );
}

function QuestionHead({
  number,
  points,
  prompt,
}: {
  number: string;
  points: number;
  prompt: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid size-7 shrink-0 place-items-center border border-violet/40 font-mono text-[0.62rem] text-violet">
        {number}
      </span>
      <p className="min-w-0 flex-1 font-display text-[0.94rem] leading-relaxed text-chalk/95">{prompt}</p>
      <span className="shrink-0 border border-line px-2 py-0.5 font-mono text-[0.58rem] text-mute">
        {points} P
      </span>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <article className="panel p-4 sm:p-5">{children}</article>
  );
}

function VocabCard({
  question,
  answers,
  copy,
  onChange,
}: {
  question: DshVocabQuestion;
  answers: DshAnswers;
  copy: DshCopy;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <Card>
      <QuestionHead number={question.number} points={question.points} prompt={question.prompt} />
      <div className="mt-4 divide-y divide-line/60 overflow-hidden rounded-xl border border-line/60">
        {question.items.map((item) => (
          <div
            key={item.id}
            className="grid gap-3 bg-ink-soft/30 px-3 py-3 sm:grid-cols-[1fr_15rem] sm:items-center"
          >
            <div className="flex min-w-0 items-center gap-3">
              {item.illustration ? (
                <Illustration
                  kind={item.illustration}
                  label={item.prompt}
                  className="w-24 shrink-0 rounded-lg border border-line/60 bg-ink/50 p-1.5"
                />
              ) : null}
              <div className="min-w-0">
                {item.example ? (
                  <span className="mb-1 inline-block rounded-full border border-lime/30 px-2 py-0.5 font-mono text-[0.5rem] tracking-[0.14em] text-lime uppercase">
                    {copy.sim.example}
                  </span>
                ) : null}
                <p className="text-[0.8rem] leading-relaxed text-mute">{item.prompt}</p>
              </div>
            </div>

            {item.example ? (
              <p className="font-mono text-[0.78rem] text-lime">{item.answer}</p>
            ) : (
              <label className="block">
                <span className="sr-only">{item.prompt}</span>
                <input
                  value={answers[item.id] ?? ""}
                  onChange={(event) => onChange(item.id, event.target.value)}
                  placeholder="der / die / das …"
                  className="w-full rounded-lg border border-line bg-ink px-3 py-2 font-mono text-[0.78rem] text-chalk placeholder:text-mute/85 focus:border-violet focus:outline-none"
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

function OpenCard({
  question,
  answers,
  copy,
  onChange,
}: {
  question: DshOpenQuestion;
  answers: DshAnswers;
  copy: DshCopy;
  onChange: (key: string, value: string) => void;
}) {
  const value = answers[question.id] ?? "";
  const words = value.trim() ? value.trim().split(/\s+/).length : 0;

  return (
    <Card>
      <QuestionHead number={question.number} points={question.points} prompt={question.prompt} />
      {question.chart ? <MiniChart chart={question.chart} /> : null}
      <label className="mt-4 block">
        <span className="sr-only">{copy.sim.yourAnswer}</span>
        <textarea
          value={value}
          onChange={(event) => onChange(question.id, event.target.value)}
          rows={4}
          placeholder={copy.sim.yourAnswer}
          className="w-full resize-y rounded-xl border border-line bg-ink px-3 py-2.5 text-[0.85rem] leading-relaxed text-chalk placeholder:text-mute/85 focus:border-violet focus:outline-none"
        />
      </label>
      <div className="mt-1.5 flex items-center justify-between font-mono text-[0.55rem] text-mute/80">
        <span>{question.minWords ? `≈ ${question.minWords} ${copy.sim.words}` : ""}</span>
        <span className="tabular-nums">
          {words} {copy.sim.words}
        </span>
      </div>
    </Card>
  );
}

function TrueFalseCard({
  question,
  answers,
  copy,
  onChange,
}: {
  question: DshTrueFalseQuestion;
  answers: DshAnswers;
  copy: DshCopy;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <Card>
      <QuestionHead number={question.number} points={question.points} prompt={question.prompt} />

      <div className="mt-4 space-y-2">
        <div className="flex items-start gap-3 rounded-lg border border-line/50 bg-ink-soft/30 px-3 py-2 opacity-70">
          <span className="mt-0.5 font-mono text-[0.5rem] tracking-[0.14em] text-mute uppercase">
            {copy.sim.example}
          </span>
          <p className="min-w-0 flex-1 text-[0.78rem] leading-relaxed text-mute">
            {question.example.text}
          </p>
          <span className="shrink-0 font-mono text-[0.6rem] text-amber-300">
            {question.example.correct ? copy.sim.correct : copy.sim.incorrect}
          </span>
        </div>

        {question.statements.map((statement) => {
          const value = answers[statement.id] ?? "";
          return (
            <div
              key={statement.id}
              className="rounded-lg border border-line/60 bg-ink-soft/30 px-3 py-2.5"
            >
              <p className="text-[0.8rem] leading-relaxed text-chalk/85">{statement.text}</p>
              <div className="mt-2 flex gap-1.5" role="group" aria-label={statement.text}>
                {[
                  { key: "true", label: copy.sim.correct },
                  { key: "false", label: copy.sim.incorrect },
                ].map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    aria-pressed={value === option.key}
                    onClick={() => onChange(statement.id, value === option.key ? "" : option.key)}
                    className={cn(
                      "rounded-full border px-3 py-1 font-mono text-[0.6rem] tracking-[0.08em] uppercase transition-colors",
                      value === option.key
                        ? option.key === "true"
                          ? "border-lime/50 bg-lime/15 text-lime"
                          : "border-amber-300/50 bg-amber-300/10 text-amber-300"
                        : "border-line text-mute hover:border-mute/50 hover:text-chalk",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function StructureCard({
  task,
  answers,
  copy,
  onChange,
}: {
  task: DshStructureTask;
  answers: DshAnswers;
  copy: DshCopy;
  onChange: (key: string, value: string) => void;
}) {
  const value = answers[task.id] ?? "";
  return (
    <Card>
      <QuestionHead number={task.label} points={task.points} prompt={task.instruction} />

      <blockquote className="mt-4 border-l-2 border-cyan/60 bg-ink-soft/50 py-2.5 pr-3 pl-3 font-display text-[0.95rem] leading-relaxed text-chalk/95">
        {task.highlight ? (
          <Highlighted text={task.prompt} highlight={task.highlight} />
        ) : (
          task.prompt
        )}
      </blockquote>

      {task.template ? (
        <div className="mt-3">
          <p className="text-[0.82rem] leading-[2] text-mute">
            <span>{task.template.before}</span>
            <span className="mx-1 inline-block min-w-[6rem] border-b border-dashed border-cyan/50 align-middle">
              &nbsp;
            </span>
            <span>{task.template.after}</span>
          </p>
          <label className="mt-2 block">
            <span className="sr-only">{copy.sim.yourAnswer}</span>
            <input
              value={value}
              onChange={(event) => onChange(task.id, event.target.value)}
              placeholder={copy.sim.yourAnswer}
              className="w-full rounded-lg border border-line bg-ink px-3 py-2 font-mono text-[0.78rem] text-chalk placeholder:text-mute/85 focus:border-violet focus:outline-none"
            />
          </label>
        </div>
      ) : (
        <label className="mt-3 block">
          <span className="sr-only">{copy.sim.yourAnswer}</span>
          <textarea
            value={value}
            onChange={(event) => onChange(task.id, event.target.value)}
            rows={3}
            placeholder={copy.sim.yourAnswer}
            className="w-full resize-y rounded-xl border border-line bg-ink px-3 py-2.5 text-[0.85rem] leading-relaxed text-chalk placeholder:text-mute/85 focus:border-violet focus:outline-none"
          />
        </label>
      )}
    </Card>
  );
}

function Highlighted({ text, highlight }: { text: string; highlight: string }) {
  const index = text.indexOf(highlight);
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark className="bg-amber-300/30 px-0.5 text-chalk underline decoration-violet/50 decoration-dotted underline-offset-4">
        {highlight}
      </mark>
      {text.slice(index + highlight.length)}
    </>
  );
}
