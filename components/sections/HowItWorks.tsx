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
      <div className="grid gap-5 md:grid-cols-3 anim-stagger">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl bg-white p-6 relative overflow-hidden card-glow anim-hidden"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
            }}
          >
            {/* Ghost step number */}
            <div
              className="absolute -top-3 -right-1 text-8xl font-extrabold pointer-events-none select-none"
              style={{ color: "rgba(99,102,241,0.06)", lineHeight: 1 }}
              aria-hidden
            >
              {s.n}
            </div>

            <div className="relative">
              <div
                className="grid h-10 w-10 place-items-center rounded-xl text-sm font-bold text-white mb-4"
                style={{
                  background: "linear-gradient(135deg, #818CF8, #6366F1)",
                  boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
                }}
              >
                {s.n}
              </div>
              <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Connector line visual */}
      <div className="hidden md:flex items-center justify-center mt-8 gap-0">
        {["Capture", "Align", "Act"].map((label, i) => (
          <div key={label} className="flex items-center">
            <div
              className="rounded-full px-4 py-1.5 text-xs font-bold"
              style={{
                background: "rgba(99,102,241,0.1)",
                color: "#6366F1",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              {label}
            </div>
            {i < 2 && (
              <div className="w-16 h-px mx-1" style={{ background: "linear-gradient(90deg, #6366F1, #A5B4FC)" }} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}