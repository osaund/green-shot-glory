import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Menu, X, Home, Info, HelpCircle, MapPin, Trophy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Courses", url: "/courses", icon: MapPin },
  { title: "Why Us", url: "/why-us", icon: Info },
  { title: "How to Claim", url: "/how-to-claim", icon: Trophy },
  { title: "FAQs", url: "/faqs", icon: HelpCircle },
];

export function Layout({ children }: LayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center">
            {/* Mobile hamburger menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 md:hidden"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src={logo} alt="Hole Out Golf Logo" className="h-10 w-10 ml-2 md:ml-0" />
              <span className="ml-3 text-white font-bold text-lg">Hole Out Golf</span>
            </Link>
          </div>

          {/* Desktop navigation - right aligned */}
          <nav className="hidden md:flex items-center gap-1 ml-auto mr-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                  location.pathname === item.url
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <a href="https://app.holeoutgolf.co.uk" target="_blank" rel="noopener noreferrer">
            <Button variant="prize" size="sm">
              Sign In
            </Button>
          </a>
        </div>
        
        {/* Mobile expandable navigation */}
        {isExpanded && (
          <div className="border-t border-white/10 bg-primary/98 md:hidden">
            <nav className="px-4 py-3">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      onClick={() => setIsExpanded(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === item.url
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
