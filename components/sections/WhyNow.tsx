import Section from "@/components/layout/Section";

const items = [
  {
    title: "Meetings create signal — but it gets lost",
    desc: "Important inputs surface verbally, then disappear into memory, inboxes, or scattered notes.",
  },
  {
    title: "Teams need alignment, not more documents",
    desc: "When priorities shift fast, lightweight clarity beats heavyweight process.",
  },
  {
    title: "AI helps — only if inputs are structured",
    desc: "Capturing signals as they happen makes summaries, insights, and follow-ups meaningfully better.",
  },
];

const notFor = [
  "Icebreakers or “fun polls” with no accountability",
  "Anonymous mass polling at very large scale",
  "Fully automated decisions without human ownership",
];

export default function WhyNow() {
  return (
    <Section
      id="why-now"
      eyebrow="Why now"
      title="Decisions are getting harder — and noisier."
      subtitle="More stakeholders, more ambiguity, more churn. PulseRoom makes alignment visible and actionable in the moment."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-base font-semibold text-slate-900">PulseRoom is not for</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          This is decision intelligence—built for serious rooms. If you want lightweight entertainment
          or mass anonymous polling, it’s probably not the right fit.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-3">
          {notFor.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
