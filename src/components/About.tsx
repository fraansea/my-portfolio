import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center max-w-[1440px] mx-auto">
      <h2 className="text-black text-[23px] font-semibold leading-none tracking-[-0.72px] mt-[86px] max-md:mt-10">
        About
      </h2>
      <p className="text-[rgba(90,90,90,0.85)] text-lg font-normal leading-[30px] tracking-[0.18px] mt-[23px] max-w-[600px] max-md:max-w-full">
        I'm Francis Gigi, a designer, coder, and photography lover. I'm a Computer Science student at Christ College of Engineering. I enjoy building creative projects and exploring new ideas in tech, design, and photography.<br /><br />
        I thrive on transforming ideas into reality, whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use.
      </p>
      <div className="relative flex justify-center items-center mt-10 h-[220px] w-[400px] max-w-full">
        <div className="absolute left-0 top-8 rotate-[-8deg]">
          <img src="/Picture2.png" alt="Some of my recent photography" className="w-[200px] h-[200px] object-cover rounded-[8px] border-4 border-white" />
        </div>
        <div className="absolute left-32 top-0 rotate-[10deg]">
          <img src="/Picture.png" alt="Some of my recent photography" className="w-[200px] h-[200px] object-cover rounded-[8px] border-4 border-white" />
        </div>
      </div>
    </section>
  );
};
