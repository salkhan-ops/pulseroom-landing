import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

const PILOT_URL = "https://calendar.app.google/WMFb5GpB8wNxyWcZ8";

// If you later have a real web app URL, replace null with the URL
const WEB_APP_URL: string | null = null;

function DisabledPill({ label = "Coming soon" }: { label?: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold
                 border border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed select-none"
      aria-disabled="true"
    >
      {label}
      <span aria-hidden className="ml-2 text-base leading-none">→</span>
    </span>
  );
}

function AppCard({
  label,
  sublabel,
  href,
  state,
}: {
  label: string;
  sublabel: string;
  href?: string; // optional for disabled cards
  state: "active" | "comingSoon";
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-base font-semibold text-slate-900">{label}</p>
      <p className="mt-1 text-sm text-slate-600">{sublabel}</p>

      <div className="mt-4">
        {state === "active" && href ? (
          <Button href={href} variant="primary">
            Open
          </Button>
        ) : (
          <DisabledPill />
        )}
      </div>
    </div>
  );
}

export default function GetPulseRoom() {
  return (
    <Section
      id="get-pulseroom"
      eyebrow="Access"
      title="Get PulseRoom"
      subtitle="PulseRoom is currently available via pilot engagements. Web and mobile apps will follow."
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        <AppCard
          label="Web app"
          sublabel={WEB_APP_URL ? "Access via modern browser" : "Available through pilot sessions"}
          href={WEB_APP_URL ?? PILOT_URL}
          state="active"
        />

        <AppCard
          label="iOS app"
          sublabel="Native iPhone & iPad app"
          state="comingSoon"
        />

        <AppCard
          label="Android app"
          sublabel="Native Android app"
          state="comingSoon"
        />
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Want early access? Schedule a pilot call — mobile apps will follow once usage patterns stabilize.
      </p>
    </Section>
  );
}
