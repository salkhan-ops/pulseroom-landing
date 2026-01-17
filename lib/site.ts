export type NavItem = { label: string; href: string };

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
  nav: [
    { label: "Why now", href: "#why-now" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Proof", href: "#proof" },
    { label: "Engage", href: "#engage" },
    { label: "FAQ", href: "#faq" },
    { label: "Schedule", href: "#schedule" },

  ] as NavItem[], // Changed from satisfies to 'as' for metadata compatibility

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
      "Dot Collector"
    ] as string[], // 💡 This fixes the 'readonly' error
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
        href: "https://example.com/waitlist"
      },
      {
        key: "pilot",
        enabled: true,
        title: "Run a paid pilot",
        blurb: "For organizations running workshops and wanting measurable outcomes in 2–4 weeks.",
        href: "https://calendar.app.google/WMFb5GpB8wNxyWcZ8",

      },
      {
        key: "early",
        enabled: true,
        title: "Pre-subscribe / early access",
        blurb: "For power users who want priority onboarding and discounted pricing.",
        href: "https://example.com/early-access"
      },
      {
        key: "invest",
        enabled: true,
        title: "Register interest (invest / partner)",
        blurb: "For investors, accelerators, and strategic partners exploring collaboration.",
        href: "https://example.com/partner"
      }
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

  faq: [
    {
      q: "Is this a one-page static site (no backend)?",
      a: "Yes. This landing site is designed for static export and can be hosted on GitHub Pages or any static host like Hostinger."
    },
    {
      q: "Can I change the primary CTA later?",
      a: "Yes. Flip a config flag in lib/site.ts (no UI logic changes needed)."
    },
    {
      q: "Do I need a custom domain for SEO?",
      a: "Not to start. For best results, add a custom domain later and update the site.url value for accurate metadata."
    },
    {
      q: "Can you add real screenshots later?",
      a: "Yes. Replace the SVG placeholders in /public and swap the Visual Proof blocks with real images."
    }
  ],
} as const;