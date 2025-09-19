import React from 'react';
import { Card, CardContent } from './ui/card';
import { 
  Wifi, 
  Car, 
  Coffee, 
  ChefHat, 
  Users, 
  Waves, 
  MapPin, 
  ShoppingBag,
  Utensils,
  Bath
} from 'lucide-react';

export const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Car,
      title: "Estacionamento",
      description: "Estacionamento gratuito para hóspedes",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ChefHat,
      title: "Área de Churrasqueira",
      description: "Churrasqueira com pia para confraternizações",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Gratuito",
      description: "Internet liberada em todas as acomodações",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Coffee,
      title: "Café da Manhã",
      description: "Café da manhã incluso na hospedagem",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Utensils,
      title: "Cozinha Disponível",
      description: "Cozinha equipada para uso dos hóspedes",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Bath,
      title: "Quarto com Geladeira",
      description: "1 quarto com geladeira",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Users,
      title: "Grupos e Excursões",
      description: "Aceitamos excursões de até 52 pessoas",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Waves,
      title: "Próximo à Praia",
      description: "5 minutos a pé da Praia do Morro",
      color: "bg-sky-100 text-sky-600"
    },
    {
      icon: ShoppingBag,
      title: "Perto do Comércio",
      description: "Próximo a mercados e farmácias",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const highlights = [
    {
      title: "Ambiente Familiar",
      description: "Diferencial no atendimento com ambiente acolhedor e organizado"
    },
    {
      title: "Localização Privilegiada",
      description: "A 5 minutos da Praia do Morro e próximo ao comércio local"
    },
    {
      title: "Espaço para Grupos",
      description: "Área ampla com churrasqueira para confraternizações"
    }
  ];

  return (
    <section id="comodidades" className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas <span className="text-sky-600">Comodidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos tudo que você precisa para uma estadia confortável e memorable em Guarapari.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-sky-100">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${amenity.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlights Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher a <span className="text-sky-600">Pousada Dora Mar</span>?
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-sky-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para sua estadia em Guarapari?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e garante já sua reserva na pousada mais acolhedora de Guarapari!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const message = "Olá! Gostaria de fazer uma reserva na Pousada Dora Mar. Podem me ajudar?";
                window.open(`https://wa.me/5527988670914?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              <span>Fazer Reserva</span>
            </button>
            <button 
              onClick={() => {
                const message = "Olá! Gostaria de saber mais sobre as comodidades da Pousada Dora Mar.";
                window.open(`https://wa.me/5527988670914?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Mais Informações
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};