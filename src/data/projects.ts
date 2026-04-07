import projectVitae from "@/assets/project-vitae.jpg";
import projectSpartan from "@/assets/project-spartan.jpg";
import vitaeDashboard from "@/assets/vitae-dashboard.jpg";
import vitaeFeatures from "@/assets/vitae-features.jpg";
import spartanDashboard from "@/assets/spartan-dashboard.jpg";
import spartanSetores from "@/assets/spartan-setores.jpg";

export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  images: string[];
  link?: string;
  github?: string;
  category: string;
  tags: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    title: "Focus InVIta",
    subtitle: "Copiloto Pessoal",
    desc: "Assistente inteligente que organiza sua rotina, metas e produtividade pessoal com IA integrada. Dashboard inteligente, agenda automatizada, controle financeiro e chat com IA — tudo em um único lugar para você evoluir todos os dias.",
    img: projectVitae,
    images: [projectVitae, vitaeDashboard, vitaeFeatures],
    link: "https://focusinvita.vercel.app",
    github: "https://github.com/ildevdio/Focusvitae",
    category: "Aplicativos Mobile",
    tags: ["IA", "Produtividade", "Mobile"],
    features: [
      "Dashboard inteligente com métricas personalizadas",
      "Agenda automatizada com lembretes",
      "Chat com IA para produtividade",
      "Controle financeiro com gráficos",
      "Centro de estudos integrado",
    ],
  },
  {
    title: "Focus Spartan",
    subtitle: "Gestão Ergonômica",
    desc: "Sistema completo de monitoramento e gestão ergonômica para ambientes corporativos. Cadastro de empresas, setores e postos de trabalho, análises REBA/ROSA, distribuição de riscos, planos de ação e relatórios — tudo em dashboards interativos em tempo real.",
    img: projectSpartan,
    images: [projectSpartan, spartanDashboard, spartanSetores],
    link: "https://focus-spartan.vercel.app",
    github: "https://github.com/ildevdio/Spartan",
    category: "Desenvolvimento de Software",
    tags: ["Saúde", "Gestão", "Dashboard"],
    features: [
      "Dashboard com indicadores ergonômicos",
      "Gestão de empresas, setores e postos",
      "Análises REBA e ROSA integradas",
      "Distribuição e monitoramento de riscos",
      "Relatórios e planos de ação",
    ],
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
