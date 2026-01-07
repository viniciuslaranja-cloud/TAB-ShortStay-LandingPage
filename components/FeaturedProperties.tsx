
import React from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  url: string;
}

export const FeaturedProperties: React.FC = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: "Type Enseada - Studio Premium",
      location: "Guarujá, SP",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      rating: 4.98,
      reviews: 124,
      url: "https://www.airbnb.com.br/rooms/1507598524740328901"
    },
    {
      id: 2,
      title: "Loft Moderno e Sofisticado",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      rating: 4.95,
      reviews: 86,
      url: "https://www.airbnb.com.br/rooms/1232070642113391257"
    },
    {
      id: 3,
      title: "Flat Executivo Design",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      rating: 4.92,
      reviews: 54,
      url: "https://www.airbnb.com.br/rooms/1275035153319112932"
    },
    {
      id: 4,
      title: "Studio Design Vila Olímpia",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      rating: 4.97,
      reviews: 38,
      url: "https://www.airbnb.com.br/rooms/1280597527247072016"
    },
    {
      id: 5,
      title: "Apto Conforto e Praticidade",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      rating: 4.89,
      reviews: 67,
      url: "https://www.airbnb.com.br/rooms/1272554860688944519"
    },
    {
      id: 6,
      title: "Luxury Studio Experience",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1536376074432-bf12178048b3?auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      reviews: 29,
      url: "https://www.airbnb.com.br/rooms/1574293925535817431"
    },
    {
      id: 7,
      title: "Smart Living Pinheiros",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=800&q=80",
      rating: 4.94,
      reviews: 45,
      url: "https://www.airbnb.com.br/rooms/1262317909739343681"
    },
    {
      id: 8,
      title: "Business Suite Faria Lima",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      rating: 4.91,
      reviews: 33,
      url: "https://www.airbnb.com.br/rooms/1563860528485342537"
    },
    {
      id: 9,
      title: "Premium Loft Bela Vista",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80",
      rating: 4.96,
      reviews: 92,
      url: "https://www.airbnb.com.br/rooms/1066942571070013593"
    },
    {
      id: 10,
      title: "Coastal Retreat Pitangueiras",
      location: "Guarujá, SP",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
      rating: 4.88,
      reviews: 51,
      url: "https://www.airbnb.com.br/rooms/1483517357414666475"
    },
    {
      id: 11,
      title: "Urban Stay Consolação",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      rating: 4.93,
      reviews: 41,
      url: "https://www.airbnb.com.br/rooms/1279862484967900607"
    },
    {
      id: 12,
      title: "Sunset View Enseada",
      location: "Guarujá, SP",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      reviews: 19,
      url: "https://www.airbnb.com.br/rooms/1320311971451278638"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">Resultados Tangíveis</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-orange-950">Portfólio de Performance</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Confira os ativos imobiliários que transformamos em fontes de renda consistentes. Atualmente gerimos mais de {properties.length} propriedades de alto padrão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-5 shadow-lg">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-orange-600 text-[10px] font-black uppercase tracking-wider">Gestão TAB</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fab fa-airbnb text-orange-600 text-lg"></i>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col px-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-orange-950 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {prop.title}
                  </h4>
                  <div className="flex items-center space-x-1 text-xs font-bold whitespace-nowrap ml-2">
                    <i className="fas fa-star text-orange-500"></i>
                    <span>{prop.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-xs mb-4 flex items-center">
                  <i className="fas fa-location-dot mr-1.5 text-orange-400"></i>
                  {prop.location}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">{prop.reviews} AVALIAÇÕES</span>
                  <a 
                    href={prop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 font-bold text-xs flex items-center hover:underline"
                  >
                    VER NO AIRBNB <i className="fas fa-arrow-up-right-from-square ml-1.5 text-[10px]"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
          <div className="flex flex-col items-center">
            <div className="flex -space-x-3 mb-4">
               {[1,2,3,4,5].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/prop${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Hóspede" />
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-white shadow-sm bg-orange-600 text-white flex items-center justify-center text-xs font-bold">+5k</div>
            </div>
            <p className="text-orange-950 font-bold text-lg">Mais de 5.000 check-ins realizados com sucesso.</p>
            <p className="text-gray-600 text-sm mt-1">Nossa média de avaliação em todo o portfólio é de 4.92 estrelas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
