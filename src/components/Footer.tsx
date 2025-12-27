import { Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Hole Out Golf</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              The premier hole-in-one competition platform for golfers and clubs across the UK.
            </p>
            <a 
              href="https://www.instagram.com/hole_out_golf/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 px-4 py-2.5 rounded-full transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">@hole_out_golf</span>
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-lg text-accent">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link to="/" onClick={scrollToTop} className="hover:text-accent hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/courses" onClick={scrollToTop} className="hover:text-accent hover:translate-x-1 transition-all inline-block">Courses</Link></li>
              <li><Link to="/why-us" onClick={scrollToTop} className="hover:text-accent hover:translate-x-1 transition-all inline-block">Why Us</Link></li>
              <li><Link to="/faqs" onClick={scrollToTop} className="hover:text-accent hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
              <li><a href="https://app.holeoutgolf.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Sign In</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-lg text-accent">Contact Us</h4>
            <ul className="space-y-4 text-primary-foreground/80">
              <li>
                <a href="mailto:info@holeoutgolf.co.uk" className="flex items-center gap-3 hover:text-accent transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span>info@holeoutgolf.co.uk</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>Nationwide Coverage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/60 text-sm">
          <p className="mb-3">&copy; 2025 Hole Out Golf Ltd. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link to="/terms" onClick={scrollToTop} className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" onClick={scrollToTop} className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
