/**
 * Géométrie du sceau « nœud » : source unique de vérité pour l'icône du site,
 * le favicon et la bannière Open Graph.
 *
 * Repère 200 × 200 : anneau hexagonal à sommet plat, ouvert au milieu de
 * l'arête haute, avec un noyau plein au centre.
 */

export const MARK_VIEW = 200;
export const MARK_CENTER = { x: 100, y: 100 } as const;
export const MARK_RADIUS = 72;
/** Rayon du noyau, en unités du repère 200. */
export const MARK_CORE = 12;
/** Épaisseur du trait. */
export const MARK_STROKE = 14;
/** Variante compacte (16–32 px) : plus gras et fermée. */
export const MARK_STROKE_COMPACT = 22;
/** Part de l'arête haute laissée ouverte, de 0 à 1. */
export const MARK_GAP = 0.5;

export const MARK_COLORS = {
  ink: "#05060a",
  inkSoft: "#0a0d16",
  line: "#1a2033",
  chalk: "#eef1f8",
  mute: "#8b93ab",
  violet: "#7c5cff",
  cyan: "#22d3ee",
  lime: "#b6f36b",
} as const;

type Point = { x: number; y: number };

const round = (value: number) => Math.round(value * 100) / 100;

const lerp = (a: Point, b: Point, t: number): Point => ({
  x: round(a.x + (b.x - a.x) * t),
  y: round(a.y + (b.y - a.y) * t),
});

const VERTICES: Point[] = Array.from({ length: 6 }, (_, index) => {
  const angle = (Math.PI / 3) * index;
  return {
    x: round(MARK_CENTER.x + MARK_RADIUS * Math.cos(angle)),
    y: round(MARK_CENTER.y + MARK_RADIUS * Math.sin(angle)),
  };
});

const toPath = (points: Point[]) =>
  points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`).join(" ");

/**
 * Anneau hexagonal parcouru depuis le milieu de l'arête haute : on part juste
 * à droite de l'ouverture, on fait le tour, on revient juste à gauche. Les deux
 * extrémités sont sur la même horizontale, donc aucune pointe parasite.
 */
export const MARK_OUTLINE = toPath([
  lerp(VERTICES[4], VERTICES[5], 0.5 + MARK_GAP / 2),
  VERTICES[5],
  VERTICES[0],
  VERTICES[1],
  VERTICES[2],
  VERTICES[3],
  VERTICES[4],
  lerp(VERTICES[4], VERTICES[5], 0.5 - MARK_GAP / 2),
]);

/** Anneau fermé, pour les tailles où l'ouverture deviendrait du bruit. */
export const MARK_OUTLINE_CLOSED = `${toPath([
  VERTICES[4],
  VERTICES[5],
  VERTICES[0],
  VERTICES[1],
  VERTICES[2],
  VERTICES[3],
])} Z`;

export const MARK_VERTICES = VERTICES;
