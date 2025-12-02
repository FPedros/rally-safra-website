import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const logoBranca = `${assetBase}hero/marca2026-branca.png`;

  return (
    <footer className="bg-cafe-noir text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <img
              src={logoBranca}
              alt="Rally da Safra"
              className="h-28 md:h-32 w-auto mx-auto md:mx-0 drop-shadow-lg"
            />
            
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-khaki hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-khaki hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-khaki hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-khaki hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs mt-8">
          <p>Política de Privacidade | Todos os Direito Reservados.</p>
        </div>
      </div>
    </footer>
  );
};
