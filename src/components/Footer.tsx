import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Hole Out Golf</h3>
            <p className="text-primary-foreground/80 mb-4">
              The premier hole-in-one prize platform for golfers and clubs.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              holeoutgolf.co.uk
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/why-us" className="hover:text-accent transition-colors">Why Us</Link></li>
              <li><Link to="/faqs" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><a href="https://app.holeoutgolf.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@holeoutgolf.co.uk</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nationwide Coverage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; 2025 Hole Out Golf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
