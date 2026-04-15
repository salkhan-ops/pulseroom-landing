import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PulseRoom",
  description: "PulseRoom Terms of Service. Clear, plain-language terms governing access to and use of the platform.",
};

const SECTIONS = [
  {
    num: "01",
    title: "The service",
    body: `PulseRoom provides a web-based software platform for structured group decision-making, meeting facilitation, multi-dimensional scoring, and related analytics outputs. By accessing or using PulseRoom — including the website at pulseroom.app, the application at app.pulseroom.app, and any associated APIs — you agree to these Terms. If you are using PulseRoom on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.`,
  },
  {
    num: "02",
    title: "Accounts and access",
    body: `You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at support@pulseroom.app if you suspect unauthorised access. You must provide accurate account information and keep it current. PulseRoom accounts are non-transferable without written consent. We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    num: "03",
    title: "Acceptable use",
    body: `You may use PulseRoom only for lawful purposes and in accordance with these Terms. You may not: attempt to gain unauthorised access to any part of the platform; interfere with or disrupt the integrity or performance of the service; use the platform to transmit unlawful, harassing, defamatory, or harmful content; reverse-engineer, decompile, or extract source code from the platform; resell or sublicense access to PulseRoom without written consent; or use automated tools to scrape, crawl, or extract data at scale.`,
  },
  {
    num: "04",
    title: "Billing and subscriptions",
    body: `Paid plans are presented within the PulseRoom application and associated billing flow. Subscription fees are charged in advance on a monthly or annual basis depending on your plan. All fees are non-refundable except where required by applicable law or as stated in a separate commercial agreement. If your payment fails, your access may be downgraded or suspended until payment is resolved. Enterprise and institutional pricing is agreed in writing and supersedes these standard billing terms.`,
  },
  {
    num: "05",
    title: "Refunds",
    body: `PulseRoom does not offer refunds for unused subscription periods, except in the following circumstances: (a) you were charged in error; (b) applicable consumer protection law in your jurisdiction requires a refund; or (c) a written commercial agreement with PulseRoom specifies different terms. Refund requests may be submitted to sales@pulseroom.app within 30 days of the charge.`,
  },
  {
    num: "06",
    title: "Intellectual property",
    body: `PulseRoom, its logo, interface design, software, and related materials are the proprietary property of PulseRoom and its licensors. These Terms do not grant you any right to use PulseRoom's name, trademarks, logos, or branding without prior written consent. Content you submit through the platform — including session inputs, scores, and decision notes — remains yours. By using PulseRoom, you grant us a limited licence to process that content solely to deliver the service.`,
  },
  {
    num: "07",
    title: "Disclaimer of warranties",
    body: `PulseRoom is provided on an "as is" and "as available" basis, without warranties of any kind — either express or implied — including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability. We do not warrant that the service will be error-free, that defects will be corrected, or that the service or the servers that make it available are free of viruses or other harmful components.`,
  },
  {
    num: "08",
    title: "Limitation of liability",
    body: `To the maximum extent permitted by applicable law, PulseRoom and its directors, employees, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising out of or in connection with your use of or inability to use the service, even if PulseRoom has been advised of the possibility of such damages. Our aggregate liability for any claim arising under these Terms shall not exceed the amount you paid to PulseRoom in the 12 months preceding the claim.`,
  },
  {
    num: "09",
    title: "Changes to these terms",
    body: `We may revise these Terms from time to time. When we make material changes, we will notify you by email or by displaying a prominent notice in the application at least 14 days before the changes take effect. Continued use of PulseRoom after changes take effect constitutes your acceptance of the revised Terms.`,
  },
  {
    num: "10",
    title: "Contact",
    body: `Questions about these Terms may be directed to support@pulseroom.app. For enterprise or commercial legal queries, contact sales@pulseroom.app. We will respond to every inquiry.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .legal-root {
          font-family: 'DM Sans', sans-serif;
          color: #0F172A;
          overflow-x: hidden;
        }

        .legal-hero {
          position: relative;
          background: linear-gradient(160deg, #0a0a1a 0%, #13124a 55%, #0F172A 100%);
          padding: 90px 24px 80px;
          overflow: hidden;
        }

        .legal-hero__dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px);
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

        .legal-content {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

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

        .legal-contact-box {
          margin-top: 56px;
          background: linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 20px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (min-width: 640px) {
          .legal-contact-box {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .legal-contact-box__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 6px;
        }

        .legal-contact-box__title {
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .legal-contact-box__sub {
          font-size: 14px;
          color: #64748B;
        }

        .legal-contact-box__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          padding: 12px 22px;
          font-size: 14px;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #6366F1, #7C3AED);
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(99,102,241,0.3);
        }

        .legal-contact-box__btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99,102,241,0.45);
        }
      `}</style>

      <div className="legal-root">
        {/* Hero */}
        <section className="legal-hero">
          <div className="legal-hero__dots" />
          <div className="legal-hero__inner">
            <div className="legal-hero__eyebrow">Legal</div>
            <h1 className="legal-hero__h1">Terms of Service</h1>
            <div className="legal-hero__meta">
              <div className="legal-hero__meta-item">
                <span className="legal-hero__meta-dot" />
                Effective: April 2025
              </div>
              <div className="legal-hero__meta-item">
                <span className="legal-hero__meta-dot" />
                10 sections
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
                  <a className="legal-toc__item" href={`#terms-${s.num}`}>
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
                  <rect x="2" y="1" width="14" height="16" rx="3" stroke="#6366F1" strokeWidth="1.5"/>
                  <path d="M5 6h8M5 9.5h8M5 13h5" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="legal-banner__text">
                <strong>Written to be read.</strong> These are plain-language terms. We explain what we mean, not
                just what protects us. If something is unclear, email{" "}
                <a href={`mailto:${site.supportEmail}`} style={{ color: "#4F46E5" }}>{site.supportEmail}</a>.
              </div>
            </div>

            {SECTIONS.map((s) => (
              <div key={s.num} id={`terms-${s.num}`} className="legal-section">
                <div className="legal-section__num">{s.num}</div>
                <div>
                  <h2 className="legal-section__title">{s.title}</h2>
                  <p className="legal-section__text">{s.body}</p>
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="legal-contact-box">
              <div>
                <div className="legal-contact-box__label">Questions?</div>
                <div className="legal-contact-box__title">We&apos;re here to clarify anything.</div>
                <div className="legal-contact-box__sub">
                  These terms are written to inform, not intimidate. Reach out any time.
                </div>
              </div>
              <a href={`mailto:${site.supportEmail}`} className="legal-contact-box__btn">
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}