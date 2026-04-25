import Link from "next/link";
import Section from "@/components/layout/Section";

const HOST_SIGNUP = "https://app.pulseroom.app/host/signup";
const HOST_LOGIN = "https://app.pulseroom.app/host/login";

type Plan = {
  id: string;
  name: string;
  price: string;
  note: string;
  description: string;
  anchor: string;
  badge?: string;
  dark?: boolean;
  highlight?: boolean;
  ctaLabel: string;
  ctaHref: string;
  ctaInternal?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$12",
    note: "/mo · or $96/yr",
    description: "Essential live engagement for small groups.",
    anchor: "For first sessions and lighter facilitation needs.",
    ctaLabel: "Get started",
    ctaHref: HOST_SIGNUP,
    features: [
      "Live sessions per month (10)",
      "Participants per session (30)",
      "Session duration (60 min)",
      "Agenda items (5)",
      "Dimensions per agenda (5)",
      "Live radar engagement",
      "Basic facilitator controls",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    note: "/mo · or $228/yr",
    description: "Structured sessions with group workflows and analytics.",
    anchor: "Best for recurring workshops and more serious team use.",
    ctaLabel: "Get started",
    ctaHref: HOST_SIGNUP,
    features: [
      "Live sessions per month (50)",
      "Participants per session (100)",
      "Session duration (120 min)",
      "Agenda items (15)",
      "Dimensions per agenda (8)",
      "Group mode (Included)",
      "Groups per session (5)",
      "Analytics reports",
    ],
  },
  {
    id: "premium-ai",
    name: "Premium AI",
    price: "$79",
    note: "/mo · or $708/yr",
    description: "Full PulseRoom with AI reports and decision intelligence.",
    anchor: "For heavier usage, richer review, and AI-supported follow-through.",
    badge: "Most popular",
    highlight: true,
    ctaLabel: "Get started",
    ctaHref: HOST_SIGNUP,
    features: [
      "Live sessions per month (150)",
      "Participants per session (300)",
      "Session duration (180 min)",
      "Agenda items (30)",
      "Dimensions per agenda (12)",
      "Group mode (Included)",
      "AI reports",
      "Decision intelligence workflows",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Let's talk",
    note: "Custom pricing",
    description: "For institutional deployment, larger teams, and custom requirements.",
    anchor: "For institutional rollout, enablement, and commercial support.",
    badge: "Enterprise",
    dark: true,
    ctaLabel: "Contact us",
    ctaHref: "/contact",
    ctaInternal: true,
    features: [
      "Custom participant and session limits",
      "Advanced enablement and onboarding",
      "Custom workflows and integrations",
      "Institutional rollout support",
      "Priority commercial support",
    ],
  },
];

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
      style={{
        background: dark ? "rgba(129,140,248,0.18)" : "rgba(99,102,241,0.12)",
        color: dark ? "#C7D2FE" : "#6366F1",
      }}
      aria-hidden
    >
      <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
        <path
          d="M4 7l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PlanButton({
  href,
  label,
  internal,
  primary,
  dark,
}: {
  href: string;
  label: string;
  internal?: boolean;
  primary?: boolean;
  dark?: boolean;
}) {
  const className = primary
    ? "inline-flex w-full items-center justify-center rounded-[1.15rem] px-5 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(99,102,241,0.28)] transition hover:translate-y-[-1px]"
    : dark
    ? "inline-flex w-full items-center justify-center rounded-[1.15rem] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(99,102,241,0.20)] transition hover:translate-y-[-1px]"
    : "inline-flex w-full items-center justify-center rounded-[1.15rem] border px-5 py-4 text-base font-semibold transition hover:translate-y-[-1px]";

  const style = primary
    ? {
        background: "linear-gradient(90deg, #6366F1 0%, #6D28D9 100%)",
      }
    : dark
    ? {
        background: "linear-gradient(90deg, #6366F1 0%, #4F46E5 100%)",
      }
    : {
        background: "#FFFFFF",
        borderColor: "rgba(99,102,241,0.28)",
        color: "#0F172A",
        boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
      };

  if (internal) {
    return (
      <Link href={href} className={className} style={style}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {label}
    </a>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const isDark = !!plan.dark;
  const isHighlight = !!plan.highlight;

  return (
    <div
      className="pricing-card relative flex h-full flex-col overflow-hidden rounded-[2rem] border"
      style={{
        borderColor: isDark
          ? "rgba(79,70,229,0.22)"
          : isHighlight
          ? "rgba(99,102,241,0.34)"
          : "rgba(99,102,241,0.12)",
        background: isDark
          ? "linear-gradient(180deg,#08122E 0%,#07152F 100%)"
          : isHighlight
          ? "linear-gradient(180deg,#F5F7FF 0%,#EEF2FF 100%)"
          : "#FFFFFF",
        boxShadow: isDark
          ? "0 18px 44px rgba(2,6,23,0.16)"
          : "0 12px 34px rgba(99,102,241,0.07)",
      }}
    >
      {!isDark && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24"
          style={{
            background: isHighlight
              ? "linear-gradient(180deg, rgba(255,255,255,0.28), transparent)"
              : "linear-gradient(180deg, rgba(99,102,241,0.04), transparent)",
          }}
        />
      )}

      {plan.badge ? (
        <div
          className="px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.22em]"
          style={{
            background: isDark
              ? "rgba(129,140,248,0.22)"
              : "linear-gradient(90deg,#6366F1 0%,#4F46E5 100%)",
            color: "#FFFFFF",
          }}
        >
          {plan.badge}
        </div>
      ) : (
        <div className="h-[42px]" />
      )}

      <div className="flex flex-1 flex-col px-8 pb-8 pt-8">
        <h3
          className="text-[2.05rem] font-semibold tracking-tight"
          style={{ color: isDark ? "#FFFFFF" : "#0F172A" }}
        >
          {plan.name}
        </h3>

        <div
          className="mt-4 text-[3.15rem] font-semibold leading-none tracking-tight"
          style={{ color: isDark ? "#FFFFFF" : "#0F172A" }}
        >
          {plan.price}
        </div>

        <div
          className="mt-2 text-[15px] leading-6"
          style={{ color: isDark ? "rgba(226,232,240,0.74)" : "#94A3B8" }}
        >
          {plan.note}
        </div>

        <p
          className="mt-5 min-h-[72px] text-[15px] leading-8"
          style={{ color: isDark ? "rgba(226,232,240,0.82)" : "#64748B" }}
        >
          {plan.description}
        </p>

        <div
          className="mt-4 rounded-[1.15rem] px-4 py-3 text-sm leading-6"
          style={{
            background: isDark ? "rgba(129,140,248,0.12)" : "rgba(99,102,241,0.06)",
            color: isDark ? "rgba(224,231,255,0.9)" : "#475569",
            border: isDark ? "1px solid rgba(129,140,248,0.12)" : "1px solid rgba(99,102,241,0.1)",
          }}
        >
          {plan.anchor}
        </div>

        <div className="mt-6">
          <PlanButton
            href={plan.ctaHref}
            label={plan.ctaLabel}
            internal={plan.ctaInternal}
            primary={isHighlight}
            dark={isDark}
          />
        </div>

        <div
          className="mt-6 h-px"
          style={{ background: isDark ? "rgba(148,163,184,0.18)" : "#EAEFF7" }}
        />

        <p
          className="mt-7 text-[12px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: isDark ? "rgba(199,210,254,0.88)" : "#94A3B8" }}
        >
          Includes
        </p>

        <ul className="mt-4 grid gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon dark={isDark} />
              <span
                className="text-[15px] leading-7"
                style={{ color: isDark ? "rgba(226,232,240,0.88)" : "#475569" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Start small. Scale when the room gets more serious."
      subtitle="Simple pricing for individuals and teams, with a clear path to institutional rollout when PulseRoom becomes part of your operating rhythm."
      className="section-bright"
    >
      <div className="mb-6 grid gap-4 md:grid-cols-3 xl:grid-cols-3">
        {[
          "No credit card needed to explore the product",
          "Upgrade when usage, group size, or analytics depth grows",
          "Enterprise support available for institutional rollout",
        ].map((item) => (
          <div
            key={item}
            className="rounded-[1.35rem] border border-violet-100 bg-white px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm"
          >
            <span className="mr-2 font-semibold text-violet-700">•</span>
            {item}
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[1.8rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)] px-6 py-5 text-center shadow-sm md:flex-row md:text-left">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Already have an account?
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Log in to the PulseRoom app and continue from your host workspace.
          </p>
        </div>

        <a
          href={HOST_LOGIN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50"
        >
          Go to login
        </a>
      </div>
    </Section>
  );
}
