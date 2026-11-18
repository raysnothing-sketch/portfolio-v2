import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Projets affichés sur le portfolio.
 *
 * Deux usages :
 *  - `repo` renseigné  -> habille un dépôt GitHub (override des champs dérivés)
 *  - `repo` à null     -> projet non public sur GitHub, ajouté manuellement
 *
 * `category` stocke une clé technique (`ai`, `security`, …) traduite à
 * l'affichage par le dictionnaire de la locale courante.
 */
export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  repo: text("repo"),
  title: text("title").notNull(),
  tagline: text("tagline").notNull(),
  taglineEn: text("tagline_en"),
  taglineDe: text("tagline_de"),
  category: text("category").notNull().default("product"),
  stack: text("stack").notNull().default("[]"),
  liveUrl: text("live_url"),
  repoUrl: text("repo_url"),
  accent: text("accent").notNull().default("violet"),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  hidden: integer("hidden", { mode: "boolean" }).notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  year: text("year"),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

/** Compteur de visites (une ligne par page). */
export const pageViews = sqliteTable("page_views", {
  id: text("id").primaryKey(),
  count: integer("count").notNull().default(0),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type ProjectRow = typeof projects.$inferSelect;
export type PageViewRow = typeof pageViews.$inferSelect;
