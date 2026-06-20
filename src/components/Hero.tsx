import heroGolf from "@/assets/hero-golf.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-primary overflow-hidden flex flex-col items-center justify-between py-12 px-6">
      {/* Decorative honey accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-accent" />

      {/* Arched image frame */}
      <div className="relative mt-12 z-10">
        <div className="w-64 h-80 md:w-80 md:h-96 rounded-t-full border-[6px] border-accent overflow-hidden shadow-2xl bg-primary/80">
          <img
            src={heroGolf}
            alt="Hole Out Golf — premium hole-in-one challenge"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Floating Est. badge */}
        <div className="absolute -bottom-4 -right-4 bg-accent text-foreground w-20 h-20 rounded-full flex items-center justify-center text-[11px] font-bold tracking-tight uppercase leading-none text-center shadow-lg">
          Est.<br />2024
        </div>
      </div>

      {/* Headline & subhead */}
      <div className="relative z-10 flex flex-col items-center gap-4 mt-8 text-center">
        <h1 className="font-display text-5xl md:text-7xl text-background uppercase leading-[0.9] tracking-tight">
          Hole Out Golf<br />
          <span className="text-accent">Hole-in-One Challenge</span>
        </h1>
        <p className="text-background/80 text-base md:text-lg max-w-md leading-relaxed">
          Enter our daily hole-in-one competition for your chance to win £1,000. Dual-camera capture on every shot.
        </p>
      </div>

      {/* CTAs */}
      <div className="relative z-10 w-full max-w-sm flex flex-col gap-3 mt-8">
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
