import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center max-w-[1440px] mx-auto">
      <h2 className="text-black text-3xl font-bold font-manrope leading-tight tracking-tight mt-20 mb-8">
        About
      </h2>
      <p className="text-[rgba(90,90,90,0.85)] text-xl font-normal font-manrope leading-8 tracking-wide max-w-2xl mx-auto mb-8">
        I'm Francis Gigi, a designer, coder, and photography lover. I'm a Computer Science student at Christ College of Engineering. I enjoy building creative projects and exploring new ideas in tech, design, and photography.
      </p>
      <p className="text-[rgba(90,90,90,0.85)] text-xl font-normal font-manrope leading-8 tracking-wide max-w-2xl mx-auto mb-12">
        I thrive on transforming ideas into reality, whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use.
      </p>
      <div className="flex flex-row justify-center items-end gap-16 mt-2">
        {/* Image 1 */}
        <div className="flex flex-col items-center rotate-[-8deg]">
          <img src="/Picture2.png" alt="Some of my recent photography" className="w-[300px] h-[300px] object-cover rounded-t-[8px]" />
          <span className="block w-full text-[18px] font-handwriting text-black mt-2 mb-2">Some of my recent photography</span>
        </div>
        {/* Image 2 */}
        <div className="flex flex-col items-center rotate-[6deg]">
          <img src="/Picture.png" alt="Some of my recent photography" className="w-[300px] h-[300px] object-cover rounded-t-[8px]" />
          <span className="block w-full text-[18px] font-handwriting text-black mt-2 mb-2">Some of my recent photography</span>
        </div>
      </div>
    </section>
  );
};
