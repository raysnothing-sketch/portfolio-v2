import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/i18n";

export function SystemSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="systeme" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />

      <div className="shell">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[0.65rem] tracking-[0.28em] text-violet uppercase">
              {dict.system.kicker}
            </p>
            <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] font-medium tracking-[-0.02em] text-balance">
              {dict.system.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">{dict.system.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {dict.system.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-line/90 bg-ink-card/40 p-6 transition-colors hover:border-violet/40">
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-mute/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-chalk">
                  {principle.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{principle.body}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {principle.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line/70 bg-ink/60 px-2 py-1 font-mono text-[0.6rem] text-mute/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-4">
          <div className="relative overflow-hidden rounded-2xl border border-line/90 bg-[#070a12]">
            <div className="flex items-center gap-2 border-b border-line/70 px-5 py-3">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#ff5f57]/70" />
              <span aria-hidden="true" className="size-2 rounded-full bg-[#febc2e]/70" />
              <span aria-hidden="true" className="size-2 rounded-full bg-[#28c840]/70" />
              <span className="ml-3 font-mono text-[0.62rem] tracking-[0.16em] text-mute/60 uppercase">
                {dict.system.treeCaption}
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[0.74rem] leading-7 text-mute">
              <code>{dict.system.tree}</code>
            </pre>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -bottom-16 size-56 rounded-full bg-violet/10 blur-3xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
