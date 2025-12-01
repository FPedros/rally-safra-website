import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { HERO_IMAGES } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark-green">
        {/* Images Stacking Context */}
        {HERO_IMAGES.map((img, index) => {
          // Calculate when this image should be visible
          // We divide the scroll progress (0-1) into segments for each image
          const segmentLength = 1 / HERO_IMAGES.length;
          const start = index * segmentLength;
          const end = start + segmentLength;
          
          // Logic: 
          // Opacity: Fade in quickly at start, fade out at end. First image starts visible.
          // Scale: Zoom in continuously while active.
          
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [index === 0 ? 1 : 0, 1, 1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1, 1.25]
          );

          const zIndex = index;

          return (
            <motion.div
              key={index}
              style={{ opacity, scale, zIndex }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={img}
                alt={`Rally da Safra Hero ${index + 1}`}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-dark-green/50 via-transparent to-dark-green/70" />
            </motion.div>
          );
        })}

        {/* Static Overlay Content */}
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-xl tracking-tight">
              RALLY DA <span className="text-khaki">SAFRA</span>
            </h1>
            <p className="font-sans text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
              A maior expedição técnica privada sobre a safra de grãos do Brasil.
            </p>
            <button 
              onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-hunter-green hover:bg-raw-umber text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-khaki/50"
            >
              Conheça o Rally
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-khaki w-10 h-10 opacity-80" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};