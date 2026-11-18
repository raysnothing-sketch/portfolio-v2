"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { PointerEvent } from "react";

import { ArrowIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const ACCENT_DOT: Record<Project["accent"], string> = {
  violet: "bg-violet",
  cyan: "bg-cyan",
  lime: "bg-lime",
};

const ACCENT_GLOW: Record<Project["accent"], string> = {
  violet: "rgba(124, 92, 255, 0.22)",
  cyan: "rgba(34, 211, 238, 0.18)",
  lime: "rgba(182, 243, 107, 0.16)",
};

export function ProjectCard({
  project,
  index,
  labels,
}: {
  project: Project;
  index: number;
  labels: Dictionary["projects"];
}) {
  const reduce = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 180, damping: 20, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 20, mass: 0.4 });
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(340px circle at ${pointerX}% ${pointerY}%, ${ACCENT_GLOW[project.accent]}, transparent 68%)`;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointerX.set(x * 100);
    pointerY.set(y * 100);
    rotateY.set((x - 0.5) * 9);
    rotateX.set(-(y - 0.5) * 7);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    pointerX.set(50);
    pointerY.set(50);
  }

  return (
    <motion.article
      layout
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/90 bg-ink-card/60 p-6 transition-colors duration-300 hover:border-violet/40 sm:p-7"
    >
      <motion.span
        aria-hidden="true"
        style={{ backgroundImage: glow }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.18em] text-mute uppercase">
          <span className={cn("size-1.5 rounded-full", ACCENT_DOT[project.accent])} />
          {labels.categories[project.category]}
        </div>
        <span className="font-mono text-[0.62rem] text-mute/60 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-5 text-xl font-medium tracking-tight text-chalk sm:text-[1.35rem]">
        {project.title}
      </h3>

      <p className="relative mt-2.5 line-clamp-3 text-sm leading-relaxed text-mute">
        {project.tagline}
      </p>

      {project.stack.length > 0 && (
        <ul className="relative mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line/80 bg-ink/60 px-2 py-1 font-mono text-[0.62rem] text-mute/90"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-auto flex items-end justify-between gap-4 pt-6">
        <div className="flex items-center gap-3 font-mono text-[0.62rem] text-mute/70">
          {project.year && <span>{project.year}</span>}
          {project.stars > 0 && (
            <span aria-label={`${project.stars} ${labels.starsUnit}`}>★ {project.stars}</span>
          )}
          {project.featured && <span className="text-lime">{labels.featured}</span>}
        </div>

        <div className="flex items-center gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-line px-3 py-1.5 text-[0.7rem] text-mute transition-colors hover:border-chalk/40 hover:text-chalk"
            >
              {labels.code}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-center gap-1.5 rounded-full bg-chalk/95 px-3 py-1.5 text-[0.7rem] font-medium text-ink transition-colors hover:bg-white"
            >
              {labels.view}
              <ArrowIcon className="size-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
