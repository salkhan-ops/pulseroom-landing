import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { blogPosts, type BlogPost } from "@/lib/blog";
import { APP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | PulseRoom",
  description:
    "Short, practical essays on alignment, decision quality, facilitation, and decision artifacts.",
};

function PageHeader() {
  return (
    <div className="pb-10 pt-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-soft">
        <span className="h-2 w-2 rounded-full bg-brand-600" />
        PulseRoom notes
      </div>

      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Decision intelligence notes
      </h1>

      <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">
        Short, practical essays on alignment, decision quality, and why teams
        keep re-litigating outcomes — written to support workshops, exec
        education, and product decision-making.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
          Workshops
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
          Facilitation
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
          Exec education
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
          Decision artifacts
        </span>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs font-medium text-slate-500">
          {post.category} · {post.readingTime}
        </div>

        {post.status ? (
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            {post.status}
          </span>
        ) : null}
      </div>

      <h2 className="mt-3 text-lg font-semibold text-slate-900 sm:text-xl">
        <Link
          href={`/blog/${post.slug}`}
          className="transition hover:text-brand-700"
        >
          {post.title}
        </Link>
      </h2>

      <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {post.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          Read article →
        </Link>

        <a
          href={post.primaryCtaHref || APP_URL}
          className="text-sm font-medium text-brand-700 hover:text-brand-800"
          target={
            (post.primaryCtaHref || APP_URL).startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            (post.primaryCtaHref || APP_URL).startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
        >
          {post.primaryCtaLabel || "Get Started"} →
        </a>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main>
      <Container>
        <PageHeader />

        <section className="pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">
              Want more practical decision notes?
            </div>

            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              These essays are designed to stay short, usable, and grounded in
              real facilitation and decision-making practice. Start with the
              platform, then use the notes to sharpen how your rooms are framed,
              read, and carried forward.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started →
              </a>

              <Link
                href="/#faq"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}