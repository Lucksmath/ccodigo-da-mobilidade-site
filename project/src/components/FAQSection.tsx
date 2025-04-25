import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Para quem é o Código da Mobilidade?",
    answer: "Para qualquer praticante de Cross que queira aumentar a performance nos treinos sem correr riscos de lesão! Se você for scaled ou RX, suas articulações vão agradecer!"
  },
  {
    question: "Como acesso a Planilha?",
    answer: "Assim que finalizar sua compra você recebe no seu e-mail o acesso a Planilha para você já começar a colocar em prática HOJE!"
  },
  {
    question: "E se eu desistir da Planilha?",
    answer: "Você tem 7 dias de garantia incondicional! Ou você melhora sua mobilidade ou tem seu dinheiro de volta!"
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas <span className="text-emerald-600">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-emerald-50 rounded-xl p-6 card-hover"
            >
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{faq.question}</h3>
              <p className="text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;