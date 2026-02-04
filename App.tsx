import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Button from './components/Button';
import { ROOMS, TESTIMONIALS, FAQS, SURROUNDINGS, WHATSAPP_LINK, BOOKING_LINK, AIRBNB_LINK } from './constants';
import { Room } from './types';
import { 
  Wifi, 
  Wind, 
  Tv, 
  Coffee, 
  Maximize, 
  Users, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Ban, 
  Baby, 
  MapPin, 
  Star, 
  ChevronDown, 
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Calendar,
  Home,
  Instagram,
  Facebook,
  Map,
  X,
  Camera
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Gallery State
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openGallery = (room: Room, index: number = 0) => {
    setSelectedRoom(room);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeGallery = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedRoom) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length);
    }
  }, [selectedRoom]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedRoom) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length);
    }
  }, [selectedRoom]);

  // Handle keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedRoom) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRoom, nextImage, prevImage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1920&auto=format&fit=crop" 
            alt="Pousada Morada do Sol" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text legibility */}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.2em] text-sm md:text-base font-medium text-secondary mb-4 block"
          >
            Praia do Rosa • Santa Catarina
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-tight"
          >
            Seu refúgio de paz<br /> entre a serra e o mar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto"
          >
            Desconecte-se da rotina e conecte-se com a natureza em um ambiente acolhedor e familiar.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" className="w-full sm:w-auto" icon={<MessageCircle size={20} />}>
                Reservar pelo WhatsApp
              </Button>
            </a>
            <div className="flex gap-3">
              <a href={BOOKING_LINK} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-lg font-medium transition-colors">
                Booking.com
              </a>
              <a href={AIRBNB_LINK} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-lg font-medium transition-colors">
                Airbnb
              </a>
            </div>
          </motion.div>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="text-xs text-gray-300 mt-4 opacity-80"
          >
            Atendimento rápido • Sem taxas extras na reserva direta
          </motion.p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <Section id="sobre">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Nossa História</span>
            <h2 className="text-4xl font-serif text-gray-800">Hospitalidade com alma e conforto desde 2018</h2>
            <div className="w-16 h-1 bg-secondary"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Desde 2018 recebendo hóspedes que buscam tranquilidade, conforto e contato com a natureza, com atendimento personalizado e ambiente familiar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa pousada foi pensada nos mínimos detalhes para acolher casais em busca de romance e famílias que desejam momentos de qualidade. Aqui, o tempo passa mais devagar e o barulho da cidade dá lugar ao canto dos pássaros e à brisa do mar.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 p-2 rounded-full text-primary mt-1">
                  <HeartHandshakeIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Atendimento Próximo</h4>
                  <p className="text-sm text-gray-500">Sinta-se em casa com nossa equipe.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 p-2 rounded-full text-primary mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Localização Privilegiada</h4>
                  <p className="text-sm text-gray-500">Perto do centro e da natureza.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-xl z-0 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=600&auto=format&fit=crop" 
              alt="Área externa da pousada" 
              className="rounded-xl shadow-xl relative z-10 w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </Section>

      {/* ROOMS SECTION */}
      <Section id="acomodacoes" background="light">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Conforto & Charme</span>
          <h2 className="text-4xl font-serif text-gray-800 mt-2">Nossas Acomodações</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Escolha o espaço ideal para o seu descanso. Todas as opções incluem enxoval de algodão egípcio e amenities exclusivos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div key={room.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group h-full">
              {/* Image Area with Trigger */}
              <div 
                className="relative overflow-hidden h-64 cursor-pointer group/image"
                onClick={() => openGallery(room)}
              >
                <img 
                  src={room.images[0]} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800 uppercase tracking-wide z-10">
                  {room.priceLevel}
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                     <Camera size={16} /> Ver {room.images.length} fotos
                   </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-gray-800 mb-2 group-hover:text-primary transition-colors">{room.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{room.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1"><Maximize size={16} /> {room.size}</span>
                  <span className="flex items-center gap-1"><Users size={16} /> {room.capacity}</span>
                </div>

                <div className="mb-6 flex-1">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Comodidades</h4>
                  <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-secondary shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </li>
                    ))}
                    {room.amenities.length > 4 && (
                      <li className="text-xs text-primary font-medium flex items-center pt-1">
                        + {room.amenities.length - 4} itens
                      </li>
                    )}
                  </ul>
                </div>

                <div className="bg-stone-50 p-3 rounded-lg mb-6 border border-stone-100">
                   <p className="text-xs text-stone-600 italic">
                     <span className="font-bold">Nota:</span> {room.comfortNote}
                   </p>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="primary" className="w-full justify-center text-sm">
                      Reservar Quarto
                    </Button>
                  </a>
                  <button 
                    onClick={() => openGallery(room)}
                    className="text-sm text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-all w-full text-center"
                  >
                    Ver galeria de fotos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* POLICIES SECTION (New) */}
      <Section id="politicas">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-gray-800">Políticas da Pousada</h2>
            <p className="text-gray-500 mt-2">Informações importantes para sua estadia.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <Clock size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Horários</h4>
              <p className="text-sm text-gray-600">Check-in: 14:00h</p>
              <p className="text-sm text-gray-600">Check-out: 11:00h</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <CreditCard size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Pagamento</h4>
              <p className="text-sm text-gray-600">Pix (5% off), Cartão de Crédito e Dinheiro.</p>
              <p className="text-sm text-gray-600">50% na reserva.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <Baby size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Crianças</h4>
              <p className="text-sm text-gray-600">Crianças até 5 anos são cortesia na cama dos pais.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <Ban size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Pets</h4>
              <p className="text-sm text-gray-600">Aceitamos pequeno porte sob consulta prévia e taxa.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SURROUNDINGS / EXPERIENCES (New) */}
      <Section id="experiencias" background="light">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-primary font-bold tracking-wider text-sm uppercase">Arredores</span>
             <h2 className="text-4xl font-serif text-gray-800 mt-2 mb-6">Explore a Praia do Rosa</h2>
             <p className="text-gray-600 mb-8 text-lg">
               Estamos estrategicamente localizados para que você aproveite o melhor da região. Praias paradisíacas, trilhas deslumbrantes e uma gastronomia inesquecível a poucos passos.
             </p>
             <div className="space-y-6">
                {SURROUNDINGS.map((item, index) => (
                  <div key={index} className="flex gap-4 group cursor-default">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg shadow-sm" />
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-xs font-bold text-secondary uppercase tracking-wide">{item.distance}</span>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>
           <div className="h-full min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518306727284-4c3e7e5d3d6a?q=80&w=800&auto=format&fit=crop" 
                alt="Praia do Rosa vista aérea" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <p className="text-white text-lg font-serif italic">"Um paraíso preservado onde a natureza dita o ritmo."</p>
              </div>
           </div>
        </div>
      </Section>

      {/* TESTIMONIALS (New) */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800">O que dizem nossos hóspedes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-stone-50 p-8 rounded-xl relative">
              <div className="absolute top-8 right-8 text-secondary/30">
                <QuoteIcon size={40} />
              </div>
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ SECTION (New) */}
      <Section id="faq" background="light" className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-800">Perguntas Frequentes</h2>
          <p className="text-gray-500 mt-2">Tire suas dúvidas antes de reservar.</p>
        </div>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openFaq === index ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>
      
      {/* LOCATION PREVIEW (New) */}
      <Section id="localizacao" className="pb-0">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
          <div>
             <span className="text-primary font-bold tracking-wider text-sm uppercase">Localização</span>
             <h2 className="text-3xl font-serif text-gray-800 mt-2 mb-6">Como chegar</h2>
             <p className="text-gray-600 mb-6 leading-relaxed">
               Estamos situados em uma área tranquila, mas com fácil acesso ao centrinho e às melhores praias da região. Um ponto de partida perfeito para suas aventuras.
             </p>
             <div className="space-y-4">
               <div className="flex items-start gap-3">
                 <MapPin className="text-secondary shrink-0 mt-1" />
                 <p className="text-gray-700 font-medium">Estrada Geral do Rosa, s/n - Imbituba, SC</p>
               </div>
               <div className="flex items-start gap-3">
                  <Clock className="text-secondary shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">80km do Aeroporto de Florianópolis</p>
               </div>
             </div>
             <a 
               href="https://maps.google.com/?q=Praia+do+Rosa" 
               target="_blank" 
               rel="noopener noreferrer"
               className="mt-8 inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors border-b-2 border-primary hover:border-primary/80 pb-1"
             >
               <Map size={18} className="mr-2" />
               Ver rota no Google Maps
             </a>
          </div>
          <div className="h-[350px] w-full rounded-xl overflow-hidden shadow-inner bg-gray-100">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28330.136006121764!2d-48.65330368149258!3d-28.12571477742095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9526b7720330084d%3A0x63344654f5728c30!2sPraia%20do%20Rosa!5e0!3m2!1spt-BR!2sbr!4v1709230000000!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Mapa de Localização"
             ></iframe>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-primary text-white py-20 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Pronto para viver dias incríveis?</h2>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Garanta sua reserva com as melhores condições e venha descansar na Praia do Rosa.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" className="w-full md:w-auto h-14 text-lg">
                <MessageCircle className="mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
               <Button variant="secondary" className="w-full md:w-auto h-14 text-lg">
                <Calendar className="mr-2" />
                Reservar pelo Booking
              </Button>
            </a>
            <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer">
               <Button variant="secondary" className="w-full md:w-auto h-14 text-lg bg-[#FF5A5F] text-white hover:bg-[#E00007] shadow-red-200">
                <Home className="mr-2" />
                Airbnb
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-300 opacity-80">
            Respondemos em poucos minutos • Ambiente Seguro
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8 border-b border-stone-800 pb-8">
          <div>
             <h3 className="text-white text-xl font-serif mb-4 flex items-center gap-2">
               <Home size={20} /> Morada do Sol
             </h3>
             <p className="text-sm leading-relaxed mb-4">
               Hospedagem com alma, conforto e natureza na Praia do Rosa, SC.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-stone-900 transition-colors text-white">
                 <Instagram size={20} />
               </a>
               <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-stone-900 transition-colors text-white">
                 <Facebook size={20} />
               </a>
             </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#acomodacoes" className="hover:text-secondary transition-colors">Acomodações</a></li>
              <li><a href="#experiencias" className="hover:text-secondary transition-colors">Experiências</a></li>
              <li><a href="#politicas" className="hover:text-secondary transition-colors">Políticas</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contato</h4>
             <ul className="space-y-2 text-sm">
               <li>Praia do Rosa, Imbituba - SC</li>
               <li>reservas@moradadosol.com.br</li>
               <li>+55 (48) 9999-9999</li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-xs text-stone-600">
          © {new Date().getFullYear()} Pousada Morada do Sol. Todos os direitos reservados.
        </div>
      </footer>

      {/* GALLERY LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeGallery}
          >
            {/* Controls Header */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
              <div className="text-white">
                <h3 className="text-lg font-serif">{selectedRoom.title}</h3>
                <p className="text-sm text-gray-400">{currentImageIndex + 1} / {selectedRoom.images.length}</p>
              </div>
              <button 
                onClick={closeGallery}
                className="text-white hover:text-secondary transition-colors p-2 bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center">
              <button 
                onClick={prevImage}
                className="absolute left-0 md:-left-12 text-white hover:text-secondary transition-colors p-3 z-20 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft size={40} />
              </button>

              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                src={selectedRoom.images[currentImageIndex]} 
                alt={`${selectedRoom.title} - Foto ${currentImageIndex + 1}`} 
                className="max-h-full max-w-full object-contain rounded-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button 
                onClick={nextImage}
                className="absolute right-0 md:-right-12 text-white hover:text-secondary transition-colors p-3 z-20 hover:bg-white/10 rounded-full"
              >
                <ChevronRight size={40} />
              </button>
            </div>

            {/* Thumbnails Strip */}
            <div className="absolute bottom-6 left-0 w-full flex justify-center px-4 overflow-x-auto">
              <div className="flex gap-2 max-w-full overflow-x-auto p-2" onClick={(e) => e.stopPropagation()}>
                {selectedRoom.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                      currentImageIndex === idx 
                        ? 'ring-2 ring-secondary scale-110 opacity-100' 
                        : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helper component for icons used in JSX only
const HeartHandshakeIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="M18 15v2.25a2.25 2.25 0 0 1-2.25 2.25H8.25a2.25 2.25 0 0 1-2.25-2.25v-1.35"/></svg>
);

const QuoteIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
);

export default App;