"use client";

import { useMemo, useRef, useState } from "react";

import type { DshCopy } from "@/lib/dsh/copy";
import { drillCategories, type DshDrill } from "@/lib/dsh/drills";
import { compareRewrite } from "@/lib/dsh/scoring";
import { loadDrillStats, saveDrillStats } from "@/lib/dsh/storage";
import type { DshStructureType } from "@/lib/dsh/types";
import { cn } from "@/lib/utils";

type Outcome = "correct" | "partial" | "wrong";

export function StructureTrainer({
  drills,
  copy,
}: {
  drills: DshDrill[];
  copy: DshCopy;
}) {
  const [category, setCategory] = useState<DshStructureType | "all">("all");
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(
    () => (category === "all" ? drills : drills.filter((drill) => drill.type === category)),
    [category, drills],
  );

  const current = filtered[index];

  function choose(next: DshStructureType | "all") {
    setCategory(next);
    setIndex(0);
    setValue("");
    setOutcome(null);
    setRevealed(false);
    setDone(false);
  }

  function check() {
    if (!current) return;
    if (!value.trim()) return;
    const quality = compareRewrite(value, current.solutions);
    const next: Outcome = quality >= 1 ? "correct" : quality >= 0.7 ? "partial" : "wrong";
    setOutcome(next);
    setRevealed(true);
    if (next === "correct") {
      setStreak((value) => value + 1);
    } else {
      setStreak(0);
    }
    const stats = loadDrillStats();
    saveDrillStats({
      answered: stats.answered + 1,
      correct: stats.correct + (next === "correct" ? 1 : 0),
    });
  }

  function reveal() {
    setRevealed(true);
    setOutcome(null);
    setStreak(0);
  }

  function next() {
    if (index + 1 >= filtered.length) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setValue("");
    setOutcome(null);
    setRevealed(false);
    window.setTimeout(() => inputRef.current?.focus(), 30);
  }

  function restart() {
    setIndex(0);
    setValue("");
    setOutcome(null);
    setRevealed(false);
    setDone(false);
    window.setTimeout(() => inputRef.current?.focus(), 30);
  }

  return (
    <div className="pb-24">
      <div className="shell pt-12 sm:pt-16">
        <p className="dsh-margin-note">
          {copy.drills.kicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.03em]">
          {copy.drills.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-mute">{copy.drills.lead}</p>
      </div>

      <div className="shell mt-9">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => choose("all")}
            aria-pressed={category === "all"}
            className={cn(
              "rounded-full border px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase transition-colors",
              category === "all"
                ? "border-violet bg-violet text-ink-card"
                : "border-line text-mute hover:border-mute/60 hover:text-chalk",
            )}
          >
            {copy.drills.all} · {drills.length}
          </button>
          {drillCategories.map((entry) => (
            <button
              key={entry.type}
              type="button"
              onClick={() => choose(entry.type)}
              aria-pressed={category === entry.type}
              className={cn(
                "rounded-full border px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase transition-colors",
                category === entry.type
                  ? "border-cyan/60 bg-cyan/15 text-cyan"
                  : "border-line text-mute hover:border-mute/60 hover:text-chalk",
              )}
            >
              {copy.types[entry.type]} · {entry.count}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between font-mono text-[0.58rem] tracking-[0.14em] text-mute/85 uppercase">
          <span>
            {done ? filtered.length : index + 1} / {filtered.length}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-mute/80">{copy.drills.streak}</span>
            <span className={streak > 0 ? "text-lime" : "text-mute"}>{streak}</span>
            <span aria-hidden="true" className={cn("h-1.5 w-1.5", streak > 0 ? "bg-violet" : "bg-line")} />
          </span>
        </div>

        {done || !current ? (
          <div className="panel mt-5 rounded-3xl p-8 text-center">
            <p className="font-mono text-[0.6rem] tracking-[0.18em] text-lime uppercase">
              {copy.drills.done}
            </p>
            <p className="mt-3 font-mono text-[2rem] text-chalk tabular-nums">
              {streak} <span className="text-sm text-mute">· {copy.drills.streak}</span>
            </p>
            <button
              type="button"
              onClick={restart}
              className="mt-6 bg-violet px-5 py-2.5 text-sm font-medium text-ink-card transition-colors hover:bg-violet/90"
            >
              {copy.drills.restart}
            </button>
          </div>
        ) : (
          <article className="panel mt-5 overflow-hidden rounded-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/70 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-cyan uppercase">
                  {copy.types[current.type]}
                </span>
                <span className="font-mono text-[0.55rem] tracking-[0.12em] text-mute/85 uppercase">
                  {current.level}
                </span>
              </div>
              <span className="font-mono text-[0.55rem] tracking-[0.12em] text-mute/85 uppercase">
                {copy.drills.rule} ↓
              </span>
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-[0.8rem] leading-relaxed text-mute">{current.prompt}</p>

              <blockquote className="mt-4 rounded-xl border-l-2 border-violet/60 bg-ink-soft/40 px-4 py-3 text-[0.95rem] leading-relaxed text-chalk/90">
                <Highlighted text={current.source} highlight={current.highlight} />
              </blockquote>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (revealed) next();
                  else check();
                }}
              >
                <p className="mt-5 text-[0.9rem] leading-[2] text-mute">
                  <span>{current.template.before}</span>
                  <span className="mx-1 inline-block min-w-[7rem] border-b border-dashed border-cyan/50 align-middle">
                    &nbsp;
                  </span>
                  <span>{current.template.after}</span>
                </p>

                <input
                  ref={inputRef}
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                    if (revealed) {
                      setRevealed(false);
                      setOutcome(null);
                    }
                  }}
                  disabled={revealed}
                  aria-label={copy.drills.yourAnswer}
                  placeholder={copy.drills.yourAnswer}
                  autoComplete="off"
                  spellCheck={false}
                  className={cn(
                    "mt-3 w-full rounded-xl border bg-ink px-3.5 py-3 font-mono text-[0.85rem] text-chalk transition-colors placeholder:text-mute/85 focus:outline-none",
                    revealed
                      ? outcome === "correct"
                        ? "border-lime/60"
                        : outcome === "partial"
                          ? "border-amber-300/60"
                          : "border-amber-500/50"
                      : "border-line focus:border-cyan/60",
                  )}
                />

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {!revealed ? (
                    <>
                      <button
                        type="submit"
                        className="bg-violet px-4 py-2 text-xs font-medium text-ink-card transition-colors hover:bg-violet/90"
                      >
                        {copy.drills.check}
                      </button>
                      <button
                        type="button"
                        onClick={reveal}
                        className="border border-line px-4 py-2 text-xs text-mute transition-colors hover:border-violet hover:text-violet"
                      >
                        {copy.drills.show}
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="bg-violet px-4 py-2 text-xs font-medium text-ink-card transition-colors hover:bg-violet/90"
                      >
                        {copy.drills.next}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setRevealed(false);
                          setOutcome(null);
                          setValue("");
                          window.setTimeout(() => inputRef.current?.focus(), 30);
                        }}
                        className="border border-line px-4 py-2 text-xs text-mute transition-colors hover:border-violet hover:text-violet"
                      >
                        {copy.drills.again}
                      </button>
                    </>
                  )}
                </div>
              </form>

              {revealed ? (
                <div
                  className={cn(
                    "mt-5 rounded-2xl border p-4",
                    outcome === "correct"
                      ? "border-lime/30 bg-lime/[0.04]"
                      : outcome === "partial"
                        ? "border-amber-300/30 bg-amber-300/[0.04]"
                        : "border-line bg-ink-soft/40",
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-[0.6rem] tracking-[0.16em] uppercase",
                      outcome === "correct"
                        ? "text-lime"
                        : outcome === "partial"
                          ? "text-amber-300"
                          : "text-mute",
                    )}
                  >
                    {outcome === "correct"
                      ? copy.drills.correct
                      : outcome === "partial"
                        ? copy.drills.partial
                        : copy.drills.wrong}
                  </p>

                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="font-mono text-[0.52rem] tracking-[0.14em] text-mute uppercase">
                        {copy.drills.solution}
                      </p>
                      <p className="mt-1 text-[0.85rem] leading-relaxed text-chalk">
                        {current.modelAnswer}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.52rem] tracking-[0.14em] text-mute uppercase">
                        {copy.drills.rule}
                      </p>
                      <p className="mt-1 text-[0.78rem] leading-relaxed text-mute">
                        {current.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

function Highlighted({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) return <>{text}</>;
  const index = text.indexOf(highlight);
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded-[2px] bg-violet/20 px-0.5 text-chalk underline decoration-violet/50 decoration-dotted underline-offset-4">
        {highlight}
      </mark>
      {text.slice(index + highlight.length)}
    </>
  );
}
