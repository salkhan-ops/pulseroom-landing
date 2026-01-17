import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";

function ProofCard({
  title,
  desc,
  imageSrc,
}: {
  title: string;
  desc: string;
  imageSrc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <Badge className="border-brand-100 text-brand-700">Example</Badge>
      </div>

      <p className="mt-2 text-sm text-slate-600">{desc}</p>

      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export default function VisualProof() {
  return (
    <Section
      id="proof"
      eyebrow="Proof"
      title="What the room can see—and what you walk away with."
      subtitle="Even simple visuals change the conversation: they make trade-offs and alignment explicit."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <ProofCard
          title="Live alignment snapshot"
          desc="A clear view of convergence vs divergence during the session."
          imageSrc="/proof/alignment.png"
        />
        <ProofCard
          title="Decision summary artifact"
          desc="A shareable one-page summary with decision + rationale."
          imageSrc="/proof/summary.png"
        />
        <ProofCard
          title="Actionable outcomes"
          desc="Owners and next steps that survive beyond the meeting."
          imageSrc="/proof/actions.png"
        />
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Tip: replace the three images in <code className="rounded bg-white/60 px-2 py-1">/public/proof</code> with real screenshots whenever ready.
      </p>
    </Section>
  );
}
