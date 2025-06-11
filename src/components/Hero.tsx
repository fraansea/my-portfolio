import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/b284fec22e4056f40d299282ece95dba8a6e297f?placeholderIfAbsent=true"
        alt="Francis Gigi profile"
        className="aspect-[1] object-contain w-[100px] max-w-full mt-[65px] rounded-[1000px] max-md:mt-10"
      />
      <h1 className="text-black text-[42px] font-semibold font-manrope leading-[46px] tracking-[-1.26px] mt-8 max-md:max-w-full">
        Hey, I'm Francis. <br />
        UI developer& Designer
      </h1>
      <p className="text-[rgba(90,90,90,1)] text-base font-normal font-manrope leading-[22px] tracking-[0.16px] mt-5 max-md:max-w-full">
        Crafting seamless experiences and bold visuals. High school student{" "}
        <br />
        by day, creative thinker, and aspiring innovator by night.
      </p>
      <div className="flex w-[421px] max-w-full items-stretch gap-3 font-medium tracking-[-0.32px] mt-[26px] flex-wrap">
        <button className="bg-[rgba(25,25,25,1)] text-[15px] text-white leading-none px-9 py-[18px] rounded-[14px] max-md:px-5 hover:bg-[rgba(25,25,25,0.9)] transition-colors font-manrope font-semibold">
          Download Me
        </button>
        <div className="bg-[rgba(225,249,220,1)] flex items-stretch gap-1.5 text-base text-[rgba(23,141,0,1)] leading-none px-5 py-[15px] rounded-[100px] font-manrope font-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/65f781fbbee1c73bec7a70f6b5ba5c3b0b4a57d8?placeholderIfAbsent=true"
            alt="Available status"
            className="aspect-[1] object-contain w-4 shrink-0"
          />
          <span className="basis-auto font-manrope font-normal">
            Available for new project{" "}
          </span>
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
