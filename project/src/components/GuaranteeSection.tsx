import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-8 md:p-10 text-center">
          <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            GARANTIA <span className="text-green-500">INCONDICIONAL</span> DE 7 DIAS
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
            Se por qualquer motivo você não ficar satisfeito com o material, 
            basta pedir seu dinheiro de volta em até 7 dias e devolvemos 100% do valor investido.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            <span className="text-green-500 font-bold">Zero risco para você.</span> Aplique o método, 
            veja os resultados e só continue se realmente funcionar para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;