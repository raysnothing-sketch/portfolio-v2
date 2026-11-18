import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { env } from "@/lib/env";
import "./globals.css";

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

const description =
  "Portfolio de Rayan — ingénieur produit web. Applications Next.js, architectures edge et interfaces 3D, synchronisées avec GitHub.";

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl()),
  title: {
    default: "Rayan — Ingénieur produit web",
    template: "%s · Rayan",
  },
  description,
  applicationName: "Rayan — Portfolio",
  authors: [{ name: "Rayan", url: "https://github.com/raysnothing-sketch" }],
  creator: "Rayan",
  keywords: [
    "Next.js",
    "TypeScript",
    "React",
    "portfolio",
    "développeur web",
    "architecture edge",
    "Three.js",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Rayan — Portfolio",
    title: "Rayan — Ingénieur produit web",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan — Ingénieur produit web",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-svh bg-ink text-chalk antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-chalk focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Aller au contenu
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
