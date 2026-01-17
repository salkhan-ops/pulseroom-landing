import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { EngagementCta } from "@/lib/site";

export default function CtaCard({ cta }: { cta: EngagementCta }) {
  const isPrimary = Boolean(cta.primary);

  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md",
        isPrimary ? "border-indigo-200 bg-indigo-50/40" : "border-slate-200 bg-white"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{cta.title}</h3>
        {cta.badge ? (
          <Badge className={cn(isPrimary ? "border-indigo-200 text-indigo-800" : "")}>
            {cta.badge}
          </Badge>
        ) : null}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">{cta.blurb}</p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button href={cta.href} variant={isPrimary ? "primary" : "secondary"}>
          {isPrimary ? "Start here" : "Open"}
        </Button>
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
        >
          Copy link
        </a>
      </div>
    </div>
  );
}
