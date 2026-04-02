import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectVitae from "@/assets/project-vitae.jpg";
import projectSpartan from "@/assets/project-spartan.jpg";

const projects = [
  {
    title: "Focus Vitae",
    subtitle: "Copiloto Pessoal",
    desc: "Assistente inteligente que organiza sua rotina, metas e produtividade pessoal com IA integrada.",
    img: projectVitae,
    github: "https://github.com/ildevdio/Focusvitae",
    tags: ["IA", "Produtividade", "Mobile"],
  },
  {
    title: "Focus Spartan",
    subtitle: "Gestão Ergonômica",
    desc: "Sistema completo de monitoramento e gestão ergonômica para ambientes corporativos, promovendo saúde e bem-estar.",
    img: projectSpartan,
    github: "https://github.com/ildevdio/Spartan",
    tags: ["Saúde", "Gestão", "Dashboard"],
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="py-28 bg-card relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px glow-line" />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Portfólio</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Resultados Reais</h2>
        <p className="text-dim mt-4 max-w-xl mx-auto leading-relaxed">
          Projetos entregues com excelência e impacto mensurável.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-dim/30 transition-all duration-500"
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent text-dim border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">{p.title}</h3>
              <p className="text-xs text-dim mb-2 uppercase tracking-wider">{p.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-5">
                <Button variant="hero-outline" size="sm" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" /> Ver no GitHub <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
