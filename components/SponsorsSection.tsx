import React from 'react';
import { SponsorCategory, Sponsor } from '../types';

const soyImages = import.meta.glob('../public/patrocinadores-soja/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}', {
  eager: true,
  as: 'url',
});

const cottonImages = import.meta.glob('../public/patrocinadores-algodao/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}', {
  eager: true,
  as: 'url',
});

const sponsorLinks: Array<[string, string]> = [
  ['agrivalle', 'https://agrivalle.com.br/'],
  ['credenz', 'https://agriculture.basf.com/br/pt/protecao-de-cultivos-e-sementes/produtos/credenz/Credenz'],
  ['basf', 'https://www.basf.com/br/'],
  ['jd', 'https://www.deere.com.br/pt/'],
  ['john deere', 'https://www.deere.com.br/pt/'],
  ['main-logo', 'https://www.xarvio.com/br/pt.html'],
  ['xarvio', 'https://www.xarvio.com/br/pt.html'],
  ['mitsubishi', 'https://www.mitsubishimotors.com.br/'],
  ['ocp', 'https://www.ocpbrasil.com.br/'],
  ['santander', 'https://www.santander.com.br/agronegocio'],
  ['soytech', 'https://agriculture.basf.com/br/pt/conteudos/cultivos-e-sementes/soja/credenz-soytech-diferenca'],
  ['tim', 'https://www.tim.com.br/para-empresas/iot-solutions/agro'],
  ['jdt', 'https://www.jdtseguros.com.br/'],
];

const getSponsorLink = (fileName: string): string | undefined => {
  const normalizedName = fileName.toLowerCase();
  return sponsorLinks.find(([key]) => normalizedName.includes(key))?.[1];
};

const mapImagesToSponsors = (images: Record<string, string>): Sponsor[] =>
  Object.entries(images).map(([path, url], idx) => {
    const fileName = path.split('/').pop() || `patrocinador-${idx + 1}`;
    const name = fileName
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { id: idx + 1, name, logoUrl: url, websiteUrl: getSponsorLink(fileName) };
  });

const sponsorsSoy = mapImagesToSponsors(soyImages as Record<string, string>);
const sponsorsCotton = mapImagesToSponsors(cottonImages as Record<string, string>);

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
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-dark-green mb-4">Patrocinadores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grandes marcas que apoiam o desenvolvimento do agronegocio brasileiro e fazem o Rally acontecer.
          </p>
        </div>

        {/* Soy & Corn Category */}
        {hasSoy && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gray-300 flex-1"></div>
              <h3 className="font-heading text-2xl font-bold text-hunter-green px-4 py-2 border border-hunter-green rounded-full bg-white">
                {SponsorCategory.SOY_CORN}
              </h3>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {sponsorsSoy.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center h-40 border border-gray-100"
                />
              ))}
            </div>
          </div>
        )}

        {/* Cotton Category */}
        {hasCotton && (
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gray-300 flex-1"></div>
              <h3 className="font-heading text-2xl font-bold text-raw-umber px-4 py-2 border border-raw-umber rounded-full bg-white">
                {SponsorCategory.COTTON}
              </h3>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {sponsorsCotton.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center h-32 border border-gray-100"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
