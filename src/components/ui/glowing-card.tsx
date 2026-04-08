import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  roundedClass?: string;
  showParticles?: boolean;
}

const GrayParticle = React.memo(({ delay }: { delay: number }) => {
  const randomY = React.useMemo(() => (Math.random() - 0.5) * 15, []);
  const randomX = React.useMemo(() => (Math.random() - 0.5) * 15, []);
  const randomDuration = React.useMemo(() => 1.5 + Math.random(), []);
  
  const startPos = React.useMemo(() => {
    const edge = Math.floor(Math.random() * 4);
    const pos = Math.random() * 100;
    if (edge === 0) return { top: '0%', left: `${pos}%` }; 
    if (edge === 1) return { top: '100%', left: `${pos}%` }; 
    if (edge === 2) return { left: '0%', top: `${pos}%` }; 
    return { left: '100%', top: `${pos}%` }; 
  }, []);

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
      className="absolute w-1 h-1 rounded-full bg-white/40 blur-[0.5px] pointer-events-none"
      style={startPos}
    />
  );
});
GrayParticle.displayName = "GrayParticle";

export const GlowingCard = ({ 
  children, 
  className, 
  glowColor = 'rgba(255, 255, 255, 0.05)', 
  roundedClass = 'rounded-2xl',
  showParticles = true 
}: GlowingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-visible bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
        roundedClass,
        // We filter out layout classes from the transition container if necessary, 
        // but typically the caller provides them for the overall card layout.
      )}
    >
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className={cn("absolute inset-0 pointer-events-none z-10 overflow-hidden", roundedClass)}
               style={{
                 background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, ${glowColor} 0%, transparent 100%)`
               }}
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={cn("absolute inset-0 pointer-events-none z-0", roundedClass)}
              style={{
                 background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.2) 0%, transparent 100%)`,
                 padding: '1px',
                 maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
              }}
            />

            {showParticles && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-0 pointer-events-none"
              >
                {[...Array(8)].map((_, i) => (
                  <GrayParticle key={i} delay={i * 0.15} />
                ))}
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      <div className={cn("relative z-20 h-full w-full", roundedClass, className)}>
        {children}
      </div>
    </div>
  );
};
