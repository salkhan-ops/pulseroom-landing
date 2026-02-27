import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { APP_URL } from "@/lib/site";

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
  href?: string;
  state: "active" | "comingSoon";
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-base font-semibold text-slate-900">{label}</p>
      <p className="mt-1 text-sm text-slate-600">{sublabel}</p>

      <div className="mt-4">
        {state === "active" && href ? (
          <Button href={href} variant="primary" external={true}>
            Open →
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
      subtitle="The web app is live. Mobile apps are on the way."
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        <AppCard
          label="Web app"
          sublabel="Works in any modern browser — no install needed."
          href={APP_URL}
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
        Mobile apps will follow once usage patterns stabilize. Web app is fully functional today.
      </p>
    </Section>
  );
}