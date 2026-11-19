"use client";

import Link from "next/link";
import { useState } from "react";

import type { DshCopy } from "@/lib/dsh/copy";
import type { LessonArea } from "@/lib/dsh/lessons";
import { cn } from "@/lib/utils";

type Tab = "lessons" | "tips";

export function LessonView({
  area,
  copy,
  backHref,
}: {
  area: LessonArea;
  copy: DshCopy;
  backHref: string;
}) {
  const [tab, setTab] = useState<Tab>("lessons");
  const [open, setOpen] = useState<string | null>(area.lessons[0]?.id ?? null);

  return (
    <div className="pb-20">
      <div className="shell border-b border-line py-10 sm:py-14">
        <Link
          href={backHref}
          className="flex w-fit items-center gap-1.5 border-b border-line pb-0.5 font-mono text-[0.58rem] tracking-[0.14em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
        >
          <span aria-hidden="true">←</span>
          {copy.learn.back}
        </Link>

        <p className="dsh-margin-note mt-8">{copy.learn.kicker}</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2rem,4.6vw,3.3rem)] leading-[1.05]">
          {area.title}
        </h1>
        <p className="mt-5 max-w-2xl font-display text-[1.05rem] leading-relaxed text-mute">
          {area.lead}
        </p>

        <div className="mt-8 flex flex-wrap gap-6 border-t border-line pt-4 font-mono text-[0.6rem] tracking-[0.12em] text-mute uppercase">
          <span>
            {String(area.lessons.length).padStart(2, "0")} · {copy.learn.lessons}
          </span>
          <span>
            {String(area.tips.length).padStart(2, "0")} · {copy.learn.tips}
          </span>
        </div>
      </div>

      <div className="shell pt-8">
        <div className="flex gap-1 border-b border-line" role="tablist" aria-label={copy.learn.nav}>
          {(["lessons", "tips"] as Tab[]).map((value) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={tab === value}
              onClick={() => setTab(value)}
              className={cn(
                "border-b-2 px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors",
                tab === value
                  ? "border-violet text-violet"
                  : "border-transparent text-mute hover:text-chalk",
              )}
            >
              {value === "lessons" ? copy.learn.lessons : copy.learn.tips}
            </button>
          ))}
        </div>

        {tab === "lessons" ? (
          <div className="mt-6 space-y-4">
            {area.lessons.map((lesson) => {
              const expanded = open === lesson.id;
              return (
                <article key={lesson.id} className="panel overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : lesson.id)}
                    className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-display text-[2rem] leading-none text-violet/80">
                      {lesson.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[1.3rem] leading-tight text-chalk">
                        {lesson.title}
                      </span>
                      <span className="mt-1 block font-display text-[0.9rem] leading-relaxed text-mute">
                        {lesson.lead}
                      </span>
                    </span>
                    <span aria-hidden="true" className="font-mono text-lg text-mute">
                      {expanded ? "−" : "+"}
                    </span>
                  </button>

                  {expanded ? (
                    <div className="border-t border-line px-5 py-6 sm:px-6">
                      <div className="space-y-7">
                        {lesson.sections.map((section, index) => (
                          <section key={section.heading} className="border-l-2 border-line pl-5">
                            <p className="dsh-margin-note">
                              {copy.learn.lessonLabel} {lesson.number} · {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-2 font-display text-[1.15rem] text-chalk">
                              {section.heading}
                            </h3>
                            <p className="mt-2 font-display text-[0.95rem] leading-[1.85] text-chalk/85">
                              {section.body}
                            </p>
                            {section.example ? (
                              <div className="mt-3 border-l-2 border-cyan/60 bg-ink-soft/50 px-4 py-3">
                                <p className="font-mono text-[0.52rem] tracking-[0.14em] text-cyan uppercase">
                                  {copy.learn.example}
                                </p>
                                <p className="mt-1 font-display text-[0.9rem] leading-relaxed text-chalk">
                                  {section.example}
                                </p>
                              </div>
                            ) : null}
                          </section>
                        ))}
                      </div>

                      <div className="mt-7 border-t-2 border-violet/50 pt-4">
                        <p className="dsh-margin-note">{copy.learn.takeaway}</p>
                        <p className="mt-2 font-display text-[1.1rem] leading-relaxed text-chalk">
                          {lesson.takeaway}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {area.tips.map((tip) => (
              <article key={tip.id} className="panel flex gap-4 p-5">
                <span className="dsh-stamp h-fit shrink-0 text-violet">{tip.number}</span>
                <div>
                  <h3 className="font-display text-[1.1rem] leading-tight text-chalk">
                    {tip.title}
                  </h3>
                  <p className="mt-2 font-display text-[0.92rem] leading-relaxed text-mute">
                    {tip.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
