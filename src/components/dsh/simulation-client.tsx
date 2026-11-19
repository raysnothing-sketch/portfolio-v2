"use client";

import dynamic from "next/dynamic";

import type { DshCopy } from "@/lib/dsh/copy";
import type { DshSimulation } from "@/lib/dsh/types";

/**
 * Le simulateur lit `localStorage` dès son premier rendu (réponses sauvegardées,
 * surlignages). Il est donc chargé uniquement côté client : pas de divergence
 * d'hydratation, pas d'effet de synchronisation au montage.
 */
const Runner = dynamic(
  () => import("@/components/dsh/simulation-runner").then((mod) => mod.SimulationRunner),
  {
    ssr: false,
    loading: () => (
      <div className="shell py-24">
        <div className="h-2 w-40 bg-line" />
        <div className="mt-6 h-10 w-2/3 bg-line-soft" />
        <div className="mt-4 h-2 w-1/2 bg-line-soft" />
      </div>
    ),
  },
);

export function SimulationClient(props: {
  simulation: DshSimulation;
  copy: DshCopy;
  hrefHub: string;
}) {
  return <Runner {...props} />;
}
