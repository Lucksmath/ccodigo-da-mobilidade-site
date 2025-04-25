import React from 'react';
import { Dumbbell, Shield, Target, Activity } from 'lucide-react';

const benefits = [
  {
    icon: <Dumbbell className="w-12 h-12 text-emerald-600" />,
    title: "Aumente sua carga no LPO",
    description: "Desenvolva mais estabilidade e confiança para progredir com segurança nos levantamentos"
  },
  {
    icon: <Shield className="w-12 h-12 text-emerald-600" />,
    title: "Elimine dores crônicas",
    description: "Livre-se das dores no ombro, joelho e quadril que limitam seu desempenho"
  },
  {
    icon: <Target className="w-12 h-12 text-emerald-600" />,
    title: "Corrija desequilíbrios",
    description: "Recupere sua amplitude de movimento natural e melhore seus padrões de movimento"
  },
  {
    icon: <Activity className="w-12 h-12 text-emerald-600" />,
    title: "Evite lesões",
    description: "Continue evoluindo no box com um corpo mais resistente e preparado"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Transforme sua <span className="text-emerald-600">Performance</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-emerald-50 rounded-xl p-6 text-center card-hover"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-900">{benefit.title}</h3>
              <p className="text-slate-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;