import React from 'react';

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
      <div className="flex flex-row justify-center items-end gap-8 mt-20 w-full max-w-6xl overflow-x-auto">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white rounded-[20px] shadow-lg p-2 flex items-center justify-center" style={{ width: 350, height: 220, minWidth: 350, minHeight: 220 }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/4e95ec54101b0a4d4b1a171b9f565ea3e17a63bf?placeholderIfAbsent=true"
              alt={`Project ${i}`}
              className="object-contain w-full h-full rounded-[16px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
