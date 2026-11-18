"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { ArrowIcon, GithubMark } from "@/components/icons";
import { StatsRow } from "@/components/stats-row";
import type { ProfileStats } from "@/lib/types";

const HeroScene = dynamic(() => import("@/components/hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute top-1/2 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[120px]" />
    </div>
  ),
});

const TITLE_LINES = [
  { text: "Je construis des", gradient: false },
  { text: "produits web", gradient: true },
  { text: "qui tiennent la charge.", gradient: false },
];

export function Hero({ stats }: { stats: ProfileStats }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-10 sm:pt-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <div className="grid-floor mask-fade-b absolute inset-0 opacity-50" />
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet/12 blur-[130px]" />
        <div className="absolute right-[-10%] bottom-[-14%] h-[30rem] w-[30rem] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,#05060a_80%)]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[-18%] -z-10 hidden w-[60%] opacity-80 md:block [mask-image:radial-gradient(circle_at_55%_50%,#000_34%,transparent_70%)]"
      >
        <HeroScene />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(100deg,#05060a_0%,#05060a_38%,rgba(5,6,10,0.55)_52%,transparent_66%)] md:block"
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="shell relative w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.68rem] tracking-[0.26em] text-mute uppercase"
          >
            <span className="text-cyan">Ingénierie produit</span>
            <span aria-hidden="true" className="text-line">
              /
            </span>
            <span>Web · TypeScript · Edge</span>
          </motion.p>

          <h1 className="text-[clamp(2.25rem,5.4vw,3.9rem)] leading-[1.03] font-medium tracking-[-0.03em]">
            {TITLE_LINES.map((line, lineIndex) => (
              <span key={line.text} className="block overflow-hidden py-0.5">
                <motion.span
                  className={line.gradient ? "text-gradient inline-block" : "inline-block"}
                  initial={reduce ? false : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.08 * lineIndex,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-mute sm:text-base"
          >
            Du prototype au déploiement : je conçois des applications Next.js rapides, typées de
            bout en bout et adossées à des bases de données edge. Moins de couches, plus de
            précision.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#projets"
              className="group inline-flex items-center gap-2 rounded-full bg-chalk px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Explorer les projets
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="https://github.com/raysnothing-sketch"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-card/50 px-5 py-3 text-sm text-chalk transition-colors hover:border-violet/60 hover:bg-ink-card"
            >
              <GithubMark className="size-4 text-mute" />
              Voir le code
            </a>
          </motion.div>

          <StatsRow stats={stats} />
        </div>
      </motion.div>
    </section>
  );
}
