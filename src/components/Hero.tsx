import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import heroGolf from "@/assets/hero-golf.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroGolf})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 backdrop-blur-sm border border-accent/30">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Weekly Cash Prizes</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hole Out Golf<br />
          <span className="text-accent">£1,000 Cash Prize</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
          Get a hole-in-one on any par 3 and win big. Our dual-camera system captures every shot, verifies every ace, and rewards every winner. Subscribe or pay per shot via QR code.
        </p>

        {/* Prize Counter */}
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="text-sm font-medium text-white/80 mb-2">Current Prize Pool</div>
          <div className="text-6xl md:text-7xl font-bold text-accent mb-2 font-mono tracking-tight">
            £1,000
          </div>
          <div className="text-sm text-white/70">Rolls over weekly if no winner</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="prize" className="text-lg px-8 py-6 h-auto">
            Register as Player
          </Button>
          <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
            Partner with Us
          </Button>
        </div>
      </div>
    </section>
  );
};
