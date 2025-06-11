import React from 'react';

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  name,
  role,
  avatarUrl,
  className = ""
}) => {
  return (
    <article className={`bg-neutral-50 overflow-hidden rounded-[20px] ${className}`}>
      <div className="border flex w-full flex-col items-stretch px-[26px] py-[23px] rounded-[20px] border-[rgba(242,242,242,1)] border-solid max-md:px-5">
        <p className="text-[rgba(90,90,90,1)] text-base font-normal font-manrope leading-[22px] tracking-[0.16px]">
          {content}
        </p>
        <div className="flex gap-2.5 mt-[22px]">
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="aspect-[1] object-contain w-[42px] shrink-0 rounded-[42px]"
          />
          <div className="flex flex-col items-stretch">
            <h4 className="text-black text-lg font-semibold font-manrope leading-none tracking-[-0.36px]">
              {name}
            </h4>
            <p className="text-[rgba(90,90,90,1)] text-base font-normal font-manrope leading-none tracking-[0.16px] mt-3">
              {role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
