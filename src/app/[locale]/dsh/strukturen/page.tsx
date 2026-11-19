import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StructureTrainer } from "@/components/dsh/structure-trainer";
import { dshCopy } from "@/lib/dsh/copy";
import { drills } from "@/lib/dsh/drills";
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
    title: { absolute: `${copy.hub.structuresTitle} · DSH-Trainer` },
    description: copy.drills.lead,
    alternates: dshAlternates(locale, "/dsh/strukturen"),
  };
}

export default async function StructuresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <StructureTrainer drills={drills} copy={dshCopy[locale]} />;
}
