
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Star, Sparkles, Moon } from 'lucide-react';

const AnimeFooter: React.FC = () => {
  return (
    <footer className="bg-anime-blue text-white py-12 border-t-4 border-anime-red relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 red-dot-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-anime-red flex items-center justify-center">
              <Cat className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold">コンポ⼀ネント<span className="text-anime-red">マスター</span></h2>
          </div>
          
          <div className="flex gap-6">
            <Link to="/" className="hover:text-anime-red transition-colors flex items-center gap-1">
              <Sparkles className="h-4 w-4" /> ホーム
            </Link>
            <Link to="/apple-components" className="hover:text-anime-red transition-colors">
              アップル
            </Link>
            <Link to="/material-components" className="hover:text-anime-red transition-colors">
              マテリアル
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            &copy; 2023 コンポ⼀ネントマスター | All rights reserved
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-anime-red transition-colors">
              <Star className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-anime-red transition-colors">
              <Moon className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-anime-red transition-colors">
              <Sparkles className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimeFooter;
