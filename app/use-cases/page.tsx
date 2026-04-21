import Link from "next/link";
import type { Metadata } from "next";
import { useCaseCategories, useCases } from "@/lib/useCases";

export const metadata: Metadata = {
  title: "Use cases | PulseRoom",
  description:
    "Explore PulseRoom use cases across classrooms, experiential learning, panels, research groups, meetings, brainstorming, policy design, and other live decision environments.",
};

export default function UseCasesIndexPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_16%,#f8fafc_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:py-24">
        <section className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_18px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-8 px-8 py-10 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:items-end lg:px-12 lg:py-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Resources
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                PulseRoom use cases
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A richer library of PulseRoom applications across academic and executive
                environments — designed as articles, not feature boxes.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_36%),linear-gradient(180deg,#ffffff_0%,#eef2ff_100%)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What this library covers
              </p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <p>Teaching, experiential learning, panel moderation, research meetings, and presentation evaluation.</p>
                <p>Meetings, brainstorming, policy design, budget conversations, and retrospectives.</p>
                <p>Each article shows how the room is structured, what the live dimensions can look like, and why the method creates stronger outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-14 space-y-16">
          {useCaseCategories.map((category) => {
            const items = useCases.filter((item) => item.category === category);

            return (
              <section key={category} className="space-y-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {category}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                      {category === "Academic"
                        ? "Use cases for learning environments"
                        : "Use cases for decision environments"}
                    </h2>
                  </div>
                  <span className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 md:inline-flex">
                    {items.length} articles
                  </span>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/use-cases/${item.slug}`}
                      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_60px_rgba(15,23,42,0.07)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)]"
                    >
                      <div className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_34%)] px-6 py-5 md:px-8 md:py-6">
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                            {item.category}
                          </span>
                          <span className="text-slate-300 transition group-hover:text-slate-500">↗</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-base md:leading-8">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="grid gap-6 px-6 py-6 md:grid-cols-[1.12fr_0.88fr] md:px-8 md:py-8">
                        <div className="space-y-3">
                          {item.flow.slice(0, 3).map((step, index) => (
                            <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                              <div className="flex gap-3">
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

                        <div className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Example live profile
                          </p>
                          <div className="mt-4 space-y-3">
                            {item.dimensions.slice(0, 5).map((dimension) => (
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
      </div>
    </main>
  );
}
