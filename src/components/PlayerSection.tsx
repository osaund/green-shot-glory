import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, User } from "lucide-react";

const benefits = [
  "Instant eligibility at all partner courses",
  "Real-time shot verification",
  "Automatic prize notification",
  "Track your attempts and stats",
  "Flexible pricing: Subscribe or pay per shot",
  "Easy payment via QR code at each tee box",
];

export const PlayerSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Join as a Player</CardTitle>
                  <CardDescription className="text-lg mt-1">
                    Free registration. Unlimited daily attempts.
                  </CardDescription>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  What You Get:
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-6 mb-6 border border-accent/30">
                <p className="text-center text-foreground font-medium mb-3">
                  <span className="text-accent font-bold text-2xl">£0</span> to register. 
                  <span className="text-accent font-bold text-2xl ml-2">Play every day</span> for your chance.
                </p>
                <p className="text-center text-sm text-muted-foreground">
                  Choose subscription for unlimited daily attempts or pay per shot at the tee box
                </p>
              </div>

              <Button size="lg" variant="prize" className="w-full text-lg h-14">
                Register Now - It's Free
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Registration takes less than 2 minutes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
