import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-primary flex flex-col items-center justify-center px-6 py-20">
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
        <p className="font-display text-accent text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.15em] mt-4">
          The UK's Daily Hole-In-One Challenge
        </p>
      </div>

      {/* Subtle divider */}
      <div className="w-12 h-px bg-accent/40 my-8" />

      {/* Subhead */}
      <p className="text-background/80 text-center text-lg md:text-xl max-w-lg leading-relaxed mb-2">
        Sink it on camera. Walk away with
      </p>
      <p className="font-display text-accent text-5xl md:text-6xl uppercase tracking-tight text-center mb-4">
        £1,000
      </p>
      <p className="text-background/60 text-center text-sm md:text-base max-w-md mb-10">
        New winners every day. No membership required. Just show up and take your shot.
      </p>

      <Link
        to="/courses"
        className="bg-accent text-foreground px-8 py-3 rounded-full uppercase tracking-[0.15em] text-xs font-bold text-center shadow-lg transition-transform active:scale-95 hover:scale-[1.02]"
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
