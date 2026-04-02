import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-full group/carousel">
      <img
        src={images[current]}
        alt={`${title} - ${current + 1}`}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-all duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === current ? "bg-foreground w-6" : "bg-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

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

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {projects.slice(0, 2).map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-dim/30 transition-all duration-500"
          >
            <div className="relative overflow-hidden h-56 md:h-80">
              <ImageCarousel images={p.images} title={p.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-2 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent text-dim border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{p.title}</h3>
              <p className="text-xs text-dim mb-2 uppercase tracking-wider">{p.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>

              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {p.features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-dim mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {p.link && (
                  <Button variant="hero-outline" size="sm" asChild>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" /> Acessar Projeto <ArrowUpRight className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                )}
                {p.github && (
                  <Button variant="ghost" size="sm" asChild className="text-dim hover:text-foreground">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" /> GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button variant="hero-outline" size="lg" asChild>
          <Link to="/projetos">
            Veja todos <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
