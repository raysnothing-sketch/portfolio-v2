import type { MetadataRoute } from "next";

import { defaultLocale, localePath, locales } from "@/lib/i18n/config";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.siteUrl().replace(/\/$/, "");

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((locale) => [locale, `${base}${localePath(locale)}`]),
  );
  languages["x-default"] = `${base}${localePath(defaultLocale)}`;

  return locales.map((locale) => ({
    url: `${base}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
