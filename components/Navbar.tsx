
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Logo className={scrolled ? "h-10" : "h-12"} light={!scrolled} />
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight leading-none ${scrolled ? 'text-orange-950' : 'text-white'}`}>
              TAB
            </span>
            <span className={`text-xs font-light tracking-[0.2em] uppercase ${scrolled ? 'text-orange-600' : 'text-orange-200'}`}>
              ShortStay
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center font-medium text-sm uppercase tracking-wider">
          <a href="#vantagens" className={`${scrolled ? 'text-gray-600' : 'text-white/90'} hover:text-orange-500 transition-colors`}>Vantagens</a>
          <a href="#servicos" className={`${scrolled ? 'text-gray-600' : 'text-white/90'} hover:text-orange-500 transition-colors`}>O que fazemos</a>
          <a href="#portfolio" className={`${scrolled ? 'text-gray-600' : 'text-white/90'} hover:text-orange-500 transition-colors`}>Portfólio</a>
          <a href="#depoimentos" className={`${scrolled ? 'text-gray-600' : 'text-white/90'} hover:text-orange-500 transition-colors`}>Depoimentos</a>
          <a href="#preco" className={`${scrolled ? 'text-gray-600' : 'text-white/90'} hover:text-orange-500 transition-colors`}>Taxas</a>
          <a 
            href="#contato" 
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-white text-orange-900 hover:bg-orange-50'
            }`}
          >
            Quero Anunciar
          </a>
        </div>
      </div>
    </nav>
  );
};
