import React from 'react';
import { ProjectCard } from './ProjectCard';
import { KodabyteCompanyBadge, LevantateCompanyBadge, MarketsMojoCompanyBadge } from './CompanyLogo';

export const WorkExperience: React.FC = () => {
  return (
    <section className="flex flex-col items-start px-6 sm:px-12 max-w-xl mx-auto w-full">
      <h2 className="text-black text-2xl font-semibold font-manrope leading-none tracking-[-0.04em] mt-12 mb-8">Work Experience</h2>
      {/* Job 1 */}
      <div className="mb-8">
        <div className="text-neutral-400 text-base font-manrope font-normal mb-1">2024 - Present</div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-black text-lg font-manrope font-normal">Lead Designer at</span>
          <span><KodabyteCompanyBadge /></span>
        </div>
      </div>
      {/* Job 2 */}
      <div className="mb-8">
        <div className="text-neutral-400 text-base font-manrope font-normal mb-1">2022 - 2024</div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-black text-lg font-manrope font-normal">Senior UI/UX Designer at</span>
          <span><LevantateCompanyBadge /></span>
        </div>
      </div>
      {/* Job 3 */}
      <div className="mb-8">
        <div className="text-neutral-400 text-base font-manrope font-normal mb-1">2020 - 2022</div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-black text-lg font-manrope font-normal">Product Designer at</span>
          <span><MarketsMojoCompanyBadge /></span>
        </div>
      </div>
      <div className="w-full bg-neutral-200 h-px mt-8" />
    </section>
  );
};
