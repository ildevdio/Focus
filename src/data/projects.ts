import projectVitae from "@/assets/project-vitae.jpg";
import projectSpartan from "@/assets/project-spartan.jpg";

export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  github?: string;
  category: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Focus Vitae",
    subtitle: "Copiloto Pessoal",
    desc: "Assistente inteligente que organiza sua rotina, metas e produtividade pessoal com IA integrada. Planeje seu dia, defina metas e acompanhe seu progresso de forma intuitiva.",
    img: projectVitae,
    github: "https://github.com/ildevdio/Focusvitae",
    category: "Aplicativos Mobile",
    tags: ["IA", "Produtividade", "Mobile"],
  },
  {
    title: "Focus Spartan",
    subtitle: "Gestão Ergonômica",
    desc: "Sistema completo de monitoramento e gestão ergonômica para ambientes corporativos, promovendo saúde e bem-estar dos colaboradores com dashboards em tempo real.",
    img: projectSpartan,
    github: "https://github.com/ildevdio/Spartan",
    category: "Desenvolvimento de Software",
    tags: ["Saúde", "Gestão", "Dashboard"],
  },
];

export const categories = [
  "Todos",
  "Desenvolvimento de Software",
  "Games & Entretenimento",
  "Segurança & Compliance",
  "Aplicativos Mobile",
  "Integração de Sistemas",
  "Consultoria & Suporte",
];
