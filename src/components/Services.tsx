import React from "react";

export const Services: React.FC = () => {
  return (
    <section
      className="flex w-full flex-col items-center px-4 max-md:items-center max-md:text-center sm:px-8 md:px-12"
      data-aos="fade-up"
    >
      <div className="mt-[75px] flex h-px w-[510px] max-w-full shrink-0 bg-[rgba(0,0,0,0.1)] max-md:mt-10" />

      <h2 className="mt-[95px] text-center font-manrope text-[31px] font-semibold leading-none tracking-[-0.96px] text-black max-md:mt-10">
        How Can I Help?
      </h2>
      <p className="mt-[19px] text-center font-manrope text-base font-normal leading-none tracking-[0.16px] text-[rgba(90,90,90,1)]">
        Let's turn your vision into something amazing.
      </p>

      <div className="mt-12 grid w-full max-w-2xl grid-cols-2 gap-6">
        {/* Web Development */}
        <div className="flex flex-col items-center rounded-2xl bg-neutral-50 p-8 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img
            src="/services/web_development.png"
            alt="Web Development"
            className="mb-6 h-24 w-32 object-contain drop-shadow-lg"
          />
          <span className="text-center text-xl font-semibold text-black">
            Web Development
          </span>
        </div>
        {/* Creative Design */}
        <div className="flex flex-col items-center rounded-2xl bg-neutral-50 p-8 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img
            src="/services/creative_design.png"
            alt="Creative Design"
            className="mb-6 h-24 w-32 object-contain drop-shadow-lg"
          />
          <span className="text-center text-xl font-semibold text-black">
            Creative Design
          </span>
        </div>
        {/* Branding */}
        <div className="flex flex-col items-center rounded-2xl bg-neutral-50 p-8 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img
            src="/services/branding.png"
            alt="Branding"
            className="mb-6 h-24 w-32 object-contain drop-shadow-lg"
          />
          <span className="text-center text-xl font-semibold text-black">
            Branding
          </span>
        </div>
        {/* Product Design */}
        <div className="flex flex-col items-center rounded-2xl bg-neutral-50 p-8 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <img
            src="/services/product_design.png"
            alt="Product Design"
            className="mb-6 h-24 w-32 object-contain drop-shadow-lg"
          />
          <span className="text-center text-xl font-semibold text-black">
            Product Design
          </span>
        </div>
      </div>
    </section>
  );
};
