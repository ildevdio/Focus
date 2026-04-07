import { motion } from "framer-motion";
import { Home, Briefcase, FolderOpen, Users, FileText, Mail, LayoutPanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebarPosition } from "@/components/SidebarContext";
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
  const { toggleNavMode } = useSidebarPosition();

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
            <span className="block text-[8px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Soluções Corporativas</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleNavMode}
            className="rounded-full px-4 text-dim hover:text-foreground hover:bg-white/5 flex items-center gap-2"
          >
            <LayoutPanelLeft className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider font-semibold">Sidebar</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderNav;
