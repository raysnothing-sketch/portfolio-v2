import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ListeningClient } from "@/components/dsh/listening-client";
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
    title: { absolute: `${dshCopy[locale].modules.nav.listening} · DSH-Trainer` },
    description: getModule("hoeren").subtitle,
    alternates: dshAlternates(locale, "/dsh/hoeren"),
  };
}

export default async function ListeningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ListeningClient copy={dshCopy[locale]} hrefHub={`/${locale}/dsh`} />;
}
