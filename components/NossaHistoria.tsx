import React from 'react';
import { motion } from 'framer-motion';

type TimelineEvent = {
  year: string;
  items: string[];
};

const timelineEvents: TimelineEvent[] = [
  { year: '2000', items: ['Fundação da Agroconsult', 'Criação da Rede Agroconsult de Pesquisas'] },
  {
    year: '2001',
    items: [
      'Primeira edição do Rally da Safra',
      'Criação do índice de produtividade considerando tecnologia e ambiente de produção',
    ],
  },
  { year: '2002', items: ['Dr. Chico não participa mais das viagens do Rally da Safra'] },
  {
    year: '2003',
    items: [
      'Estudo de novos índices de tecnologia e início da construção do índice de cobertura do solo',
      '10 colaboradores',
    ],
  },
  { year: '2004', items: ['Abertura de escritório em São Paulo', '16 colaboradores'] },
  { year: '2005', items: ['Novo índice de qualidade da lavoura', 'Criação do Projeto Pecuária', '23 colaboradores'] },
  { year: '2006', items: ['Reajuste do Rally da Pecuária'] },
  { year: '2007', items: ['40 colaboradores'] },
  { year: '2008', items: ['Lançamento do Índice de Sustentabilidade e início do ICAGRO'] },
  { year: '2010', items: ['32 colaboradores'] },
  { year: '2012', items: ['Novo Jade em MS', '40 colaboradores'] },
  { year: '2013', items: ['Lançamento da 1ª edição do Rally da Pecuária'] },
  { year: '2014', items: ['30 cidades da 1ª edição do Rally da Pecuária', '45 colaboradores'] },
  { year: '2015', items: ['100 cidades da edição do Rally da Pecuária', 'Revitalização do ICAGRO'] },
  { year: '2017', items: ['O ciclo do Rally da Pecuária alcança 168 cidades', '70 colaboradores'] },
  { year: '2018', items: ['Criação do Rally do Algodão', '80 colaboradores'] },
  { year: '2019', items: ['Fundação da AG', 'Aprovação e criação do novo índice de produtividade'] },
  { year: '2021', items: ['Revisão do índice de áreas de pastagem', 'Consolidação do novo índice de produtividade'] },
  {
    year: '2022',
    items: [
      'Reestruturação societária',
      'Início da atuação da Agtech',
      'Expansão da equipe de tecnologia',
      'Novos produtos e soluções',
      'Consolidação do time de Tecnologia e Produtos',
      'Construção do time de Recursos Humanos',
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

      <div className="relative container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-5xl">
          <p className="text-amber-300 font-semibold uppercase tracking-[0.22em] text-sm mb-3">Linha do Tempo</p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 shadow-lg mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
            <span className="text-emerald-50/90 text-sm">Do pioneirismo à expansão: nossa trilha pelo agro</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            Nossa História
          </h1>
          <p className="text-emerald-50/90 max-w-3xl text-lg md:text-xl leading-relaxed">
            Marcos que moldaram o Rally da Safra e a evolução da Agroconsult ao longo dos anos — em um percurso que
            conecta inovação, campo e pessoas.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-300 via-amber-200/40 to-emerald-400 shadow-[0_0_25px_rgba(251,191,36,0.3)] rounded-full" />

          <div className="flex flex-col gap-9 md:gap-11">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.04, ease: 'easeOut' }}
              >
                <div className="absolute -left-1 top-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-200 text-emerald-950 font-black flex items-center justify-center shadow-[0_15px_40px_-15px_rgba(251,191,36,0.9)] ring-4 ring-emerald-900/50 rotate-2">
                  {event.year}
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] p-5 md:p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-200/60 hover:shadow-[0_30px_80px_-34px_rgba(251,191,36,0.45)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-300 to-emerald-300 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
                    <span className="text-amber-100/80 text-xs uppercase tracking-[0.2em]">Capítulo</span>
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
