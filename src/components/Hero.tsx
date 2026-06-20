import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-primary flex flex-col items-center justify-center px-6 py-20">
      {/* Logo */}
      <img
        src={logo}
        alt="Hole Out Golf"
        className="w-20 h-20 md:w-24 md:h-24 mb-6 object-contain"
      />

      {/* Small top label */}
      <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-8">
        Daily Competition · Open Now
      </span>

      {/* Main headline */}
      <div className="text-center max-w-4xl">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-background uppercase leading-[0.85] tracking-tight">
          Hole Out
          <br />
          <span className="text-accent">Golf</span>
        </h1>
      </div>

      {/* Subtle divider */}
      <div className="w-12 h-px bg-accent/40 my-8" />

      {/* Subhead */}
      <p className="text-background/70 text-center text-base md:text-lg max-w-md leading-relaxed mb-2">
        Enter our daily hole-in-one competition for your chance to win
      </p>
      <p className="font-display text-accent text-4xl md:text-5xl uppercase tracking-tight text-center mb-10">
        £1,000
      </p>

      {/* CTAs */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        <a
          href="#challenge"
          className="w-full bg-accent text-foreground py-4 rounded-full uppercase tracking-[0.15em] text-xs font-bold text-center shadow-lg transition-transform active:scale-95 hover:scale-[1.02]"
        >
          Book Your Session
        </a>
        <a
          href="#courses"
          className="w-full border border-background/20 text-background py-4 rounded-full uppercase tracking-[0.15em] text-xs font-semibold text-center transition-colors hover:bg-background/10"
        >
          The Course
        </a>
      </div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
      />
    </section>
  );
};
