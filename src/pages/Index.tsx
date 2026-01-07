import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ClubSection } from "@/components/ClubSection";
import { SEO } from "@/components/SEO";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hole Out Golf",
  "url": "https://holeoutgolf.co.uk",
  "description": "Hole-in-one challenge with £1,000 prize. Dual-camera verification at partner courses across the UK.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://holeoutgolf.co.uk/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Hole Out Golf - £1,000 Hole-in-One Challenge UK"
        description="Enter our hole-in-one challenge for your chance to become a champion. Dual-camera verification system at partner golf courses across the UK. Subscribe monthly or pay per shot."
        canonicalUrl="https://holeoutgolf.co.uk/"
        keywords="hole in one challenge, golf challenge UK, par 3 challenge, win £1000 golf, hole out golf"
        structuredData={homeStructuredData}
      />
      <Hero />
      <VideoSection />
      <HowItWorks />
      <PricingSection />
      <ClubSection />
    </div>
  );
};

export default Index;
