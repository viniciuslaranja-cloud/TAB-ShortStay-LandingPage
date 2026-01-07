
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="preco" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-3/5 p-12">
            <h2 className="text-orange-600 font-bold mb-4">NOSSO MODELO DE PARCERIA</h2>
            <h3 className="text-3xl font-extrabold text-orange-950 mb-6">Taxa de Sucesso: Só ganhamos se você ganhar.</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa remuneração é simples e transparente: cobramos uma taxa sobre o valor líquido das reservas. Sem taxas fixas mensais pesadas.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3 text-gray-700">
                <i className="fas fa-check-circle text-orange-500"></i>
                <span>Pagamento direto na sua conta bancária</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <i className="fas fa-check-circle text-orange-500"></i>
                <span>Relatórios financeiros no 1º dia útil do mês</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <i className="fas fa-check-circle text-orange-500"></i>
                <span>Gestão inteligente de taxas de limpeza</span>
              </li>
            </ul>
            
            <a href="#contato" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all">
              Consultar Viabilidade
            </a>
          </div>
          
          <div className="md:w-2/5 bg-orange-600 p-12 text-white flex flex-col justify-center items-center text-center">
            <span className="text-orange-100 uppercase tracking-widest text-sm font-bold mb-2">TAXA DE GESTÃO</span>
            <div className="text-7xl font-black mb-4">15<span className="text-4xl">%</span></div>
            <p className="text-orange-50 font-medium">Sobre o valor líquido de cada reserva</p>
            <div className="mt-8 pt-8 border-t border-orange-500 w-full">
              <p className="text-xs text-orange-100">
                * Conforme Cláusula 3ª do nosso contrato padrão. <br/> Taxas de plataforma e limpeza descontadas antes do cálculo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
