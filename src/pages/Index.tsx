import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { PlayerSection } from "@/components/PlayerSection";
import { ClubSection } from "@/components/ClubSection";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <PricingSection />
      <PlayerSection />
      <ClubSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
