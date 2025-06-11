import React from 'react';
import { ProjectCard } from './ProjectCard';
import { KodabyteCompanyBadge, LevantateCompanyBadge, MarketsMojoCompanyBadge } from './CompanyLogo';

export const WorkExperience: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/19e12d7bb1682fb09779e8b5fa939dd45a544f4f?placeholderIfAbsent=true"
        alt="Work experience icon"
        className="aspect-[6.49] object-contain w-[156px] max-w-full mt-12 max-md:mt-10"
      />
      <h2 className="text-black text-[32px] font-semibold font-manrope leading-none tracking-[-0.96px] mt-[22px]">
        Here's What I've Been Up To.
      </h2>
      
      <ProjectCard
        title="Studio aoi Landing page design"
        description="This website is a portfolio platform for studioaoi,an architecture firm specializing in designing and building..."
        imageUrl="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/03ca7b8b101ba0dc69b2a0e52c58028c08873bec?placeholderIfAbsent=true"
        imageAlt="Studio aoi project"
        linkIcon="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/514b7da1b98226bf3309642825af72d39da8e4e1?placeholderIfAbsent=true"
      />
      
      <ProjectCard
        title="Sa interview"
        description="A Streamline your hiring process, gain valuable insights, and elevate your workforce with our cutting-edge Auto...."
        imageUrl="/one.png"
        imageAlt="Sa interview project"
        linkIcon="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/8a26b7988fc4f23af4022d5235373e76dcd46652?placeholderIfAbsent=true"
      />
      <div className="w-full flex justify-center mt-24">
        <div className="grid grid-cols-3 gap-x-12 gap-y-6 max-w-4xl w-full">
          {/* Row 1 */}
          <div className="flex items-center justify-center text-[rgba(179,179,179,1)] text-[24px] font-manrope font-normal">Mar 2025 - Present</div>
          <div className="flex items-center justify-center text-[rgba(90,90,90,1)] text-[24px] font-manrope font-normal">Lead Designer at</div>
          <div className="flex items-center justify-center"><KodabyteCompanyBadge /></div>
          {/* Row 2 */}
          <div className="flex items-center justify-center text-[rgba(179,179,179,1)] text-[24px] font-manrope font-normal">Oct 2024 - Feb 2025</div>
          <div className="flex items-center justify-center text-[rgba(90,90,90,1)] text-[24px] font-manrope font-normal">UI/UX Designer at</div>
          <div className="flex items-center justify-center"><LevantateCompanyBadge /></div>
          {/* Row 3 */}
          <div className="flex items-center justify-center text-[rgba(179,179,179,1)] text-[24px] font-manrope font-normal">Jun 2024 - Oct 2024</div>
          <div className="flex items-center justify-center text-[rgba(90,90,90,1)] text-[24px] font-manrope font-normal">Design Intern at</div>
          <div className="flex items-center justify-center"><MarketsMojoCompanyBadge /></div>
        </div>
      </div>
    </section>
  );
};
