import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FolderOpen, FileText, Mail, X, ArrowLeftRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebarPosition } from "@/components/SidebarContext";
import focusLogo from "@/assets/focus-logo.jpeg";

const navItems = [
  { icon: Home, label: "Início", href: "#inicio" },
  { icon: Briefcase, label: "Serviços", href: "#servicos" },
  { icon: FolderOpen, label: "Projetos", href: "#projetos" },
  { icon: FileText, label: "Orçamento", href: "#orcamento" },
  { icon: Mail, label: "Contato", href: "#contato" },
];

const SidebarNav = () => {
  const { position, togglePosition, isOpen, setIsOpen } = useSidebarPosition();

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 z-50 glass rounded-xl p-3 hover:bg-accent/50 transition-colors"
        style={{ [position]: "1rem" }}
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.aside
            key={position}
            initial={{ x: position === "left" ? "-100%" : "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: position === "left" ? "-100%" : "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed top-0 ${position === "left" ? "left-0" : "right-0"} z-50 h-full w-72 flex flex-col`}
            style={{ background: "hsl(0 0% 5%)", borderRight: position === "left" ? "1px solid hsl(0 0% 12%)" : "none", borderLeft: position === "right" ? "1px solid hsl(0 0% 12%)" : "none" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-2">
              <div className="flex items-center gap-3">
                <img src={focusLogo} alt="Focus" className="h-12 w-12 rounded-xl object-cover" />
                <div>
                  <span className="text-lg font-display font-bold text-foreground tracking-wide">Focus</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-dim">Soluções Corporativas</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-accent transition-colors">
                <X className="w-4 h-4 text-dim" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 my-4 h-px glow-line" />

            {/* Nav Items */}
            <nav className="flex-1 px-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Button
                    variant="nav-item"
                    className="w-full gap-3 px-4 py-3 h-auto rounded-xl"
                    asChild
                  >
                    <a href={item.href} onClick={() => setIsOpen(false)}>
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </nav>

            {/* Position toggle */}
            <div className="p-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePosition}
                className="w-full gap-2 text-dim hover:text-foreground"
              >
                <ArrowLeftRight className="w-4 h-4" />
                Mover para {position === "left" ? "direita" : "esquerda"}
              </Button>
              <p className="text-[10px] text-center text-dim/50 mt-2">Modo de teste</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarNav;
