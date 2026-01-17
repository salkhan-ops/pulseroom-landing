import Section from "@/components/layout/Section";

const items = [
  {
    title: "Meetings create data — but it gets lost",
    desc: "Important signals are shared verbally, then vanish into memory or messy notes.",
  },
  {
    title: "Teams need alignment, not more documents",
    desc: "When priorities shift fast, lightweight clarity beats heavyweight process.",
  },
  {
    title: "AI helps — but only if the inputs are structured",
    desc: "Capturing signals as they happen makes summaries, insights, and follow-ups far better.",
  },
];

export default function WhyNow() {
  return (
    <Section
      id="why-now"
      eyebrow="Why now"
      title="Decisions are getting harder — and noisier."
      subtitle="More stakeholders, more ambiguity, more churn. PulseRoom is built to make alignment visible and actionable in the moment."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
