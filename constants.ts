import { BlogPost, Sponsor } from './types';

// Usa BASE_URL para funcionar em deploys em subpasta (evita path quebrado)
const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

// Carrega automaticamente todas as imagens da pasta public/hero/banner-hero
const heroImports = import.meta.glob('./public/hero/banner-hero/*.{jpg,jpeg,png,webp,svg,gif}', {
  eager: true,
  as: 'url',
}) as Record<string, string>;

const normalizePublicUrl = (url: string) => {
  // Remove prefixos como "/public/" ou "./public/" e aplica BASE_URL
  const cleaned = url.replace(/^\.?\/?public\//, '').replace(/^\//, '');
  return `${assetBase}${cleaned}`;
};

const dynamicHeroImages = Object.keys(heroImports)
  .sort()
  .map((key) => normalizePublicUrl(heroImports[key]));

export const HERO_IMAGES = dynamicHeroImages;

// E-book para download (espera-se o arquivo em /public/arquivo-download ou /dist/arquivo-download)
export const EBOOK_DOWNLOAD_URL = `${assetBase}arquivo-download/e-book-rally-safra.pdf`;

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Estimativa de safra sobe para 2024",
    excerpt: "Confira os dados atualizados das equipes em campo sobre a produtividade da soja no Centro-Oeste.",
    date: "14 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Notícias",
    content: "O time do Rally percorreu as principais regiões produtoras e encontrou talhões com boa sanidade e manejo equilibrado de umidade. As primeiras estimativas indicam ganho de produtividade em relação ao ciclo anterior, especialmente onde o plantio ocorreu dentro da janela ideal.\n\nA equipe destaca que o controle de pragas foi eficiente e que a logística de insumos ajudou a manter o ritmo do plantio. A consolidação dos dados segue nas próximas semanas, com atualizações por estado."
  },
  {
    id: 2,
    title: "Tecnologia no campo: o uso de drones",
    excerpt: "Como a agricultura de precisão está mudando o mapeamento de pragas nas lavouras de milho.",
    date: "10 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "E-book",
    content: "Equipes de campo estão usando drones para identificar falhas de plantio e pontos de infestação com muito mais rapidez. Os mapas gerados permitem ação localizada, reduzindo custo de insumos e impactos ambientais.\n\nA integração com estações meteorológicas ajuda a priorizar áreas de risco e planejar voos. Nos próximos meses, novas rotas de coleta de dados serão abertas para comparar produtividade por talhão."
  },
  {
    id: 3,
    title: "Clima: o impacto do El Niño",
    excerpt: "Especialistas discutem como os regimes de chuva afetaram o plantio da segunda safra.",
    date: "05 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1594771804886-715c52e46e86?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Newsletter",
    content: "O regime de chuvas foi irregular, mas suficiente para garantir nascimento uniforme em grande parte do Centro-Oeste. Produtores ajustaram janelas de plantio e intensificaram monitoramento de solo para evitar perdas por encharcamento.\n\nModelos apontam neutralidade no início do próximo trimestre, abrindo espaço para manejo mais agressivo de cobertura e rotação."
  },
  {
    id: 4,
    title: "Exportações batem recorde em fevereiro",
    excerpt: "Logística eficiente garante escoamento rápido da produção para os portos.",
    date: "28 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Notícias",
    content: "Corredores logísticos operaram acima da média com apoio de ferrovias e janelas marítimas bem sincronizadas. O fluxo rápido evitou gargalos em armazéns e manteve prêmio positivo nos portos.\n\nA perspectiva é manter o ritmo com contratos já firmados e reforço na frota de caminhões nos próximos meses."
  },
  {
    id: 5,
    title: "Novas variedades de algodão",
    excerpt: "Pesquisadores apresentam sementes mais resistentes à seca para o cerrado.",
    date: "20 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1598253241551-76674e30064f?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Eventos",
    content: "Materiais de nova geração mostram maior tolerância à estiagem e melhor arquitetura de planta, facilitando colheita mecanizada. Em ensaios, a perda de produtividade em cenários de estresse hídrico caiu quase pela metade.\n\nProdutores avaliam custos de licenciamento e recomendam planejamento de adubação para extrair o potencial genético dessas cultivares."
  },
  {
    id: 6,
    title: "Sustentabilidade na prática",
    excerpt: "Fazendas modelo mostram que é possível produzir preservando as nascentes.",
    date: "15 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "E-book",
    content: "Projetos de manejo de bacias com cercamento de nascentes e curvas de nível reduziram erosão visivelmente. A combinação de ILP e plantio direto ajuda a manter cobertura vegetal o ano todo e melhora matéria orgânica do solo.\n\nOs resultados apontam aumento de produtividade e menor dependência de corretivos, gerando ganho econômico e ambiental."
  },
  {
    id: 7,
    title: "Milho safrinha: oportunidades",
    excerpt: "Análise completa sobre o fechamento da janela de plantio e as expectativas de mercado.",
    date: "12 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Newsletter",
    content: "Apesar do atraso inicial, a janela de plantio se manteve dentro do esperado em várias microrregiões. A demanda externa continua firme e mantém os preços sustentados para contratos de exportação.\n\nAnalistas indicam que a escolha por híbridos precoces pode equilibrar risco climático e manter margens positivas."
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
