"use client";

import dynamic from "next/dynamic";

import type { DshCopy } from "@/lib/dsh/copy";

/** La reconnaissance vocale vit dans le navigateur : aucun rendu serveur. */
const Runner = dynamic(
  () => import("@/components/dsh/speaking-runner").then((mod) => mod.SpeakingRunner),
  {
    ssr: false,
    loading: () => (
      <div className="shell py-24">
        <div className="h-2 w-40 bg-line" />
        <div className="mt-6 h-10 w-2/3 bg-line-soft" />
      </div>
    ),
  },
);

export function SpeakingClient(props: { copy: DshCopy; hrefHub: string }) {
  return <Runner {...props} />;
}
