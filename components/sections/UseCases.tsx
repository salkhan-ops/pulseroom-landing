import Section from "@/components/layout/Section";

const cards = [
  {
    title: "Product & strategy workshops",
    desc: "Turn debate into visible alignment. Keep momentum after the session.",
    bullets: ["Prioritize features", "De-risk decisions", "Clarify ownership"],
  },
  {
    title: "Executive meetings",
    desc: "Make trade-offs explicit and reduce re-litigation of decisions.",
    bullets: ["Decision trace", "Fast summaries", "Alignment over opinions"],
  },
  {
    title: "Classrooms & cohort learning",
    desc: "Engage every participant and surface patterns across groups.",
    bullets: ["Live feedback", "Group vectors", "Reflection loops"],
  },
];

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="Built for teams that must decide — together."
      subtitle="Three common scenarios, designed to feel lightweight but powerful."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-base font-semibold text-slate-900">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
