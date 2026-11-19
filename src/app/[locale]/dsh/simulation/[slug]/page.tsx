import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { SimulationClient } from "@/components/dsh/simulation-client";
import { getSimulation, simulations } from "@/lib/dsh";
import { dshCopy } from "@/lib/dsh/copy";
import { dshAlternates } from "@/lib/dsh/seo";
import { isLocale } from "@/lib/i18n/config";

type PageParams = { locale: string; slug: string };

export function generateStaticParams() {
  return simulations.map((simulation) => ({ slug: simulation.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const simulation = getSimulation(slug);
  if (!simulation || !isLocale(locale)) return {};
  return {
    title: {
      absolute: `${simulation.title} · ${String(simulation.number).padStart(2, "0")} · DSH-Trainer`,
    },
    description: `${simulation.subtitle} — ${dshCopy[locale].hub.lead}`,
    alternates: dshAlternates(locale, `/dsh/simulation/${simulation.slug}`),
  };
}

/**
 * `params` est résolu dans un composant placé sous <Suspense> : le shell
 * statique de la page peut être envoyé immédiatement, le contenu de l'épreuve
 * arrive ensuite. C'est ce qu'attend la validation Cache Components de Next 16.
 */
export default function SimulationPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  return (
    <Suspense
      fallback={
        <div className="shell py-24">
          <div className="h-2 w-40 bg-line" />
          <div className="mt-6 h-10 w-2/3 bg-line-soft" />
        </div>
      }
    >
      <SimulationContent params={params} />
    </Suspense>
  );
}

async function SimulationContent({ params }: { params: Promise<PageParams> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const simulation = getSimulation(slug);
  if (!simulation) notFound();

  return (
    <SimulationClient
      simulation={simulation}
      copy={dshCopy[locale]}
      hrefHub={`/${locale}/dsh`}
    />
  );
}
