import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, X } from 'lucide-react';
import { FEATURED_EVENT_EBOOK_URL, FEATURED_EVENT_REGISTRATION_URL, FEATURED_EVENT_START_AT } from '../constants';

type FloatingEventCtaProps = {
  raised?: boolean;
};

const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
const cornIconUrl = `${assetBase}icons/corn.svg`;
const ebookIconUrl = `${assetBase}icons/ebook-3d.png`;
const eventStartTime = new Date(FEATURED_EVENT_START_AT).getTime();

const getHasEventPassed = () => Date.now() >= eventStartTime;

export const FloatingEventCta: React.FC<FloatingEventCtaProps> = ({ raised = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasEventPassed, setHasEventPassed] = useState(getHasEventPassed);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHasEventPassed(getHasEventPassed());
    }, 30000);

    return () => window.clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const ctaContent = hasEventPassed
    ? {
        ariaLabel: 'Anuncio do e-book Milho 25/26 do Rally da Safra',
        closeLabel: 'Fechar anuncio do e-book',
        eyebrow: 'E-book Milho 25/26',
        title: 'E-book do Rally da Safra',
        date: null,
        description:
          'A expedição percorreu mais de 72% da produção nacional de milho. Agora os dados estão reunidos em um único e-book, direto do campo, para você.',
        href: FEATURED_EVENT_EBOOK_URL,
        buttonLabel: 'Acesse o e-book',
        buttonAriaLabel: 'Acesse o e-book do Rally da Safra',
        eyebrowIcon: null,
        mainIconUrl: ebookIconUrl,
      }
    : {
        ariaLabel: 'Anuncio do evento Encerramento da etapa milho',
        closeLabel: 'Fechar anuncio do evento',
        eyebrow: 'Evento online',
        title: 'Encerramento da etapa milho',
        date: '25 de junho | 17h (horario Brasilia)',
        description: 'Resultados, bastidores e leituras de campo em primeira mão.',
        href: FEATURED_EVENT_REGISTRATION_URL,
        buttonLabel: 'Cadastre-se aqui',
        buttonAriaLabel: 'Cadastre-se aqui no encerramento da etapa milho',
        eyebrowIcon: CalendarDays,
        mainIconUrl: cornIconUrl,
      };
  const EyebrowIcon = ctaContent.eyebrowIcon;

  return (
    <motion.div
      role="complementary"
      aria-label={ctaContent.ariaLabel}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
        y: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`fixed right-4 ${
        raised ? 'bottom-[13.5rem] sm:bottom-44 md:bottom-auto md:top-28' : 'bottom-4 md:bottom-6'
      } z-[140] w-[calc(100vw-2rem)] max-w-[21.5rem] overflow-hidden rounded-2xl border border-khaki/50 bg-[#123529] text-white shadow-[0_24px_70px_-30px_rgba(0,0,0,0.65)] ring-1 ring-white/10 transition-[bottom,top] duration-300 md:right-6`}
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f6c84f] via-khaki to-hunter-green" />
      <span className="absolute bottom-0 left-0 h-16 w-28 skew-x-[-18deg] bg-hunter-green/35" />
      <span className="event-cta-stripes absolute right-0 top-0 h-full w-12" />
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 z-10 grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        aria-label={ctaContent.closeLabel}
      >
        <X className="h-4 w-4" />
      </button>

      <div className="relative flex gap-3 p-4 pr-10">
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [-2, 3, -2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="event-cta-icon mt-0.5 shrink-0"
        >
          <img src={ctaContent.mainIconUrl} alt="" className="h-full w-full object-contain" loading="lazy" />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-khaki">
            {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5" />}
            {ctaContent.eyebrow}
          </div>
          <p className="text-sm font-bold leading-tight md:text-[0.95rem]">{ctaContent.title}</p>
          {ctaContent.date && <p className="mt-1 text-xs font-semibold text-khaki">{ctaContent.date}</p>}
          <p className="mt-1.5 text-xs leading-relaxed text-white/78">
            {ctaContent.description}
          </p>

          <div className="mt-3 flex items-center justify-between gap-3">
            <a
              href={ctaContent.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-khaki ring-1 ring-white/10 transition-colors hover:bg-white/15"
              aria-label={ctaContent.buttonAriaLabel}
            >
              {ctaContent.buttonLabel}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-khaki text-dark-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
