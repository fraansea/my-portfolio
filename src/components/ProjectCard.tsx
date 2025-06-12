import { ProjectDataInterface } from '@/lib/projectData';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type ProjectCardProps = Pick<ProjectDataInterface, 'id' | 'title' | 'titleImageUrl' | 'description'>;

export const ProjectCard: React.FC<ProjectCardProps> = ({id,titleImageUrl,title,description}) => {
  const navigate = useNavigate()
  return (
  
    <article className="bg-white w-[510px] max-w-full overflow-hidden text-black mt-11 rounded-[25px] max-md:mt-10">
      <div className="border flex w-full flex-col items-stretch pt-[15px] pb-8 px-4 rounded-[25px] border-[rgba(0,0,0,0.1)] border-solid max-md:max-w-full">
        <div className="bg-[rgba(225,225,225,1)] flex flex-col overflow-hidden items-stretch justify-center px-[22px] py-[25px] rounded-[20px] max-md:max-w-full max-md:px-5">
          
            <div className="flex flex-col relative min-h-[308px] w-full overflow-hidden pt-[19px] pb-[60px] px-[51px] rounded-lg max-md:max-w-full max-md:px-5">
              <img
                src={titleImageUrl}
                alt={id}
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="relative flex gap-[15px] text-[7px] font-normal text-white">
                <div>Solutions</div>
                <div>Features</div>
                <div>Contact Us</div>
              </div>
              <div className="relative text-[8px] font-extrabold leading-[1.4] self-center mt-[212px] text-white max-md:mt-10">
                Why Us?
              </div>
            </div>
        </div>
        <h3 className="text-[23px] font-semibold leading-none tracking-[-0.72px] ml-5 mt-[30px] max-md:ml-2.5">
          {title}
        </h3>
        <p className="text-[rgba(90,90,90,1)] text-base font-normal leading-[22px] tracking-[0.16px] ml-5 mr-12 mt-5 max-md:mx-2.5">
          {description}
        </p>
        <button onClick={()=>navigate(`/projects/${id}`)} className="bg-[rgba(242,242,242,1)] flex items-stretch gap-[9px] text-base font-medium tracking-[-0.32px] leading-none ml-5 mt-[18px] px-6 py-[15px] rounded-[14px] max-md:ml-2.5 max-md:px-5 hover:bg-[rgba(242,242,242,0.8)] transition-colors">
          <span className="grow pt-1">View Project</span>
          <ChevronRight/>
        </button>
      </div>
    </article>
  );
};
