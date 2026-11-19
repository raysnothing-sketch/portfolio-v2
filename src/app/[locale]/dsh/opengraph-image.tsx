import { ImageResponse } from "next/og";

import { dshCopy } from "@/lib/dsh/copy";
import { env } from "@/lib/env";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export const alt = "DSH-Trainer — Leseverstehen & Wissenschaftssprachliche Strukturen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f4f0e6";
const INK = "#1d252b";
const RED = "#a03a28";
const RULE = "#d2c8b5";
const MUTE = "#6d6659";

/** Aperçu social du trainer : papier réglé, pas le thème du portfolio. */
export default async function DshOpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const active = isLocale(locale) ? locale : defaultLocale;
  const copy = dshCopy[active];
  const host = env
    .siteUrl()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          backgroundColor: PAPER,
          color: INK,
          fontFamily: "serif",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "flex" }}>
          {[126, 252, 378, 504].map((top) => (
            <div
              key={top}
              style={{
                position: "absolute",
                top,
                left: 0,
                width: 1200,
                height: 1,
                backgroundColor: "rgba(29,37,43,0.06)",
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              left: 56,
              top: 0,
              width: 3,
              height: 630,
              backgroundColor: "rgba(160,58,40,0.28)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 58,
                height: 58,
                backgroundColor: RED,
                color: PAPER,
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 27, fontWeight: 700 }}>
                DSH. Trainer
              </div>
              <div style={{ display: "flex", fontSize: 14, color: MUTE, marginTop: 4 }}>
                {copy.nav.trainer.toUpperCase()}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 16, color: MUTE, letterSpacing: 3 }}>
            {active.toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.08, letterSpacing: -2 }}>
            {copy.hub.title.split(".").slice(0, 2).join(".")}.
          </div>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.08, color: RED }}>
            {copy.hub.title.split(".").slice(2).join(".").trim() || copy.sim.results}.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 36 }}>
            <div style={{ width: 46, height: 3, backgroundColor: RED }} />
            <div style={{ display: "flex", fontSize: 21, color: MUTE }}>
              {copy.hub.stats.split} · 90 min · 45 P
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `3px double ${RULE}`,
            paddingTop: 22,
            position: "relative",
            fontSize: 17,
            color: MUTE,
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex" }}>PRÜFUNGSSIMULATION · ÜBUNGSHEFT</div>
          <div style={{ display: "flex", color: INK }}>{host}</div>
        </div>
      </div>
    ),
    size,
  );
}
