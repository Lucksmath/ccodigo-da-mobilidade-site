import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import BenefitsSection from './components/BenefitsSection';
import MovementsSection from './components/MovementsSection';
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Desbloqueie Sua Mobilidade | Para Atletas de CrossFit";
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('section');
    fadeElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="bg-emerald-50">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <BenefitsSection />
        <MovementsSection />
        <TestimonialsSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;