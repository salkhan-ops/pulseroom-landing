// lib/site.ts

export type NavItem = { label: string; href: string; enabled?: boolean };

export type CtaKey = "waitlist" | "pilot" | "early" | "invest";

export type EngagementCta = {
  key: CtaKey;
  enabled: boolean;
  primary?: boolean;
  title: string;
  blurb: string;
  href: string;
  badge?: string;
};

export const site = {
  name: "PulseRoom",
  tagline: "Dot Collector",
  url: "https://salkhan-ops.github.io/pulseroom-landing",

  /**
   * ✅ Keep your original flat nav for backwards compatibility.
   * (Header will not use this anymore, but keeping it avoids surprises.)
   */
  nav: [
    { label: "Why now", href: "#why-now" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Proof", href: "#proof" },
    { label: "Engage", href: "#engage" },
    { label: "FAQ", href: "#faq" },
    { label: "Schedule", href: "#schedule" },
  ] as NavItem[],

  /**
   * ✅ New grouped nav for a neat executive header.
   * Use "/#..." so these links work even when you add /blog later.
   */
  navGroups: {
    product: [
      { label: "Why now", href: "/#why-now" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Outcomes", href: "/#outcomes" },
      { label: "Use cases", href: "/#use-cases" },
      { label: "Get PulseRoom", href: "/#get-pulseroom" },
    ] as NavItem[],

    learn: [
      // Enable later when blog exists
      { label: "Decision insights (Blog)", href: "/blog", enabled: true },
      { label: "FAQ (quick answers)", href: "/#faq" },
    ] as NavItem[],

    proof: [
      { label: "Visual proof", href: "/#proof" },
      { label: "Representative scenarios", href: "/#use-cases" },
      { label: "Engagement options", href: "/#engage" },
    ] as NavItem[],
  },

  /**
   * ✅ Single primary CTA for the header button
   */
  primaryCtaKey: "pilot" as CtaKey,

  seo: {
    title: "PulseRoom — turn conversations into aligned decisions",
    description:
      "PulseRoom (Dot Collector) helps teams capture signals in real time, visualize alignment, and convert discussion into clear next actions — without heavy process.",
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
        key: "waitlist",
        enabled: true,
        primary: true,
        badge: "Most popular",
        title: "Join the waitlist",
        blurb: "For teams who want early access and occasional product feedback.",
        href: "https://example.com/waitlist",
      },
      {
        key: "pilot",
        enabled: true,
        title: "Run a paid pilot",
        blurb:
          "For organizations running workshops and wanting measurable outcomes in 2–4 weeks.",
        href: "https://calendar.app.google/WMFb5GpB8wNxyWcZ8",
      },
      {
        key: "early",
        enabled: true,
        title: "Pre-subscribe / early access",
        blurb: "For power users who want priority onboarding and discounted pricing.",
        href: "https://example.com/early-access",
      },
      {
        key: "invest",
        enabled: true,
        title: "Register interest (invest / partner)",
        blurb:
          "For investors, accelerators, and strategic partners exploring collaboration.",
        href: "https://example.com/partner",
      },
    ] as EngagementCta[],
  },

  hero: {
    headline: "Turn live discussion into aligned decisions.",
    subheadline:
      "PulseRoom (Dot Collector) captures real-time signals, visualizes group alignment, and makes the next step obvious — for meetings, classes, and workshops.",
    highlights: [
      "Fast to run (no heavy setup)",
      "Works live + async follow-ups",
      "Designed for clarity, not noise",
    ],
  },

  sections: {
    engagementTitle: "Pick the engagement path that fits you",
    engagementSubtitle:
      "No login, no friction — each option links to a simple form or scheduling page. Enable/disable CTAs via configuration.",
  },

  /**
   * ✅ App-focused FAQ (more relevant than generic site/hosting questions)
   */
  faq: [
    {
      q: "What does PulseRoom actually do?",
      a: "PulseRoom captures participant signals during live discussion, visualizes alignment in real time, and produces a clear decision artifact for follow-up.",
    },
    {
      q: "How is this different from polling tools?",
      a: "Polling collects opinions. PulseRoom is designed for decision alignment—making trade-offs visible and reducing re-litigation after the meeting.",
    },
    {
      q: "What does a paid pilot include?",
      a: "A scoped pilot over 2–4 weeks with real sessions, support on setup and facilitation flow, and outcomes you can evaluate internally.",
    },
    {
      q: "Do participants need accounts?",
      a: "No heavy onboarding. The participant experience is lightweight by design.",
    },
  ],
} as const;
