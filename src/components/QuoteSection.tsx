import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const niches = [
  "Sistemas de Informação (SI)",
  "Gestão Empresarial (ERP/CRM)",
  "E-commerce & Marketplace",
  "Saúde & Bem-estar",
  "Educação & EdTech",
  "Finanças & FinTech",
  "Logística & Supply Chain",
  "Indústria & IoT",
  "Outro",
];

const QuoteSection = () => {
  const { toast } = useToast();
  const [selectedNiche, setSelectedNiche] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Orçamento enviado!",
      description: "Entraremos em contato em até 24 horas.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
    setSelectedNiche("");
  };

  return (
    <section id="orcamento" className="py-28 bg-background relative">
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
                <button
                  key={n}
                  onClick={() => setSelectedNiche(n)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                    selectedNiche === n
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-dim border-border hover:border-dim/50 hover:text-foreground"
                  }`}
                >
                  {n}
                </button>
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
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send className="w-4 h-4 mr-2" /> Enviar Solicitação
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
