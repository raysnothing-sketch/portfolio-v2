"use client";

import dynamic from "next/dynamic";

import type { DshCopy } from "@/lib/dsh/copy";

/** Les réponses sauvegardées sont lues au premier rendu : client uniquement. */
const Runner = dynamic(
  () => import("@/components/dsh/writing-runner").then((mod) => mod.WritingRunner),
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

export function WritingClient(props: { copy: DshCopy; hrefHub: string }) {
  return <Runner {...props} />;
}
