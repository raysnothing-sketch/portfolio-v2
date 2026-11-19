"use client";

import Link from "next/link";

import type { DshCopy } from "@/lib/dsh/copy";
import { cn } from "@/lib/utils";
import { formatClock } from "@/components/dsh/use-exam-timer";

export function ModuleHeader({
  backHref,
  kicker,
  title,
  copy,
  timer,
  answered,
  total,
  onSubmit,
  canSubmit,
  urgent,
}: {
  backHref: string;
  kicker: string;
  title: string;
  copy: DshCopy;
  timer: {
    remaining: number;
    running: boolean;
    toggle: () => void;
  };
  answered: number;
  total: number;
  onSubmit: () => void;
  canSubmit: boolean;
  urgent?: boolean;
}) {
  const progress = total === 0 ? 0 : Math.round((answered / total) * 100);
  const isUrgent = urgent ?? timer.remaining <= 10 * 60;

  return (
    <header className="sticky top-[6.4rem] z-30 border-b-2 border-line bg-ink/95 lg:top-16">
      <div className="shell flex flex-wrap items-center gap-x-4 gap-y-3 py-3">
        <Link
          href={backHref}
          className="flex items-center gap-1.5 border-b border-line pb-0.5 font-mono text-[0.58rem] tracking-[0.14em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
        >
          <span aria-hidden="true">←</span>
          {copy.modules.common.back}
        </Link>

        <div className="min-w-0 flex-1">
          <p className="dsh-margin-note truncate">{kicker}</p>
          <p className="truncate font-display text-[1.05rem] leading-tight text-chalk">{title}</p>
        </div>

        <div
          className={cn(
            "flex items-center gap-2 border px-2.5 py-1.5",
            isUrgent && timer.running
              ? "border-amber-300 bg-amber-300/10"
              : "border-line bg-ink-card",
          )}
        >
          <span
            className={cn(
              "font-mono text-[0.95rem] tabular-nums",
              isUrgent ? "text-amber-300" : "text-chalk",
            )}
          >
            {timer.remaining === 0 ? copy.modules.common.timeUp : formatClock(timer.remaining)}
          </span>
          <button
            type="button"
            onClick={timer.toggle}
            className="border border-line bg-ink-soft px-2.5 py-1 font-mono text-[0.52rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
          >
            {timer.running ? copy.sim.pause : answered > 0 ? copy.sim.resume : copy.sim.start}
          </button>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={!canSubmit}
          className={cn(
            "px-4 py-2 text-xs font-medium transition-colors",
            canSubmit
              ? "bg-violet text-ink-card hover:bg-violet/90"
              : "cursor-not-allowed bg-ink-soft text-mute/70",
          )}
        >
          {copy.modules.common.submit}
        </button>
      </div>

      <div className="h-0.5 w-full bg-line">
        <div className="h-full bg-violet transition-[width] duration-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="shell pt-1.5 pb-2 font-mono text-[0.55rem] tracking-[0.14em] text-mute uppercase">
        {answered} / {total} {copy.modules.common.answers}
      </p>
    </header>
  );
}
