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
          "0 8px 60px rgba(99,102,241,0.18), 0 2px 8px rgba(0,0,0,0.06)",
        border: "1px solid rgba(99,102,241,0.15)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid #F1F5F9" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full pulse-dot"
            style={{ background: "#22C55E" }}
          />
          <span className="text-sm font-semibold text-slate-800">
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
              <span className="text-xs font-medium text-slate-500">{s.label}</span>
              <span className="text-xs font-bold" style={{ color: s.color }}>
                {s.score}/10
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
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
                  transition: "width 1s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderTop: "1px solid #F1F5F9", background: "#FAFAFA" }}
      >
        <div className="flex -space-x-2">
          {participantInitials.map((p, i) => (
            <div
              key={i}
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{
                background: participantColors[i],
                border: "2px solid white",
                zIndex: participantInitials.length - i,
              }}
            >
              {p}
            </div>
          ))}
        </div>
        <span className="text-xs text-slate-400">Decision locked · 2 min ago</span>
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
        background: "linear-gradient(160deg, #EEF2FF 0%, #F0F9FF 40%, #F8FAFC 100%)",
        minHeight: "88vh",
      }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 70% 10%, rgba(165,180,252,0.45) 0%, transparent 65%), " +
            "radial-gradient(ellipse 40% 35% at 20% 85%, rgba(196,181,253,0.25) 0%, transparent 60%)",
        }}
      />

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-7 anim-hidden"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#6366F1",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "#6366F1" }} />
              Decision intelligence platform
            </div>

            {/* Headline */}
            <h1
              className="text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl anim-hidden"
              style={{ transitionDelay: "60ms" }}
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
              className="mt-6 text-lg leading-relaxed text-slate-500 max-w-md anim-hidden"
              style={{ transitionDelay: "120ms" }}
            >
              PulseRoom surfaces real-time signals, quantifies group alignment,
              and leaves you with a clear decision artifact — not just notes.
            </p>

            {/* CTA */}
            <div
              className="mt-10 anim-hidden"
              style={{ transitionDelay: "180ms" }}
            >
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white"
                style={{
                  background: "#6366F1",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
                }}
              >
                Try PulseRoom for free →
              </a>
            </div>

            <p
              className="mt-4 text-sm text-slate-400 anim-hidden"
              style={{ transitionDelay: "220ms" }}
            >
              No credit card required
            </p>

            {/* Stats row */}
            <div
              className="mt-10 flex flex-wrap gap-x-8 gap-y-4 pt-8 anim-stagger anim-hidden"
              style={{ borderTop: "1px solid #E2E8F0", transitionDelay: "260ms" }}
            >
              {[
                { val: "6–30", label: "ideal group size" },
                { val: "< 5 min", label: "to set up" },
                { val: "0", label: "training needed" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-extrabold text-slate-900">{s.val}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated card */}
          <div
            className="relative anim-scale"
            style={{ transitionDelay: "200ms" }}
          >
            {/* Glow behind card */}
            <div
              className="pointer-events-none absolute -inset-8 rounded-3xl blur-3xl opacity-50"
              aria-hidden
              style={{
                background: "radial-gradient(ellipse, rgba(99,102,241,0.25), transparent 70%)",
              }}
            />
            <AlignmentViz />
          </div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        aria-hidden
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(248,250,252,0.8))",
        }}
      />
    </section>
  );
}