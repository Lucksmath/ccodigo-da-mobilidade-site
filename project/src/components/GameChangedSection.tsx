import React from 'react';
import { ArrowDown } from 'lucide-react';

const GameChangedSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          O JOGO <span className="text-green-500">MUDOU</span>
        </h2>
        
        <div className="bg-black border border-gray-800 rounded-lg p-6 md:p-8 mb-10 transform transition-all duration-300 hover:border-green-500">
          <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
            Chega de material <span className="line-through">chato e técnico</span> que ninguém entende. 
            Aqui é <span className="text-green-500 font-bold">PRÁTICO E DIRETO</span>, feito por quem treina pesado e sabe o que realmente funciona.
          </p>
          
          <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
            Sem papo furado. Se você já está cansado de sentir dor nos movimentos ou quer 
            melhorar seus números, <span className="text-white font-bold">esse material foi criado para você</span>.
          </p>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Aplique hoje, sinta a diferença <span className="text-green-500 font-bold">AMANHÃ</span>.
          </p>
        </div>
        
        <div className="flex justify-center mt-10">
          <ArrowDown className="w-10 h-10 text-green-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default GameChangedSection