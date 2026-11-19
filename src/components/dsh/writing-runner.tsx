"use client";

import { useEffect, useState } from "react";

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

export function WritingRunner({ copy, hrefHub }: { copy: DshCopy; hrefHub: string }) {
  const exam = getModule("schreiben");
  const timer = useExamTimer(exam.minutes);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(
    () => loadModuleAnswers(exam.id) ?? {},
  );
  const [lastAttempt] = useState(() => loadModuleAttempts(exam.id)[0] ?? null);
  const [outline, setOutline] = useState(true);
  const [phase, setPhase] = useState<"work" | "results">("work");
  const [results, setResults] = useState<ModuleTaskResult[]>([]);
  const [aiState, setAiState] = useState<ModuleAiState>("idle");
  const [aiMessage, setAiMessage] = useState<string | null>(null);

  const task = exam.tasks[index];
  const value = answers[task.id] ?? "";
  const words = value.trim() ? value.trim().split(/\s+/).length : 0;
  const answered = Object.values(answers).filter((entry) => entry.trim()).length;

  useEffect(() => {
    const handle = window.setTimeout(() => saveModuleAnswers(exam.id, answers), 400);
    return () => window.clearTimeout(handle);
  }, [answers, exam.id]);

  function submit() {
    if (answered === 0) return;
    if (answered < exam.tasks.length && !window.confirm(copy.modules.common.confirmIncomplete)) return;
    timer.stop();

    const next: ModuleTaskResult[] = exam.tasks.map((item) => {
      const scored = scoreText(answers[item.id] ?? "", item.sampleOutline, item.criteria);
      const lengthFactor = (answers[item.id] ?? "").trim().split(/\s+/).filter(Boolean).length >= item.minWords ? 1 : 0.7;
      const points = Math.round(scored.points * lengthFactor * 10) / 10;
      return {
        taskId: item.id,
        points,
        max: item.criteria.reduce((sum, criterion) => sum + criterion.points, 0),
        criteria: scored.criteria,
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
        body: JSON.stringify({ module: "schreiben", answers }),
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
    setIndex(0);
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
    reference: item.sampleOutline,
  }));

  return (
    <div>
      <ModuleHeader
        backHref={hrefHub}
        kicker={copy.modules.write.kicker}
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
                href={`${hrefHub}/lernen/schreiben`}
                className="mt-3 inline-block border-b border-line pb-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
              >
                {copy.learn.nav} →
              </Link>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {exam.tasks.map((item, itemIndex) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setIndex(itemIndex)}
                      className={cn(
                        "flex w-full items-baseline gap-3 py-3 text-left transition-colors",
                        index === itemIndex ? "text-violet" : "text-mute hover:text-chalk",
                      )}
                    >
                      <span className="font-mono text-[0.65rem]">{item.number}</span>
                      <span className="min-w-0 flex-1 font-display text-[0.92rem]">{item.title}</span>
                      <span className="font-mono text-[0.55rem]">
                        {answers[item.id]?.trim() ? "✓" : `${item.minWords} W`}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setOutline((current) => !current)}
                  className="border-b border-line pb-0.5 font-mono text-[0.58rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
                >
                  {outline ? copy.modules.write.hideOutline : copy.modules.write.outline}
                </button>
                {outline ? (
                  <ol className="mt-3 space-y-2 border-l-2 border-violet/30 pl-4">
                    {task.guide.map((step, stepIndex) => (
                      <li key={step} className="flex gap-2 font-display text-[0.82rem] leading-relaxed text-mute">
                        <span className="font-mono text-[0.6rem] text-violet">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </div>
          </aside>

          <section className="space-y-4">
            <article className="panel p-5 sm:p-6">
              <p className="dsh-margin-note">{task.title}</p>
              <p className="mt-3 font-display text-[1.05rem] leading-relaxed text-chalk/95">
                {task.prompt}
              </p>

              {task.material ? (
                <ul className="mt-4 grid gap-1 border-l-2 border-cyan/50 bg-ink-soft/50 px-4 py-3 sm:grid-cols-2">
                  {task.material.map((line) => (
                    <li key={line} className="font-mono text-[0.72rem] text-chalk/85">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}

              <label className="mt-5 block">
                <span className="sr-only">{copy.modules.write.draft}</span>
                <textarea
                  value={value}
                  onChange={(event) =>
                    setAnswers((current) => ({ ...current, [task.id]: event.target.value }))
                  }
                  rows={16}
                  placeholder={copy.modules.write.draft}
                  className="w-full resize-y border border-line bg-ink px-4 py-4 font-display text-[1rem] leading-[1.9] text-chalk placeholder:text-mute focus:border-violet focus:outline-none"
                />
              </label>

              <div className="mt-2 flex items-center justify-between font-mono text-[0.58rem] text-mute">
                <span>
                  {copy.modules.write.minWords} {task.minWords} {copy.modules.write.words}
                </span>
                <span className={words >= task.minWords ? "text-lime" : "text-amber-300"}>
                  {words} {copy.modules.write.words}
                </span>
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
