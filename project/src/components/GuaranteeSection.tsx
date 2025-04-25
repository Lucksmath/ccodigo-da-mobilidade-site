import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-emerald-600">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 text-center border border-white/20">
          <ShieldCheck className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            GARANTIA <span className="text-yellow-400">INCONDICIONAL</span> DE 7 DIAS
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
            Se por qualquer motivo você não ficar satisfeito com o material, 
            basta pedir seu dinheiro de volta em até 7 dias e devolvemos 100% do valor investido.
          </p>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            <span className="text-yellow-400 font-bold">Zero risco para você.</span> Aplique o método, 
            veja os resultados e só continue se realmente funcionar para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;