import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

const CALENDAR_URL = "https://calendar.app.google/WMFb5GpB8wNxyWcZ8";

export default function SchedulePilot() {
  return (
    <Section
      id="schedule"
      eyebrow="Schedule"
      title="Schedule a pilot call"
      subtitle="A short, focused conversation to assess fit and scope a potential PulseRoom pilot."
      className="bg-slate-50"
    >
      <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm leading-relaxed text-slate-700">
          This is a brief exploratory call to understand your decision context
          (e.g., workshop, executive session, or cohort setting) and determine
          whether a PulseRoom pilot would be a good fit.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          <strong>This is not a sales presentation.</strong>  
          If there’s a fit, we’ll outline next steps for a short (2–4 week) paid pilot.
          If not, we’ll be upfront.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href={CALENDAR_URL} variant="primary">
            Open Google Calendar
          </Button>

          <span className="text-xs text-slate-500">
            Schedules via Google Calendar · Google Meet included
          </span>
        </div>
      </div>
    </Section>
  );
}
