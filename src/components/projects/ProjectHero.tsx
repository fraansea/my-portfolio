import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectHeroProps {
  title: string;
  live_link: string;
  main_img: string;
  type: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  live_link,
  main_img,
  type,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-[510px] max-w-full flex-col items-stretch">
      <div className="mt-[52px] flex items-stretch gap-2 text-sm font-normal leading-[1.3] tracking-[-0.42px] text-black max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/b484cd1d1caed28b883458cac38b8ef97de00e60?placeholderIfAbsent=true"
          alt="Back arrow"
          className="aspect-[1] w-4 shrink-0 object-contain"
        />
        <button
          onClick={() => navigate("/")}
          className="my-auto transition-all hover:underline"
        >
          Go back
        </button>
      </div>

      <div className="mt-[31px] flex w-full flex-wrap items-stretch justify-between gap-5 text-black max-md:max-w-full">
        <h1 className="flex items-stretch gap-2 whitespace-nowrap text-[32px] font-semibold leading-[1.1] tracking-[-0.96px]">
          <div className="flex flex-col items-stretch">
            <span>{title}</span>
            <span className="mt-[13px]">Concept</span>
          </div>
          <span>{type}</span>
        </h1>

        <a
          href={live_link}
          target="blank"
          className="mt-[17px] rounded-[100px] bg-white text-base font-medium leading-[1.2] tracking-[-0.32px] transition-shadow hover:shadow-md"
          aria-label="Visit live website"
        >
          <div className="flex items-stretch gap-[15px] rounded-[100px] border border-solid border-[rgba(0,0,0,0.1)] px-6 py-[17px] max-md:px-5">
            <span>Live Website</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/f5570f2deb6e42f6364103df1b0cd6a6183847b0?placeholderIfAbsent=true"
              alt="External link"
              className="aspect-[1] w-3.5 shrink-0 object-contain"
            />
          </div>
        </a>
      </div>

      <img
        src={main_img}
        alt="Dreamland Concept App preview"
        className="mt-[70px] aspect-[1.34] w-full rounded-[20px] object-contain max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
};
