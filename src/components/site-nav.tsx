"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { GithubMark } from "@/components/icons";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteNav({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.3 });
  const [condensed, setCondensed] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setCondensed(value > 40);
  });

  const links = [
    { href: "#projets", label: dict.nav.projects, index: "01" },
    { href: "#systeme", label: dict.nav.system, index: "02" },
    { href: "#contact", label: dict.nav.contact, index: "03" },
    { href: `/${locale}/dsh`, label: "DSH-Trainer", index: "04" },
  ];

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
        <nav
          aria-label={dict.nav.aria}
          className="shell flex h-16 items-center justify-between gap-4"
        >
          <Link
            href="#accueil"
            aria-label={`${dict.nav.brand} — ${dict.meta.role}`}
            className="group flex items-center gap-3"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-line bg-ink-card/70 transition-colors group-hover:border-violet/50">
              <BrandMark className="size-6 transition-transform duration-500 group-hover:scale-105" />
            </span>
            <span className="flex flex-col gap-1 leading-none">
              <span className="font-mono text-[0.72rem] tracking-[0.28em] text-chalk uppercase">
                {dict.nav.brand}
              </span>
              <span className="hidden font-mono text-[0.55rem] tracking-[0.16em] text-mute uppercase sm:inline">
                {dict.meta.role}
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
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

          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-mute uppercase lg:flex">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
              {dict.nav.available}
            </span>

            <LocaleSwitcher locale={locale} ariaLabel={dict.nav.language} />

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
