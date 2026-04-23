import Section from "@/components/layout/Section";

const problems = [
  {
    title: "Decisions get re-litigated",
    desc: "People leave the room with different interpretations, and the same debate restarts in Slack or email.",
  },
  {
    title: "A few voices dominate",
    desc: "In high-stakes rooms, quieter signals often matter most—but they are the easiest to miss.",
  },
  {
    title: "No durable artifact",
    desc: "A long doc or slide deck is not the same as a clear decision record with rationale and ownership.",
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

function Dot({ active }: { active?: boolean }) {
  return (
    <span
      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
      style={{ background: active ? "#6366F1" : "#CBD5E1" }}
      aria-hidden
    />
  );
}

export default function WhyNow() {
  return (
    <Section
      id="why-now"
      eyebrow="Why now"
      title="Meetings create motion. Decisions require alignment."
      subtitle="PulseRoom is built for rooms where stakes are real and outcomes must hold up after the session."
      className="section-bright"
    >
      <div className="grid gap-5 md:grid-cols-3 anim-stagger">
        {problems.map((it) => (
          <div key={it.title} className="rounded-[1.75rem] p-7 card-bright anim-hidden">
            <h3
              className="text-[1.45rem] font-semibold leading-tight tracking-tight"
              style={{ color: "#0F172A" }}
            >
              {it.title}
            </h3>
            <p className="mt-3 text-base leading-8" style={{ color: "#64748B" }}>
              {it.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div
          className="rounded-[1.75rem] p-7 anim-hidden"
          style={{
            background: "linear-gradient(135deg, #FAFBFF 0%, #F5F3FF 100%)",
            border: "1px solid rgba(99,102,241,0.12)",
            boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
          }}
        >
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#94A3B8" }}
          >
            Before PulseRoom
          </p>
          <ul className="grid gap-3">
            {[
              `"We'll circle back." (and you never do)`,
              `Six people talking, two dominating`,
              `Summary buried in a long deck`,
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[1rem] leading-7"
                style={{ color: "#475569" }}
              >
                <Dot />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.75rem] p-7 card-bright anim-hidden">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#6366F1" }}
          >
            After PulseRoom
          </p>
          <ul className="grid gap-3">
            {[
              "Decision locked in the room (with rationale)",
              "Every voice counted through structured signals",
              "One clean artifact people actually reference",
            ].map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 text-[1rem] leading-7"
                style={{ color: "#475569" }}
              >
                <Dot active />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-[1.75rem] p-7 card-bright anim-hidden">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#6366F1" }}
          >
            PulseRoom is for
          </p>
          <ul className="grid gap-3">
            {forTeams.map((x) => (
              <li
                key={x}
                className="flex items-start gap-3 text-[1rem] leading-7"
                style={{ color: "#475569" }}
              >
                <Dot active />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.75rem] p-7 card-bright anim-hidden">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#94A3B8" }}
          >
            Not ideal for
          </p>
          <ul className="grid gap-3">
            {notIdeal.map((x) => (
              <li
                key={x}
                className="flex items-start gap-3 text-[1rem] leading-7"
                style={{ color: "#475569" }}
              >
                <Dot />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
} 