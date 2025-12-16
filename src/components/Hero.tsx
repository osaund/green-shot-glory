import heroGolf from "@/assets/hero-golf.jpg";
import logo from "@/assets/logo.png";

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
        <img src={logo} alt="Hole Out Golf Logo" className="w-32 h-32 mx-auto mb-6" />
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hole Out Golf<br />
          <span className="text-accent">Win Cash Prizes</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Get a hole-in-one on any par 3 and win big. Our dual-camera system captures every shot, verifies every ace, and rewards every winner.
        </p>
      </div>
    </section>
  );
};
