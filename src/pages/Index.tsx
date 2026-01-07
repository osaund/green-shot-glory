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
  "description": "Win £1,000 for a hole-in-one at partner golf courses across the UK. Dual-camera verification system.",
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
        title="Hole Out Golf - Win £1,000 for a Hole-in-One | UK Golf Courses"
        description="Get a hole-in-one and win £1,000! Dual-camera verification system at partner golf courses across the UK. Subscribe monthly or pay per shot."
        canonicalUrl="https://holeoutgolf.co.uk/"
        keywords="hole in one prize, golf prizes UK, par 3 challenge, win £1000 golf, hole out golf"
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
