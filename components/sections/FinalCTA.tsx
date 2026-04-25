"use client";

import Container from "@/components/ui/Container";

const SIGNUP_URL = "https://app.pulseroom.app/host/signup";

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: "#ffffff" }}>
      <Container>
        <div
          className="relative overflow-hidden rounded-[2rem] px-5 py-10 text-center sm:px-8 sm:py-12 md:px-12 md:py-14 anim-scale"
          style={{
            background: "linear-gradient(160deg, #EEF2FF 0%, #E0E7FF 45%, #EEF2FF 100%)",
            border: "1px solid rgba(99,102,241,0.18)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.8) inset, 0 8px 60px rgba(99,102,241,0.14)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(255,255,255,0.9) 0%, transparent 60%)",
            }}
          />

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
            <div className="eyebrow-pill mx-auto mb-4" style={{ width: "fit-content" }}>
              <span
                className="h-1.5 w-1.5 rounded-full pulse-dot"
                style={{ background: "#6366F1", flexShrink: 0 }}
              />
              Free to start · No credit card
            </div>

            <h2
              className="text-[2.15rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "#0F172A", lineHeight: "1.06", letterSpacing: "-0.03em" }}
            >
              Ready to turn discussion
              <br />
              into <span className="gradient-text">decisions?</span>
            </h2>

            <p
              className="mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg"
              style={{ color: "#64748B" }}
            >
              Jump into PulseRoom now and start structuring live discussion with clarity.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-white sm:w-auto sm:px-8"
                style={{
                  background: "#6366F1",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
                }}
              >
                Get Started →
              </a>

              <a
                href="/#use-cases"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold transition-colors sm:w-auto"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "#374151",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                Explore use cases
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}