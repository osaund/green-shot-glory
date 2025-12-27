import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, UserPlus, Trophy, FileText } from "lucide-react";

const HowToClaim = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up on the App",
      description: "Download the Hole Out Golf app and create your free account. You'll need to provide basic details to get started."
    },
    {
      icon: Trophy,
      title: "Record Your Hole-in-One",
      description: "Make sure your hole-in-one is witnessed and recorded on your scorecard. Take photos of the scorecard and the hole if possible."
    },
    {
      icon: FileText,
      title: "Submit Your Claim",
      description: "Log into the app, navigate to 'Submit Claim' and fill out the claim form with all required details including date, course, hole number, and witness information."
    },
    {
      icon: CheckCircle,
      title: "Claim Verified & Prize Awarded",
      description: "Our team will verify your claim with the golf club. Once approved, your prize will be processed and sent to you."
    }
  ];

  return (
    <>
      <SEO
        title="How to Claim Your Hole-in-One Prize | Hole Out Golf"
        description="Got a hole-in-one? Learn how to claim your prize with Hole Out Golf. Simply sign up on the app and submit your claim in minutes."
        canonicalUrl="https://holeoutgolf.co.uk/how-to-claim"
        keywords="hole in one claim, golf prize claim, how to claim hole in one, golf competition prize"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Claim Your <span className="text-accent">Hole-in-One</span> Prize
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scored an ace? Congratulations! Follow these simple steps to claim your prize.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                      <h2 className="text-xl font-bold text-foreground">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Claim?</h3>
              <p className="text-muted-foreground mb-6">
                Sign up on the app today and submit your hole-in-one claim in just a few minutes.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://app.holeoutgolf.co.uk" target="_blank" rel="noopener noreferrer">
                  Go to the App
                </a>
              </Button>
            </div>

            <div className="mt-12 bg-muted/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">Important Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Claims must be submitted within 7 days of the hole-in-one</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>A witness signature or club verification is required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>The hole-in-one must occur at a participating course during an active competition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToClaim;
