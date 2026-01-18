import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import HowItWorks from "@/components/sections/HowItWorks";
import Outcomes from "@/components/sections/Outcomes";
import UseCases from "@/components/sections/UseCases";
import DemoVideo from "@/components/sections/DemoVideo";
import VisualProof from "@/components/sections/VisualProof";
import SchedulePilot from "@/components/sections/SchedulePilot";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { CtaGrid } from "@/components/cta/CtaGrid";
import { site } from "@/lib/site";
import GetPulseRoom from "@/components/sections/GetPulseRoom";
import CaseSnapshots from "@/components/sections/CaseSnapshots";

export default function Page() {
  return (
    <>
      <Hero />
      <WhyNow />
      <HowItWorks />
      <Outcomes />

      {/* ✅ Representative scenarios before proof */}
      <CaseSnapshots />

      {/* Keep use cases (more general) */}
      <UseCases />

      {/* Video then proof */}
      <DemoVideo />
      <VisualProof />

      {/* Access strip (web / iOS / Android) */}
      <GetPulseRoom />

      {/* Engagement choices */}
      <section id="engage" className="scroll-mt-24">
        <CtaGrid
          title={site.sections.engagementTitle}
          subtitle={site.sections.engagementSubtitle}
        />
      </section>

      {/* Scheduling immediately after CTAs */}
      <SchedulePilot />

      <FAQ />
      <FinalCTA />
    </>
  );
}