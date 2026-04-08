import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface FlameButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'purple' | 'white';
}

const Particle = React.memo(({ delay, variant = 'purple' }: { delay: number; variant?: 'purple' | 'white' }) => {
  const randomY = React.useMemo(() => -15 - Math.random() * 20, []);
  const randomX = React.useMemo(() => (Math.random() - 0.5) * 30, []);
  const randomDuration = React.useMemo(() => 1 + Math.random(), []);
  const randomLeft = React.useMemo(() => `${Math.random() * 100}%`, []);

  return (
    <motion.div
      initial={{ y: 0, x: 0, opacity: 0, scale: 0.5 }}
      animate={{ 
        y: randomY, 
        x: randomX,
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0],
      }}
      transition={{ 
        duration: randomDuration, 
        repeat: Infinity,
        delay: delay
      }}
      className={cn(
        "absolute w-1 h-1 rounded-full blur-[1px] pointer-events-none",
        variant === 'purple' ? "bg-purple-500/60" : "bg-white/60"
      )}
      style={{
        left: randomLeft,
        top: '10%'
      }}
    />
  );
});
Particle.displayName = "Particle";

export const FlameButton = React.forwardRef<HTMLButtonElement, FlameButtonProps>(
  ({ children, className, asChild = false, size = 'md', variant = 'purple', ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const buttonRef = React.useRef<HTMLElement>(null);
    const Comp = asChild ? Slot : "button";

    const sizeClasses = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-8 py-3.5 text-sm',
      lg: 'px-10 py-4 text-base'
    };

    const variantClasses = {
      purple: "bg-background border-white/20 text-foreground hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)]",
      white: "bg-white border-transparent text-black font-bold hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
    };

    const glowColors = {
      purple: 'rgba(168,85,247,0.6)',
      white: 'rgba(255,255,255,0.8)'
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
      <Comp
        ref={(node: any) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          buttonRef.current = node;
        }}
        className={cn(
          "relative group overflow-visible rounded-full transition-all duration-300",
          "hover:-translate-y-1 hover:scale-105",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Mouse-tracking border glow (Only for purple/bordered variants usually, but let's keep it subtle for white) */}
              {variant === 'purple' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 z-0 pointer-events-none rounded-full"
                  style={{
                     padding: '2px',
                     background: `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, ${glowColors[variant]} 0%, transparent 100%)`,
                     WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude',
                  }}
                />
              )}

              {/* Particles */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-0 pointer-events-none"
              >
                {[...Array(6)].map((_, i) => (
                  <Particle key={i} delay={i * 0.2} variant={variant} />
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex items-center justify-center gap-2 pointer-events-none">
          {children}
        </div>
      </Comp>
    );
  }
);
FlameButton.displayName = "FlameButton";
