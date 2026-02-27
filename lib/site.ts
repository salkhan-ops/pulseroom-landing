// lib/site.ts

export type NavItem = { label: string; href: string; enabled?: boolean };

export type CtaKey = "app" | "early";

export type EngagementCta = {
  key: CtaKey;
  enabled: boolean;
  primary?: boolean;
  title: string;
  blurb: string;
  href: string;
  badge?: string;
};

export const APP_URL = "https://my-pulseroom-project.web.app";

export const site = {
  name: "PulseRoom",
  tagline: "Dot Collector",
  url: "https://salkhan-ops.github.io/pulseroom-landing",

  nav: [
    { label: "Why now", href: "#why-now" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Proof", href: "#proof" },
    { label: "FAQ", href: "#faq" },
  ] as NavItem[],

  navGroups: {
    product: [
      { label: "Why now", href: "/#why-now" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Outcomes", href: "/#outcomes" },
      { label: "Use cases", href: "/#use-cases" },
      { label: "Get PulseRoom", href: "/#get-pulseroom" },
    ] as NavItem[],

    learn: [
      { label: "Decision insights (Blog)", href: "/blog", enabled: true },
      { label: "FAQ (quick answers)", href: "/#faq" },
    ] as NavItem[],

    proof: [
      { label: "Visual proof", href: "/#proof" },
      { label: "Representative scenarios", href: "/#use-cases" },
    ] as NavItem[],
  },

  primaryCtaKey: "app" as CtaKey,

  seo: {
    title: "PulseRoom — turn conversations into aligned decisions",
    description:
      "PulseRoom helps teams capture signals in real time, visualize alignment, and convert discussion into clear next actions — without heavy process.",
    keywords: [
      "decision making",
      "meeting analytics",
      "alignment",
      "workshops",
      "facilitation",
      "product teams",
      "education",
      "PulseRoom",
      "Dot Collector",
    ] as string[],
  },

  engagement: {
    ctas: [
      {
        key: "app",
        enabled: true,
        primary: true,
        badge: "Free to start",
        title: "Try PulseRoom",
        blurb: "Jump straight into the web app — no setup, no credit card required.",
        href: APP_URL,
      },
      {
        key: "early",
        enabled: true,
        title: "Request early access",
        blurb: "Get priority onboarding and be first to hear about new features.",
        href: APP_URL,
      },
    ] as EngagementCta[],
  },

  hero: {
    headline: "Stop re-deciding. Capture alignment live.",
    subheadline:
      "PulseRoom captures real-time signals, visualizes group alignment, and makes the next step obvious — for meetings, classes, and workshops.",
    highlights: [
      "Fast to run (no heavy setup)",
      "Works live + async follow-ups",
      "Designed for clarity, not noise",
    ],
  },

  sections: {
    engagementTitle: "Get started with PulseRoom",
    engagementSubtitle:
      "Free to try. No credit card needed.",
  },

  faq: [
    {
      q: "What does PulseRoom actually do?",
      a: "PulseRoom captures participant signals during live discussion, visualizes alignment in real time, and produces a clear decision artifact for follow-up.",
    },
    {
      q: "How is this different from polling tools?",
      a: "Polling collects opinions. PulseRoom is designed for decision alignment — making trade-offs visible and reducing re-litigation after the meeting.",
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
  ],
} as const;