import Section from "@/components/layout/Section";

const outcomes = [
  {
    title: "Fewer decision replays",
    desc: "Make trade-offs explicit so you don’t re-litigate the same issue next week.",
    before: "“Let’s revisit this.”",
    after: "Decision + rationale is visible.",
  },
  {
    title: "Clear ownership",
    desc: "Move from vague agreement to named next steps that survive outside the room.",
    before: "“Someone should…”",
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
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {outcomes.map((o) => (
          <div
            key={o.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <h3 className="text-base font-semibold text-slate-900">{o.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.desc}</p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-500">Before</div>
              <div className="mt-1 text-sm font-medium text-slate-800">{o.before}</div>

              <div className="mt-4 text-xs font-semibold text-slate-500">After</div>
              <div className="mt-1 text-sm font-medium text-slate-900">{o.after}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Executive note:</span>{" "}
          PulseRoom is designed for serious rooms where accountability matters—workshops, exec education,
          and pilot programs.
        </p>
      </div>
    </Section>
  );
}
