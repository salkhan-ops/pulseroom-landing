// app/blog/page.tsx
import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  bullets: string[];
  readingTime: string;
  dateLabel: string;
};

const posts: Post[] = [
  {
    slug: "alignment-vs-polling",
    title: "Alignment ≠ Polling: why teams keep re-deciding",
    excerpt:
      "Most tools collect opinions. Real decision work requires making trade-offs visible and reducing ambiguity about what the group actually agreed to.",
    bullets: [
      "Polling captures preference; alignment captures shared constraints and trade-offs.",
      "Re-litigation happens when “agreement” is not recorded as an artifact.",
      "Visual aggregation changes the discussion from persuasion to diagnosis.",
    ],
    readingTime: "4 min",
    dateLabel: "Decision note",
  },
  {
    slug: "meeting-noise-to-signal",
    title: "From meeting noise to signal: designing for clarity under pressure",
    excerpt:
      "Meetings often reward confidence and airtime, not accuracy. A good decision interface makes divergence visible early—before it becomes expensive.",
    bullets: [
      "Early divergence is information, not conflict—surface it quickly.",
      "Interfaces should reduce dominance effects and increase participation parity.",
      "A shared visualization can act as a “truth surface” for discussion.",
    ],
    readingTime: "5 min",
    dateLabel: "Workshop pattern",
  },
  {
    slug: "decision-artifacts",
    title: "The missing layer: decision artifacts teams can reuse",
    excerpt:
      "What matters after a workshop is not the conversation. It’s the artifact—what you can point to, share, and build on without restarting the debate.",
    bullets: [
      "Artifacts reduce post-meeting ambiguity and prevent scope drift.",
      "A one-page snapshot beats 40 slides and fragmented chat threads.",
      "Artifacts create accountability: what was decided, why, and what’s next.",
    ],
    readingTime: "4 min",
    dateLabel: "Product principle",
  },
];

function PageHeader() {
  return (
    <div className="pt-14 pb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-soft">
        <span className="h-2 w-2 rounded-full bg-brand-600" />
        PulseRoom notes
      </div>

      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Decision intelligence notes
      </h1>
      <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
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

function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs font-medium text-slate-500">
          {post.dateLabel} · {post.readingTime}
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          Coming soon
        </span>
      </div>

      <h2 className="mt-3 text-lg font-semibold text-slate-900 sm:text-xl">
        {post.title}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {post.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-3">
        <a
          href="/#engage"
          className="text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          Discuss a pilot →
        </a>

        <a
          href="/"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          Back to landing
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
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">
              Want these turned into full posts?
            </div>
            <p className="mt-2 text-sm text-slate-600 max-w-3xl">
              These are intentionally short “decision notes.” As you run pilots,
              we can convert them into case-based writeups with screenshots and
              before/after artifacts — without adding any backend or CMS.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={site.engagement.ctas.find((c) => c.key === "pilot")?.href ?? "/#engage"}
                className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-700"
              >
                Run a paid pilot
              </a>
              <a
                href="/#engage"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Explore engagement options
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
