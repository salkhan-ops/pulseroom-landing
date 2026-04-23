import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | PulseRoom",
    };
  }

  return {
    title: `${post.title} | PulseRoom`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[linear-gradient(180deg,#fcfbff_0%,#f7f3ff_20%,#ffffff_58%,#fcfbff_100%)]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 lg:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          <span>←</span>
          <span>Back to blog</span>
        </Link>

        <article className="mt-6 overflow-hidden rounded-[2.5rem] border border-violet-200 bg-white shadow-[0_18px_60px_rgba(124,58,237,0.06)]">
          <div className="border-b border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] px-8 py-8 md:px-10 md:py-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                {post.category}
              </span>

              <span className="text-sm text-slate-500">{post.readingTime}</span>

              {post.status ? (
                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                  {post.status}
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {post.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={post.primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.22)] transition hover:bg-violet-700"
                target={post.primaryCtaHref.startsWith("http") ? "_blank" : undefined}
                rel={
                  post.primaryCtaHref.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {post.primaryCtaLabel}
              </a>

              <Link
                href={post.secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50"
              >
                {post.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 px-8 py-8 md:px-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
              <div className="space-y-6 text-[16px] leading-8 text-slate-700">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 space-y-8">
                {post.bodySections.map((section) => (
                  <section
                    key={section.heading}
                    className="rounded-[2rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-6 md:p-7"
                  >
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {section.heading}
                    </h2>

                    <div className="mt-5 space-y-5 text-[15px] leading-8 text-slate-600">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-10 rounded-[2rem] border border-violet-200 bg-white p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                  {post.referencesTitle}
                </p>

                <div className="mt-5 space-y-3">
                  {post.references.map((reference) => (
                    <div
                      key={reference.label}
                      className="rounded-[1.2rem] border border-violet-200 bg-violet-50/50 px-4 py-4 text-sm leading-7 text-slate-700"
                    >
                      {reference.label}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-violet-200 bg-[linear-gradient(180deg,#faf5ff_0%,#ffffff_100%)] p-6 shadow-[0_10px_34px_rgba(124,58,237,0.04)] lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Key takeaways
                </p>

                <div className="mt-5 space-y-3">
                  {post.takeaways.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-violet-200 bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-slate-700">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-violet-200 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Ready to apply this?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use PulseRoom to structure the room, surface live signals,
                    and carry the outcome forward as a decision artifact.
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href={post.primaryCtaHref}
                      className="inline-flex items-center justify-center rounded-full bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                      target={
                        post.primaryCtaHref.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        post.primaryCtaHref.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {post.primaryCtaLabel}
                    </a>

                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-violet-50"
                    >
                      More notes
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}