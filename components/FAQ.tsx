
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-orange-950 pr-8">{q}</span>
        <i className={`fas fa-chevron-down transition-transform duration-300 text-orange-600 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Eu recebo o pagamento diretamente das plataformas?",
      a: "Sim. De acordo com a Cláusula 3ª do contrato, as locações são pagas diretamente ao proprietário pelas plataformas (Airbnb, Booking, etc). Você nos repassa nossa taxa de 15% mensalmente após o recebimento do balanço."
    },
    {
      q: "Quem paga a limpeza e os materiais?",
      a: "O custo da taxa de limpeza é repassado ao hóspede pelas plataformas. O proprietário é responsável por garantir que o apartamento tenha os insumos iniciais e materiais de limpeza, os quais nós gerenciamos para você."
    },
    {
      q: "E se um hóspede quebrar algo?",
      a: "Nossa equipe realiza inventário em cada saída. Em caso de danos, acionamos imediatamente o seguro AirCover (Airbnb) ou realizamos a cobrança direta via plataforma. Você está protegido."
    },
    {
      q: "Posso usar meu próprio apartamento?",
      a: "Com certeza! Basta nos avisar com antecedência para bloquearmos as datas no calendário das plataformas para o seu uso pessoal."
    },
    {
      q: "Qual o tempo mínimo de contrato?",
      a: "O contrato padrão tem duração de 1 ano, com renovação automática. Caso deseje rescindir antes, há uma multa prevista, exceto em caso de venda do imóvel."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-orange-950">Dúvidas Frequentes</h2>
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
};
