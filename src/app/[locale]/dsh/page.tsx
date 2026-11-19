import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon } from "@/components/icons";
import { dshCopy } from "@/lib/dsh/copy";
import { drillCategories } from "@/lib/dsh/drills";
import { levelTone, simulations, TOTAL_POINTS } from "@/lib/dsh";
import { getModule, type DshModuleKey } from "@/lib/dsh/modules";
import { dshAlternates } from "@/lib/dsh/seo";
import { isLocale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = dshCopy[locale];
  return {
    title: { absolute: `${copy.nav.simulations} · DSH-Trainer` },
    description: copy.hub.lead,
    alternates: dshAlternates(locale, "/dsh"),
  };
}

export default async function DshHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = dshCopy[locale];

  const titleLines = copy.hub.title
    .split(".")
    .map((line) => line.trim())
    .filter(Boolean);

  const stats = [
    { value: `${TOTAL_POINTS}`, label: copy.hub.stats.points },
    { value: "90", label: copy.hub.stats.minutes },
    { value: "30 + 15", label: copy.hub.stats.split },
    { value: "1–3", label: copy.hub.stats.levels },
  ];

  const scale = [
    { points: "< 26", percent: "– 57 %", level: "none" as const },
    { points: "26 – 30", percent: "57 – 66 %", level: "dsh1" as const },
    { points: "31 – 36", percent: "67 – 81 %", level: "dsh2" as const },
    { points: "37 – 45", percent: "82 – 100 %", level: "dsh3" as const },
  ];

  const timing = [
    {
      time: "15",
      label:
        locale === "fr"
          ? "Lire & annoter"
          : locale === "en"
            ? "Read & annotate"
            : "Lesen & markieren",
    },
    {
      time: "50",
      label:
        locale === "fr"
          ? "Traiter les tâches"
          : locale === "en"
            ? "Work on the tasks"
            : "Aufgaben bearbeiten",
    },
    {
      time: "20",
      label: locale === "fr" ? "Structures" : locale === "en" ? "Structures" : "Strukturen",
    },
    {
      time: "5",
      label:
        locale === "fr" ? "Relecture" : locale === "en" ? "Review" : "Kontrolle",
    },
  ];

  return (
    <div className="pb-12">
      <section className="border-b border-line">
        <div className="shell grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
          <div className="border-l-2 border-violet pl-5 sm:pl-7">
            <p className="dsh-margin-note flex items-center gap-2.5">
              <span aria-hidden="true" className="inline-block h-2 w-2 bg-violet" />
              {copy.hub.kicker}
            </p>

            <h1 className="mt-7 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] tracking-[-0.04em]">
              {titleLines.map((line, index) => (
                <span key={line} className="block">
                  <span className={index === titleLines.length - 1 ? "text-violet" : undefined}>
                    {line}.
                  </span>
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-xl font-display text-[1.15rem] leading-relaxed text-mute sm:text-[1.3rem]">
              {copy.hub.lead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/dsh/simulation/${simulations[0].slug}`}
                className="group inline-flex items-center gap-2.5 bg-violet px-5 py-3 text-sm font-medium text-ink-card transition-colors hover:bg-violet/90"
              >
                {copy.hub.start}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={`/${locale}/dsh/strukturen`}
                className="inline-flex items-center gap-2 border border-line bg-ink-card px-5 py-3 text-sm text-chalk transition-colors hover:border-violet"
              >
                {copy.hub.secondary}
              </Link>
              <Link
                href={`/${locale}/dsh/lernen`}
                className="border-b border-line pb-1 font-mono text-[0.6rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet"
              >
                {copy.learn.nav} →
              </Link>
            </div>
          </div>

          <aside className="panel relative self-start p-6 sm:p-7">
            <span className="dsh-stamp absolute top-5 right-5 text-violet/70">
              {locale === "fr" ? "Cahier d’exercices" : locale === "en" ? "Practice booklet" : "Übungsheft"}
            </span>

            <p className="dsh-margin-note border-b border-line pb-3">
              {locale === "fr" ? "Fiche d’épreuve" : locale === "en" ? "Exam sheet" : "Prüfungsblatt"}
            </p>

            <p className="mt-7 font-display text-[1.4rem] leading-snug text-chalk">
              {simulations[0].title}
            </p>
            <p className="mt-1 text-[0.78rem] text-mute">{simulations[0].subtitle}</p>

            <dl className="mt-7 divide-y divide-line border-y border-line">
              {[
                {
                  label:
                    locale === "fr"
                      ? "Durée"
                      : locale === "en"
                        ? "Duration"
                        : "Bearbeitungszeit",
                  value: "90 min",
                },
                {
                  label: copy.hub.stats.points,
                  value: `45 ${copy.hub.stats.points}`,
                },
                {
                  label: locale === "fr" ? "Niveau" : locale === "en" ? "Level" : "Niveau",
                  value: "DSH 1 – 3",
                },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="font-mono text-[0.6rem] tracking-[0.12em] text-mute uppercase">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-[0.85rem] text-chalk tabular-nums">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex items-end justify-between gap-4">
              <div className="h-6 flex-1 border-b border-dashed border-line" />
              <span className="font-mono text-[0.5rem] tracking-[0.12em] text-mute/85 uppercase">
                {locale === "fr" ? "Signature" : locale === "en" ? "Signature" : "Unterschrift"}
              </span>
            </div>
          </aside>
        </div>

        <dl className="shell grid grid-cols-2 border-t border-line sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-line px-1 py-6 sm:px-5 ${index > 0 ? "border-l" : ""} ${index > 1 ? "border-t sm:border-t-0" : ""}`}
            >
              <dt className="font-mono text-[0.52rem] tracking-[0.16em] text-mute uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-[1.85rem] leading-none text-violet tabular-nums">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="shell mt-16">
        <header className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="dsh-margin-note">01 — {copy.hub.simTitle}</p>
            <h2 className="mt-2 text-[clamp(1.7rem,3.2vw,2.4rem)]">{copy.hub.simTitle}</h2>
            <p className="mt-2 max-w-2xl text-[0.88rem] leading-relaxed text-mute">
              {copy.hub.simLead}
            </p>
          </div>
          <p className="shrink-0 font-mono text-[0.6rem] tracking-[0.12em] text-mute uppercase">
            {String(simulations.length).padStart(2, "0")} {copy.hub.available}
          </p>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {simulations.map((simulation) => {
            const taskCount = simulation.leseverstehen.length + simulation.strukturen.length;
            return (
              <Link
                key={simulation.id}
                href={`/${locale}/dsh/simulation/${simulation.slug}`}
                className="group panel relative overflow-hidden border-l-2 border-l-line p-5 transition-colors hover:border-l-violet sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="dsh-margin-note">
                    {copy.nav.simulations} {String(simulation.number).padStart(2, "0")}
                  </span>
                  <span className="dsh-stamp text-mute">{simulation.topic}</span>
                </div>

                <h3 className="mt-6 text-[1.35rem] leading-snug text-chalk">{simulation.title}</h3>
                <p className="mt-1.5 font-display text-[0.95rem] leading-relaxed text-mute">
                  {simulation.subtitle}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-dashed border-line pt-3 font-mono text-[0.56rem] tracking-[0.08em] text-mute uppercase">
                  <span>
                    {simulation.text.wordCount} {copy.hub.wordsLabel} · {taskCount}{" "}
                    {copy.hub.tasksLabel} · 45 P
                  </span>
                  <span className="flex items-center gap-1 text-violet">
                    {copy.hub.open}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="shell mt-16">
        <div className="panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="dsh-margin-note">02 — {copy.nav.structures}</p>
            <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.2rem)]">
              {copy.hub.structuresTitle}
            </h2>
            <p className="mt-3 max-w-lg font-display text-[1rem] leading-relaxed text-mute">
              {copy.hub.structuresLead}
            </p>
            <Link
              href={`/${locale}/dsh/strukturen`}
              className="group mt-6 inline-flex items-center gap-2 border-b-2 border-violet pb-1 text-sm text-violet transition-colors hover:text-chalk"
            >
              {copy.hub.structuresCta}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ol className="divide-y divide-line border-y border-line">
            {drillCategories.map((category, index) => (
              <li key={category.type} className="flex items-baseline gap-4 py-2.5">
                <span className="w-5 shrink-0 font-mono text-[0.6rem] text-violet">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 font-display text-[0.95rem] text-chalk">
                  {copy.types[category.type]}
                </span>
                <span className="font-mono text-[0.65rem] text-mute tabular-nums">
                  {String(category.count).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell mt-16">
        <header className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="dsh-margin-note">03 — {copy.modules.hub.kicker}</p>
            <h2 className="mt-2 text-[clamp(1.7rem,3.2vw,2.4rem)]">{copy.modules.hub.title}</h2>
            <p className="mt-2 max-w-2xl font-display text-[0.98rem] leading-relaxed text-mute">
              {copy.modules.hub.lead}
            </p>
          </div>
          <span className="shrink-0 font-mono text-[0.6rem] tracking-[0.12em] text-mute uppercase">
            03 {copy.modules.hub.points}
          </span>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(["hoeren", "sprechen", "schreiben"] as DshModuleKey[]).map((key, index) => {
            const exam = getModule(key);
            const navKey = key === "hoeren" ? "listening" : key === "sprechen" ? "speaking" : "writing";
            const label = copy.modules.nav[navKey];
            return (
              <Link
                key={key}
                href={`/${locale}/dsh/${key}`}
                className="group panel border-t-2 border-t-line p-5 transition-colors hover:border-t-violet"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[2rem] leading-none text-violet/80">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <span className="dsh-stamp text-mute">{exam.topic}</span>
                </div>
                <h3 className="mt-5 font-display text-[1.25rem] text-chalk">{label}</h3>
                <p className="mt-1.5 font-display text-[0.92rem] leading-relaxed text-mute">
                  {exam.subtitle}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-dashed border-line pt-3 font-mono text-[0.56rem] tracking-[0.08em] text-mute uppercase">
                  <span>
                    {exam.minutes} {copy.modules.hub.minutes} · {exam.maxPoints}{" "}
                    {copy.modules.hub.points}
                  </span>
                  <span className="flex items-center gap-1 text-violet">
                    {copy.modules.hub.open}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="shell mt-16">
        <p className="dsh-margin-note">04 — {copy.hub.howTitle}</p>
        <h2 className="mt-2 mb-7 text-[clamp(1.7rem,3.2vw,2.4rem)]">{copy.hub.howTitle}</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {copy.hub.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-violet/60 pt-4">
              <span className="font-display text-[2rem] leading-none text-violet/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.1rem] text-chalk">{step.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-mute">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="leitfaden" className="shell mt-16 scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="dsh-margin-note">05 — {copy.hub.scaleTitle}</p>
            <h2 className="mt-2 text-[clamp(1.7rem,3.2vw,2.4rem)]">{copy.hub.scaleTitle}</h2>
            <p className="mt-2 max-w-lg font-display text-[1rem] leading-relaxed text-mute">
              {copy.hub.scaleLead}
            </p>

            <div className="mt-6 overflow-hidden border border-line bg-ink-card">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-ink-soft/60 font-mono text-[0.54rem] tracking-[0.14em] text-mute uppercase">
                    <th scope="col" className="px-4 py-2.5 font-normal">
                      {copy.hub.scaleHead.points}
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-normal">
                      {copy.hub.scaleHead.percent}
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-normal">
                      {copy.hub.scaleHead.level}
                    </th>
                    <th scope="col" className="hidden px-4 py-2.5 font-normal sm:table-cell">
                      {copy.hub.scaleHead.note}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-soft">
                  {scale.map((row) => {
                    const tone = levelTone(row.level);
                    return (
                      <tr key={row.level} className="text-[0.82rem]">
                        <td className="px-4 py-3 font-mono text-chalk tabular-nums">
                          {row.points}
                        </td>
                        <td className="px-4 py-3 font-mono text-mute tabular-nums">
                          {row.percent}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`border px-2.5 py-0.5 font-mono text-[0.6rem] uppercase ${tone.chip}`}
                          >
                            {copy.levels[row.level].label}
                          </span>
                        </td>
                        <td className="hidden px-4 py-3 text-[0.76rem] leading-relaxed text-mute sm:table-cell">
                          {copy.levels[row.level].note}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="panel self-start p-5">
            <p className="dsh-margin-note border-b border-line pb-3">
              {locale === "fr"
                ? "Plan de 90 minutes"
                : locale === "en"
                  ? "90-minute plan"
                  : "90-Minuten-Plan"}
            </p>
            <ol className="mt-4 divide-y divide-line-soft">
              {timing.map((item) => (
                <li key={item.time} className="flex items-baseline gap-4 py-3">
                  <span className="w-10 shrink-0 font-display text-[1.4rem] text-violet tabular-nums">
                    {item.time}′
                  </span>
                  <span className="text-[0.84rem] leading-relaxed text-mute">{item.label}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t border-line pt-4 font-display text-[0.82rem] leading-relaxed text-mute">
              {copy.sim.localNote}
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
