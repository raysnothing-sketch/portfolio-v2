import type { CategoryKey } from "@/lib/types";

/**
 * Dictionnaire français — source de vérité du type `Dictionary`.
 * Les autres locales sont typées à partir de cet objet : une clé oubliée
 * casse le build, pas l'interface.
 */
export const fr = {
  meta: {
    title: "GaZaRa — Ingénieur produit web",
    role: "Ingénieur produit web",
    description:
      "Portfolio de GaZaRa — ingénieur produit web. Applications Next.js, architectures edge et interfaces 3D, synchronisées avec GitHub.",
    ogHeadline: ["Je construis des", "produits web solides."],
    ogStack: "Next.js · TypeScript · Turso · Three.js",
  },

  nav: {
    aria: "Navigation principale",
    brand: "GaZaRa",
    projects: "Projets",
    system: "Système",
    contact: "Contact",
    available: "Disponible",
    language: "Changer de langue",
  },

  hero: {
    eyebrowLeft: "Ingénierie produit",
    eyebrowRight: "Web · TypeScript · Edge",
    titleLines: ["Je construis des", "produits web", "qui tiennent la charge."],
    description:
      "Du prototype au déploiement : je conçois des applications Next.js rapides, typées de bout en bout et adossées à des bases de données edge. Moins de couches, plus de précision.",
    primaryCta: "Explorer les projets",
    secondaryCta: "Voir le code",
    scroll: "Défiler",
    stats: {
      repos: "Dépôts publics",
      stars: "Étoiles",
      languages: "Langages",
      years: "Années de pratique",
    },
  },

  projects: {
    kicker: "01 — Répertoire",
    title: "Projets livrés, du prototype à la production.",
    sync: "Sync GitHub · 1 h",
    all: "Tous",
    empty: "Aucun projet dans cette catégorie pour l’instant.",
    code: "Code",
    view: "Voir",
    featured: "Sélection",
    starsUnit: "étoiles",
    categories: {
      ai: "Intelligence artificielle",
      security: "Cybersécurité",
      education: "Éducation & sécurité",
      commerce: "Plateformes & commerce",
      institutional: "Institutionnel",
      content: "Contenu & édition",
      openSource: "Open source",
      product: "Produit",
    } satisfies Record<CategoryKey, string>,
  },

  system: {
    kicker: "02 — Système",
    title: "La méthode derrière les interfaces.",
    intro:
      "Trois contraintes que je m’impose sur chaque projet : comprendre le domaine, réduire la surface technique, rendre chaque décision réversible.",
    principles: [
      {
        title: "Architecture lisible",
        body:
          "App Router, Server Components par défaut, Server Actions pour les mutations. La logique métier vit dans /lib, jamais dans les composants.",
        tags: ["RSC", "Server Actions", "Feature-driven"],
      },
      {
        title: "Performance mesurée",
        body:
          "Budgets de bundle, rendu 3D coupé hors viewport, images optimisées, cache par profil. On mesure avant d’optimiser, jamais l’inverse.",
        tags: ["Core Web Vitals", "ISR", "Lazy 3D"],
      },
      {
        title: "Sécurité par défaut",
        body:
          "Validation Zod à chaque frontière, secrets hors du client, données dérivées côté serveur. Un formulaire n’est jamais une source de vérité.",
        tags: ["Zod", "Moindre privilège", "TLS"],
      },
    ],
    treeCaption: "arborescence — elle est réellement déployée",
    tree: `portfolio-v2
├─ src/app/[locale]/   RSC · Server Actions · metadata
├─ src/lib/github.ts   synchronisation des dépôts (cache 1 h)
├─ src/lib/i18n/       dictionnaires DE · EN · FR
├─ src/lib/db/         Turso libSQL · Drizzle ORM
├─ src/components/     Three.js · Motion · Tailwind v4
└─ drizzle/            schéma versionné + seed`,
  },

  contact: {
    kicker: "03 — Contact",
    title: "Un système à construire ?",
    body:
      "Disponible pour des missions produit, des refontes d’architecture et des prototypes ambitieux. Réponse sous 48 h.",
    copied: "Adresse copiée",
    copyHint: "Copier l’adresse",
    github: "Écrire sur GitHub",
    location: "Europe · À distance",
  },

  footer: {
    brand: "GaZaRa — Portfolio / 2026",
    builtWith: "Next.js 16 · Turso · Three.js · Motion",
    views: "vues",
    top: "Haut",
  },

  languages: {
    de: "Deutsch",
    en: "English",
    fr: "Français",
  },

  a11y: {
    skip: "Aller au contenu",
  },
} as const satisfies DictionaryShape;

/** Forme attendue : des chaînes partout, les tableaux restent lisibles. */
type DictionaryShape = {
  meta: {
    title: string;
    role: string;
    description: string;
    ogHeadline: readonly string[];
    ogStack: string;
  };
  nav: {
    aria: string;
    brand: string;
    projects: string;
    system: string;
    contact: string;
    available: string;
    language: string;
  };
  hero: {
    eyebrowLeft: string;
    eyebrowRight: string;
    titleLines: readonly string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
    stats: { repos: string; stars: string; languages: string; years: string };
  };
  projects: {
    kicker: string;
    title: string;
    sync: string;
    all: string;
    empty: string;
    code: string;
    view: string;
    featured: string;
    starsUnit: string;
    categories: Record<CategoryKey, string>;
  };
  system: {
    kicker: string;
    title: string;
    intro: string;
    principles: readonly {
      title: string;
      body: string;
      tags: readonly string[];
    }[];
    treeCaption: string;
    tree: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    copied: string;
    copyHint: string;
    github: string;
    location: string;
  };
  footer: { brand: string; builtWith: string; views: string; top: string };
  languages: Record<"de" | "en" | "fr", string>;
  a11y: { skip: string };
};

export type Dictionary = DictionaryShape;
