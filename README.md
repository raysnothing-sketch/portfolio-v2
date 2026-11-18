# Rayan — Portfolio v2

Portfolio personnel : Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4,
scène 3D `three` / React Three Fiber, animations Motion, et une couche données
Turso (libSQL) + Drizzle ORM.

Les projets affichés sont **synchronisés automatiquement depuis GitHub**, puis
habillés (titre, description, catégorie, liens, accent) par des lignes en base.
Les projets sans dépôt public sont purement éditoriaux.

## Stack

| Domaine    | Choix                                                       |
| ---------- | ----------------------------------------------------------- |
| Framework  | Next.js 16.4 — App Router, Turbopack, `cacheComponents`      |
| UI         | React 19, Tailwind CSS v4, Motion, lucide-react              |
| 3D         | three, @react-three/fiber, @react-three/drei                 |
| Données    | Turso (libSQL) + Drizzle ORM                                 |
| Validation | Zod                                                          |
| Déploiement| Vercel                                                       |

## Démarrage

```bash
pnpm install
cp .env.example .env.local   # puis renseigner les valeurs
pnpm db:push                 # crée les tables
pnpm db:seed                 # injecte les projets éditoriaux
pnpm dev
```

Le site tourne sur http://localhost:3000.

## Variables d'environnement

| Variable                  | Rôle                                                       |
| ------------------------- | ---------------------------------------------------------- |
| `TURSO_DATABASE_URL`      | URL libSQL de la base (`libsql://…turso.io`)                |
| `TURSO_AUTH_TOKEN`        | Token d'accès à la base                                     |
| `GITHUB_TOKEN`            | PAT fine-grained en lecture seule (rate limit 5 000 req/h)  |
| `GITHUB_USERNAME`         | Compte dont on liste les dépôts publics                     |
| `NEXT_PUBLIC_SITE_URL`    | URL canonique (metadata, sitemap, robots)                   |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Adresse affichée dans la section contact                  |

## Scripts

| Commande          | Effet                                        |
| ----------------- | -------------------------------------------- |
| `pnpm dev`        | Serveur de développement (Turbopack)         |
| `pnpm build`      | Build de production                          |
| `pnpm start`      | Serveur de production                        |
| `pnpm lint`       | ESLint                                       |
| `pnpm typecheck`  | `tsc --noEmit`                               |
| `pnpm db:push`    | Applique le schéma Drizzle sur Turso         |
| `pnpm db:generate`| Génère les migrations SQL                    |
| `pnpm db:studio`  | Drizzle Studio                               |
| `pnpm db:seed`    | Seed des projets éditoriaux                  |

## Architecture

```
src/
├─ app/
│  ├─ layout.tsx          fonts, metadata, fond global
│  ├─ page.tsx            assemblage des sections (RSC)
│  ├─ actions.ts          Server Action : compteur de vues
│  ├─ opengraph-image.tsx carte OG générée
│  ├─ robots.ts / sitemap.ts
│  └─ globals.css         tokens Tailwind v4 + keyframes
├─ components/
│  ├─ hero.tsx            hero + parallax scroll
│  ├─ hero-scene.tsx      Canvas r3f (rendu coupé hors viewport)
│  ├─ project-explorer.tsx filtres + AnimatePresence
│  ├─ project-card.tsx    tilt 3D + glow au pointeur
│  └─ …                  nav, marquee, stats, système, contact, footer
└─ lib/
   ├─ github.ts           lecture de l'API GitHub (cache 1 h)
   ├─ projects.ts         fusion GitHub ↔ Turso
   ├─ db/schema.ts        tables `projects`, `page_views`
   └─ types.ts            modèle `Project`, `ProfileStats`
```

## Modèle de données

`projects` — une ligne peut :

- **habiller un dépôt GitHub** (`repo` renseigné) : surcharge titre, description, liens ;
- **être un projet éditorial** (`repo` = `null`) : affiché tel quel ;
- **masquer un dépôt** (`hidden = 1`) : il n'apparaît pas sur le site.

`page_views` — compteur global incrémenté par une Server Action (upsert atomique).

## Cache

Le projet utilise `cacheComponents`. Les lectures de données sont des fonctions
`'use cache'` avec `cacheLife("hours")` et le tag `projects`. Après une modification
en base, invalider avec `revalidateTag("projects", "hours")`.
