import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "PulseRoom Pricing",
  description: "PulseRoom pricing, billing access, and commercial options.",
};

export default function PricingPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <section className="section-cool overflow-hidden border-b border-violet-100 py-16 sm:py-18 md:py-22">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_340px] lg:items-end">
            <div className="anim-hidden anim-left">
              <div className="eyebrow-pill">
                <span
                  className="h-1.5 w-1.5 rounded-full pulse-dot"
                  style={{ background: "#6366F1", flexShrink: 0 }}
                />
                Pricing overview
              </div>

              <h1
                className="max-w-[12ch] text-[2.7rem] font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-[4rem]"
                style={{ lineHeight: "0.95", letterSpacing: "-0.05em" }}
              >
                Pricing that grows with the room.
              </h1>

              <p className="mt-5 max-w-2xl text-[1.04rem] leading-8 text-slate-600 sm:text-[1.1rem]">
                Start with a lighter plan for live sessions, move up when your
                rooms get larger or more frequent, and talk to us when PulseRoom
                becomes part of a team or institutional workflow.
              </p>
            </div>

            <div className="anim-hidden anim-right rounded-[1.8rem] border border-violet-200 bg-white p-6 shadow-[0_16px_40px_rgba(124,58,237,0.08)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">
                Best fit
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "Basic for smaller live sessions",
                  "Pro for recurring facilitation",
                  "Premium AI for richer review and follow-through",
                  "Enterprise for institutions and rollout support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1rem] border border-violet-100 bg-violet-50/50 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Pricing />
    </main>
  );
}
