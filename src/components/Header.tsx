
import { useState } from "react";
import { Search, Menu, X, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-md py-4 px-6 md:px-12 sticky top-0 z-40 border-b border-border/40 animate-slide-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg group-hover:animate-pulse transition-all">
            <Zap className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight hidden sm:block group-hover:text-primary transition-colors">
            Component Master
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
              <Sparkles className="h-4 w-4" /> Home
            </Link>
            <Link to="/apple-components" className="text-foreground/80 hover:text-primary transition-colors">
              Apple Components
            </Link>
            <Link to="/material-components" className="text-foreground/80 hover:text-primary transition-colors">
              Material Components
            </Link>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
          </nav>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search components..."
              className="pl-9 pr-4 py-2 rounded-full text-sm border border-border bg-background"
            />
          </div>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-slide-down">
          <nav className="flex flex-col space-y-4 p-6">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
              <Sparkles className="h-4 w-4" /> Home
            </Link>
            <Link to="/apple-components" className="text-foreground/80 hover:text-primary transition-colors">
              Apple Components
            </Link>
            <Link to="/material-components" className="text-foreground/80 hover:text-primary transition-colors">
              Material Components
            </Link>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search components..."
                className="w-full pl-9 pr-4 py-2 rounded-full text-sm border border-border bg-background"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
