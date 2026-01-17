import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import HowItWorks from "@/components/sections/HowItWorks";
import Outcomes from "@/components/sections/Outcomes";
import UseCases from "@/components/sections/UseCases";
import VisualProof from "@/components/sections/VisualProof";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
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
      <VisualProof />
      <section id="engage" className="scroll-mt-24">
        <CtaGrid title={site.sections.engagementTitle} subtitle={site.sections.engagementSubtitle} />
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
