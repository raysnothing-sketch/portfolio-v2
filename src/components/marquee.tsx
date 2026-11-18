const STACK_MARQUEE = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Turso · libSQL",
  "Drizzle ORM",
  "Three.js",
  "React Three Fiber",
  "Motion",
  "Vercel",
  "Cloudflare Workers",
  "Zod",
];

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-line/70 bg-ink-soft/50 py-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
      />

      <div className="flex w-max animate-marquee items-center gap-10">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10">
            {STACK_MARQUEE.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-10 font-mono text-[0.7rem] tracking-[0.2em] whitespace-nowrap text-mute/80 uppercase"
              >
                {item}
                <span aria-hidden="true" className="size-1 rounded-full bg-violet/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
