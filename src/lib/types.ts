export type Accent = "violet" | "cyan" | "lime";

/**
 * Clés de catégorie stockées en base (colonne `category`).
 * Le libellé affiché vient du dictionnaire de la locale courante.
 */
export type CategoryKey =
  | "ai"
  | "security"
  | "education"
  | "commerce"
  | "institutional"
  | "content"
  | "openSource"
  | "product";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: CategoryKey;
  stack: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  accent: Accent;
  featured: boolean;
  year: string | null;
  stars: number;
  language: string | null;
  updatedAt: string;
  source: "github" | "manual";
};

export type ProfileStats = {
  repos: number;
  stars: number;
  languages: number;
  years: number;
};
