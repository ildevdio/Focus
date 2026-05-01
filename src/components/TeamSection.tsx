import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const team = [
  {
    name: "Diogo Silas",
    role: "Administrativo | Desenvolvimento",
    initials: "DS",
  },
  {
    name: "Samuel Levi",
    role: "UI/UX | QA",
    initials: "SL",
  },
  {
    name: "Nicolas Natário",
    role: "Suporte | Desenvolvimento",
    initials: "NN",
  },
  {
    name: "Lucas Henrique",
    role: "Comercial | Dados",
    initials: "LH",
  },
];

const TeamSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="equipe" className="py-28 bg-background relative overflow-hidden section-blend-top section-blend-bottom">
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

        {isMobile ? (
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full -my-12"
          >
            <CarouselContent className="-ml-4 py-12">
              {team.map((member, i) => (
                <CarouselItem key={member.name} className="pl-4 basis-[85%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="h-full"
                  >
                    <GlowingCard className="flex flex-col items-center justify-between text-center px-6 py-12 min-h-[400px] bg-card hover:border-dim/30 card-shine">
                      <div className="w-24 h-24 rounded-3xl bg-accent flex items-center justify-center group-hover:bg-glow-soft transition-colors duration-300 shrink-0">
                        <span className="text-3xl font-display font-bold text-dim group-hover:text-foreground transition-colors duration-300">
                          {member.initials}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-tight">{member.name}</h3>
                        <p className="text-[9px] md:text-[10px] text-dim uppercase tracking-[0.2em] font-medium leading-relaxed">
                          FUNDADOR · {member.role.toUpperCase()}
                        </p>
                      </div>
                    </GlowingCard>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-[1400px] mx-auto items-stretch">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group"
              >
                <GlowingCard className="flex flex-col items-center justify-between text-center px-6 py-12 min-h-[400px] bg-card hover:border-dim/30 card-shine">
                  <div className="w-24 h-24 rounded-3xl bg-accent flex items-center justify-center group-hover:bg-glow-soft transition-colors duration-300 shrink-0">
                    <span className="text-3xl font-display font-bold text-dim group-hover:text-foreground transition-colors duration-300">
                      {member.initials}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-tight">{member.name}</h3>
                    <p className="text-[9px] md:text-[10px] text-dim uppercase tracking-[0.2em] font-medium leading-relaxed">
                      FUNDADOR · {member.role.toUpperCase()}
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
