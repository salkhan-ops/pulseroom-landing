import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function FinalCTA() {
  const enabled = site.engagement.ctas.filter((c) => c.enabled);
  const primary = enabled.find((c) => c.primary) ?? enabled[0];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-white p-8 shadow-soft sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Ready to turn discussion into decisions?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Start with the path that fits you best. You can switch CTAs anytime — no redesign required.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {primary ? (
              <Button href={primary.href} variant="primary">
                {primary.title}
              </Button>
            ) : null}
            <Button href="#engage" variant="secondary" external={false}>
              See all options
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Tip: update links in <code className="rounded bg-white/60 px-2 py-1">lib/site.ts</code>.
          </p>
        </div>
      </Container>
    </section>
  );
}
