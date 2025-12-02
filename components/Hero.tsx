import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_IMAGES } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editionStats = [
    { value: '+1.88 Milhão', label: 'de Km percorridos' },
    { value: '+32 Mil', label: 'lavouras avaliadas' },
    { value: '+115.9 Mil', label: 'visualizações de produtores e profissionais do agronegócio' },
  ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark-green">
        {/* Images Stacking Context */}
        {HERO_IMAGES.map((img, index) => {
          const segmentLength = 1 / HERO_IMAGES.length;
          const start = index * segmentLength;
          const end = start + segmentLength;

          const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [index === 0 ? 1 : 0, 1, 1, 0]);
          const scale = useTransform(scrollYProgress, [start, end], [1, 1.25]);

          return (
            <motion.div key={index} style={{ opacity, scale, zIndex: index }} className="absolute inset-0 w-full h-full">
              <img src={img} alt={`Rally da Safra Hero ${index + 1}`} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-dark-green/50 via-transparent to-dark-green/70" />
            </motion.div>
          );
        })}

        {/* Static Overlay Content */}
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-xl tracking-tight">
              RALLY DA <span className="text-khaki">SAFRA</span>
            </h1>
            <p className="font-sans text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Uma viagem pelo Brasil que produz
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {editionStats.map((stat, idx) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08, duration: 0.5 }}
                  className="bg-white/10 border border-white/15 rounded-2xl p-4 md:p-5 shadow-lg backdrop-blur-sm hover:-translate-y-1 transition-transform duration-200 flex flex-col items-center"
                >
                  <p className="text-2xl md:text-3xl font-heading font-bold text-white drop-shadow-sm text-center">{stat.value}</p>
                  <p className="text-sm md:text-base text-gray-200 mt-1 leading-snug text-center">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div className="absolute bottom-10" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="text-khaki w-10 h-10 opacity-80" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
