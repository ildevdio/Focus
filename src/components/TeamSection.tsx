import { motion } from "framer-motion";
import { Users } from "lucide-react";

const team = [
  {
    name: "Diogo Silas",
    role: "Fundador & Desenvolvedor Full Stack",
    initials: "DS",
  },
  {
    name: "Samuel Levi",
    role: "Desenvolvedor Front-end",
    initials: "SL",
  },
  {
    name: "Nicolas Natário",
    role: "Desenvolvedor Back-end",
    initials: "NN",
  },
];

const TeamSection = () => (
  <section id="equipe" className="py-28 bg-background relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px glow-line" />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dim">Nossa Equipe</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Quem Somos</h2>
        <p className="text-dim mt-4 max-w-xl mx-auto leading-relaxed">
          Conheça os profissionais por trás das soluções Focus.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card hover:border-dim/30 card-shine transition-all duration-500 group"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-glow-soft transition-colors duration-300">
              <span className="text-2xl font-display font-bold text-dim group-hover:text-foreground transition-colors duration-300">
                {member.initials}
              </span>
            </div>
            <h3 className="text-lg font-display font-bold text-foreground">{member.name}</h3>
            <p className="text-xs text-dim mt-1 uppercase tracking-wider">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
