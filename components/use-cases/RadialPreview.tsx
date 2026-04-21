import type { UseCaseDimension } from "@/lib/useCases";

type RadialPreviewProps = {
  dimensions: UseCaseDimension[];
  title?: string;
  subtitle?: string;
  mode?: "participant" | "presenter";
};

const WIDTH = 360;
const HEIGHT = 240;
const CX = 180;
const CY = 122;
const RADIUS = 78;
const LEVELS = 5;

function polar(angle: number, distance: number) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: CX + Math.cos(radians) * distance,
    y: CY + Math.sin(radians) * distance,
  };
}

function polygonPoints(dimensions: UseCaseDimension[]) {
  return dimensions
    .map((dimension, index) => {
      const angle = (360 / dimensions.length) * index;
      const point = polar(angle, (RADIUS * dimension.value) / LEVELS);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

function average(dimensions: UseCaseDimension[]) {
  if (!dimensions.length) return 0;
  return (
    dimensions.reduce((sum, dimension) => sum + dimension.value, 0) / dimensions.length
  );
}

function strongestDimension(dimensions: UseCaseDimension[]) {
  return [...dimensions].sort((a, b) => b.value - a.value)[0];
}

function splitLabel(label: string) {
  const words = label.split(" ");
  if (words.length <= 1) return [label];
  if (words.length === 2) return words;
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

function chartIdFrom(title: string, mode: "participant" | "presenter") {
  return `${mode}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function RadialPreview({
  dimensions,
  title = "Live signal preview",
  subtitle = "Illustrative signal showing how understanding or alignment can form across multiple dimensions.",
  mode = "participant",
}: RadialPreviewProps) {
  const safeDimensions = dimensions.slice(0, 5);
  const shape = polygonPoints(safeDimensions);
  const avg = average(safeDimensions);
  const strongest = strongestDimension(safeDimensions);
  const chartId = chartIdFrom(title, mode);

  const tone =
    mode === "participant"
      ? {
          shell:
            "bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 border-violet-200",
          pill: "border-violet-200 bg-white text-violet-700",
          card: "border-violet-200 bg-white/90",
          fillStart: "#a78bfa",
          fillEnd: "#f472b6",
          strokeStart: "#8b5cf6",
          strokeEnd: "#ec4899",
          pointOuter: "#ddd6fe",
          pointInner: "#ffffff",
          pointCore: "#8b5cf6",
          accent: "text-violet-700",
        }
      : {
          shell:
            "bg-gradient-to-br from-white via-indigo-50 to-violet-50 border-indigo-200",
          pill: "border-indigo-200 bg-white text-indigo-700",
          card: "border-indigo-200 bg-white/90",
          fillStart: "#818cf8",
          fillEnd: "#a78bfa",
          strokeStart: "#6366f1",
          strokeEnd: "#8b5cf6",
          pointOuter: "#c7d2fe",
          pointInner: "#ffffff",
          pointCore: "#6366f1",
          accent: "text-indigo-700",
        };

  return (
    <section
      className={`rounded-[1.5rem] border p-4 shadow-[0_10px_28px_rgba(124,58,237,0.06)] ${tone.shell}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-xl">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${tone.pill}`}
          >
            {mode === "participant" ? "Participant signal" : "Presenter read"}
          </span>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
        </div>

        <div className={`rounded-[1rem] border px-3 py-2.5 shadow-sm ${tone.card}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Average
          </p>
          <p className={`mt-1 text-xl font-semibold ${tone.accent}`}>{avg.toFixed(1)}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 xl:grid-cols-[minmax(0,1fr)_150px] xl:items-start">
        <div className="rounded-[1.25rem] border border-white/80 bg-white/75 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
          <div className="mx-auto max-w-[420px]">
            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="block h-auto w-full"
              aria-label={title}
            >
              <defs>
                <radialGradient id={`${chartId}-surface`} cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f8fafc" />
                </radialGradient>

                <linearGradient id={`${chartId}-fill`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={tone.fillStart} stopOpacity="0.22" />
                  <stop offset="100%" stopColor={tone.fillEnd} stopOpacity="0.16" />
                </linearGradient>

                <linearGradient id={`${chartId}-stroke`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={tone.strokeStart} />
                  <stop offset="100%" stopColor={tone.strokeEnd} />
                </linearGradient>

                <filter id={`${chartId}-soft`} x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect
                x="6"
                y="6"
                width={WIDTH - 12}
                height={HEIGHT - 12}
                rx="22"
                fill={`url(#${chartId}-surface)`}
              />

              {Array.from({ length: LEVELS }).map((_, index) => {
                const r = (RADIUS / LEVELS) * (index + 1);
                return (
                  <circle
                    key={r}
                    cx={CX}
                    cy={CY}
                    r={r}
                    fill="none"
                    stroke="rgba(148,163,184,0.22)"
                    strokeWidth="0.9"
                  />
                );
              })}

              {safeDimensions.map((dimension, index) => {
                const angle = (360 / safeDimensions.length) * index;
                const end = polar(angle, RADIUS);
                const label = polar(angle, RADIUS + 18);
                const value = polar(angle, RADIUS + 31);
                const lines = splitLabel(dimension.label);

                const anchor =
                  label.x > CX + 10
                    ? "start"
                    : label.x < CX - 10
                      ? "end"
                      : "middle";

                const labelStartY = label.y - (lines.length - 1) * 6;

                return (
                  <g key={dimension.label}>
                    <line
                      x1={CX}
                      y1={CY}
                      x2={end.x}
                      y2={end.y}
                      stroke="rgba(100,116,139,0.30)"
                      strokeWidth="1"
                    />

                    <text
                      x={label.x}
                      y={labelStartY}
                      fontSize="9.5"
                      fontWeight="600"
                      fill="#334155"
                      textAnchor={anchor}
                    >
                      {lines.map((line, lineIndex) => (
                        <tspan
                          key={`${dimension.label}-${lineIndex}`}
                          x={label.x}
                          dy={lineIndex === 0 ? 0 : 11}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>

                    <text
                      x={value.x}
                      y={value.y}
                      fontSize="8.8"
                      fontWeight="600"
                      fill="#64748b"
                      textAnchor={anchor}
                    >
                      {dimension.value.toFixed(1)}
                    </text>
                  </g>
                );
              })}

              <polygon
                points={shape}
                fill={`url(#${chartId}-fill)`}
                stroke={`url(#${chartId}-stroke)`}
                strokeWidth="1.7"
                filter={`url(#${chartId}-soft)`}
              />

              {safeDimensions.map((dimension, index) => {
                const angle = (360 / safeDimensions.length) * index;
                const point = polar(angle, (RADIUS * dimension.value) / LEVELS);

                return (
                  <g key={`${dimension.label}-point`}>
                    <circle cx={point.x} cy={point.y} r={5.8} fill={tone.pointOuter} opacity="0.28" />
                    <circle cx={point.x} cy={point.y} r={3.8} fill={tone.pointInner} />
                    <circle cx={point.x} cy={point.y} r={2.2} fill={tone.pointCore} />
                  </g>
                );
              })}

              <circle cx={CX} cy={CY} r={3.2} fill="rgba(51,65,85,0.75)" />
            </svg>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {safeDimensions.map((dimension) => (
              <span
                key={dimension.label}
                className="rounded-full border border-violet-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                {dimension.label}: {dimension.value.toFixed(1)}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-2.5">
          <div className={`rounded-[1rem] border p-3 shadow-sm ${tone.card}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Strongest
            </p>
            <p className="mt-1.5 text-base font-semibold text-slate-900">
              {strongest?.label}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              {strongest?.value.toFixed(1)} / 5
            </p>
          </div>

          <div className={`rounded-[1rem] border p-3 shadow-sm ${tone.card}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Dimensions
            </p>
            <p className={`mt-1 text-xl font-semibold ${tone.accent}`}>
              {safeDimensions.length}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              3 to 5 live dimensions
            </p>
          </div>

          <div className={`rounded-[1rem] border p-3 shadow-sm ${tone.card}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Reading
            </p>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">
              Compact view of where the room is strong, weak, or uneven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}