import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black py-4 px-6 flex justify-between items-center fixed w-full z-10 border-b border-green-500">
      <div className="flex items-center gap-2">
        <Dumbbell className="h-8 w-8 text-green-500" />
        <span className="text-white font-bold text-xl">DESBLOQUEIE SUA MOBILIDADE</span>
      </div>
      <button 
        onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-bold text-sm transition-all duration-300 transform hover:scale-105">
        GARANTIR AGORA
      </button>
    </header>
  );
};

export default Header;