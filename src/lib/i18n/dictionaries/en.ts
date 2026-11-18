import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

export const en: Dictionary = {
  meta: {
    title: "Rayan — Product engineer",
    description:
      "Portfolio of Rayan — product engineer. Next.js applications, edge architectures and 3D interfaces, synced from GitHub.",
    ogHeadline: ["I build web", "products that hold up."],
    ogStack: "Next.js · TypeScript · Turso · Three.js",
  },

  nav: {
    aria: "Main navigation",
    brand: "Rayan / Portfolio",
    projects: "Work",
    system: "System",
    contact: "Contact",
    available: "Available",
    language: "Change language",
  },

  hero: {
    eyebrowLeft: "Product engineering",
    eyebrowRight: "Web · TypeScript · Edge",
    titleLines: ["I build", "web products", "that hold up under load."],
    description:
      "From prototype to deployment: fast, fully typed Next.js applications on edge databases. Fewer layers, more precision.",
    primaryCta: "Explore the work",
    secondaryCta: "View code",
    scroll: "Scroll",
    stats: {
      repos: "Public repos",
      stars: "Stars",
      languages: "Languages",
      years: "Years of practice",
    },
  },

  projects: {
    kicker: "01 — Index",
    title: "Shipped projects, from prototype to production.",
    sync: "GitHub sync · 1 h",
    all: "All",
    empty: "No projects in this category yet.",
    code: "Code",
    view: "Visit",
    featured: "Featured",
    starsUnit: "stars",
    categories: {
      ai: "AI & automation",
      security: "Security",
      education: "Education & security",
      commerce: "Platforms & commerce",
      institutional: "Institutional",
      content: "Content & publishing",
      openSource: "Open source",
      product: "Product",
    },
  },

  system: {
    kicker: "02 — System",
    title: "The method behind the interfaces.",
    intro:
      "Three constraints I hold myself to on every project: understand the domain, shrink the technical surface, keep every decision reversible.",
    principles: [
      {
        title: "Readable architecture",
        body:
          "App Router, Server Components by default, Server Actions for mutations. Business logic lives in /lib, never in components.",
        tags: ["RSC", "Server Actions", "Feature-driven"],
      },
      {
        title: "Measured performance",
        body:
          "Bundle budgets, 3D rendering paused off-screen, optimised images, per-profile caching. Measure first, optimise second.",
        tags: ["Core Web Vitals", "ISR", "Lazy 3D"],
      },
      {
        title: "Secure by default",
        body:
          "Zod validation at every boundary, secrets kept off the client, data derived on the server. A form is never a source of truth.",
        tags: ["Zod", "Least privilege", "TLS"],
      },
    ],
    treeCaption: "file tree — this is what actually ships",
    tree: `portfolio-v2
├─ src/app/[locale]/   RSC · Server Actions · metadata
├─ src/lib/github.ts   repo sync (1 h cache)
├─ src/lib/i18n/       DE · EN · FR dictionaries
├─ src/lib/db/         Turso libSQL · Drizzle ORM
├─ src/components/     Three.js · Motion · Tailwind v4
└─ drizzle/            versioned schema + seed`,
  },

  contact: {
    kicker: "03 — Contact",
    title: "Got a system to build?",
    body:
      "Available for product work, architecture overhauls and ambitious prototypes. Reply within 48 hours.",
    copied: "Email copied",
    copyHint: "Copy email",
    github: "Reach me on GitHub",
    location: "Europe · Remote",
  },

  footer: {
    brand: "Rayan — Portfolio / 2026",
    builtWith: "Next.js 16 · Turso · Three.js · Motion",
    views: "views",
    top: "Top",
  },

  languages: {
    de: "Deutsch",
    en: "English",
    fr: "Français",
  },

  a11y: {
    skip: "Skip to content",
  },
};
