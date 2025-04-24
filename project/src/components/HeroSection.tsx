import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12 bg-black min-h-screen flex flex-col justify-center items-center text-center">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          VOCÊ SÓ PRECISA DE <span className="text-red-500">15 MINUTOS</span> COM OS MOVIMENTOS CERTOS PARA EVOLUIR NOS WODS!
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          <span className="text-green-500 font-bold">Acesse a planilha com os 15 movimentos</span> mais eficientes que vão desbloquear sua mobilidade, 
          turbinar sua performance no Cross e ainda te proteger de lesões.
        </h2>
        <div className="mt-6 w-full max-w-md mx-auto">
          <button 
            onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-md text-lg transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            QUERO DESBLOQUEAR MINHA MOBILIDADE AGORA
          </button>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-lg">Por apenas:</p>
            <p className="text-4xl font-bold text-green-500">R$19,90</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection