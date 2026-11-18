import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

export const de: Dictionary = {
  meta: {
    title: "GaZaRa — Produktentwickler",
    role: "Produktentwickler",
    description:
      "Portfolio von GaZaRa — Produktentwickler. Next.js-Anwendungen, Edge-Architekturen und 3D-Interfaces, synchronisiert mit GitHub.",
    ogHeadline: ["Ich baue", "Webprodukte, die halten."],
    ogStack: "Next.js · TypeScript · Turso · Three.js",
  },

  nav: {
    aria: "Hauptnavigation",
    brand: "GaZaRa",
    projects: "Projekte",
    system: "System",
    contact: "Kontakt",
    available: "Verfügbar",
    language: "Sprache wechseln",
  },

  hero: {
    eyebrowLeft: "Produkt-Engineering",
    eyebrowRight: "Web · TypeScript · Edge",
    titleLines: ["Ich baue", "Webprodukte,", "die unter Last halten."],
    description:
      "Vom Prototyp bis zum Deployment: schnelle, durchgängig typisierte Next.js-Anwendungen auf Edge-Datenbanken. Weniger Schichten, mehr Präzision.",
    primaryCta: "Projekte ansehen",
    secondaryCta: "Code ansehen",
    scroll: "Scrollen",
    stats: {
      repos: "Öffentliche Repos",
      stars: "Sterne",
      languages: "Sprachen",
      years: "Jahre Praxis",
    },
  },

  projects: {
    kicker: "01 — Projekte",
    title: "Projekte, vom Prototyp bis in die Produktion.",
    sync: "GitHub-Sync · 1 Std.",
    all: "Alle",
    empty: "In dieser Kategorie gibt es derzeit keine Projekte.",
    code: "Code",
    view: "Ansehen",
    featured: "Auswahl",
    starsUnit: "Sterne",
    categories: {
      ai: "KI & Automatisierung",
      security: "Cybersicherheit",
      education: "Bildung & Sicherheit",
      commerce: "Plattformen & Handel",
      institutional: "Institutionell",
      content: "Content & Publishing",
      openSource: "Open Source",
      product: "Produkt",
    },
  },

  system: {
    kicker: "02 — System",
    title: "Die Methode hinter den Interfaces.",
    intro:
      "Drei Leitplanken, die ich an jedes Projekt anlege: die Domäne verstehen, die technische Oberfläche verkleinern, jede Entscheidung umkehrbar halten.",
    principles: [
      {
        title: "Lesbare Architektur",
        body:
          "App Router, standardmäßig Server Components, Server Actions für Mutationen. Die Fachlogik lebt in /lib, nie in den Komponenten.",
        tags: ["RSC", "Server Actions", "Feature-driven"],
      },
      {
        title: "Gemessene Performance",
        body:
          "Bundle-Budgets, 3D-Rendering außerhalb des Viewports gestoppt, optimierte Bilder, Cache pro Profil. Erst messen, dann optimieren.",
        tags: ["Core Web Vitals", "ISR", "Lazy 3D"],
      },
      {
        title: "Sicherheit als Standard",
        body:
          "Zod-Validierung an jeder Grenze, Secrets außerhalb des Clients, abgeleitete Daten auf dem Server. Ein Formular ist nie eine Quelle der Wahrheit.",
        tags: ["Zod", "Least Privilege", "TLS"],
      },
    ],
    treeCaption: "Verzeichnisbaum — genau so ist es deployt",
    tree: `portfolio-v2
├─ src/app/[locale]/   RSC · Server Actions · Metadaten
├─ src/lib/github.ts   Repo-Sync (Cache 1 Std.)
├─ src/lib/i18n/       Wörterbücher DE · EN · FR
├─ src/lib/db/         Turso libSQL · Drizzle ORM
├─ src/components/     Three.js · Motion · Tailwind v4
└─ drizzle/            versioniertes Schema + Seed`,
  },

  contact: {
    kicker: "03 — Kontakt",
    title: "Ein System zu bauen?",
    body:
      "Verfügbar für Produktarbeit, Architektur-Sanierungen und ambitionierte Prototypen. Antwort innerhalb von 48 Stunden.",
    copied: "Adresse kopiert",
    copyHint: "Adresse kopieren",
    github: "Auf GitHub schreiben",
    location: "Europa · Remote",
  },

  footer: {
    brand: "GaZaRa — Portfolio / 2026",
    builtWith: "Next.js 16 · Turso · Three.js · Motion",
    views: "Aufrufe",
    top: "Nach oben",
  },

  languages: {
    de: "Deutsch",
    en: "English",
    fr: "Français",
  },

  a11y: {
    skip: "Zum Inhalt springen",
  },
};
