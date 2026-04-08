import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  asChild?: boolean;
}

export const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ children, className, glowColor = 'rgba(255, 255, 255, 0.05)', asChild = false, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={(node: any) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          buttonRef.current = node;
        }}
        className={cn(
          "relative overflow-hidden rounded-full px-8 py-3.5 font-medium transition-all group active:scale-95 inline-flex duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {asChild ? children : (
          <>
            {/* Background base */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0 border border-border transition-colors group-hover:bg-accent pointer-events-none" />

            {/* Dynamic spot light on hover */}
            <motion.div
               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
               style={{
                 background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor} 0%, transparent 70%)`
               }}
            />
            
            {/* Animated border glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
              style={{
                 background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                 padding: '1px',
                 maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
                 borderRadius: 'inherit'
              }}
            />

            <div className="relative z-20 flex items-center justify-center gap-2 pointer-events-none">
              {children}
            </div>
          </>
        )}
      </Comp>
    );
  }
);
GlowingButton.displayName = "GlowingButton";
