"use client";

import Container from "@/components/ui/Container";
import { APP_URL } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#ffffff" }}>
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl px-10 py-16 sm:px-16 text-center anim-scale"
          style={{
            background: "linear-gradient(160deg, #EEF2FF 0%, #E0E7FF 45%, #EEF2FF 100%)",
            border: "1px solid rgba(99,102,241,0.18)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.8) inset, 0 8px 80px rgba(99,102,241,0.16)",
          }}
        >
          {/* Mirror-light bloom */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(255,255,255,0.9) 0%, transparent 60%)",
            }}
          />
          {/* Side glows */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl glow-pulse"
            aria-hidden
            style={{ background: "rgba(99,102,241,0.18)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full blur-3xl glow-pulse"
            aria-hidden
            style={{ background: "rgba(165,180,252,0.22)", animationDelay: "1.5s" }}
          />

          <div className="relative">
            <div className="eyebrow-pill mx-auto" style={{ width: "fit-content" }}>
              <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "#6366F1", flexShrink: 0 }} />
              Free to start · No credit card
            </div>

            <h2
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
              style={{ color: "#0F172A", lineHeight: "1.08", letterSpacing: "-0.02em" }}
            >
              Ready to turn discussion
              <br />
              into{" "}
              <span className="gradient-text">decisions?</span>
            </h2>

            <p className="mt-4 text-lg max-w-md mx-auto" style={{ color: "#64748B" }}>
              Jump into PulseRoom now — no credit card required.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white"
                style={{
                  background: "#6366F1",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.4)",
                }}
              >
                Get Started →
              </a>
              <a
                href="#why-now"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold transition-colors"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "#374151",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}