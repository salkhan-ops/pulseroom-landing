import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — PulseRoom",
  description: "How PulseRoom collects, uses, and protects your information.",
};

function mailto(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

type LegalSection = {
  num: string;
  title: string;
  icon: ReactNode;
  body: ReactNode;
};

const SECTIONS: LegalSection[] = [
  {
    num: "01",
    title: "Information we collect",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a5 5 0 100 10A5 5 0 0010 2z" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M3.5 17c0-3 2.9-5 6.5-5s6.5 2 6.5 5" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    body: `We collect information you provide directly — such as your name, email address, and organisation — when you create an account, join a session, or contact us. We also collect usage data automatically: pages visited, features used, session durations, IP address, browser type, and device identifiers. Within the PulseRoom application, we process the inputs, alignment scores, and decision notes that participants submit during sessions so that the platform can generate visual outputs and decision artifacts.`,
  },
  {
    num: "02",
    title: "How we use your information",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M3 10h14" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="7.5" stroke="#6366F1" strokeWidth="1.5"/>
      </svg>
    ),
    body: `We use information to operate and improve the PulseRoom platform, authenticate users and secure accounts, deliver support, process payments and manage subscriptions, monitor service quality and diagnose technical issues, and send product updates or account-related communications. We do not use your information to train third-party machine learning models, sell to advertisers, or build behavioural profiles for marketing purposes.`,
  },
  {
    num: "03",
    title: "Session and decision data",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="13" rx="2" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M6 8h8M6 11h5" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 3v2M14 3v2" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    body: `Session data — participant scores, alignment outputs, and decision artifacts — belongs to the session host and their organisation. PulseRoom processes this data to render visualisations and generate structured summaries. Session data is retained for as long as your account is active and for a reasonable period thereafter, or until you request deletion. Hosts may export and delete their session data at any time from within the application.`,
  },
  {
    num: "04",
    title: "Cookies and analytics",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#6366F1" strokeWidth="1.5"/>
        <circle cx="7.5" cy="8" r="1" fill="#6366F1"/>
        <circle cx="12" cy="7" r="1" fill="#6366F1"/>
        <circle cx="10" cy="12" r="1" fill="#6366F1"/>
      </svg>
    ),
    body: `We use first-party cookies to maintain authenticated sessions and remember user preferences. We may use privacy-conscious analytics tools to understand how the platform is used and where to focus improvements. We do not use cross-site tracking cookies or share cookie data with advertising networks.`,
  },
  {
    num: "05",
    title: "Sharing and third parties",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="5" cy="10" r="2.5" stroke="#6366F1" strokeWidth="1.5"/>
        <circle cx="15" cy="5" r="2.5" stroke="#6366F1" strokeWidth="1.5"/>
        <circle cx="15" cy="15" r="2.5" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M7.5 9L12.5 6M7.5 11L12.5 14" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    body: `We do not sell personal information. We share data only with the service providers necessary to operate PulseRoom — including cloud infrastructure, payment processing, and transactional email providers — and only to the extent required to deliver those services. Each provider is bound by data processing agreements consistent with applicable privacy law.`,
  },
  {
    num: "06",
    title: "Security measures",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 5v5c0 4.4 3 8 7 9 4-1 7-4.6 7-9V5L10 2z" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 10l2 2 4-4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    body: (
      <>
        PulseRoom uses TLS encryption for data in transit, encrypted storage for
        data at rest, access controls and audit logging, and regular security
        reviews. We follow industry-standard practices. No internet-based system
        can guarantee absolute security; if you discover a potential
        vulnerability, please contact us at{" "}
        <a
          href={mailto(site.supportEmail, "Support")}
          className="legal-inline-link"
        >
          {site.supportEmail}
        </a>{" "}
        with <strong>SECURITY</strong> in the subject line.
      </>
    ),
  },
  {
    num: "07",
    title: "Data retention",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    body: `We retain personal account information for as long as your account is active. After account closure, we retain data only to the extent required by law, to resolve open disputes, or to enforce agreements. Session data can be deleted on request at any time. Anonymised, aggregated usage statistics may be retained indefinitely for product analytics.`,
  },
  {
    num: "08",
    title: "Your rights",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10h14M10 3v14" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="#6366F1" strokeWidth="1.5"/>
      </svg>
    ),
    body: (
      <>
        Depending on your jurisdiction, you may have rights to access, correct,
        export, or delete your personal data. To exercise any of these rights,
        email{" "}
        <a
          href={mailto(site.supportEmail, "Privacy")}
          className="legal-inline-link"
        >
          {site.supportEmail}
        </a>{" "}
        from the address associated with your account. We will respond within 30
        days. You may also opt out of non-essential communications at any time
        using the unsubscribe link in any email we send.
      </>
    ),
  },
  {
    num: "09",
    title: "Contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M2 8l8 5 8-5" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    body: (
      <>
        Privacy-related questions, data requests, and security disclosures may
        be sent to{" "}
        <a
          href={mailto(site.supportEmail, "Privacy")}
          className="legal-inline-link"
        >
          {site.supportEmail}
        </a>
        . We take privacy seriously and will respond to every inquiry.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .legal-root {
          color: #0F172A;
          overflow-x: hidden;
          background: #ffffff;
        }

        .legal-shell {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px 96px;
        }

        .legal-hero {
          padding: 72px 0 28px;
          background:
            radial-gradient(circle at top left, rgba(139, 92, 246, 0.10), transparent 32%),
            linear-gradient(180deg, #faf7ff 0%, #ffffff 78%);
          border-bottom: 1px solid rgba(99, 102, 241, 0.10);
        }

        .legal-hero__eyebrow {
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

        .legal-hero__title {
          margin: 18px 0 0;
          max-width: 760px;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 700;
          color: #0F172A;
        }

        .legal-hero__sub {
          margin: 18px 0 0;
          max-width: 760px;
          font-size: 18px;
          line-height: 1.8;
          color: #64748B;
        }

        .legal-hero__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .legal-hero__pill {
          border-radius: 999px;
          border: 1px solid #E2E8F0;
          background: #ffffff;
          padding: 10px 14px;
          font-size: 13px;
          color: #475569;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        .legal-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          padding-top: 36px;
        }

        @media (min-width: 1024px) {
          .legal-layout {
            grid-template-columns: 220px minmax(0, 1fr);
            gap: 48px;
            align-items: start;
          }
        }

        .legal-toc {
          display: none;
        }

        @media (min-width: 1024px) {
          .legal-toc {
            display: block;
            position: sticky;
            top: 96px;
          }
        }

        .legal-toc__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 12px;
        }

        .legal-toc__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .legal-toc__item {
          display: flex;
          gap: 10px;
          align-items: center;
          text-decoration: none;
          color: #64748B;
          padding: 10px 12px;
          border-radius: 14px;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .legal-toc__item:hover {
          background: #FAF7FF;
          color: #4F46E5;
        }

        .legal-toc__num {
          font-size: 11px;
          font-weight: 700;
          color: #94A3B8;
          min-width: 20px;
        }

        .legal-banner {
          border: 1px solid rgba(99, 102, 241, 0.14);
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border-radius: 24px;
          padding: 28px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          box-shadow: 0 14px 40px rgba(124, 58, 237, 0.05);
        }

        .legal-banner__icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.12);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .legal-banner__title {
          font-size: 18px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .legal-banner__text {
          font-size: 15px;
          line-height: 1.8;
          color: #64748B;
        }

        .legal-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .legal-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          padding: 28px;
          border: 1px solid rgba(99, 102, 241, 0.12);
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 14px 40px rgba(124, 58, 237, 0.04);
        }

        @media (min-width: 640px) {
          .legal-section {
            grid-template-columns: 72px minmax(0, 1fr);
            gap: 0;
          }
        }

        .legal-section__aside {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .legal-section__num {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.10em;
          color: #94A3B8;
        }

        .legal-section__icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.06);
          border: 1px solid rgba(99, 102, 241, 0.12);
          display: grid;
          place-items: center;
        }

        .legal-section__title {
          font-size: 24px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 12px;
        }

        .legal-section__text {
          font-size: 15px;
          line-height: 1.9;
          color: #475569;
        }

        .legal-inline-link {
          color: #4F46E5;
          text-decoration: none;
          font-weight: 600;
        }

        .legal-inline-link:hover {
          text-decoration: underline;
        }

        .legal-cta {
          margin-top: 8px;
          border: 1px solid rgba(99, 102, 241, 0.14);
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border-radius: 24px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 14px 40px rgba(124, 58, 237, 0.05);
        }

        @media (min-width: 768px) {
          .legal-cta {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .legal-cta__eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 6px;
        }

        .legal-cta__title {
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-weight: 700;
          color: #0F172A;
        }

        .legal-cta__sub {
          margin-top: 6px;
          font-size: 14px;
          line-height: 1.7;
          color: #64748B;
          max-width: 560px;
        }

        .legal-cta__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 12px 18px;
          background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          min-width: 150px;
          box-shadow: 0 10px 30px rgba(99,102,241,0.22);
          transition: transform 0.18s ease, opacity 0.18s ease;
        }

        .legal-cta__btn:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }
      `}</style>

      <div className="legal-root">
        <section className="legal-hero">
          <div className="legal-shell">
            <div className="legal-hero__eyebrow">Legal</div>
            <h1 className="legal-hero__title">Privacy policy</h1>
            <p className="legal-hero__sub">
              Plain language about what we collect, why we collect it, and how
              we protect it.
            </p>

            <div className="legal-hero__meta">
              <div className="legal-hero__pill">Effective: April 2025</div>
              <div className="legal-hero__pill">9 sections</div>
              <div className="legal-hero__pill">We do not sell your data</div>
            </div>
          </div>
        </section>

        <div className="legal-shell">
          <div className="legal-layout">
            <aside className="legal-toc">
              <p className="legal-toc__label">Contents</p>
              <ul className="legal-toc__list">
                {SECTIONS.map((s) => (
                  <li key={s.num}>
                    <a className="legal-toc__item" href={`#privacy-${s.num}`}>
                      <span className="legal-toc__num">{s.num}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="legal-content">
              <div className="legal-banner">
                <div className="legal-banner__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L3 5v5c0 4.4 3.2 7.9 7 9 3.8-1.1 7-4.6 7-9V5L10 2z" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M7 10l2 2 4-4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="legal-banner__title">We don&apos;t sell your data.</div>
                  <div className="legal-banner__text">
                    PulseRoom does not sell, rent, or broker personal
                    information. This page describes what we collect and how it
                    is used.
                  </div>
                </div>
              </div>

              {SECTIONS.map((s) => (
                <div key={s.num} id={`privacy-${s.num}`} className="legal-section">
                  <div className="legal-section__aside">
                    <span className="legal-section__num">{s.num}</span>
                    <div className="legal-section__icon-wrap">{s.icon}</div>
                  </div>
                  <div>
                    <h2 className="legal-section__title">{s.title}</h2>
                    <div className="legal-section__text">{s.body}</div>
                  </div>
                </div>
              ))}

              <div className="legal-cta">
                <div>
                  <div className="legal-cta__eyebrow">Questions?</div>
                  <div className="legal-cta__title">Your privacy matters to us.</div>
                  <div className="legal-cta__sub">
                    Reach out any time and we&apos;ll respond to every privacy inquiry.
                  </div>
                </div>
                <a
                  href={mailto(site.supportEmail, "Privacy")}
                  className="legal-cta__btn"
                >
                  Contact us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}