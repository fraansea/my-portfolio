import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="flex flex-col max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 max-md:items-center max-md:text-center" data-aos="fade-up">
      <h2 className="text-black text-3xl font-bold font-manrope leading-tight tracking-tight mt-20 mb-8">
        About
      </h2>
      <p className="text-zinc-600 text-xl font-normal font-manrope leading-8 tracking-wide max-w-2xl mx-auto mb-8">
        I'm Francis Gigi, a designer, coder, and photography lover. I'm a Computer Science student at Christ College of Engineering. I enjoy building creative projects and exploring new ideas in tech, design, and photography.
      </p>
      <p className="text-zinc-600 text-xl font-normal font-manrope leading-8 tracking-wide max-w-2xl mx-auto mb-12">
        I thrive on transforming ideas into reality, whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use.
      </p>

      <div className='flex items-center justify-center'>
        <div className="relative flex justify-center items-center mt-10 h-[420px] w-full max-w-full">
          {/* Left Polaroid */}
          <div className="absolute left-1/2 top-12 -translate-x-[80%] rotate-[-12deg] z-10 bg-white shadow-lg p-4 w-[280px]">
            <img
              src="/pic1.png"
              alt="Some of my recent photography"
              className="w-full h-[260px] object-cover rounded"
            />
            <p className="mt-2 text-center italic" style={{ fontFamily: 'Zeyada, cursive', fontSize: '2rem' }}>Some of my recent photography</p>
          </div>

          {/* Right Polaroid */}
          <div className="absolute left-1/2 top-0 -translate-x-[10%] rotate-[8deg] z-20 bg-white shadow-2xl p-4 w-[280px]">
            <img
              src="/pic2.png"
              alt="Some of my recent photography"
              className="w-full h-[260px] object-cover rounded"
            />
            <p className="mt-2 text-center italic" style={{ fontFamily: 'Zeyada, cursive', fontSize: '2rem' }}>Some of my recent photography</p>
          </div>
        </div>
      </div>


    </section>
  );
};
