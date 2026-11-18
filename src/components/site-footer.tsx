import { GithubMark } from "@/components/icons";
import { ViewCounter } from "@/components/view-counter";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-ink-soft/30">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[0.65rem] tracking-[0.22em] text-mute/70 uppercase">
            Rayan — Portfolio / 2026
          </p>
          <p className="text-xs text-mute/60">
            Next.js 16 · Turso · Three.js · Motion — <ViewCounter />
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/raysnothing-sketch"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-xs text-mute transition-colors hover:text-chalk"
          >
            <GithubMark className="size-4" />
            @raysnothing-sketch
          </a>
          <a
            href="#accueil"
            className="font-mono text-[0.65rem] tracking-[0.18em] text-mute/70 uppercase transition-colors hover:text-cyan"
          >
            Haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
