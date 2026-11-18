/**
 * Monogramme GaZaRa — géométrie unique, source de vérité pour le logo du site,
 * le favicon et la bannière Open Graph.
 *
 * Trois glyphes (G, Z, R) tracés à la plume sur une grille de 200, épaisseur
 * constante, jonctions arrondies. Aucune police : les tracés sont explicites,
 * donc identiques sur toutes les machines et nets à toutes les tailles.
 */

export const BRAND_NAME = "GaZaRa";

export const MONOGRAM_VIEW = 200;
/** Épaisseur du trait, en unités de la grille 200. */
export const MONOGRAM_STROKE = 12;
/** Variante compacte (16–32 px) : plus grasse, l'écart entre lettres se referme. */
export const MONOGRAM_STROKE_COMPACT = 17;

export const BRAND_COLORS = {
  ink: "#05060a",
  inkSoft: "#0a0d16",
  line: "#1a2033",
  chalk: "#eef1f8",
  mute: "#8b93ab",
  violet: "#7c5cff",
  blue: "#4f9cf6",
  cyan: "#22d3ee",
  lime: "#b6f36b",
} as const;

/**
 * Les trois lettres occupent une grille de 148 × 84 unités, centrée : colonnes
 * de 36, gouttières de 20 (soit 1,7 fois l'épaisseur du trait), hauteur 58 → 142.
 */
export const MONOGRAM_GLYPHS = [
  // G : barre haute, montant gauche, barre basse, remontée, barre médiane.
  "M62 58H26V142H62V104H44",
  // Z : barre haute, diagonale, barre basse.
  "M82 58H118L82 142H118",
  // R : montant, cuvette, jambe.
  "M138 142V58H166V104H138M162 104L174 142",
] as const;

/** Boîte englobante des glyphes, marges de trait comprises. */
export const MONOGRAM_BOX = { x: 20, y: 52, width: 160, height: 96 } as const;
