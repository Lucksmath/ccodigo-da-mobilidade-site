import React from 'react';
import { AlertTriangle, Clock, Rocket } from 'lucide-react';

const copyBlocks = [
  {
    icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
    title: "VOCÊ TÁ TRAVADO E NEM SABE",
    content: (
      <>
        <p className="text-xl mb-6">
          Sabe por que você não consegue progredir carga no Snatch ou no Clean & Jerk, mesmo treinando como um condenado?
        </p>
        <p className="text-xl mb-6">
          Porque seu corpo tá limitado. E você nem percebe.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-300">Se sente insegurança no overhead...</li>
          <li className="text-gray-300">Se sente dor no joelho, quadril e não consegue melhorar seu squat</li>
          <li className="text-gray-300">Se cada movimento ginástico parece um desafio de sobrevivência pro seu ombro...</li>
        </ul>
        <p className="text-xl font-bold text-red-500">
          Então sim: você tá travado.
        </p>
        <p className="text-xl mt-4">
          E se continuar ignorando isso, não vai ser questão de "se" vai se lesionar, mas quando.
        </p>
        <button 
          onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 block text-center"
        >
          QUERO DESBLOQUEAR MINHA MOBILIDADE
        </button>
      </>
    )
  },
  {
    icon: <Clock className="w-12 h-12 text-yellow-500" />,
    title: "POR QUE A HORA É AGORA",
    content: (
      <>
        <p className="text-xl mb-6">
          Mobilidade não é luxo. É necessidade básica de quem leva o Cross a sério.
        </p>
        <p className="text-lg mb-4">
          Quanto antes você começar uma rotina eficaz, mais cedo você vai:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Prevenir lesões que te tirariam dos treinos por semanas</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Aumentar sua carga com segurança</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Evoluir mais rápido que a maioria da galera da box</span>
          </li>
        </ul>
        <p className="text-xl mb-4">
          Cada dia que você adia, é um dia que seu corpo continua travado.
        </p>
        <p className="text-xl font-bold text-yellow-500">
          E uma hora ele cobra.
        </p>
        <p className="text-xl mt-4">
          Não espere se machucar pra correr atrás do que já devia estar fazendo.
        </p>
        <button 
          onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 block text-center"
        >
          QUERO COMEÇAR AGORA
        </button>
      </>
    )
  }
];

const PersuasiveCopySection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        {copyBlocks.map((block, index) => (
          <div 
            key={index}
            className="mb-20 last:mb-0 bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-opacity-50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              {block.icon}
              <h2 className="text-2xl md:text-3xl font-bold">{block.title}</h2>
            </div>
            <div className="text-gray-300">
              {block.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersuasiveCopySection;