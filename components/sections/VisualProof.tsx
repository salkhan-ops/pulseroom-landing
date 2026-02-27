import Section from "@/components/layout/Section";
import { withBasePath } from "@/lib/paths";

function ProofCard({
  title,
  desc,
  imageSrc,
  tag = "Example",
}: {
  title: string;
  desc: string;
  imageSrc: string;
  tag?: string;
}) {
  return (
    <div
      className="rounded-2xl bg-white overflow-hidden flex flex-col"
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
      }}
    >
      {/* Image */}
      <div style={{ background: "#F8FAFC" }} className="overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex items-start justify-between gap-3 flex-1">
        <div>
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{desc}</p>
        </div>
        <span
          className="flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{
            background: "rgba(99,102,241,0.08)",
            color: "#6366F1",
            border: "1px solid rgba(99,102,241,0.15)",
          }}
        >
          {tag}
        </span>
      </div>
    </div>
  );
}

export default function VisualProof() {
  return (
    <Section
      id="proof"
      eyebrow="Proof"
      title="What the room can see — and what you walk away with."
      subtitle="Even simple visuals change the conversation: they make trade-offs and alignment explicit."
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        <ProofCard
          title="Live alignment snapshot"
          desc="A clear view of convergence vs divergence during the session."
          imageSrc={withBasePath("/proof/alignment.png")}
        />
        <ProofCard
          title="Decision summary artifact"
          desc="A shareable one-page summary with decision + rationale."
          imageSrc={withBasePath("/proof/summary.png")}
        />
        <ProofCard
          title="Actionable outcomes"
          desc="Owners and next steps that survive beyond the meeting."
          imageSrc={withBasePath("/proof/actions.png")}
        />
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Replace the three images in{" "}
        <code
          className="rounded px-1.5 py-0.5 text-xs"
          style={{ background: "rgba(99,102,241,0.06)", color: "#6366F1" }}
        >
          /public/proof
        </code>{" "}
        with real screenshots whenever ready.
      </p>
    </Section>
  );
}