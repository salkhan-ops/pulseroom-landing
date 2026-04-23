import type { UseCaseStep } from "@/lib/useCases";

type FlowStripProps = {
  steps: UseCaseStep[];
};

const themes = [
  "from-violet-50 to-white border-violet-200",
  "from-indigo-50 to-white border-indigo-200",
  "from-sky-50 to-white border-sky-200",
  "from-amber-50 to-white border-amber-200",
];

export default function FlowStrip({ steps }: FlowStripProps) {
  const safeSteps = steps.slice(0, 4);

  return (
    <section className="overflow-hidden rounded-[2.25rem] border border-violet-200 bg-[linear-gradient(180deg,#fcfbff_0%,#f8f4ff_100%)] shadow-[0_16px_48px_rgba(124,58,237,0.06)]">
      <div className="border-b border-violet-100 px-6 py-7 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
          How the room moves
        </p>
        <p className="mt-3 max-w-4xl text-lg leading-9 text-slate-600">
          PulseRoom is most useful when the session has a clear rhythm: frame the topic,
          choose the dimensions, watch the signal evolve, and respond before the moment is lost.
        </p>
      </div>

      <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
        {safeSteps.map((step, index) => (
          <div
            key={step.title}
            className={`rounded-[1.9rem] border bg-gradient-to-br p-6 shadow-sm ${themes[index % themes.length]}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-base font-semibold text-slate-900 shadow-sm">
                {index + 1}
              </span>

              <span
                className={
                  index < safeSteps.length - 1
                    ? "inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
                    : "inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm"
                }
              >
                {index < safeSteps.length - 1 ? "Next →" : "Outcome"}
              </span>
            </div>

            <h3 className="mt-7 text-[2rem] font-semibold leading-tight tracking-tight text-slate-900">
              {step.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {step.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}