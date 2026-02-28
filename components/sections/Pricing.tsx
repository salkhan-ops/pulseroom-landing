"use client";

import { useEffect, useState } from "react";
import Section from "@/components/layout/Section";
import { APP_URL } from "@/lib/site";
import "./pricing.css";  // → components/sections/pricing.css

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────
//
// Option A — Your app exposes a public pricing API endpoint:
//   Set PRICING_API to your endpoint, e.g.:
//   "https://app.pulseroom.io/api/pricing"
//
//   Expected response shape:
//   {
//     tiers: [
//       {
//         id: "starter",
//         name: "Starter",
//         price: "Free",             // display string e.g. "Free" or "$29"
//         priceOld?: "$39",          // optional strikethrough
//         priceNote: "No credit card required",
//         description: "...",
//         cta: "Get started",
//         ctaHref: "https://...",
//         badge?: "Most popular",    // optional top banner
//         highlight: false,          // indigo tint card
//         dark: false,               // dark card (enterprise)
//         featuresLabel: "INCLUDES", // optional label above features
//         features: ["...", "..."],
//       }
//     ]
//   }
//
// Option B — No API yet? Set PRICING_API to "" and edit
//   FALLBACK_TIERS below to match your current plans.
//   Update admin panel → update FALLBACK_TIERS here.
//
// ─────────────────────────────────────────────────────────────
const PRICING_API  = "https://us-central1-my-pulseroom-project.cloudfunctions.net/pricing";                       // ← paste your API URL here
const PRICING_PAGE = `${APP_URL}/pricing`;     // ← full pricing page in app

// ─────────────────────────────────────────────────────────────
// FALLBACK (used when API is empty or fails)
// Mirror your admin panel tiers here
// ─────────────────────────────────────────────────────────────
const FALLBACK_TIERS: Tier[] = [
  {
    id: "free",
    name: "Free",
    price: "Free",
    priceNote: "No credit card required",
    description: "Run your first PulseRoom session today.",
    cta: "Get started",
    ctaHref: APP_URL,
    badge: null,
    highlight: false,
    dark: false,
    featuresLabel: "INCLUDES",
    features: [
      "Up to 10 participants",
      "1 live session at a time",
      "Basic alignment visualisation",
      "Session summary export",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    priceOld: "$39",
    priceNote: "/mo · billed yearly",
    description: "For facilitators who run regular workshops.",
    cta: "Start free trial",
    ctaHref: `${APP_URL}/signup?plan=pro`,
    badge: "Most popular",
    highlight: true,
    dark: false,
    featuresLabel: "EVERYTHING IN FREE +",
    features: [
      "Up to 30 participants",
      "Unlimited sessions",
      "Full signal library",
      "PDF decision artifact export",
      "Custom signal weighting",
      "Priority support",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: "$79",
    priceNote: "/mo · billed yearly",
    description: "For teams running multiple workshops a month.",
    cta: "Start free trial",
    ctaHref: `${APP_URL}/signup?plan=team`,
    badge: "For teams",
    highlight: false,
    dark: false,
    featuresLabel: "EVERYTHING IN PRO +",
    features: [
      "5 facilitator seats",
      "Shared session library",
      "Team analytics dashboard",
      "Brand kit",
      "SSO / SAML",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Let's talk",
    priceNote: "Custom pricing",
    description: "For organisations running PulseRoom at scale.",
    cta: "Book a call",
    ctaHref: "https://calendar.app.google/WMFb5GpB8wNxyWcZ8",
    badge: "Enterprise",
    highlight: false,
    dark: true,
    featuresLabel: "EVERYTHING IN TEAM +",
    features: [
      "Unlimited seats",
      "Dedicated CSM",
      "Custom integrations",
      "SLA & compliance docs",
      "Onboarding & training",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
type Tier = {
  id: string;
  name: string;
  price: string;
  priceOld?: string;
  priceNote: string;
  description: string;
  cta: string;
  ctaHref: string;
  badge: string | null;
  highlight: boolean;
  dark: boolean;
  featuresLabel?: string;
  features: string[];
};

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      className="pricing-check"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="7" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M4 7l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const cardClass = [
    "pricing-card",
    "anim-hidden",
    tier.highlight ? "pricing-card--highlight" : "",
    tier.dark       ? "pricing-card--dark"      : "",
  ].filter(Boolean).join(" ");

  const ctaClass = tier.highlight
    ? "pricing-cta pricing-cta--primary"
    : tier.dark
    ? "pricing-cta pricing-cta--dark"
    : "pricing-cta pricing-cta--secondary";

  const badgeClass = tier.dark
    ? "pricing-badge pricing-badge--dark"
    : tier.highlight
    ? "pricing-badge pricing-badge--highlight"
    : "pricing-badge";

  return (
    <div className={cardClass}>
      {/* Top badge */}
      {tier.badge && (
        <div className={badgeClass}>{tier.badge}</div>
      )}

      <div className="pricing-body">
        {/* Name */}
        <h3 className="pricing-name">{tier.name}</h3>

        {/* Price */}
        {tier.priceOld && (
          <div className="pricing-price-old">{tier.priceOld}</div>
        )}
        <div className="pricing-price">{tier.price}</div>
        <div className="pricing-price-note">{tier.priceNote}</div>

        {/* Description */}
        <p className="pricing-desc">{tier.description}</p>

        {/* CTA */}
        <a
          href={tier.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClass}
        >
          {tier.cta}
        </a>

        {/* Divider */}
        <div className="pricing-divider" />

        {/* Features */}
        {tier.featuresLabel && (
          <p className="pricing-features-label">{tier.featuresLabel}</p>
        )}
        <ul className="pricing-features">
          {tier.features.map((f) => (
            <li key={f} className="pricing-feature">
              <CheckIcon />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkeletonCards() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="pricing-skeleton" />
      ))}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────
export default function Pricing() {
  const [tiers,   setTiers]   = useState<Tier[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useEffect(() => {
    // No API configured — use fallback immediately
    if (!PRICING_API) {
      setTiers(FALLBACK_TIERS);
      setLoading(false);
      return;
    }

    // Fetch live pricing from your app's API
    const controller = new AbortController();

    fetch(PRICING_API, {
      signal: controller.signal,
      headers: { "Accept": "application/json" },
      // No auth header needed — this should be a public endpoint
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: { tiers: Tier[] }) => {
        if (Array.isArray(data.tiers) && data.tiers.length > 0) {
          setTiers(data.tiers);
        } else {
          // API returned empty — fall back
          setTiers(FALLBACK_TIERS);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.warn("[Pricing] API fetch failed, using fallback tiers.", err);
        setTiers(FALLBACK_TIERS);
        setError(true);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Simple, transparent pricing."
      subtitle="Start free. Scale when you're ready."
      className="section-bright"
    >
      <div className="pricing-grid anim-stagger">
        {loading ? (
          <SkeletonCards />
        ) : (
          <>
            {(tiers ?? FALLBACK_TIERS).map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}

            {/* Footer note */}
            <div className="pricing-footer">
              {error && "Showing cached pricing. "}
              Full pricing details and billing →{" "}
              <a href={PRICING_PAGE} target="_blank" rel="noopener noreferrer">
                open in app
              </a>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}