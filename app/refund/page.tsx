import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — PulseRoom",
  description: "PulseRoom billing terms, refund conditions, and how to request a refund.",
};

const SECTIONS = [
  {
    num: "01",
    title: "General policy",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="13" rx="2" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M6 9h8M6 12h5" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    body: `All PulseRoom subscription fees are non-refundable. When you subscribe to a paid plan, you receive immediate access to the full functionality of that plan. Because the service is delivered digitally and access is granted instantly upon payment, charges are final except where the law in your jurisdiction provides otherwise. Partial-month credits, proration for unused days, and voluntary cancellation refunds are not available. This approach is consistent with standard industry practice for SaaS subscription products.`,
  },
  {
    num: "02",
    title: "Billing cycle",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
   body: `PulseRoom subscriptions are billed in arrears at the end of each calendar month in Australian dollars (AUD). Your first invoice covers the period from your activation date to the end of that month. Subsequent invoices are issued on the last business day of each month for the preceding billing period. Payments are processed automatically via Paddle, our authorised reseller and Merchant of Record. You will receive an itemised receipt by email after each successful charge. If a payment fails, we will notify you and provide a short grace period to update your payment method before access is suspended.`,
  },
  {
    num: "03",
    title: "EU & UK consumers — 14-day right of withdrawal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M5 10h10M10 5a7.5 7.5 0 010 10M10 5a7.5 7.5 0 000 10" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    body: `If you are a consumer located in the European Union or the United Kingdom, you have a statutory right to withdraw from a digital services contract within 14 days of purchase without giving a reason (the "cooling-off period"). However, by completing your purchase and accessing the PulseRoom platform, you expressly request that service delivery begin immediately. You acknowledge that you thereby lose your right of withdrawal once the service has been fully performed, or — for an ongoing subscription — once you have actively used the platform during the cooling-off period. If you have not accessed or used the service at all within 14 days of purchase, you may still request a full refund by contacting support@pulseroom.app within that 14-day window. Requests received after 14 days, or from users who have accessed the service, will not qualify under this provision.`,
  },
  {
    num: "04",
    title: "Exceptions we will honour",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 5v5c0 4.4 3 8 7 9 4-1 7-4.6 7-9V5L10 2z" stroke="#6366F1" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 10l2 2 4-4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    body: `Outside of statutory entitlements, we will consider a refund in the following limited circumstances: (a) you were charged in error due to a billing system fault on our side; (b) the platform experienced a verified, extended outage that materially prevented you from using the service for a significant portion of a billing period; or (c) you were charged after a confirmed cancellation that was processed correctly on your end. In all such cases, please contact support@pulseroom.app with details and supporting information. We review each request individually and aim to respond within 5 business days. Approved refunds are issued to the original payment method and may take 5–10 business days to appear depending on your card issuer or bank.`,
  },
  {
    num: "05",
    title: "How to request a refund",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="#6366F1" strokeWidth="1.5"/>
        <path d="M2 8l8 5 8-5" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    body: `To submit a refund request, email support@pulseroom.app from the address associated with your PulseRoom account. Include your account name, the invoice date and amount in question, and a brief description of the reason for your request. For EU/UK withdrawal requests, please include the subject line "Withdrawal request" and confirm you have not accessed the service. We will acknowledge your request within 2 business days and communicate our decision within 5 business days. Payments are processed by Paddle as Merchant of Record; where a refund is approved, Paddle will process the return to your original payment method.`,
  },
];

export default function RefundPage() {
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
              Refund <em>Policy</em>
            </h1>
            <p className="legal-hero__sub">
              Straightforward billing terms. No hidden conditions — just honest
              information about how charges and refunds work.
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
                  label: "5 sections",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2v10" stroke="#A5B4FC" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: "Billed end of month",
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
                  <a className="legal-toc__item" href={`#refund-${s.num}`}>
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
                  <rect x="2" y="4" width="16" height="13" rx="2" stroke="#6366F1" strokeWidth="1.5"/>
                  <path d="M6 9h8M6 12h5" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6 3v2M14 3v2" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="legal-banner__title">
                  Subscription charges are generally non-refundable.
                </div>
                <div className="legal-banner__text">
                  PulseRoom subscriptions are billed at the end of each month. Refunds are
                  not provided except where required by applicable law. Where a statutory
                  right to a refund exists, it is honoured in full.
                </div>
              </div>
            </div>

            {SECTIONS.map((s) => (
              <div key={s.num} id={`refund-${s.num}`} className="legal-section">
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

            <div className="legal-cta">
              <div>
                <div className="legal-cta__eyebrow">Questions?</div>
                <div className="legal-cta__title">We&apos;re happy to help.</div>
                <div className="legal-cta__sub">
                  Reach out with any billing or refund questions — we respond to every inquiry.
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