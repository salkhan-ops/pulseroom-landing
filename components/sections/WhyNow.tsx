import Section from "@/components/layout/Section";

const items = [
  {
    title: "Decisions get re-litigated",
    desc: "People leave the room with different interpretations, and the same debate restarts in Slack or email.",
  },
  {
    title: "A few voices dominate",
    desc: "In high-stakes rooms, quieter signals often matter most—but they’re the easiest to miss.",
  },
  {
    title: "No durable artifact",
    desc: "A long doc or slide deck isn’t the same as a clear decision record with rationale and ownership.",
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
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">Before PulseRoom</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            {[
              "“We’ll circle back.” (and you never do)",
              "Six people talking, two dominating",
              "Summary buried in a long deck",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">After PulseRoom</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            {[
              "Decision locked in the room (with rationale)",
              "Every voice counted through structured signals",
              "One clean artifact people actually reference",
            ].map((a) => (
              <li key={a} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">PulseRoom is for</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            {forTeams.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">Not ideal for</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            {notIdeal.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
