"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Dictionary } from "@/lib/i18n";
import type { CategoryKey, Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const ALL = "all" as const;

export function ProjectExplorer({
  projects,
  labels,
}: {
  projects: Project[];
  labels: Dictionary["projects"];
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<CategoryKey | typeof ALL>(ALL);

  const counts = useMemo(() => {
    const map = new Map<CategoryKey, number>();
    for (const project of projects) {
      map.set(project.category, (map.get(project.category) ?? 0) + 1);
    }
    return map;
  }, [projects]);

  const tabs = useMemo(
    () => [
      { key: ALL, label: labels.all, count: projects.length },
      ...Array.from(counts.entries()).map(([key, count]) => ({
        key,
        label: labels.categories[key],
        count,
      })),
    ],
    [counts, labels, projects.length],
  );

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((project) => project.category === active)),
    [active, projects],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={labels.title}>
        {tabs.map((tab) => {
          const selected = tab.key === active;

          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.key)}
              className={cn(
                "relative rounded-full border px-3.5 py-1.5 text-xs transition-colors",
                selected
                  ? "border-violet/60 bg-violet/12 text-chalk"
                  : "border-line/80 bg-ink-card/40 text-mute hover:border-line hover:text-chalk",
              )}
            >
              {tab.label}
              <span className="ml-2 font-mono text-[0.6rem] text-mute/70 tabular-nums">
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout={!reduce} className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} index={index} labels={labels} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 rounded-xl border border-dashed border-line p-8 text-center text-sm text-mute">
          {labels.empty}
        </p>
      )}
    </div>
  );
}
