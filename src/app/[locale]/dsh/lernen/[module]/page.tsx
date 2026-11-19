import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { LessonView } from "@/components/dsh/lesson-view";
import { dshCopy } from "@/lib/dsh/copy";
import { getLessonArea, lessonKeys, type LessonModuleKey } from "@/lib/dsh/lessons";
import { dshAlternates } from "@/lib/dsh/seo";
import { isLocale } from "@/lib/i18n/config";

type Params = { locale: string; module: string };

export function generateStaticParams() {
  return lessonKeys.map((key) => ({ module: key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, module } = await params;
  if (!isLocale(locale)) return {};
  const area = lessonKeys.includes(module as LessonModuleKey)
    ? getLessonArea(module as LessonModuleKey)
    : null;
  if (!area) return {};
  return {
    title: { absolute: `${area.title} · ${dshCopy[locale].learn.nav} · DSH-Trainer` },
    description: area.lead,
    alternates: dshAlternates(locale, `/dsh/lernen/${module}`),
  };
}

export default function LessonPage({ params }: { params: Promise<Params> }) {
  return (
    <Suspense
      fallback={
        <div className="shell py-20">
          <div className="h-2 w-40 bg-line" />
          <div className="mt-6 h-10 w-2/3 bg-line-soft" />
        </div>
      }
    >
      <LessonContent params={params} />
    </Suspense>
  );
}

async function LessonContent({ params }: { params: Promise<Params> }) {
  const { locale, module } = await params;
  if (!isLocale(locale)) notFound();
  if (!lessonKeys.includes(module as LessonModuleKey)) notFound();

  return (
    <LessonView
      area={getLessonArea(module as LessonModuleKey)}
      copy={dshCopy[locale]}
      backHref={`/${locale}/dsh/lernen`}
    />
  );
}
