import { BlogPost, Sponsor } from './types';

// Usa BASE_URL para funcionar em deploys em subpasta (evita path quebrado)
const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export const HERO_IMAGES = [
  `${assetBase}hero/hero1.jpg`,
  `${assetBase}hero/hero2.jpg`,
  `${assetBase}hero/hero3.jpg`,
  `${assetBase}hero/hero4.jpg`,
  `${assetBase}hero/hero5.jpg`
];

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Estimativa de safra sobe para 2024",
    excerpt: "Confira os dados atualizados das equipes em campo sobre a produtividade da soja no Centro-Oeste.",
    date: "14 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Noticias",
    content: "O time do Rally percorreu as principais regioes produtoras e encontrou talhoes com boa sanidade e manejo equilibrado de umidade. As primeiras estimativas indicam ganho de produtividade em relacao ao ciclo anterior, especialmente onde o plantio ocorreu dentro da janela ideal.\n\nA equipe destaca que o controle de pragas foi eficiente e que a logistica de insumos ajudou a manter o ritmo do plantio. A consolidacao dos dados segue nas proximas semanas, com atualizacoes por estado."
  },
  {
    id: 2,
    title: "Tecnologia no campo: o uso de drones",
    excerpt: "Como a agricultura de precisao esta mudando o mapeamento de pragas nas lavouras de milho.",
    date: "10 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "E-book",
    content: "Equipes de campo estao usando drones para identificar falhas de plantio e pontos de infestacao com muito mais rapidez. Os mapas gerados permitem acao localizada, reduzindo custo de insumos e impactos ambientais.\n\nA integracao com estacoes meteorologicas ajuda a priorizar areas de risco e planejar voos. Nos proximos meses, novas rotas de coleta de dados serao abertas para comparar produtividade por talhao."
  },
  {
    id: 3,
    title: "Clima: o impacto do El Nino",
    excerpt: "Especialistas discutem como os regimes de chuva afetaram o plantio da segunda safra.",
    date: "05 Mar 2024",
    imageUrl: "https://images.unsplash.com/photo-1594771804886-715c52e46e86?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Newsletter",
    content: "O regime de chuvas foi irregular, mas suficiente para garantir nascimento uniforme em grande parte do Centro-Oeste. Produtores ajustaram janelas de plantio e intensificaram monitoramento de solo para evitar perdas por encharcamento.\n\nModelos apontam neutralidade no inicio do proximo trimestre, abrindo espaco para manejo mais agressivo de cobertura e rotacao."
  },
  {
    id: 4,
    title: "Exportacoes batem recorde em fevereiro",
    excerpt: "Logistica eficiente garante escoamento rapido da producao para os portos.",
    date: "28 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Noticias",
    content: "Corredores logisticos operaram acima da media com apoio de ferrovias e janelas maritimas bem sincronizadas. O fluxo rapido evitou gargalos em armazens e manteve premio positivo nos portos.\n\nA perspectiva e manter o ritmo com contratos ja firmados e reforco na frota de caminhoes nos proximos meses."
  },
  {
    id: 5,
    title: "Novas variedades de algodao",
    excerpt: "Pesquisadores apresentam sementes mais resistentes a seca para o cerrado.",
    date: "20 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1598253241551-76674e30064f?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Eventos",
    content: "Materiais de nova geracao mostram maior tolerancia a estiagem e melhor arquitetura de planta, facilitando colheita mecanizada. Em ensaios, a perda de produtividade em cenarios de estresse hidrico caiu quase pela metade.\n\nProdutores avaliam custos de licenciamento e recomendam planejamento de adubacao para extrair o potencial genetico dessas cultivares."
  },
  {
    id: 6,
    title: "Sustentabilidade na pratica",
    excerpt: "Fazendas modelo mostram que e possivel produzir preservando as nascentes.",
    date: "15 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "E-book",
    content: "Projetos de manejo de bacias com cercamento de nascentes e curvas de nivel reduziram erosao visivelmente. A combinacao de ILP e plantio direto ajuda a manter cobertura vegetal o ano todo e melhora materia organica do solo.\n\nOs resultados apontam aumento de produtividade e menor dependencia de corretivos, gerando ganho economico e ambiental."
  },
  {
    id: 7,
    title: "Milho safrinha: oportunidades",
    excerpt: "Analise completa sobre o fechamento da janela de plantio e as expectativas de mercado.",
    date: "12 Fev 2024",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800",
    url: "#",
    category: "Newsletter",
    content: "Apesar do atraso inicial, a janela de plantio se manteve dentro do esperado em varias microrregioes. A demanda externa continua firme e mantem os precos sustentados para contratos de exportacao.\n\nAnalistas indicam que a escolha por hibridos precoces pode equilibrar risco climatico e manter margens positivas."
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
