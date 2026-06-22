import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-start pt-20 md:pt-28 px-6 pb-20 bg-cover bg-center bg-no-repeat"
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
          className="w-28 h-28 md:w-36 md:h-36 mb-6 object-contain"
        />

        {/* Small top label */}
        <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-6">
          Daily Competition
        </span>

        {/* Main headline */}
        <div className="text-center max-w-4xl px-2">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background uppercase leading-[1] tracking-tight">
            Hole Out Golf
          </h1>
        </div>

        {/* Subtle divider */}
        <div className="w-12 h-px bg-accent/40 my-6" />

        {/* Subhead */}
        <p className="text-background/70 text-center text-lg md:text-xl max-w-lg leading-relaxed mb-3">
          Enter our daily hole-in-one competition for your chance to win
        </p>
        <p className="font-display text-accent text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-center mb-12 leading-none">
          <span className="inline-block align-middle">£</span>
          <span className="inline-block align-middle">1,000</span>
        </p>
      </div>
    </section>
  );
};
