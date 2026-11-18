"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";

import { localeLabels, localeShort, locales, stripLocale, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Sélecteur de langue. Le cookie de préférence est posé par le Proxy à chaque
 * visite d'une URL localisée : inutile de toucher à `document.cookie` ici.
 */
export function LocaleSwitcher({ locale, ariaLabel }: { locale: Locale; ariaLabel: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const rest = stripLocale(pathname);

  function keepAnchor(event: MouseEvent<HTMLAnchorElement>, href: string) {
    // On conserve l'ancre courante (#projets, #contact, …) : sinon le visiteur
    // retombe en haut de page à chaque changement de langue.
    const hash = window.location.hash;
    if (!hash) return;
    event.preventDefault();
    router.push(`${href}${hash}`);
  }

  return (
    <nav aria-label={ariaLabel}>
      <ul className="flex items-center gap-0.5 rounded-full border border-line/80 bg-ink-card/50 p-0.5">
        {locales.map((code) => {
          const active = code === locale;
          const href = `/${code}${rest}`;

          return (
            <li key={code}>
              <Link
                href={href}
                hrefLang={code}
                lang={code}
                title={localeLabels[code]}
                aria-current={active ? "true" : undefined}
                onClick={(event) => keepAnchor(event, href)}
                className={cn(
                  "flex rounded-full px-2 py-1 font-mono text-[0.6rem] tracking-[0.08em] transition-colors",
                  active ? "bg-chalk/95 text-ink" : "text-mute hover:bg-ink-soft hover:text-chalk",
                )}
              >
                {localeShort[code]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
