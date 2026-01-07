
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-orange-950 mb-6">
              Pronto para maximizar sua renda?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Preencha o formulário e receba uma análise de viabilidade gratuita para o seu imóvel. Nossa equipe entrará em contato em até 24h.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="font-bold text-orange-950">Sede São Paulo</p>
                  <p className="text-gray-600 text-sm">Av. Paulista, 1471, Bela Vista</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="font-bold text-orange-950">Telefone / WhatsApp</p>
                  <p className="text-gray-600 text-sm">(11) 99954-1703</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            {status === 'success' ? (
              <div className="bg-white p-12 rounded-3xl shadow-2xl text-center border border-green-100">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600">Obrigado pelo interesse. Nossa equipe já recebeu seus dados e entrará em contato em breve.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-orange-600 font-bold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="(11) 99954-1703" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Localização do Imóvel</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Cidade e Bairro" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem (Opcional)</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Conte-nos um pouco sobre seu imóvel"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:-translate-y-1"
                >
                  {status === 'sending' ? 'Enviando...' : 'Solicitar Consultoria Grátis'}
                </button>
                <p className="text-center text-xs text-gray-400 pt-4">
                  Seus dados estão seguros conosco de acordo com a LGPD (Lei 13.709/2018).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
