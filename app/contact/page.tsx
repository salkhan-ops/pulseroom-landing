import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact PulseRoom",
  description:
    "Reach PulseRoom for support, sales, demos, and product questions.",
};

type ContactFaqItem = {
  q: string;
  a: ReactNode;
};

function mailto(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

const CHANNELS = [
  {
    gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
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
    href: mailto(site.supportEmail, "Support"),
    note: "Questions, bugs, account issues, and product help.",
    cta: "Email support",
  },
  {
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
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
    label: "Sales",
    value: site.salesEmail,
    href: mailto(site.salesEmail, "Sales"),
    note: "Institutional rollouts, pricing, pilots, and commercial questions.",
    cta: "Email sales",
  },
  {
    gradient: "linear-gradient(135deg, #10B981 0%, #0EA5E9 100%)",
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
          d="M7 9h3m-3 4h8"
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
    label: "Book a call",
    value: "30 min · Video call",
    href: "https://calendar.app.google/WMFb5GpB8wNxyWcZ8",
    note: "See PulseRoom live and discuss your use case with us.",
    cta: "Schedule a call",
  },
  {
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
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
    note: "We reply to support and sales messages within one business day.",
    cta: null,
  },
];

const FAQ: ContactFaqItem[] = [
  {
    q: "Can I see PulseRoom before making a decision?",
    a: (
      <>
        Yes. Email{" "}
        <a
          href={mailto(site.salesEmail, "Sales")}
          className="contact-inline-link"
        >
          {site.salesEmail}
        </a>{" "}
        or book a call for a walkthrough tailored to your use case.
      </>
    ),
  },
  {
    q: "Do you offer institutional or team pricing?",
    a: (
      <>
        Yes. Reach out to{" "}
        <a
          href={mailto(site.salesEmail, "Sales")}
          className="contact-inline-link"
        >
          {site.salesEmail}
        </a>{" "}
        and we&apos;ll discuss the right commercial setup for your team or
        institution.
      </>
    ),
  },
  {
    q: "Is PulseRoom available for self-hosted deployment?",
    a: "We do not currently offer on-premise deployment. PulseRoom runs on our managed cloud infrastructure.",
  },
  {
    q: "How do I report a bug or security concern?",
    a: (
      <>
        Email{" "}
        <a
          href={mailto(site.supportEmail, "Support")}
          className="contact-inline-link"
        >
          {site.supportEmail}
        </a>{" "}
        for bugs. For security disclosures, use the same address with{" "}
        <strong>SECURITY</strong> in the subject line.
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-root {
          color: #0F172A;
          overflow-x: hidden;
          background: #ffffff;
        }

        .contact-inline-link {
          color: #4F46E5;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-inline-link:hover {
          text-decoration: underline;
        }

        .contact-shell {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px 96px;
        }

        .contact-hero {
          padding: 72px 0 28px;
          background:
            radial-gradient(circle at top left, rgba(139, 92, 246, 0.10), transparent 32%),
            linear-gradient(180deg, #faf7ff 0%, #ffffff 78%);
          border-bottom: 1px solid rgba(99, 102, 241, 0.10);
        }

        .contact-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          border: 1px solid rgba(99, 102, 241, 0.16);
          background: rgba(99, 102, 241, 0.06);
          color: #6366F1;
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-hero__title {
          margin: 18px 0 0;
          max-width: 760px;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 700;
          color: #0F172A;
        }

        .contact-hero__sub {
          margin: 18px 0 0;
          max-width: 760px;
          font-size: 18px;
          line-height: 1.8;
          color: #64748B;
        }

        .contact-hero__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .contact-hero__pill {
          border-radius: 999px;
          border: 1px solid #E2E8F0;
          background: #ffffff;
          padding: 10px 14px;
          font-size: 13px;
          color: #475569;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        .contact-channels {
          padding-top: 36px;
        }

        .contact-channels__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .contact-channels__grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .contact-channels__grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .contact-channel {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(99, 102, 241, 0.12);
          background: #ffffff;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 14px 44px rgba(124, 58, 237, 0.05);
        }

        .contact-channel:hover {
          transform: translateY(-4px);
          border-color: rgba(99, 102, 241, 0.22);
          box-shadow: 0 18px 52px rgba(124, 58, 237, 0.10);
        }

        .contact-channel__top {
          padding: 28px 24px 18px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-channel__icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
        }

        .contact-channel__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94A3B8;
        }

        .contact-channel__value {
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          word-break: break-word;
        }

        .contact-channel__note {
          font-size: 14px;
          color: #64748B;
          line-height: 1.7;
          flex: 1;
        }

        .contact-channel__bottom {
          padding: 0 24px 24px;
          margin-top: auto;
        }

        .contact-channel__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          border-radius: 14px;
          padding: 11px 16px;
          font-size: 13px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          transition: opacity 0.15s ease, transform 0.18s ease;
        }

        .contact-channel__cta:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .contact-details {
          margin-top: 32px;
        }

        .contact-details__card {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid rgba(99, 102, 241, 0.14);
          border-radius: 24px;
          padding: 30px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          box-shadow: 0 14px 40px rgba(124, 58, 237, 0.05);
        }

        @media (min-width: 768px) {
          .contact-details__card {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-detail-item__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 8px;
        }

        .contact-detail-item__value {
          font-size: 17px;
          font-weight: 700;
          color: #0F172A;
        }

        .contact-detail-item__value a {
          color: #0F172A;
          text-decoration: none;
        }

        .contact-detail-item__value a:hover {
          color: #4F46E5;
        }

        .contact-detail-item__sub {
          margin-top: 6px;
          font-size: 14px;
          color: #64748B;
          line-height: 1.6;
        }

        .contact-faq {
          margin-top: 48px;
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
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin: 0 0 28px;
        }

        .contact-faq__list {
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(99, 102, 241, 0.12);
          border-radius: 22px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 14px 40px rgba(124, 58, 237, 0.04);
        }

        .contact-faq__item {
          padding: 24px 28px;
          border-bottom: 1px solid #EEF2FF;
          transition: background 0.15s ease;
        }

        .contact-faq__item:last-child {
          border-bottom: none;
        }

        .contact-faq__item:hover {
          background: #FAF7FF;
        }

        .contact-faq__q {
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .contact-faq__a {
          font-size: 14.5px;
          line-height: 1.8;
          color: #64748B;
        }
      `}</style>

      <div className="contact-root">
        <section className="contact-hero">
          <div className="contact-shell">
            <div className="contact-hero__eyebrow">Contact</div>
            <h1 className="contact-hero__title">Talk to the PulseRoom team.</h1>
            <p className="contact-hero__sub">
              Support, sales, demos, or a practical question about fit — use the
              channel that matches your need and we&apos;ll get back to you
              quickly.
            </p>

            <div className="contact-hero__meta">
              <div className="contact-hero__pill">Support and sales replies within one business day</div>
              <div className="contact-hero__pill">Email or book a call</div>
              <div className="contact-hero__pill">Built for teams, educators, and facilitators</div>
            </div>
          </div>
        </section>

        <div className="contact-shell">
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
                  href: mailto(site.supportEmail, "Support"),
                  sub: "General questions, bugs, and account issues",
                },
                {
                  label: "Sales email",
                  value: site.salesEmail,
                  href: mailto(site.salesEmail, "Sales"),
                  sub: "Pricing, demos, and institutional conversations",
                },
                {
                  label: "Product access",
                  value: "app.pulseroom.app",
                  href: "https://app.pulseroom.app",
                  sub: "Run sessions, review outputs, and manage settings",
                },
                {
                  label: "Main website",
                  value: "pulseroom.app",
                  href: "https://pulseroom.app",
                  sub: "Product overview, blog, pricing, and resources",
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
      </div>
    </>
  );
}