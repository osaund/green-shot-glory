import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ClubSection } from "@/components/ClubSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <HowItWorks />
      <PricingSection />
      <ClubSection />
    </div>
  );
};

export default Index;
