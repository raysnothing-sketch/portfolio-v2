"use client";

import Link from "next/link";

import type { DshCopy } from "@/lib/dsh/copy";
import { levelTone } from "@/lib/dsh";
import { levelFromPoints, type ModuleTaskResult } from "@/lib/dsh/module-scoring";
import { cn } from "@/lib/utils";

export type ModuleAiState = "idle" | "loading" | "done" | "unconfigured" | "error";

export type FeedbackDetail = {
  id: string;
  number: string;
  prompt: string;
  answer: string;
  reference: string;
};

export function ModuleFeedback({
  copy,
  results,
  maxPoints,
  details,
  aiState,
  aiMessage,
  onRequestAi,
  onRestart,
  hrefHub,
}: {
  copy: DshCopy;
  results: ModuleTaskResult[];
  maxPoints: number;
  details: FeedbackDetail[];
  aiState: ModuleAiState;
  aiMessage: string | null;
  onRequestAi: () => void;
  onRestart: () => void;
  hrefHub: string;
}) {
  const points = Math.round(results.reduce((sum, result) => sum + result.points, 0) * 10) / 10;
  const level = levelFromPoints(points, maxPoints);
  const tone = levelTone(level.key);
  const detailById = new Map(details.map((detail) => [detail.id, detail]));

  return (
    <div className="pb-20">
      <div className="panel relative overflow-hidden p-6">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-violet" />
        <p className="dsh-margin-note">{copy.modules.common.results}</p>
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <p className="font-display text-[2.6rem] leading-none text-chalk tabular-nums">
            {points}
            <span className="text-base text-mute"> / {maxPoints}</span>
          </p>
          <div>
            <p className={cn("font-mono text-sm tracking-[0.14em] uppercase", tone.text)}>
              {copy.levels[level.key].label}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] text-mute">{level.percent} %</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 border border-line bg-ink-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="dsh-margin-note">{copy.modules.common.aiRequest}</p>
          <p className="mt-1 max-w-2xl font-display text-[0.9rem] leading-relaxed text-mute">
            {aiState === "done" ? copy.sim.aiNoteDone : copy.sim.localNote}
          </p>
          {aiMessage ? (
            <p
              className={cn(
                "mt-2 font-mono text-[0.65rem] leading-relaxed",
                aiState === "error" || aiState === "unconfigured" ? "text-amber-300" : "text-lime",
              )}
            >
              {aiMessage}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onRequestAi}
            disabled={aiState === "loading"}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium transition-colors",
              aiState === "loading"
                ? "cursor-wait bg-ink-soft text-mute"
                : "bg-violet text-ink-card hover:bg-violet/90",
            )}
          >
            {aiState === "loading" ? copy.modules.common.aiLoading : copy.modules.common.aiRequest}
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="border border-line px-4 py-2.5 text-xs text-chalk transition-colors hover:border-violet hover:text-violet"
          >
            {copy.modules.common.restart}
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {results.map((result) => {
          const detail = detailById.get(result.taskId);
          const ratio = result.max === 0 ? 0 : result.points / result.max;
          return (
            <details key={result.taskId} className="panel overflow-hidden">
              <summary className="flex cursor-pointer list-none items-start gap-3 p-4 [&::-webkit-details-marker]:hidden">
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center border font-mono text-[0.62rem]",
                    ratio >= 0.99
                      ? "border-lime/50 bg-lime/10 text-lime"
                      : ratio > 0
                        ? "border-cyan/50 bg-cyan/10 text-cyan"
                        : "border-line text-mute",
                  )}
                >
                  {detail?.number ?? result.taskId}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="line-clamp-2 block font-display text-[0.95rem] leading-relaxed text-chalk">
                    {detail?.prompt ?? result.taskId}
                  </span>
                  <span className="mt-1 block font-mono text-[0.6rem] text-mute">
                    {result.points} / {result.max} · {result.source === "ai" ? "KI" : "auto"}
                  </span>
                </span>
                <span aria-hidden="true" className="font-mono text-mute">
                  +
                </span>
              </summary>
              <div className="space-y-3 border-t border-line px-4 py-4">
                {result.criteria.length > 0 ? (
                  <div>
                    <p className="dsh-margin-note">{copy.modules.common.criteria}</p>
                    <ul className="mt-2 space-y-1.5">
                      {result.criteria.map((criterion) => (
                        <li key={criterion.id} className="flex items-start gap-2 text-[0.8rem]">
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0",
                              criterion.achieved ? "bg-lime" : "bg-line",
                            )}
                          />
                          <span className={criterion.achieved ? "text-chalk" : "text-mute"}>
                            {criterion.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {result.feedback ? (
                  <p className="border-l-2 border-cyan/60 bg-ink-soft/60 px-3 py-2 font-display text-[0.88rem] leading-relaxed text-chalk">
                    {result.feedback}
                  </p>
                ) : null}

                <div className="border border-line bg-ink-soft/40 p-3">
                  <p className="dsh-margin-note">{copy.modules.common.yourAnswer}</p>
                  <p className="mt-1 whitespace-pre-wrap text-[0.82rem] leading-relaxed text-chalk/90">
                    {detail?.answer?.trim() || "—"}
                  </p>
                </div>

                {detail?.reference ? (
                  <div className="border-l-2 border-lime/60 bg-lime/[0.05] p-3">
                    <p className="font-mono text-[0.55rem] tracking-[0.14em] text-lime uppercase">
                      {copy.modules.common.model}
                    </p>
                    <p className="mt-1 font-display text-[0.85rem] leading-relaxed text-chalk">
                      {detail.reference}
                    </p>
                  </div>
                ) : null}
              </div>
            </details>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="bg-violet px-5 py-3 text-sm font-medium text-ink-card transition-colors hover:bg-violet/90"
        >
          {copy.modules.common.restart}
        </button>
        <Link
          href={hrefHub}
          className="border border-line px-5 py-3 text-sm text-chalk transition-colors hover:border-violet hover:text-violet"
        >
          {copy.sim.toHub}
        </Link>
      </div>
    </div>
  );
}
