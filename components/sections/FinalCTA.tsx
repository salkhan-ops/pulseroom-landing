"use client";

import Container from "@/components/ui/Container";
import { APP_URL } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center anim-scale"
          style={{
            background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #F0F9FF 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
            boxShadow: "0 8px 80px rgba(99,102,241,0.18)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            aria-hidden
            style={{ background: "rgba(99,102,241,0.22)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full blur-3xl"
            aria-hidden
            style={{ background: "rgba(165,180,252,0.3)" }}
          />
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-3xl opacity-40"
            aria-hidden
            style={{ background: "rgba(99,102,241,0.12)" }}
          />

          <div className="relative">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#6366F1",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "#6366F1" }} />
              Free to start · No credit card
            </div>

            <h2
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
              style={{ lineHeight: "1.1" }}
            >
              Ready to turn discussion
              <br />
              into{" "}
              <span className="gradient-text">decisions?</span>
            </h2>

            <p className="mt-4 text-lg text-slate-500 max-w-md mx-auto">
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
                Try PulseRoom for free →
              </a>
              <a
                href="#why-now"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-slate-700 transition-all hover:text-slate-900"
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
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