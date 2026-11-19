"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Link from "next/link";

import { ModuleFeedback, type FeedbackDetail, type ModuleAiState } from "@/components/dsh/module-feedback";
import { ModuleHeader } from "@/components/dsh/module-header";
import { useExamTimer } from "@/components/dsh/use-exam-timer";
import type { DshCopy } from "@/lib/dsh/copy";
import { getModule } from "@/lib/dsh/modules";
import { levelFromPoints, scoreText, type ModuleTaskResult } from "@/lib/dsh/module-scoring";
import { loadModuleAnswers, loadModuleAttempts, recordModuleAttempt, saveModuleAnswers } from "@/lib/dsh/storage";
import { cn } from "@/lib/utils";

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

export function ListeningRunner({ copy, hrefHub }: { copy: DshCopy; hrefHub: string }) {
  const exam = getModule("hoeren");
  const timer = useExamTimer(exam.minutes);
  const [answers, setAnswers] = useState<Record<string, string>>(
    () => loadModuleAnswers(exam.id) ?? {},
  );
  const [lastAttempt] = useState(() => loadModuleAttempts(exam.id)[0] ?? null);
  const [phase, setPhase] = useState<"work" | "results">("work");
  const [results, setResults] = useState<ModuleTaskResult[]>([]);
  const [transcript, setTranscript] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const [aiState, setAiState] = useState<ModuleAiState>("idle");
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const voices = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    voices.current = window.speechSynthesis.getVoices();
    const onVoices = () => {
      voices.current = window.speechSynthesis.getVoices();
    };
    window.speechSynthesis.addEventListener("voiceschanged", onVoices);
    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener("voiceschanged", onVoices);
    };
  }, []);

  useEffect(() => {
    const handle = window.setTimeout(() => saveModuleAnswers(exam.id, answers), 400);
    return () => window.clearTimeout(handle);
  }, [answers, exam.id]);

  const answered = useMemo(() => Object.values(answers).filter((value) => value.trim()).length, [answers]);

  function speak(paragraphs: string[]) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const german = voices.current.find((voice) => voice.lang.toLowerCase().startsWith("de"));
    for (const text of paragraphs) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = speed;
      if (german) utterance.voice = german;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  }

  function stop() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  function submit() {
    if (answered === 0) return;
    if (answered < exam.questions.length && !window.confirm(copy.modules.common.confirmIncomplete)) return;
    timer.stop();
    stop();

    const next: ModuleTaskResult[] = exam.questions.map((question) => {
      if (question.kind === "choice") {
        const given = answers[question.id] ?? "";
        return {
          taskId: question.id,
          points: given === question.correct ? question.points : 0,
          max: question.points,
          criteria: [],
          feedback: "",
          source: "local" as const,
        };
      }
      const scored = scoreText(
        answers[question.id] ?? "",
        question.sampleAnswer ?? "",
        question.criteria ?? [],
      );
      return {
        taskId: question.id,
        ...scored,
        max: question.points,
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
        body: JSON.stringify({ module: "hoeren", answers }),
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
    setResults([]);
    setPhase("work");
    setAiState("idle");
    setAiMessage(null);
    setTranscript(false);
    timer.reset();
    stop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const details: FeedbackDetail[] = exam.questions.map((question) => ({
    id: question.id,
    number: question.number,
    prompt: question.prompt,
    answer: answers[question.id] ?? "",
    reference: question.sampleAnswer ?? "",
  }));

  return (
    <div>
      <ModuleHeader
        backHref={hrefHub}
        kicker={copy.modules.listen.kicker}
        title={exam.title}
        copy={copy}
        timer={timer}
        answered={answered}
        total={exam.questions.length}
        onSubmit={submit}
        canSubmit={answered > 0}
      />

      {phase === "work" ? (
        <div className="shell grid gap-8 py-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="self-start">
            <div className="panel p-5">
              <p className="dsh-margin-note">{copy.modules.listen.kicker}</p>
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
                href={`${hrefHub}/lernen/hoeren`}
                className="mt-3 inline-block border-b border-line pb-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
              >
                {copy.learn.nav} →
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-2 border-y border-line py-4">
                <button
                  type="button"
                  onClick={() => (speaking ? stop() : speak(exam.transcript))}
                  className="bg-violet px-4 py-2 text-xs font-medium text-ink-card transition-colors hover:bg-violet/90"
                >
                  {speaking ? copy.modules.listen.pause : copy.modules.listen.play}
                </button>
                <button
                  type="button"
                  onClick={stop}
                  className="border border-line px-3 py-2 text-xs text-mute transition-colors hover:border-violet hover:text-violet"
                >
                  {copy.modules.listen.stop}
                </button>
                <label className="ml-auto flex items-center gap-2 font-mono text-[0.6rem] text-mute uppercase">
                  {copy.modules.listen.speed}
                  <select
                    value={speed}
                    onChange={(event) => setSpeed(Number(event.target.value))}
                    className="border border-line bg-ink-card px-2 py-1 font-mono text-[0.65rem] text-chalk"
                  >
                    <option value={0.85}>0.85×</option>
                    <option value={1}>1×</option>
                    <option value={1.15}>1.15×</option>
                  </select>
                </label>
              </div>

              <p className="mt-4 font-display text-[0.78rem] leading-relaxed text-mute">
                {copy.modules.listen.audioNote}
              </p>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setTranscript((value) => !value)}
                  className="border-b border-line pb-0.5 font-mono text-[0.58rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
                >
                  {transcript ? copy.modules.listen.hideTranscript : copy.modules.listen.transcript}
                </button>

                {transcript ? (
                  <div className="mt-3 space-y-3 border-l-2 border-line pl-4">
                    {exam.transcript.map((paragraph, index) => (
                      <div key={index}>
                        <p className="font-display text-[0.86rem] leading-relaxed text-chalk/90">
                          {paragraph}
                        </p>
                        <button
                          type="button"
                          onClick={() => speak([paragraph])}
                          className="mt-1 font-mono text-[0.52rem] tracking-[0.12em] text-cyan uppercase hover:text-violet"
                        >
                          ↻ {copy.modules.listen.replay}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </aside>

          <section className="space-y-3">
            <div className="border-l-2 border-violet bg-ink-card/70 px-4 py-3">
              <p className="dsh-margin-note">{exam.topic} · {exam.maxPoints} P</p>
              <p className="mt-1 font-display text-[0.95rem] leading-relaxed text-mute">
                {copy.modules.listen.lead}
              </p>
            </div>

            {exam.questions.map((question) => (
              <article key={question.id} className="panel p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="grid size-7 shrink-0 place-items-center border border-violet/40 font-mono text-[0.62rem] text-violet">
                    {question.number}
                  </span>
                  <p className="min-w-0 flex-1 font-display text-[0.94rem] leading-relaxed text-chalk">
                    {question.prompt}
                  </p>
                  <span className="shrink-0 border border-line px-2 py-0.5 font-mono text-[0.58rem] text-mute">
                    {question.points} P
                  </span>
                </div>
                {question.hint ? (
                  <p className="mt-2 pl-10 font-mono text-[0.55rem] text-mute">{question.hint}</p>
                ) : null}

                {question.kind === "choice" ? (
                  <div className="mt-4 space-y-2 pl-0 sm:pl-10">
                    {question.options?.map((option) => {
                      const active = answers[question.id] === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() =>
                            setAnswers((current) => ({ ...current, [question.id]: active ? "" : option.id }))
                          }
                          className={cn(
                            "flex w-full items-start gap-3 border px-3 py-2.5 text-left text-[0.82rem] leading-relaxed transition-colors",
                            active
                              ? "border-violet bg-violet/[0.06] text-chalk"
                              : "border-line text-mute hover:border-violet/60 hover:text-chalk",
                          )}
                        >
                          <span className="font-mono text-[0.65rem] text-violet uppercase">
                            {option.id}
                          </span>
                          {option.text}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <label className="mt-4 block">
                    <span className="sr-only">{copy.modules.listen.open}</span>
                    <textarea
                      value={answers[question.id] ?? ""}
                      onChange={(event) =>
                        setAnswers((current) => ({ ...current, [question.id]: event.target.value }))
                      }
                      rows={3}
                      placeholder={copy.modules.listen.open}
                      className="w-full resize-y border border-line bg-ink px-3 py-2.5 font-display text-[0.9rem] leading-relaxed text-chalk placeholder:text-mute focus:border-violet focus:outline-none"
                    />
                  </label>
                )}
              </article>
            ))}
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
