import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Hole Out Golf" 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-foreground">Hole Out Golf</span>
        </div>

        {/* Get Started Button */}
        <Button asChild>
          <a 
            href="https://app.holeoutgolf.co.uk" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </Button>
      </div>
    </header>
  );
};
