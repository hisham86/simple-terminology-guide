
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Tooltip from "./Tooltip";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { toast } from "sonner";

export interface ElementInfo {
  name: string;
  description: string;
  category: string;
}

interface ElementDisplayProps {
  element: ElementInfo;
  className?: string;
  children?: React.ReactNode;
}

const ElementDisplay: React.FC<ElementDisplayProps> = ({ 
  element, 
  className,
  children
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  const handleClick = () => {
    setIsHighlighted(true);
    // Reset highlight after animation duration
    setTimeout(() => setIsHighlighted(false), 1000);
  };
  
  const handleDoubleClick = async () => {
    const success = await copyToClipboard(element.name);
    if (success) {
      toast.success(`"${element.name}" copied to clipboard!`);
    } else {
      toast.error("Failed to copy to clipboard");
    }
  };
  
  const tooltipContent = (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">{element.name}</h4>
      <p className="text-sm opacity-80">{element.description}</p>
      <div className="text-xs bg-muted/50 inline-block px-2 py-1 rounded">
        {element.category}
      </div>
      <p className="text-xs text-muted-foreground mt-2">Double-click to copy</p>
    </div>
  );
  
  return (
    <Tooltip content={tooltipContent} position="top">
      <div
        className={cn(
          "interactive-element rounded-lg transition-all p-4",
          isHighlighted && "ring-2 ring-primary ring-opacity-70 shadow-lg",
          className
        )}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        {children || (
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-3xl font-bold text-foreground">{element.name}</div>
            <div className="text-sm text-muted-foreground">Click to highlight, double-click to copy</div>
          </div>
        )}
      </div>
    </Tooltip>
  );
};

export default ElementDisplay;
