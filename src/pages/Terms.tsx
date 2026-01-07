import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions - Competition Rules"
        description="Terms and conditions for participating in the Hole Out Golf hole-in-one competition."
        canonicalUrl="https://holeoutgolf.co.uk/terms"
        keywords="terms and conditions, golf competition rules, hole in one terms, competition eligibility"
      />
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
          <div className="bg-card rounded-2xl p-12 shadow-lg border border-border">
            <div className="text-6xl mb-6">🏌️</div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Coming Soon!</h2>
            <p className="text-muted-foreground text-lg">
              We're not live yet, but we're working hard to get everything ready for you. 
              Our full terms and conditions will be available here once we launch.
            </p>
            <p className="text-muted-foreground mt-4">
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Terms;
