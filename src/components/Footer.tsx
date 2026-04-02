import focusWordmark from "@/assets/focus-wordmark.png";

const Footer = () => (
  <footer className="py-10 bg-background border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={focusWordmark} alt="Focus" className="h-7 opacity-60" />
      <p className="text-xs text-dim/50">
        © {new Date().getFullYear()} Focus. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
