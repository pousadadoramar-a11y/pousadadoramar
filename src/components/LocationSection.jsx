import React from "react";
import { MapPin, Clock } from "lucide-react";

export const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossa <span className="text-blue-400">Localização</span>
          </h2>
        </div>

        {/* Address Section - Sequential Rows */}
        <div className="space-y-8 mb-8">
          {/* Address Row */}
          <div className="text-center">
            <h3 className="text-blue-400 font-semibold text-xl flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span>Endereço</span>
            </h3>
            <div className="text-white">
              <p className="text-lg font-medium mb-2">
                R. Carangola, 292 - Praia do Morro, Guarapari - ES, CEP:
                29216-150
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Section - Full Width */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890!2d-40.4981!3d-20.6681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPousada%20Dora%20Mar!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Pousada Dora Mar - R. Carangola, 292, Guarapari - ES"
            className="w-full h-[450px]"
          ></iframe>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Venha nos conhecer!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estamos prontos para recebê-lo em nossa pousada familiar em
              Guarapari. Entre em contato para mais informações ou para fazer
              sua reserva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message =
                    "Olá! Gostaria de mais informações sobre a localização da Pousada Dora Mar.";
                  window.open(
                    `https://wa.me/5527988670914?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                <span>Como Chegar</span>
              </button>
              <button
                onClick={() => {
                  const message =
                    "Olá! Gostaria de fazer uma reserva na Pousada Dora Mar.";
                  window.open(
                    `https://wa.me/5527988670914?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Fazer Reserva
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
