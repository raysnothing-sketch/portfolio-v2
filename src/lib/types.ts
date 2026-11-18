export type Accent = "violet" | "cyan" | "lime";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
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
