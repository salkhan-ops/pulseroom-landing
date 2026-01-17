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

export default function Page() {
  return (
    <>
      <Hero />
      <WhyNow />
      <HowItWorks />
      <Outcomes />
      <UseCases />
      <DemoVideo />
      <VisualProof />
      <section id="engage" className="scroll-mt-24">
        <CtaGrid title={site.sections.engagementTitle} subtitle={site.sections.engagementSubtitle} />
      </section>
      <SchedulePilot />
      <FAQ />
      <FinalCTA />
    </>
  );
}
