import React from 'react';

const movements = [
  {
    name: "Overhead Squat",
    image: "https://breakingmuscle.com//wp-content/uploads/2014/09/tjg9226.jpg",
    description: "Mobilidade de ombros e quadril para OHS perfeitos"
  },
  {
    name: "Snatch",
    image: "https://planetacrossfit.com/wp-content/uploads/2024/03/crossfit-snatch.jpg",
    description: "Flexibilidade e potência para o arranco"
  },
  {
    name: "Bar Muscle Up",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjNZcEwHljFIPK9BD_CMatkWsx-4Hik7M2Q&s",
    description: "Mobilidade de ombros para BMUs fluidos"
  },
  {
    name: "Handstand Push-up",
    image: "https://www.crossfit.com/wp-content/uploads/2024/11/08074250/workout-of-the-day-headstand-1024x683.jpg",
    description: "Estabilidade e força para HSPUs"
  },
  {
    name: "Clean & Jerk",
    image: "https://thumbnails.crossfit.com/legacy/13072713474870_37352_2.jpg",
    description: "Mobilidade completa para o C&J"
  },
  {
    name: "Squat",
    image: "https://i.ytimg.com/vi/9IWGVtcYylM/maxresdefault.jpg",
    description: "Profundidade e estabilidade no agachamento"
  }
];

const MovementsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-emerald-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          AINDA TEM <span className="text-yellow-400">DÚVIDA?</span>
        </h2>
        <p className="text-xl text-white/90 text-center mb-12">
          Veja os movimentos que você vai melhorar sua performance com uma boa mobilidade:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movements.map((movement, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={movement.image} 
                  alt={movement.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{movement.name}</h3>
                <p className="text-white/80">{movement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovementsSection;