import React from 'react';

export const Services: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-8 md:px-12 max-md:items-center max-md:text-center" data-aos="fade-up">
      <div className="bg-[rgba(0,0,0,0.1)] flex w-[510px] shrink-0 max-w-full h-px mt-[75px] max-md:mt-10" />
      
      <h2 className="text-black text-[31px] font-semibold font-manrope leading-none tracking-[-0.96px] text-center mt-[95px] max-md:mt-10">
        How Can I Help?
      </h2>
      <p className="text-[rgba(90,90,90,1)] text-base font-normal font-manrope leading-none tracking-[0.16px] text-center mt-[19px]">
        Let's turn your vision into something amazing.
      </p>
      
      <div className="grid grid-cols-2 gap-6 w-full max-w-2xl mt-12">
        {/* Web Development */}
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img src="/services/web-dev.png" alt="Web Development" className="w-32 h-24 object-contain mb-6 drop-shadow-lg" />
          <span className="text-xl font-semibold text-black text-center">Web Development</span>
        </div>
        {/* Creative Design */}
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img src="/services/creative-design.png" alt="Creative Design" className="w-32 h-24 object-contain mb-6 drop-shadow-lg" />
          <span className="text-xl font-semibold text-black text-center">Creative Design</span>
        </div>
        {/* Branding */}
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img src="/services/branding.png" alt="Branding" className="w-32 h-24 object-contain mb-6 drop-shadow-lg" />
          <span className="text-xl font-semibold text-black text-center">Branding</span>
        </div>
        {/* Product Design */}
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img src="/services/product-design.png" alt="Product Design" className="w-32 h-24 object-contain mb-6 drop-shadow-lg" />
          <span className="text-xl font-semibold text-black text-center">Product Design</span>
        </div>
      </div>
    </section>
  );
};
