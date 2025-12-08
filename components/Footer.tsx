import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M714.163 519.284L1160.89 0h-105.74L671.03 442.72 427.697 0H0l468.211 810.405L0 1226.99h105.74L529.259 762.75l256.704 464.24H1200L714.163 519.284z" />
  </svg>
);

export const Footer: React.FC = () => {
  const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const logoBranca = `${assetBase}hero/marca2026-branca.png`;

  return (
    <footer className="bg-dark-green text-white py-12 border-t border-dark-green">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-10">
          <div className="grid md:grid-cols-[1fr,1fr,1.2fr] gap-8 items-start">
            <div className="space-y-4 text-center md:text-left">
              <img
                src={logoBranca}
                alt="Rally da Safra"
                className="h-24 md:h-28 w-auto mx-auto md:mx-0 drop-shadow-lg"
              />
             
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-xl font-bold text-khaki">Mapa do site</h4>
              <nav className="grid grid-cols-1 gap-2 text-gray-200 text-sm">
                <a href="#hero" className="hover:text-khaki transition-colors">Início</a>
                <a href="#historia" className="hover:text-khaki transition-colors">Nossa História</a>
                <a href="#patrocinadores" className="hover:text-khaki transition-colors">Patrocinadores</a>
                <a href="#blog" className="hover:text-khaki transition-colors">Blog</a>
                <a href="#contato" className="hover:text-khaki transition-colors">Contato</a>
              </nav>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-100">Siga o Rally nas redes</p>
              <div className="flex space-x-6 pt-2">
                <a
                  href="https://www.facebook.com/rallydasafra"
                  target="_blank"
                  rel="noreferrer"
                  className="text-khaki hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/rallydasafra/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-khaki hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/rallydasafra"
                  target="_blank"
                  rel="noreferrer"
                  className="text-khaki hover:text-white transition-colors"
                >
                  <XIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/rally-da-safra/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-khaki hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-xs">
            <p>Política de Privacidade | Todos os Direitos Reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};



