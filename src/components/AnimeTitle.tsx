
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface AnimeTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AnimeTitle: React.FC<AnimeTitleProps> = ({
  title,
  subtitle,
  className,
  size = 'md'
}) => {
  const sizes = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-5xl'
  };
  
  return (
    <div className={cn("text-center relative", className)}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="h-1 w-6 bg-anime-red rounded-full"></div>
        <Star className="h-5 w-5 text-anime-red" />
        <div className="h-1 w-6 bg-anime-red rounded-full"></div>
      </div>
      
      <h2 className={cn(
        "font-bold text-anime-blue relative inline-block", 
        sizes[size]
      )}>
        <span className="relative z-10">{title}</span>
        <span className="absolute -bottom-1 left-0 w-full h-3 bg-anime-red/20 rounded-full -z-0"></span>
      </h2>
      
      {subtitle && (
        <p className="text-sm md:text-base text-anime-blue/60 mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default AnimeTitle;
