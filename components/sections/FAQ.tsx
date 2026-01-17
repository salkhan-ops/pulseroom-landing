import Section from "@/components/layout/Section";

const faqs = [
  {
    q: "What exactly does PulseRoom do?",
    a: "PulseRoom helps groups capture key signals during live discussion, visualize alignment, and leave with clear, shared decisions. It’s designed for situations where conversation alone is not enough to create accountability or clarity.",
  },
  {
    q: "How is this different from polling or survey tools?",
    a: "Polling tools collect opinions. PulseRoom focuses on decision alignment—making trade-offs visible, surfacing divergence early, and helping groups converge on outcomes they can stand behind after the session.",
  },
  {
    q: "When does PulseRoom work best?",
    a: "PulseRoom works best in workshops, executive sessions, and cohort-based settings where a small to mid-sized group (roughly 6–30 people) needs to make or validate important decisions in real time.",
  },
  {
    q: "Is PulseRoom a facilitation tool or a decision tool?",
    a: "It supports both. Facilitators use PulseRoom to structure conversation, while decision-makers use it to see alignment, document rationale, and move forward with confidence.",
  },
  {
    q: "What does a paid pilot typically involve?",
    a: "Most pilots run 2–4 weeks and include a small number of real sessions. The goal is to test PulseRoom in a live context and produce concrete outcomes you can evaluate internally.",
  },
  {
    q: "Do participants need training or accounts?",
    a: "No heavy onboarding. PulseRoom is designed to feel lightweight for participants while giving facilitators and decision owners structured outputs.",
  },
  {
    q: "Is this meant to replace meetings?",
    a: "No. PulseRoom enhances important meetings by making the decision dynamics explicit and the outcomes durable.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions, answered."
      subtitle="These are the questions we hear most often from facilitators, executives, and program leads."
      className="bg-slate-50"
    >
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
        {faqs.map((item) => (
          <details key={item.q} className="group p-6">
            <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span
                  className="text-slate-400 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
