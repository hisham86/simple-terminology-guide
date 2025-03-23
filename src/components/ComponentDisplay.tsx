
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Tooltip from "./Tooltip";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { toast } from "sonner";
import { Cat, Star } from "lucide-react";

export interface ComponentInfo {
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
}

interface ComponentDisplayProps {
  component: ComponentInfo;
  className?: string;
  children?: React.ReactNode;
}

const ComponentDisplay: React.FC<ComponentDisplayProps> = ({ 
  component, 
  className,
  children
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleClick = () => {
    setIsHighlighted(true);
    // Reset highlight after animation duration
    setTimeout(() => setIsHighlighted(false), 1000);
  };
  
  const handleDoubleClick = async () => {
    const success = await copyToClipboard(component.name);
    if (success) {
      toast.success(`"${component.name}" copied to clipboard!`, {
        icon: <Star className="h-4 w-4 text-yellow-400" />,
        style: { background: '#232e87', color: 'white', border: '2px solid #ea384c' }
      });
    } else {
      toast.error("Failed to copy to clipboard");
    }
  };
  
  const handleImageError = () => {
    setImageError(true);
    console.log(`Failed to load image for: ${component.name}`);
  };
  
  // Generate a color based on the component name (for fallback display)
  const getColorFromName = (name: string) => {
    const colors = [
      "bg-red-100", "bg-blue-100", "bg-yellow-100", 
      "bg-green-100", "bg-purple-100", "bg-pink-100"
    ];
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  
  const tooltipContent = (
    <div className="space-y-2 anime-border p-3 bg-white">
      <h4 className="font-bold text-lg text-anime-blue">{component.name}</h4>
      <p className="text-sm">{component.description}</p>
      <div className="text-xs bg-anime-red text-white inline-block px-2 py-1 rounded">
        {component.category}
      </div>
      <p className="text-xs text-anime-blue mt-2 font-bold">ダブルクリックでコピー</p>
    </div>
  );
  
  return (
    <Tooltip content={tooltipContent} position="top">
      <div
        className={cn(
          "anime-card transition-all overflow-hidden h-full flex flex-col cursor-pointer",
          isHighlighted && "ring-4 ring-anime-red animate-pop",
          className
        )}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <div className={cn(
          "relative pb-[70%] overflow-hidden border-b-2 border-anime-blue", 
          imageError || !component.imageUrl ? getColorFromName(component.name) : "bg-white"
        )}>
          {imageError || !component.imageUrl ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
              <span className="font-bold text-center text-anime-blue">
                {component.name}
              </span>
            </div>
          ) : (
            <img 
              src={component.imageUrl} 
              alt={component.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={handleImageError}
            />
          )}
          <div className="absolute top-2 right-2 bg-anime-red text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            <Cat className="h-3 w-3" />
          </div>
        </div>
        <div className="p-4 flex-grow bg-white">
          <h3 className="font-bold text-anime-blue mb-2">{component.name}</h3>
          <p className="text-sm line-clamp-2">{component.description}</p>
          <div className="mt-2 text-xs inline-flex items-center bg-anime-red/10 text-anime-red px-2 py-0.5 rounded font-bold">
            {component.category}
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default ComponentDisplay;
