import focusWordmark from "@/assets/focus-wordmark.png";

const Footer = () => (
  <footer className="py-10 bg-background border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={focusWordmark} alt="Focus" className="h-7 opacity-60" />
      <div className="flex flex-col items-center md:items-end gap-1">
        <p className="text-xs text-dim/50">
          © {new Date().getFullYear()} Focus. Todos os direitos reservados.
        </p>
        <a href="mailto:focus-solutions@outlook.com" className="text-[10px] text-dim/30 hover:text-dim/60 transition-colors">
          focus-solutions@outlook.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
