import Section from "@/components/layout/Section";
import CtaCard from "@/components/cta/CtaCard";
import { site } from "@/lib/site";

export function CtaGrid({ title, subtitle }: { title: string; subtitle: string }) {
  const enabled = site.engagement.ctas.filter((c) => c.enabled);
  const primaryCount = enabled.filter((c) => c.primary).length;

  const normalized = enabled.map((c, i) => {
    if (primaryCount === 1) return c;
    return { ...c, primary: i === 0 };
  });

  return (
    <Section
      id="engage"
      eyebrow="Engagement"
      title={title}
      subtitle={subtitle}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {normalized.map((cta) => (
          <CtaCard key={cta.key} cta={cta} />
        ))}
      </div>

      <div
        className="mt-8 rounded-2xl p-5"
        style={{
          background: "rgba(99,102,241,0.04)",
          border: "1px solid rgba(99,102,241,0.12)",
        }}
      >
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-800">Tip:</span> You can
          enable/disable options and switch the highlighted CTA in{" "}
          <code
            className="rounded px-1.5 py-0.5 text-xs"
            style={{ background: "rgba(99,102,241,0.08)", color: "#6366F1" }}
          >
            lib/site.ts
          </code>{" "}
          without touching UI logic.
        </p>
      </div>
    </Section>
  );
}