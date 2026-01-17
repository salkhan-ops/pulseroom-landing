import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { site } from "@/lib/site";

function DotViz() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white" />
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900">Alignment Snapshot</p>
          <Badge>Placeholder</Badge>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <span className="text-xs font-medium text-slate-600">Signal</span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-600" />
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Replace this with real charts/screens later. The layout is already production-ready.
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge className="border-indigo-200 text-indigo-800">One-page · Static export · Fast</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {site.hero.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {site.hero.subheadline}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.hero.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#engage" variant="primary" external={false}>
                Choose an option
              </Button>
              <Button href="#how-it-works" variant="secondary" external={false}>
                See how it works
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              No backend required for this landing page. Link CTAs to forms/Calendly.
            </p>
          </div>

          <DotViz />
        </div>
      </Container>
    </section>
  );
}
