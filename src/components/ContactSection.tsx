import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
          { icon: WhatsappIcon, title: "Contato", info: "(81) 98514-7293", href: "https://wa.me/5581985147293" },
          { icon: Github, title: "GitHub", info: "github.com/ildevdio", href: "https://github.com/ildevdio" },
        ].map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
