
import React from 'react';

export const Features: React.FC = () => {
  const benefits = [
    {
      title: "Market Intelligence & Advisory",
      desc: "Consultoria estratégica para aquisição. Nossa equipe analisa dados de RevPAR e demanda local para identificar ativos com maior potencial de yield antes da sua compra.",
      icon: "fa-magnifying-glass-chart"
    },
    {
      title: "Maximização de Ocupação",
      desc: "Algoritmos de precificação dinâmica que monitoram a concorrência em tempo real, garantindo uma taxa de ocupação até 35% superior à média do mercado tradicional.",
      icon: "fa-arrow-trend-up"
    },
    {
      title: "Gestão Passiva de Ativos",
      desc: "Transformamos seu imóvel em um dividendo real. Cuidamos de toda a vertical operacional para que você foque apenas na expansão do seu portfólio.",
      icon: "fa-arrow-up-right-dots"
    },
    {
      title: "Preservação de Patrimônio",
      desc: "Manutenção preventiva de alto padrão e governança rigorosa. Garantimos que seu ativo se valorize ao longo do tempo através de um cuidado impecável.",
      icon: "fa-gem"
    }
  ];

  return (
    <section id="vantagens" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-orange-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">Performance Imobiliária</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-orange-950 leading-tight">
              Gestão estratégica para investidores que buscam <span className="text-orange-600">rendimento real.</span>
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg max-w-xs">
              <p className="text-orange-900 text-sm font-medium">
                "Nossa missão é otimizar o Cap Rate dos seus ativos através de inteligência de dados."
              </p>
            </div>
          </div>
        </div>
        
        {/* Grid 2x2 com cards horizontais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col sm:flex-row items-start gap-6">
              {/* Hover effect indicator */}
              <div className="absolute top-0 left-0 w-1.5 h-0 bg-orange-600 group-hover:h-full transition-all duration-500"></div>
              
              <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 text-3xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                <i className={`fas ${item.icon}`}></i>
              </div>
              
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-3 text-orange-950 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center text-orange-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>Análise de Viabilidade</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Advisory Highlight */}
        <div className="mt-20 p-1 md:p-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-[2rem] shadow-xl">
          <div className="bg-orange-950 rounded-[1.8rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="inline-block bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Serviço Exclusivo
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Market Intelligence: Consultoria para Aquisição
              </h4>
              <p className="text-orange-100/80 leading-relaxed">
                Não compre seu próximo imóvel às cegas. Nossa equipe de análise de dados fornece um relatório completo de viabilidade financeira, estimativa de ADR (Average Daily Rate) e projeção de ROI anual para garantir que seu investimento seja lucrativo desde o dia 1.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <a href="#contato" className="inline-block bg-white text-orange-950 px-8 py-4 rounded-2xl font-black hover:bg-orange-50 transition-all shadow-lg hover:scale-105">
                AGENDAR CONSULTORIA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
