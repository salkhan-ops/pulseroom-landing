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
    >
      <div className="grid gap-5 md:grid-cols-3 anim-stagger">
        {outcomes.map((o) => (
          <div
            key={o.title}
            className="rounded-2xl bg-white p-6 flex flex-col card-glow anim-hidden"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
            }}
          >
            <h3 className="text-base font-bold text-slate-900">{o.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 flex-1">{o.desc}</p>

            {/* Before / After pill */}
            <div
              className="mt-5 rounded-xl p-4 grid gap-3"
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
            >
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Before</div>
                <div className="text-sm font-medium text-slate-600">{o.before}</div>
              </div>
              <div className="h-px" style={{ background: "#E2E8F0" }} />
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#6366F1" }}
                >
                  After
                </div>
                <div className="text-sm font-bold text-slate-900">{o.after}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Executive callout */}
      <div
        className="mt-8 rounded-2xl p-6 anim-hidden"
        style={{
          background: "rgba(99,102,241,0.05)",
          border: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-900">Executive note: </span>
          PulseRoom is designed for serious rooms where accountability matters—workshops, exec
          education, and pilot programs.
        </p>
      </div>
    </Section>
  );
}