import Link from "next/link";
import Section from "@/components/layout/Section";
import { useCaseCategories, useCases } from "@/lib/useCases";

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="Resources"
      title="Use cases for the rooms where understanding needs to move."
      subtitle="Academic and executive settings where PulseRoom makes learning, alignment, and judgment visible before the moment is lost."
    >
      <div className="space-y-12">
        {useCaseCategories.map((category) => {
          const items = useCases.filter((item) => item.category === category).slice(0, 4);

          return (
            <section key={category} className="space-y-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    {category === "Academic" ? "Learning environments" : "Decision environments"}
                  </h3>
                </div>

                <Link
                  href="/use-cases"
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                  View all articles →
                </Link>
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/use-cases/${item.slug}`}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_60px_rgba(15,23,42,0.07)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)]"
                  >
                    <div className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_34%)] px-6 py-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                          {item.category}
                        </span>
                        <span className="text-slate-300 transition group-hover:text-slate-500">↗</span>
                      </div>

                      <h4 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                        {item.cardTitle}
                      </h4>
                      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="grid gap-5 px-6 py-6 md:grid-cols-[1.15fr_0.85fr] md:items-start">
                      <div className="space-y-3">
                        {item.flow.slice(0, 3).map((step, index) => (
                          <div
                            key={step.title}
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                          >
                            <div className="flex items-start gap-3">
                              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                                {index + 1}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                                <p className="mt-1 text-sm leading-6 text-slate-600">{step.note}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Live dimensions
                        </p>
                        <div className="mt-4 space-y-3">
                          {item.dimensions.slice(0, 4).map((dimension, index) => (
                            <div key={dimension.label}>
                              <div className="mb-1 flex items-center justify-between gap-3">
                                <p className="text-sm text-slate-700">{dimension.label}</p>
                                <span className="text-xs font-semibold text-slate-500">
                                  {dimension.value.toFixed(1)}/5
                                </span>
                              </div>
                              <div className="h-2 rounded-full bg-slate-100">
                                <div
                                  className="h-2 rounded-full bg-[linear-gradient(90deg,#6366F1,#22D3EE)]"
                                  style={{ width: `${(dimension.value / 5) * 100}%` }}
                                />
                              </div>
                              {index < item.dimensions.slice(0, 4).length - 1 ? (
                                <div className="mt-3 h-px bg-slate-100" />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
