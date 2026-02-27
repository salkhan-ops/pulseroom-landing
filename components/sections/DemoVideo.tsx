import Section from "@/components/layout/Section";

const VIDEO_URL = "https://www.loom.com/embed/REPLACE_WITH_YOUR_LOOM_ID";

const steps = [
  "Host sets the decision context",
  "Participants input signals (lightweight)",
  "Alignment becomes visible instantly",
  "Export a clean decision summary",
];

export default function DemoVideo() {
  return (
    <Section
      id="demo"
      eyebrow="See it live"
      title="A 90-second walkthrough"
      subtitle="Show the flow: setup → live signals → alignment → decision artifact."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* What you'll see card */}
        <div
          className="rounded-2xl bg-white p-8 flex flex-col justify-center"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
          }}
        >
          <h3 className="text-base font-bold text-slate-900 mb-5">What you'll see</h3>
          <ol className="grid gap-4">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <div
                  className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-xl text-xs font-bold text-white"
                  style={{ background: "#6366F1" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-sm text-slate-600">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Video embed */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
          }}
        >
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={VIDEO_URL}
              title="PulseRoom demo video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          {/* Bottom label */}
          <div
            className="px-5 py-3 text-xs text-slate-400"
            style={{ background: "#FAFAFA", borderTop: "1px solid #F1F5F9" }}
          >
            Replace <code className="rounded bg-slate-100 px-1.5 py-0.5">REPLACE_WITH_YOUR_LOOM_ID</code> with your actual Loom embed ID.
          </div>
        </div>
      </div>
    </Section>
  );
}