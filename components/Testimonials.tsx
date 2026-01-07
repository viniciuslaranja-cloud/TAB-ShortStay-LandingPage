
import React from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ricardo Mendes",
      location: "Proprietário no Guarujá",
      text: "Antes da TAB meu apartamento ficava vazio metade do mês. Hoje, a ocupação é constante e eu não preciso me preocupar nem com a troca de chaves. O lucro subiu 40%.",
      stars: 5
    },
    {
      name: "Mariana Silva",
      location: "Investidora em São Paulo",
      text: "A gestão de preços deles é fantástica. Conseguem diárias muito acima do que eu conseguia sozinha. O suporte 24h realmente funciona e os hóspedes elogiam muito.",
      stars: 5
    },
    {
      name: "Carlos Alberto",
      location: "Proprietário na Enseada",
      text: "Minha maior preocupação era o cuidado com o imóvel. O inventário que a TAB faz me dá total segurança. Recebo meu relatório mensal pontualmente, recomendo!",
      stars: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-3">Prova Social</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-orange-950">O que nossos parceiros dizem</h3>
          <p className="mt-4 text-gray-600">Histórias reais de quem transformou seus imóveis em fontes de renda passiva com a TAB ShortStay.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs">
                <i className="fas fa-quote-left"></i>
              </div>
              
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">{review.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-50 px-6 py-3 rounded-full border border-orange-100">
            <i className="fab fa-google text-orange-600"></i>
            <span className="text-orange-900 font-medium text-sm">Avaliação 4.9/5 estrelas no Google Meu Negócio</span>
          </div>
        </div>
      </div>
    </section>
  );
};
