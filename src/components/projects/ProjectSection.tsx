import { ProjectDataInterface } from "@/lib/projectData";
import React from "react";

interface ProjectSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const ProjectSection: React.FC<ProjectDataInterface> = ({
  title,
  description,
  subTitle,
  subDescription,
  subImage1,
  subImage2,
  live_link,
}) => {
  return (
    <>
      <section className="w-full">
        <h2 className="mt-[74px] text-2xl font-semibold leading-[1.1] tracking-[-0.72px] text-black max-md:mt-10">
          Project Overview
        </h2>

        <p className="mt-5 text-base font-medium leading-[22px] tracking-[0.16px] text-[rgba(90,90,90,1)] max-md:mr-2.5 max-md:max-w-full">
          {description}
        </p>

        <img
          src={subImage1}
          alt={description}
          className="mt-[72px] aspect-[1.34] w-full rounded-[20px] object-contain max-md:mt-10 max-md:max-w-full"
        />
      </section>

      <section className="w-full">
        <h2 className="mt-[74px] text-2xl font-semibold leading-[1.1] tracking-[-0.72px] text-black max-md:mt-10">
          {subTitle}
        </h2>

        <p className="mt-5 text-base font-medium leading-[22px] tracking-[0.16px] text-[rgba(90,90,90,1)] max-md:mr-2.5 max-md:max-w-full">
          {subDescription}
        </p>

        <img
          src={subImage2}
          alt={subDescription}
          className="mt-[72px] aspect-[1.34] w-full rounded-[20px] object-contain max-md:mt-10 max-md:max-w-full"
        />
      </section>
    </>
  );
};
