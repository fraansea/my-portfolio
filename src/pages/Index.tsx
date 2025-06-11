import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WorkExperience } from '@/components/WorkExperience';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="bg-white flex w-full flex-col overflow-hidden items-center max-md:max-w-full">
        <Hero />
        <About />
        <WorkExperience />
        <Services />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
