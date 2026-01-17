import Section from "@/components/layout/Section";

const steps = [
  {
    n: "01",
    title: "Capture signals live",
    desc: "Participants share quick inputs during discussion — structured, not messy.",
  },
  {
    n: "02",
    title: "Visualize alignment",
    desc: "See where the group converges, where it splits, and what needs attention.",
  },
  {
    n: "03",
    title: "Convert to next actions",
    desc: "Lock decisions, assign follow-ups, and export a clean summary — instantly.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="A simple loop: signal → alignment → action."
      subtitle="Designed for live sessions, workshops, classrooms, and async follow-ups."
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-sm font-semibold text-white">
                {s.n}
              </span>
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
