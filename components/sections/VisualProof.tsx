import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";

function MiniChart({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <Badge>Placeholder</Badge>
      </div>
      <div className="mt-4 grid grid-cols-12 items-end gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md bg-indigo-200"
            style={{ height: `${18 + ((i * 11) % 52)}px` }}
            aria-hidden
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">
        Swap this with real screenshots or exported charts when ready.
      </p>
    </div>
  );
}

export default function VisualProof() {
  return (
    <Section
      id="proof"
      eyebrow="Visual proof"
      title="Make alignment visible (even with simple visuals)."
      subtitle="These are intentionally lightweight placeholders — your real visuals can replace them later without layout changes."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <MiniChart title="Alignment over time" />
        <MiniChart title="Consensus vs divergence" />
        <MiniChart title="Decision outcomes" />
      </div>
    </Section>
  );
}
