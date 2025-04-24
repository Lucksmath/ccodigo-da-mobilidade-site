import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
        
        return {
          hours: newHours < 0 ? 23 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offer-section" className="py-16 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black border-2 border-green-500 rounded-lg p-8 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            OFERTA <span className="text-green-500">LIMITADA</span>
          </h2>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <p className="text-gray-400 text-lg mb-2">De <span className="line-through">R$97</span> por apenas:</p>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">R$19,90</div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-green-500" />
            <p className="text-gray-300">Oferta disponível por tempo limitado</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-gray-900 p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">{unit.toUpperCase()}</div>
              </div>
            ))}
          </div>
          
          <a 
            href="https://pay.kiwify.com.br/ClmGfNK"
            className="block w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-md text-xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO DESBLOQUEAR MINHA MOBILIDADE AGORA
          </a>
          
          <p className="mt-6 text-gray-500 text-sm">
            Produto digital. Acesso imediato. Sem enrolação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection