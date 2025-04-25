import React from 'react';
import { Shield, Clock, Trophy } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen relative pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-shadow text-white max-w-4xl mx-auto">
            Evite lesões e aumente sua performance no CrossFit com apenas <span className="text-accent">15 minutos</span> por dia!
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-white max-w-3xl mx-auto">
            Descubra o protocolo usado por atletas funcionais para liberar amplitude, 
            corrigir padrões e treinar pesado sem dor.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">15min/dia</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Acesso imediato</span>
            </div>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 w-full">
              <p className="text-white text-lg mb-2">De <span className="line-through">R$97</span> por apenas:</p>
              <p className="text-4xl font-bold text-white">R$19,90</p>
            </div>

            <button 
              onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 animate-pulse shadow-lg"
            >
              QUERO MELHORAR MINHA MOBILIDADE AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;