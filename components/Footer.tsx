import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

type FooterProps = {
  onNavigate?: (view: 'home' | 'blog' | 'post' | 'historia' | 'privacidade', sectionId?: string) => void;
};

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
                  <XIcon className="w-5 h-5" />
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
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate('privacidade')}
                className="text-khaki hover:text-white transition-colors"
              >
                Política de Privacidade
              </button>
            ) : (
              <span className="text-khaki">Política de Privacidade</span>
            )}
            <span className="mx-2 text-gray-500">|</span>
            <span>Todos os Direitos Reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};



