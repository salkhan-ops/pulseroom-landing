import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PulseRoom",
  description: "How PulseRoom collects, uses, and protects your information.",
};

const SECTIONS = [
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
    body: `We use first-party cookies to maintain authenticated sessions and remember user preferences. We may use privacy-conscious analytics tools (such as aggregated usage tracking) to understand how the platform is used and where to focus improvements. We do not use cross-site tracking cookies or share cookie data with advertising networks.`,
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
    body: `PulseRoom uses TLS encryption for data in transit, encrypted storage for data at rest, access controls and audit logging, and regular security reviews. We follow industry-standard practices. No internet-based system can guarantee absolute security; if you discover a potential vulnerability, please contact us at support@pulseroom.app with 'SECURITY' in the subject line.`,
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
    body: `Depending on your jurisdiction, you may have rights to access, correct, export, or delete your personal data. To exercise any of these rights, email support@pulseroom.app from the address associated with your account. We will respond within 30 days. You may also opt out of non-essential communications at any time using the unsubscribe link in any email we send.`,
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
    body: `Privacy-related questions, data requests, and security disclosures may be sent to support@pulseroom.app. We take privacy seriously and will respond to every inquiry.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .legal-root {
          font-family: 'DM Sans', sans-serif;
          color: #0F172A;
          overflow-x: hidden;
          background: #ffffff;
        }

        /* ── Hero ── */
        .legal-hero {
          position: relative;
          padding: 100px 24px 90px;
          overflow: hidden;
          background: linear-gradient(160deg, #080720 0%, #120f3a 50%, #0D1225 100%);
        }

        .legal-hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
        }

        .legal-hero__glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 70%);
          pointer-events: none;
        }

        .legal-hero__glow-r {
          position: absolute;
          bottom: -80px;
          right: -100px;
          width: 500px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 65%);
          pointer-events: none;
        }

        .legal-hero__inner {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
        }

        .legal-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #A5B4FC;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          margin-bottom: 24px;
        }

        .legal-hero__eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366F1;
          animation: pulseDot 2s ease-in-out infinite;
        }

        .legal-hero__h1 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 400;
          color: #FFFFFF;
          margin: 0 0 8px;
          letter-spacing: -0.025em;
          line-height: 1.05;
        }

        .legal-hero__h1 em {
          font-style: italic;
          background: linear-gradient(135deg, #818CF8, #A5B4FC, #C4B5FD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .legal-hero__sub {
          font-size: 16px;
          color: #64748B;
          margin: 16px 0 0;
          max-width: 420px;
          line-height: 1.6;
        }

        .legal-hero__meta {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .legal-hero__meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #475569;
          font-weight: 500;
        }

        .legal-hero__meta-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Layout ── */
        .legal-layout {
          max-width: 960px;
          margin: 0 auto;
          padding: 64px 24px 96px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        @media (min-width: 1024px) {
          .legal-layout {
            grid-template-columns: 200px 1fr;
            gap: 56px;
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
          color: #CBD5E1;
          margin-bottom: 16px;
          padding-left: 12px;
        }

        .legal-toc__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .legal-toc__item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 12.5px;
          color: #64748B;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          cursor: pointer;
          border-left: 2px solid transparent;
        }

        .legal-toc__item:hover {
          background: rgba(99,102,241,0.06);
          color: #4F46E5;
          border-left-color: rgba(99,102,241,0.4);
        }

        .legal-toc__num {
          font-size: 10px;
          font-weight: 700;
          color: #CBD5E1;
          min-width: 18px;
          font-variant-numeric: tabular-nums;
        }

        /* ── Banner ── */
        .legal-banner {
          background: linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.03) 100%);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 52px;
        }

        .legal-banner__icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.18);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .legal-banner__body {}

        .legal-banner__title {
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 4px;
        }

        .legal-banner__text {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.55;
        }

        /* ── Sections ── */
        .legal-content {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .legal-section {
          padding: 40px 0;
          border-bottom: 1px solid #F1F5F9;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          transition: background 0.2s;
        }

        @media (min-width: 640px) {
          .legal-section {
            grid-template-columns: 64px 1fr;
            gap: 0;
          }
        }

        .legal-section:last-child { border-bottom: none; }

        .legal-section__aside {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          padding-top: 2px;
        }

        .legal-section__num {
          font-family: 'Instrument Serif', serif;
          font-size: 13px;
          font-weight: 400;
          color: #CBD5E1;
          letter-spacing: 0.05em;
        }

        .legal-section__icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(99,102,241,0.06);
          border: 1px solid rgba(99,102,241,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .legal-section__title {
          font-size: 17px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 12px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .legal-section__text {
          font-size: 15px;
          line-height: 1.9;
          color: #475569;
        }

        /* ── Contact CTA ── */
        .legal-cta {
          margin-top: 56px;
          background: linear-gradient(135deg, #F8F9FF 0%, #EEF2FF 100%);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .legal-cta {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .legal-cta__eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 8px;
        }

        .legal-cta__title {
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .legal-cta__sub {
          font-size: 14px;
          color: #64748B;
          line-height: 1.5;
        }

        .legal-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          padding: 13px 24px;
          font-size: 14px;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #6366F1, #7C3AED);
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(99,102,241,0.35);
          flex-shrink: 0;
        }

        .legal-cta__btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 28px rgba(99,102,241,0.5);
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
      `}</style>

      <div className="legal-root">
        {/* ── Hero ── */}
        <section className="legal-hero">
          <div className="legal-hero__grid" />
          <div className="legal-hero__glow" />
          <div className="legal-hero__glow-r" />
          <div className="legal-hero__inner">
            <div className="legal-hero__eyebrow">
              <span className="legal-hero__eyebrow-dot" />
              Legal
            </div>
            <h1 className="legal-hero__h1">
              Privacy <em>Policy</em>
            </h1>
            <p className="legal-hero__sub">
              Plain language. No surprises. We explain exactly what we collect, why, and how it stays safe.
            </p>
            <div className="legal-hero__meta">
              {[
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="2" width="12" height="10" rx="1.5" stroke="#A5B4FC" strokeWidth="1.2"/>
                      <path d="M4 1v2M10 1v2M1 6h12" stroke="#A5B4FC" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: "Effective: April 2025",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5.5" stroke="#A5B4FC" strokeWidth="1.2"/>
                      <path d="M7 4v3l2 1.5" stroke="#A5B4FC" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: "9 sections",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L1.5 3.5v4c0 3.1 2.2 5.8 5.5 6.5 3.3-.7 5.5-3.4 5.5-6.5v-4L7 1z" stroke="#A5B4FC" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M5 7l1.5 1.5 2.5-2.5" stroke="#A5B4FC" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: "We never sell your data",
                },
              ].map((item) => (
                <div key={item.label} className="legal-hero__meta-item">
                  <div className="legal-hero__meta-icon">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Body ── */}
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

          {/* Main */}
          <div className="legal-content">
            {/* Banner */}
            <div className="legal-banner">
              <div className="legal-banner__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 5v5c0 4.4 3.2 7.9 7 9 3.8-1.1 7-4.6 7-9V5L10 2z" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M7 10l2 2 4-4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="legal-banner__body">
                <div className="legal-banner__title">We don&apos;t sell your data. Ever.</div>
                <div className="legal-banner__text">
                  PulseRoom does not sell, rent, or broker personal information to third parties.
                  This policy describes exactly what we collect and why.
                </div>
              </div>
            </div>

            {/* Sections */}
            {SECTIONS.map((s) => (
              <div key={s.num} id={`privacy-${s.num}`} className="legal-section">
                <div className="legal-section__aside">
                  <span className="legal-section__num">{s.num}</span>
                  <div className="legal-section__icon-wrap">{s.icon}</div>
                </div>
                <div>
                  <h2 className="legal-section__title">{s.title}</h2>
                  <p className="legal-section__text">{s.body}</p>
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="legal-cta">
              <div>
                <div className="legal-cta__eyebrow">Questions?</div>
                <div className="legal-cta__title">Your privacy matters to us.</div>
                <div className="legal-cta__sub">
                  Reach out any time — we respond to every privacy inquiry.
                </div>
              </div>
              <a href="mailto:support@pulseroom.app" className="legal-cta__btn">
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}