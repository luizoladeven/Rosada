import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
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
    { name: 'Acomodações', href: '#acomodacoes' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Experiências', href: '#experiencias' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-2xl font-serif font-semibold tracking-wide flex items-center gap-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          <Sun className={scrolled ? 'text-secondary' : 'text-white'} size={28} />
          Morada do Sol
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium tracking-wide hover:text-secondary transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              scrolled 
                ? 'bg-primary text-white hover:bg-slate-700' 
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            Reservar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={scrolled ? 'text-gray-800' : 'text-white'} size={28} />
          ) : (
            <Menu className={scrolled ? 'text-gray-800' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-800 text-lg font-medium py-2 border-b border-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            className="mt-2 bg-primary text-white text-center py-3 rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            Reservar via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;