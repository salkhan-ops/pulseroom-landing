"use client";

import { APP_URL } from "@/lib/site";

// Real decision dimensions shown in the live visual
const signals = [
  { label: "Strategic fit",   score: 9, color: "#6EE7B7" },
  { label: "Feasibility",     score: 7, color: "#93C5FD" },
  { label: "Risk level",      score: 4, color: "#FCA5A5" },
  { label: "Team confidence", score: 8, color: "#C4B5FD" },
  { label: "Impact",          score: 9, color: "#6EE7B7" },
  { label: "Time to value",   score: 6, color: "#FCD34D" },
];

const participants = ["S", "J", "P", "T", "A", "D"];
const participantColors = ["#6366F1", "#34D399", "#F472B6", "#FB923C", "#A78BFA", "#38BDF8"];

function AlignmentViz() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(24px)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full animate-pulse"
            style={{ background: "#6EE7B7" }}
          />
          <span className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>
            Live session · 6 participants
          </span>
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-bold"
          style={{ background: "rgba(110,231,183,0.15)", color: "#6EE7B7" }}
        >
          Alignment: 78%
        </span>
      </div>

      {/* Signal bars */}
      <div className="px-5 py-5 space-y-3">
        {signals.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium" style={{ color: "#94A3B8" }}>
                {s.label}
              </span>
              <span className="text-xs font-bold" style={{ color: s.color }}>
                {s.score}/10
              </span>
            </div>
            <div
              className="h-2 rounded-full w-full"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${s.score * 10}%`,
                  background: `linear-gradient(90deg, ${s.color}88, ${s.color})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Participant avatars + footer */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex -space-x-2">
          {participants.map((p, i) => (
            <div
              key={i}
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
              style={{
                background: participantColors[i],
                border: "2px solid #0A0F1E",
                color: "white",
                zIndex: participants.length - i,
              }}
            >
              {p}
            </div>
          ))}
        </div>
        <span className="text-xs" style={{ color: "#64748B" }}>
          Decision locked · 2 min ago
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "#0A0F1E", minHeight: "92vh" }}
    >
      {/* Background gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% -10%, rgba(99,102,241,0.25) 0%, transparent 70%), " +
            "radial-gradient(ellipse 50% 40% at 10% 80%, rgba(16,185,129,0.12) 0%, transparent 60%), " +
            "radial-gradient(ellipse 40% 50% at 90% 70%, rgba(168,85,247,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left — text */}
          <div>
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-8"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.35)",
                color: "#A5B4FC",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Decision intelligence platform
            </div>

            {/* Headline */}
            <h1
              className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
              style={{ color: "#F1F5F9" }}
            >
              Stop{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #818CF8 0%, #34D399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                re-deciding.
              </span>
              <br />
              Capture alignment{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F472B6 0%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                live.
              </span>
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed max-w-lg"
              style={{ color: "#94A3B8" }}
            >
              PulseRoom surfaces real-time signals, quantifies group alignment,
              and leaves you with a clear decision artifact — not just notes.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["No heavy setup", "Live + async", "Decision artifacts"].map((h) => (
                <span
                  key={h}
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#CBD5E1",
                  }}
                >
                  ✓ {h}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-bold transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                  color: "white",
                  boxShadow: "0 0 32px rgba(99,102,241,0.35)",
                }}
              >
                Try PulseRoom free →
              </a>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.01]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#E2E8F0",
                }}
              >
                ▶ See it live
              </a>
            </div>

            <p className="mt-4 text-xs" style={{ color: "#475569" }}>
              Free to start · No credit card required
            </p>
          </div>

          {/* Right — live visual */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-4 rounded-3xl blur-3xl opacity-30"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(99,102,241,0.5), transparent 70%)",
              }}
            />
            <AlignmentViz />
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-6 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { val: "6–30", label: "ideal group size" },
            { val: "< 5 min", label: "session setup" },
            { val: "1 artifact", label: "per session" },
            { val: "0", label: "training needed" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold" style={{ color: "#E2E8F0" }}>
                {s.val}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}