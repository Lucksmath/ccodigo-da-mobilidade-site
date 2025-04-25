import React from 'react';

const testimonials = [
  {
    name: "Lucas M.",
    location: "São Paulo",
    text: "Antes sentia dor toda vez que agachava, e nas aulas de LPO sempre sofria. Com os exercícios da planilha, destravei meu quadril e hoje treino muito mais leve, sem dor no joelho. Agora é PR todo mês haha",
    image: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Paula G.",
    location: "Rio de Janeiro",
    text: "Sempre fui travada no overhead. Depois que comecei a fazer os 15 minutos da rotina da mobilidade antes do treino, meu ombro não deu mais sinal de vida nos ginasticos.",
    image: "https://images.pexels.com/photos/3757370/pexels-photo-3757370.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Rafael S.",
    location: "Curitiba",
    text: "Não dava valor pra mobilidade, até ficar 2 meses fora dos treinos por uma lesão no ombro fazendo um Jerk pesado. Esse material me salvou. 2 meses aplicando todo dia direitinho e já voltei a subir carga",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Vanderson L.",
    location: "Belo Horizonte",
    text: "Faço Cross há 3 anos e nunca pensei que mobilidade fosse fazer tanta diferença. Eu achava que agachar era dificil pq eu era fraca, mas meu corpo não tava preparado, se eu tivesse percebido isso antes teria me saído melhor nos torneios do box 🥲",
    image: "https://images.pexels.com/photos/4401806/pexels-photo-4401806.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-emerald-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          DEPOIMENTOS DE QUEM <span className="text-yellow-400">DESBLOQUEOU A MOBILIDADE</span> E VIU RESULTADO NO BOX
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-white text-lg mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-semibold">{testimonial.name}</span>
                    <span className="text-white/50">•</span>
                    <span className="text-white/80">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;