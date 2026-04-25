"use client";

import Container from "@/components/ui/Container";

const SIGNUP_URL = "https://app.pulseroom.app/host/signup";

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-18 md:py-22" style={{ background: "#ffffff" }}>
      <Container>
        <div
          className="relative overflow-hidden rounded-[2.25rem] px-5 py-11 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 anim-scale"
          style={{
            background: "linear-gradient(160deg, #EEF2FF 0%, #E2E8FF 38%, #F7F9FF 100%)",
            border: "1px solid rgba(99,102,241,0.18)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.86) inset, 0 16px 80px rgba(99,102,241,0.16)",
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
              className="mx-auto max-w-4xl text-[2.35rem] font-extrabold tracking-tight sm:text-5xl md:text-[3.6rem]"
              style={{ color: "#0F172A", lineHeight: "0.96", letterSpacing: "-0.045em" }}
            >
              Ready to make the next room
              <br />
              <span className="gradient-text">clearer on purpose?</span>
            </h2>

            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-[1.08rem]"
              style={{ color: "#64748B" }}
            >
              Start free if you want to try the product yourself, or explore use
              cases first if you are evaluating PulseRoom for a team, cohort, or
              institutional pilot.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {["Structured participation", "Visible alignment", "Reusable output"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/80 bg-white/70 px-3 py-2 shadow-sm backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-white sm:w-auto sm:min-w-[220px] sm:px-8"
                style={{
                  background: "#6366F1",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
                }}
              >
                Start free →
              </a>

              <a
                href="/#use-cases"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold transition-colors sm:w-auto sm:min-w-[220px]"
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
