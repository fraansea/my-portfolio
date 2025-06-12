import React from 'react';

export const Services: React.FC = () => {
  return (
    <section className="flex flex-col items-center" data-aos="fade-up">
      <div className="bg-[rgba(0,0,0,0.1)] flex w-[510px] shrink-0 max-w-full h-px mt-[75px] max-md:mt-10" />
      
      <h2 className="text-black text-[31px] font-semibold font-manrope leading-none tracking-[-0.96px] text-center mt-[95px] max-md:mt-10">
        How Can I Help?
      </h2>
      <p className="text-[rgba(90,90,90,1)] text-base font-normal font-manrope leading-none tracking-[0.16px] text-center mt-[19px]">
        Let's turn your vision into something amazing.
      </p>
      
      <div className="w-[510px] max-w-full mt-[33px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="bg-neutral-50 grow overflow-hidden text-base text-black font-medium tracking-[-0.32px] leading-none w-full rounded-[15px_15px_15px_5px] max-md:mt-2.5">
              <div className="border pt-[126px] pb-[18px] px-5 rounded-[15px_15px_15px_5px] border-[rgba(242,242,242,1)] border-solid max-md:pt-[100px]">
                Web Development
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-neutral-50 grow overflow-hidden text-base text-black font-medium tracking-[-0.32px] leading-none w-full rounded-[15px_15px_5px_15px] max-md:mt-2.5">
              <div className="border pt-[127px] pb-[18px] px-5 rounded-[15px_15px_5px_15px] border-[rgba(242,242,242,1)] border-solid max-md:pt-[100px]">
                Creative Design
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-[510px] max-w-full mt-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="bg-neutral-50 grow overflow-hidden text-base text-black font-medium whitespace-nowrap tracking-[-0.32px] leading-none w-full rounded-[15px_5px_5px_15px] max-md:mt-2.5">
              <div className="border pt-[127px] pb-[18px] px-5 rounded-[15px_5px_5px_15px] border-[rgba(242,242,242,1)] border-solid max-md:pt-[100px]">
                Branding
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-neutral-50 grow overflow-hidden text-[15px] text-black font-medium tracking-[-0.32px] leading-none w-full rounded-[5px_15px_15px_15px] max-md:mt-2.5">
              <div className="border pt-[126px] pb-[19px] px-5 rounded-[5px_15px_15px_15px] border-[rgba(242,242,242,1)] border-solid max-md:pt-[100px]">
                Product Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
