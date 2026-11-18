import { ImageResponse } from "next/og";

import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export const alt = "Rayan — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : defaultLocale);
  const [firstLine, secondLine] = dict.meta.ogHeadline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#05060a",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(124,92,255,0.35), transparent 45%), radial-gradient(circle at 92% 100%, rgba(34,211,238,0.22), transparent 45%)",
          color: "#eef1f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: 4 }}>
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.22)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              color: "#a78bfa",
            }}
          >
            RY
          </div>
          <div style={{ color: "#8b93ab" }}>PORTFOLIO / 2026 · {locale.toUpperCase()}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 600, lineHeight: 1.05 }}>
            {firstLine}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.05,
              backgroundImage: "linear-gradient(90deg, #ffffff, #b7a9ff, #6fe6f7)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {secondLine}
          </div>
          <div style={{ display: "flex", marginTop: 10, fontSize: 28, color: "#8b93ab" }}>
            {dict.meta.ogStack}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8b93ab" }}>
          <div>{dict.meta.title}</div>
          <div>github.com/raysnothing-sketch</div>
        </div>
      </div>
    ),
    size,
  );
}
