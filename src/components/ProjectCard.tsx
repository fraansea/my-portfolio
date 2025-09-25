import { ProjectDataInterface } from "@/lib/projectData";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type ProjectCardProps = Pick<
  ProjectDataInterface,
  "id" | "title" | "titleImageUrl" | "description"
>;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  titleImageUrl,
  title,
  description,
}) => {
  const navigate = useNavigate();
  return (
    <article className="mt-11 w-[510px] max-w-full overflow-hidden rounded-[25px] bg-white text-black max-md:mt-10">
      <div className="flex w-full flex-col items-stretch rounded-[25px] border border-solid border-[rgba(0,0,0,0.1)] px-4 pb-8 pt-[15px] max-md:max-w-full">
        <div className="flex flex-col items-stretch justify-center overflow-hidden rounded-[20px] bg-[rgba(225,225,225,1)] px-[22px] py-[25px] max-md:max-w-full max-md:px-5">
          <div className="relative flex min-h-[308px] w-full flex-col overflow-hidden rounded-lg px-[51px] pb-[60px] pt-[19px] max-md:max-w-full max-md:px-5">
            <img
              src={titleImageUrl}
              alt={id}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative flex gap-[15px] text-[7px] font-normal text-white">
              <div>Solutions</div>
              <div>Features</div>
              <div>Contact Us</div>
            </div>
            <div className="relative mt-[212px] self-center text-[8px] font-extrabold leading-[1.4] text-white max-md:mt-10">
              Why Us?
            </div>
          </div>
        </div>
        <h3 className="ml-5 mt-[30px] text-[23px] font-semibold leading-none tracking-[-0.72px] max-md:ml-2.5">
          {title}
        </h3>
        <p className="ml-5 mr-12 mt-5 text-base font-normal leading-[22px] tracking-[0.16px] text-[rgba(90,90,90,1)] max-md:mx-2.5">
          {description}
        </p>
        <button
          onClick={() => navigate(`/projects/${id}`)}
          className="ml-5 mt-[18px] flex items-stretch gap-[9px] rounded-[14px] bg-[rgba(242,242,242,1)] px-6 py-[15px] text-base font-medium leading-none tracking-[-0.32px] transition-colors hover:bg-[rgba(242,242,242,0.8)] max-md:ml-2.5 max-md:px-5"
        >
          <span className="grow pt-1">View Project</span>
          <ChevronRight />
        </button>
      </div>
    </article>
  );
};
