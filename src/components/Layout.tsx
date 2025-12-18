import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Menu, X, Home, Info, HelpCircle, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Courses", url: "/courses", icon: MapPin },
  { title: "Why Us", url: "/why-us", icon: Info },
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src={logo} alt="Hole Out Golf Logo" className="h-10 w-10 ml-4" />
              <span className="ml-3 text-white font-bold text-lg">Hole Out Golf</span>
            </Link>
          </div>
          <a href="https://app.holeoutgolf.co.uk" target="_blank" rel="noopener noreferrer">
            <Button variant="prize" size="sm">
              Get Started
            </Button>
          </a>
        </div>
        
        {/* Expandable Navigation */}
        {isExpanded && (
          <div className="border-t border-white/10 bg-primary/98">
            <nav className="container mx-auto px-4 py-3">
              <ul className="flex flex-wrap gap-2">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      onClick={() => setIsExpanded(false)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        location.pathname === item.url
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
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
