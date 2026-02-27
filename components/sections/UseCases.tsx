import Section from "@/components/layout/Section";

const useCases = [
  {
    icon: "🧭",
    title: "Strategy workshops",
    desc: "Align cross-functional teams on roadmap priorities. Capture trade-offs live, not in a follow-up email.",
  },
  {
    icon: "🎓",
    title: "Executive education",
    desc: "Cohort-based programs that need reflection, debate, and defensible conclusions participants can reference.",
  },
  {
    icon: "🤝",
    title: "Facilitation engagements",
    desc: "Give clients a structured decision record from every engagement—not just notes and next steps.",
  },
  {
    icon: "📋",
    title: "Budget & hiring decisions",
    desc: "High-stakes rooms where every voice needs to be heard and the rationale needs to survive the meeting.",
  },
  {
    icon: "🔍",
    title: "Retrospectives",
    desc: "Turn post-mortems into actionable decisions with visible alignment and clear ownership.",
  },
  {
    icon: "⚡",
    title: "Sprint planning",
    desc: "Surface divergence early, align on priorities quickly, and start the sprint with shared conviction.",
  },
];

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="Built for the rooms that matter."
      subtitle="Wherever a group needs to decide something important and make it stick."
      className=""
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((uc) => (
          <div
            key={uc.title}
            className="rounded-2xl bg-white p-6 group transition-all hover:-translate-y-0.5"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xl mb-4"
              style={{ background: "rgba(99,102,241,0.08)" }}
            >
              {uc.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900">{uc.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{uc.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}