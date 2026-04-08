import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowingButton } from "@/components/ui/glowing-button";
import { FlameButton } from "@/components/ui/flame-button";
import InteractiveGrid from "@/components/InteractiveGrid";
import focusLogo from "@/assets/focus-logo.jpeg";
import focusWordmark from "@/assets/focus-wordmark.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Abstract background */}
      {/* Abstract background */}
      <div className="absolute inset-0 bg-background z-0">
        <InteractiveGrid />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <img src={focusLogo} alt="Focus" className="h-28 w-28 md:h-36 md:w-36 rounded-3xl object-cover shadow-2xl shadow-background grayscale brightness-125" />
              <div className="absolute -inset-1 rounded-3xl opacity-20 animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, hsl(0 0% 100% / 0.2), transparent)" }}
              />
            </div>
          </motion.div>

          <motion.img
            src={focusWordmark}
            alt="Focus"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-10 md:h-14 mb-4 opacity-90"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-dim" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-dim">Soluções Tecnológicas Freelance</span>
          </motion.div>

        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
          >
            <span className="text-foreground">Tecnologia que</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-500 animate-shimmer bg-[length:200%_auto]">Impulsiona</span>
            <span className="text-foreground"> seu Negócio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-dim max-w-2xl mb-10 leading-relaxed"
          >
            Desenvolvemos soluções digitais sob medida para transformar a operação da sua empresa com eficiência, inovação e excelência técnica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#orcamento">
              <FlameButton className="text-sm px-6 py-4">
                Solicitar Orçamento <ArrowRight className="ml-1 w-4 h-4" />
              </FlameButton>
            </a>
            <a href="#projetos">
              <FlameButton className="text-sm px-6 py-4">
                Ver Projetos
              </FlameButton>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
          >
            {[
              { num: "10+", label: "Projetos Entregues" },
              { num: "95%", label: "Satisfação" },
              { num: "24h", label: "Suporte Ágil" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{s.num}</div>
                <div className="text-xs text-dim mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
