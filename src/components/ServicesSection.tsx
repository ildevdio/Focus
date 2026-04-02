import { motion } from "framer-motion";
import { Code, BarChart3, Shield, Smartphone, Database, Headphones } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    desc: "Aplicações web e mobile sob medida, com foco em performance e escalabilidade.",
  },
  {
    icon: BarChart3,
    title: "Sistemas de Gestão",
    desc: "ERPs, CRMs e dashboards personalizados para otimizar seus processos corporativos.",
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    desc: "Proteção de dados, adequação à LGPD e auditorias de segurança digital.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps nativos e híbridos para iOS e Android com design intuitivo.",
  },
  {
    icon: Database,
    title: "Integração de Sistemas",
    desc: "Conectamos suas ferramentas para fluxo de dados unificado e automatizado.",
  },
  {
    icon: Headphones,
    title: "Consultoria & Suporte",
    desc: "Acompanhamento técnico contínuo e consultoria estratégica em TI.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-28 bg-background relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px glow-line" />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">O que fazemos</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Nossos Serviços</h2>
        <p className="text-dim mt-4 max-w-xl mx-auto leading-relaxed">
          Soluções completas em tecnologia da informação para empresas de todos os portes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-7 rounded-2xl bg-card border border-border hover:border-dim/30 card-shine transition-all duration-500"
          >
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-glow-soft transition-colors duration-300">
              <s.icon className="w-5 h-5 text-dim group-hover:text-foreground transition-colors duration-300" />
            </div>
            <h3 className="text-base font-semibold text-card-foreground mb-2 font-sans">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
