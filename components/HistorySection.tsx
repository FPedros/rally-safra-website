import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HistorySection: React.FC = () => {
  return (
    <section id="historia" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cerrado-brown/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-heading text-4xl font-bold text-amazon-green mb-6 relative inline-block">
              Nossa História
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-cerrado-brown rounded"></span>
            </h2>
            <p className="font-sans text-gray-700 text-lg leading-relaxed mb-6">
              Há mais de duas décadas, o Rally da Safra percorre milhares de quilômetros pelas principais regiões produtoras do Brasil. O que começou como uma pequena expedição técnica se tornou a principal referência privada para avaliação das lavouras de soja e milho no país.
            </p>
            <p className="font-sans text-gray-700 text-lg leading-relaxed mb-8">
              Nossa equipe de agrônomos e técnicos coleta dados in loco, conversando com produtores e entendendo a realidade do campo para gerar inteligência de mercado precisa.
            </p>
            <button className="group flex items-center gap-2 text-cerrado-brown font-bold text-lg hover:text-amazon-green transition-colors">
              Ler história completa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1200" 
                alt="História do Rally" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                 <span className="text-white font-bold text-xl">20+ Anos de Estrada</span>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-cerrado-brown rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
