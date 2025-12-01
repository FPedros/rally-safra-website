import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Nossa História', href: '#historia' },
    { name: 'Patrocinadores', href: '#patrocinadores' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="font-heading font-bold text-2xl tracking-tighter">
          <span className={scrolled ? 'text-dark-green' : 'text-white'}>RALLY DA </span>
          <span className={scrolled ? 'text-raw-umber' : 'text-khaki'}>SAFRA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans font-semibold text-sm uppercase tracking-wide transition-colors hover:text-raw-umber ${
                scrolled ? 'text-dark-green' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
            scrolled 
              ? 'bg-hunter-green text-white hover:bg-dark-green' 
              : 'bg-white text-dark-green hover:bg-gray-100'
          }`}>
            Inscreva-se
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-dark-green' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-dark-green' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark-green font-semibold text-lg py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};