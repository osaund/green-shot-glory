import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Camera } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Increase Foot Traffic",
    description: "Attract more players with our exciting hole-in-one challenge"
  },
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description: "More rounds played means more revenue for your club"
  },
  {
    icon: Camera,
    title: "Professional Setup",
    description: "We install and maintain all camera equipment at no cost"
  },
  {
    icon: Building2,
    title: "Brand Partnership",
    description: "Feature your club in our player network and marketing"
  }
];

export const ClubSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">For Golf Clubs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn your par 3 holes into player magnets with zero investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="shadow-2xl border-2 border-primary/30 bg-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Partner?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our growing network of partner courses. We handle the technology, 
                you enjoy the increased traffic and player satisfaction.
              </p>
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8"
                asChild
              >
                <a href="mailto:info@holeoutgolf.co.uk?subject=Partnership Inquiry">
                  Contact Us
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
