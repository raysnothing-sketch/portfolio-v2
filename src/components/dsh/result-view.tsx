"use client";

import Link from "next/link";

import type { DshCopy } from "@/lib/dsh/copy";
import { levelTone } from "@/lib/dsh";
import type { DshAnswers, DshEvaluation, QuestionResult } from "@/lib/dsh/scoring";
import type { DshQuestion, DshSimulation } from "@/lib/dsh/types";
import { cn } from "@/lib/utils";

export type AiState = "idle" | "loading" | "done" | "unconfigured" | "error";

function percentOf(result: { points: number; max: number }) {
  return result.max === 0 ? 0 : Math.round((result.points / result.max) * 100);
}

export function ResultView({
  simulation,
  answers,
  evaluation,
  copy,
  aiState,
  aiMessage,
  onRequestAi,
  onRestart,
  hrefHub,
}: {
  simulation: DshSimulation;
  answers: DshAnswers;
  evaluation: DshEvaluation;
  copy: DshCopy;
  aiState: AiState;
  aiMessage: string | null;
  onRequestAi: () => void;
  onRestart: () => void;
  hrefHub: string;
}) {
  const tone = levelTone(evaluation.total.level);
  const level = copy.levels[evaluation.total.level];

  return (
    <div className="pb-24">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div className="panel relative overflow-hidden p-6">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-violet" />
          <p className="dsh-margin-note">{copy.sim.total}</p>
          <div className="mt-4 flex items-center gap-5">
            <ScoreRing percent={percentOf(evaluation.total)} color={tone.ring} />
            <div className="min-w-0">
              <p className="font-display text-[2.2rem] leading-none text-chalk tabular-nums">
                {evaluation.total.points}
                <span className="text-base text-mute"> / {evaluation.total.max}</span>
              </p>
              <p className={cn("mt-2 font-mono text-sm tracking-[0.14em] uppercase", tone.text)}>
                {level.label}
              </p>
              <p className="mt-1 font-mono text-[0.6rem] text-mute">
                {evaluation.total.percent.toFixed(1)} %
              </p>
            </div>
          </div>
          <p className="mt-4 text-[0.78rem] leading-relaxed text-mute">{level.note}</p>
        </div>

        <PartCard
          label={copy.sim.leseverstehen}
          score={evaluation.leseverstehen}
          accent="bg-violet"
        />
        <PartCard label={copy.sim.strukturen} score={evaluation.strukturen} accent="bg-cyan" />
      </div>

      <div className="mt-4 flex flex-col gap-3 border border-line bg-ink-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="dsh-margin-note">{copy.sim.aiRequest}</p>
          <p className="mt-1 max-w-2xl text-[0.78rem] leading-relaxed text-mute">
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
            {aiState === "loading" ? (
              <>
                <span className="size-3 animate-spin rounded-full border border-mute/40 border-t-chalk" />
                {copy.sim.aiLoading}
              </>
            ) : (
              copy.sim.aiRequest
            )}
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="border border-line px-4 py-2.5 text-xs text-chalk transition-colors hover:border-violet hover:text-violet"
          >
            {copy.sim.restart}
          </button>
        </div>
      </div>

      <section className="mt-10">
        <ResultSectionTitle
          index="01"
          title={copy.sim.leseverstehen}
          points={evaluation.leseverstehen}
        />
        <div className="mt-5 space-y-3">
          {simulation.leseverstehen.map((question) => {
            const result = evaluation.results[question.id];
            if (!result) return null;
            const answer =
              question.kind === "open" ? answers[question.id] ?? "" : undefined;
            return (
              <ResultCard
                key={question.id}
                number={question.number}
                prompt={question.kind === "vocab" || question.kind === "truefalse" || question.kind === "open" ? question.prompt : ""}
                result={result}
                copy={copy}
              >
                {question.kind === "open" ? (
                  <OpenDetail
                    question={question}
                    result={result}
                    answer={answer ?? ""}
                    copy={copy}
                  />
                ) : question.kind === "vocab" ? (
                  <div className="space-y-2">
                    {result.items?.map((item) => {
                      const source = question.items.find((entry) => entry.id === item.id);
                      return (
                        <div
                          key={item.id}
                          className="flex flex-col gap-1 rounded-xl border border-line/60 bg-ink-soft/50 px-3 py-2 sm:flex-row sm:items-baseline sm:justify-between"
                        >
                          <p className="min-w-0 text-[0.78rem] text-mute">
                            {source?.prompt ?? item.id}
                          </p>
                          <p className="flex shrink-0 items-center gap-2 font-mono text-[0.72rem]">
                            <span className={item.achieved ? "text-lime" : "text-mute"}>
                              {item.given || "—"}
                            </span>
                            <span aria-hidden="true" className="text-mute/85">
                              →
                            </span>
                            <span className="text-chalk">{item.expected}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {question.statements.map((statement) => {
                      const item = result.items?.find((entry) => entry.id === statement.id);
                      const given =
                        item?.given === "true"
                          ? copy.sim.correct
                          : item?.given === "false"
                            ? copy.sim.incorrect
                            : item?.given || "—";
                      return (
                        <div
                          key={statement.id}
                          className="rounded-xl border border-line/60 bg-ink-soft/50 px-3 py-2"
                        >
                          <div className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className={cn(
                                "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[0.55rem]",
                                item?.achieved
                                  ? "bg-lime/15 text-lime"
                                  : "bg-mute/10 text-mute",
                              )}
                            >
                              {item?.achieved ? "✓" : "✕"}
                            </span>
                            <p className="min-w-0 flex-1 text-[0.8rem] leading-relaxed text-chalk/85">
                              {statement.text}
                            </p>
                          </div>
                          <p className="mt-1.5 pl-6 font-mono text-[0.62rem] text-mute">
                            {copy.sim.yourAnswer}: {given} · {copy.sim.solution}:{" "}
                            <span className="text-chalk">
                              {statement.correct ? copy.sim.correct : copy.sim.incorrect}
                            </span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </ResultCard>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <ResultSectionTitle index="02" title={copy.sim.strukturen} points={evaluation.strukturen} />
        <div className="mt-5 space-y-3">
          {simulation.strukturen.map((task) => {
            const result = evaluation.results[task.id];
            if (!result) return null;
            return (
              <ResultCard
                key={task.id}
                number={task.label}
                prompt={task.prompt}
                result={result}
                copy={copy}
              >
                <div className="space-y-3">
                  {result.met.length > 0 ? (
                    <CriteriaList result={result} copy={copy} />
                  ) : null}
                  <div className="rounded-xl border border-line/60 bg-ink-soft/50 p-3">
                    <p className="font-mono text-[0.55rem] tracking-[0.16em] text-mute uppercase">
                      {copy.sim.yourAnswer}
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed whitespace-pre-wrap text-chalk/85">
                      {answers[task.id]?.trim() || copy.sim.empty}
                    </p>
                  </div>
                  <div className="rounded-xl border border-lime/20 bg-lime/[0.04] p-3">
                    <p className="font-mono text-[0.55rem] tracking-[0.16em] text-lime/80 uppercase">
                      {copy.sim.model}
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-chalk/90">
                      {task.modelAnswer}
                    </p>
                  </div>
                  <p className="text-[0.75rem] leading-relaxed text-mute">{task.explanation}</p>
                </div>
              </ResultCard>
            );
          })}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="bg-violet px-5 py-3 text-sm font-medium text-ink-card transition-colors hover:bg-violet/90"
        >
          {copy.sim.restart}
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

function ScoreRing({ percent, color }: { percent: number; color: string }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, percent)) / 100) * circumference;
  return (
    <svg viewBox="0 0 72 72" className="size-20 shrink-0" aria-hidden="true">
      <circle cx="36" cy="36" r={radius} fill="none" stroke="currentColor" className="text-line" strokeWidth="5" />
      <circle
        cx="36"
        cy="36"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 36 36)"
        style={{ transition: "stroke-dashoffset 700ms ease" }}
      />
    </svg>
  );
}

function PartCard({
  label,
  score,
  accent,
}: {
  label: string;
  score: { points: number; max: number };
  accent: string;
}) {
  return (
    <div className="panel rounded-2xl p-6">
      <p className="font-mono text-[0.6rem] tracking-[0.2em] text-mute uppercase">{label}</p>
      <p className="mt-4 font-mono text-[1.9rem] leading-none text-chalk tabular-nums">
        {score.points}
        <span className="text-base text-mute"> / {score.max}</span>
      </p>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-soft">
        <div
          className={cn("h-full rounded-full", accent)}
          style={{ width: `${percentOf(score)}%` }}
        />
      </div>
      <p className="mt-2 font-mono text-[0.6rem] text-mute">{percentOf(score)} %</p>
    </div>
  );
}

function ResultSectionTitle({
  index,
  title,
  points,
}: {
  index: string;
  title: string;
  points: { points: number; max: number };
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
      <h2 className="flex items-baseline gap-3 text-lg font-medium">
        <span className="font-mono text-[0.65rem] text-violet">{index}</span>
        {title}
      </h2>
      <span className="font-mono text-[0.7rem] text-mute tabular-nums">
        {points.points} / {points.max}
      </span>
    </div>
  );
}

function ResultCard({
  number,
  prompt,
  result,
  copy,
  children,
}: {
  number: string;
  prompt: string;
  result: QuestionResult;
  copy: DshCopy;
  children: React.ReactNode;
}) {
  const ratio = result.max === 0 ? 0 : result.points / result.max;
  return (
    <details className="group panel overflow-hidden rounded-2xl">
      <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
        <span
          className={cn(
            "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full font-mono text-[0.65rem]",
            ratio >= 0.99
              ? "bg-lime/15 text-lime"
              : ratio > 0
                ? "bg-cyan/15 text-cyan"
                : "bg-mute/10 text-mute",
          )}
        >
          {number}
        </span>
        <span className="min-w-0 flex-1">
          <span className="line-clamp-2 block text-[0.82rem] leading-relaxed text-chalk/85">
            {prompt}
          </span>
          <span className="mt-1 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[0.62rem] text-mute tabular-nums">
              {result.points} / {result.max}
            </span>
            <span className="font-mono text-[0.55rem] tracking-[0.12em] text-mute/80 uppercase">
              {result.source === "ai" ? "KI" : "auto"}
            </span>
            {result.copy !== undefined && result.copy >= 0.4 ? (
              <span className="rounded-full border border-amber-300/40 px-2 py-0.5 font-mono text-[0.55rem] text-amber-300">
                {copy.sim.copyWarn}
              </span>
            ) : null}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="mt-1 font-mono text-[0.7rem] text-mute transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="border-t border-line/70 px-4 py-4">{children}</div>
    </details>
  );
}

function CriteriaList({ result, copy }: { result: QuestionResult; copy: DshCopy }) {
  return (
    <div>
      <p className="font-mono text-[0.55rem] tracking-[0.16em] text-mute uppercase">
        {copy.sim.criteria}
      </p>
      <ul className="mt-2 space-y-1.5">
        {result.met.map((criterion) => (
          <li key={criterion.id} className="flex items-start gap-2 text-[0.78rem] leading-relaxed">
            <span
              aria-hidden="true"
              className={cn(
                "mt-1 size-1.5 shrink-0 rounded-full",
                criterion.achieved ? "bg-lime" : "bg-mute/40",
              )}
            />
            <span className={criterion.achieved ? "text-chalk/85" : "text-mute"}>
              {criterion.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OpenDetail({
  question,
  result,
  answer,
  copy,
}: {
  question: Extract<DshQuestion, { kind: "open" }>;
  result: QuestionResult;
  answer: string;
  copy: DshCopy;
}) {
  return (
    <div className="space-y-3">
      {result.feedback ? (
        <p
          className={cn(
            "rounded-xl border px-3 py-2 text-[0.78rem] leading-relaxed",
            result.copy !== undefined && result.copy >= 0.4
              ? "border-amber-300/30 bg-amber-300/5 text-amber-200"
              : "border-cyan/20 bg-cyan/[0.04] text-chalk/85",
          )}
        >
          {result.feedback}
        </p>
      ) : null}

      <div className="rounded-xl border border-line/60 bg-ink-soft/50 p-3">
        <p className="font-mono text-[0.55rem] tracking-[0.16em] text-mute uppercase">
          {copy.sim.yourAnswer}
        </p>
        <p className="mt-1 text-[0.82rem] leading-relaxed whitespace-pre-wrap text-chalk/85">
          {answer.trim() || copy.sim.empty}
        </p>
      </div>

      <CriteriaList result={result} copy={copy} />

      <div className="rounded-xl border border-lime/20 bg-lime/[0.04] p-3">
        <p className="font-mono text-[0.55rem] tracking-[0.16em] text-lime/80 uppercase">
          {copy.sim.model}
        </p>
        <p className="mt-1 text-[0.82rem] leading-relaxed text-chalk/90">{question.sampleAnswer}</p>
      </div>
    </div>
  );
}
