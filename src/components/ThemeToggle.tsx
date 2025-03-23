
import React from 'react';
import { Globe, Flag } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ThemeToggleProps {
  variant?: 'header' | 'footer';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'header' }) => {
  const { theme, setTheme } = useTheme();
  
  const themeOptions = [
    { value: 'japanese', label: '日本語', icon: <Flag className="h-4 w-4" /> },
    { value: 'english', label: 'English', icon: <Globe className="h-4 w-4" /> },
    { value: 'korean', label: '한국어', icon: <Flag className="h-4 w-4" /> }
  ];

  return (
    <div className={`theme-toggle ${variant === 'footer' ? 'mt-4' : ''}`}>
      <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value as 'japanese' | 'english' | 'korean')}>
        {themeOptions.map((option) => (
          <ToggleGroupItem 
            key={option.value} 
            value={option.value}
            aria-label={`Switch to ${option.value} theme`}
            className={`${
              variant === 'footer' 
                ? 'text-white hover:bg-white/20 data-[state=on]:bg-white/30 data-[state=on]:text-white' 
                : 'text-anime-blue hover:bg-anime-blue/10 data-[state=on]:bg-anime-blue data-[state=on]:text-white'
            } flex gap-1 items-center`}
          >
            {option.icon}
            <span className="hidden md:inline">{option.label}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default ThemeToggle;
