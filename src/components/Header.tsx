import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white flex w-full flex-col overflow-hidden items-center py-9 max-md:max-w-full">
      <nav className="bg-[rgba(255,255,255,0.7)] flex w-[398px] max-w-full flex-col items-stretch rounded-[20px]">
        <div className="border z-10 flex items-stretch gap-3.5 text-base text-white font-medium tracking-[-0.32px] leading-none pl-10 pr-1.5 py-[7px] rounded-[20px] border-[rgba(0,0,0,0.1)] border-solid max-md:pl-5">
          <div className="bg-[rgba(0,0,0,0.1)] flex w-px shrink-0 h-[22px] my-auto rounded-[10px]" />
          <button className="bg-[rgba(25,25,25,1)] px-6 py-[18px] rounded-[14px] max-md:px-5 hover:bg-[rgba(25,25,25,0.9)] transition-colors">
            Book a Call
          </button>
        </div>
        <div className="flex items-stretch gap-[3px] -mt-14">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/bef6335583ef92577db9e0b5b6f95c7083002702?placeholderIfAbsent=true"
            alt="Logo part 1"
            className="aspect-[0.75] object-contain w-[61px] shrink-0 rounded-[15px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/2a64bf82-1550-40a4-bf95-267edd00c907?placeholderIfAbsent=true"
            alt="Logo part 2"
            className="aspect-[2.25] object-contain w-[182px] shrink-0 max-w-full"
          />
        </div>
      </nav>
    </header>
  );
};
