import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Camera, 
  Trophy, 
  Clock, 
  Users, 
  Zap,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Dual-Camera Verification",
    description: "Our advanced dual-camera system captures every shot from multiple angles, ensuring 100% accurate hole-in-one verification with no disputes."
  },
  {
    icon: Shield,
    title: "Guaranteed Payouts",
    description: "Every prize is fully insured and guaranteed. Quick and reliable payouts for every verified winner."
  },
  {
    icon: Clock,
    title: "Instant Processing",
    description: "AI-powered shot analysis means your hole-in-one is verified in seconds, not days. No waiting, no paperwork."
  },
  {
    icon: Trophy,
    title: "Weekly Prize Pools",
    description: "Prize pools roll over weekly if there's no winner, meaning bigger potential payouts for lucky golfers."
  },
  {
    icon: Users,
    title: "Growing Network",
    description: "Join hundreds of golf courses already partnered with Hole Out Golf. Play at any participating course with one subscription."
  },
  {
    icon: Zap,
    title: "Simple QR Payment",
    description: "No app downloads required. Simply scan the QR code at the tee box, pay, and play. It's that easy."
  }
];

const benefits = [
  "No hidden fees or complicated terms",
  "Works at all partner courses nationwide",
  "Cancel your subscription anytime",
  "Full video replay of every shot",
  "Leaderboards and stats tracking",
  "Exclusive member tournaments"
];

export default function WhyUs() {
  return (
    <div className="bg-background">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-accent">Hole Out Golf?</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The most trusted, transparent, and exciting hole-in-one prize system in golf.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Everything You Need to Win Big
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Shot?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Join thousands of golfers already playing for cash prizes.
          </p>
          <Link to="/">
            <Button variant="prize" size="lg" className="text-lg px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
