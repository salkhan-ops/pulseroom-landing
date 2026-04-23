import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact PulseRoom — Talk to a Human",
  description:
    "Reach PulseRoom for support, enterprise pilots, product questions, or press. We respond to every message.",
};

type ContactFaqItem = {
  q: string;
  a: ReactNode;
};

const CHANNELS = [
  {
    gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
    iconBg: "rgba(255,255,255,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 5h16a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M2 6l9 7 9-7"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "General support",
    value: site.supportEmail,
    href: `mailto:${site.supportEmail}`,
    note: "Expect a reply within one business day.",
    cta: "Email support",
  },
  {
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
    iconBg: "rgba(255,255,255,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="2"
          y="2"
          width="18"
          height="18"
          rx="5"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M7 11h8M7 15h5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="11" cy="7.5" r="1" fill="white" />
      </svg>
    ),
    label: "Sales & pilots",
    value: site.salesEmail,
    href: `mailto:${site.salesEmail}`,
    note: "For institutional rollouts, volume, or custom arrangements.",
    cta: "Email sales",
  },
  {
    gradient: "linear-gradient(135deg, #10B981 0%, #0EA5E9 100%)",
    iconBg: "rgba(255,255,255,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="2"
          y="3"
          width="18"
          height="16"
          rx="3"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M7 9h3m-3 4h8m-8 0v0"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 6l1 1-3 3-2-2-3 3"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Book a pilot call",
    value: "30 min · Video call",
    href: "https://calendar.app.google/WMFb5GpB8wNxyWcZ8",
    note: "Walk through PulseRoom live with a member of our team.",
    cta: "Schedule a call →",
  },
  {
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
    iconBg: "rgba(255,255,255,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" />
        <path
          d="M11 7v4l3 2"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Response time",
    value: "< 24 hours",
    href: null,
    note: "We reply to every support and sales message within one business day.",
    cta: null,
  },
];

const FAQ: ContactFaqItem[] = [
  {
    q: "Can I try PulseRoom before buying?",
    a: "Yes — the free tier lets you run unlimited sessions with up to 5 participants.",
  },
  {
    q: "Do you offer volume or institutional pricing?",
    a: (
      <>
        Yes. Reach out to{" "}
        <a href={`mailto:${site.salesEmail}`} className="contact-inline-link">
          {site.salesEmail}
        </a>{" "}
        and we&apos;ll tailor a commercial arrangement that fits your team size
        and use case.
      </>
    ),
  },
  {
    q: "Is PulseRoom available for self-hosted deployment?",
    a: "We don't currently offer on-premise installs. All sessions run on our secure cloud infrastructure.",
  },
  {
    q: "How do I report a bug or a security concern?",
    a: (
      <>
        Email{" "}
        <a href={`mailto:${site.supportEmail}`} className="contact-inline-link">
          {site.supportEmail}
        </a>{" "}
        for bugs. For security disclosures, use the same address with{" "}
        <strong>SECURITY</strong> in the subject line and we&apos;ll treat it as
        priority.
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .contact-root {
          font-family: 'DM Sans', sans-serif;
          color: #0F172A;
          overflow-x: hidden;
        }

        .contact-inline-link {
          color: #4F46E5;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-inline-link:hover {
          text-decoration: underline;
        }

        /* ── Hero ── */
        .contact-hero {
          position: relative;
          background: linear-gradient(135deg, #0F0C29 0%, #1E1B4B 50%, #0F172A 100%);
          padding: 100px 24px 90px;
          overflow: hidden;
          text-align: center;
        }

        .contact-hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 80% at 50% 0%, black 0%, transparent 100%);
        }

        .contact-hero__orb {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-hero__inner {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
        }

        .contact-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #A5B4FC;
          margin-bottom: 24px;
        }

        .contact-hero__h1 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 400;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .contact-hero__h1 em {
          font-style: italic;
          background: linear-gradient(90deg, #818CF8, #C084FC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-hero__sub {
          font-size: 17px;
          line-height: 1.7;
          color: #94A3B8;
        }

        /* ── Channel cards ── */
        .contact-channels {
          max-width: 960px;
          margin: 0 auto;
          padding: 80px 24px 0;
        }

        .contact-channels__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .contact-channels__grid { grid-template-columns: 1fr 1fr; }
        }

        @media (min-width: 1024px) {
          .contact-channels__grid { grid-template-columns: repeat(4, 1fr); }
        }

        .contact-channel {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .contact-channel:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(99,102,241,0.14);
        }

        .contact-channel__top {
          padding: 28px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-channel__icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
        }

        .contact-channel__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94A3B8;
        }

        .contact-channel__value {
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          word-break: break-all;
        }

        .contact-channel__note {
          font-size: 13.5px;
          color: #64748B;
          line-height: 1.6;
          flex: 1;
        }

        .contact-channel__bottom {
          padding: 0 24px 24px;
          margin-top: auto;
        }

        .contact-channel__cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 10px;
          padding: 9px 16px;
          font-size: 13px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          transition: opacity 0.15s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          width: 100%;
          justify-content: center;
        }

        .contact-channel__cta:hover {
          opacity: 0.88;
          transform: scale(1.02);
        }

        /* ── Details block ── */
        .contact-details {
          max-width: 960px;
          margin: 48px auto 0;
          padding: 0 24px;
        }

        .contact-details__card {
          background: linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 20px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .contact-details__card { grid-template-columns: 1fr 1fr; }
        }

        .contact-detail-item__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 6px;
        }

        .contact-detail-item__value {
          font-size: 17px;
          font-weight: 600;
          color: #0F172A;
        }

        .contact-detail-item__value a {
          color: #4F46E5;
          text-decoration: none;
        }

        .contact-detail-item__value a:hover {
          text-decoration: underline;
        }

        .contact-detail-item__sub {
          font-size: 13px;
          color: #64748B;
          margin-top: 4px;
        }

        /* ── FAQ ── */
        .contact-faq {
          max-width: 720px;
          margin: 80px auto 96px;
          padding: 0 24px;
        }

        .contact-faq__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 12px;
        }

        .contact-faq__title {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 400;
          color: #0F172A;
          margin: 0 0 40px;
          letter-spacing: -0.02em;
        }

        .contact-faq__list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
        }

        .contact-faq__item {
          padding: 24px 28px;
          border-bottom: 1px solid #E2E8F0;
          transition: background 0.15s ease;
        }

        .contact-faq__item:last-child { border-bottom: none; }
        .contact-faq__item:hover { background: #F8FAFF; }

        .contact-faq__q {
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .contact-faq__a {
          font-size: 14.5px;
          line-height: 1.7;
          color: #64748B;
        }
      `}</style>

      <div className="contact-root">
        <section className="contact-hero">
          <div className="contact-hero__grid" />
          <div className="contact-hero__orb" />
          <div className="contact-hero__inner">
            <div className="contact-hero__eyebrow">Get in touch</div>
            <h1 className="contact-hero__h1">
              We&apos;re real people.
              <br />
              <em>Talk to us.</em>
            </h1>
            <p className="contact-hero__sub">
              Support, sales, pilots, or a quick product question — pick the
              right channel below and we&apos;ll get back to you within one
              business day.
            </p>
          </div>
        </section>

        <div className="contact-channels">
          <div className="contact-channels__grid">
            {CHANNELS.map((ch) => (
              <div key={ch.label} className="contact-channel">
                <div className="contact-channel__top">
                  <div
                    className="contact-channel__icon"
                    style={{ background: ch.gradient }}
                  >
                    {ch.icon}
                  </div>
                  <div>
                    <div className="contact-channel__label">{ch.label}</div>
                    <div className="contact-channel__value">{ch.value}</div>
                  </div>
                  <div className="contact-channel__note">{ch.note}</div>
                </div>

                {ch.cta && ch.href && (
                  <div className="contact-channel__bottom">
                    <a
                      href={ch.href}
                      className="contact-channel__cta"
                      style={{ background: ch.gradient }}
                      target={ch.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        ch.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {ch.cta}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-details__card">
            {[
              {
                label: "Support email",
                value: site.supportEmail,
                href: `mailto:${site.supportEmail}`,
                sub: "General questions, bugs, account issues",
              },
              {
                label: "Sales email",
                value: site.salesEmail,
                href: `mailto:${site.salesEmail}`,
                sub: "Pricing, pilots, enterprise arrangements",
              },
              {
                label: "Product access",
                value: "app.pulseroom.app",
                href: "https://app.pulseroom.app",
                sub: "Your sessions, results, and settings",
              },
              {
                label: "Main website",
                value: "pulseroom.app",
                href: "https://pulseroom.app",
                sub: "Documentation, blog, and announcements",
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="contact-detail-item__label">{item.label}</div>
                <div className="contact-detail-item__value">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.value}
                  </a>
                </div>
                <div className="contact-detail-item__sub">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-faq">
          <p className="contact-faq__label">Common questions</p>
          <h2 className="contact-faq__title">Before you reach out</h2>
          <div className="contact-faq__list">
            {FAQ.map((item) => (
              <div key={item.q} className="contact-faq__item">
                <div className="contact-faq__q">{item.q}</div>
                <div className="contact-faq__a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}