import Section from "@/components/layout/Section";

const outcomes = [
  {
    title: "Fewer decision replays",
    desc: "Make trade-offs explicit so you don't re-litigate the same issue next week.",
    before: `"Let's revisit this."`,
    after: "Decision + rationale is visible.",
  },
  {
    title: "Clear ownership",
    desc: "Move from vague agreement to named next steps that survive outside the room.",
    before: `"Someone should..."`,
    after: "Owner + deadline + next action.",
  },
  {
    title: "A usable artifact",
    desc: "Leave with a structured snapshot people actually reference—not a long doc nobody reads.",
    before: "Notes scattered across tools.",
    after: "One clean, shareable summary.",
  },
];

export default function Outcomes() {
  return (
    <Section
      id="outcomes"
      eyebrow="Outcomes"
      title="Outcomes, not features."
      subtitle="PulseRoom is designed to change what happens after the meeting—not just what happens during it."
      className="section-bright"
    >
      <div className="grid gap-4 md:grid-cols-3 anim-stagger">
        {outcomes.map((o) => (
          <div
            key={o.title}
            className="flex flex-col rounded-[1.6rem] p-5 sm:p-6 card-bright anim-hidden"
          >
            <h3
              className="text-xl font-bold leading-tight sm:text-[1.5rem]"
              style={{ color: "#0F172A" }}
            >
              {o.title}
            </h3>

            <p
              className="mt-3 flex-1 text-[15px] leading-7 sm:text-base"
              style={{ color: "#64748B" }}
            >
              {o.desc}
            </p>

            <div
              className="mt-5 rounded-[1.2rem] p-4"
              style={{
                background: "#F8FAFC",
                border: "1px solid #EEF2F7",
              }}
            >
              <div className="mb-3">
                <p
                  className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#94A3B8" }}
                >
                  Before
                </p>
                <p className="text-sm font-medium" style={{ color: "#64748B" }}>
                  {o.before}
                </p>
              </div>

              <div
                className="h-px"
                style={{ background: "#E2E8F0", marginBottom: "12px" }}
              />

              <div>
                <p
                  className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#6366F1" }}
                >
                  After
                </p>
                <p className="text-sm font-bold" style={{ color: "#0F172A" }}>
                  {o.after}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-4 rounded-[1.7rem] p-5 sm:p-6 anim-hidden"
        style={{
          background: "linear-gradient(135deg, #F5F3FF 0%, #EEF2FF 100%)",
          border: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        <p className="text-[15px] leading-7 sm:text-base" style={{ color: "#475569" }}>
          <span className="font-bold" style={{ color: "#0F172A" }}>
            Executive note:{" "}
          </span>
          PulseRoom is designed for serious rooms where accountability matters—workshops, exec
          education, and pilot programs.
        </p>
      </div>
    </Section>
  );
}