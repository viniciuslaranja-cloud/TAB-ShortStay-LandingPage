
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const GeminiAdvisor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const contractContext = `
    Empresa: TAB ShortStay (TAB INTERMEDIACOES DE NEGOCIOS E SERVICOS LTDA).
    Serviços: Gestão em Airbnb, Booking, VRBO, Decolar.
    O que inclui: Criação/Otimização anúncios, Reservas, Verificação de hóspedes, Check-in/out, Limpeza, Manutenção, Suporte 24/7, Preços dinâmicos, Inventário, Seguro AirCover.
    Taxa: 15% sobre o valor líquido.
    Duração: 1 ano, renovável automaticamente.
    Diferencial: Equipe de inteligência de mercado para consultoria de aquisição e maximização de yield.
  `;

  const askGemini = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Você é o consultor virtual da TAB ShortStay focado em investidores imobiliários. Baseado no resumo do contrato abaixo, responda à dúvida de forma profissional, orientada a negócios e amigável em português do Brasil. Responda em no máximo 3 frases.\n\nContexto do Contrato: ${contractContext}\n\nPergunta do Proprietário: ${question}`,
        config: {
          temperature: 0.7,
          maxOutputTokens: 150
        }
      });
      
      setAnswer(response.text || "Desculpe, tive um problema ao processar sua resposta. Pode entrar em contato via WhatsApp?");
    } catch (error) {
      console.error(error);
      setAnswer("Ocorreu um erro na conexão. Por favor, tente novamente ou fale conosco diretamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-orange-50 border-y border-orange-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-orange-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-orange-950 leading-tight">Advisor de Investimento</h4>
              <p className="text-sm text-gray-500">Tire dúvidas sobre rentabilidade e nosso modelo de gestão.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ex: Como vocês maximizam o Cap Rate?"
                className="w-full px-8 py-5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 pr-36 transition-all"
                onKeyPress={(e) => e.key === 'Enter' && askGemini()}
              />
              <button 
                onClick={askGemini}
                disabled={loading}
                className="absolute right-2.5 top-2.5 bottom-2.5 bg-orange-600 text-white px-8 rounded-xl font-bold hover:bg-orange-700 transition-all disabled:bg-orange-300 shadow-md"
              >
                {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Consultar'}
              </button>
            </div>
            
            {answer && (
              <div className="p-6 bg-orange-950 rounded-2xl border-l-4 border-orange-600 animate-fade-in">
                <p className="text-orange-50 leading-relaxed font-medium">"{answer}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
