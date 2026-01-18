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
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{c.context}</p>

            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
           
              <img
                src={withBasePath(c.image)}
                alt={c.title}
                loading="lazy"
                className="h-auto w-full"
              />

            </div>

            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {c.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-slate-500">
              Artifact produced: <span className="font-medium">{c.artifact}</span>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
