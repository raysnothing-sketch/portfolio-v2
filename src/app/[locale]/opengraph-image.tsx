import { ImageResponse } from "next/og";

import { BRAND_COLORS, BRAND_NAME } from "@/lib/brand/monogram";
import { MONOGRAM_GHOST_BASE64, MONOGRAM_PNG_BASE64 } from "@/lib/brand/mark-data";
import { env } from "@/lib/env";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export const alt = `${BRAND_NAME} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MONOGRAM_SRC = `data:image/png;base64,${MONOGRAM_PNG_BASE64}`;
const GHOST_SRC = `data:image/png;base64,${MONOGRAM_GHOST_BASE64}`;

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
          backgroundColor: BRAND_COLORS.ink,
          backgroundImage:
            "radial-gradient(circle at 8% -12%, rgba(124,92,255,0.34), transparent 46%), radial-gradient(circle at 96% 108%, rgba(34,211,238,0.20), transparent 44%)",
          color: BRAND_COLORS.chalk,
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

        {/* Monogramme en filigrane */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={GHOST_SRC}
          width={560}
          height={560}
          style={{ position: "absolute", right: -72, top: 120, opacity: 0.08 }}
        />

        {/* En-tête : lockup monogramme + nom + rôle */}
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
                width: 62,
                height: 62,
                borderRadius: 16,
                border: `1px solid ${BRAND_COLORS.line}`,
                backgroundColor: BRAND_COLORS.inkSoft,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={MONOGRAM_SRC} width={48} height={48} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: 4.5,
                  color: BRAND_COLORS.chalk,
                }}
              >
                {BRAND_NAME.toUpperCase()}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 14,
                  letterSpacing: 3.2,
                  color: BRAND_COLORS.mute,
                  marginTop: 5,
                }}
              >
                {dict.meta.role.toUpperCase()}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: `1px solid ${BRAND_COLORS.line}`,
              borderRadius: 999,
              padding: "8px 20px",
              fontSize: 16,
              letterSpacing: 3,
              color: BRAND_COLORS.mute,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                backgroundColor: BRAND_COLORS.lime,
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
              color: BRAND_COLORS.mute,
            }}
          >
            <div style={{ width: 44, height: 2, backgroundColor: BRAND_COLORS.violet }} />
            {dict.meta.ogStack}
          </div>
        </div>

        {/* Pied */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${BRAND_COLORS.line}`,
            paddingTop: 22,
            position: "relative",
            fontSize: 17,
            letterSpacing: 2.6,
            color: BRAND_COLORS.mute,
          }}
        >
          <div style={{ display: "flex" }}>PORTFOLIO / 2026</div>
          <div style={{ display: "flex", color: BRAND_COLORS.chalk }}>{host}</div>
        </div>
      </div>
    ),
    size,
  );
}
