import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import focusWordmark from "@/assets/focus-wordmark.png";
import focusLogo from "@/assets/focus-logo.jpeg";
import { X } from "lucide-react";

const Footer = () => {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <footer className="py-10 bg-background border-t border-border relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <button 
          onClick={() => setShowEgg(true)}
          className="hover:scale-110 active:scale-95 transition-transform duration-300 group"
        >
          <img 
            src={focusWordmark} 
            alt="Focus" 
            className="h-7 opacity-60 grayscale brightness-[2] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" 
          />
        </button>
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-xs text-dim/50">
            © {new Date().getFullYear()} Focus. Todos os direitos reservados.
          </p>
          <a href="mailto:focus-solutions@outlook.com" className="text-[10px] text-dim/30 hover:text-dim/60 transition-colors">
            focus-solutions@outlook.com
          </a>
        </div>
      </div>

      <AnimatePresence>
        {showEgg && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
            onClick={() => setShowEgg(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 w-full flex flex-col items-center text-center p-4"
            >
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] w-full bg-radial-glow opacity-40 blur-[120px] pointer-events-none" 
                   style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)' }} />
              
              <div className="relative mb-6 w-full flex justify-center">
                <img src={focusWordmark} alt="Focus Logotipo" className="h-16 md:h-24 w-auto object-contain relative z-10 brightness-[2] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
              </div>
              
              <p className="relative z-10 text-white/50 uppercase tracking-[0.4em] text-xs font-bold">
                Soluções Tecnológicas
              </p>
              
              <div className="relative z-10 mt-10 flex gap-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
