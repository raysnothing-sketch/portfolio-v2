/**
 * Configuration i18n — source de vérité unique pour les locales supportées.
 * Aucune dépendance : le Proxy et les Server Components importent ce fichier.
 */

export const locales = ["de", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

/** Repli quand ni le cookie ni `Accept-Language` ne donnent d'indice. */
export const defaultLocale: Locale = "de";

export const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
};

export const localeShort: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
};

/** Valeurs utilisées par `openGraph.locale` / `alternates.languages`. */
export const localeOg: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  fr: "fr_FR",
};

export const LANGUAGE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** `/de` + `/projets` -> `/de/projets` */
export function localePath(locale: Locale, pathname = "/"): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Retire le préfixe de locale d'un chemin : `/de#projets` -> `#projets`. */
export function stripLocale(pathname: string): string {
  const match = /^\/(de|en|fr)(?=$|\/)/.exec(pathname);
  const rest = match ? pathname.slice(match[0].length) : pathname;
  return rest === "" ? "" : rest;
}
