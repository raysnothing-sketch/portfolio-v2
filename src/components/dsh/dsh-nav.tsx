"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { DshCopy } from "@/lib/dsh/copy";
import { localeShort, locales, stripLocale, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * En-tête du trainer : papier, filet double, lettrage serifé.
 * Le sélecteur de langue est volontairement un simple "DE / EN / FR" :
 * le composant à pastilles du portfolio n'apparaît pas ici.
 */
export function DshNav({ locale, copy }: { locale: Locale; copy: DshCopy }) {
  const pathname = usePathname();
  const rest = stripLocale(pathname);

  const links = [
    {
      href: `/${locale}/dsh`,
      label: copy.nav.simulations,
      active: pathname === `/${locale}/dsh` || pathname.includes("/simulation/"),
    },
    {
      href: `/${locale}/dsh/strukturen`,
      label: copy.nav.structures,
      active: pathname.includes("/strukturen"),
    },
    {
      href: `/${locale}/dsh/hoeren`,
      label: copy.modules.nav.listening,
      active: pathname.includes("/hoeren"),
    },
    {
      href: `/${locale}/dsh/sprechen`,
      label: copy.modules.nav.speaking,
      active: pathname.includes("/sprechen"),
    },
    {
      href: `/${locale}/dsh/schreiben`,
      label: copy.modules.nav.writing,
      active: pathname.includes("/schreiben"),
    },
    {
      href: `/${locale}/dsh/lernen`,
      label: copy.learn.nav,
      active: pathname.includes("/lernen"),
    },
  ];

  return (
    <header className="dsh-rule-double sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-sm">
      <nav aria-label={copy.nav.trainer} className="shell flex h-16 items-center gap-4">
        <Link href={`/${locale}/dsh`} className="group flex shrink-0 items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-violet bg-violet font-display text-[0.85rem] leading-none text-ink-card transition-colors group-hover:bg-violet/90">
            D
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[1.05rem] tracking-tight text-chalk">
              DSH<span className="text-violet">.</span> Trainer
            </span>
            <span className="mt-1.5 font-mono text-[0.52rem] tracking-[0.16em] text-mute uppercase">
              Prüfungssimulation
            </span>
          </span>
        </Link>

        <span aria-hidden="true" className="hidden h-7 w-px bg-line lg:block" />

        <ul className="ml-auto hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-[0.85rem] whitespace-nowrap transition-colors",
                  link.active
                    ? "text-violet after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-violet"
                    : "text-mute hover:text-chalk",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4 lg:ml-6">
          <nav aria-label="Sprache wechseln" className="flex items-center gap-1">
            {locales.map((code, index) => (
              <span key={code} className="flex items-center gap-1">
                {index > 0 ? (
                  <span aria-hidden="true" className="font-mono text-[0.6rem] text-line">
                    /
                  </span>
                ) : null}
                <Link
                  href={`/${code}${rest}`}
                  hrefLang={code}
                  aria-current={code === locale ? "true" : undefined}
                  className={cn(
                    "font-mono text-[0.6rem] tracking-[0.1em] transition-colors",
                    code === locale
                      ? "text-violet underline underline-offset-4"
                      : "text-mute hover:text-chalk",
                  )}
                >
                  {localeShort[code]}
                </Link>
              </span>
            ))}
          </nav>

          <Link
            href={`/${locale}`}
            className="hidden border-b border-line pb-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-mute uppercase transition-colors hover:border-violet hover:text-violet sm:block"
          >
            ← {copy.nav.portfolio}
          </Link>
        </div>
      </nav>

      <nav
        aria-label={copy.nav.trainer}
        className="border-t border-line bg-ink-card/95 lg:hidden"
      >
        <ul className="shell flex items-center justify-center gap-3 overflow-x-auto py-2.5 sm:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={cn(
                  "font-mono text-[0.6rem] tracking-[0.1em] uppercase whitespace-nowrap",
                  link.active ? "text-violet underline underline-offset-4" : "text-mute",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
