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
      className="section-cool"
    >
      <div className="grid gap-4 md:grid-cols-3 anim-stagger">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl p-6 relative overflow-hidden card-bright anim-hidden"
          >
            {/* Faint ghost number */}
            <div
              className="pointer-events-none select-none absolute -top-2 -right-1 text-8xl font-black"
              style={{ color: "rgba(99,102,241,0.05)", lineHeight: 1 }}
              aria-hidden
            >
              {s.n}
            </div>

            <div className="relative">
              <div
                className="grid h-10 w-10 place-items-center rounded-xl text-sm font-bold text-white mb-4"
                style={{
                  background: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
                  boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
                }}
              >
                {s.n}
              </div>
              <h3 className="text-base font-bold" style={{ color: "#0F172A" }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#64748B" }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Flow indicator */}
      <div className="hidden md:flex items-center justify-center mt-8 gap-0 anim-hidden">
        {["Capture", "Align", "Act"].map((label, i) => (
          <div key={label} className="flex items-center">
            <div
              className="rounded-full px-5 py-2 text-xs font-bold"
              style={{
                background: "rgba(99,102,241,0.08)",
                color: "#6366F1",
                border: "1px solid rgba(99,102,241,0.18)",
              }}
            >
              {label}
            </div>
            {i < 2 && (
              <div
                className="w-16 h-px mx-1"
                style={{
                  background: "linear-gradient(90deg, #6366F1, #A5B4FC)",
                  opacity: 0.5,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}