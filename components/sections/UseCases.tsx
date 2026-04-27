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
      title="Real Rooms"
      subtitle="Academic and executive settings where PulseRoom brings clarity into the discussion."
      className="section-cool"
    >
      <div className="space-y-10 md:space-y-14">
        {useCaseCategories.map((category) => {
          const items = useCases
            .filter((item) => item.category === category)
            .slice(0, 4);

          return (
            <section key={category} className="space-y-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-600 sm:text-xs">
                    {category}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                    {category === "Academic"
                      ? "Learning environments"
                      : "Decision environments"}
                  </h3>
                </div>

                <Link
                  href="/use-cases"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50"
                >
                  View all articles
                  <span>→</span>
                </Link>
              </div>

              <div className="grid gap-4 xl:grid-cols-2">
                {items.map((item) => {
                  const dimensionLabels = item.dimensions
                    .slice(0, 3)
                    .map((dimension) => getDimensionLabel(dimension));

                  return (
                    <Link
                      key={item.slug}
                      href={`/use-cases/${item.slug}`}
                      className="group block rounded-[1.7rem] border border-violet-200 bg-white shadow-[0_8px_28px_rgba(124,58,237,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-[0_12px_36px_rgba(124,58,237,0.10)]"
                    >
                      <div className="flex h-full flex-col p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-4">
                          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                            {item.category}
                          </span>
                          <span className="text-lg text-violet-500 transition group-hover:translate-x-0.5">
                            →
                          </span>
                        </div>

                        <h4 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-2xl">
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

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                          Read article
                          <span aria-hidden>→</span>
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
