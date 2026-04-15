import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PulseRoom",
  description: "How PulseRoom collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    num: "01",
    title: "Information we collect",
    body: `We collect information you provide directly — such as your name, email address, and organisation — when you create an account, join a session, or contact us. We also collect usage data automatically: pages visited, features used, session durations, IP address, browser type, and device identifiers. Within the PulseRoom application, we process the inputs, alignment scores, and decision notes that participants submit during sessions so that the platform can generate visual outputs and decision artifacts.`,
  },
  {
    num: "02",
    title: "How we use your information",
    body: `We use information to operate and improve the PulseRoom platform, authenticate users and secure accounts, deliver support, process payments and manage subscriptions, monitor service quality and diagnose technical issues, and send product updates or account-related communications. We do not use your information to train third-party machine learning models, sell to advertisers, or build behavioural profiles for marketing purposes.`,
  },
  {
    num: "03",
    title: "Session and decision data",
    body: `Session data — participant scores, alignment outputs, and decision artifacts — belongs to the session host and their organisation. PulseRoom processes this data to render visualisations and generate structured summaries. Session data is retained for as long as your account is active and for a reasonable period thereafter, or until you request deletion. Hosts may export and delete their session data at any time from within the application.`,
  },
  {
    num: "04",
    title: "Cookies and analytics",
    body: `We use first-party cookies to maintain authenticated sessions and remember user preferences. We may use privacy-conscious analytics tools (such as aggregated usage tracking) to understand how the platform is used and where to focus improvements. We do not use cross-site tracking cookies or share cookie data with advertising networks.`,
  },
  {
    num: "05",
    title: "Sharing and third parties",
    body: `We do not sell personal information. We share data only with the service providers necessary to operate PulseRoom — including cloud infrastructure, payment processing, and transactional email providers — and only to the extent required to deliver those services. Each provider is bound by data processing agreements consistent with applicable privacy law.`,
  },
  {
    num: "06",
    title: "Security measures",
    body: `PulseRoom uses TLS encryption for data in transit, encrypted storage for data at rest, access controls and audit logging, and regular security reviews. We follow industry-standard practices. No internet-based system can guarantee absolute security; if you discover a potential vulnerability, please contact us at support@pulseroom.app with 'SECURITY' in the subject line.`,
  },
  {
    num: "07",
    title: "Data retention",
    body: `We retain personal account information for as long as your account is active. After account closure, we retain data only to the extent required by law, to resolve open disputes, or to enforce agreements. Session data can be deleted on request at any time. Anonymised, aggregated usage statistics may be retained indefinitely for product analytics.`,
  },
  {
    num: "08",
    title: "Your rights",
    body: `Depending on your jurisdiction, you may have rights to access, correct, export, or delete your personal data. To exercise any of these rights, email support@pulseroom.app from the address associated with your account. We will respond within 30 days. You may also opt out of non-essential communications at any time using the unsubscribe link in any email we send.`,
  },
  {
    num: "09",
    title: "Contact",
    body: `Privacy-related questions, data requests, and security disclosures may be sent to support@pulseroom.app. We take privacy seriously and will respond to every inquiry.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .legal-root {
          font-family: 'DM Sans', sans-serif;
          color: #0F172A;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .legal-hero {
          position: relative;
          background: linear-gradient(160deg, #0F0C29 0%, #1a1748 60%, #0F172A 100%);
          padding: 90px 24px 80px;
          overflow: hidden;
        }

        .legal-hero__dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(99,102,241,0.2) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse 60% 100% at 0% 50%, black 0%, transparent 100%);
        }

        .legal-hero__inner {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .legal-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #A5B4FC;
        }

        .legal-hero__h1 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(34px, 5vw, 60px);
          font-weight: 400;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .legal-hero__meta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .legal-hero__meta-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: #64748B;
        }

        .legal-hero__meta-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #6366F1;
        }

        /* ── Layout ── */
        .legal-layout {
          max-width: 960px;
          margin: 0 auto;
          padding: 72px 24px 96px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        @media (min-width: 1024px) {
          .legal-layout {
            grid-template-columns: 220px 1fr;
            gap: 64px;
            align-items: start;
          }
        }

        /* ── Sidebar TOC ── */
        .legal-toc {
          display: none;
          position: sticky;
          top: 88px;
        }

        @media (min-width: 1024px) {
          .legal-toc { display: block; }
        }

        .legal-toc__label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 14px;
        }

        .legal-toc__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .legal-toc__item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 13px;
          color: #64748B;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          cursor: pointer;
        }

        .legal-toc__item:hover {
          background: rgba(99,102,241,0.07);
          color: #4F46E5;
        }

        .legal-toc__num {
          font-size: 10px;
          font-weight: 700;
          color: #CBD5E1;
          min-width: 20px;
        }

        /* ── Content ── */
        .legal-content {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .legal-section {
          padding: 36px 0;
          border-bottom: 1px solid #F1F5F9;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 640px) {
          .legal-section {
            grid-template-columns: 56px 1fr;
            gap: 0;
          }
        }

        .legal-section:last-child { border-bottom: none; }

        .legal-section__num {
          font-family: 'Instrument Serif', serif;
          font-size: 28px;
          font-weight: 400;
          color: #E2E8F0;
          line-height: 1;
          padding-top: 4px;
        }

        .legal-section__body {}

        .legal-section__title {
          font-size: 18px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .legal-section__text {
          font-size: 15.5px;
          line-height: 1.85;
          color: #475569;
        }

        /* ── Last updated banner ── */
        .legal-banner {
          background: linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04));
          border: 1px solid rgba(99,102,241,0.14);
          border-radius: 14px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 48px;
        }

        .legal-banner__icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(99,102,241,0.1);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .legal-banner__text {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.5;
        }

        .legal-banner__text strong { color: #0F172A; }
      `}</style>

      <div className="legal-root">
        {/* Hero */}
        <section className="legal-hero">
          <div className="legal-hero__dots" />
          <div className="legal-hero__inner">
            <div className="legal-hero__eyebrow">Legal</div>
            <h1 className="legal-hero__h1">Privacy Policy</h1>
            <div className="legal-hero__meta">
              <div className="legal-hero__meta-item">
                <span className="legal-hero__meta-dot" />
                Effective: April 2025
              </div>
              <div className="legal-hero__meta-item">
                <span className="legal-hero__meta-dot" />
                9 sections
              </div>
              <div className="legal-hero__meta-item">
                <span className="legal-hero__meta-dot" />
                Plain language
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="legal-layout">
          {/* Sidebar TOC */}
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

          {/* Main content */}
          <div className="legal-content">
            <div className="legal-banner">
              <div className="legal-banner__icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L2 4v5c0 4.1 3 7.9 7 9 4-1.1 7-4.9 7-9V4L9 1z" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6.5 9l2 2 3-3" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="legal-banner__text">
                <strong>We don&apos;t sell your data, ever.</strong> PulseRoom does not sell, rent, or broker personal
                information to third parties. This policy describes exactly what we collect and why.
              </div>
            </div>

            {SECTIONS.map((s) => (
              <div key={s.num} id={`privacy-${s.num}`} className="legal-section">
                <div className="legal-section__num">{s.num}</div>
                <div className="legal-section__body">
                  <h2 className="legal-section__title">{s.title}</h2>
                  <p className="legal-section__text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}