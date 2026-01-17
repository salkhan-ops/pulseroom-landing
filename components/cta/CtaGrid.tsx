import Section from "@/components/layout/Section";
import CtaCard from "@/components/cta/CtaCard";
import { site } from "@/lib/site";

export function CtaGrid({ title, subtitle }: { title: string; subtitle: string }) {
  const enabled = site.engagement.ctas.filter((c) => c.enabled);
  const primaryCount = enabled.filter((c) => c.primary).length;

  // Safety: if user accidentally sets none/too many primary, we still render cleanly.
  const normalized = enabled.map((c, i) => {
    if (primaryCount === 1) return c;
    return { ...c, primary: i === 0 }; // first enabled becomes primary
  });

  return (
    <Section
      id="engage"
      eyebrow="Engagement"
      title={title}
      subtitle={subtitle}
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {normalized.map((cta) => (
          <CtaCard key={cta.key} cta={cta} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Tip:</span> You can enable/disable options and switch the
          highlighted CTA in <code className="rounded bg-slate-50 px-2 py-1">lib/site.ts</code>{" "}
          without touching UI logic.
        </p>
      </div>
    </Section>
  );
}
