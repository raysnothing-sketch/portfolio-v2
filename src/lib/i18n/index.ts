import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { de } from "@/lib/i18n/dictionaries/de";
import { en } from "@/lib/i18n/dictionaries/en";
import { fr, type Dictionary } from "@/lib/i18n/dictionaries/fr";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { de, en, fr };

/** Dictionnaire complet d'une locale, avec repli sur la locale par défaut. */
export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
