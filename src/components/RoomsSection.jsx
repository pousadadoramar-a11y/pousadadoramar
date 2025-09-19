import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Users, Bed, MessageCircle, Bath } from 'lucide-react';

export const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Suíte 01",
      capacity: "11 pessoas",
      description: "5 beliches + 1 cama de solteiro",
      features: ["Com suíte", "Banheiro privativo"],
      bedDetails: "5 beliches e 1 cama de solteiro",
      floor: "Térreo"
    },
    {
      id: 2,
      name: "Quarto 03",
      capacity: "8 pessoas",
      description: "4 beliches",
      features: ["Sem suíte"],
      bedDetails: "4 beliches",
      floor: "Térreo"
    },
    {
      id: 3,
      name: "Suíte 02",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Com suíte", "Banheiro privativo"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Térreo"
    },
    {
      id: 4,
      name: "Quarto 04",
      capacity: "4 pessoas",
      description: "2 beliches",
      features: ["Sem suíte"],
      bedDetails: "2 beliches",
      floor: "Segundo piso"
    },
    {
      id: 5,
      name: "Quarto 05",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Segundo piso"
    },
    {
      id: 6,
      name: "Quarto 06",
      capacity: "6 pessoas",
      description: "3 beliches",
      features: ["Sem suíte"],
      bedDetails: "3 beliches",
      floor: "Segundo piso"
    },
    {
      id: 7,
      name: "Quarto 07",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Segundo piso"
    },
    {
      id: 8,
      name: "Quarto 08",
      capacity: "6 pessoas",
      description: "1 cama de casal + 2 beliches",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 2 beliches",
      floor: "Segundo piso"
    },
    {
      id: 9,
      name: "Quarto 09",
      capacity: "3 pessoas",
      description: "1 cama de casal + 1 cama de solteiro",
      features: ["Sem suíte"],
      bedDetails: "1 cama de casal e 1 cama box solteiro",
      floor: "Segundo piso"
    }
  ];

  const handleRoomInquiry = (roomName) => {
    const message = `Olá! Gostaria de consultar a disponibilidade do ${roomName} na Pousada Dora Mar. Podem me ajudar?`;
    const whatsappUrl = `https://wa.me/5527988670914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

        {/* Rooms Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong>Suíte 01</strong>, que acomoda até 11 pessoas, equipada com 5 beliches e 1 cama de solteiro, além de banheiro privativo.
              </p>
              
              <p className="mb-4">
                <strong>Suíte 02</strong>, com capacidade para 6 pessoas, oferecendo 1 cama de casal e 2 beliches, também com banheiro privativo.
              </p>
              
              <p className="mb-4">
                <strong>Quarto 03</strong>, com espaço para até 8 pessoas, contendo 2 beliches, sem suíte.
              </p>
              
              <p className="mb-4 font-semibold text-gray-900">No segundo piso, as opções incluem:</p>
              
              <p className="mb-4">
                <strong>Quarto 04</strong>, para até 4 pessoas, com 2 beliches, sem suíte.
              </p>
              
              <p className="mb-4">
                <strong>Quarto 05</strong>, que comporta até 8 pessoas, com 1 cama de casal e 2 beliches, sem suíte.
              </p>
              
              <p className="mb-4">
                <strong>Quarto 06</strong>, com capacidade para 6 pessoas, equipado com 3 beliches, sem suíte.
              </p>
              
              <p className="mb-4">
                <strong>Quarto 07</strong>, para até 8 pessoas, oferecendo 1 cama de casal e 2 beliches, sem suíte.
              </p>
              
              <p className="mb-4">
                <strong>Quarto 08</strong>, também com capacidade para 8 pessoas, com 1 cama de casal e 2 beliches, sem suíte.
              </p>
              
              <p className="mb-4">
                <strong>Quarto 09</strong>, mais reservado, para até 3 pessoas, com 1 cama de casal e 1 cama box de solteiro, sem suíte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};