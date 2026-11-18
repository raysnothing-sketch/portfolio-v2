"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

import { GithubMark } from "@/components/icons";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#projets", label: "Projets", index: "01" },
  { href: "#systeme", label: "Système", index: "02" },
  { href: "#contact", label: "Contact", index: "03" },
];

export function SiteNav() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.3 });
  const [condensed, setCondensed] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setCondensed(value > 40);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="h-px origin-left bg-gradient-to-r from-violet via-cyan to-lime"
      />

      <div
        className={cn(
          "transition-all duration-500",
          condensed
            ? "border-b border-line/80 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav aria-label="Navigation principale" className="shell flex h-16 items-center justify-between gap-6">
          <Link
            href="#accueil"
            className="group flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.24em] text-chalk uppercase"
          >
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center rounded-full border border-line bg-ink-card/80 text-[0.6rem] text-violet transition-colors group-hover:border-violet/60"
            >
              RY
            </span>
            <span className="hidden sm:inline">Rayan / Portfolio</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-baseline gap-2 rounded-full px-3 py-2 text-sm text-mute transition-colors hover:text-chalk"
                >
                  <span className="font-mono text-[0.6rem] text-violet/70 transition-colors group-hover:text-cyan">
                    {link.index}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-mute uppercase sm:flex">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
              Disponible
            </span>
            <a
              href="https://github.com/raysnothing-sketch"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-full border border-line bg-ink-card/60 px-3.5 py-2 text-xs text-chalk transition-colors hover:border-violet/60 hover:bg-ink-card"
            >
              <GithubMark className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
