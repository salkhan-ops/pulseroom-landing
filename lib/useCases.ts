export type UseCaseCategory = "Academic" | "Executive";

export type UseCaseStep = {
  title: string;
  note: string;
};

export type UseCaseDimension = {
  label: string;
  value: number; // 1 to 5 for the preview radar
};

export type UseCaseSection = {
  title: string;
  body: string[];
};

export type UseCaseArticle = {
  slug: string;
  category: UseCaseCategory;
  title: string;
  cardTitle: string;
  excerpt: string;
  intro: string[];
  flow: UseCaseStep[];
  dimensions: UseCaseDimension[];
  agenda: string[];
  outcomes: string[];
  roomSetup: string[];
  detailSections: UseCaseSection[];
};

export const useCaseCategories: UseCaseCategory[] = ["Academic", "Executive"];

export const useCases: UseCaseArticle[] = [
  {
    slug: "teaching-in-class",
    category: "Academic",
    title: "Live classroom teaching",
    cardTitle: "Teaching in class",
    excerpt:
      "Faculty teach one agenda item at a time while students adjust a live multi-dimensional signal on their phones, making understanding visible before the class moves on.",
    intro: [
      "PulseRoom turns a lesson into a live reading of understanding. Instead of waiting for a quiz, a raised hand, or the end of class, the faculty member can see whether the room is grasping the concept, applying it, and connecting it to the wider decision context while the teaching is still happening.",
      "This is especially powerful in concept-heavy classrooms where students often look engaged but are actually split between surface familiarity and real understanding. PulseRoom lets the teacher work one learning outcome at a time, keep the room active, and adapt in the moment.",
    ],
    flow: [
      {
        title: "Frame the learning outcome",
        note: "Turn one agenda item into a question the room needs to answer or understand before the session moves on.",
      },
      {
        title: "Choose 3 to 5 dimensions",
        note: "Define the live lenses that matter for the topic such as clarity, application, judgment, evidence, or confidence.",
      },
      {
        title: "Teach while the signal evolves",
        note: "Students keep adjusting the radial graph on their phones as explanation, examples, and discussion unfold.",
      },
      {
        title: "Adapt and deepen",
        note: "The faculty member sees where the room is strong or weak and decides what needs more illustration, challenge, or simplification.",
      },
    ],
    dimensions: [
      { label: "Concept clarity", value: 4.4 },
      { label: "Application", value: 3.6 },
      { label: "Interpretation", value: 3.2 },
      { label: "Decision confidence", value: 2.9 },
    ],
    agenda: [
      "Can we explain how operating leverage amplifies both upside and downside?",
      "Can we distinguish strategy from execution in this case?",
      "Can we identify the real bottleneck in this process rather than the visible symptom?",
    ],
    outcomes: [
      "Improves pacing because the instructor can see whether the class is ready to move on.",
      "Gives quieter students a continuous and structured way to participate.",
      "Makes learning multi-dimensional rather than reducing it to yes-or-no understanding.",
      "Helps faculty distinguish weak explanation from weak application.",
    ],
    roomSetup: [
      "Best used for one learning outcome at a time rather than an entire lecture block.",
      "Works well in finance, operations, strategy, HR, marketing, governance, and executive education classrooms.",
      "Most sessions are strongest with 3 or 4 dimensions, but 5 can work when the room is experienced and the topic has richer layers.",
    ],
    detailSections: [
      {
        title: "Why it changes the classroom",
        body: [
          "A conventional lecture gives the teacher only weak signals. A few students speak, a few nod, and most of the room remains difficult to read. PulseRoom changes that by creating a live visual pattern of learning. The room no longer looks silent; it becomes legible.",
          "That changes faculty behavior in a constructive way. Instead of teaching by assumption, the instructor teaches by visible movement: which dimension is rising, which one is flat, and where the room is still not convinced.",
        ],
      },
      {
        title: "How students experience it",
        body: [
          "Students are not just rating the session. They are tracking their own learning against a visible set of dimensions. This makes participation more reflective and less performative because the task is not to speak for attention, but to signal honestly and adjust as understanding deepens.",
          "As the session progresses, students begin to see that they may understand the concept but still struggle with application, or feel confident about the example but weak on interpretation. That self-awareness is a meaningful part of the learning value.",
        ],
      },
      {
        title: "Where it works best",
        body: [
          "This use case is strongest in rooms where one question deserves a careful treatment rather than a quick poll. It works particularly well in case teaching, problem-solving sessions, executive classrooms, and seminars where discussion quality matters as much as content coverage.",
        ],
      },
    ],
  },
  {
    slug: "experiential-learning",
    category: "Academic",
    title: "Experiential case learning",
    cardTitle: "Experiential learning",
    excerpt:
      "Students use PulseRoom in groups before class, work through agenda items inside a shared dimensional frame, and arrive ready for a stronger, more disciplined discussion.",
    intro: [
      "PulseRoom fits naturally into HBS-style case learning and other experiential formats where students prepare in groups before entering the room. It gives each team a structured way to shape its interpretation rather than simply exchanging loose opinions.",
      "By the time class begins, students have already tested their thinking against the agenda and the defined dimensions. That means the faculty discussion starts from shaped judgment rather than from unformed reaction.",
    ],
    flow: [
      {
        title: "Prepare around the same agenda",
        note: "Each group studies the same set of agenda items instead of drifting into parallel but inconsistent discussions.",
      },
      {
        title: "Use dimensions to discipline analysis",
        note: "The group has to interpret the case through explicit lenses such as evidence strength, trade-offs, implementation, or stakeholder impact.",
      },
      {
        title: "Form a visible group view",
        note: "The group builds a shared pattern before class, including where members still diverge or hold reservations.",
      },
      {
        title: "Bring sharper thinking into class",
        note: "The faculty member can compare groups on judgment, not just on speaking style or confidence.",
      },
    ],
    dimensions: [
      { label: "Evidence strength", value: 4.1 },
      { label: "Trade-off reasoning", value: 3.4 },
      { label: "Strategic fit", value: 3.8 },
      { label: "Recommendation strength", value: 3.1 },
      { label: "Implementation realism", value: 2.8 },
    ],
    agenda: [
      "Should the firm expand now or preserve flexibility for a later move?",
      "Which explanation best accounts for the company’s recent performance?",
      "What would make one recommendation meaningfully more defensible than the others?",
    ],
    outcomes: [
      "Strengthens the link between preparation and classroom participation.",
      "Improves the quality of group discussion before class begins.",
      "Helps faculty compare groups on substance rather than presentation polish alone.",
      "Creates more disciplined disagreement and more meaningful in-class contrast.",
    ],
    roomSetup: [
      "Best used with group preparation before a faculty-led classroom session.",
      "Works well when all groups respond to the same agenda items and dimensions.",
      "Particularly strong in case-method teaching, executive cohorts, and experiential capstone courses.",
    ],
    detailSections: [
      {
        title: "Why group preparation becomes stronger",
        body: [
          "Most group preparation sessions drift because there is no visible frame for what good thinking should look like. PulseRoom gives the group a shared structure: the same question, the same lenses, and a live signal that reveals whether the team is actually converging or simply talking around the issue.",
          "That changes the quality of preparation. Students are forced to make their reasoning clearer, test it against dimensions, and surface internal divergence before they arrive in class.",
        ],
      },
      {
        title: "Why the classroom discussion becomes better",
        body: [
          "When the faculty-led discussion begins, students are not starting from scratch. They have already wrestled with the case inside a disciplined structure. This makes the classroom less about first reactions and more about comparing shaped judgments, uncovering assumptions, and pushing the analysis further.",
          "The result is a more consequential conversation: less repetition, more contrast, and stronger learning value from the group-to-group differences.",
        ],
      },
      {
        title: "Where it creates the most impact",
        body: [
          "This use case is most valuable when preparation quality strongly affects classroom quality. It is particularly useful in case-heavy programs, field-based learning, consulting practicums, and executive formats where group interpretation needs to become more rigorous before the room convenes.",
        ],
      },
    ],
  },
  {
    slug: "panel-discussion",
    category: "Academic",
    title: "Audience-responsive panel discussion",
    cardTitle: "Panel discussion",
    excerpt:
      "Panels become more relevant when the moderator and speakers can see where the audience is following, questioning, or losing connection during the session.",
    intro: [
      "Panel discussions often sound energetic but remain disconnected from what the audience is actually understanding. PulseRoom gives the audience a live voice without interrupting the panel, and gives the moderator a better basis for steering the conversation.",
      "This changes moderation from sequence management to room-reading. The panel can react to visible audience movement rather than relying only on prepared prompts or a few raised hands.",
    ],
    flow: [
      {
        title: "Set the audience lens",
        note: "Define the dimensions that matter for the panel such as clarity, relevance, credibility, and practical value.",
      },
      {
        title: "Let the audience signal live",
        note: "Participants respond throughout the panel on their phones without disrupting the speaking flow.",
      },
      {
        title: "Read the disconnection early",
        note: "The moderator sees which dimension is weakening and where the panel is becoming too abstract, repetitive, or unconvincing.",
      },
      {
        title: "Reconnect the conversation",
        note: "Questions, prompts, and redirections become more grounded in what the audience actually needs.",
      },
    ],
    dimensions: [
      { label: "Clarity", value: 3.7 },
      { label: "Relevance", value: 4.0 },
      { label: "Credibility", value: 3.5 },
      { label: "Actionability", value: 2.9 },
    ],
    agenda: [
      "What is this panel helping the audience understand more clearly?",
      "Which viewpoint feels most useful for real-world decisions?",
      "Where is the discussion still too abstract for the audience to act on?",
    ],
    outcomes: [
      "Keeps panels connected to audience understanding rather than speaker momentum.",
      "Gives moderators a live basis for redirection.",
      "Creates richer audience participation without turning the room chaotic.",
      "Improves the perceived value of the session for both speakers and hosts.",
    ],
    roomSetup: [
      "Works well for academic panels, conference sessions, leadership forums, and expert roundtables.",
      "Usually strongest with 3 or 4 dimensions so the audience response remains intuitive.",
      "The moderator should reference the live signal during the conversation, not just at the end.",
    ],
    detailSections: [
      {
        title: "Why panels often lose the room",
        body: [
          "Panels usually drift when the speakers continue building on their own talking points without noticing that the audience has stopped following or stopped caring. In most settings there is no structured signal to show that drift while it is still reversible.",
          "PulseRoom solves that elegantly. The audience can keep responding, the moderator can see whether clarity or relevance is slipping, and the discussion can be pulled back toward what the room genuinely needs.",
        ],
      },
      {
        title: "What becomes better for the moderator",
        body: [
          "Moderation becomes more precise. Instead of asking the next prepared question because it sits on a script, the moderator can redirect toward the dimension that is visibly weak. That creates a panel that feels more alive and less performative.",
        ],
      },
      {
        title: "What becomes better for the audience",
        body: [
          "Audience members feel that their attention and understanding matter to the shape of the session. That raises engagement because the room is no longer passive; it becomes part of the panel’s intelligence.",
        ],
      },
    ],
  },
  {
    slug: "research-meeting",
    category: "Academic",
    title: "Research meeting",
    cardTitle: "Research meeting",
    excerpt:
      "Research groups use PulseRoom to structure proposals, findings, interpretations, and next steps so meetings become more productive, focused, and cumulative.",
    intro: [
      "Research meetings usually combine uncertainty, partial evidence, and multiple interpretations. That makes them rich, but also easy to repeat. PulseRoom helps the group work on the same question through shared dimensions so disagreement becomes clearer and more useful.",
      "Instead of leaving with a vague sense of where everyone stands, the group sees whether the gap is in evidence, interpretation, relevance, or readiness for the next move.",
    ],
    flow: [
      {
        title: "Frame the research question",
        note: "Choose one issue the meeting needs to move: proposal quality, interpretation of findings, methodological choice, or next-step readiness.",
      },
      {
        title: "Evaluate through shared dimensions",
        note: "Use lenses such as rigor, novelty, clarity, feasibility, and relevance so the discussion has structure.",
      },
      {
        title: "Locate the true disagreement",
        note: "The group can see whether the problem is weak evidence, uncertain interpretation, or low confidence in what should happen next.",
      },
      {
        title: "Leave with clearer direction",
        note: "The meeting produces a stronger basis for revision, validation, pilot work, or decision.",
      },
    ],
    dimensions: [
      { label: "Rigor", value: 4.2 },
      { label: "Novelty", value: 3.1 },
      { label: "Interpretive clarity", value: 3.0 },
      { label: "Feasibility", value: 3.8 },
      { label: "Next-step readiness", value: 2.7 },
    ],
    agenda: [
      "Are the findings strong enough to support this interpretation?",
      "Which limitation matters most before we proceed further?",
      "Is this proposal ready for review, pilot, or redesign?",
    ],
    outcomes: [
      "Makes research discussion more focused and less circular.",
      "Improves the usefulness of disagreement by making its source visible.",
      "Clarifies what needs more work before the next milestone.",
      "Creates a stronger memory of the room’s actual judgment.",
    ],
    roomSetup: [
      "Works well in faculty research groups, lab meetings, doctoral seminars, and interdisciplinary project teams.",
      "A five-dimension structure is often appropriate because research work carries several meaningful layers.",
      "Most useful when the meeting must end with a clearer next step rather than an open-ended conversation.",
    ],
    detailSections: [
      {
        title: "Why it matters in research settings",
        body: [
          "Research conversations are valuable precisely because they surface uncertainty, but that same uncertainty can make meetings repetitive. PulseRoom gives the room a disciplined language for where the uncertainty actually lives. That keeps the discussion intellectually rich without allowing it to become diffuse.",
        ],
      },
      {
        title: "How it improves collaboration",
        body: [
          "A research group becomes more productive when members can see whether they are disagreeing about evidence, framing, feasibility, or timing. Those are very different problems, and treating them as the same only wastes discussion time. PulseRoom makes those distinctions visible.",
          "That also helps early-career researchers participate more constructively because they can signal where they are unconvinced even when they do not want to dominate the room verbally.",
        ],
      },
      {
        title: "Why the record matters",
        body: [
          "After a research meeting, the group usually needs to remember more than action points. It needs to remember why the room leaned one way, where doubt remained, and what still needs evidence. PulseRoom preserves that memory in a form that is far more useful than plain notes.",
        ],
      },
    ],
  },
  {
    slug: "presentation-evaluation",
    category: "Academic",
    title: "Presentation evaluation",
    cardTitle: "Presentation evaluation",
    excerpt:
      "PulseRoom turns presentation feedback into a richer view of what the audience actually understood, valued, and found convincing.",
    intro: [
      "Most presentation feedback is either too soft, too delayed, or too blunt. A single score hides the difference between strong argument, weak evidence, uneven delivery, and low audience impact. PulseRoom gives evaluators a better structure.",
      "This works especially well in classrooms, demo days, student presentations, pitch rounds, and faculty review settings where the presenter needs feedback that can actually guide improvement.",
    ],
    flow: [
      {
        title: "Make the criteria visible",
        note: "The audience knows from the start what dimensions matter, which immediately improves the quality of attention.",
      },
      {
        title: "Capture response during the presentation",
        note: "Participants respond as the presentation unfolds rather than trying to remember everything afterwards.",
      },
      {
        title: "Read the shape, not just the score",
        note: "The resulting pattern shows whether the issue lies in clarity, substance, evidence, relevance, or delivery.",
      },
      {
        title: "Turn feedback into revision",
        note: "The presenter receives a stronger basis for improvement than applause, comments, or a single rating number.",
      },
    ],
    dimensions: [
      { label: "Argument clarity", value: 3.9 },
      { label: "Evidence quality", value: 3.1 },
      { label: "Audience impact", value: 4.0 },
      { label: "Structure", value: 3.4 },
    ],
    agenda: [
      "Did the presentation build a convincing case for its core recommendation?",
      "Was the evidence strong enough for the conclusion being drawn?",
      "What should be improved before the next version is presented?",
    ],
    outcomes: [
      "Creates clearer and more actionable evaluation.",
      "Reduces the vagueness of conventional feedback.",
      "Helps presenters distinguish content problems from delivery problems.",
      "Makes evaluation more transparent for both host and participants.",
    ],
    roomSetup: [
      "Useful in student presentations, pitch reviews, capstones, thesis defenses, and hosted presentation sessions.",
      "The dimensions should be shown to the audience in advance so the evaluation frame is clear.",
      "Works best when the presentation is followed by visible reflection on the resulting shape.",
    ],
    detailSections: [
      {
        title: "Why the feedback gets better",
        body: [
          "Feedback improves when listeners know what they are evaluating and can respond while the memory is fresh. PulseRoom creates both conditions. The audience is more attentive because it knows the frame, and the presenter gets feedback that is shaped rather than generic.",
        ],
      },
      {
        title: "Why presenters find it useful",
        body: [
          "Presenters often hear comments that are emotionally loaded but analytically weak. With PulseRoom, they can see whether the presentation landed well on clarity but not on evidence, or whether it felt compelling without feeling credible enough. That level of specificity is what makes feedback actionable.",
        ],
      },
      {
        title: "Why hosts benefit too",
        body: [
          "Hosts, faculty, and organizers also gain a better view of session quality. They can compare presentations more fairly, identify patterns across presenters, and use a visible structure rather than relying on informal impressions alone.",
        ],
      },
    ],
  },
  {
    slug: "meetings",
    category: "Executive",
    title: "Meetings — small and large",
    cardTitle: "Meetings",
    excerpt:
      "PulseRoom works in both compact decision rooms and larger gatherings by making alignment, reservations, and confidence visible while the meeting is still live.",
    intro: [
      "Many meetings create the illusion of alignment because everyone has had airtime. But spoken airtime is not the same as shared understanding. PulseRoom lets the room see where it is converging, where it is split, and where confidence is still too weak for a clean decision.",
      "That matters in both small and large settings. A six-person leadership meeting needs clarity without false consensus. A large group meeting needs structure so that the room does not disappear into vague agreement or passive silence.",
    ],
    flow: [
      {
        title: "Put one decision on the table",
        note: "Frame the meeting around a concrete agenda question instead of a broad topic label.",
      },
      {
        title: "Use dimensions that fit the decision",
        note: "Evaluate the issue through lenses such as urgency, strategic fit, operational readiness, and downside risk.",
      },
      {
        title: "Read the room live",
        note: "The signal shows whether the meeting is aligned, divided, or pretending to be more settled than it really is.",
      },
      {
        title: "Leave with a stronger decision record",
        note: "The room has a clearer rationale for what it decided and what still needs work.",
      },
    ],
    dimensions: [
      { label: "Strategic fit", value: 4.1 },
      { label: "Operational readiness", value: 3.2 },
      { label: "Risk confidence", value: 2.8 },
      { label: "Urgency", value: 4.4 },
    ],
    agenda: [
      "Should we move now or wait for stronger readiness?",
      "Which option best balances strategic fit with execution risk?",
      "What is the room actually aligned on, and what is still unresolved?",
    ],
    outcomes: [
      "Reduces false consensus in small meetings.",
      "Makes large-group participation more structured and visible.",
      "Improves the defensibility of the final decision.",
      "Helps leaders see whether apparent agreement is genuine.",
    ],
    roomSetup: [
      "Works in leadership meetings, program reviews, project steering groups, town-hall style decision sessions, and cross-functional meetings.",
      "Three or four dimensions are usually enough for executive use unless the issue is unusually complex.",
      "Most effective when each agenda item is framed as a real decision, not as a discussion topic.",
    ],
    detailSections: [
      {
        title: "Why it helps small meetings",
        body: [
          "In small meetings the danger is false consensus. Everyone has spoken, the room feels collegial, and the meeting moves on without anyone knowing whether the reservations were minor or fundamental. PulseRoom exposes that difference while there is still time to deal with it.",
        ],
      },
      {
        title: "Why it helps large meetings",
        body: [
          "In large meetings the danger is invisibility. A few voices dominate, the rest of the room becomes unreadable, and leaders leave with an incomplete picture of how the group actually understood the issue. PulseRoom gives the larger room a visible structure without making the session heavy or bureaucratic.",
        ],
      },
      {
        title: "Why the record is important",
        body: [
          "A useful meeting should leave behind more than minutes and next steps. It should preserve the shape of the room’s alignment: where confidence was strong, where risk still felt uncomfortable, and why one decision was preferred over another. That is where PulseRoom becomes especially valuable.",
        ],
      },
    ],
  },
  {
    slug: "brainstorming",
    category: "Executive",
    title: "Structured brainstorming",
    cardTitle: "Brainstorming",
    excerpt:
      "PulseRoom helps brainstorming stay creative without becoming vague by giving the room live structure around the quality and direction of emerging ideas.",
    intro: [
      "Brainstorming sessions usually fail in one of two ways. They either become too loose, producing a long list of disconnected ideas, or they become too quickly evaluative, killing momentum before promising directions have had time to form. PulseRoom creates a better middle ground.",
      "The room can generate ideas freely while still using a visible dimensional frame to see which ideas feel promising, feasible, distinctive, or strategically relevant.",
    ],
    flow: [
      {
        title: "Open the idea field",
        note: "Start with an agenda prompt that invites contribution rather than forcing premature closure.",
      },
      {
        title: "Signal against live dimensions",
        note: "Use dimensions such as originality, value, feasibility, and strategic fit to shape emerging judgment.",
      },
      {
        title: "Notice which ideas gain energy",
        note: "The room can see which directions are growing in conviction and which are intriguing but weak.",
      },
      {
        title: "Move from ideation to selection",
        note: "The session transitions naturally from exploration to more disciplined choice-making.",
      },
    ],
    dimensions: [
      { label: "Originality", value: 4.5 },
      { label: "Customer value", value: 3.8 },
      { label: "Feasibility", value: 2.7 },
      { label: "Strategic fit", value: 3.3 },
    ],
    agenda: [
      "Which idea directions feel most worth developing further?",
      "Where do we see genuine originality rather than just variation?",
      "What idea is exciting but currently too weak on feasibility or fit?",
    ],
    outcomes: [
      "Keeps brainstorming energetic without letting it become shapeless.",
      "Creates a visible bridge between ideation and prioritization.",
      "Helps teams preserve nuance instead of killing ideas too early.",
      "Improves the quality of follow-through after the session ends.",
    ],
    roomSetup: [
      "Best used in innovation workshops, product concept sessions, campaign ideation, and strategic offsites.",
      "A four-dimension frame is often strong because it balances creativity with decision pressure.",
      "Can be used in an early exploratory mode and then again later when narrowing choices.",
    ],
    detailSections: [
      {
        title: "Why it protects creativity",
        body: [
          "Creativity suffers when evaluation arrives too early, but it also suffers when there is no meaningful structure at all. PulseRoom helps the room stay generative while still building a shared sense of which ideas are gaining substance and why.",
        ],
      },
      {
        title: "Why it improves idea quality",
        body: [
          "Because ideas are being read against dimensions, the room is less likely to fall in love with novelty alone. A striking concept can still show weakness on feasibility or fit, while a modest-looking idea may reveal unusual strength on value or practical viability. That balance makes the session more useful.",
        ],
      },
      {
        title: "Why it helps after the workshop",
        body: [
          "Many brainstorming sessions die after the room ends because nobody can clearly see what was promising and why. PulseRoom preserves a more usable memory of the emerging judgment, making it easier to move into prototyping, testing, or prioritization.",
        ],
      },
    ],
  },
  {
    slug: "policies-and-strategies",
    category: "Executive",
    title: "Policies and strategies",
    cardTitle: "Making policies and strategies",
    excerpt:
      "PulseRoom helps leadership teams shape policies and strategies through visible trade-offs, making alignment stronger before the decision gets formalized.",
    intro: [
      "Policy and strategy work usually looks orderly on paper while remaining messy in the room. Different stakeholders care about different risks, timelines, consequences, and standards of success. PulseRoom helps those trade-offs become explicit.",
      "Instead of relying on broad statements of support, the room can see whether the group is aligned on intent but split on feasibility, aligned on need but divided on timing, or aligned on principle but unconvinced on implementation.",
    ],
    flow: [
      {
        title: "Define the policy or strategic question",
        note: "Frame the issue as a specific choice the room needs to shape or resolve.",
      },
      {
        title: "Make the trade-off dimensions visible",
        note: "Use dimensions such as long-term value, risk, feasibility, stakeholder impact, and execution readiness.",
      },
      {
        title: "Watch the room’s judgment form",
        note: "The live pattern shows where the proposal is strong and where resistance is still rational or unresolved.",
      },
      {
        title: "Strengthen the final policy or strategy",
        note: "Leaders can refine the proposal before formal approval or rollout.",
      },
    ],
    dimensions: [
      { label: "Long-term value", value: 4.3 },
      { label: "Risk balance", value: 3.1 },
      { label: "Feasibility", value: 2.9 },
      { label: "Stakeholder impact", value: 3.7 },
      { label: "Execution readiness", value: 2.6 },
    ],
    agenda: [
      "Does this strategy create long-term value without creating fragile execution risk?",
      "Which policy design is most defensible across stakeholders?",
      "Where is the room aligned on principle but still divided on implementation?",
    ],
    outcomes: [
      "Makes trade-offs visible before policies are locked in.",
      "Improves strategic discussion quality by surfacing the real source of disagreement.",
      "Helps leaders refine proposals before rollout.",
      "Produces stronger institutional memory around why a direction was chosen.",
    ],
    roomSetup: [
      "Useful for leadership teams, boards, policy groups, transformation programs, and governance-heavy decision sessions.",
      "A five-dimension structure often works well because policy and strategy decisions usually carry multiple competing criteria.",
      "Strongest when the room is trying to improve a proposal, not merely vote on it.",
    ],
    detailSections: [
      {
        title: "Why trade-offs need to be seen",
        body: [
          "Policies and strategies fail when a room speaks in headline language but does not confront the actual trade-offs. PulseRoom forces those trade-offs into view. A proposal may look attractive on long-term value while still feeling weak on execution readiness or risk balance. That visibility improves the quality of the final design.",
        ],
      },
      {
        title: "Why leadership teams find it useful",
        body: [
          "Leadership teams often need a tool that is more intelligent than a poll and lighter than a full analytical model. PulseRoom sits well in that space. It helps the room think together, not just report opinions, and it creates a clearer basis for refinement before the strategy or policy is formalized.",
        ],
      },
      {
        title: "Why it matters after approval",
        body: [
          "A policy or strategy does not become easier once it is approved. In many cases the hardest part is remembering what concerns were visible, what confidence existed, and what needed watching during implementation. PulseRoom gives the team a far better starting record for that next stage.",
        ],
      },
    ],
  },
  {
    slug: "budget-and-hiring",
    category: "Executive",
    title: "Budget and hiring decisions",
    cardTitle: "Budget and hiring decisions",
    excerpt:
      "PulseRoom helps high-stakes allocation decisions reveal their real logic by making trade-offs visible while the room is still discussing them.",
    intro: [
      "Budget and hiring decisions often carry the heaviest organizational consequences and the thinnest clarity. The room may agree that something matters, yet still disagree on urgency, affordability, risk, fairness, or timing. PulseRoom gives those tensions a clearer structure.",
      "That makes the meeting more defensible. Rather than relying on whoever argued most forcefully, the room can see how support is distributed across the dimensions that actually matter.",
    ],
    flow: [
      {
        title: "Put the allocation question in focus",
        note: "Frame the decision as a clear choice rather than an open-ended discussion about needs.",
      },
      {
        title: "Evaluate across the real criteria",
        note: "Use dimensions such as urgency, ROI, people impact, affordability, and implementation timing.",
      },
      {
        title: "See where support is conditional",
        note: "The room can tell the difference between broad support and support that depends on one weak dimension being improved.",
      },
      {
        title: "Decide with clearer rationale",
        note: "The meeting ends with a stronger explanation for the choice that was made or deferred.",
      },
    ],
    dimensions: [
      { label: "Urgency", value: 4.4 },
      { label: "Business return", value: 3.6 },
      { label: "People impact", value: 4.0 },
      { label: "Affordability", value: 2.7 },
      { label: "Implementation timing", value: 3.0 },
    ],
    agenda: [
      "Which hiring request is genuinely urgent rather than simply desirable?",
      "Does this budget move create enough value to justify its timing and trade-offs?",
      "Where is support strong in principle but weak once affordability is considered?",
    ],
    outcomes: [
      "Improves clarity in high-stakes resource allocation rooms.",
      "Separates emotional support from operational feasibility.",
      "Makes the rationale behind the final call easier to defend later.",
      "Helps teams revisit deferred requests with a better memory of why they were deferred.",
    ],
    roomSetup: [
      "Best used in headcount planning, annual budgets, investment review meetings, and resource-allocation sessions.",
      "A five-dimension view is often appropriate because these decisions are usually multi-constraint by nature.",
      "Works especially well when the room needs to compare several requests against the same decision frame.",
    ],
    detailSections: [
      {
        title: "Why it helps with difficult choices",
        body: [
          "Budget and hiring decisions can easily become political because everyone sees only one part of the logic. PulseRoom gives the room a shared map of the trade-offs. That makes disagreement more legitimate, because it is tied to visible criteria rather than personal force or rank.",
        ],
      },
      {
        title: "Why the result feels fairer",
        body: [
          "When people can see that a request was strong on impact but weak on affordability, or strong on urgency but weak on timing, the final outcome feels less arbitrary. Even when the decision is difficult, the reasoning is more transparent.",
        ],
      },
      {
        title: "Why it matters over time",
        body: [
          "Allocation decisions are rarely final forever. Requests come back. Conditions change. PulseRoom creates a stronger reference point for those future conversations by preserving how the room weighed the trade-offs at the time.",
        ],
      },
    ],
  },
  {
    slug: "retrospectives",
    category: "Executive",
    title: "Retrospectives that drive action",
    cardTitle: "Retrospectives",
    excerpt:
      "PulseRoom helps retrospectives move beyond storytelling into clearer diagnosis, better learning, and stronger follow-through.",
    intro: [
      "A retrospective is only useful when it produces more than shared memory. The room needs to identify what actually went well, where the real friction lived, and what deserves change before the next cycle. PulseRoom gives that discussion a live structure.",
      "Instead of ending with a long list of observations, the group can see which issues feel important, well-understood, fixable, and worth acting on first.",
    ],
    flow: [
      {
        title: "Choose the issue worth revisiting",
        note: "Focus on one process, decision, sprint, launch, or incident area at a time.",
      },
      {
        title: "Read it through learning dimensions",
        note: "Use lenses such as root-cause clarity, customer impact, team control, and actionability.",
      },
      {
        title: "Separate noise from signal",
        note: "The room can see which concerns are emotionally loud but weak on actionability, and which ones are strong enough to prioritize.",
      },
      {
        title: "Leave with clearer next moves",
        note: "The retrospective ends with a stronger basis for ownership and improvement.",
      },
    ],
    dimensions: [
      { label: "Root-cause clarity", value: 3.5 },
      { label: "Customer impact", value: 4.0 },
      { label: "Team control", value: 2.9 },
      { label: "Actionability", value: 3.7 },
    ],
    agenda: [
      "What issue deserves attention because it is both important and actionable?",
      "Where do we understand the symptom but not yet the root cause?",
      "What should change first before the next cycle begins?",
    ],
    outcomes: [
      "Improves the diagnostic quality of retrospectives.",
      "Reduces circular discussion and complaint loops.",
      "Strengthens prioritization of improvement actions.",
      "Makes ownership and follow-through easier to assign.",
    ],
    roomSetup: [
      "Useful after sprints, projects, launches, incidents, and cross-functional collaboration cycles.",
      "Usually strongest with 4 dimensions so the room can separate importance from controllability and actionability.",
      "Works best when the session aims to improve the next cycle, not just record frustration about the last one.",
    ],
    detailSections: [
      {
        title: "Why retrospectives often disappoint",
        body: [
          "Retrospectives disappoint when they remain descriptive. The team tells the story again, agrees that a few things were frustrating, and leaves without a sharper sense of where effort should actually go. PulseRoom helps the room move from recollection to diagnosis.",
        ],
      },
      {
        title: "How the live structure helps",
        body: [
          "The dimensional frame makes it easier to distinguish a real leverage point from a noisy grievance. A problem may be significant but not controllable, or deeply felt but still poorly understood. Those distinctions are what make the final actions more intelligent.",
        ],
      },
      {
        title: "Why action quality improves",
        body: [
          "Because the meeting has a clearer picture of which issue is most worth moving, follow-through becomes stronger. Teams leave with decisions that are better prioritized and better grounded in what the room actually learned.",
        ],
      },
    ],
  },
];

export function getUseCaseBySlug(slug: string) {
  return useCases.find((item) => item.slug === slug);
}
