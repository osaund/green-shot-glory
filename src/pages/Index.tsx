import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ClubSection } from "@/components/ClubSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <HowItWorks />
      <PricingSection />
      <ClubSection />
      <Footer />
    </div>
  );
};

export default Index;
