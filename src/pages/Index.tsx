import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WorkExperience } from '@/components/WorkExperience';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';



const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Services />
      <Testimonials />
   
    </>
  );
};

export default Index;
