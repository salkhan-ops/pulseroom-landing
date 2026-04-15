import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PulseRoom — Decision Intelligence Platform",
  description:
    "PulseRoom turns group discussion into structured decisions. Learn who we serve, why we built this, and what drives us.",
};

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="url(#g1)" strokeWidth="1.5" />
        <path d="M8 14l4 4 8-8" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Structured input",
    body: "Every participant scores the same dimensions so facilitators get apples-to-apples comparisons — not a cacophony of competing opinions.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1.5" y="1.5" width="25" height="25" rx="7" stroke="url(#g2)" strokeWidth="1.5" />
        <path d="M7 21V14M11 21V10M15 21V13M19 21V7" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Live alignment visualisation",
    body: "Watch consensus emerge in real time. PulseRoom turns raw scores into heatmaps, radar charts, and ranked lists your group can act on immediately.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h20M4 14h14M4 20h9" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="20" r="4" stroke="url(#g3)" strokeWidth="1.5" />
        <path d="M20.5 20l1 1 2-2" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" /><stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Clear decision artifacts",
    body: "Every session ends with a shareable record — scores, rationale, and next steps — so nothing important escapes the room.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="9" cy="10" r="4" stroke="url(#g4)" strokeWidth="1.5" />
        <circle cx="19" cy="10" r="4" stroke="url(#g4)" strokeWidth="1.5" />
        <path d="M3 24c0-4 2.7-7 6-7h10c3.3 0 6 3 6 7" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="g4" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Built for every room",
    body: "Boardrooms, lecture halls, design sprints, strategy offsites — PulseRoom adapts to your context without requiring facilitator training.",
  },
];

const STATS = [
  { value: "6+", label: "Evaluation dimensions per session" },
  { value: "< 3 min", label: "Median time to first insight" },
  { value: "78%", label: "Average group alignment score" },
  { value: "0", label: "Meetings re-opened after using PulseRoom" },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .about-root {
          font-family: 'DM Sans', sans-serif;
          color: #0F172A;
          overflow-x: hidden;
        }

        /* ── Hero ──────────────────────────────────── */
        .about-hero {
          position: relative;
          background: linear-gradient(135deg, #0F0C29 0%, #1E1B4B 45%, #0F172A 100%);
          padding: 120px 24px 100px;
          overflow: hidden;
        }

        .about-hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%);
        }

        .about-hero__orb-1 {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .about-hero__orb-2 {
          position: absolute;
          bottom: -120px;
          left: -60px;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .about-hero__inner {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .about-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #A5B4FC;
          margin-bottom: 28px;
        }

        .about-hero__eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366F1;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }

        .about-hero__h1 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 400;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
        }

        .about-hero__h1 em {
          font-style: italic;
          background: linear-gradient(90deg, #818CF8, #C084FC, #F472B6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero__sub {
          font-size: 19px;
          line-height: 1.7;
          color: #94A3B8;
          max-width: 620px;
          margin: 0 auto;
        }

        /* ── Stats band ────────────────────────────── */
        .about-stats {
          background: #F8FAFF;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
          padding: 0;
        }

        .about-stats__inner {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
        }

        @media (min-width: 768px) {
          .about-stats__inner {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .about-stat {
          padding: 40px 28px;
          border-right: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
          text-align: center;
        }

        .about-stat:nth-child(2n) { border-right: none; }
        @media (min-width: 768px) {
          .about-stat:nth-child(2n) { border-right: 1px solid #E2E8F0; }
          .about-stat:last-child { border-right: none; }
        }

        .about-stat__value {
          font-family: 'Instrument Serif', serif;
          font-size: 38px;
          font-weight: 400;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 8px;
        }

        .about-stat__label {
          font-size: 13px;
          color: #64748B;
          font-weight: 500;
          line-height: 1.4;
        }

        /* ── Body sections ─────────────────────────── */
        .about-body {
          max-width: 960px;
          margin: 0 auto;
          padding: 96px 24px;
        }

        .about-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 14px;
        }

        .about-h2 {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.15;
          color: #0F172A;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .about-prose {
          font-size: 17px;
          line-height: 1.85;
          color: #475569;
          max-width: 680px;
        }

        .about-prose p { margin: 0 0 20px; }
        .about-prose p:last-child { margin: 0; }

        /* ── Problem/solution split ────────────────── */
        .about-split {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-bottom: 96px;
        }

        @media (min-width: 768px) {
          .about-split {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }
        }

        .about-split__card {
          position: relative;
          border-radius: 20px;
          padding: 40px;
          overflow: hidden;
        }

        .about-split__card--problem {
          background: #FFF5F5;
          border: 1px solid #FED7D7;
        }

        .about-split__card--solution {
          background: linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%);
          border: 1px solid rgba(99,102,241,0.2);
        }

        .about-split__card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
        }

        .about-split__card--problem .about-split__card-icon {
          background: #FED7D7;
        }

        .about-split__card--solution .about-split__card-icon {
          background: rgba(99,102,241,0.12);
        }

        .about-split__card-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 14px;
          color: #0F172A;
        }

        .about-split__card--problem .about-split__card-title { color: #991B1B; }
        .about-split__card--solution .about-split__card-title { color: #3730A3; }

        .about-split__card-body {
          font-size: 15.5px;
          line-height: 1.8;
          color: #475569;
        }

        .about-split__card-body ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .about-split__card-body li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .about-split__card-body li::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .about-split__card--problem li::before { background: #F87171; }
        .about-split__card--solution li::before { background: #6366F1; }

        /* ── Pillars grid ──────────────────────────── */
        .about-pillars {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-top: 52px;
        }

        @media (min-width: 640px) {
          .about-pillars { grid-template-columns: 1fr 1fr; }
        }

        .about-pillar {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
          transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }

        .about-pillar:hover {
          box-shadow: 0 8px 32px rgba(99,102,241,0.12);
          transform: translateY(-3px);
          border-color: rgba(99,102,241,0.25);
        }

        .about-pillar__icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.06));
          display: grid;
          place-items: center;
          margin-bottom: 18px;
        }

        .about-pillar__title {
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .about-pillar__body {
          font-size: 14.5px;
          line-height: 1.75;
          color: #64748B;
        }

        /* ── Who we serve ──────────────────────────── */
        .about-audience {
          background: linear-gradient(135deg, #0F0C29 0%, #1E1B4B 100%);
          border-radius: 28px;
          padding: 60px 48px;
          margin-bottom: 96px;
          position: relative;
          overflow: hidden;
        }

        .about-audience::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .about-audience__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #818CF8;
          margin-bottom: 16px;
        }

        .about-audience__title {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          color: #FFFFFF;
          margin: 0 0 40px;
        }

        .about-audience__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (min-width: 768px) {
          .about-audience__grid { grid-template-columns: repeat(4, 1fr); }
        }

        .about-audience__item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 20px;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .about-audience__item:hover {
          background: rgba(99,102,241,0.15);
          border-color: rgba(99,102,241,0.4);
        }

        .about-audience__item-title {
          font-size: 14px;
          font-weight: 700;
          color: #E2E8F0;
          margin-bottom: 6px;
        }

        .about-audience__item-desc {
          font-size: 13px;
          color: #94A3B8;
          line-height: 1.5;
        }

        /* ── Mission statement ─────────────────────── */
        .about-mission {
          text-align: center;
          padding: 0 0 96px;
          max-width: 760px;
          margin: 0 auto;
        }

        .about-mission__quote {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(24px, 3.5vw, 38px);
          font-style: italic;
          line-height: 1.4;
          color: #1E1B4B;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .about-mission__attr {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6366F1;
        }

        .about-divider {
          width: 48px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #6366F1, #8B5CF6);
          margin: 0 auto 28px;
        }
      `}</style>

      <div className="about-root">
        {/* ── Hero ── */}
        <section className="about-hero">
          <div className="about-hero__grid" />
          <div className="about-hero__orb-1" />
          <div className="about-hero__orb-2" />
          <div className="about-hero__inner">
            <div className="about-hero__eyebrow">
              <span className="about-hero__eyebrow-dot" />
              Decision Intelligence Platform
            </div>
            <h1 className="about-hero__h1">
              Meetings end.<br />
              <em>Decisions shouldn&apos;t re-open.</em>
            </h1>
            <p className="about-hero__sub">
              PulseRoom is the structured layer that sits between discussion and action —
              turning group input into visual alignment you can act on the same day.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="about-stats">
          <div className="about-stats__inner">
            {STATS.map((s) => (
              <div key={s.label} className="about-stat">
                <div className="about-stat__value">{s.value}</div>
                <div className="about-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Body ── */}
        <div className="about-body">

          {/* Problem / Solution */}
          <div style={{ marginBottom: 96 }}>
            <p className="about-section-label">The problem we solve</p>
            <h2 className="about-h2">Great discussions don&apos;t always<br />produce great decisions.</h2>
            <div className="about-split">
              <div className="about-split__card about-split__card--problem">
                <div className="about-split__card-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke="#EF4444" strokeWidth="1.5"/>
                    <path d="M11 7v5M11 15h.01" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="about-split__card-title">Before PulseRoom</div>
                <div className="about-split__card-body">
                  <ul>
                    <li><span>The loudest voice drives the outcome</span></li>
                    <li><span>Trade-offs are discussed but never quantified</span></li>
                    <li><span>Important concerns surface after the meeting ends</span></li>
                    <li><span>Teams revisit the same decisions weeks later</span></li>
                    <li><span>Notes don&apos;t capture why a choice was made</span></li>
                  </ul>
                </div>
              </div>
              <div className="about-split__card about-split__card--solution">
                <div className="about-split__card-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke="#6366F1" strokeWidth="1.5"/>
                    <path d="M7 11l3 3 5-5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="about-split__card-title">With PulseRoom</div>
                <div className="about-split__card-body">
                  <ul>
                    <li><span>Every participant scores every dimension equally</span></li>
                    <li><span>Visual outputs make trade-offs instantly comparable</span></li>
                    <li><span>Hidden concerns surface during the session</span></li>
                    <li><span>Decisions are documented with rationale attached</span></li>
                    <li><span>Teams leave with a shareable decision artifact</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div style={{ marginBottom: 96 }}>
            <p className="about-section-label">How it works</p>
            <h2 className="about-h2">Four capabilities that<br />change how groups decide.</h2>
            <div className="about-pillars">
              {PILLARS.map((p) => (
                <div key={p.title} className="about-pillar">
                  <div className="about-pillar__icon">{p.icon}</div>
                  <div className="about-pillar__title">{p.title}</div>
                  <div className="about-pillar__body">{p.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Who we serve */}
          <div className="about-audience">
            <div className="about-audience__label">Who uses PulseRoom</div>
            <h2 className="about-audience__title">Built for any room where decisions matter.</h2>
            <div className="about-audience__grid">
              {[
                { title: "Executives & Leadership Teams", desc: "Strategy reviews, investment decisions, OKR alignment." },
                { title: "Educators & Instructors", desc: "Seminar discussions, case evaluations, student consensus workshops." },
                { title: "Facilitators & Consultants", desc: "Workshops, retrospectives, multi-stakeholder co-design sessions." },
                { title: "Project & Product Teams", desc: "Feature prioritisation, sprint planning, post-mortem decisions." },
              ].map((item) => (
                <div key={item.title} className="about-audience__item">
                  <div className="about-audience__item-title">{item.title}</div>
                  <div className="about-audience__item-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission quote */}
          <div className="about-mission">
            <div className="about-divider" />
            <p className="about-mission__quote">
              &ldquo;Every team deserves to leave a meeting knowing exactly what was decided,
              why it was decided, and who needs to act next.&rdquo;
            </p>
            <div className="about-mission__attr">The PulseRoom Mission</div>
          </div>
        </div>
      </div>
    </>
  );
}