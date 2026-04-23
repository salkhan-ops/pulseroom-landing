import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FlowStrip from "@/components/use-cases/FlowStrip";
import { getUseCaseBySlug, useCases } from "@/lib/useCases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type HeroImageMeta = {
  src: string;
  alt: string;
  eyebrow: string;
};

function getUseCaseHero(slug: string, category?: string): HeroImageMeta {
  const map: Record<string, HeroImageMeta> = {
    "teaching-in-class": {
      src: "/use-cases/academic/class.webp",
      alt: "Faculty-led interactive classroom using PulseRoom",
      eyebrow: "Academic setting",
    },
    "experiential-learning": {
      src: "/use-cases/academic/collaborate.webp",
      alt: "Experiential learning groups using PulseRoom",
      eyebrow: "Academic setting",
    },
    "research-meeting": {
      src: "/use-cases/academic/discuss_room.webp",
      alt: "Research discussion room using PulseRoom",
      eyebrow: "Academic setting",
    },
    "presentation-evaluation": {
      src: "/use-cases/executive/presentation.webp",
      alt: "Presentation evaluation setting using PulseRoom",
      eyebrow: "Evaluation setting",
    },
    "panel-discussion": {
      src: "/use-cases/cover/panel_discussion.webp",
      alt: "Panel discussion using PulseRoom",
      eyebrow: "Panel setting",
    },
    meetings: {
      src: "/use-cases/executive/executive_meeting.webp",
      alt: "Executive meeting using PulseRoom",
      eyebrow: "Executive setting",
    },
    brainstorming: {
      src: "/use-cases/academic/collaborate.webp",
      alt: "Collaborative brainstorming using PulseRoom",
      eyebrow: "Workshop setting",
    },
    "policies-and-strategies": {
      src: "/use-cases/cover/board_meeting.webp",
      alt: "Policy and strategy discussion using PulseRoom",
      eyebrow: "Executive setting",
    },
    "budget-and-hiring": {
      src: "/use-cases/cover/board_meeting.webp",
      alt: "Budget and hiring discussion using PulseRoom",
      eyebrow: "Executive setting",
    },
    retrospectives: {
      src: "/use-cases/academic/collaborate.webp",
      alt: "Retrospective session using PulseRoom",
      eyebrow: "Team setting",
    },
  };

  const fallback =
    category === "Academic"
      ? {
          src: "/use-cases/academic/class.webp",
          alt: "Academic use case using PulseRoom",
          eyebrow: "Academic setting",
        }
      : {
          src: "/use-cases/executive/executive_meeting.webp",
          alt: "Executive use case using PulseRoom",
          eyebrow: "Executive setting",
        };

  return map[slug] ?? fallback;
}

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

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getUseCaseBySlug(slug);

  if (!article) {
    return { title: "Use case | PulseRoom" };
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

  const hero = getUseCaseHero(slug, article.category);
  const dimensionLabels = (article.dimensions ?? []).map((dimension) =>
    getDimensionLabel(dimension)
  );

  return (
    <main className="bg-[linear-gradient(180deg,#fcfbff_0%,#f7f3ff_20%,#ffffff_56%,#fcfbff_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            <span>←</span>
            <span>Back to use cases</span>
          </Link>

          <section className="mt-6 overflow-hidden rounded-[2.5rem] border border-violet-200 bg-white shadow-[0_18px_60px_rgba(124,58,237,0.06)]">
            <div className="grid gap-8 p-8 md:p-10 xl:grid-cols-[minmax(0,1fr)_280px] xl:items-start">
              <div>
                <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                  {article.category}
                </span>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  {article.title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {article.excerpt}
                </p>

                <div className="mt-8 overflow-hidden rounded-[2rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-2 shadow-[0_12px_36px_rgba(124,58,237,0.05)]">
                  <div className="overflow-hidden rounded-[1.6rem]">
                    <Image
                      src={hero.src}
                      alt={hero.alt}
                      width={1792}
                      height={1024}
                      unoptimized
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full border border-violet-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                    {hero.eyebrow}
                  </span>
                  <span className="rounded-full border border-violet-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                    PulseRoom in action
                  </span>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.7rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Article focus
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-slate-900">
                    {article.category} use case
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Structured for real rooms, visible dimensions, and clearer discussion.
                  </p>
                </div>

                <div className="rounded-[1.7rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Dimensions shown
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-violet-700">
                    {dimensionLabels.length}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Typical live lenses used to structure the room.
                  </p>
                </div>

                <div className="rounded-[1.7rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    What improves
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-violet-700">
                    {article.outcomes.length}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Core gains this setup tends to produce.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-[2rem] border border-violet-200 bg-white p-7 shadow-[0_12px_40px_rgba(124,58,237,0.05)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                Why this use case matters
              </p>

              <div className="mt-5 space-y-6 text-[16px] leading-8 text-slate-600">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-violet-200 bg-[linear-gradient(180deg,#faf5ff_0%,#ffffff_100%)] p-6 shadow-[0_10px_40px_rgba(124,58,237,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What improves
              </p>

              <div className="mt-5 space-y-3">
                {article.outcomes.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-violet-200 bg-white p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10">
            <FlowStrip steps={article.flow} />
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="rounded-[2rem] border border-violet-200 bg-white p-7 shadow-[0_12px_40px_rgba(124,58,237,0.05)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                Example agenda items
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Questions that give the room a clear purpose
              </h2>

              <div className="mt-6 space-y-4">
                {article.agenda.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <section className="rounded-[2rem] border border-violet-200 bg-white p-7 shadow-[0_12px_40px_rgba(124,58,237,0.05)] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Typical dimensions
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  The lenses that shape the discussion
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {dimensionLabels.map((label, index) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-violet-700">
                        {index + 1}
                      </span>
                      {label}
                    </span>
                  ))}
                </div>
              </section>

              {article.roomSetup && article.roomSetup.length > 0 ? (
                <section className="rounded-[2rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-7 shadow-[0_12px_40px_rgba(124,58,237,0.05)] md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Room blueprint
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                    Where this works best
                  </h2>

                  <div className="mt-5 space-y-3">
                    {article.roomSetup.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.3rem] border border-violet-200 bg-white p-4"
                      >
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </section>

          {article.detailSections && article.detailSections.length > 0 ? (
            <section className="mt-10">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                  Deeper perspective
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  Why this use case becomes more useful in practice
                </h2>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {article.detailSections.map((section, index) => (
                  <section
                    key={section.title}
                    className={
                      index % 2 === 0
                        ? "rounded-[2rem] border border-violet-200 bg-white p-7 shadow-[0_12px_40px_rgba(124,58,237,0.05)]"
                        : "rounded-[2rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-7 shadow-[0_12px_40px_rgba(124,58,237,0.05)]"
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
          ) : null}
        </div>
      </div>
    </main>
  );
}