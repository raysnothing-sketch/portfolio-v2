import type { DshChart } from "@/lib/dsh/types";

/**
 * Grafiken der Prüfung, als SVG/HTML statt als gescanntes Bild.
 * Fehlende Werte bleiben sichtbar offen – die Aufgabe besteht gerade darin,
 * sie aus dem Text zu rekonstruieren.
 */
export function MiniChart({ chart }: { chart: DshChart }) {
  return (
    <figure className="panel mt-5 rounded-2xl p-4 sm:p-5">
      <figcaption className="mb-4 font-mono text-[0.6rem] leading-relaxed tracking-[0.14em] text-mute uppercase">
        Grafik · {chart.caption}
      </figcaption>
      {chart.kind === "bars" ? <Bars chart={chart} /> : <Curve chart={chart} />}
    </figure>
  );
}

function Bars({ chart }: { chart: Extract<DshChart, { kind: "bars" }> }) {
  const max = Math.max(100, ...chart.bars.map((bar) => bar.value ?? 0));
  return (
    <div className="flex h-52 items-end gap-3 sm:gap-6">
      {chart.bars.map((bar, index) => {
        const height = bar.value === null ? 42 : Math.max(6, (bar.value / max) * 100);
        return (
          <div key={bar.label} className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2">
            <div className="flex items-baseline justify-center gap-1">
              <span
                className={
                  bar.value === null
                    ? "font-mono text-sm text-mute"
                    : "font-mono text-sm text-chalk tabular-nums"
                }
              >
                {bar.value === null ? "?" : bar.value}
              </span>
              <span className="font-mono text-[0.55rem] text-mute/80">
                {chart.unit ?? ""}
              </span>
            </div>
            <div
              className={
                bar.value === null
                  ? "relative rounded-t-md border border-dashed border-mute/40 bg-ink-soft"
                  : index === 0
                    ? "border-t-2 border-violet bg-violet/25"
                    : "rounded-t-md bg-cyan/30 ring-1 ring-cyan/40 ring-inset"
              }
              style={{ height: `${height}%` }}
            >
              {bar.value === null ? (
                <span className="absolute inset-0 grid place-items-center font-mono text-lg text-mute/85">
                  ?
                </span>
              ) : null}
            </div>
            <p className="text-center text-[0.65rem] leading-tight text-mute">{bar.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function Curve({ chart }: { chart: Extract<DshChart, { kind: "curve" }> }) {
  const width = 340;
  const height = 200;
  const padding = { top: 14, right: 16, bottom: 34, left: 38 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const points = chart.points;
  const step = points.length > 1 ? innerWidth / (points.length - 1) : innerWidth;

  const coords = points.map((point, index) => ({
    ...point,
    x: padding.left + index * step,
    y: point.value === null ? null : padding.top + innerHeight - (point.value / 100) * innerHeight,
  }));

  const known = coords.filter(
    (point): point is typeof point & { value: number; y: number } =>
      point.value !== null && point.y !== null,
  );

  const path = known.length > 1 ? known.map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`).join(" ") : "";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full"
      role="img"
      aria-label={`${chart.caption} – ${chart.xLabel} / ${chart.yLabel}`}
    >
      {[0, 25, 50, 75, 100].map((tick) => {
        const y = padding.top + innerHeight - (tick / 100) * innerHeight;
        return (
          <g key={tick}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={y}
              y2={y}
              stroke="currentColor"
              className="text-line"
              strokeDasharray={tick === 0 ? undefined : "3 5"}
            />
            <text
              x={padding.left - 6}
              y={y + 3}
              textAnchor="end"
              fontSize="8"
              fill="currentColor"
              className="text-mute/85 font-mono"
            >
              {tick}
            </text>
          </g>
        );
      })}

      {path ? (
        <path d={path} fill="none" stroke="currentColor" className="text-cyan" strokeWidth="2" strokeLinecap="round" />
      ) : null}

      {coords.map((point) => (
        <g key={point.label}>
          {point.y !== null ? (
            <circle cx={point.x} cy={point.y} r="4" fill="currentColor" className="text-cyan" />
          ) : (
            <g>
              <circle
                cx={point.x}
                cy={padding.top + innerHeight * 0.42}
                r="7"
                fill="none"
                stroke="currentColor"
                className="text-mute/80"
                strokeDasharray="3 3"
              />
              <text
                x={point.x}
                y={padding.top + innerHeight * 0.42 + 3}
                textAnchor="middle"
                fontSize="9"
                fill="currentColor"
                className="text-mute font-mono"
              >
                ?
              </text>
            </g>
          )}
          <text
            x={point.x}
            y={height - 12}
            textAnchor="middle"
            fontSize="7.5"
            fill="currentColor"
            className="text-mute/80 font-mono"
          >
            {point.label}
          </text>
          {point.value !== null && point.y !== null ? (
            <text
              x={point.x}
              y={point.y - 10}
              textAnchor="middle"
              fontSize="8"
              fill="currentColor"
              className="text-chalk font-mono"
            >
              {point.value} %
            </text>
          ) : null}
        </g>
      ))}

      <text
        x={width - padding.right}
        y={height - 1}
        textAnchor="end"
        fontSize="7"
        fill="currentColor"
        className="text-mute/85 font-mono"
      >
        {chart.xLabel}
      </text>
    </svg>
  );
}
