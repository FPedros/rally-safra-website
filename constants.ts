import { BlogPost, Sponsor } from './types';

// Images matching the prompt description (Agro, Trucks, Harvest)
export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1625246333195-58197bd47f26?auto=format&fit=crop&q=80&w=1920", // Truck in field
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920", // Aerial field
  "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1920", // Hands with soy/grain
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1920", // Agronomists in field
  "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?auto=format&fit=crop&q=80&w=1920"  // Pickup truck branding
];

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Estimativa de safra sobe para 2024",
    excerpt: "Confira os dados atualizados das equipes em campo sobre a produtividade da soja no Centro-Oeste.",
    date: "14 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Notícias"
  },
  {
    id: 2,
    title: "Tecnologia no campo: o uso de drones",
    excerpt: "Como a agricultura de precisão está mudando o mapeamento de pragas nas lavouras de milho.",
    date: "10 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "E-book"
  },
  {
    id: 3,
    title: "Clima: O impacto do El Niño",
    excerpt: "Especialistas discutem como os regimes de chuva afetaram o plantio da segunda safra.",
    date: "05 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1594771804886-715c52e46e86?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Newsletter"
  },
  {
    id: 4,
    title: "Exportações batem recorde em Fevereiro",
    excerpt: "Logística eficiente garante escoamento rápido da produção para os portos.",
    date: "28 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Notícias"
  },
  {
    id: 5,
    title: "Novas variedades de algodão",
    excerpt: "Pesquisadores apresentam sementes mais resistentes à seca para o cerrado.",
    date: "20 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1598253241551-76674e30064f?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Eventos"
  },
  {
    id: 6,
    title: "Sustentabilidade na prática",
    excerpt: "Fazendas modelo mostram que é possível produzir preservando as nascentes.",
    date: "15 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "E-book"
  },
  {
    id: 7,
    title: "Milho safrinha: Oportunidades",
    excerpt: "Análise completa sobre o fechamento da janela de plantio e as expectativas de mercado.",
    date: "12 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Newsletter"
  }
];

export const SPONSORS_SOY: Sponsor[] = [
  { id: 1, name: "ADM", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/ADM_logo.svg/512px-ADM_logo.svg.png" },
  { id: 2, name: "ANEA", logoUrl: "https://logo.clearbit.com/anea.org.br?size=500" },
  { id: 3, name: "BASF", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/BASF_Logo.svg/512px-BASF_Logo.svg.png" },
  { id: 4, name: "John Deere", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/John_Deere_logo.svg/512px-John_Deere_logo.svg.png" },
  { id: 5, name: "Laferlins", logoUrl: "https://logo.clearbit.com/laferlins.com?size=500" },
  { id: 6, name: "OCP Brasil", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/OCP_Group.svg/1200px-OCP_Group.svg.png" },
  { id: 7, name: "Viasoft", logoUrl: "https://logo.clearbit.com/viasoft.com.br?size=500" }
];

export const SPONSORS_COTTON: Sponsor[] = [
  { id: 10, name: "FiberMax", logoUrl: "https://ag.basf.us/content/dam/cxm/agriculture/north-america/united-states/crop-protection/products/fibermax/fibermax_logo.png" },
  { id: 11, name: "BASF", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/BASF_Logo.svg/512px-BASF_Logo.svg.png" },
  { id: 12, name: "John Deere", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/John_Deere_logo.svg/512px-John_Deere_logo.svg.png" }
];