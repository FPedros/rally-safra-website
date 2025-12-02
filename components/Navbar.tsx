import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'blog' | 'post';
  onNavigate: (view: 'home' | 'blog' | 'post', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [passedHero, setPassedHero] = useState(false);
  const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const logoMarcaBranca = `${assetBase}hero/marca2026-branca.png`;
  const logoMarcaColorida = `${assetBase}hero/marca2026-colorida.png`;
  const logoSrc = currentView === 'home' && !passedHero ? logoMarcaBranca : logoMarcaColorida;
  const isHeroStage = currentView === 'home' && !passedHero;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Usa sentinela no fim do Hero para saber quando trocar o estilo
  useEffect(() => {
    if (currentView === 'blog' || currentView === 'post') {
      setPassedHero(true);
      return;
    }

    const sentinel = document.getElementById('hero-end');
    if (!sentinel) {
      setPassedHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Considera "passou" quando o sentinela entrou na viewport ou ficou acima dela
        setPassedHero(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [currentView]);

  const handleNavClick = (view: 'home' | 'blog', sectionId?: string) => {
    setIsOpen(false);
    onNavigate(view, sectionId);
  };

  const navLinks = [
    { name: 'Inicio', view: 'home', sectionId: undefined },
    { name: 'Nossa Historia', view: 'home', sectionId: 'historia' },
    { name: 'Patrocinadores', view: 'home', sectionId: 'patrocinadores' },
    { name: 'Blog', view: 'blog', sectionId: undefined },
    { name: 'Contato', view: 'home', sectionId: 'contato' },
  ];

  // Estilo claro apos sair do Hero ou no Blog/Post; branco enquanto no Hero
  const isDarkNav = !isHeroStage && (scrolled || currentView === 'blog' || currentView === 'post');
  const ctaClass = isHeroStage
    ? 'border-2 border-white text-white bg-transparent hover:bg-white/10'
    : isDarkNav
      ? 'bg-hunter-green text-white hover:bg-dark-green'
      : 'bg-white text-dark-green hover:bg-gray-100';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isDarkNav ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="Rally da Safra"
            className="h-20 md:h-24 w-auto drop-shadow-lg"
          />
          <span className="sr-only">Rally da Safra</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view as 'home' | 'blog', link.sectionId)}
              className={`font-sans font-semibold text-sm uppercase tracking-wide transition-colors hover:text-raw-umber ${
                isDarkNav ? 'text-dark-green' : 'text-white/90'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('home', 'contato')}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors cursor-pointer ${ctaClass}`}>
            Inscreva-se
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isDarkNav ? 'text-dark-green' : 'text-white'} />
          ) : (
            <Menu className={isDarkNav ? 'text-dark-green' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col space-y-4 h-screen">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view as 'home' | 'blog', link.sectionId)}
              className="text-dark-green font-semibold text-lg py-2 border-b border-gray-100 text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
