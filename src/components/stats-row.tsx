"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

import type { ProfileStats } from "@/lib/types";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const reduce = useReducedMotion();

  const count = useMotionValue(0);
  const label = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, { duration: 1.3, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{label}</motion.span>
      {suffix}
    </span>
  );
}

const ITEMS: { key: keyof ProfileStats; label: string; suffix?: string }[] = [
  { key: "repos", label: "Dépôts publics" },
  { key: "stars", label: "Étoiles" },
  { key: "languages", label: "Langages" },
  { key: "years", label: "Années de pratique", suffix: "+" },
];

export function StatsRow({ stats }: { stats: ProfileStats }) {
  return (
    <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-line/70 pt-6 sm:grid-cols-4">
      {ITEMS.map((item) => (
        <div key={item.key} className="flex flex-col-reverse gap-1">
          <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-mute/80 uppercase">
            {item.label}
          </dt>
          <dd className="text-2xl font-medium tracking-tight text-chalk">
            <Counter value={stats[item.key]} suffix={item.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
