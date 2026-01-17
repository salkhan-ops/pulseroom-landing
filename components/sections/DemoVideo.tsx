import Section from "@/components/layout/Section";

const VIDEO_URL = "https://www.loom.com/embed/REPLACE_WITH_YOUR_LOOM_ID"; 
// Example: https://www.loom.com/embed/abcd1234

export default function DemoVideo() {
  return (
    <Section
      id="demo"
      eyebrow="See it live"
      title="A 90-second walkthrough"
      subtitle="Show the flow: setup → live signals → alignment → decision artifact."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">What you’ll see</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
              <span>Host sets the decision context</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
              <span>Participants input signals (lightweight)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
              <span>Alignment becomes visible instantly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-950" aria-hidden />
              <span>Export a clean decision summary</span>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={VIDEO_URL}
              title="PulseRoom demo video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
