import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GameChangedSection from './components/GameChangedSection';
import PillarsSection from './components/PillarsSection';
import SolutionSection from './components/SolutionSection';
import TestimonialsSection from './components/TestimonialsSection';
import BenefitsSection from './components/BenefitsSection';
import PersuasiveCopySection from './components/PersuasiveCopySection';
import UnlockPerformanceSection from './components/UnlockPerformanceSection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import MovementsSection from './components/MovementsSection';
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
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <GameChangedSection />
        <PillarsSection />
        <PersuasiveCopySection />
        <SolutionSection />
        <TestimonialsSection />
        <BenefitsSection />
        <UnlockPerformanceSection />
        <OfferSection />
        <GuaranteeSection />
        <MovementsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;