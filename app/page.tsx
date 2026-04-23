import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import HowItWorks from "@/components/sections/HowItWorks";
import Outcomes from "@/components/sections/Outcomes";
import Pricing from "@/components/sections/Pricing";
import UseCases from "@/components/sections/UseCases";
import DemoVideo from "@/components/sections/DemoVideo";
import VisualProof from "@/components/sections/VisualProof";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <WhyNow />
      <HowItWorks />
      <Outcomes />
      <Pricing />
      <UseCases />
      <DemoVideo />
      <VisualProof />
      <FAQ />
      <FinalCTA />
    </>
  );
}