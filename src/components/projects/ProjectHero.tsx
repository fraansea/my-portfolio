import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeroProps {
  title:string,
  live_link:string,
  main_img:string,
  type: string
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({title,live_link,main_img,type}) => {
  const navigate = useNavigate()
  return (
    <div className="flex w-[510px] max-w-full flex-col items-stretch">
      <div className="flex items-stretch gap-2 text-sm text-black font-normal tracking-[-0.42px] leading-[1.3] mt-[52px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/b484cd1d1caed28b883458cac38b8ef97de00e60?placeholderIfAbsent=true"
          alt="Back arrow"
          className="aspect-[1] object-contain w-4 shrink-0"
        />
        <button onClick={()=>navigate('/')} className="my-auto hover:underline transition-all">
          Go back
        </button>
      </div>
      
      <div className="flex w-full items-stretch gap-5 text-black flex-wrap justify-between mt-[31px] max-md:max-w-full">
        <h1 className="flex items-stretch gap-2 text-[32px] font-semibold whitespace-nowrap tracking-[-0.96px] leading-[1.1]">
          <div className="flex flex-col items-stretch">
            <span>{title}</span>
            <span className="mt-[13px]">Concept</span>
          </div>
          <span>{type}</span>
        </h1>
        
        <a 
          href={live_link}
          target='blank'
          className="bg-white text-base font-medium tracking-[-0.32px] leading-[1.2] mt-[17px] rounded-[100px] hover:shadow-md transition-shadow"
          aria-label="Visit live website"
        >
          <div className="border flex items-stretch gap-[15px] px-6 py-[17px] rounded-[100px] border-[rgba(0,0,0,0.1)] border-solid max-md:px-5">
            <span>Live Website</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/f5570f2deb6e42f6364103df1b0cd6a6183847b0?placeholderIfAbsent=true"
              alt="External link"
              className="aspect-[1] object-contain w-3.5 shrink-0"
            />
          </div>
        </a>
      </div>
      
      <img
        src={main_img}
        alt="Dreamland Concept App preview"
        className=" aspect-[1.34] object-contain w-full mt-[70px] rounded-[20px] max-md:max-w-full max-md:mt-10"
      />
    </div>
  );
};
