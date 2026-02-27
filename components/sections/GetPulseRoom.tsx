import Section from "@/components/layout/Section";
import { APP_URL } from "@/lib/site";

function DisabledPill({ label = "Coming soon" }: { label?: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold cursor-not-allowed select-none"
      style={{
        background: "#F1F5F9",
        border: "1px solid #E2E8F0",
        color: "#94A3B8",
      }}
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
  icon,
}: {
  label: string;
  sublabel: string;
  href?: string;
  state: "active" | "comingSoon";
  icon: string;
}) {
  const isActive = state === "active";

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: isActive ? "white" : "#FAFAFA",
        border: isActive ? "1px solid #E2E8F0" : "1px solid #F1F5F9",
        boxShadow: isActive ? "0 4px 40px rgba(99,102,241,0.08)" : "none",
      }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-xl"
        style={{
          background: isActive ? "rgba(99,102,241,0.08)" : "#F1F5F9",
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-base font-bold text-slate-900">{label}</p>
        <p className="mt-1 text-sm text-slate-500">{sublabel}</p>
      </div>

      <div className="mt-auto">
        {isActive && href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02]"
            style={{
              background: "#6366F1",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            }}
          >
            Open →
          </a>
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
          icon="🌐"
        />
        <AppCard
          label="iOS app"
          sublabel="Native iPhone & iPad app"
          state="comingSoon"
          icon="🍎"
        />
        <AppCard
          label="Android app"
          sublabel="Native Android app"
          state="comingSoon"
          icon="🤖"
        />
      </div>

      <p className="mt-5 text-xs text-slate-400">
        Mobile apps will follow once usage patterns stabilize. Web app is fully functional today.
      </p>
    </Section>
  );
}