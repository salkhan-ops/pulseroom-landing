"use client";

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
const proofStats = [
  { value: "3-5", label: "live dimensions per room" },
  { value: "<3 min", label: "to first useful signal" },
  { value: "1 artifact", label: "captured at the end" },
];

function AlignmentViz() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-violet-200 bg-white shadow-[0_16px_40px_rgba(124,58,237,0.13)]">
      <div className="flex items-center justify-between gap-3 border-b border-violet-100 px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
          <span className="truncate text-sm font-semibold text-slate-800 sm:text-[15px]">
            Live session · 6 participants
          </span>
        </div>

        <span className="shrink-0 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 sm:text-sm">
          78% aligned
        </span>
      </div>

      <div className="grid gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:items-center lg:gap-5">
        {/* Ring */}
        <div className="flex justify-center lg:justify-start">
          <div className="flex items-center justify-center rounded-[1.2rem] border border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-3">
            <div className="relative h-36 w-36 sm:h-40 sm:w-40">
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
                <span className="text-[2.5rem] font-semibold tracking-tight text-slate-900 sm:text-[2.8rem]">
                  78%
                </span>
                <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                  Alignment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Signal bars */}
        <div className="min-w-0 space-y-2.5">
          {signals.map((signal) => (
            <div key={signal.label}>
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="truncate text-xs font-medium text-slate-500 sm:text-[13px]">
                  {signal.label}
                </span>
                <span className="shrink-0 text-xs font-bold sm:text-[13px]" style={{ color: signal.color }}>
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
            <span className="text-xs text-slate-400">Decision locked</span>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[1.2rem] border border-violet-100 bg-[linear-gradient(180deg,#fdfbff,#f9f5ff)] px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Best-fit room
            </p>
            <p className="mt-2 text-base font-semibold leading-7 text-slate-700">
              Board meeting / executive alignment
            </p>
          </div>

          <div className="rounded-[1.2rem] border border-violet-100 bg-[linear-gradient(180deg,#fdfbff,#f9f5ff)] px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Signal style
            </p>
            <p className="mt-2 text-base font-semibold leading-7 text-slate-700">
              Live audience + presenter visibility
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
      className="relative overflow-x-clip bg-[linear-gradient(180deg,#f4efff_0%,#fbf8ff_30%,#ffffff_72%)]"
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

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 sm:pb-18 md:px-8 md:pb-24 md:pt-12 lg:px-12 lg:pt-16">
        <div className="mb-9 flex flex-col items-center text-center sm:mb-11 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/90 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-[0_10px_30px_rgba(124,58,237,0.08)] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
            Decision intelligence platform
          </span>

          <h1
            className="mt-5 max-w-5xl font-medium tracking-tight text-slate-950"
            style={{
              fontSize: "clamp(2.7rem, 8.8vw, 5.15rem)",
              lineHeight: "0.94",
              letterSpacing: "-0.05em",
            }}
          >
            Turn live discussion
            <br className="hidden sm:block" /> into visible alignment.
          </h1>

          <p
            className="mt-5 max-w-2xl text-slate-600"
            style={{
              fontSize: "clamp(0.98rem, 2.9vw, 1.06rem)",
              lineHeight: "1.8",
            }}
          >
            PulseRoom helps teams capture live signals, see alignment clearly,
            and leave with a decision record they can reuse.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-10">
          {/* LEFT */}
          <div className="anim-hidden anim-left flex flex-col lg:pt-2">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {featureCards.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-violet-100 bg-white px-4 py-4 shadow-sm sm:px-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#f5f0ff,#ede9fe)] shadow-[inset_0_1px_2px_rgba(124,58,237,0.08)]">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <p className="mt-0.5 text-xs leading-6 text-slate-500 sm:text-[13px]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="ml-auto mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-200" />
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={APP_URL}
                className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#7C3AED_0%,#9333EA_55%,#6D28D9_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(124,58,237,0.28)] transition hover:translate-y-[-1px] sm:min-w-[230px] sm:w-auto"
              >
                Start free
              </Link>

              <Link
                href="/pricing"
                className="inline-flex w-full items-center justify-center rounded-full border border-violet-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50 sm:min-w-[230px] sm:w-auto"
              >
                See pricing
              </Link>
            </div>

            <div className="mt-5 rounded-[1.95rem] border border-violet-100 bg-white/90 p-5 shadow-[0_14px_34px_rgba(124,58,237,0.08)] backdrop-blur sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-xs">
                  Proof of use
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {proofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-h-[160px] rounded-[1.3rem] border border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#faf6ff_100%)] px-5 py-5"
                  >
                    <div className="text-[1.65rem] font-semibold tracking-tight text-slate-950 sm:text-[1.9rem]">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-[15px] leading-8 text-slate-500 sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="anim-hidden anim-right self-start">
            <div className="relative" data-parallax="0.08">
              <div className="parallax-node absolute -inset-5 rounded-[2.7rem] bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.18),transparent_66%)] blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-violet-200/90 bg-white p-2.5 shadow-[0_30px_80px_rgba(124,58,237,0.1)] sm:p-3">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),transparent)]" />
                <div className="overflow-hidden rounded-[1.7rem] sm:rounded-[2rem]">
                  <Image
                    src="/use-cases/cover/board_meeting.webp"
                    alt="PulseRoom in a premium board meeting setting"
                    width={1792}
                    height={1024}
                    priority
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="anim-zoom mt-5">
              <AlignmentViz />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
