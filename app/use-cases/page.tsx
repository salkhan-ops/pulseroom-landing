import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/site";

const featurePills = [
  "Live signals from every participant",
  "Visible alignment across dimensions",
  "A clear decision artifact at the end",
];

const stats = [
  {
    label: "Academic & executive rooms",
    value: "2",
  },
  {
    label: "Live dimensions supported",
    value: "3–5",
  },
  {
    label: "What changes",
    value: "Faster clarity",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f0ff_0%,#fbf8ff_45%,#ffffff_100%)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 52% 30% at 18% 12%, rgba(196,181,253,0.22) 0%, transparent 62%)," +
            "radial-gradient(ellipse 34% 24% at 78% 16%, rgba(216,180,254,0.18) 0%, transparent 58%)," +
            "radial-gradient(ellipse 48% 22% at 50% 0%, rgba(167,139,250,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-10 md:px-8 md:pb-18 md:pt-14 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
              Decision intelligence platform
            </span>

            <h1 className="mt-6 max-w-[9.5ch] text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-[5.1rem] xl:text-[5.7rem]">
              Stop re-deciding.
              <br />
              Capture alignment live.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              PulseRoom helps groups structure the room, collect live multi-dimensional
              input, and leave with a clearer picture of what the audience, class, or
              leadership team actually understands.
            </p>

            <div className="mt-7 grid gap-3 sm:max-w-[34rem]">
              {featurePills.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-violet-200 bg-white px-6 py-4 text-base font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={APP_URL}
                className="inline-flex min-w-[260px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#7c3aed_0%,#9333ea_55%,#6d28d9_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(124,58,237,0.24)] transition hover:translate-y-[-1px]"
              >
                Try PulseRoom free
              </Link>

              <Link
                href="/use-cases"
                className="inline-flex min-w-[290px] items-center justify-center rounded-full border border-violet-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50"
              >
                Explore use cases
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[2rem] border border-violet-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-5 text-3xl font-semibold leading-tight text-violet-700">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="self-start lg:pt-1">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.7rem] bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.18),transparent_66%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.35rem] border border-violet-200 bg-white p-3 shadow-[0_26px_70px_rgba(124,58,237,0.08)]">
                <div className="overflow-hidden rounded-[2rem]">
                  <Image
                    src="/use-cases/cover/board_meeting.png"
                    alt="PulseRoom in a premium board meeting setting"
                    width={1792}
                    height={1024}
                    priority
                    unoptimized
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.7rem] border border-violet-200 bg-white px-6 py-5 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Best-fit room
                </p>
                <p className="mt-3 text-[1.05rem] font-semibold leading-7 text-slate-700">
                  Board meeting / executive alignment
                </p>
              </div>

              <div className="rounded-[1.7rem] border border-violet-200 bg-white px-6 py-5 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Signal style
                </p>
                <p className="mt-3 text-[1.05rem] font-semibold leading-7 text-slate-700">
                  Live audience + presenter visibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}