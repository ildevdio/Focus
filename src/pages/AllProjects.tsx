import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ArrowLeft, Filter, ExternalLink, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, categories } from "@/data/projects";
import { Link } from "react-router-dom";

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-full group/carousel">
      <img
        src={images[current]}
        alt={`${title} - ${current + 1}`}
        loading="lazy"
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

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-10 pb-6 container mx-auto px-4">
        <Button variant="ghost" size="sm" asChild className="mb-6 text-dim hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar ao início
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Portfólio Completo</span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Todos os Projetos</h1>
          <p className="text-dim mt-4 max-w-xl mx-auto leading-relaxed">
            Explore nossos projetos por categoria e descubra como transformamos ideias em soluções reais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-dim border-border hover:border-dim/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Filter className="w-12 h-12 text-dim mx-auto mb-4" />
            <p className="text-dim text-lg">Nenhum projeto nesta categoria ainda.</p>
            <p className="text-muted-foreground text-sm mt-2">Novos projetos em breve!</p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-10 max-w-4xl mx-auto">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-dim/30 transition-all duration-500"
              >
                {/* Image carousel */}
                <div className="relative overflow-hidden h-64 md:h-96">
                  <ImageCarousel images={p.images} title={p.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full bg-background/80 text-dim border border-border backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent text-dim border border-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm text-dim mb-4 uppercase tracking-wider">{p.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

                  {/* Features list */}
                  <div className="grid sm:grid-cols-2 gap-2 mb-8">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-dim mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
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
        )}
      </div>
    </div>
  );
};

export default AllProjects;
