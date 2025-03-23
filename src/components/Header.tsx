
import { useState } from "react";
import { Search, Menu, X, Cat, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="bg-white py-4 px-6 md:px-12 sticky top-0 z-40 border-b-4 border-anime-red shadow-md animate-slide-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 rounded-full bg-anime-red flex items-center justify-center text-white font-bold text-lg group-hover:animate-wiggle transition-all">
            <Cat className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight hidden sm:block group-hover:text-anime-red transition-colors font-anime">
            コンポ⼀ネント<span className="text-anime-blue">マスター</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link to="/" className="text-anime-blue hover:text-anime-red transition-colors flex items-center gap-1 font-bold">
              <Sparkles className="h-4 w-4" /> ホーム
            </Link>
            <Link to="/apple-components" className="text-anime-blue hover:text-anime-red transition-colors font-bold">
              アップル
            </Link>
            <Link to="/material-components" className="text-anime-blue hover:text-anime-red transition-colors font-bold">
              マテリアル
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anime-blue h-4 w-4" />
              <input 
                type="text" 
                placeholder="検索..."
                className="pl-9 pr-4 py-2 rounded-full text-sm border-2 border-anime-blue bg-white"
              />
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-anime-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu with improved animation and no duplicated elements */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-anime-red animate-slide-down">
          <nav className="flex flex-col space-y-4 p-6">
            <Link 
              to="/" 
              className="text-anime-blue hover:text-anime-red transition-colors flex items-center gap-1 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="h-4 w-4" /> ホーム
            </Link>
            <Link 
              to="/apple-components" 
              className="text-anime-blue hover:text-anime-red transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              アップル
            </Link>
            <Link 
              to="/material-components" 
              className="text-anime-blue hover:text-anime-red transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              マテリアル
            </Link>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anime-blue h-4 w-4" />
              <input 
                type="text" 
                placeholder="検索..."
                className="w-full pl-9 pr-4 py-2 rounded-full text-sm border-2 border-anime-blue bg-white"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
