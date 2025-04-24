import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "15 vídeos explicativos com demonstração detalhada de cada movimento",
  "Planilha pronta para usar, sem precisar pensar em como organizar",
  "BÔNUS: Kit de exercícios para fazer sem equipamento (ideal para viagens)",
  "Instruções de execução e adaptação para cada nível de praticante",
  "Progressões específicas para superar seus limitantes de mobilidade"
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          O QUE VOCÊ <span className="text-red-600">RECEBE</span>
        </h2>
        
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-red-600 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;