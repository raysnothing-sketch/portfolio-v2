"use client";

import { useState } from "react";

import { ArrowIcon, GithubMark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/i18n";

export function ContactSection({ email, dict }: { email: string | null; dict: Dictionary }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/12 blur-[110px]" />
      </div>

      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line/90 bg-ink-soft/60 px-6 py-14 text-center sm:px-14">
            <div
              aria-hidden="true"
              className="grid-floor pointer-events-none absolute inset-0 opacity-25 mask-fade-b"
            />

            <p className="relative font-mono text-[0.65rem] tracking-[0.28em] text-cyan uppercase">
              {dict.contact.kicker}
            </p>

            <h2 className="relative mx-auto mt-5 max-w-2xl text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] font-medium tracking-[-0.03em] text-balance">
              {dict.contact.title}
            </h2>

            <p className="relative mx-auto mt-5 max-w-lg text-sm leading-relaxed text-mute">
              {dict.contact.body}
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              {email && (
                <button
                  type="button"
                  onClick={copyEmail}
                  title={dict.contact.copyHint}
                  className="group inline-flex items-center gap-2 rounded-full bg-chalk px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  {copied ? dict.contact.copied : email}
                  <span aria-hidden="true" className="font-mono text-[0.65rem] text-ink/50">
                    {copied ? "✓" : "⧉"}
                  </span>
                </button>
              )}

              <a
                href="https://github.com/raysnothing-sketch"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-card/60 px-5 py-3 text-sm text-chalk transition-colors hover:border-violet/60"
              >
                <GithubMark className="size-4 text-mute" />
                {dict.contact.github}
                <ArrowIcon className="size-3.5 text-mute" />
              </a>
            </div>

            <p className="relative mt-8 font-mono text-[0.62rem] tracking-[0.18em] text-mute/60 uppercase">
              {dict.contact.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
