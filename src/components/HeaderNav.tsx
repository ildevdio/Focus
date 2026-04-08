import { motion } from "framer-motion";
import { Home, Briefcase, FolderOpen, Users, FileText, Mail } from "lucide-react";
import { FlameButton } from "@/components/ui/flame-button";
import focusLogo from "@/assets/focus-logo.jpeg";

const navItems = [
  { icon: Home, label: "Início", href: "#inicio" },
  { icon: Briefcase, label: "Serviços", href: "#servicos" },
  { icon: FolderOpen, label: "Projetos", href: "#projetos" },
  { icon: Users, label: "Equipe", href: "#equipe" },
  { icon: FileText, label: "Orçamento", href: "#orcamento" },
  { icon: Mail, label: "Contato", href: "#contato" },
];

const HeaderNav = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={focusLogo} 
            alt="Focus" 
            className="h-10 w-10 rounded-lg object-cover grayscale brightness-125 hover:grayscale-0 transition-all duration-300" 
          />
          <div className="hidden sm:block">
            <span className="text-xl font-display font-bold text-foreground tracking-wide leading-none">Focus</span>
            <span className="block text-[8px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Soluções Tecnológicas</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-sm font-bold text-dim hover:text-foreground px-4 py-2 transition-colors relative group"
            >
              {item.label}
              <motion.span 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-1 left-4 right-4 h-px bg-foreground origin-left transition-transform duration-300"
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <FlameButton size="sm" variant="white" className="px-6">
            Falar Conosco
          </FlameButton>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderNav;
