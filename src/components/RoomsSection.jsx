import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, Bed, MessageCircle, Bath } from "lucide-react";

export const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Suíte 01",
      capacity: "11 pessoas",
      description: "5 beliches + 1 cama de solteiro",
      features: ["Com suíte", "Banheiro privativo"],
      bedDetails: "5 beliches e 1 cama de solteiro",
      floor: "Térreo",
    },
    {
      id: 2,
      name: "Quarto 03",
      capacity: "8 pessoas",
      description: "4 beliches",
      features: ["Sem suíte"],
      bedDetails: "4 beliches",
      floor: "Térreo",
    },
    {
      id: 3,
      name: "Suíte 02",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Com suíte", "Banheiro privativo"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Térreo",
    },
    {
      id: 4,
      name: "Quarto 04",
      capacity: "4 pessoas",
      description: "2 beliches",
      features: ["Sem suíte"],
      bedDetails: "2 beliches",
      floor: "Segundo piso",
    },
    {
      id: 5,
      name: "Quarto 05",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Segundo piso",
    },
    {
      id: 6,
      name: "Quarto 06",
      capacity: "6 pessoas",
      description: "3 beliches",
      features: ["Sem suíte"],
      bedDetails: "3 beliches",
      floor: "Segundo piso",
    },
    {
      id: 7,
      name: "Quarto 07",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Segundo piso",
    },
    {
      id: 8,
      name: "Quarto 08",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Segundo piso",
    },
    {
      id: 9,
      name: "Quarto 09",
      capacity: "3 pessoas",
      description: "1 cama de casal + 1 cama de solteiro",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 1 cama box solteiro",
      floor: "Segundo piso",
    },
  ];

  const handleRoomInquiry = (roomName) => {
    const message = `Olá! Gostaria de consultar a disponibilidade do ${roomName} na Pousada Dora Mar. Podem me ajudar?`;
    const whatsappUrl = `https://wa.me/5527988670914?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="quartos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Nossa <span className="text-sky-600">Pousada</span>
          </h2>

          {/* Images Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            <img
              src="/images/quarto-pousada-dora-2mar.jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/quarto-pousada-dora-mar (2).jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/f740bf2e-e4e3-4cd4-9a2d-fa02d5c5e0db.jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/quarto-pousada-dora-mar (4).jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/quarto-pousada-dora-mar (5).jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/quarto-pousada-dora-mar (6).jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/quarto-pousada-dora-mar.jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/WhatsApp Image 2025-09-15 at 00.23.58.jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/WhatsApp Image 2025-09-15 at 00.23.59 (1).jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/WhatsApp Image 2025-09-15 at 00.23.59.jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/WhatsApp Image 2025-09-15 at 00.24.02.jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/WhatsApp Image 2025-09-15 at 13.02.45.jpeg"
              alt="Quarto da Pousada Dora Mar"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Térreo Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-lg border-2 border-sky-200">
                🏠 Térreo
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {rooms
                .filter((room) => room.floor === "Térreo")
                .map((room) => (
                  <Card
                    key={room.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 border-sky-200 hover:border-sky-400 bg-gradient-to-br from-sky-50/50 to-white"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            {room.name}
                          </h4>
                          <Badge
                            variant="secondary"
                            className="bg-sky-600 text-white text-xs font-semibold"
                          >
                            🏠 {room.floor}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1 text-sky-600">
                          <Users className="w-5 h-5" />
                          <span className="font-bold text-lg">
                            {room.capacity}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Bed className="w-4 h-4 text-sky-600" />
                          <span className="text-sm">{room.bedDetails}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {room.features.map((feature, index) => (
                            <Badge
                              key={index}
                              variant={
                                feature.includes("suíte")
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                feature.includes("suíte")
                                  ? "bg-sky-600 text-white font-semibold"
                                  : "border-sky-300 text-sky-700 bg-sky-50"
                              }
                            >
                              {feature.includes("suíte") ? (
                                <Bath className="w-3 h-3 mr-1" />
                              ) : null}
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleRoomInquiry(room.name)}
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-200"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Consultar Disponibilidade
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Segundo Piso Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-lg border-2 border-emerald-200">
                🏢 Segundo Piso
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms
                .filter((room) => room.floor === "Segundo piso")
                .map((room) => (
                  <Card
                    key={room.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-400 bg-gradient-to-br from-emerald-50/50 to-white"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            {room.name}
                          </h4>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-600 text-white text-xs font-semibold"
                          >
                            🏢 {room.floor}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1 text-emerald-600">
                          <Users className="w-5 h-5" />
                          <span className="font-bold text-lg">
                            {room.capacity}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Bed className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm">{room.bedDetails}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {room.features.map((feature, index) => (
                            <Badge
                              key={index}
                              variant={
                                feature.includes("suíte")
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                feature.includes("suíte")
                                  ? "bg-emerald-600 text-white font-semibold"
                                  : "border-emerald-300 text-emerald-700 bg-emerald-50"
                              }
                            >
                              {feature.includes("suíte") ? (
                                <Bath className="w-3 h-3 mr-1" />
                              ) : null}
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleRoomInquiry(room.name)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Consultar Disponibilidade
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 via-emerald-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Resumo da Nossa Pousada
            </h3>
            <p className="text-gray-600">
              Total de acomodações e capacidade máxima por andar
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-sky-200">
              <div className="text-3xl font-bold text-sky-600 mb-2">9</div>
              <div className="text-gray-600 font-medium">
                Quartos Disponíveis
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-sky-200">
              <div className="text-3xl font-bold text-sky-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">
                🏠 Quartos no Térreo
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-emerald-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-gray-600 font-medium">
                🏢 Quartos no 2º Piso
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-700 mb-2">60+</div>
              <div className="text-gray-600 font-medium">
                Pessoas Capacidade Total
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
