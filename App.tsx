
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ServicesList } from './components/ServicesList';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Platforms } from './components/Platforms';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { GeminiAdvisor } from './components/GeminiAdvisor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Platforms />
        <Features />
        <ServicesList />
        <FeaturedProperties />
        <Testimonials />
        <Pricing />
        <GeminiAdvisor />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999541703" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 text-2xl"
        title="Fale Conosco no WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
