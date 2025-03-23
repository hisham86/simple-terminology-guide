
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

const Tooltip = ({
  content,
  children,
  className,
  position = "top",
  delay = 0,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  const calculatePosition = () => {
    if (!childRef.current || !tooltipRef.current) return;

    const childRect = childRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let x = 0;
    let y = 0;

    switch (position) {
      case "top":
        x = childRect.width / 2 - tooltipRect.width / 2;
        y = -tooltipRect.height - 8;
        break;
      case "bottom":
        x = childRect.width / 2 - tooltipRect.width / 2;
        y = childRect.height + 8;
        break;
      case "left":
        x = -tooltipRect.width - 8;
        y = childRect.height / 2 - tooltipRect.height / 2;
        break;
      case "right":
        x = childRect.width + 8;
        y = childRect.height / 2 - tooltipRect.height / 2;
        break;
    }

    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    if (delay === 0) {
      setIsVisible(true);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={childRef}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            "absolute z-50 animate-fade-in min-w-[200px] max-w-[320px] p-3 rounded-lg border border-border bg-popover text-popover-foreground shadow-lg",
            positionClasses[position],
            className
          )}
          style={{
            transform: `translate(${coords.x}px, ${coords.y}px)`,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
