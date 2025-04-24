import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-black border-t border-gray-800 text-center">
      <p className="text-gray-500 text-sm">
        Produto digital. Acesso imediato. Sem enrolação.
      </p>
      <p className="text-gray-600 text-xs mt-4">
        © {new Date().getFullYear()} Desbloqueie Sua Mobilidade. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;