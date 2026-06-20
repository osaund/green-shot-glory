import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Hole Out Golf"
          className="w-36 h-36 md:w-48 md:h-48 mb-10 object-contain"
        />

        {/* Small top label */}
        <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-10">
          Daily Competition
        </span>

        {/* Main headline */}
        <div className="text-center max-w-4xl px-2">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-background uppercase leading-[1] tracking-tight">
            Hole Out Golf
          </h1>
        </div>

        {/* Subtle divider */}
        <div className="w-12 h-px bg-accent/40 my-8" />

        {/* Subhead */}
        <p className="text-background/70 text-center text-lg md:text-xl max-w-lg leading-relaxed mb-3">
          Enter our daily hole-in-one competition for your chance to win
        </p>
        <p className="font-display text-accent text-5xl md:text-6xl uppercase tracking-tight text-center mb-12">
          £1,000
        </p>
      </div>
    </section>
  );
};

