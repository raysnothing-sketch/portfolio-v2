"use client";

import { useMemo, useState } from "react";

import type { DshTextLine } from "@/lib/dsh/texts";
import { cn } from "@/lib/utils";

type MarkColor = "yellow" | "green" | "blue";

/** Trois feutres de correcteur, pas des néons. */
const MARK_STYLES: Record<MarkColor, { row: string; dot: string }> = {
  yellow: {
    row: "bg-[#e8c35a]/25 shadow-[inset_2px_0_0_0_#a86b12]",
    dot: "bg-[#a86b12]",
  },
  green: {
    row: "bg-[#8ba26a]/25 shadow-[inset_2px_0_0_0_#4c6d43]",
    dot: "bg-[#4c6d43]",
  },
  blue: {
    row: "bg-[#7fa8b5]/25 shadow-[inset_2px_0_0_0_#1c5c70]",
    dot: "bg-[#1c5c70]",
  },
};

const MARK_LABEL: Record<MarkColor, string> = {
  yellow: "Gelb",
  green: "Grün",
  blue: "Blau",
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function ReadingPane({
  lines,
  storageKey,
  searchLabel,
  markLabel,
  resetLabel,
}: {
  lines: DshTextLine[];
  storageKey: string;
  searchLabel: string;
  markLabel: string;
  resetLabel: string;
}) {
  const [query, setQuery] = useState("");
  const [color, setColor] = useState<MarkColor>("yellow");
  const [marks, setMarks] = useState<Record<string, MarkColor>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as Record<string, MarkColor>) : {};
    } catch {
      return {};
    }
  });

  const numbered = useMemo(
    () =>
      lines.map((line, index) => {
        if (!line.t) return { ...line, index, lineNumber: null as number | null };
        return {
          ...line,
          index,
          lineNumber: lines.slice(0, index + 1).filter((entry) => entry.t).length,
        };
      }),
    [lines],
  );

  const matcher = useMemo(() => {
    const term = query.trim();
    if (term.length < 2) return null;
    return new RegExp(`(${escapeRegExp(term)})`, "gi");
  }, [query]);

  const matchCount = useMemo(() => {
    if (!matcher) return 0;
    return numbered.reduce((total, line) => {
      if (!line.t) return total;
      const matches = line.t.match(matcher);
      return total + (matches ? matches.length : 0);
    }, 0);
  }, [matcher, numbered]);

  function persist(next: Record<string, MarkColor>) {
    setMarks(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      /* quota */
    }
  }

  function toggle(lineNumber: number) {
    if (!lineNumber) return;
    const key = String(lineNumber);
    const next = { ...marks };
    if (next[key] === color) delete next[key];
    else next[key] = color;
    persist(next);
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-wrap items-center gap-3 border-b border-line bg-ink-card/70 px-4 py-3">
        <label className="relative flex min-w-0 flex-1 items-center">
          <span className="sr-only">{searchLabel}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-mute"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="8.5" cy="8.5" r="5" />
            <path d="m12.5 12.5 4 4" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchLabel}
            className="h-9 w-full border border-line bg-ink pl-8 pr-3 font-mono text-[0.7rem] text-chalk placeholder:text-mute/80 focus:border-violet focus:outline-none"
          />
          {query.trim().length >= 2 ? (
            <span className="absolute right-2.5 font-mono text-[0.6rem] text-violet tabular-nums">
              {matchCount}
            </span>
          ) : null}
        </label>

        <div className="flex items-center gap-2">
          <span className="mr-1 hidden font-mono text-[0.52rem] tracking-[0.16em] text-mute uppercase sm:inline">
            {markLabel}
          </span>
          {(["yellow", "green", "blue"] as MarkColor[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setColor(value)}
              aria-label={MARK_LABEL[value]}
              aria-pressed={color === value}
              className={cn(
                "h-5 w-5 border transition",
                MARK_STYLES[value].dot,
                color === value
                  ? "border-chalk/80 ring-1 ring-chalk/30"
                  : "border-transparent opacity-60 hover:opacity-100",
              )}
            />
          ))}
          <button
            type="button"
            onClick={() => persist({})}
            className="ml-1 border-b border-line pb-0.5 font-mono text-[0.55rem] tracking-[0.1em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
          >
            {resetLabel}
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-7">
        <div className="relative mx-auto max-w-[46rem] border-l-2 border-violet/25 pl-4 sm:pl-6">
          <span
            aria-hidden="true"
            className="absolute -top-1 -left-[3px] h-4 w-1 bg-violet/50"
          />
          {numbered.map((line) =>
            line.t ? (
              <div
                key={line.index}
                className={cn(
                  "group flex gap-3 pr-2 transition-colors",
                  line.lineNumber && marks[String(line.lineNumber)]
                    ? MARK_STYLES[marks[String(line.lineNumber)]].row
                    : "hover:bg-black/[0.025]",
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(line.lineNumber ?? 0)}
                  aria-label={`Zeile ${line.lineNumber} ${marks[String(line.lineNumber)] ? "Markierung entfernen" : "markieren"}`}
                  aria-pressed={Boolean(line.lineNumber && marks[String(line.lineNumber)])}
                  className={cn(
                    "w-7 shrink-0 pt-[0.3rem] text-right font-mono text-[0.58rem] tabular-nums transition-colors",
                    line.lineNumber && line.lineNumber % 5 === 0
                      ? "text-violet/70 group-hover:text-violet"
                      : "text-transparent group-hover:text-mute/85",
                  )}
                >
                  {line.lineNumber && line.lineNumber % 5 === 0 ? line.lineNumber : "·"}
                </button>
                <p className="min-w-0 flex-1 py-[0.14rem] font-display text-[1.02rem] leading-[1.9] text-chalk/95">
                  {matcher
                    ? line.t.split(matcher).map((chunk, chunkIndex) =>
                        chunkIndex % 2 === 1 ? (
                          <mark
                            key={`${line.index}-${chunkIndex}`}
                            className="bg-amber-300/35 px-0.5 text-chalk"
                          >
                            {chunk}
                          </mark>
                        ) : (
                          <span key={`${line.index}-${chunkIndex}`}>{chunk}</span>
                        ),
                      )
                    : line.t}
                </p>
              </div>
            ) : (
              <div key={`gap-${line.index}`} aria-hidden="true" className="h-6" />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
