"use client";

import { APP_URL } from "@/lib/site";

const signals = [
  { label: "Strategic fit",   score: 9, color: "#6366F1" },
  { label: "Feasibility",     score: 7, color: "#6366F1" },
  { label: "Risk level",      score: 4, color: "#F43F5E" },
  { label: "Team confidence", score: 8, color: "#6366F1" },
  { label: "Impact",          score: 9, color: "#6366F1" },
  { label: "Time to value",   score: 6, color: "#F59E0B" },
];

const participantColors = ["#6366F1", "#34D399", "#F472B6", "#FB923C", "#A78BFA", "#38BDF8"];
const participantInitials = ["S", "J", "P", "T", "A", "D"];

function AlignmentViz() {
  return (
    <div
      className="rounded-2xl overflow-hidden bg-white float-anim"
      style={{
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.9) inset, 0 8px 60px rgba(99,102,241,0.2), 0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid rgba(99,102,241,0.12)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid #F1F5F9" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full pulse-dot" style={{ background: "#22C55E" }} />
          <span className="text-sm font-semibold" style={{ color: "#1E293B" }}>
            Live session · 6 participants
          </span>
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-bold"
          style={{ background: "#EEF2FF", color: "#6366F1" }}
        >
          Alignment: 78%
        </span>
      </div>

      {/* Bars */}
      <div className="px-5 py-4 space-y-3">
        {signals.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium" style={{ color: "#94A3B8" }}>{s.label}</span>
              <span className="text-xs font-bold" style={{ color: s.color }}>{s.score}/10</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "#F1F5F9", overflow: "hidden" }}>
              <div
                className="h-1.5 rounded-full"
                style={{
                  width: `${s.score * 10}%`,
                  background:
                    s.color === "#F43F5E"
                      ? "linear-gradient(90deg, #FDA4AF, #F43F5E)"
                      : s.color === "#F59E0B"
                      ? "linear-gradient(90deg, #FDE68A, #F59E0B)"
                      : "linear-gradient(90deg, #A5B4FC, #6366F1)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderTop: "1px solid #F1F5F9", background: "#FAFCFF" }}
      >
        <div className="flex -space-x-2">
          {participantInitials.map((p, i) => (
            <div
              key={i}
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: participantColors[i], border: "2px solid white", zIndex: participantInitials.length - i }}
            >
              {p}
            </div>
          ))}
        </div>
        <span className="text-xs" style={{ color: "#94A3B8" }}>Decision locked · 2 min ago</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        /* Bright, luminous — like Synthesia's mirror-white */
        background: "linear-gradient(180deg, #EEF2FF 0%, #F5F7FF 30%, #ffffff 70%)",
        minHeight: "88vh",
      }}
    >
      {/* Top radial bloom — the "mirror" shine */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(165,180,252,0.5) 0%, transparent 60%), " +
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(196,181,253,0.2) 0%, transparent 55%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <div>
            <div
              className="eyebrow-pill anim-hidden"
            >
              <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "#6366F1", flexShrink: 0 }} />
              Decision intelligence platform
            </div>

            <h1
              className="text-5xl font-extrabold sm:text-6xl xl:text-7xl anim-hidden"
              style={{
                color: "#0F172A",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                transitionDelay: "60ms",
              }}
            >
              Stop{" "}
              <span className="gradient-text">re-deciding.</span>
              <br />
              Capture{" "}
              <span className="gradient-text">alignment</span>
              <br />
              live.
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed anim-hidden"
              style={{ color: "#64748B", maxWidth: "26rem", transitionDelay: "120ms" }}
            >
              PulseRoom surfaces real-time signals, quantifies group alignment,
              and leaves you with a clear decision artifact — not just notes.
            </p>

            <div className="mt-10 anim-hidden" style={{ transitionDelay: "180ms" }}>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white"
                style={{
                  background: "#6366F1",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.38)",
                }}
              >
                Try PulseRoom for free →
              </a>
            </div>

            <p className="mt-4 text-sm anim-hidden" style={{ color: "#94A3B8", transitionDelay: "220ms" }}>
              No credit card required
            </p>

            {/* Stats */}
            <div
              className="mt-10 flex flex-wrap gap-x-8 gap-y-4 pt-8 anim-hidden"
              style={{ borderTop: "1px solid #E2E8F0", transitionDelay: "260ms" }}
            >
              {[
                { val: "6–30", label: "ideal group size" },
                { val: "< 5 min", label: "to set up" },
                { val: "0", label: "training needed" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-extrabold" style={{ color: "#0F172A" }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative anim-scale" style={{ transitionDelay: "160ms" }}>
            {/* Card glow */}
            <div
              className="pointer-events-none absolute -inset-8 rounded-3xl blur-3xl"
              aria-hidden
              style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.2), transparent 70%)" }}
            />
            <AlignmentViz />
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        aria-hidden
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
      />
    </section>
  );
}