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
        imageUrl=""
        imageAlt="Sa interview project"
        linkIcon="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/8a26b7988fc4f23af4022d5235373e76dcd46652?placeholderIfAbsent=true"
      >
        <div className="bg-white flex w-full flex-col overflow-hidden items-stretch pb-4 rounded-lg max-md:max-w-full">
          <div className="w-full overflow-hidden pt-3.5 pb-[124px] px-[23px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[77%] max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col font-normal text-center mt-[5px] max-md:mt-10">
                  <div className="flex gap-[15px] text-[7px] text-white">
                    <div>Solutions</div>
                    <div>Features</div>
                    <div>Contact Us</div>
                  </div>
                  <div className="text-[rgba(240,240,240,1)] text-sm leading-[17px] w-[254px] mt-[23px]">
                    Revolutionizing Interviews with Autonomous AI Technology
                  </div>
                </div>
              </div>
              <div className="w-[23%] ml-5 max-md:w-full max-md:ml-0">
                <div className="self-stretch bg-white min-h-5 gap-[5px] overflow-hidden text-[8px] text-black font-semibold text-center w-full px-[9px] py-[5px] rounded-[5px] max-md:mt-10">
                  Book a Demo
                </div>
              </div>
            </div>
          </div>
          <div className="self-center flex w-[360px] max-w-full flex-col items-stretch text-[8px] text-white text-center mt-[26px] pt-[5px] pb-[18px] px-[51px] rounded-[9px] max-md:px-5">
            <div className="font-extrabold leading-[1.4] self-center">
              Why Us?
            </div>
            <div className="font-normal leading-3 mt-1.5">
              Streamline your hiring process, gain valuable insights, and
              elevate your workforce with our cutting-edge Autonomous AI
              Interview platform.
            </div>
          </div>
        </div>
      </ProjectCard>

      <div className="w-[518px] max-w-full mt-[85px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[69%] max-md:w-full max-md:ml-0">
            <div className="flex items-start gap-[13px] font-medium tracking-[-0.32px] max-md:mt-10">
              <div className="flex flex-col text-[15px] text-[rgba(179,179,179,1)] leading-none">
                <h3 className="text-black text-2xl font-semibold font-manrope leading-[1.1] tracking-[-0.72px] self-stretch">
                  Work Experience
                </h3>
                <div className="mt-[53px] max-md:mt-10">
                  Mar 2025 - Present
                </div>
                <div className="text-base font-normal font-manrope leading-none mt-10">
                  Oct 2024 - Feb 2025
                </div>
                <div className="mt-[38px]">
                  Jun 2024 - Oct 2024
                </div>
              </div>
              <div className="text-base text-[rgba(90,90,90,1)] mt-[77px] max-md:mt-10">
                <div className="leading-none max-md:mr-[5px]">
                  Lead Designer at
                </div>
                <div className="leading-none mt-9">
                  UI/UX Designer at
                </div>
                <div className="text-[15px] font-normal font-manrope leading-none mt-[35px] max-md:mr-2.5">
                  Design Intern at
                </div>
              </div>
            </div>
          </div>
          <div className="w-[31%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow mt-[72px] max-md:mt-10">
              <KodabyteCompanyBadge/>
              <LevantateCompanyBadge/>
              <MarketsMojoCompanyBadge/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
