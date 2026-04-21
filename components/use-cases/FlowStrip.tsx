import type { UseCaseStep } from "@/lib/useCases";

type FlowStripProps = {
  steps: UseCaseStep[];
};

const cardThemes = [
  "from-violet-100 via-fuchsia-50 to-white border-violet-200",
  "from-indigo-100 via-violet-50 to-white border-indigo-200",
  "from-cyan-100 via-sky-50 to-white border-cyan-200",
  "from-amber-100 via-orange-50 to-white border-amber-200",
];

export default function FlowStrip({ steps }: FlowStripProps) {
  const safeSteps = steps.slice(0, 4);

  return (
    <section className="overflow-hidden rounded-[2.25rem] border border-violet-200 bg-gradient-to-br from-[#fcfbff] via-[#f6f1ff] to-[#fff7fb] shadow-[0_20px_70px_rgba(124,58,237,0.08)]">
      <div className="border-b border-violet-100 px-6 py-6 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
          How the room moves
        </p>
        <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
          PulseRoom is most useful when the session has a clear rhythm: frame the topic,
          choose the dimensions, watch the signal evolve, and respond before the moment is lost.
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-4 xl:p-8">
        {safeSteps.map((step, index) => (
          <div
            key={step.title}
            className={`min-h-[250px] rounded-[1.75rem] border bg-gradient-to-br p-6 shadow-[0_12px_35px_rgba(76,29,149,0.06)] ${cardThemes[index % cardThemes.length]}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-base font-semibold text-slate-900 shadow-sm">
                {index + 1}
              </span>

              {index < safeSteps.length - 1 ? (
                <span className="inline-flex rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                  Next →
                </span>
              ) : (
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
                  Outcome
                </span>
              )}
            </div>

            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900">
              {step.title}
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {step.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}