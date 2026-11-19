import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SpeakingClient } from "@/components/dsh/speaking-client";
import { dshCopy } from "@/lib/dsh/copy";
import { getModule } from "@/lib/dsh/modules";
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
    title: { absolute: `${dshCopy[locale].modules.nav.speaking} · DSH-Trainer` },
    description: getModule("sprechen").subtitle,
    alternates: dshAlternates(locale, "/dsh/sprechen"),
  };
}

export default async function SpeakingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SpeakingClient copy={dshCopy[locale]} hrefHub={`/${locale}/dsh`} />;
}
