import {
  BRAND_COLORS,
  MONOGRAM_GLYPHS,
  MONOGRAM_VIEW,
} from "@/lib/brand/monogram";

/**
 * Monogramme GZR en SVG inline : net à toutes les tailles et recolorable.
 * La géométrie vient de `src/lib/brand/monogram.ts`, seule source de vérité
 * partagée avec le favicon et la bannière Open Graph.
 */
export function BrandMark({
  className,
  gradientId = "brand-mark-letters",
}: {
  className?: string;
  /** À changer si plusieurs monogrammes coexistent dans la même page. */
  gradientId?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${MONOGRAM_VIEW} ${MONOGRAM_VIEW}`}
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="20"
          y1="52"
          x2="180"
          y2="148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={BRAND_COLORS.violet} />
          <stop offset="0.55" stopColor={BRAND_COLORS.blue} />
          <stop offset="1" stopColor={BRAND_COLORS.cyan} />
        </linearGradient>
      </defs>
      {MONOGRAM_GLYPHS.map((d) => (
        <path
          key={d}
          d={d}
          stroke={`url(#${gradientId})`}
          strokeWidth={13}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
