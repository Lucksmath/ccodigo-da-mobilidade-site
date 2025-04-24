import React from 'react';
import { Rocket } from 'lucide-react';

const UnlockPerformanceSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-green-500 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Rocket className="w-12 h-12 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-bold">PRONTO PRA DESBLOQUEAR SUA PERFORMANCE?</h2>
          </div>
          <div className="text-gray-300">
            <p className="text-xl mb-6">
              Imagina treinar com leveza, soltar os movimentos e ver o peso subir SEM dor, SEM travamento, SEM medo.
            </p>
            <p className="text-xl mb-6">
              Imagina fazer agachamento profundo, snatch limpo, ring muscle-up com fluidez...
            </p>
            <p className="text-xl mb-6">
              É exatamente isso que você vai construir com O Código da Mobilidade.
            </p>
            <p className="text-xl mb-6">
              Não importa se você é iniciante ou já tá há anos no box.<br />
              Esse protocolo é o que separa os fortes dos lesionados.
            </p>
            <p className="text-xl font-bold text-green-500">
              Se você leva seu corpo e sua performance a sério...<br />
              Então essa é a hora de agir.
            </p>
            <button 
              onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-md text-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              QUERO DESBLOQUEAR MINHA MOBILIDADE AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockPerformanceSection;