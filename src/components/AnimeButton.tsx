
import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md font-bold transition-transform hover:scale-105 active:scale-95 text-white",
  {
    variants: {
      variant: {
        red: "bg-anime-red hover:bg-anime-red/90",
        blue: "bg-anime-blue hover:bg-anime-blue/90",
        outline: "bg-transparent border-2 border-anime-blue text-anime-blue hover:bg-anime-blue/10",
      },
      size: {
        sm: "text-sm h-8 px-3",
        md: "text-base h-10 px-4 py-2",
        lg: "text-lg h-12 px-6",
      }
    },
    defaultVariants: {
      variant: "red",
      size: "md"
    }
  }
);

export interface AnimeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  shadow?: boolean;
}

const AnimeButton = React.forwardRef<HTMLButtonElement, AnimeButtonProps>(
  ({ className, variant, size, shadow = true, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          shadow && variant === 'red' && "shadow-[0_4px_0_#b52e3c] active:shadow-[0_2px_0_#b52e3c] active:translate-y-[2px]",
          shadow && variant === 'blue' && "shadow-[0_4px_0_#1a2266] active:shadow-[0_2px_0_#1a2266] active:translate-y-[2px]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

AnimeButton.displayName = "AnimeButton";

export default AnimeButton;
