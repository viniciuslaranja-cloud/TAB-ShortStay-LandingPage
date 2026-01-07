
import React from 'react';

export const ServicesList: React.FC = () => {
  const services = [
    "Criação e otimização de anúncios estratégicos",
    "Gerenciamento completo de reservas e calendário",
    "Verificação de identidade de hóspedes potenciais",
    "Coordenação de check-in e check-out (presencial ou remoto)",
    "Gestão rigorosa de limpeza e insumos",
    "Manutenção preventiva e corretiva da propriedade",
    "Assistência 24h / 7 dias durante todas as estadias",
    "Gestão dinâmica de preços (Sazonalidade e Eventos)",
    "Inventário detalhado de itens e ativos do imóvel",
    "Abertura de chamados para seguro AirCover",
    "Relatório mensal financeiro e de vacância"
  ];

  return (
    <section id="servicos" className="py-24 bg-orange-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-900 opacity-20 -skew-x-12 translate-x-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-orange-300 text-sm font-bold uppercase tracking-wider mb-3">Gestão Completa 360º</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8">Nós fazemos tudo. <br/>Você só recebe.</h3>
            <p className="text-orange-100 text-lg mb-10 leading-relaxed">
              Baseado em nosso contrato de adesão padrão, oferecemos o serviço mais robusto do mercado para garantir a preservação do seu patrimônio e o máximo de lucro.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="mt-1 bg-orange-500 rounded-full p-1 text-[10px]">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="text-orange-100 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973eb0732da?auto=format&fit=crop&w=800&q=80" 
                alt="Executivo TAB ShortStay com tablet" 
                className="rounded-2xl w-full h-[600px] object-cover" 
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-orange-400/30 rounded-3xl -rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
