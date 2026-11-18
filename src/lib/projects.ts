import { cacheLife, cacheTag } from "next/cache";
import { desc } from "drizzle-orm";

import { db } from "@/lib/db";
import { projects as projectsTable, type ProjectRow } from "@/lib/db/schema";
import { getGithubRepos } from "@/lib/github";
import type { Locale } from "@/lib/i18n/config";
import type { Accent, CategoryKey, ProfileStats, Project } from "@/lib/types";

const ACCENTS: Accent[] = ["violet", "cyan", "lime"];

const CATEGORY_KEYS: CategoryKey[] = [
  "ai",
  "security",
  "education",
  "commerce",
  "institutional",
  "content",
  "openSource",
  "product",
];

const ACRONYMS = new Set([
  "ai",
  "api",
  "cms",
  "css",
  "db",
  "gdpr",
  "html",
  "ia",
  "js",
  "llm",
  "saas",
  "sql",
  "ts",
  "ugc",
  "ui",
  "ux",
  "wasm",
]);

/** "ai-ugc-studio" -> "AI UGC Studio" */
function titleize(slug: string): string {
  return slug
    .split(/[-_.]/)
    .filter(Boolean)
    .map((part) =>
      ACRONYMS.has(part.toLowerCase())
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join(" ");
}

function parseStack(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string").slice(0, 6);
  } catch {
    return [];
  }
}

function normalizeAccent(value: string | null | undefined, fallback: Accent): Accent {
  return value === "violet" || value === "cyan" || value === "lime" ? value : fallback;
}

function normalizeCategory(value: string | null | undefined): CategoryKey {
  return CATEGORY_KEYS.includes(value as CategoryKey) ? (value as CategoryKey) : "product";
}

/** Tagline localisée, avec repli sur le français puis sur la description GitHub. */
function pickTagline(
  row: ProjectRow | undefined,
  locale: Locale,
  fallback: string | null,
): string {
  if (!row) return fallback ?? "Projet open source.";

  if (locale === "de" && row.taglineDe) return row.taglineDe;
  if (locale === "en" && row.taglineEn) return row.taglineEn;
  return row.tagline;
}

function yearOf(date: string | null): string | null {
  if (!date) return null;
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? null : String(parsed.getFullYear());
}

/**
 * Fusionne trois sources :
 *  1. les dépôts GitHub (vérité automatique)
 *  2. les lignes Turso qui « habillent » un dépôt (`repo` renseigné)
 *  3. les projets 100 % manuels (`repo` à null)
 *
 * La locale fait partie de la clé de cache : trois variantes prérendues.
 */
export async function getProjects(locale: Locale): Promise<Project[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("projects");

  const [repos, rows] = await Promise.all([
    getGithubRepos(),
    db.select().from(projectsTable).orderBy(desc(projectsTable.featured), projectsTable.sortOrder),
  ]);

  const byRepo = new Map(rows.filter((row) => row.repo).map((row) => [row.repo as string, row]));

  const fromRepos = repos.flatMap<{ project: Project; order: number }>((repo, index) => {
    const row = byRepo.get(repo.name);
    if (row?.hidden) return [];

    const derivedStack = [repo.language, ...repo.topics]
      .filter((item): item is string => Boolean(item))
      .slice(0, 5);

    return [
      {
        order: row?.sortOrder ?? 100 + index,
        project: {
          slug: repo.name,
          title: row?.title ?? titleize(repo.name),
          tagline: pickTagline(row, locale, repo.description),
          category: normalizeCategory(row?.category ?? "openSource"),
          stack: row ? parseStack(row.stack) : derivedStack,
          liveUrl: row?.liveUrl ?? (repo.homepage?.trim() ? repo.homepage.trim() : null),
          repoUrl: row?.repoUrl ?? repo.htmlUrl,
          accent: normalizeAccent(row?.accent, ACCENTS[index % ACCENTS.length]),
          featured: row?.featured ?? false,
          year: row?.year ?? yearOf(repo.createdAt),
          stars: repo.stars,
          language: repo.language,
          updatedAt: repo.updatedAt,
          source: "github" as const,
        },
      },
    ];
  });

  const manual = rows.flatMap<{ project: Project; order: number }>((row, index) => {
    if (row.repo || row.hidden) return [];

    return [
      {
        order: row.sortOrder,
        project: {
          slug: row.slug,
          title: row.title,
          tagline: pickTagline(row, locale, row.tagline),
          category: normalizeCategory(row.category),
          stack: parseStack(row.stack),
          liveUrl: row.liveUrl,
          repoUrl: row.repoUrl,
          accent: normalizeAccent(row.accent, ACCENTS[(index + 1) % ACCENTS.length]),
          featured: row.featured,
          year: row.year ?? yearOf(row.updatedAt?.toISOString() ?? null),
          stars: 0,
          language: parseStack(row.stack)[0] ?? null,
          updatedAt: (row.updatedAt ?? new Date()).toISOString(),
          source: "manual" as const,
        },
      },
    ];
  });

  return [...fromRepos, ...manual]
    .sort(
      (a, b) =>
        Number(b.project.featured) - Number(a.project.featured) ||
        a.order - b.order ||
        b.project.stars - a.project.stars ||
        b.project.updatedAt.localeCompare(a.project.updatedAt),
    )
    .map((entry) => entry.project);
}

export async function getStats(): Promise<ProfileStats> {
  "use cache";
  cacheLife("hours");
  cacheTag("projects");

  const repos = await getGithubRepos();
  const languages = new Set(repos.map((repo) => repo.language).filter(Boolean));
  const dates = repos
    .map((repo) => Date.parse(repo.createdAt))
    .filter((value) => !Number.isNaN(value));
  const firstYear = dates.length
    ? new Date(Math.min(...dates)).getFullYear()
    : new Date().getFullYear();

  return {
    repos: repos.length,
    stars: repos.reduce((total, repo) => total + repo.stars, 0),
    languages: languages.size,
    years: Math.max(1, new Date().getFullYear() - firstYear),
  };
}
