/**
 * Seed de la base Turso : habillage des dépôts GitHub + projets manuels.
 * Usage : pnpm db:seed
 */
import { config } from "dotenv";
import { createClient } from "@libsql/client";

config({ path: ".env.local", quiet: true });

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  throw new Error("TURSO_DATABASE_URL / TURSO_AUTH_TOKEN absents de .env.local");
}

type Seed = {
  slug: string;
  repo: string | null;
  title: string;
  tagline: string;
  category: string;
  stack: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  accent: "violet" | "cyan" | "lime";
  featured: boolean;
  sortOrder: number;
  year: string;
};

const PROJECTS: Seed[] = [
  {
    slug: "ai-ugc-studio",
    repo: "ai-ugc-studio",
    title: "AI UGC Studio",
    tagline:
      "Studio web de montage automatisé : agents IA, timelines Remotion et rendu vidéo 60 fps synchronisé.",
    category: "Intelligence artificielle",
    stack: ["Next.js", "TypeScript", "Remotion", "Tailwind", "Lambda"],
    liveUrl: "https://ai-ugc-studio-liard.vercel.app",
    repoUrl: "https://github.com/raysnothing-sketch/ai-ugc-studio",
    accent: "violet",
    featured: true,
    sortOrder: 1,
    year: "2026",
  },
  {
    slug: "ghostnet-suite",
    repo: "ghostnet-suite",
    title: "GhostNet Suite",
    tagline:
      "Isolation réseau et neutralisation des empreintes : Tauri 2, Rust et routage Tor fail-closed.",
    category: "Cybersécurité",
    stack: ["Tauri 2", "Rust", "React 19", "Tor / Arti"],
    liveUrl: "https://furybrowser.dev",
    repoUrl: "https://github.com/raysnothing-sketch/ghostnet-suite",
    accent: "cyan",
    featured: true,
    sortOrder: 2,
    year: "2026",
  },
  {
    slug: "raylab",
    repo: "raylab",
    title: "RayLab Platform",
    tagline:
      "Plateforme d'apprentissage cybersécurité : labo Linux WASM, topologies réseau et base libSQL edge.",
    category: "Éducation & sécurité",
    stack: ["Next.js", "Turso", "WASM", "TypeScript"],
    liveUrl: "https://raylab.pages.dev",
    repoUrl: "https://github.com/raysnothing-sketch/raylab",
    accent: "lime",
    featured: true,
    sortOrder: 3,
    year: "2026",
  },
  {
    slug: "raylearn-web",
    repo: null,
    title: "RayLearn Web",
    tagline:
      "E-commerce 3D multilingue : scènes Three.js temps réel, paiement Mobile Money et Drizzle ORM.",
    category: "Plateformes & commerce",
    stack: ["Next.js 15", "Three.js", "Drizzle", "Cloudflare"],
    liveUrl: "https://raylearn.org",
    repoUrl: null,
    accent: "violet",
    featured: false,
    sortOrder: 10,
    year: "2025",
  },
  {
    slug: "raylearn-blog",
    repo: null,
    title: "RayLearn Blog",
    tagline: "Espace éditorial technique : articles MDX, flux RSS et rendu statique edge.",
    category: "Contenu & édition",
    stack: ["Next.js", "MDX", "SEO"],
    liveUrl: "https://raylearn-blog.vercel.app",
    repoUrl: null,
    accent: "cyan",
    featured: false,
    sortOrder: 11,
    year: "2025",
  },
  {
    slug: "institut-tsimi-evouna",
    repo: null,
    title: "Institut Bilingue Tsimi Evouna",
    tagline:
      "Site institutionnel bilingue FR/EN avec parcours d'inscription en ligne et emails transactionnels.",
    category: "Institutionnel",
    stack: ["TanStack Start", "Supabase", "Resend"],
    liveUrl: "https://tsimievouna.xyz",
    repoUrl: null,
    accent: "lime",
    featured: false,
    sortOrder: 12,
    year: "2025",
  },
  {
    slug: "deutschcampus-sciences",
    repo: null,
    title: "DeutschCampus Sciences",
    tagline:
      "Portail d'orientation MINT et d'accès aux cursus scientifiques en Allemagne.",
    category: "Institutionnel",
    stack: ["React", "Netlify Edge", "Tailwind"],
    liveUrl: "https://deutschcampus-sciences.netlify.app",
    repoUrl: null,
    accent: "violet",
    featured: false,
    sortOrder: 13,
    year: "2025",
  },
  {
    slug: "kamfrifood",
    repo: null,
    title: "KamfriFood",
    tagline:
      "Catalogue culinaire et commande : Better-Auth, Drizzle et libSQL edge sous 12 ms.",
    category: "Plateformes & commerce",
    stack: ["Next.js 15", "Turso", "Drizzle", "Better-Auth"],
    liveUrl: "https://kamfrifood.raysnothing.workers.dev",
    repoUrl: null,
    accent: "cyan",
    featured: false,
    sortOrder: 14,
    year: "2025",
  },
];

async function main() {
  const client = createClient({ url: url as string, authToken });
  const now = Math.floor(Date.now() / 1000);

  for (const project of PROJECTS) {
    await client.execute({
    sql: `INSERT INTO projects
      (slug, repo, title, tagline, category, stack, live_url, repo_url, accent, featured, hidden, sort_order, year, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?)
      ON CONFLICT(slug) DO UPDATE SET
        repo = excluded.repo,
        title = excluded.title,
        tagline = excluded.tagline,
        category = excluded.category,
        stack = excluded.stack,
        live_url = excluded.live_url,
        repo_url = excluded.repo_url,
        accent = excluded.accent,
        featured = excluded.featured,
        sort_order = excluded.sort_order,
        year = excluded.year,
        updated_at = excluded.updated_at`,
    args: [
      project.slug,
      project.repo,
      project.title,
      project.tagline,
      project.category,
      JSON.stringify(project.stack),
      project.liveUrl,
      project.repoUrl,
      project.accent,
      project.featured ? 1 : 0,
      project.sortOrder,
      project.year,
      now,
    ],
    });
  }

  await client.execute({
    sql: `INSERT INTO page_views (id, count, updated_at) VALUES ('home', 0, ?)
          ON CONFLICT(id) DO NOTHING`,
    args: [now],
  });

  const { rows } = await client.execute("SELECT COUNT(*) AS total FROM projects");
  console.log(`Seed terminé — ${rows[0]?.total ?? 0} projets en base.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
