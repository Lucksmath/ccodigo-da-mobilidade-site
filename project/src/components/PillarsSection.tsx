import React from 'react';
import { Check } from 'lucide-react';

const targetAudience = [
  "Atletas que treinam pesado mas vivem travados",
  "Quem sente dor durante snatch, overhead, agachamento ou pull-up",
  "Iniciantes e avançados que querem mais performance com segurança",
  "Pessoas que já tentaram de tudo mas continuam limitadas",
  "Quem quer prevenir lesões e treinar com mais confiança"
];

const PillarsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-emerald-600">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Pra quem é esse <span className="text-yellow-400">protocolo?</span>
        </h2>
        
        <p className="text-xl text-center text-white/90 mb-12">
          Se você se identifica com algum desses pontos, 
          esse protocolo foi feito especialmente para você:
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <ul className="space-y-6">
            {targetAudience.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-emerald-800" />
                </div>
                <p className="text-lg text-white">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;