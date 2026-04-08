import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FlameButton } from "@/components/ui/flame-button";
import { GlowingCard } from "@/components/ui/glowing-card";

const niches = [
  "Sistemas de Informação (SI)",
  "E-commerce & Marketplace",
  "Saúde & Bem-estar",
  "Educação & EdTech",
  "Finanças & FinTech",
  "Logística & Supply Chain",
  "Indústria & IoT",
  "Outro",
];

const StaticParticle = React.memo(({ delay }: { delay: number }) => {
  const randomY = React.useMemo(() => (Math.random() - 0.5) * 40, []);
  const randomX = React.useMemo(() => (Math.random() - 0.5) * 80, []);
  const randomDuration = React.useMemo(() => 1.5 + Math.random() * 2, []);
  
  return (
    <motion.div
      initial={{ y: 0, x: 0, opacity: 0, scale: 0.2 }}
      animate={{ 
        y: randomY, 
        x: randomX,
        opacity: [0, 0.9, 0],
        scale: [0.2, 1.2, 0],
      }}
      transition={{ 
        duration: randomDuration, 
        repeat: Infinity,
        delay: delay
      }}
      className="absolute w-1.5 h-1.5 rounded-full bg-white/80 blur-[0.8px] pointer-events-none z-0"
      style={{
         left: '50%',
         top: '50%',
         transform: 'translate(-50%, -50%)'
      }}
    />
  );
});
StaticParticle.displayName = "StaticParticle";

const QuoteSection = () => {
  const { toast } = useToast();
  const [selectedNiche, setSelectedNiche] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Orçamento - ${selectedNiche || "Geral"}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\nEmpresa: ${formData.company || "Não informada"}\nCategoria: ${selectedNiche || "Não selecionada"}\n\nMensagem:\n${formData.message}`
    );
    window.open(`mailto:focus-solutions@outlook.com?subject=${subject}&body=${body}`, "_self");
    toast({
      title: "Redirecionando para seu e-mail...",
      description: "O orçamento será enviado pelo seu cliente de e-mail.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
    setSelectedNiche("");
  };

  return (
    <section id="orcamento" className="py-28 bg-background relative overflow-hidden section-blend-top section-blend-bottom">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px glow-line" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Orçamento</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Solicite um Orçamento
          </h2>
          <p className="text-dim mt-4 max-w-xl mx-auto leading-relaxed">
            Selecione a categoria do seu projeto e preencha o formulário.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Niche selection */}
          <div className="mb-10">
            <label className="text-xs font-medium uppercase tracking-wider text-dim mb-4 block">
              Categoria do Projeto
            </label>
            <div className="flex flex-wrap gap-2">
              {niches.map((n) => (
                <div key={n} className="relative">
                  {selectedNiche === n && (
                    <div className="absolute inset-0 z-0">
                      <StaticParticle delay={0} />
                      <StaticParticle delay={0.3} />
                      <StaticParticle delay={0.6} />
                      <StaticParticle delay={0.9} />
                      <StaticParticle delay={1.2} />
                      <StaticParticle delay={0.4} />
                      <StaticParticle delay={0.8} />
                    </div>
                  )}
                  <GlowingCard roundedClass="rounded-full" className="relative z-10" showParticles={false}>
                    <button
                      onClick={() => setSelectedNiche(n)}
                      className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
                        selectedNiche === n
                          ? "bg-foreground text-background border-foreground shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                          : "bg-transparent text-dim border-transparent hover:text-foreground"
                      }`}
                    >
                      {n}
                    </button>
                  </GlowingCard>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-dim mb-2 block">Nome</label>
                <Input
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border focus:border-foreground/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-dim mb-2 block">E-mail</label>
                <Input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border focus:border-foreground/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-dim mb-2 block">Empresa</label>
              <Input
                placeholder="Nome da empresa (opcional)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-card border-border focus:border-foreground/30 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-dim mb-2 block">Mensagem</label>
              <Textarea
                required
                rows={5}
                placeholder="Descreva brevemente o que você precisa..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border focus:border-foreground/30 text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
            <FlameButton type="submit" className="w-full py-4">
              <Send className="w-4 h-4 mr-2" /> Enviar Solicitação
            </FlameButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
