
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Tooltip from "./Tooltip";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { toast } from "sonner";
import { AppleComponent } from "@/data/appleComponents";

interface AppleComponentDisplayProps {
  component: AppleComponent;
  className?: string;
}

const AppleComponentDisplay: React.FC<AppleComponentDisplayProps> = ({ 
  component, 
  className
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
      toast.success(`"${component.name}" copied to clipboard!`);
    } else {
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleImageError = () => {
    setImageError(true);
    console.log(`Failed to load image for: ${component.name}`);
  };
  
  const tooltipContent = (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">{component.name}</h4>
      <p className="text-sm opacity-80">{component.description}</p>
      <div className="text-xs bg-muted/50 inline-block px-2 py-1 rounded">
        {component.category}
      </div>
      <p className="text-xs text-muted-foreground mt-2">Double-click to copy</p>
    </div>
  );

  // Generate a color based on the component name (for fallback display)
  const getColorFromName = (name: string) => {
    const colors = [
      "bg-blue-100", "bg-green-100", "bg-yellow-100", 
      "bg-red-100", "bg-purple-100", "bg-pink-100"
    ];
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  
  return (
    <Tooltip content={tooltipContent} position="top">
      <div
        className={cn(
          "interactive-element rounded-lg transition-all overflow-hidden h-full flex flex-col",
          isHighlighted && "ring-2 ring-primary ring-opacity-70 shadow-lg",
          className
        )}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <div className={cn(
          "relative pb-[70%] overflow-hidden", 
          imageError ? getColorFromName(component.name) : "bg-muted/30"
        )}>
          {imageError ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
              <span className="font-medium text-center text-secondary/80">
                {component.name}
              </span>
            </div>
          ) : (
            <img 
              src={component.imageUrl} 
              alt={component.name}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              onError={handleImageError}
            />
          )}
        </div>
        <div className="p-4 flex-grow bg-card">
          <h3 className="font-semibold mb-2">{component.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{component.description}</p>
          <div className="mt-2 text-xs inline-flex items-center bg-muted/50 px-2 py-0.5 rounded">
            {component.category}
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default AppleComponentDisplay;
