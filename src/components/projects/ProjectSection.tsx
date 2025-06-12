import { ProjectDataInterface } from '@/lib/projectData';
import React from 'react';

interface ProjectSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const ProjectSection: React.FC<ProjectDataInterface> = ({
  title,
  description,subTitle,subDescription,subImage1,subImage2
}) => {
  return (
    <>
    <section className="w-full">
      <h2 className="text-black text-2xl font-semibold leading-[1.1] tracking-[-0.72px] mt-[74px] max-md:mt-10">
        Project Overview
      </h2>
      
      <p className="text-[rgba(90,90,90,1)] text-base font-medium leading-[22px] tracking-[0.16px] mt-5 max-md:max-w-full max-md:mr-2.5">
        {description}
      </p>
      
      <img
        src={subImage1}
        alt={description}
        className="aspect-[1.34] object-contain w-full mt-[72px] rounded-[20px] max-md:max-w-full max-md:mt-10"
        />
    </section>

    <section className="w-full">
      <h2 className="text-black text-2xl font-semibold leading-[1.1] tracking-[-0.72px] mt-[74px] max-md:mt-10">
        {subTitle}
      </h2>
      
      <p className="text-[rgba(90,90,90,1)] text-base font-medium leading-[22px] tracking-[0.16px] mt-5 max-md:max-w-full max-md:mr-2.5">
        {subDescription}
      </p>
      
      <img
        src={subImage2}
        alt={subDescription}
        className="aspect-[1.34] object-contain w-full mt-[72px] rounded-[20px] max-md:max-w-full max-md:mt-10"
        />
    </section>
        </>
  );
};
