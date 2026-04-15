import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "PulseRoom Pricing",
  description: "PulseRoom pricing, billing access, and commercial options.",
};

export default function PricingPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <Pricing />
    </main>
  );
}