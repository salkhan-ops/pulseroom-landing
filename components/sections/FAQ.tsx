import Section from "@/components/layout/Section";

const faqs = [
  {
    q: "What exactly does PulseRoom do?",
    a: "PulseRoom helps groups capture key signals during live discussion, visualize alignment, and leave with clear, shared decisions. It's designed for situations where conversation alone is not enough to create accountability or clarity.",
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
    >
      <div
        className="mx-auto max-w-3xl rounded-2xl overflow-hidden"
        style={{
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
        }}
      >
        {faqs.map((item, i) => (
          <details
            key={item.q}
            className="group bg-white"
            style={
              i < faqs.length - 1
                ? { borderBottom: "1px solid #F1F5F9" }
                : {}
            }
          >
            <summary className="cursor-pointer list-none px-6 py-5 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span
                  className="flex-shrink-0 grid h-6 w-6 place-items-center rounded-full text-xs font-bold transition-transform group-open:rotate-45"
                  style={{
                    background: "rgba(99,102,241,0.08)",
                    color: "#6366F1",
                  }}
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed text-slate-500">{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}