import { Room, Testimonial, FAQItem, Surrounding } from './types';

export const WHATSAPP_LINK = "https://wa.me/5548999999999?text=Olá! Gostaria de verificar disponibilidade na Pousada Morada do Sol.";
export const BOOKING_LINK = "#";
export const AIRBNB_LINK = "#";

export const ROOMS: Room[] = [
  {
    id: 'suite-master',
    title: 'Suíte Master Vista Mar',
    description: 'Nossa acomodação mais exclusiva. Perfeita para casais em lua de mel ou momentos especiais.',
    size: '45m²',
    capacity: '2 adultos',
    priceLevel: '$$$',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop', // Main Bedroom
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', // Bathroom
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop', // Pool/View
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop'  // Detail
    ],
    amenities: ['Hidromassagem', 'Cama King Size', 'Ar Condicionado Split', 'Varanda Privativa', 'Frigobar Retrô', 'Smart TV 50"'],
    comfortNote: 'Isolamento acústico reforçado e cortinas blackout total para seu descanso absoluto.'
  },
  {
    id: 'studio-jardim',
    title: 'Studio Jardim',
    description: 'Conforto e praticidade cercado pelo verde. Ideal para quem busca conexão com a natureza.',
    size: '30m²',
    capacity: '2 adultos + 1 criança',
    priceLevel: '$$',
    images: [
      'https://images.unsplash.com/photo-1522771753035-4850d32f5242?q=80&w=800&auto=format&fit=crop', // Cozy Room
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop', // Detail
      'https://images.unsplash.com/photo-1512918760513-95f6929c3c38?q=80&w=800&auto=format&fit=crop', // Balcony
      'https://images.unsplash.com/photo-1616594039964-40891a909d72?q=80&w=800&auto=format&fit=crop'  // Interior
    ],
    amenities: ['Cama Queen', 'Ar Condicionado', 'Mini Cozinha', 'Rede na Varanda', 'Wi-Fi Fibra'],
    comfortNote: 'Iluminação amarelada suave e som dos pássaros pela manhã.'
  },
  {
    id: 'loft-familia',
    title: 'Loft Família',
    description: 'Espaço amplo integrado para compartilhar bons momentos com quem você ama.',
    size: '55m²',
    capacity: '4 pessoas',
    priceLevel: '$$',
    images: [
      'https://images.unsplash.com/photo-1591088398332-c518a22717f4?q=80&w=800&auto=format&fit=crop', // Main
      'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop', // Kitchen/Dining
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop', // Living Area
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop'  // Detail
    ],
    amenities: ['1 Cama Queen + 2 Solteiro', 'Cozinha Completa', 'Varanda Ampla', 'Ar Condicionado', 'Mesa de Jantar'],
    comfortNote: 'Ambiente térreo com fácil acessibilidade e vista para a piscina.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    location: 'Porto Alegre, RS',
    text: 'A pousada é um encanto! Tudo muito limpo e organizado. O atendimento foi impecável do início ao fim. Voltaremos com certeza!'
  },
  {
    id: '2',
    name: 'Carlos & Fernanda',
    location: 'São Paulo, SP',
    text: 'Lugar perfeito para desconectar. A Suíte Master tem uma vista incrível. O café da manhã é delicioso e feito com carinho.'
  },
  {
    id: '3',
    name: 'Ricardo Gomes',
    location: 'Curitiba, PR',
    text: 'Excelente localização, perto do centrinho mas silenciosa à noite. A equipe nos deu ótimas dicas de trilhas.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "A pousada aceita pets?",
    answer: "Amamos animais! Aceitamos pets de pequeno porte (até 10kg) mediante aviso prévio e taxa única de higienização. Temos algumas regras de convivência para garantir o conforto de todos."
  },
  {
    question: "O café da manhã está incluso na diária?",
    answer: "Sim! Nosso café da manhã é servido diariamente das 8h às 10h30, com pães artesanais, frutas da estação, bolos caseiros e opções quentes feitas na hora."
  },
  {
    question: "A pousada possui estacionamento?",
    answer: "Sim, dispomos de estacionamento privativo fechado e monitorado, gratuito para todos os hóspedes (uma vaga por acomodação)."
  },
  {
    question: "Como funciona a política de cancelamento?",
    answer: "Para cancelamentos até 15 dias antes do check-in, reembolsamos 100% do valor. Entre 14 e 7 dias, o valor fica como crédito para futura hospedagem. Menos de 7 dias, não há reembolso."
  },
  {
    question: "Qual o horário de check-in e check-out?",
    answer: "Nosso check-in inicia às 14h e o check-out deve ser realizado até às 11h. Late check-out sujeito a disponibilidade e taxa adicional."
  }
];

export const SURROUNDINGS: Surrounding[] = [
  {
    title: 'Praia do Rosa Norte',
    description: 'Famosa pelas ondas perfeitas e pelo visual selvagem.',
    distance: '15 min caminhada',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop' // Reliable Beach Image
  },
  {
    title: 'Centrinho do Rosa',
    description: 'Gastronomia, lojinhas de artesanato e vida noturna charmosa.',
    distance: '5 min caminhada',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop' // Restaurant/Night
  },
  {
    title: 'Trilha do Luz',
    description: 'Caminhada ecológica com vistas panorâmicas deslumbrantes.',
    distance: 'Início a 800m',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop' // Nature Trail
  }
];