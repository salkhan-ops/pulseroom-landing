import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service — PulseRoom",
  description:
    "PulseRoom Terms of Service. Clear, plain-language terms governing access to and use of the platform.",
};

const PAYMENTS_EMAIL = "payments@pulseroom.app";

type LegalSection = {
  num: string;
  title: string;
  icon: ReactNode;
  body: ReactNode;
};

const SECTIONS: LegalSection[] = [
  {
    num: "01",
    title: "The service",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="3"
          width="16"
          height="14"
          rx="2.5"
          stroke="#6366F1"
          strokeWidth="1.5"
        />
        <path
          d="M6 7h8M6 10.5h5M6 14h3"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: `PulseRoom provides a web-based software platform for structured group decision-making, meeting facilitation, multi-dimensional scoring, and related analytics outputs. By accessing or using PulseRoom — including the website at pulseroom.app, the application at app.pulseroom.app, and any associated APIs — you agree to these Terms. If you are using PulseRoom on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.`,
  },
  {
    num: "02",
    title: "Accounts and access",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#6366F1" strokeWidth="1.5" />
        <path
          d="M3.5 17c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: (
      <>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity that occurs under your account. Notify
        us immediately at{" "}
        <a href={`mailto:${site.supportEmail}`} className="legal-inline-link">
          {site.supportEmail}
        </a>{" "}
        if you suspect unauthorised access. You must provide accurate account
        information and keep it current. PulseRoom accounts are non-transferable
        without written consent. We reserve the right to suspend or terminate
        accounts that violate these Terms.
      </>
    ),
  },
  {
    num: "03",
    title: "Acceptable use",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L3 5v5c0 4.4 3.2 7.9 7 9 3.8-1.1 7-4.6 7-9V5L10 2z"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M7 10l2 2 4-4"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: `You may use PulseRoom only for lawful purposes and in accordance with these Terms. You may not: attempt to gain unauthorised access to any part of the platform; interfere with or disrupt the integrity or performance of the service; use the platform to transmit unlawful, harassing, defamatory, or harmful content; reverse-engineer, decompile, or extract source code from the platform; resell or sublicense access to PulseRoom without written consent; or use automated tools to scrape, crawl, or extract data at scale.`,
  },
  {
    num: "04",
    title: "Billing and subscriptions",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="5"
          width="16"
          height="11"
          rx="2"
          stroke="#6366F1"
          strokeWidth="1.5"
        />
        <path d="M2 9h16" stroke="#6366F1" strokeWidth="1.5" />
        <path
          d="M5 13h3M14 13h1"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: (
      <>
        Paid plans are presented within the PulseRoom application and associated
        billing flow. Subscription fees are charged in advance on a monthly or
        annual basis depending on your plan. All fees are non-refundable except
        where required by applicable law or as stated in a separate commercial
        agreement. If your payment fails, your access may be downgraded or
        suspended until payment is resolved. Enterprise and institutional
        pricing is agreed in writing and supersedes these standard billing
        terms. Billing or payment-related questions may be directed to{" "}
        <a href={`mailto:${PAYMENTS_EMAIL}`} className="legal-inline-link">
          {PAYMENTS_EMAIL}
        </a>
        .
      </>
    ),
  },
  {
    num: "05",
    title: "Refunds",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 7v3h3"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 7v3l2 2"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: (
      <>
        PulseRoom does not offer refunds for unused subscription periods, except
        in the following circumstances: (a) you were charged in error; (b)
        applicable consumer protection law in your jurisdiction requires a
        refund; or (c) a written commercial agreement with PulseRoom specifies
        different terms. Refund requests may be submitted in accordance with our{" "}
        <Link href="/refund" className="legal-inline-link">
          Refund Policy
        </Link>
        . For payment or refund-related queries, contact{" "}
        <a href={`mailto:${PAYMENTS_EMAIL}`} className="legal-inline-link">
          {PAYMENTS_EMAIL}
        </a>
        .
      </>
    ),
  },
  {
    num: "06",
    title: "Intellectual property",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#6366F1" strokeWidth="1.5" />
        <path
          d="M8 8c0-1.1.9-2 2-2s2 .9 2 2c0 1.5-2 2-2 3"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="14.5" r="0.75" fill="#6366F1" />
      </svg>
    ),
    body: `PulseRoom, its logo, interface design, software, and related materials are the proprietary property of PulseRoom and its licensors. These Terms do not grant you any right to use PulseRoom's name, trademarks, logos, or branding without prior written consent. Content you submit through the platform — including session inputs, scores, and decision notes — remains yours. By using PulseRoom, you grant us a limited licence to process that content solely to deliver the service.`,
  },
  {
    num: "07",
    title: "Disclaimer of warranties",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3l7 4v4c0 3.7-2.9 7-7 8C5.9 18 3 14.7 3 11V7l7-4z"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 8v3M10 13.5v.5"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: `PulseRoom is provided on an "as is" and "as available" basis, without warranties of any kind — either express or implied — including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability. We do not warrant that the service will be error-free, that defects will be corrected, or that the service or the servers that make it available are free of viruses or other harmful components.`,
  },
  {
    num: "08",
    title: "Limitation of liability",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10a7 7 0 1014 0A7 7 0 003 10z"
          stroke="#6366F1"
          strokeWidth="1.5"
        />
        <path
          d="M7 13l6-6M7 7l6 6"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: `To the maximum extent permitted by applicable law, PulseRoom and its directors, employees, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising out of or in connection with your use of or inability to use the service, even if PulseRoom has been advised of the possibility of such damages. Our aggregate liability for any claim arising under these Terms shall not exceed the amount you paid to PulseRoom in the 12 months preceding the claim.`,
  },
  {
    num: "09",
    title: "Changes to these terms",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 5h12M4 10h8M4 15h10"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 13l2 2 2-2"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    body: `We may revise these Terms from time to time. When we make material changes, we will notify you by email or by displaying a prominent notice in the application at least 14 days before the changes take effect. Continued use of PulseRoom after changes take effect constitutes your acceptance of the revised Terms.`,
  },
  {
    num: "10",
    title: "Contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="5"
          width="16"
          height="11"
          rx="2"
          stroke="#6366F1"
          strokeWidth="1.5"
        />
        <path
          d="M2 8l8 5 8-5"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: (
      <>
        Questions about these Terms may be directed to{" "}
        <a href={`mailto:${site.supportEmail}`} className="legal-inline-link">
          {site.supportEmail}
        </a>
        . For enterprise or commercial legal queries, contact{" "}
        <a href={`mailto:${site.salesEmail}`} className="legal-inline-link">
          {site.salesEmail}
        </a>
        . We will respond to every inquiry.
      </>
    ),
  },
];

export default function TermsPage() {
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

        .legal-hero {
          position: relative;
          padding: 100px 24px 90px;
          overflow: hidden;
          background: linear-gradient(160deg, #06060f 0%, #0e0d30 50%, #0a0f1e 100%);
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
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(79,70,229,0.22) 0%, rgba(99,102,241,0.08) 45%, transparent 70%);
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
          max-width: 440px;
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
          transition: background 0.15s, color 0.15s, border-color 0.15s;
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

        .legal-banner__text a {
          color: #4F46E5;
          text-decoration: none;
        }

        .legal-banner__text a:hover {
          text-decoration: underline;
        }

        .legal-content {
          display: flex;
          flex-direction: column;
        }

        .legal-section {
          padding: 40px 0;
          border-bottom: 1px solid #F1F5F9;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
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

        .legal-inline-link {
          color: #4F46E5;
          text-decoration: none;
          font-weight: 600;
        }

        .legal-inline-link:hover {
          text-decoration: underline;
        }

        .legal-cta {
          margin-top: 56px;
          background: linear-gradient(135deg,
            rgba(99,102,241,0.06) 0%,
            rgba(168,85,247,0.04) 50%,
            rgba(255,255,255,1) 100%);
          border: 1px solid rgba(99,102,241,0.12);
          border-radius: 18px;
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
        }

        @media (min-width: 768px) {
          .legal-cta {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
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
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .legal-cta__sub {
          font-size: 14px;
          color: #64748B;
          line-height: 1.65;
          margin-top: 6px;
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
          transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
          box-shadow: 0 10px 30px rgba(99,102,241,0.22);
        }

        .legal-cta__btn:hover {
          transform: translateY(-1px);
          opacity: 0.96;
          box-shadow: 0 14px 34px rgba(99,102,241,0.28);
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.18); }
        }
      `}</style>

      <div className="legal-root">
        <section className="legal-hero">
          <div className="legal-hero__grid" />
          <div className="legal-hero__glow" />
          <div className="legal-hero__inner">
            <div className="legal-hero__eyebrow">
              <span className="legal-hero__eyebrow-dot" />
              Terms of Service
            </div>

            <h1 className="legal-hero__h1">
              Clear terms.
              <br />
              <em>Plain language.</em>
            </h1>

            <p className="legal-hero__sub">
              These terms explain how PulseRoom works, what you can expect from
              us, and what we expect from anyone using the platform.
            </p>

            <div className="legal-hero__meta">
              {[
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect
                        x="1"
                        y="2"
                        width="12"
                        height="10"
                        rx="1.8"
                        stroke="#A5B4FC"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 1v2M10 1v2M1 6h12"
                        stroke="#A5B4FC"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "Effective: April 2025",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle
                        cx="7"
                        cy="7"
                        r="5.5"
                        stroke="#A5B4FC"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M7 4v3l2 1.5"
                        stroke="#A5B4FC"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "10 sections",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect
                        x="1"
                        y="2"
                        width="12"
                        height="10"
                        rx="1.5"
                        stroke="#A5B4FC"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 6h6M4 8.5h4"
                        stroke="#A5B4FC"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "Plain language",
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

        <div className="legal-layout">
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

          <div className="legal-content">
            <div className="legal-banner">
              <div className="legal-banner__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="3"
                    stroke="#6366F1"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 7h10M5 10.5h10M5 14h6"
                    stroke="#6366F1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="legal-banner__title">Written to be read.</div>
                <div className="legal-banner__text">
                  These are plain-language terms. We explain what we mean, not
                  just what protects us. If something is unclear, email{" "}
                  <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
                </div>
              </div>
            </div>

            {SECTIONS.map((s) => (
              <div key={s.num} id={`terms-${s.num}`} className="legal-section">
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
                <div className="legal-cta__title">
                  We&apos;re here to clarify anything.
                </div>
                <div className="legal-cta__sub">
                  These terms are written to inform, not intimidate. Reach out
                  any time.
                </div>
              </div>
              <a href={`mailto:${site.supportEmail}`} className="legal-cta__btn">
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 