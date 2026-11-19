type IllustrationProps = {
  kind: "electrolyseur" | "neuronales-netz";
  label: string;
  className?: string;
};

/**
 * Kleine Schemata für die Wortschatzaufgabe – bewusst reduziert,
 * damit sie auch bei 320 px Breite lesbar bleiben.
 */
export function Illustration({ kind, label, className }: IllustrationProps) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 240 120"
        role="img"
        aria-label={label}
        className="h-auto w-full max-w-[15rem] text-cyan"
      >
        {kind === "electrolyseur" ? <Electrolysis /> : <NeuralNet />}
      </svg>
    </figure>
  );
}

function Electrolysis() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M40 96V44a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v52" opacity="0.55" />
      <path d="M40 96h160" opacity="0.9" />
      <path d="M40 66h160" opacity="0.35" strokeDasharray="3 4" />
      <path d="M118 46v40" strokeDasharray="4 4" opacity="0.8" />
      <rect x="74" y="40" width="9" height="46" rx="2" className="text-violet" stroke="currentColor" />
      <rect x="157" y="40" width="9" height="46" rx="2" className="text-violet" stroke="currentColor" />
      <circle cx="88" cy="80" r="3" opacity="0.9" />
      <circle cx="94" cy="72" r="2" opacity="0.7" />
      <circle cx="101" cy="86" r="2.5" opacity="0.8" />
      <circle cx="146" cy="78" r="3" opacity="0.9" />
      <circle cx="139" cy="86" r="2" opacity="0.7" />
      <circle cx="132" cy="72" r="2.5" opacity="0.8" />
      <text x="78" y="30" fill="currentColor" stroke="none" fontSize="9" className="font-mono">
        H₂
      </text>
      <text x="160" y="30" fill="currentColor" stroke="none" fontSize="9" className="font-mono">
        O₂
      </text>
      <text x="120" y="112" fill="currentColor" stroke="none" fontSize="8" textAnchor="middle" opacity="0.6">
        Membran
      </text>
    </g>
  );
}

function NeuralNet() {
  const layers = [
    [40, 60, 80],
    [26, 47, 68, 89],
    [33, 60, 87],
    [60],
  ];
  const x = [36, 96, 156, 212];
  return (
    <g>
      {layers.map((nodes, layerIndex) =>
        layerIndex === 0
          ? null
          : nodes.map((y) =>
              layers[layerIndex - 1].map((prevY) => (
                <line
                  key={`${layerIndex}-${y}-${prevY}`}
                  x1={x[layerIndex - 1]}
                  y1={prevY}
                  x2={x[layerIndex]}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.28"
                />
              )),
            ),
      )}
      {layers.map((nodes, layerIndex) =>
        nodes.map((y) => (
          <circle
            key={`${layerIndex}-${y}`}
            cx={x[layerIndex]}
            cy={y}
            r={layerIndex === 3 ? 6 : 4.2}
            className={layerIndex === 3 ? "text-lime" : "text-violet"}
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            opacity={layerIndex === 3 ? 0.9 : 0.65}
          />
        )),
      )}
      <text x="36" y="110" fill="currentColor" stroke="none" fontSize="7" textAnchor="middle" opacity="0.5">
        Input
      </text>
      <text x="156" y="110" fill="currentColor" stroke="none" fontSize="7" textAnchor="middle" opacity="0.5">
        Schichten
      </text>
      <text x="212" y="110" fill="currentColor" stroke="none" fontSize="7" textAnchor="middle" opacity="0.5">
        Output
      </text>
    </g>
  );
}
