import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Visitei o site da Pousada Dora Mar e gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/5527988670914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-2">Pousada Dora Mar Guarapari</h3>
          <p className="text-gray-300 text-sm mb-1">Contato</p>
          <p className="text-gray-300 text-sm mb-1">R. Carangola, 292 - Praia do Morro</p>
          <p className="text-gray-300 text-sm mb-1">Guarapari - ES, CEP: 29216-150</p>
          <p className="text-gray-300 text-sm">(27) 98867-0914</p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pousada Dora Mar. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};