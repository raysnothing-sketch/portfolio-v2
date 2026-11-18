import { ImageResponse } from "next/og";

import { MARK_COLORS } from "@/lib/brand/mark";
import { MARK_PNG_BASE64, MARK_RING_BASE64 } from "@/lib/brand/mark-data";
import { env } from "@/lib/env";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export const alt = "Rayan — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MARK_SRC = `data:image/png;base64,${MARK_PNG_BASE64}`;
const RING_SRC = `data:image/png;base64,${MARK_RING_BASE64}`;

/** Traits de grille : satori ne gère pas `repeating-linear-gradient`. */
const GRID_LINES = [0, 1, 2, 3, 4, 5];

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const active = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);
  const [firstLine, secondLine] = dict.meta.ogHeadline;
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
          position: "relative",
          padding: "64px 68px",
          backgroundColor: MARK_COLORS.ink,
          backgroundImage:
            "radial-gradient(circle at 8% -12%, rgba(124,92,255,0.34), transparent 46%), radial-gradient(circle at 96% 108%, rgba(34,211,238,0.20), transparent 44%)",
          color: MARK_COLORS.chalk,
          fontFamily: "sans-serif",
        }}
      >
        {/* Grille discrète */}
        <div style={{ position: "absolute", inset: 0, display: "flex" }}>
          {GRID_LINES.map((index) => (
            <div
              key={`v-${index}`}
              style={{
                position: "absolute",
                left: 200 * index,
                top: 0,
                width: 1,
                height: 630,
                backgroundColor: "rgba(255,255,255,0.028)",
              }}
            />
          ))}
          {GRID_LINES.map((index) => (
            <div
              key={`h-${index}`}
              style={{
                position: "absolute",
                top: 126 * index,
                left: 0,
                height: 1,
                width: 1200,
                backgroundColor: "rgba(255,255,255,0.028)",
              }}
            />
          ))}
        </div>

        {/* Sceau en filigrane */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={RING_SRC}
          width={540}
          height={540}
          style={{ position: "absolute", right: -96, top: 128, opacity: 0.085 }}
        />

        {/* En-tête */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={MARK_SRC} width={54} height={54} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 20, letterSpacing: 1.6, color: MARK_COLORS.chalk }}>
                Rayan
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  letterSpacing: 3.4,
                  color: MARK_COLORS.mute,
                  marginTop: 4,
                }}
              >
                PORTFOLIO / 2026
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: `1px solid ${MARK_COLORS.line}`,
              borderRadius: 999,
              padding: "8px 20px",
              fontSize: 16,
              letterSpacing: 3,
              color: MARK_COLORS.mute,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                backgroundColor: MARK_COLORS.lime,
              }}
            />
            {active.toUpperCase()}
          </div>
        </div>

        {/* Titre */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            position: "relative",
            marginTop: 24,
          }}
        >
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1.06, letterSpacing: -2 }}>
            {firstLine}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: -2,
              backgroundImage: "linear-gradient(96deg, #ffffff 4%, #b7a9ff 52%, #6fe6f7 96%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {secondLine}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 42,
              fontSize: 21,
              letterSpacing: 0.4,
              color: MARK_COLORS.mute,
            }}
          >
            <div style={{ width: 44, height: 2, backgroundColor: MARK_COLORS.violet }} />
            {dict.meta.ogStack}
          </div>
        </div>

        {/* Pied */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${MARK_COLORS.line}`,
            paddingTop: 22,
            position: "relative",
            fontSize: 17,
            letterSpacing: 2.6,
            color: MARK_COLORS.mute,
          }}
        >
          <div style={{ display: "flex" }}>{dict.meta.title.toUpperCase()}</div>
          <div style={{ display: "flex", color: MARK_COLORS.chalk }}>{host}</div>
        </div>
      </div>
    ),
    size,
  );
}
