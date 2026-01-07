
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo className="h-12" light={true} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none">TAB</span>
                <span className="text-xs font-light tracking-[0.2em] uppercase text-orange-400">ShortStay</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              TAB INTERMEDIACOES DE NEGOCIOS E SERVICOS LTDA. <br/>
              CRECI-J nº 41983-J | CNPJ nº 42.727.121/0001-80 <br/>
              Sua propriedade em boas mãos. Gestão profissional e rentabilidade garantida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#vantagens" className="hover:text-orange-400 transition-colors">Vantagens</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Serviços</a></li>
              <li><a href="#preco" className="hover:text-orange-400 transition-colors">Taxa de Gestão</a></li>
              <li><a href="#contato" className="hover:text-orange-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Políticas</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Privacidade & LGPD</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Contrato de Adesão</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TAB ShortStay. Todos os direitos reservados. Design para Performance ADS.</p>
        </div>
      </div>
    </footer>
  );
};
