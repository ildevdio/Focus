import { motion } from "framer-motion";
import { Mail, Phone, Github } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const ContactSection = () => (
  <section id="contato" className="py-28 bg-background relative overflow-hidden section-blend-top">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px glow-line" />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Contato</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
          Pronto para Começar?
        </h2>
        <p className="text-dim mt-4 max-w-xl mx-auto leading-relaxed">
          Entre em contato e descubra como podemos transformar seu negócio.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Mail, title: "E-mail", info: "focus-solutions@outlook.com", href: "mailto:focus-solutions@outlook.com" },
          { icon: Phone, title: "Telefone", info: "(81) 98514-7293", href: "tel:+5581985147293" },
          { icon: Github, title: "GitHub", info: "github.com/ildevdio", href: "https://github.com/ildevdio" },
        ].map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            target={c.title === "GitHub" ? "_blank" : undefined}
            rel={c.title === "GitHub" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <GlowingCard className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 h-full bg-background">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-glow-soft transition-colors duration-300">
                <c.icon className="w-5 h-5 text-dim group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground font-sans text-sm break-words w-full">{c.title}</h3>
              <p className="text-xs text-dim mt-1 break-words w-full">{c.info}</p>
            </GlowingCard>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
