import React from "react";
import { ProjectCard } from "./ProjectCard";
import {
  KodabyteCompanyBadge,
  LevantateCompanyBadge,
  MarketsMojoCompanyBadge,
} from "./CompanyLogo";
import { projectData } from "@/lib/projectData";

export const WorkExperience: React.FC = () => {
  const projects = projectData;
  return (
    <section
      className="flex w-full flex-col items-center px-4 max-md:items-center max-md:text-center sm:px-8 md:px-12"
      data-aos="fade-up"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/19e12d7bb1682fb09779e8b5fa939dd45a544f4f?placeholderIfAbsent=true"
        alt="Work experience icon"
        className="mt-12 aspect-[6.49] w-[156px] max-w-full object-contain max-md:mt-10"
      />
      <h2 className="mt-[64px] font-manrope text-[32px] font-semibold leading-none tracking-[-0.96px] text-black">
        Here's What I've Been Up To.
      </h2>
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          description={project.description}
          titleImageUrl={project.titleImageUrl}
        />
      ))}
      <div className="mt-24 flex w-full justify-center">
        <div className="w-full max-w-4xl">
          {/* Desktop grid, mobile stacked */}
          <div className="hidden grid-cols-3 gap-x-12 gap-y-6 md:grid">
            {/* Row 1 */}
            <div className="flex items-center justify-center font-manrope text-[24px] font-normal text-[rgba(179,179,179,1)]">
              Mar 2025 - Present
            </div>
            <div className="flex items-center justify-center font-manrope text-[24px] font-normal text-[rgba(90,90,90,1)]">
              Lead Designer at
            </div>
            <div className="flex items-center justify-center">
              <KodabyteCompanyBadge />
            </div>
            {/* Row 2 */}
            <div className="flex items-center justify-center font-manrope text-[24px] font-normal text-[rgba(179,179,179,1)]">
              Oct 2024 - Feb 2025
            </div>
            <div className="flex items-center justify-center font-manrope text-[24px] font-normal text-[rgba(90,90,90,1)]">
              UI/UX Designer at
            </div>
            <div className="flex items-center justify-center">
              <LevantateCompanyBadge />
            </div>
            {/* Row 3 */}
            <div className="flex items-center justify-center font-manrope text-[24px] font-normal text-[rgba(179,179,179,1)]">
              Jun 2024 - Oct 2024
            </div>
            <div className="flex items-center justify-center font-manrope text-[24px] font-normal text-[rgba(90,90,90,1)]">
              Design Intern at
            </div>
            <div className="flex items-center justify-center">
              <MarketsMojoCompanyBadge />
            </div>
          </div>
          {/* Mobile stacked */}
          <div className="flex flex-col gap-8 md:hidden">
            {/* Row 1 */}
            <div className="flex flex-col items-center gap-1">
              <div className="font-manrope text-[20px] font-normal text-[rgba(179,179,179,1)]">
                Mar 2025 - Present
              </div>
              <div className="font-manrope text-[20px] font-normal text-[rgba(90,90,90,1)]">
                Lead Designer at
              </div>
              <div className="mt-2">
                <KodabyteCompanyBadge />
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col items-center gap-1">
              <div className="font-manrope text-[20px] font-normal text-[rgba(179,179,179,1)]">
                Oct 2024 - Feb 2025
              </div>
              <div className="font-manrope text-[20px] font-normal text-[rgba(90,90,90,1)]">
                UI/UX Designer at
              </div>
              <div className="mt-2">
                <LevantateCompanyBadge />
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col items-center gap-1">
              <div className="font-manrope text-[20px] font-normal text-[rgba(179,179,179,1)]">
                Jun 2024 - Oct 2024
              </div>
              <div className="font-manrope text-[20px] font-normal text-[rgba(90,90,90,1)]">
                Design Intern at
              </div>
              <div className="mt-2">
                <MarketsMojoCompanyBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
