/**
 * Produit les assets de marque à partir de la géométrie unique
 * `src/lib/brand/mark.ts` :
 *   - src/app/icon.svg        icône du site (optimisée 16–32 px)
 *   - src/app/favicon.ico     ICO multi-tailles (16 / 32 / 48)
 *   - src/app/apple-icon.png  iOS 180 px
 *   - public/brand/*          icônes haute résolution + SVG source
 *   - src/lib/brand/mark-data.ts  emblème en base64 (carte OG)
 *
 * Usage : pnpm brand:assets
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

import {
  MARK_CENTER,
  MARK_COLORS,
  MARK_CORE,
  MARK_OUTLINE,
  MARK_OUTLINE_CLOSED,
  MARK_STROKE,
  MARK_STROKE_COMPACT,
} from "../src/lib/brand/mark";

const ROOT = path.resolve(import.meta.dirname, "..");
const VIEW = 200;

type MarkOptions = {
  size: number;
  /** Version compacte : anneau fermé et plus gras, lisible à 16 px. */
  compact?: boolean;
  /** Sans tuile de fond (pour la carte OG). */
  transparent?: boolean;
  /** Rayon des coins ; `null` = carré plein (iOS applique son propre masque). */
  cornerRadius?: number | null;
  /** Dessine le noyau. Désactivé pour le filigrane de la carte OG. */
  core?: boolean;
};

function markSvg({
  size,
  compact = false,
  transparent = false,
  cornerRadius = 46,
  core = true,
}: MarkOptions): string {
  const stroke = compact ? MARK_STROKE_COMPACT : MARK_STROKE;
  const outline = compact ? MARK_OUTLINE_CLOSED : MARK_OUTLINE;

  const tile = transparent
    ? ""
    : `
  <rect width="${VIEW}" height="${VIEW}" rx="${cornerRadius}" fill="url(#tile)" />
  <rect x="0.75" y="0.75" width="${VIEW - 1.5}" height="${VIEW - 1.5}" rx="${cornerRadius === null ? 0 : cornerRadius - 0.75}" fill="none" stroke="${MARK_COLORS.line}" stroke-width="1.5" />
  <rect width="${VIEW}" height="${VIEW}" rx="${cornerRadius}" fill="url(#halo)" />`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${VIEW} ${VIEW}" fill="none">
  <defs>
    <linearGradient id="stroke" x1="22" y1="32" x2="178" y2="168" gradientUnits="userSpaceOnUse">
      <stop stop-color="${MARK_COLORS.violet}" />
      <stop offset="0.55" stop-color="#4f9cf6" />
      <stop offset="1" stop-color="${MARK_COLORS.cyan}" />
    </linearGradient>
    <linearGradient id="tile" x1="0" y1="0" x2="0" y2="${VIEW}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${MARK_COLORS.inkSoft}" />
      <stop offset="1" stop-color="${MARK_COLORS.ink}" />
    </linearGradient>
    <radialGradient id="halo" cx="0.28" cy="0.16" r="0.85">
      <stop stop-color="${MARK_COLORS.violet}" stop-opacity="0.26" />
      <stop offset="1" stop-color="${MARK_COLORS.violet}" stop-opacity="0" />
    </radialGradient>
  </defs>${tile}
  <path d="${outline}" stroke="url(#stroke)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" />${core ? `
  <circle cx="${MARK_CENTER.x}" cy="${MARK_CENTER.y}" r="${MARK_CORE}" fill="${MARK_COLORS.lime}" />` : ""}
</svg>
`;
}

async function rasterize(options: MarkOptions): Promise<Buffer> {
  // Pas de `density` : il multiplierait la taille demandée (72 dpi = échelle 1).
  return sharp(Buffer.from(markSvg(options))).png().toBuffer();
}

/** Conteneur ICO : en-tête + table d'entrées + PNG embarqués. */
function buildIco(images: { size: number; data: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const entries = Buffer.alloc(16 * images.length);
  let offset = 6 + 16 * images.length;

  images.forEach((image, index) => {
    const entry = 16 * index;
    const dimension = image.size >= 256 ? 0 : image.size;

    entries.writeUInt8(dimension, entry);
    entries.writeUInt8(dimension, entry + 1);
    entries.writeUInt8(0, entry + 2);
    entries.writeUInt8(0, entry + 3);
    entries.writeUInt16LE(1, entry + 4);
    entries.writeUInt16LE(32, entry + 6);
    entries.writeUInt32LE(image.data.length, entry + 8);
    entries.writeUInt32LE(offset, entry + 12);
    offset += image.data.length;
  });

  return Buffer.concat([header, entries, ...images.map((image) => image.data)]);
}

async function main() {
  const brandDir = path.join(ROOT, "public", "brand");
  await mkdir(brandDir, { recursive: true });

  // Icône du site : version compacte, lisible dans un onglet de 16 px.
  await writeFile(path.join(ROOT, "src", "app", "icon.svg"), markSvg({ size: 200, compact: true }));

  // Source haute résolution + déclinaisons.
  await writeFile(path.join(brandDir, "icon.svg"), markSvg({ size: 512 }));

  await writeFile(path.join(brandDir, "icon-512.png"), await rasterize({ size: 512 }));
  await writeFile(path.join(brandDir, "icon-192.png"), await rasterize({ size: 192 }));
  await writeFile(
    path.join(ROOT, "src", "app", "apple-icon.png"),
    await rasterize({ size: 180, cornerRadius: null }),
  );

  // Favicon multi-tailles : anneau fermé en dessous de 48 px.
  const ico = buildIco([
    { size: 16, data: await rasterize({ size: 16, compact: true }) },
    { size: 32, data: await rasterize({ size: 32, compact: true }) },
    { size: 48, data: await rasterize({ size: 48 }) },
  ]);
  await writeFile(path.join(ROOT, "src", "app", "favicon.ico"), ico);

  // Emblème transparent, encodé en base64 pour la carte Open Graph.
  // 600 px : au-delà du plus grand usage (540 px dans le filigrane), donc net.
  const encode = async (options: MarkOptions) => {
    const png = await rasterize(options);
    return sharp(png)
      .png({ palette: true, colors: 128, compressionLevel: 9, effort: 10 })
      .toBuffer();
  };

  const solid = await encode({ size: 600, transparent: true });
  const ghost = await encode({ size: 600, transparent: true, core: false });

  const contents = `// Généré par scripts/brand-assets.ts — ne pas éditer à la main.
// Emblème 600 × 600 transparent, utilisé dans la carte Open Graph.
export const MARK_PNG_BASE64 =
  "${solid.toString("base64")}";

/** Variante sans noyau : filigrane de fond. */
export const MARK_RING_BASE64 =
  "${ghost.toString("base64")}";
`;
  await writeFile(path.join(ROOT, "src", "lib", "brand", "mark-data.ts"), contents);

  console.log("Assets de marque générés :");
  console.log("  src/app/icon.svg, favicon.ico, apple-icon.png");
  console.log("  public/brand/icon.svg, icon-512.png, icon-192.png");
  console.log(
    `  src/lib/brand/mark-data.ts (${Math.round((solid.length + ghost.length) / 1024)} Ko)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
