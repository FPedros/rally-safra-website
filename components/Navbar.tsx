import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'blog';
  onNavigate: (view: 'home' | 'blog', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'home' | 'blog', sectionId?: string) => {
    setIsOpen(false);
    onNavigate(view, sectionId);
  };

  const navLinks = [
    { name: 'Início', view: 'home', sectionId: undefined },
    { name: 'Nossa História', view: 'home', sectionId: 'historia' },
    { name: 'Patrocinadores', view: 'home', sectionId: 'patrocinadores' },
    { name: 'Blog', view: 'blog', sectionId: undefined },
    { name: 'Contato', view: 'home', sectionId: 'contato' },
  ];

  // Force dark styling on blog page or when scrolled
  const isDarkNav = scrolled || currentView === 'blog';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isDarkNav ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="font-heading font-bold text-2xl tracking-tighter text-left">
          <span className={isDarkNav ? 'text-dark-green' : 'text-white'}>RALLY DA </span>
          <span className={isDarkNav ? 'text-raw-umber' : 'text-khaki'}>SAFRA</span>
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
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors cursor-pointer ${
            isDarkNav 
              ? 'bg-hunter-green text-white hover:bg-dark-green' 
              : 'bg-white text-dark-green hover:bg-gray-100'
          }`}>
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