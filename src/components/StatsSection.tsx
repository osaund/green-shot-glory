import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Trophy, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Registered Players",
    color: "text-primary"
  },
  {
    icon: Target,
    value: "15,000+",
    label: "Attempts This Month",
    color: "text-accent"
  },
  {
    icon: Trophy,
    value: "47",
    label: "Holes-in-One Verified",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: "85",
    label: "Partner Courses",
    color: "text-accent"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Numbers Speak
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of players competing for cash prizes every week
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
