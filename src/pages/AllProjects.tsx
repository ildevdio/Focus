import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, categories } from "@/data/projects";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

        {/* Category filter */}
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

      {/* Projects grid */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-dim/30 transition-all duration-500"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/80 text-dim border border-border backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent text-dim border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">{p.title}</h3>
                  <p className="text-xs text-dim mb-2 uppercase tracking-wider">{p.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.desc}</p>
                  {p.github && (
                    <div className="mt-4">
                      <Button variant="hero-outline" size="sm" asChild>
                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" /> GitHub <ArrowUpRight className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  )}
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
