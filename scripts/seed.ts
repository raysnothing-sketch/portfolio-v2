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

type CategoryKey =
  | "ai"
  | "security"
  | "education"
  | "commerce"
  | "institutional"
  | "content"
  | "openSource"
  | "product";

type Seed = {
  slug: string;
  repo: string | null;
  title: string;
  tagline: string;
  taglineEn: string;
  taglineDe: string;
  category: CategoryKey;
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
    taglineEn:
      "Web studio for automated video editing: AI agents, Remotion timelines and synchronised 60 fps rendering.",
    taglineDe:
      "Web-Studio für automatisierte Videobearbeitung: KI-Agenten, Remotion-Timelines und synchronisiertes 60-fps-Rendering.",
    category: "ai",
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
    taglineEn:
      "Network isolation and fingerprint neutralisation: Tauri 2, Rust and fail-closed Tor routing.",
    taglineDe:
      "Netzwerk-Isolation und Fingerprint-Neutralisierung: Tauri 2, Rust und fail-closed Tor-Routing.",
    category: "security",
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
    taglineEn:
      "Cybersecurity learning platform: WASM Linux lab, network topologies and an edge libSQL database.",
    taglineDe:
      "Lernplattform für Cybersicherheit: WASM-Linux-Lab, Netzwerktopologien und Edge-libSQL-Datenbank.",
    category: "education",
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
    taglineEn:
      "Multilingual 3D e-commerce: real-time Three.js scenes, Mobile Money checkout and Drizzle ORM.",
    taglineDe:
      "Mehrsprachiger 3D-Onlineshop: Echtzeit-Three.js-Szenen, Mobile-Money-Zahlung und Drizzle ORM.",
    category: "commerce",
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
    taglineEn: "Technical publishing space: MDX articles, RSS feed and edge static rendering.",
    taglineDe: "Technischer Blog: MDX-Artikel, RSS-Feed und statisches Edge-Rendering.",
    category: "content",
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
    taglineEn:
      "Bilingual FR/EN institutional site with an online enrolment flow and transactional emails.",
    taglineDe:
      "Zweisprachige (FR/EN) Institutionsseite mit Online-Anmeldeverfahren und Transaktions-E-Mails.",
    category: "institutional",
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
    tagline: "Portail d'orientation MINT et d'accès aux cursus scientifiques en Allemagne.",
    taglineEn: "MINT orientation portal and gateway to science programmes in Germany.",
    taglineDe:
      "Orientierungsportal für MINT-Studiengänge und Zugang zu wissenschaftlichen Studiengängen in Deutschland.",
    category: "institutional",
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
    tagline: "Catalogue culinaire et commande : Better-Auth, Drizzle et libSQL edge sous 12 ms.",
    taglineEn: "Food catalogue and ordering: Better-Auth, Drizzle and edge libSQL under 12 ms.",
    taglineDe: "Speisekatalog und Bestellsystem: Better-Auth, Drizzle und Edge-libSQL unter 12 ms.",
    category: "commerce",
    stack: ["Next.js 15", "Turso", "Drizzle", "Better-Auth"],
    liveUrl: "https://kamfrifood.raysnothing.workers.dev",
    repoUrl: null,
    accent: "cyan",
    featured: false,
    sortOrder: 14,
    year: "2025",
  },
  {
    slug: "portfolio-v2",
    repo: "portfolio-v2",
    title: "Portfolio V2",
    tagline:
      "Ce portfolio : Next.js 16, cache components, scène 3D temps réel et contenu piloté par Turso.",
    taglineEn:
      "This portfolio: Next.js 16, cache components, a real-time 3D scene and Turso-driven content.",
    taglineDe:
      "Dieses Portfolio: Next.js 16, Cache Components, Echtzeit-3D-Szene und Inhalte aus Turso.",
    category: "openSource",
    stack: ["Next.js 16", "Three.js", "Turso", "Tailwind v4"],
    liveUrl: "https://portfolio-v2-pi-pied.vercel.app",
    repoUrl: "https://github.com/raysnothing-sketch/portfolio-v2",
    accent: "lime",
    featured: false,
    sortOrder: 15,
    year: "2026",
  },
];

async function main() {
  const client = createClient({ url: url as string, authToken });
  const now = Math.floor(Date.now() / 1000);

  for (const project of PROJECTS) {
    await client.execute({
      sql: `INSERT INTO projects
        (slug, repo, title, tagline, tagline_en, tagline_de, category, stack,
         live_url, repo_url, accent, featured, hidden, sort_order, year, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?)
        ON CONFLICT(slug) DO UPDATE SET
          repo = excluded.repo,
          title = excluded.title,
          tagline = excluded.tagline,
          tagline_en = excluded.tagline_en,
          tagline_de = excluded.tagline_de,
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
        project.taglineEn,
        project.taglineDe,
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
