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
            className="rounded-2xl p-6 flex flex-col card-bright anim-hidden"
          >
            <h3 className="text-base font-bold" style={{ color: "#0F172A" }}>
              {o.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "#64748B" }}>
              {o.desc}
            </p>

            {/* Before / After */}
            <div
              className="mt-5 rounded-xl p-4"
              style={{
                background: "#F8FAFC",
                border: "1px solid #EEF2F7",
              }}
            >
              <div className="mb-3">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>
                  Before
                </p>
                <p className="text-sm font-medium" style={{ color: "#64748B" }}>{o.before}</p>
              </div>
              <div className="h-px" style={{ background: "#E2E8F0", marginBottom: "12px" }} />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#6366F1" }}>
                  After
                </p>
                <p className="text-sm font-bold" style={{ color: "#0F172A" }}>{o.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div
        className="mt-6 rounded-2xl p-6 anim-hidden"
        style={{
          background: "linear-gradient(135deg, #F5F3FF 0%, #EEF2FF 100%)",
          border: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        <p className="text-sm" style={{ color: "#475569" }}>
          <span className="font-bold" style={{ color: "#0F172A" }}>Executive note: </span>
          PulseRoom is designed for serious rooms where accountability matters—workshops, exec
          education, and pilot programs.
        </p>
      </div>
    </Section>
  );
}