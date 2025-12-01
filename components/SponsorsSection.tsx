import React from 'react';
import { SPONSORS_SOY, SPONSORS_COTTON } from '../constants';
import { SponsorCategory } from '../types';

export const SponsorsSection: React.FC = () => {
  return (
    <section id="patrocinadores" className="py-24 bg-light-sand">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-dark-green mb-4">Patrocinadores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grandes marcas que apoiam o desenvolvimento do agronegócio brasileiro e fazem o Rally acontecer.
          </p>
        </div>

        {/* Soy & Corn Category */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h3 className="font-heading text-2xl font-bold text-hunter-green px-4 py-2 border border-hunter-green rounded-full bg-white">
              {SponsorCategory.SOY_CORN}
            </h3>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {SPONSORS_SOY.map((sponsor) => (
              <div key={sponsor.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-40 border border-gray-100">
                <img 
                  src={sponsor.logoUrl} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cotton Category */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h3 className="font-heading text-2xl font-bold text-raw-umber px-4 py-2 border border-raw-umber rounded-full bg-white">
              {SponsorCategory.COTTON}
            </h3>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SPONSORS_COTTON.map((sponsor) => (
              <div key={sponsor.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32 border border-gray-100">
                <img 
                  src={sponsor.logoUrl} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
