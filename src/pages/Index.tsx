import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ClubSection } from "@/components/ClubSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <PricingSection />
      <ClubSection />
      <Footer />
    </div>
  );
};

export default Index;
