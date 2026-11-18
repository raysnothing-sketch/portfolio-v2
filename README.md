# Rayan — Portfolio v2

Portfolio personnel : Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4,
scène 3D `three` / React Three Fiber, animations Motion, et une couche données
Turso (libSQL) + Drizzle ORM.

Les projets affichés sont **synchronisés automatiquement depuis GitHub**, puis
habillés (titre, description, catégorie, liens, accent) par des lignes en base.
Les projets sans dépôt public sont purement éditoriaux.

## Stack

| Domaine     | Choix                                                       |
| ----------- | ----------------------------------------------------------- |
| Framework   | Next.js 16.4 — App Router, Turbopack, `cacheComponents`      |
| UI          | React 19, Tailwind CSS v4, Motion, lucide-react              |
| 3D          | three, @react-three/fiber, @react-three/drei                 |
| Données     | Turso (libSQL) + Drizzle ORM                                 |
| i18n        | DE · EN · FR — routes localisées, dictionnaires typés        |
| Validation  | Zod                                                          |
| Déploiement | Vercel                                                       |

## Langues

Trois locales, préfixées dans l'URL : `/de` (défaut), `/en`, `/fr`.

- La racine `/` redirige via `src/proxy.ts` : cookie `NEXT_LOCALE` d'abord,
  puis `Accept-Language`, puis repli sur `de`. Chaque visite d'une URL localisée
  rafraîchit le cookie.
- Les dictionnaires vivent dans `src/lib/i18n/dictionaries/`. `fr.ts` définit le
  type `Dictionary` ; ajouter une clé casse le build des deux autres locales
  plutôt que d'afficher un texte manquant.
- Les textes de projets sont en base (`tagline`, `tagline_en`, `tagline_de`),
  les catégories sont des clés (`ai`, `security`, …) traduites à l'affichage.
- `hreflang` (`de`, `en`, `fr`, `x-default`) est émis par le layout et le sitemap.

Pour ajouter une langue : étendre `locales` dans `src/lib/i18n/config.ts`,
créer le dictionnaire, ajouter la colonne `tagline_xx` si besoin, puis
redéployer — `generateStaticParams` prérend les trois variantes.

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
| `pnpm brand:assets`| Régénère icône, favicon et emblème OG       |

## Identité visuelle

Le sceau (anneau hexagonal ouvert + noyau) est décrit une seule fois, en
coordonnées, dans `src/lib/brand/mark.ts`. `pnpm brand:assets` en dérive :

| Fichier                        | Usage                                  |
| ------------------------------ | -------------------------------------- |
| `src/app/icon.svg`             | icône d'onglet (anneau fermé, lisible à 16 px) |
| `src/app/favicon.ico`          | 16 / 32 / 48 px                        |
| `src/app/apple-icon.png`       | 180 px, écran d'accueil iOS            |
| `public/brand/icon-512.png`    | source, réseaux sociaux, presse        |
| `public/brand/icon.svg`        | source vectorielle haute résolution    |
| `src/lib/brand/mark-data.ts`   | emblème base64 pour la carte Open Graph |

La bannière 1200 × 630 est générée à la demande par
`src/app/[locale]/opengraph-image.tsx` : elle reprend l'emblème, la grille et
la hiérarchie typographique du site, dans la langue de la page.

## Architecture

```
src/
├─ app/
│  ├─ [locale]/
│  │  ├─ layout.tsx       fonts, metadata, hreflang, fond global
│  │  ├─ page.tsx         assemblage des sections (RSC)
│  │  └─ opengraph-image.tsx bannière OG localisée
│  ├─ actions.ts          Server Action : compteur de vues
│  ├─ icon.svg / favicon.ico / apple-icon.png
│  ├─ robots.ts / sitemap.ts
│  └─ globals.css         tokens Tailwind v4 + keyframes
├─ components/
│  ├─ hero.tsx            hero + parallax scroll
│  ├─ hero-scene.tsx      Canvas r3f (rendu coupé hors viewport)
│  ├─ locale-switcher.tsx DE / EN / FR
│  ├─ project-explorer.tsx filtres + AnimatePresence
│  ├─ project-card.tsx    tilt 3D + glow au pointeur
│  └─ …                  nav, marquee, stats, système, contact, footer
├─ lib/
│  ├─ i18n/               config, dictionnaires, getDictionary
│  ├─ brand/mark.ts       géométrie du sceau (source unique)
│  ├─ github.ts           lecture de l'API GitHub (cache 1 h)
│  ├─ projects.ts         fusion GitHub ↔ Turso, localisée
│  ├─ db/schema.ts        tables `projects`, `page_views`
│  └─ types.ts            modèle `Project`, `ProfileStats`
└─ proxy.ts               négociation de langue
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
