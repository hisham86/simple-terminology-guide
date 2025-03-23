
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-8 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                T
              </div>
              <h3 className="text-lg font-bold">Terminology Guide</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Helping non-technical people understand web development terminology with interactive learning.
            </p>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-accent" />
              <span>and Lovable</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Guide</a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Examples</a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Discord</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Terminology Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
