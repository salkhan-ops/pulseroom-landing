import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { APP_URL } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-white p-8 shadow-soft sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Ready to turn discussion into decisions?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Jump into PulseRoom now — free to start, no credit card required.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href={APP_URL} variant="primary" external={true}>
              Try PulseRoom
            </Button>
            <Button href="#why-now" variant="secondary" external={false}>
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}