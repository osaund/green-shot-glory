import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

const pricingOptions = [
  {
    name: "Pay Per Shot",
    description: "Perfect for occasional players",
    price: "£5",
    period: "per course",
    features: [
      "Scan QR code at tee box",
      "Instant payment via mobile",
      "Full shot verification",
      "Win £1,000 on hole-in-one",
      "No commitment required",
    ],
    variant: "outline" as const,
  },
  {
    name: "Monthly Subscription",
    description: "Best value for regular golfers",
    price: "£9.99",
    period: "per month",
    popular: true,
    features: [
      "One attempt per day",
      "Access to all partner courses",
      "Priority shot processing",
      "Win £1,000 on hole-in-one",
      "Detailed stats tracking",
      "Cancel anytime",
    ],
    cta: "Coming Soon",
    variant: "prize" as const,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flexible Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the option that works best for your game
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index}
              className={`relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                option.popular ? "border-2 border-accent" : ""
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{option.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {option.description}
                </CardDescription>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-foreground">
                    {option.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {option.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {option.cta && (
                  <Button 
                    size="lg" 
                    variant={option.variant}
                    className="w-full text-lg h-12"
                  >
                    {option.cta}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          All payments processed securely. QR code payment available at every participating tee box.
        </p>
      </div>
    </section>
  );
};
