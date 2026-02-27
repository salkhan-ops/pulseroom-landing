import Section from "@/components/layout/Section";
import { withBasePath } from "@/lib/paths";

type Case = {
  title: string;
  context: string;
  outcomes: string[];
  artifact: string;
  image: string;
};

const cases: Case[] = [
  {
    title: "Strategy & product workshop",
    context:
      "A cross-functional team aligning on roadmap priorities under time pressure.",
    outcomes: [
      "Divergence surfaced early instead of late-stage disagreement",
      "Trade-offs made explicit during discussion",
      "Clear priority set at the end of the session",
    ],
    artifact: "One-page decision summary with rationale",
    image: "/cases/strategy.png",
  },
  {
    title: "Consulting / facilitation engagement",
    context:
      "An external facilitator running a structured decision workshop for a client team.",
    outcomes: [
      "All participants contributed signals, not just dominant voices",
      "Facilitator could steer discussion using live alignment cues",
      "Client left with a concrete decision record",
    ],
    artifact: "Exportable alignment snapshot for client follow-up",
    image: "/cases/consulting.png",
  },
  {
    title: "Executive education session",
    context:
      "A cohort-based program requiring reflection, debate, and defensible conclusions.",
    outcomes: [
      "Participants could see where views converged or diverged",
      "Discussion moved from opinion to evidence-backed reasoning",
      "Session outputs reused for post-class reflection",
    ],
    artifact: "Structured artifact supporting learning objectives",
    image: "/cases/exec-ed.png",
  },
];

export default function CaseSnapshots() {
  return (
    <Section
      id="cases"
      eyebrow="Representative scenarios"
      title="Where PulseRoom is used"
      subtitle="These examples illustrate typical contexts and outcomes. They are representative—not endorsements."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl bg-white flex flex-col overflow-hidden"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
            }}
          >
            {/* Image */}
            <div
              className="overflow-hidden"
              style={{ background: "#F1F5F9" }}
            >
              <img
                src={withBasePath(c.image)}
                alt={c.title}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{c.context}</p>

              <ul className="mt-4 grid gap-2 flex-1">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span
                      className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full"
                      style={{ background: "#6366F1" }}
                      aria-hidden
                    />
                    {o}
                  </li>
                ))}
              </ul>

              <div
                className="mt-5 pt-4"
                style={{ borderTop: "1px solid #F1F5F9" }}
              >
                <span className="text-xs text-slate-400">Artifact produced: </span>
                <span className="text-xs font-semibold text-slate-700">{c.artifact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}