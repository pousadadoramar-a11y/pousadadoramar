import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppContact = () => {
    const message = "Olá, visitei o site da Pousada Dora Mar e gostaria de mais informações!";
    const whatsappUrl = `https://wa.me/5527988670914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sky-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Pousada Dora Mar</h1>
              <p className="text-xs text-sky-600">Guarapari - ES</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('quartos')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors"
            >
              Quartos
            </button>
            <button 
              onClick={() => scrollToSection('comodidades')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors"
            >
              Comodidades
            </button>
            <button 
              onClick={() => scrollToSection('localizacao')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors"
            >
              Localização
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>(27) 98867-0914</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-sky-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-sky-100">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('quartos')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors"
              >
                Quartos
              </button>
              <button 
                onClick={() => scrollToSection('comodidades')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors"
              >
                Comodidades
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={handleWhatsAppContact}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>(27) 98867-0914</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};