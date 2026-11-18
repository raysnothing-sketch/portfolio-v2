import { notFound } from "next/navigation";

import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ProjectExplorer } from "@/components/project-explorer";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SystemSection } from "@/components/system-section";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { getProjects, getStats } from "@/lib/projects";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const [projects, stats] = await Promise.all([getProjects(locale), getStats()]);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null;

  return (
    <>
      <SiteNav dict={dict} locale={locale} />

      <main id="contenu">
        <Hero stats={stats} dict={dict} />
        <Marquee />

        <section id="projets" className="relative py-24 sm:py-32">
          <div className="shell">
            <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-mono text-[0.65rem] tracking-[0.28em] text-cyan uppercase">
                  {dict.projects.kicker}
                </p>
                <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] font-medium tracking-[-0.02em] text-balance">
                  {dict.projects.title}
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-2.5 font-mono text-[0.6rem] tracking-[0.16em] whitespace-nowrap text-mute/70 uppercase">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
                {dict.projects.sync}
              </div>
            </Reveal>

            <div className="mt-10">
              <ProjectExplorer projects={projects} labels={dict.projects} />
            </div>
          </div>
        </section>

        <SystemSection dict={dict} />

        <ContactSection email={email} dict={dict} />
      </main>

      <SiteFooter dict={dict} />
    </>
  );
}
