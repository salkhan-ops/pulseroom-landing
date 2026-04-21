export type NavItem = { label: string; href: string; enabled?: boolean };

export const APP_URL = "https://app.pulseroom.app";

export type EngagementCta = {
  key: string;
  title: string;
  blurb: string;
  href: string;
  badge?: string | null;
  primary: boolean;
  enabled: boolean;
};

export const site = {
  name: "PulseRoom",
  tagline: "Decision intelligence platform",
  url: "https://pulseroom.app",
  supportEmail: "support@pulseroom.app",
  salesEmail: "sales@pulseroom.app",

  seo: {
    title: "PulseRoom — structured decisions, visible alignment, faster action",
    description:
      "PulseRoom helps teams, educators, and facilitators capture multi-dimensional input, visualize alignment, and turn discussion into clear next actions.",
    keywords: [
      "decision intelligence",
      "meeting software",
      "workshop software",
      "classroom engagement",
      "group alignment",
      "facilitation software",
      "PulseRoom",
    ] as string[],
  },

  nav: {
    product: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Results", href: "/#proof" },
      { label: "Pricing", href: "/pricing" },
    ] as NavItem[],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
    ] as NavItem[],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
    ] as NavItem[],
  },

  hero: {
    headline: "Stop re-deciding. Capture alignment live.",
    subheadline:
      "PulseRoom helps groups structure discussion, collect multi-dimensional input, visualize alignment, and leave with a clear decision artifact — not just notes.",
    highlights: [
      "Built for meetings, classrooms, and workshops",
      "Real-time alignment visualisation",
      "Clear decision records and follow-up outputs",
    ],
  },

  sections: {
    engagementTitle: "Start with PulseRoom",
    engagementSubtitle:
      "Explore the live product or contact us for pilots, training, or institutional use.",
  },

  engagement: {
    ctas: [
      {
        key: "start",
        title: "Try PulseRoom free",
        blurb: "Run your first session in minutes. No credit card required.",
        href: APP_URL,
        badge: "Free tier",
        primary: true,
        enabled: true,
      },
      {
        key: "pilot",
        title: "Book a pilot call",
        blurb: "For teams, educators, or institutions exploring a broader rollout.",
        href: "https://calendar.app.google/WMFb5GpB8wNxyWcZ8",
        badge: "Enterprise",
        primary: false,
        enabled: true,
      },
    ] as EngagementCta[],
  },
} as const;