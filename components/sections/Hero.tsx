import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/site";

const featureCards = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="3.5" fill="#7C3AED" />
        <circle cx="10" cy="10" r="7.5" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="2.5 2" />
        <circle cx="10" cy="10" r="1.5" fill="white" />
      </svg>
    ),
    label: "Live signals",
    desc: "Every participant's input captured in real time",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="13" width="3" height="5" rx="1" fill="#8B5CF6" />
        <rect x="8.5" y="9" width="3" height="9" rx="1" fill="#7C3AED" />
        <rect x="15" y="5" width="3" height="13" rx="1" fill="#6D28D9" />
        <path d="M3.5 13 L10 9 L16.5 5" stroke="#A855F7" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    label: "Visible alignment",
    desc: "See where the room agrees — and where it doesn't",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="2" width="14" height="16" rx="2.5" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M7 7h6M7 10.5h4M7 14h5" stroke="#7C3AED" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="14.5" cy="14.5" r="3" fill="#7C3AED" />
        <path d="M13.3 14.5l.9.9 1.5-1.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Decision artifact",
    desc: "Walk out with a clear, shareable record of the outcome",
  },
];

const signals = [
  { label: "Strategic fit", score: 9, color: "#7C3AED" },
  { label: "Feasibility", score: 7, color: "#8B5CF6" },
  { label: "Risk level", score: 4, color: "#EC4899" },
  { label: "Team confidence", score: 8, color: "#6366F1" },
];

const participantColors = ["#7C3AED", "#10B981", "#EC4899", "#F59E0B", "#8B5CF6"];
const participantInitials = ["S", "J", "P", "T", "A"];

function AlignmentViz() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-violet-200 bg-white shadow-[0_16px_40px_rgba(124,58,237,0.13)]">
      <div className="flex items-center justify-between border-b border-violet-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-sm font-semibold text-slate-800">Live session · 6 participants</span>
        </div>
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
          78% aligned
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 px-5 py-4">
        <div className="flex items-center justify-center rounded-[1.2rem] border border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-3">
          <div className="relative h-28 w-28">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle cx="60" cy="60" r="44" fill="none" stroke="#E9D5FF" strokeWidth="12" />
              <circle
                cx="60"
                cy="60"
                r="44"
                fill="none"
                stroke="url(#heroRing)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 44}`}
                strokeDashoffset={`${2 * Math.PI * 44 * (1 - 0.78)}`}
              />
              <defs>
                <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold tracking-tight text-slate-900">78%</span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Alignment
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-2.5">
          {signals.map((signal) => (
            <div key={signal.label}>
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="truncate text-xs font-medium text-slate-500">{signal.label}</span>
                <span className="shrink-0 text-xs font-bold" style={{ color: signal.color }}>
                  {signal.score}/10
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-100">
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: `${signal.score * 10}%`,
                    background: `linear-gradient(90deg, ${signal.color}99, ${signal.color})`,
                  }}
                />
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 border-t border-violet-100 pt-2.5">
            <div className="flex -space-x-2">
              {participantInitials.map((p, i) => (
                <div
                  key={i}
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white"
                  style={{ background: participantColors[i], zIndex: participantInitials.length - i }}
                >
                  {p}
                </div>
              ))}
            </div>
            <span className="text-xs text-slate-400">Decision locked · 2 min ago</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex flex-1 flex-col justify-center rounded-[1.2rem] border border-violet-100 bg-[linear-gradient(180deg,#fdfbff,#f9f5ff)] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Best-fit room</p>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-700">
              Board meeting /
              <br />
              executive alignment
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center rounded-[1.2rem] border border-violet-100 bg-[linear-gradient(180deg,#fdfbff,#f9f5ff)] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Signal style</p>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-700">
              Live audience +
              <br />
              presenter visibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f0ff_0%,#fbf8ff_44%,#ffffff_100%)]"
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

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14 lg:px-12 lg:pt-16">
        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
            Decision intelligence platform
          </span>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-tight text-slate-950 sm:text-6xl lg:text-[5rem] xl:text-[5.5rem]">
            See alignment live.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            PulseRoom helps groups structure the room, collect live multi-dimensional
            input, and leave with a clearer picture of what the audience, class, or
            leadership team actually understands.
          </p>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
          <div className="flex flex-col lg:pt-2">
            <div className="grid gap-3">
              {featureCards.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-violet-100 bg-white px-5 py-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#f5f0ff,#ede9fe)] shadow-[inset_0_1px_2px_rgba(124,58,237,0.08)]">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                  <svg
                    className="ml-auto shrink-0 text-violet-300"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 12l4-4-4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#7C3AED_0%,#9333EA_55%,#6D28D9_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(124,58,237,0.24)] transition hover:translate-y-[-1px]"
              >
                Try PulseRoom free
              </a>

              <Link
                href="/#use-cases"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-violet-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50"
              >
                Explore use cases
              </Link>
            </div>

            <div className="mt-auto pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Trusted in</p>
              <div className="grid gap-3">
                {[
                  { icon: "🎓", label: "University lecture halls" },
                  { icon: "🏢", label: "Executive strategy sessions" },
                  { icon: "📋", label: "Board-level decision rooms" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="self-start">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.7rem] bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.18),transparent_66%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.35rem] border border-violet-200 bg-white p-3 shadow-[0_26px_70px_rgba(124,58,237,0.08)]">
                <div className="overflow-hidden rounded-[2rem]">
                  <Image
                    src="/use-cases/cover/board_meeting.webp"
                    alt="PulseRoom in a premium board meeting setting"
                    width={1792}
                    height={1024}
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <AlignmentViz />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}