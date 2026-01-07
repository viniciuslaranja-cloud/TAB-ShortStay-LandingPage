
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative hero-gradient pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-700 opacity-30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Rentabilize seu Imóvel sem Stress e Sem Trabalho.
          </h1>
          <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-xl">
            Gestão profissional 360º para locações em Airbnb, Booking e VRBO. Cuidamos de tudo: do anúncio inteligente ao check-out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contato" className="bg-white text-orange-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-1">
              Falar com um Especialista
            </a>
            <div className="flex items-center justify-center space-x-4 px-6 py-4">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-orange-800 shadow-sm" alt="User" />
                 ))}
               </div>
               <span className="text-sm font-medium text-orange-100">+50 imóveis sob gestão</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" 
              alt="Studio de Luxo" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-white font-bold text-lg">Superhost Partner</p>
                </div>
                <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-bold">
                  Airbnb Preferred
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
