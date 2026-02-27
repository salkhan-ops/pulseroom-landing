import Section from "@/components/layout/Section";

const CALENDAR_URL = "https://calendar.app.google/WMFb5GpB8wNxyWcZ8";

export default function SchedulePilot() {
  return (
    <Section
      id="schedule"
      eyebrow="Schedule"
      title="Schedule a pilot call"
      subtitle="A short, focused conversation to assess fit and scope a potential PulseRoom pilot."
    >
      <div
        className="max-w-2xl rounded-2xl bg-white p-8"
        style={{
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 40px rgba(99,102,241,0.07)",
        }}
      >
        <p className="text-sm leading-relaxed text-slate-600">
          This is a brief exploratory call to understand your decision context (e.g., workshop,
          executive session, or cohort setting) and determine whether a PulseRoom pilot would be a
          good fit.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          <strong className="text-slate-900">This is not a sales presentation.</strong> If there's
          a fit, we'll outline next steps for a short (2–4 week) paid pilot. If not, we'll be
          upfront.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02]"
            style={{
              background: "#6366F1",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            }}
          >
            Open Google Calendar →
          </a>
          <span className="text-xs text-slate-400">
            Schedules via Google Calendar · Google Meet included
          </span>
        </div>
      </div>
    </Section>
  );
}