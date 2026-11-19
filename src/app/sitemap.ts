import type { MetadataRoute } from "next";

import { defaultLocale, localePath, locales } from "@/lib/i18n/config";
import { simulations } from "@/lib/dsh";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.siteUrl().replace(/\/$/, "");

  function languagesFor(path: string) {
    const languages: Record<string, string> = Object.fromEntries(
      locales.map((locale) => [locale, `${base}${localePath(locale, path)}`]),
    );
    languages["x-default"] = `${base}${localePath(defaultLocale, path)}`;
    return languages;
  }

  const home = locales.map((locale) => ({
    url: `${base}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages: languagesFor("/") },
  }));

  const dsh = locales.map((locale) => ({
    url: `${base}${localePath(locale, "/dsh")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: { languages: languagesFor("/dsh") },
  }));

  const dshStructures = locales.map((locale) => ({
    url: `${base}${localePath(locale, "/dsh/strukturen")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: { languages: languagesFor("/dsh/strukturen") },
  }));

  const dshModules = ["hoeren", "sprechen", "schreiben"].flatMap((module) =>
    locales.map((locale) => ({
      url: `${base}${localePath(locale, `/dsh/${module}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: languagesFor(`/dsh/${module}`) },
    })),
  );

  const dshLearn = locales.map((locale) => ({
    url: `${base}${localePath(locale, "/dsh/lernen")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: { languages: languagesFor("/dsh/lernen") },
  }));

  const dshLessons = ["leseverstehen", "strukturen", "hoeren", "sprechen", "schreiben"].flatMap(
    (lesson) =>
      locales.map((locale) => ({
        url: `${base}${localePath(locale, `/dsh/lernen/${lesson}`)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages: languagesFor(`/dsh/lernen/${lesson}`) },
      })),
  );

  const dshSimulations = locales.flatMap((locale) =>
    simulations.map((simulation) => ({
      url: `${base}${localePath(locale, `/dsh/simulation/${simulation.slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: languagesFor(`/dsh/simulation/${simulation.slug}`) },
    })),
  );

  return [...home, ...dsh, ...dshLearn, ...dshLessons, ...dshStructures, ...dshModules, ...dshSimulations];
}
