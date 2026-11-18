import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ProjectExplorer } from "@/components/project-explorer";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SystemSection } from "@/components/system-section";
import { getProjects, getStats } from "@/lib/projects";

export default async function Home() {
  const [projects, stats] = await Promise.all([getProjects(), getStats()]);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null;

  return (
    <>
      <SiteNav />

      <main id="contenu">
        <Hero stats={stats} />
        <Marquee />

        <section id="projets" className="relative py-24 sm:py-32">
          <div className="shell">
            <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-mono text-[0.65rem] tracking-[0.28em] text-cyan uppercase">
                  01 — Répertoire
                </p>
                <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] font-medium tracking-[-0.02em] text-balance">
                  Projets livrés, du prototype à la production.
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-2.5 font-mono text-[0.6rem] tracking-[0.16em] whitespace-nowrap text-mute/70 uppercase">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
                Sync GitHub · 1 h
              </div>
            </Reveal>

            <div className="mt-10">
              <ProjectExplorer projects={projects} />
            </div>
          </div>
        </section>

        <SystemSection />

        <ContactSection email={email} />
      </main>

      <SiteFooter />
    </>
  );
}
