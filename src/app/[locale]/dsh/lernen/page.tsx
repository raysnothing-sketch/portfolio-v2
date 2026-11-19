import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon } from "@/components/icons";
import { dshCopy } from "@/lib/dsh/copy";
import { lessonAreas, lessonKeys } from "@/lib/dsh/lessons";
import { dshAlternates } from "@/lib/dsh/seo";
import { isLocale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: { absolute: `${dshCopy[locale].learn.nav} · DSH-Trainer` },
    description: dshCopy[locale].learn.lead,
    alternates: dshAlternates(locale, "/dsh/lernen"),
  };
}

export default async function LearnHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = dshCopy[locale];

  return (
    <div className="shell pb-20 pt-12 sm:pt-16">
      <p className="dsh-margin-note">{copy.learn.kicker}</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05]">
        {copy.learn.title}
      </h1>
      <p className="mt-5 max-w-2xl font-display text-[1.05rem] leading-relaxed text-mute">
        {copy.learn.lead}
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {lessonKeys.map((key, index) => {
          const area = lessonAreas[key];
          return (
            <Link
              key={key}
              href={`/${locale}/dsh/lernen/${key}`}
              className="group panel border-l-2 border-l-line p-5 transition-colors hover:border-l-violet sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-[2.2rem] leading-none text-violet/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="dsh-stamp text-mute">{copy.learn.nav}</span>
              </div>
              <h2 className="mt-5 font-display text-[1.35rem] leading-tight text-chalk">
                {area.title}
              </h2>
              <p className="mt-2 font-display text-[0.92rem] leading-relaxed text-mute">
                {area.lead}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-line pt-3 font-mono text-[0.56rem] tracking-[0.1em] text-mute uppercase">
                <span>
                  {String(area.lessons.length).padStart(2, "0")} {copy.learn.lessons} ·{" "}
                  {String(area.tips.length).padStart(2, "0")} {copy.learn.tips}
                </span>
                <span className="flex items-center gap-1 text-violet">
                  {copy.learn.open}
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
