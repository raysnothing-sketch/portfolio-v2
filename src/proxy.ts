import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, LANGUAGE_COOKIE, locales } from "@/lib/i18n/config";

/**
 * Négociation de langue : tout chemin sans préfixe est redirigé vers `/xx/...`.
 * Ordre de priorité : cookie explicite -> `Accept-Language` -> locale par défaut.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";

  if (isLocale(firstSegment)) {
    const response = NextResponse.next();

    // Mémorise le choix explicite pour les prochaines visites sur `/`.
    if (request.cookies.get(LANGUAGE_COOKIE)?.value !== firstSegment) {
      response.cookies.set(LANGUAGE_COOKIE, firstSegment, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }

    return response;
  }

  const locale = negotiate(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  response.cookies.set(LANGUAGE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

function negotiate(request: NextRequest): (typeof locales)[number] {
  const cookie = request.cookies.get(LANGUAGE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return {
        tag: tag.trim().toLowerCase().slice(0, 2),
        quality: quality ? Number.parseFloat(quality) : 1,
      };
    })
    .filter((entry) => entry.tag.length === 2 && !Number.isNaN(entry.quality))
    .sort((a, b) => b.quality - a.quality);

  for (const entry of ranked) {
    if (isLocale(entry.tag)) return entry.tag;
  }

  return defaultLocale;
}

export const config = {
  // Tout sauf les assets, l'image OG, robots/sitemap et les fichiers statiques.
  matcher: ["/((?!api|_next|opengraph-image|robots\\.txt|sitemap\\.xml|.*\\..*).*)"],
};
