import { GithubMark } from "@/components/icons";
import { ViewCounter } from "@/components/view-counter";
import type { Dictionary } from "@/lib/i18n";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line/70 bg-ink-soft/30">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[0.65rem] tracking-[0.22em] text-mute/70 uppercase">
            {dict.footer.brand}
          </p>
          <p className="text-xs text-mute/60">
            {dict.footer.builtWith} — <ViewCounter label={dict.footer.views} />
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
            {dict.footer.top} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
