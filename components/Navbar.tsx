import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'blog' | 'post' | 'historia';
  onNavigate: (view: 'home' | 'blog' | 'post' | 'historia', sectionId?: string) => void;
  categories?: string[];
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, categories = [], onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [passedHero, setPassedHero] = useState(false);
  const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const logoMarcaBranca = `${assetBase}hero/marca2026-branca.svg`;
  const logoMarcaColorida = `${assetBase}hero/marca2026-colorida.svg`;
  const logoBrancaFallback = `${assetBase}hero/marca2026-branca.png`;
  const logoColoridaFallback = `${assetBase}hero/marca2026-colorida.png`;
  const isHeroStage = currentView === 'home' && !passedHero;
  // Header fica transparente no Hero; fica branco assim que sair dele ou em outras paginas
  const isDarkNav = !isHeroStage;
  const logoSrc = isDarkNav ? logoMarcaColorida : logoMarcaBranca; // logo segue a cor atual do header

  // Usa sentinela no fim do Hero para saber quando trocar o estilo
  useEffect(() => {
    if (currentView === 'blog' || currentView === 'post' || currentView === 'historia') {
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

  const handleNavClick = (view: 'home' | 'blog' | 'historia', sectionId?: string) => {
    setIsOpen(false);
    onNavigate(view, sectionId);
  };

  const navLinks = [
    { name: 'Inicio', view: 'home', sectionId: undefined },
    { name: 'Nossa Historia', view: 'historia', sectionId: undefined },
    { name: 'Patrocinadores', view: 'home', sectionId: 'patrocinadores' },
    { name: 'Contato', view: 'home', sectionId: 'contato' },
  ];
  const navLinksMobile = [...navLinks, { name: 'Blog', view: 'blog', sectionId: undefined }];

  const ctaClass = isHeroStage
    ? 'border-2 border-white text-white bg-transparent hover:bg-white/10'
    : 'bg-hunter-green text-white hover:bg-dark-green';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isDarkNav ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center gap-4">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="Rally da Safra"
            className="h-12 md:h-16 w-auto drop-shadow-lg"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              const isWhite = target.src.includes('marca2026-branca');
              const fallback = isWhite ? logoBrancaFallback : logoColoridaFallback;
              if (target.src !== fallback) target.src = fallback;
            }}
          />
          <span className="sr-only">Rally da Safra</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view as 'home' | 'blog' | 'historia', link.sectionId)}
              className={`font-sans font-semibold text-sm uppercase tracking-wide transition-colors hover:text-raw-umber ${
                isDarkNav ? 'text-dark-green' : 'text-white/90'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setIsBlogOpen(true)}
            onMouseLeave={() => setIsBlogOpen(false)}
          >
            <button
              onClick={() => {
                setIsBlogOpen(false);
                handleNavClick('blog');
              }}
              className={`font-sans font-semibold text-sm uppercase tracking-wide transition-colors hover:text-raw-umber ${
                isDarkNav ? 'text-dark-green' : 'text-white/90'
              } flex items-center gap-1`}
            >
              Blog
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isBlogOpen ? 'rotate-180' : ''} ${
                  isDarkNav ? 'text-dark-green' : 'text-white/90'
                }`}
              />
            </button>
            {isBlogOpen && categories.length > 0 && (
              <div
                className="absolute right-0 top-full pt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-[200]"
                onMouseEnter={() => setIsBlogOpen(true)}
                onMouseLeave={() => setIsBlogOpen(false)}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory?.(cat);
                      setIsBlogOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-dark-green hover:bg-gray-100"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://form.rallydasafra.com.br/newsletter-rally-da-safra"
            target="_blank"
            rel="noreferrer"
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors cursor-pointer ${ctaClass}`}
          >
            Inscreva-se na newsletter do Rally
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none ml-auto"
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
          {navLinksMobile.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view as 'home' | 'blog' | 'historia', link.sectionId)}
              className="text-dark-green font-semibold text-lg py-2 border-b border-gray-100 text-left"
            >
              {link.name}
            </button>
          ))}
          <div className="border-b border-gray-100 pb-2">
            <p className="text-dark-green font-semibold text-lg mb-2">Blog</p>
            <div className="flex flex-col space-y-2">
              {categories.length > 0 ? (
                categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory?.(cat);
                      setIsOpen(false);
                    }}
                    className="text-dark-green text-base text-left px-2 py-1 rounded hover:bg-gray-100"
                  >
                    {cat}
                  </button>
                ))
              ) : (
                <span className="text-sm text-gray-500 px-2">Sem categorias</span>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
