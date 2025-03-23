
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Tooltip from "./Tooltip";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { toast } from "sonner";
import { Zap } from "lucide-react";

export interface ComponentInfo {
  name: string;
  description: string;
  category: string;
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
  const [isRevealed, setIsRevealed] = useState(false);
  
  const handleClick = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      toast.success(`It's ${component.name}!`, {
        icon: <Zap className="h-4 w-4" />
      });
    }
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
  
  return (
    <Tooltip content={tooltipContent} position="top">
      <div
        className={cn(
          "interactive-component rounded-lg transition-all p-4 cursor-pointer transform hover:scale-105",
          isHighlighted && "ring-2 ring-primary ring-opacity-70 shadow-lg animate-pulse",
          !isRevealed && "bg-pokeball bg-contain bg-no-repeat bg-center",
          isRevealed ? "bg-card" : "bg-card/5",
          className
        )}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        {isRevealed ? (
          children || (
            <div className="flex flex-col items-center justify-center gap-2 animate-scale-in">
              <div className="text-3xl font-bold text-foreground">{component.name}</div>
              <div className="text-sm text-muted-foreground">Click to highlight, double-click to copy</div>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-8">
            <div className="text-xl font-bold mb-2 text-primary">???</div>
            <div className="text-sm">Click to reveal!</div>
          </div>
        )}
      </div>
    </Tooltip>
  );
};

export default ComponentDisplay;
