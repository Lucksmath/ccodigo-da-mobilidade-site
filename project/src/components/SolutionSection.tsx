import React from 'react';
import { FileSpreadsheet, Timer, Video } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black border-2 border-green-500 rounded-lg p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            A <span className="text-green-500">SOLUÇÃO</span> RÁPIDA E SIMPLES
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center text-center">
              <FileSpreadsheet className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Planilha Pronta</h3>
              <p className="text-gray-400">Organize sua rotina sem complicação</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Video className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Vídeos Curtos</h3>
              <p className="text-gray-400">Instruções diretas, sem enrolação</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Timer className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Aplicação Rápida</h3>
              <p className="text-gray-400">Apenas 10-15 minutos por dia</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl text-center leading-relaxed">
            <span className="text-green-500 font-bold">Sem mistérios.</span> Uma planilha prática com vídeos curtos mostrando 
            exatamente o que fazer, quando fazer e como fazer para desbloquear sua mobilidade de vez.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection