import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center w-full px-4 sm:px-8 md:px-12 max-md:items-center max-md:text-center" data-aos="fade-up">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/b284fec22e4056f40d299282ece95dba8a6e297f?placeholderIfAbsent=true"
        alt="Francis Gigi profile"
        className="aspect-[1] object-contain w-[90px] sm:w-[100px] max-w-full mt-8 sm:mt-[65px] rounded-full"
      />
      <h1 className="text-black text-[2.1rem] sm:text-[42px] font-extrabold font-manrope leading-tight tracking-tight mt-6 sm:mt-8 max-w-xs sm:max-w-full">
        Hey, I'm Francis.<br />UI developer& Designer
      </h1>
      <p className="text-zinc-600 text-base sm:text-lg font-normal font-manrope leading-snug tracking-wide mt-4 sm:mt-5 max-w-xs sm:max-w-full">
        Crafting seamless experiences and bold visuals. High school student by day, creative thinker, and aspiring innovator by night.
      </p>
      <button className="bg-black text-white text-lg font-manrope font-medium px-8 py-4 rounded-2xl mt-8 sm:mt-[26px] w-full max-w-xs sm:max-w-fit">
        Download Me
      </button>
      <div className="flex items-center justify-center mt-5 sm:mt-4 w-full">
        <div className="bg-green-100 flex items-center gap-2 text-base text-green-700 px-6 py-3 rounded-full font-manrope font-medium w-full max-w-xs sm:max-w-fit">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          <span>Available for new project</span>
        </div>
      </div>
      {/* Carousel for project containers */}
      <div className="w-full max-w-6xl mt-16">
        {(() => {
          const carouselOptions = { loop: true };
          const autoScrollPlugin = React.useRef(
            AutoScroll({
              speed: 2, // Adjust for desired smoothness
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            })
          ).current;
          return (
            <Carousel opts={carouselOptions} plugins={[autoScrollPlugin]} className="mx-auto">
              <CarouselContent>
                {[
                  '/one.png',
                  '/two.png',
                  '/three.png',
                  '/pic1.png',
                  '/pic2.png',
                  '/sample.png',
                ].map((src, i) => (
                  <CarouselItem key={i} className="flex justify-center px-2 min-w-[350px] max-w-[420px]">
                    <div
                      className="bg-neutral-50 overflow-hidden rounded-[20px] border border-[rgba(242,242,242,1)] border-solid flex items-center justify-center p-4"
                      style={{ width: 350, height: 220, minWidth: 350, minHeight: 220 }}
                    >
                      <img
                        src={src}
                        alt={`Project ${i + 1}`}
                        className="object-contain w-full h-full rounded-[16px]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          );
        })()}
      </div>
    </section>
  );
};
