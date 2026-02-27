import Section from "@/components/layout/Section";

const items = [
  {
    title: "Decisions get re-litigated",
    desc: "People leave the room with different interpretations, and the same debate restarts in Slack or email.",
  },
  {
    title: "A few voices dominate",
    desc: "In high-stakes rooms, quieter signals often matter most—but they're the easiest to miss.",
  },
  {
    title: "No durable artifact",
    desc: "A long doc or slide deck isn't the same as a clear decision record with rationale and ownership.",
  },
];

const forTeams = [
  "Workshops where outcomes matter (roadmap, budget, hiring, strategy)",
  "Facilitators who want rigor without heavy process",
  "Exec education programs that need reflection + evidence",
];

const notIdeal = [
  "Anonymous mass polling at 500+ scale",
  "Recurring meetings with no decision authority",
  "Icebreakers without follow-through",
];

export default function WhyNow() {
  return (
    <Section
      id="why-now"
      eyebrow="Why now"
      title="Meetings create motion. Decisions require alignment."
      subtitle="PulseRoom is built for rooms where stakes are real and outcomes must hold up after the session."
    >
      {/* 3 problem cards — staggered */}
      <div className="grid gap-5 md:grid-cols-3 anim-stagger">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl bg-white p-6 card-glow anim-hidden"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
            }}
          >
            <h3 className="text-base font-bold text-slate-900">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{it.desc}</p>
          </div>
        ))}
      </div>

      {/* Before / After */}
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div
          className="rounded-2xl p-6 anim-hidden card-glow"
          style={{
            background: "rgba(99,102,241,0.05)",
            border: "1px solid rgba(99,102,241,0.15)",
          }}
        >
          <h3 className="text-base font-bold text-slate-900 mb-3">Before PulseRoom</h3>
          <ul className="grid gap-2.5">
            {[
            `"We'll circle back." (and you never do)`,
              "Six people talking, two dominating",
              "Summary buried in a long deck",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: "#CBD5E1" }} aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl bg-white p-6 anim-hidden card-glow"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
          }}
        >
          <h3 className="text-base font-bold text-slate-900 mb-3">After PulseRoom</h3>
          <ul className="grid gap-2.5">
            {[
              "Decision locked in the room (with rationale)",
              "Every voice counted through structured signals",
              "One clean artifact people actually reference",
            ].map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: "#6366F1" }} aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* For / Not for */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div
          className="rounded-2xl bg-white p-6 anim-hidden card-glow"
          style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 40px rgba(99,102,241,0.07)" }}
        >
          <h3 className="text-base font-bold text-slate-900 mb-3">PulseRoom is for</h3>
          <ul className="grid gap-2.5">
            {forTeams.map((x) => (
              <li key={x} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: "#6366F1" }} aria-hidden />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl bg-white p-6 anim-hidden card-glow"
          style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 40px rgba(99,102,241,0.07)" }}
        >
          <h3 className="text-base font-bold text-slate-900 mb-3">Not ideal for</h3>
          <ul className="grid gap-2.5">
            {notIdeal.map((x) => (
              <li key={x} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: "#CBD5E1" }} aria-hidden />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}