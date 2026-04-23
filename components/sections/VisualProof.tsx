import Image from "next/image";
import Section from "@/components/layout/Section";

const analyticsCards = [
  {
    title: "Agenda comparison",
    desc:
      "See how different agenda items performed across the same session. Identify which topics created clarity, hesitation, divergence, or stronger consensus.",
    image: "/analytics/analytics1.webp",
    alt: "Agenda comparison analytics",
    bullets: [
      "Compare one agenda against another",
      "Spot stronger and weaker dimensions",
      "See where discussion quality shifted",
    ],
  },
  {
    title: "Session comparison",
    desc:
      "Track how outcomes change across sessions, cohorts, or repeated teaching runs. Useful for teaching improvement, leadership reviews, and facilitation quality.",
    image: "/analytics/analytics2.webp",
    alt: "Session comparison analytics",
    bullets: [
      "Compare one session to another",
      "Review trends across repeated runs",
      "See whether alignment improves over time",
    ],
  },
  {
    title: "Action follow-through",
    desc:
      "Convert the room’s output into a more structured record of priorities, next steps, and follow-up actions after the discussion ends.",
    image: "/analytics/analytics3.webp",
    alt: "Action follow-through analytics",
    bullets: [
      "Turn output into next-step visibility",
      "Keep priorities and rationale visible",
      "Support post-session review and accountability",
    ],
  },
];

export default function VisualProof() {
  return (
    <Section
      id="proof"
      eyebrow="Analytics"
      title="After-session analytics."
      subtitle="PulseRoom does not end when the room ends. Compare agendas, compare sessions, and carry the signal forward into review, refinement, and follow-through."
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {analyticsCards.map((card) => (
          <section
            key={card.title}
            className="overflow-hidden rounded-[2rem] border border-violet-200 bg-white shadow-[0_16px_52px_rgba(124,58,237,0.06)]"
          >
            <div className="border-b border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">
                After the meeting
              </p>
              <h3 className="mt-3 text-[1.55rem] font-semibold leading-tight tracking-tight text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {card.desc}
              </p>
            </div>

            <div className="p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ff_100%)] p-4">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="mt-5 space-y-3">
                {card.bullets.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.1rem] border border-violet-200 bg-violet-50/50 px-4 py-3"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}