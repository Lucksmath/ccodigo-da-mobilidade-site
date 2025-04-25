import React, { useState, useEffect } from 'react';
import { Dumbbell, Clock } from 'lucide-react';

const Header = () => {
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
    <header className="bg-emerald-600/95 backdrop-blur-sm py-4 px-6 flex justify-between items-center fixed w-full z-10 border-b border-white/20">
      <div className="flex items-center gap-2">
        <Dumbbell className="h-8 w-8 text-white" />
        <span className="text-white font-bold text-xl">CÓDIGO DA MOBILIDADE</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <Clock className="w-4 h-4 text-yellow-400" />
          <span className="text-white/90 text-sm">Oferta expira em:</span>
        </div>
        <div className="flex gap-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-yellow-400 px-2 py-1 rounded">
              <div className="text-sm font-bold text-emerald-900">{value.toString().padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;