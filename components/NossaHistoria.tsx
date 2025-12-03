import React from 'react';
import { motion } from 'framer-motion';

type TimelineEvent = {
  title: string;
  items: string[];
};

const timelineEvents: TimelineEvent[] = [
  {
    title: '2003 - O Inicio',
    items: [
      'Nasce o projeto "De Olho na Safra" na temporada 2002/2003, realizado pela Agroconsult.',
      'Uma unica equipe percorreu sete estados em 16 dias.',
      'Objetivo: avaliar as condicoes das lavouras brasileiras.',
    ],
  },
  {
    title: '2004 - Consolidacao',
    items: [
      'Passou a chamar-se "Rally da Safra".',
      'Alem das visitas, comecaram a realizar eventos para reunir agricultores.',
    ],
  },
  {
    title: '2005 - Safra 2004/2005',
    items: [
      'Marcada por uma seca que prejudicou lavouras no Sul, MT, MS e GO.',
      'Houve a liberacao do plantio da primeira geracao de soja transgenica.',
      'Producao no Sul do Brasil foi 20% menor que a safra anterior.',
    ],
  },
  {
    title: '2006 - Crise no Campo',
    items: [
      'Ano de crise de renda: o real estava valorizado (custos altos em 2005) e continuou valendo pouco na venda em 2006.',
    ],
  },
  {
    title: '2007',
    items: ['Producao de graos: 122,5 MMT.'],
  },
  {
    title: '2008 - Monitoramento OGM',
    items: [
      'A equipe comecou a coletar dados sobre a participacao de soja OGM (Transgenica).',
      '59% das lavouras avaliadas eram OGM.',
    ],
  },
  {
    title: '2009 - Milho Transgenico',
    items: [
      'Primeira vez que produtores tiveram variedades comerciais de milho OGM a disposicao.',
      '1,5% das amostras coletadas eram transgenicas.',
    ],
  },
  {
    title: '2010 - Produtividade Recorde',
    items: [
      'Primeira vez na historia com produtividade media acima de 50 sacas por hectare e otima rentabilidade.',
      'Quarta safra consecutiva com rentabilidade positiva.',
    ],
  },
  {
    title: '2011',
    items: [
      'Media de 52 sacas de soja por hectare.',
      'Producao de soja: 118 MMT.',
    ],
  },
  {
    title: '2012 - Inicio do Rally da Safrinha',
    items: [
      'O Rally foi a campo pela primeira vez avaliar a "safrinha" de milho.',
      'A safrinha se tornou maior que a safra de verao (54% do milho produzido foi na safrinha).',
    ],
  },
  {
    title: '2013 - 150 Milhoes de Toneladas',
    items: [
      'A safra brasileira (soja + milho) ultrapassou 150 MMT.',
      'Liberado o plantio da 2a geracao de soja geneticamente modificada.',
      'Amostras de milho OGM chegaram a 88% do total.',
    ],
  },
  {
    title: '2014 - Pragas e Doencas',
    items: ['Adversidades climaticas e incidencia de pragas frustraram expectativas de recorde.'],
  },
  {
    title: '2015 - Safra de Extremos',
    items: [
      'Chuvas garantiram produtividade em algumas regioes, enquanto estiagem prejudicou outras.',
      'Soja: quase 98 MMT; Milho: 85 MMT.',
    ],
  },
  {
    title: '2016 - Quebra Climatica',
    items: [
      'Expectativa inicial de superar 100 MMT de soja foi frustrada pelo clima irregular.',
      'Producao final de soja: 96,3 MMT (1% a menos que a anterior).',
    ],
  },
  {
    title: '2017 - Clima Ideal',
    items: [
      'Condicoes climaticas proximas do ideal e baixa pressao de pragas.',
      'Soja: 114,6 MMT; Milho Safrinha: 69,4 MMT.',
    ],
  },
  {
    title: '2018',
    items: [
      'Producao de soja: 119,5 MMT (Recorde pelo segundo ano consecutivo).',
      'Houve atraso no plantio no Sudeste do MT e seca grave no Sul do RS.',
    ],
  },
  {
    title: '2019',
    items: [
      'Plantio de soja mais antecipado da historia.',
      'Investimentos em perfil de solo ajudaram a mitigar clima ruim em algumas regioes.',
    ],
  },
  {
    title: '2020 - Pandemia e Digitalizacao',
    items: [
      'Soja: 123,1 MMT.',
      'Com a Covid-19, eventos presenciais viraram lives e a etapa milho foi totalmente virtual.',
      'Milho: 74,8 MMT.',
    ],
  },
  {
    title: '2021 - Atraso e Recuperacao',
    items: [
      'Clima irregular atrasou o plantio, mas lavouras recuperaram: Recorde de soja (137,1 MMT).',
      'O milho sofreu com atraso e seca, retraindo 20% (60,9 MMT).',
      'Metodologia evoluiu para coleta de mais de 1.000 amostras para avaliacao quantitativa.',
    ],
  },
  {
    title: '2022 - Recuperacao do Milho',
    items: [
      'Soja: 127,5 MMT.',
      'Milho: 92,3 MMT (Recuperacao em relacao a 20/21).',
      'Alta infestacao de cigarrinhas no milho. Seca no Oeste do PR e no RS atrapalhou a soja.',
    ],
  },
  {
    title: '2023 - 20 Anos de Rally',
    items: [
      'Quebra de recordes: Soja 157,8 MMT e Milho 108,2 MMT.',
      'Comemoracao de 20 anos do projeto.',
    ],
  },
  {
    title: '2024 - 21a Edicao e Alta Tecnologia',
    items: [
      'Producao de Soja estimada: 154,1 MMT.',
      'Area plantada revisada para 46,4 milhoes de hectares com uso de algoritmos e imagens de satelite.',
      'Cenario de safra avaliado com novas tecnologias.',
    ],
  },
];

export const NossaHistoria: React.FC = () => {
  const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const bgImage = `${assetBase}nossa-historia.png`;

  return (
    <section
      className="relative isolate overflow-hidden bg-emerald-950 text-white bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-emerald-950/80" />
      <div className="absolute -top-24 -left-16 w-[32rem] h-[32rem] bg-amber-400/15 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] bg-emerald-400/20 blur-[140px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.12),transparent_30%)]" />

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-28">
        <div className="max-w-5xl">
          <p className="text-amber-300 font-semibold uppercase tracking-[0.22em] text-sm mb-3">Linha do Tempo</p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 shadow-lg mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
            <span className="text-emerald-50/90 text-sm">Os Caminhos do Rally da Safra</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            Nossa Historia
          </h1>
          <p className="text-emerald-50/90 max-w-3xl text-lg md:text-xl leading-relaxed">
            Texto organizado cronologicamente e por topicos conforme o infografico "Os Caminhos do Rally da Safra".
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-300 via-amber-200/40 to-emerald-400 shadow-[0_0_25px_rgba(251,191,36,0.3)] rounded-full" />

          <div className="flex flex-col gap-9 md:gap-11">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.title}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.03, ease: 'easeOut' }}
              >
                <div className="absolute -left-1 top-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-200 text-emerald-950 font-black flex items-center justify-center shadow-[0_15px_40px_-15px_rgba(251,191,36,0.9)] ring-4 ring-emerald-900/50 rotate-2">
                  {event.title.split(' ')[0]}
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] p-5 md:p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-200/60 hover:shadow-[0_30px_80px_-34px_rgba(251,191,36,0.45)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-300 to-emerald-300 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
                    <span className="text-amber-100/80 text-xs uppercase tracking-[0.2em]">{event.title}</span>
                  </div>
                  <ul className="space-y-2 text-emerald-50 text-base md:text-lg">
                    {event.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossaHistoria;
