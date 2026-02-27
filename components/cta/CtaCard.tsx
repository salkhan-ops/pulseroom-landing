import type { EngagementCta } from "@/lib/site";
import { APP_URL } from "@/lib/site";

export default function CtaCard({ cta }: { cta: EngagementCta }) {
  const isPrimary = Boolean(cta.primary);

  return (
    <div
      className="relative rounded-2xl p-6 transition-all hover:-translate-y-0.5"
      style={{
        background: isPrimary ? "rgba(99,102,241,0.05)" : "white",
        border: isPrimary ? "1px solid rgba(99,102,241,0.2)" : "1px solid #E2E8F0",
        boxShadow: isPrimary
          ? "0 4px 40px rgba(99,102,241,0.10)"
          : "0 4px 40px rgba(99,102,241,0.05)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900">{cta.title}</h3>
        {cta.badge ? (
          <span
            className="flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold"
            style={
              isPrimary
                ? {
                    background: "rgba(99,102,241,0.12)",
                    color: "#6366F1",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }
                : {
                    background: "#F1F5F9",
                    color: "#64748B",
                    border: "1px solid #E2E8F0",
                  }
            }
          >
            {cta.badge}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">{cta.blurb}</p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02]"
          style={
            isPrimary
              ? {
                  background: "#6366F1",
                  boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                }
              : {
                  background: "white",
                  color: "#374151",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }
          }
        >
          {isPrimary ? "Start here →" : "Open →"}
        </a>
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-slate-400 hover:text-slate-700 transition-colors underline underline-offset-4"
        >
          Copy link
        </a>
      </div>
    </div>
  );
}