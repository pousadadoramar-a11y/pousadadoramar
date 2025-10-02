import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Home,
  Bed,
  Wifi,
  Car,
  Utensils,
  Users,
} from "lucide-react";

export const Footer = () => {
  const handleWhatsAppContact = () => {
    const message =
      "Olá! Visitei o site da Pousada Dora Mar e gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/5527988670914?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Pousada Dora Mar
                </h3>
                <p className="text-gray-300 text-sm">Guarapari - ES</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ambiente familiar aconchegante com diferencial no atendimento.
              Sempre limpo, organizado e próximo à Praia do Morro.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-blue-400 font-semibold text-lg">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-white hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quartos")}
                  className="text-white hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                >
                  <Bed className="w-4 h-4" />
                  <span>Quartos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("comodidades")}
                  className="text-white hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                >
                  <Wifi className="w-4 h-4" />
                  <span>Comodidades</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Localização</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contato</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-blue-400 font-semibold text-lg">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-white text-sm">(27) 98867-0914</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="text-white text-sm">
                  <div>R. Carangola, 292</div>
                  <div>Praia do Morro, Guarapari - ES</div>
                  <div>CEP: 29216-150</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Services */}
          <div className="space-y-4">
            <h4 className="text-blue-400 font-semibold text-lg">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Hospedagem para até 50 pessoas</span>
              </li>
              <li className="flex items-center space-x-2">
                <Utensils className="w-4 h-4 text-blue-400" />
                <span>Café da manhã incluso</span>
              </li>
              <li className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-blue-400" />
                <span>Wi-Fi gratuito</span>
              </li>
              <li className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-blue-400" />
                <span>Estacionamento</span>
              </li>
              <li className="flex items-center space-x-2">
                <Utensils className="w-4 h-4 text-blue-400" />
                <span>Área de churrasqueira</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Grupos e excursões</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pousada Dora Mar. Todos os direitos
              reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
