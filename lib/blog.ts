import { APP_URL } from "./site";

export type BlogReference = {
  label: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  readingTime: string;
  status?: string | null;
  title: string;
  subtitle: string;
  excerpt: string;
  bullets: string[];
  intro: string[];
  bodySections: BlogSection[];
  takeaways: string[];
  referencesTitle: string;
  references: BlogReference[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "alignment-is-not-polling",
    category: "Decision note",
    readingTime: "4 min",
    status: null,
    title: "Alignment ≠ Polling: why teams keep re-deciding",
    subtitle:
      "A vote can close a meeting. It does not necessarily create a shared decision.",
    excerpt:
      "Most tools collect opinions. Real decision work requires making trade-offs visible and reducing ambiguity about what the group actually agreed to.",
    bullets: [
      "Polling captures preference; alignment captures shared constraints and trade-offs.",
      "Re-litigation happens when 'agreement' is not recorded as an artifact.",
      "Visual aggregation changes the discussion from persuasion to diagnosis.",
    ],
    intro: [
      "Most teams are very good at collecting opinions and surprisingly weak at building shared decisions. That gap matters. A poll tells you where people stand at one moment. A decision process has to do more: surface constraints, expose trade-offs, show where confidence is fragile, and make disagreement useful before it becomes political.",
      "In other words, polling captures preference; decision-making requires structure. A room can feel converged without actually being well calibrated. That is one reason teams often leave a meeting with an apparent outcome but without a stable foundation underneath it.",
      "This is why teams re-decide. They leave with a headline conclusion, but not with a visible record of why that conclusion won, what assumptions supported it, what alternatives were weaker, and where uncertainty still remained. The same issue then returns in the next meeting, often with the same arguments and slightly more frustration.",
    ],
    bodySections: [
      {
        heading: "Why majority is not enough",
        paragraphs: [
          "A majority can be useful, but it is not automatically a high-quality decision. Across different contexts, the size of a majority is not always a reliable signal of decision quality. That makes simple headcount a weak substitute for real decision design.",
          "In live rooms, that weakness shows up as false confidence. A vote can tell you what the room prefers, but it rarely tells you whether the room shares the same logic, interprets the criteria similarly, or agrees on what trade-offs were accepted.",
        ],
      },
      {
        heading: "What alignment actually needs",
        paragraphs: [
          "A stronger process asks a different question. Instead of asking only, 'Which option do you prefer?', it asks, 'How does this option perform across the dimensions that matter?' Those dimensions may be feasibility, strategic fit, implementation risk, evidence strength, or confidence.",
          "Once those dimensions are visible, the conversation changes. Participants stop repeating broad positions and begin discussing why one dimension is weak, why another matters more, and what would need to change to improve confidence. The room moves from advocacy toward diagnosis.",
        ],
      },
      {
        heading: "Why this reduces re-litigation",
        paragraphs: [
          "Teams re-litigate decisions when they fail to preserve the shape of the room’s reasoning. A binary outcome is easy to revisit because it carries too little context. A structured decision record is harder to reopen casually because it makes the rationale visible.",
          "That is the practical value of decision intelligence. Instead of ending with only a result, the group ends with a record of where alignment was strong, where it was fragile, and which trade-offs defined the outcome. The next conversation can begin from a better place instead of starting from zero.",
        ],
      },
    ],
    takeaways: [
      "Polling is useful for preference capture, not for full decision clarity.",
      "Visible dimensions turn disagreement into a diagnostic asset.",
      "A reusable decision record lowers the chance of repeated debate.",
    ],
    referencesTitle: "References",
    references: [
      {
        label:
          "Lee, M. D., & Lee, M. N. — work on crowd majority and accuracy in binary decisions.",
      },
      {
        label:
          "Coffeng, T. et al. — work on discussion procedure and board decision quality.",
      },
      {
        label:
          "Peniwati, K. — work on criteria for evaluating group decision-making methods.",
      },
    ],
    primaryCtaLabel: "Get Started",
    primaryCtaHref: APP_URL,
    secondaryCtaLabel: "Back to landing",
    secondaryCtaHref: "/",
  },
  {
    slug: "from-meeting-noise-to-signal",
    category: "Workshop pattern",
    readingTime: "5 min",
    status: null,
    title: "From meeting noise to signal: designing for clarity under pressure",
    subtitle: "Good meetings are not quieter. They are better structured.",
    excerpt:
      "Meetings often reward confidence and airtime, not accuracy. A good decision interface makes divergence visible early before it becomes expensive.",
    bullets: [
      "Early divergence is information, not conflict — surface it quickly.",
      "Interfaces should reduce dominance effects and increase participation parity.",
      "A shared visualization can act as a truth surface for discussion.",
    ],
    intro: [
      "Many meetings do not fail because people are disengaged. They fail because the room has no reliable way to separate signal from noise. Under pressure, airtime becomes a poor proxy for insight. Confidence gets mistaken for accuracy. Repetition gets mistaken for consensus.",
      "By the time the facilitator senses that the conversation is drifting, the group has already spent time reinforcing a weak frame. The design challenge is not simply to make meetings more interactive. It is to make them more legible.",
      "The most useful meetings give the room a structure for reading itself while the work is still happening.",
    ],
    bodySections: [
      {
        heading: "Why structure improves participation",
        paragraphs: [
          "Teams perform better when they are able to examine their own goals, methods, and progress during the work itself. Leadership behaviours that support active participation help create those conditions.",
          "That matters because better decisions do not come from more talk alone. They come from talk that helps the team notice what it is doing, where it is converging too quickly, and where uncertainty still needs to be examined.",
        ],
      },
      {
        heading: "Why information format changes discussion quality",
        paragraphs: [
          "Information design matters. When the room sees cleaner, more current, and better-structured signals, the discussion becomes easier to interpret and harder to derail.",
          "In practice, this means the interface is not decoration. It changes the cognitive load of the meeting and affects how quickly the room can distinguish what matters from what is merely loud.",
        ],
      },
      {
        heading: "A better meeting pattern",
        paragraphs: [
          "A strong pattern is simple: frame one agenda item, define three to five dimensions, let the room respond live, and intervene where the signal is weak or split. The dimensions tell participants what kind of judgment the room is being asked to make.",
          "They also tell the facilitator where to go next. If strategic fit is high but feasibility is low, the next move becomes obvious. If clarity is strong but confidence is weak, the problem may be evidence rather than framing. That is how a meeting shifts from noise to signal.",
        ],
      },
    ],
    takeaways: [
      "Meetings improve when the room can examine itself in real time.",
      "Interface design affects cognitive load and therefore decision quality.",
      "A structured flow helps facilitators act before drift becomes expensive.",
    ],
    referencesTitle: "References",
    references: [
      {
        label:
          "Meta-analytic work on team reflexivity and team performance.",
      },
      {
        label:
          "Research on information quality, complexity, and decision-making in analytics contexts.",
      },
      {
        label:
          "Recent work on structured decision-making as a participatory workshop tool.",
      },
    ],
    primaryCtaLabel: "Get Started",
    primaryCtaHref: APP_URL,
    secondaryCtaLabel: "Back to landing",
    secondaryCtaHref: "/",
  },
  {
    slug: "decision-artifacts-teams-can-reuse",
    category: "Product principle",
    readingTime: "4 min",
    status: null,
    title: "The missing layer: decision artifacts teams can reuse",
    subtitle: "A meeting should not end as a memory. It should end as an artifact.",
    excerpt:
      "What matters after a workshop is not the conversation. It's the artifact — what you can point to, share, and build on without restarting the debate.",
    bullets: [
      "Artifacts reduce post-meeting ambiguity and prevent scope drift.",
      "A one-page snapshot beats 40 slides and fragmented chat threads.",
      "Artifacts create accountability: what was decided, why, and what's next.",
    ],
    intro: [
      "Most teams underestimate how much value is lost after the conversation ends. During the meeting, the room may do excellent work: assumptions get challenged, trade-offs are surfaced, priorities become clearer, and uncertainty becomes more honest.",
      "Then the session ends, and all of that structure collapses into fragments: a vague summary, a few notes, scattered messages, maybe a screenshot. The next person who needs to understand the decision inherits the conclusion without inheriting the reasoning.",
      "That is why decision artifacts matter. What the room produces should be reusable, not merely memorable.",
    ],
    bodySections: [
      {
        heading: "Why artifacts matter",
        paragraphs: [
          "Artifacts are not peripheral to coordination. They help teams create and maintain shared understanding in complex environments.",
          "A useful artifact does more than document a process after the fact. It helps participants see the object of work more clearly while the work is happening and after it ends.",
        ],
      },
      {
        heading: "Why most documentation fails",
        paragraphs: [
          "In fast-moving organizations, documentation is often treated as overhead. Teams optimize for short-term delivery, and the result is usually fragmented material that is difficult to understand or reuse.",
          "The problem is not that teams produce no output. It is that they produce output that is difficult to carry forward. That same pattern appears in leadership meetings, workshops, and product reviews.",
        ],
      },
      {
        heading: "What a reusable decision artifact should contain",
        paragraphs: [
          "A useful decision artifact is compact and structured. It should capture the decision, the rationale, the trade-offs that shaped it, the confidence around it, and the next action implied by it.",
          "When a team has that kind of artifact, future discussions begin from a stronger base. The organization spends less time re-opening old debates and more time moving forward with clearer accountability.",
        ],
      },
    ],
    takeaways: [
      "Artifacts preserve the reasoning, not just the headline decision.",
      "Reusable records reduce ambiguity and prevent scope drift.",
      "Decision interfaces become more valuable when they support carry-forward.",
    ],
    referencesTitle: "References",
    references: [
      {
        label:
          "Review work on artifacts and collaborative work in complex environments.",
      },
      {
        label:
          "Mapping studies on documentation challenges in continuous development.",
      },
      {
        label:
          "Research on documentation practices, situational awareness, and project effectiveness.",
      },
    ],
    primaryCtaLabel: "Get Started",
    primaryCtaHref: APP_URL,
    secondaryCtaLabel: "Back to landing",
    secondaryCtaHref: "/",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}