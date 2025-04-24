import React from 'react';
import { Unlock, Cog, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: <Unlock className="w-12 h-12 text-green-500 mb-4" />,
    title: 'Mobilidade de Alta Performance',
    description: 'Libere seus ombros, cotovelos e punhos para domininar os movimentos de ginástica e levantamentos olímpicos com confiança.',
    area: 'parte superior'
  },
  {
    icon: <Cog className="w-12 h-12 text-green-500 mb-4" />,
    title: 'Mobilidade de Controle Central',
    description: 'Estabilize seu core e desenvolva um tronco forte que transforma força em potência em qualquer movimento do CrossFit.',
    area: 'tronco'
  },
  {
    icon: <Rocket className="w-12 h-12 text-green-500 mb-4" />,
    title: 'Mobilidade Explosiva',
    description: 'Desbloqueie quadris, joelhos e tornozelos para agachamentos mais profundos e movimentos explosivos sem dor.',
    area: 'parte inferior'
  }
];

const PillarsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          OS <span className="text-green-500">3 PILARES</span> DA MOBILIDADE NO CROSSFIT
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 flex flex-col items-center text-center hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {pillar.icon}
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-400">{pillar.description}</p>
              <div className="mt-4 py-1 px-4 bg-gray-800 rounded-full text-sm text-gray-400">
                {pillar.area}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;