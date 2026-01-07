import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - How We Handle Your Data"
        description="Privacy policy for Hole Out Golf - how we collect, use, and protect your personal information."
        canonicalUrl="https://holeoutgolf.co.uk/privacy"
        keywords="privacy policy, data protection, GDPR, golf competition privacy"
      />
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="bg-card rounded-2xl p-12 shadow-lg border border-border">
            <div className="text-6xl mb-6">🔒</div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Coming Soon!</h2>
            <p className="text-muted-foreground text-lg">
              We're not live yet, but we're working hard to get everything ready for you. 
              Our full privacy policy will be available here once we launch.
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

export default Privacy;
