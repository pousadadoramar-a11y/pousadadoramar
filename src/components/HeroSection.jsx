import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, MapPin, Users, Wifi } from 'lucide-react';

export const HeroSection = () => {
  const handleWhatsAppAvailability = () => {
    const message = "Olá! Gostaria de consultar a disponibilidade de quartos na Pousada Dora Mar. Podem me ajudar?";
    const whatsappUrl = `https://wa.me/5527988670914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppContact = () => {
    const message = "Olá! Visitei o site da Pousada Dora Mar e gostaria de mais informações sobre hospedagem.";
    const whatsappUrl = `https://wa.me/5527988670914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light blue background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dora Mar
                <span className="block text-sky-600">Pousada em Guarapari-ES</span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Ambiente familiar aconchegante a apenas <strong className="text-sky-700">5 minutos da Praia do Morro</strong>. 
                Oferecemos conforto e o melhor atendimento para sua estadia em Guarapari.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="w-8 h-8 text-sky-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Até 50 pessoas</p>
                <p className="text-xs text-gray-600">Grupos e excursões</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <Wifi className="w-8 h-8 text-sky-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Wi-Fi Gratuito</p>
                <p className="text-xs text-gray-600">Internet liberada</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <MapPin className="w-8 h-8 text-sky-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">5 min da praia</p>
                <p className="text-xs text-gray-600">Localização privilegiada</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button 
                onClick={handleWhatsAppAvailability}
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consultar Disponibilidade</span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};