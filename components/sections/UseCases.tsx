import Link from "next/link";
import Section from "@/components/layout/Section";
import { useCaseCategories, useCases } from "@/lib/useCases";

function getDimensionLabel(dimension: unknown): string {
  if (typeof dimension === "string") return dimension;
  if (
    typeof dimension === "object" &&
    dimension !== null &&
    "label" in dimension &&
    typeof (dimension as { label?: unknown }).label === "string"
  ) {
    return (dimension as { label: string }).label;
  }
  return String(dimension);
}

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="Resources"
      title="Use cases built for real rooms."
      subtitle="Academic and executive settings where PulseRoom helps a room become clearer while the discussion is still alive."
    >
      <div className="space-y-16">
        {useCaseCategories.map((category) => {
          const items = useCases
            .filter((item) => item.category === category)
            .slice(0, 4);

          return (
            <section key={category} className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-600">
                    {category}
                  </p>
                  <h3 className="mt-1.5 text-[2rem] font-semibold tracking-tight text-slate-900 md:text-[2.25rem]">
                    {category === "Academic"
                      ? "Learning environments"
                      : "Decision environments"}
                  </h3>
                </div>

                <Link
                  href="/use-cases"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50"
                >
                  View all articles
                  <span>→</span>
                </Link>
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                {items.map((item) => {
                  const dimensionLabels = item.dimensions
                    .slice(0, 3)
                    .map((dimension) => getDimensionLabel(dimension));

                  const steps = item.flow.slice(0, 3);

                  return (
                    <Link
                      key={item.slug}
                      href={`/use-cases/${item.slug}`}
                      className="group block rounded-2xl border border-violet-200 bg-white shadow-[0_8px_32px_rgba(124,58,237,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.10)]"
                    >
                      <div className="flex h-full flex-col p-6">
                        <div className="flex items-center justify-between gap-4">
                          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                            {item.category}
                          </span>
                          <span className="text-base text-slate-300 transition group-hover:text-violet-400">
                            ↗
                          </span>
                        </div>

                        <h4 className="mt-4 text-[1.55rem] font-semibold leading-tight tracking-tight text-slate-900">
                          {item.cardTitle ?? item.title}
                        </h4>

                        <p className="mt-3 text-[15px] leading-7 text-slate-500">
                          {item.excerpt}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {dimensionLabels.map((label) => (
                            <span
                              key={label}
                              className="rounded-full border border-violet-100 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                            >
                              {label}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 rounded-xl border border-violet-100 bg-gradient-to-b from-[#fdfcff] to-[#f9f6ff] p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-600">
                              How it flows
                            </p>
                            <p className="text-[10px] text-slate-400">3-step preview</p>
                          </div>

                          <div className="flex flex-col">
                            {steps.map((step, index) => (
                              <div key={step.title}>
                                <div className="flex items-center gap-2.5 rounded-lg border border-violet-100 bg-white px-3 py-2.5 shadow-sm">
                                  <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[11px] font-bold text-white">
                                    {index + 1}
                                  </div>
                                  <p className="text-[13px] font-medium text-slate-800">
                                    {step.title}
                                  </p>
                                </div>

                                {index < steps.length - 1 && (
                                  <div className="py-1 pl-[1.1rem] text-[11px] text-violet-300">
                                    ↓
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 text-sm font-medium text-violet-600">
                          Read article →
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}