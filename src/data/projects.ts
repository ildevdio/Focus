import focuslogin from "@/assets/focuslogin.jpg";
import focuscommerce from "@/assets/focuscommerce.jpg";
import focusplataform from "@/assets/focusplataform.jpg";

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
    title: "Focus e-shop",
    subtitle: "Sua plataforma de vendas e gestão e-commerce",
    desc: "Construa sua loja virtual de maneira facilitada e tenha total controle sobre suas vendas. Plataforma completa com catálogo, gestão de pedidos, relatórios e central de delivery e entregas.",
    img: focuslogin,
    images: [focuslogin, focuscommerce, focusplataform],
    link: "https://shop.focus-solutions.tech",
    category: "Plataformas de Vendas",
    tags: ["Gestão", "Vendas", "Web", "Mobile"],
    features: [
      "Atendimento de IA/Chatbot via API WhatsApp",
      "Gestão de pedidos",
      "Catálogo facilitado",
      "Relatórios",
      "Central de delivery e entregas",
      "Plataforma customizável",
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
  "Plataformas de Vendas",
];