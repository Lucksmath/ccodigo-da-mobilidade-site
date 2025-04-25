import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 31,
    seconds: 12
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
    <section id="offer-section" className="py-20 px-6 md:px-12 bg-emerald-600">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 text-center border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            OFERTA <span className="text-yellow-400">LIMITADA</span>
          </h2>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <p className="text-white/90 text-lg mb-2">De <span className="line-through">R$97</span> por apenas:</p>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">R$19,90</div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-yellow-400" />
            <p className="text-white/90">Oferta disponível por tempo limitado</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-yellow-400 p-4 rounded-lg border border-yellow-300">
                <div className="text-3xl font-bold text-emerald-900">{value.toString().padStart(2, '0')}</div>
                <div className="text-xs font-semibold text-emerald-800">{unit.toUpperCase()}</div>
              </div>
            ))}
          </div>
          
          <a 
            href="https://pay.kiwify.com.br/ClmGfNK"
            className="block w-full max-w-md mx-auto bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            QUERO DESBLOQUEAR MINHA MOBILIDADE AGORA
          </a>
          
          <p className="mt-6 text-white/70 text-sm">
            Produto digital. Acesso imediato. Sem enrolação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;