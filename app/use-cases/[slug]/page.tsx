import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FlowStrip from "@/components/use-cases/FlowStrip";
import RadialPreview from "@/components/use-cases/RadialPreview";
import {
  getUseCaseBySlug,
  useCases,
  type UseCaseDimension,
} from "@/lib/useCases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function clamp(value: number, min = 1, max = 5) {
  return Math.max(min, Math.min(max, value));
}

function makeSignal(
  dimensions: UseCaseDimension[],
  mode: "participant" | "presenter",
  count: number
): UseCaseDimension[] {
  const selected = dimensions.slice(0, count);

  return selected.map((dimension, index) => {
    const participantOffsets = [-0.35, 0.1, -0.45, 0.22, -0.18];
    const presenterOffsets = [0.22, 0.12, 0.28, 0.1, 0.18];

    const offset =
      mode === "participant"
        ? participantOffsets[index] ?? 0
        : presenterOffsets[index] ?? 0;

    return {
      ...dimension,
      value: clamp(Number((dimension.value + offset).toFixed(1))),
    };
  });
}

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getUseCaseBySlug(slug);

  if (!article) {
    return {
      title: "Use case | PulseRoom",
    };
  }

  return {
    title: `${article.title} | PulseRoom`,
    description: article.excerpt,
  };
}

export default async function UseCaseArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getUseCaseBySlug(slug);

  if (!article) {
    notFound();
  }

  const participantCount = Math.min(3, article.dimensions.length);
  const presenterCount = Math.min(5, article.dimensions.length);

  const participantSignal = makeSignal(
    article.dimensions,
    "participant",
    participantCount
  );

  const presenterSignal = makeSignal(
    article.dimensions,
    "presenter",
    presenterCount
  );

  return (
    <main className="bg-[linear-gradient(180deg,#fcfbff_0%,#f5f3ff_18%,#ffffff_50%,#faf5ff_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:py-16">
        <Link
          href="/use-cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          <span>←</span>
          <span>Back to use cases</span>
        </Link>

        <section className="mt-6 overflow-hidden rounded-[2.5rem] border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 shadow-[0_28px_90px_rgba(124,58,237,0.08)]">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_360px]">
            <div className="p-8 md:p-10 lg:p-12">
              <span className="inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700 shadow-sm">
                {article.category}
              </span>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                {article.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-[1.35rem]">
                {article.excerpt}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-violet-200 bg-white/85 p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Agenda prompts
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-violet-700">
                    {article.agenda.length}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-violet-200 bg-white/85 p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Live dimensions
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-violet-700">
                    {article.dimensions.length}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-violet-200 bg-white/85 p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Improvement areas
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-violet-700">
                    {article.outcomes.length}
                  </p>
                </div>
              </div>

              <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-8 text-slate-600">
                {(article.intro ?? []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="border-t border-violet-100 bg-[linear-gradient(180deg,#f8f5ff_0%,#ede9fe_100%)] p-8 xl:border-l xl:border-t-0 xl:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                What improves
              </p>

              <div className="mt-5 space-y-4">
                {(article.outcomes ?? []).map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-violet-200 bg-white/90 p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-violet-200 bg-white/90 p-6 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">PulseRoom fit</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Best used when the room needs a shared agenda, live participation,
                  multi-dimensional input, and a clearer view of where the group actually stands.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
              Signal preview
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Make the room visible.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The previews below are intentionally different. One shows how a participant
              might respond across a compact set of dimensions. The other shows how the presenter
              or faculty member may read the room across a broader signal.
            </p>
          </div>

          <div className="mt-6 grid gap-6 2xl:grid-cols-2">
            <RadialPreview
              mode="participant"
              title="Participant signal"
              subtitle={`A participant-side view across ${participantSignal.length} dimensions, showing how understanding or judgment may form while the discussion is still unfolding.`}
              dimensions={participantSignal}
            />
            <RadialPreview
              mode="presenter"
              title="Presenter read"
              subtitle={`A presenter-side read across ${presenterSignal.length} dimensions, helping the session leader see where the room is clear, uneven, or unconvinced.`}
              dimensions={presenterSignal}
            />
          </div>
        </section>

        <section className="mt-10">
          <FlowStrip steps={article.flow} />
        </section>

        <section className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-[2rem] border border-violet-200 bg-white p-7 shadow-[0_16px_60px_rgba(124,58,237,0.06)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
              Example agenda items
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Questions that give the room a sharper purpose
            </h3>

            <div className="mt-6 space-y-4">
              {(article.agenda ?? []).map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-violet-200 bg-gradient-to-br from-white to-violet-50 p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 p-7 shadow-[0_16px_60px_rgba(124,58,237,0.06)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                Live dimensions
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                The lenses that shape the discussion
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {article.dimensions.map((dimension, index) => (
                  <span
                    key={dimension.label}
                    className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
                      {index + 1}
                    </span>
                    {dimension.label}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                The value of PulseRoom is not only that people respond. It is that they respond
                through visible, shared dimensions that make the conversation more disciplined.
              </p>
            </div>

            <div className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-7 shadow-[0_16px_60px_rgba(124,58,237,0.06)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                Room blueprint
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Where this use case works best
              </h3>

              <div className="mt-5 space-y-3">
                {(article.roomSetup ?? []).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-violet-200 bg-white/90 p-4 shadow-sm"
                  >
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
              Deeper perspective
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Why this use case becomes more useful in practice
            </h2>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {(article.detailSections ?? []).map((section, index) => (
              <section
                key={section.title}
                className={
                  index % 3 === 0
                    ? "rounded-[2rem] border border-violet-200 bg-gradient-to-br from-white to-violet-50 p-7 shadow-[0_16px_60px_rgba(124,58,237,0.06)]"
                    : index % 3 === 1
                      ? "rounded-[2rem] border border-violet-200 bg-gradient-to-br from-white to-indigo-50 p-7 shadow-[0_16px_60px_rgba(124,58,237,0.06)]"
                      : "rounded-[2rem] border border-violet-200 bg-gradient-to-br from-white to-fuchsia-50 p-7 shadow-[0_16px_60px_rgba(124,58,237,0.06)]"
                }
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {section.title}
                </h3>

                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}