import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-primary flex flex-col items-center justify-center px-6 py-20">
      {/* Logo */}
      <img
        src={logo}
        alt="Hole Out Golf"
        className="w-28 h-28 md:w-36 md:h-36 mb-8 object-contain"
      />

      {/* Small top label */}
      <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-10">
        Daily Competition
      </span>

      {/* Main headline */}
      <div className="text-center max-w-4xl px-2">
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-background uppercase leading-[1] tracking-tight">
          Hole Out
          <br />
          <span className="text-accent">Golf</span>
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

      <Link
        to="/courses"
        className="bg-accent text-foreground px-12 py-5 rounded-full uppercase tracking-[0.15em] text-sm font-bold text-center shadow-lg transition-transform active:scale-95 hover:scale-[1.02]"
      >
        View Courses
      </Link>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
      />
    </section>
  );
};
