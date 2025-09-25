import React from "react";

export const About: React.FC = () => {
  return (
    <section
      className="mx-auto flex w-full max-w-[1440px] flex-col px-4 max-md:items-center max-md:text-center sm:px-8 md:px-12"
      data-aos="fade-up"
    >
      <h2 className="mb-8 mt-20 text-center font-manrope text-3xl font-bold leading-tight tracking-tight text-black">
        About
      </h2>
      <p className="mx-auto mb-8 max-w-2xl font-manrope text-xl font-normal leading-8 tracking-wide text-zinc-600">
        I'm Francis Gigi, a designer, coder, and photography lover. I'm a
        Computer Science student at Christ College of Engineering. I enjoy
        building creative projects and exploring new ideas in tech, design, and
        photography.
      </p>
      <p className="mx-auto mb-12 max-w-2xl font-manrope text-xl font-normal leading-8 tracking-wide text-zinc-600">
        I thrive on transforming ideas into reality, whether it's crafting
        digital interfaces, designing immersive visuals, or building websites
        that feel effortless to use.
      </p>

      <div className="flex items-center justify-center">
        <div className="relative mt-10 flex h-[420px] w-full max-w-full items-center justify-center">
          {/* Left Polaroid */}
          <div className="absolute left-1/2 top-12 z-10 w-[180px] -translate-x-[80%] rotate-[-12deg] bg-white p-4 shadow-lg md:w-[280px]">
            <img
              src="/pic1.png"
              alt="Some of my recent photography"
              className="w-full rounded object-cover md:h-[260px]"
            />
            <p
              className="mt-2 text-center text-[1rem] italic md:text-[2rem]"
              style={{ fontFamily: "Zeyada, cursive" }}
            >
              Some of my recent photography
            </p>
          </div>

          {/* Right Polaroid */}
          <div className="absolute left-1/2 top-0 z-20 w-[180px] -translate-x-[10%] rotate-[8deg] bg-white p-4 shadow-2xl md:w-[280px]">
            <img
              src="/pic2.png"
              alt="Some of my recent photography"
              className="w-full rounded object-cover md:h-[260px]"
            />
            <p
              className="mt-2 text-center text-[1rem] italic md:text-[2rem]"
              style={{ fontFamily: "Zeyada, cursive" }}
            >
              Some of my recent photography
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
