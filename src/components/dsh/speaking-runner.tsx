"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { ModuleFeedback, type FeedbackDetail, type ModuleAiState } from "@/components/dsh/module-feedback";
import { ModuleHeader } from "@/components/dsh/module-header";
import { useExamTimer, formatClock } from "@/components/dsh/use-exam-timer";
import type { DshCopy } from "@/lib/dsh/copy";
import { getModule } from "@/lib/dsh/modules";
import { levelFromPoints, scoreText, type ModuleTaskResult } from "@/lib/dsh/module-scoring";
import { loadModuleAnswers, loadModuleAttempts, recordModuleAttempt, saveModuleAnswers } from "@/lib/dsh/storage";
import { cn } from "@/lib/utils";

type Recognition = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type RecognitionCtor = new () => Recognition;

type AiPayload = {
  results: {
    id: string;
    points: number;
    criteria: { id: string; achieved: boolean; comment?: string }[];
    feedback: string;
    rewrite?: string;
  }[];
  summary?: string;
};

function recognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const scope = window as unknown as {
    SpeechRecognition?: RecognitionCtor;
    webkitSpeechRecognition?: RecognitionCtor;
  };
  return scope.SpeechRecognition ?? scope.webkitSpeechRecognition ?? null;
}

export function SpeakingRunner({ copy, hrefHub }: { copy: DshCopy; hrefHub: string }) {
  const exam = getModule("sprechen");
  const timer = useExamTimer(exam.minutes);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(
    () => loadModuleAnswers(exam.id) ?? {},
  );
  const [lastAttempt] = useState(() => loadModuleAttempts(exam.id)[0] ?? null);
  const [selfRating, setSelfRating] = useState<Record<string, boolean>>({});
  const [phase, setPhase] = useState<"work" | "results">("work");
  const [results, setResults] = useState<ModuleTaskResult[]>([]);
  const [prep, setPrep] = useState<{ taskId: string; left: number } | null>(null);
  const [recording, setRecording] = useState(false);
  const [supported] = useState(() => Boolean(recognitionCtor()));
  const [aiState, setAiState] = useState<ModuleAiState>("idle");
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const recognition = useRef<Recognition | null>(null);

  const task = exam.tasks[index];
  const answered = Object.values(answers).filter((value) => value.trim()).length;

  useEffect(() => {
    return () => recognition.current?.stop();
  }, []);

  useEffect(() => {
    const handle = window.setTimeout(() => saveModuleAnswers(exam.id, answers), 400);
    return () => window.clearTimeout(handle);
  }, [answers, exam.id]);

  useEffect(() => {
    if (!prep || prep.left <= 0) return;
    const interval = window.setInterval(() => {
      setPrep((current) => {
        if (!current) return null;
        if (current.left <= 1) return { ...current, left: 0 };
        return { ...current, left: current.left - 1 };
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [prep]);

  function startPrep() {
    setPrep({ taskId: task.id, left: task.prepSeconds });
  }

  function toggleRecording() {
    if (recording) {
      recognition.current?.stop();
      setRecording(false);
      return;
    }
    const Ctor = recognitionCtor();
    if (!Ctor) return;
    const engine = new Ctor();
    engine.lang = "de-DE";
    engine.continuous = true;
    engine.interimResults = true;
    engine.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i += 1) {
        transcript += event.results[i][0]?.transcript ?? "";
      }
      setAnswers((current) => ({ ...current, [task.id]: transcript }));
    };
    engine.onend = () => setRecording(false);
    engine.onerror = () => setRecording(false);
    recognition.current = engine;
    engine.start();
    setRecording(true);
  }

  function submit() {
    if (answered === 0) return;
    if (answered < exam.tasks.length && !window.confirm(copy.modules.common.confirmIncomplete)) return;
    timer.stop();
    recognition.current?.stop();
    setRecording(false);

    const next: ModuleTaskResult[] = exam.tasks.map((item) => {
      const scored = scoreText(answers[item.id] ?? "", item.sampleAnswer, item.criteria);
      const criteria = scored.criteria.map((criterion) => {
        if (!criterion.label.toLowerCase().includes("fluenz")) return criterion;
        const rated = selfRating[item.id] ?? criterion.achieved;
        return { ...criterion, achieved: rated };
      });
      const points = criteria.reduce(
        (sum, criterion) => sum + (criterion.achieved ? item.criteria.find((c) => c.id === criterion.id)?.points ?? 0 : 0),
        0,
      );
      return {
        taskId: item.id,
        points,
        max: item.criteria.reduce((sum, criterion) => sum + criterion.points, 0),
        criteria,
        feedback: "",
        source: "local" as const,
      };
    });
    setResults(next);
    setPhase("results");
    const points = Math.round(next.reduce((sum, result) => sum + result.points, 0) * 10) / 10;
    const level = levelFromPoints(points, exam.maxPoints);
    recordModuleAttempt({
      moduleId: exam.id,
      at: new Date().toISOString(),
      points,
      max: exam.maxPoints,
      percent: level.percent,
      level: level.key,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function requestAi() {
    setAiState("loading");
    setAiMessage(null);
    try {
      const response = await fetch("/api/dsh/module-evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ module: "sprechen", answers }),
      });
      if (response.status === 501) {
        setAiState("unconfigured");
        setAiMessage(copy.modules.common.aiUnavailable);
        return;
      }
      if (!response.ok) {
        setAiState("error");
        setAiMessage(copy.modules.common.aiError);
        return;
      }
      const payload = (await response.json()) as AiPayload;
      setResults((current) =>
        current.map((result) => {
          const ai = payload.results.find((entry) => entry.id === result.taskId);
          if (!ai) return result;
          return {
            ...result,
            points: ai.points,
            source: "ai" as const,
            criteria: result.criteria.map((criterion) => {
              const match = ai.criteria.find((entry) => entry.id === criterion.id);
              return match ? { ...criterion, achieved: match.achieved } : criterion;
            }),
            feedback: ai.rewrite ? `${ai.feedback}\n\n→ ${ai.rewrite}` : ai.feedback,
          };
        }),
      );
      setAiState("done");
      setAiMessage(payload.summary ?? null);
    } catch {
      setAiState("error");
      setAiMessage(copy.modules.common.aiError);
    }
  }

  function restart() {
    setAnswers({});
    saveModuleAnswers(exam.id, {});
    setSelfRating({});
    setResults([]);
    setPhase("work");
    setIndex(0);
    setPrep(null);
    setAiState("idle");
    setAiMessage(null);
    timer.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const details: FeedbackDetail[] = exam.tasks.map((item) => ({
    id: item.id,
    number: item.number,
    prompt: item.prompt,
    answer: answers[item.id] ?? "",
    reference: item.sampleAnswer,
  }));

  const currentPrep = prep?.taskId === task.id ? prep.left : null;
  const fluencyKey = task.criteria.find((criterion) => criterion.label.toLowerCase().includes("fluenz"))?.id;

  return (
    <div>
      <ModuleHeader
        backHref={hrefHub}
        kicker={copy.modules.speak.kicker}
        title={exam.title}
        copy={copy}
        timer={timer}
        answered={answered}
        total={exam.tasks.length}
        onSubmit={submit}
        canSubmit={answered > 0}
      />

      {phase === "work" ? (
        <div className="shell grid gap-8 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="self-start">
            <div className="panel p-5">
              <p className="dsh-margin-note">{exam.topic} · {exam.maxPoints} P</p>
              <h1 className="mt-3 font-display text-[1.7rem] leading-tight">{exam.title}</h1>
              <p className="mt-2 font-display text-[0.92rem] leading-relaxed text-mute">
                {exam.subtitle}
              </p>
              {lastAttempt ? (
                <p className="mt-3 border-l-2 border-line pl-3 font-mono text-[0.6rem] text-mute">
                  {copy.modules.common.lastAttempt}: {lastAttempt.points} / {lastAttempt.max} ·{" "}
                  {copy.levels[lastAttempt.level].label}
                </p>
              ) : null}
              <Link
                href={`${hrefHub}/lernen/sprechen`}
                className="mt-3 inline-block border-b border-line pb-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
              >
                {copy.learn.nav} →
              </Link>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {exam.tasks.map((item, itemIndex) => {
                  const done = Boolean(answers[item.id]?.trim());
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setIndex(itemIndex);
                          setPrep(null);
                          recognition.current?.stop();
                          setRecording(false);
                        }}
                        className={cn(
                          "flex w-full items-baseline gap-3 py-3 text-left transition-colors",
                          index === itemIndex ? "text-violet" : "text-mute hover:text-chalk",
                        )}
                      >
                        <span className="font-mono text-[0.65rem]">{item.number}</span>
                        <span className="min-w-0 flex-1 font-display text-[0.92rem]">{item.title}</span>
                        <span className="font-mono text-[0.55rem] uppercase">
                          {done ? "✓" : formatClock(item.prepSeconds)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>

          <section className="space-y-4">
            <article className="panel p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="dsh-margin-note">{copy.modules.speak.prepare}</p>
                <p className="font-mono text-[0.6rem] text-mute">
                  {formatClock(task.prepSeconds)} / {formatClock(task.speakSeconds)}
                </p>
              </div>

              <h2 className="mt-3 font-display text-[1.45rem] leading-tight">{task.title}</h2>
              <p className="mt-3 font-display text-[1rem] leading-relaxed text-chalk/90">
                {task.prompt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-line py-4">
                {currentPrep === null ? (
                  <button
                    type="button"
                    onClick={startPrep}
                    className="border border-line px-4 py-2 text-xs text-chalk transition-colors hover:border-violet hover:text-violet"
                  >
                    {copy.modules.speak.prepare} · {formatClock(task.prepSeconds)}
                  </button>
                ) : (
                  <span
                    className={cn(
                      "border px-3 py-2 font-mono text-[1rem] tabular-nums",
                      currentPrep === 0
                        ? "border-amber-300 bg-amber-300/10 text-amber-300"
                        : "border-line bg-ink-card text-chalk",
                    )}
                  >
                    {currentPrep === 0 ? copy.modules.speak.prepOver : formatClock(currentPrep)}
                  </span>
                )}

                <button
                  type="button"
                  onClick={toggleRecording}
                  disabled={!supported}
                  className={cn(
                    "px-4 py-2 text-xs font-medium transition-colors",
                    recording
                      ? "bg-amber-300 text-ink"
                      : supported
                        ? "bg-violet text-ink-card hover:bg-violet/90"
                        : "cursor-not-allowed bg-ink-soft text-mute/70",
                  )}
                >
                  {recording ? copy.modules.speak.stop : copy.modules.speak.start}
                </button>
              </div>

              {!supported ? (
                <p className="mt-3 border-l-2 border-amber-300 bg-amber-300/[0.06] px-3 py-2 font-display text-[0.82rem] text-mute">
                  {copy.modules.speak.unsupported}
                </p>
              ) : null}

              <label className="mt-5 block">
                <span className="dsh-margin-note">{copy.modules.speak.typed}</span>
                <textarea
                  value={answers[task.id] ?? ""}
                  onChange={(event) =>
                    setAnswers((current) => ({ ...current, [task.id]: event.target.value }))
                  }
                  rows={7}
                  placeholder={copy.modules.speak.typed}
                  className="mt-2 w-full resize-y border border-line bg-ink px-3 py-3 font-display text-[0.95rem] leading-relaxed text-chalk placeholder:text-mute focus:border-violet focus:outline-none"
                />
              </label>

              {fluencyKey ? (
                <div className="mt-5 border-l-2 border-cyan/50 bg-ink-soft/50 px-4 py-3">
                  <p className="dsh-margin-note text-cyan">{copy.modules.speak.selfCheck}</p>
                  <button
                    type="button"
                    aria-pressed={Boolean(selfRating[task.id])}
                    onClick={() =>
                      setSelfRating((current) => ({ ...current, [task.id]: !current[task.id] }))
                    }
                    className={cn(
                      "mt-2 border px-3 py-1.5 font-mono text-[0.6rem] uppercase transition-colors",
                      selfRating[task.id]
                        ? "border-lime/50 bg-lime/10 text-lime"
                        : "border-line text-mute hover:text-chalk",
                    )}
                  >
                    {selfRating[task.id] ? "✓" : "—"}
                  </button>
                </div>
              ) : null}

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setIndex((current) => (current + 1 < exam.tasks.length ? current + 1 : 0))
                  }
                  className="border-b border-line pb-0.5 font-mono text-[0.58rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
                >
                  {copy.modules.speak.next} →
                </button>
              </div>
            </article>
          </section>
        </div>
      ) : (
        <div className="shell pt-10">
          <p className="dsh-margin-note">{copy.modules.common.results}</p>
          <h1 className="mb-7 font-display text-[clamp(1.6rem,3.4vw,2.3rem)]">{exam.title}</h1>
          <ModuleFeedback
            copy={copy}
            results={results}
            maxPoints={exam.maxPoints}
            details={details}
            aiState={aiState}
            aiMessage={aiMessage}
            onRequestAi={requestAi}
            onRestart={restart}
            hrefHub={hrefHub}
          />
        </div>
      )}
    </div>
  );
}
