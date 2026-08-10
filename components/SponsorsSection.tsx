import React from 'react';
import { motion } from 'framer-motion';
import { SponsorCategory, Sponsor } from '../types';
import { SPONSOR_COTTON_FILES, SPONSOR_SOY_FILES } from '../generated/publicAssets';

const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

const publicAssetUrl = (filePath: string) =>
  `${assetBase}${filePath.split('/').map(encodeURIComponent).join('/')}`;

const sponsorLinks: Array<[string, string]> = [
  ['patrocinadores-05', 'https://www.adm.com/pt-br/'],
  ['patrocinadores-08', 'https://www.aneacotton.com.br/'],
  ['abrapa', 'https://abrapa.com.br/'],
  ['adm', 'https://www.adm.com/pt-br/'],
  ['agrivalle', 'https://agrivalle.com.br/'],
  ['anea', 'https://www.aneacotton.com.br/'],
  ['brado', 'https://www.brado.com.br/'],
  ['credenz', 'https://agriculture.basf.com/br/pt/protecao-de-cultivos-e-sementes/produtos/credenz/Credenz'],
  ['basf', 'https://www.basf.com/br/'],
  ['fibermax', 'https://agriculture.basf.com/br/pt/protecao-de-cultivos-e-sementes/produtos/fibermax'],
  ['jd', 'https://www.deere.com.br/pt/'],
  ['john deere', 'https://www.deere.com.br/pt/'],
  ['laferlins', 'https://laferlins.com.br/'],
  ['main-logo', 'https://www.xarvio.com/br/pt.html'],
  ['mediterranean', 'https://www.msc.com/pt'],
  ['xarvio', 'https://www.xarvio.com/br/pt.html'],
  ['mitsubishi', 'https://www.mitsubishimotors.com.br/'],
  ['ocp', 'https://www.ocpbrasil.com.br/'],
  ['santander', 'https://www.santander.com.br/agronegocio'],
  ['soytech', 'https://agriculture.basf.com/br/pt/conteudos/cultivos-e-sementes/soja/credenz-soytech-diferenca'],
  ['tama', 'https://www.tama-brasil.com.br/'],
  ['tim', 'https://www.tim.com.br/para-empresas/iot-solutions/agro'],
  ['yara', 'https://www.yarabrasil.com.br/'],
  ['jdt', 'https://www.jdtseguros.com.br/'],
  ['itau_bba', 'https://www.itau.com.br/itaubba-pt'],
];

const getSponsorLink = (fileName: string): string | undefined => {
  const normalizedName = fileName.toLowerCase();
  return sponsorLinks.find(([key]) => normalizedName.includes(key))?.[1];
};

const mapImagesToSponsors = (images: readonly string[]): Sponsor[] =>
  images.map((path, idx) => {
    const fileName = path.split('/').pop() || `patrocinador-${idx + 1}`;
    const name = fileName
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { id: idx + 1, name, logoUrl: publicAssetUrl(path), websiteUrl: getSponsorLink(fileName) };
  });

const sponsorsSoy = mapImagesToSponsors(SPONSOR_SOY_FILES);
const sponsorsCotton = mapImagesToSponsors(SPONSOR_COTTON_FILES);

const softEase = [0.22, 1, 0.36, 1] as const;

const sectionEntrance = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: softEase },
  },
};

const categoryEntrance = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: softEase },
  },
};

const gridEntrance = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.14,
      staggerChildren: 0.075,
    },
  },
};

const cardEntrance = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: softEase,
    },
  },
};

const SponsorCard: React.FC<{ sponsor: Sponsor; className: string }> = ({ sponsor, className }) => {
  const content = (
    <img
      src={sponsor.logoUrl}
      alt={sponsor.name}
      className="max-h-full max-w-full w-auto h-auto object-contain"
    />
  );

  if (!sponsor.websiteUrl) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={sponsor.websiteUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Acessar site de ${sponsor.name}`}
      className={`${className} cursor-pointer focus:outline-none focus:ring-2 focus:ring-hunter-green focus:ring-offset-2 hover:-translate-y-1`}
    >
      {content}
    </a>
  );
};

export const SponsorsSection: React.FC = () => {
  const hasSoy = sponsorsSoy.length > 0;
  const hasCotton = sponsorsCotton.length > 0;

  return (
    <section id="patrocinadores" className="py-24 bg-light-sand">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          className="text-center mb-16"
          variants={sectionEntrance}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold text-dark-green mb-4">Patrocinadores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grandes marcas que apoiam o desenvolvimento do agronegocio brasileiro e fazem o Rally acontecer.
          </p>
        </motion.div>

        {/* Soy & Corn Category */}
        {hasSoy && (
          <motion.div
            className="mb-20"
            variants={categoryEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.18 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gray-300 flex-1"></div>
              <h3 className="font-heading text-2xl font-bold text-hunter-green px-4 py-2 border border-hunter-green rounded-full bg-white">
                {SponsorCategory.SOY_CORN}
              </h3>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
              variants={gridEntrance}
            >
              {sponsorsSoy.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  variants={cardEntrance}
                >
                  <SponsorCard
                    sponsor={sponsor}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center h-40 border border-gray-100"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Cotton Category */}
        {hasCotton && (
          <motion.div
            variants={categoryEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.18 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gray-300 flex-1"></div>
              <h3 className="font-heading text-2xl font-bold text-white px-5 py-2.5 border border-[#1E274C] rounded-full bg-[#1E274C] shadow-sm">
                {SponsorCategory.COTTON}
              </h3>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              variants={gridEntrance}
            >
              {sponsorsCotton.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  variants={cardEntrance}
                >
                  <SponsorCard
                    sponsor={sponsor}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center h-32 border border-gray-100"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
