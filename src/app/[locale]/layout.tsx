import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import { defaultLocale, isLocale, localeOg, localePath, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { env } from "@/lib/env";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const site = env.siteUrl().replace(/\/$/, "");

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((code) => [code, localePath(code)]),
  );
  languages["x-default"] = localePath(defaultLocale);

  return {
    metadataBase: new URL(site),
    title: {
      default: dict.meta.title,
      template: `%s · Rayan`,
    },
    description: dict.meta.description,
    applicationName: "Rayan — Portfolio",
    authors: [{ name: "Rayan", url: "https://github.com/raysnothing-sketch" }],
    creator: "Rayan",
    keywords: [
      "Next.js",
      "TypeScript",
      "React",
      "portfolio",
      "product engineer",
      "Produktentwickler",
      "Three.js",
    ],
    alternates: {
      canonical: localePath(isLocale(locale) ? locale : defaultLocale),
      languages,
    },
    openGraph: {
      type: "website",
      locale: localeOg[isLocale(locale) ? locale : defaultLocale],
      alternateLocale: locales
        .filter((code) => code !== locale)
        .map((code) => localeOg[code]),
      url: localePath(isLocale(locale) ? locale : defaultLocale),
      siteName: "Rayan — Portfolio",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-svh bg-ink text-chalk antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-chalk focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          {dict.a11y.skip}
        </a>

        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(124,92,255,0.10),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.07),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] opacity-40" />
        </div>

        {children}
      </body>
    </html>
  );
}
