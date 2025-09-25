import React from "react";

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
  className = "",
}) => {
  return (
    <article
      className={`overflow-hidden rounded-[20px] bg-neutral-50 ${className}`}
    >
      <div className="flex w-full flex-col items-stretch rounded-[20px] border border-solid border-[rgba(242,242,242,1)] px-[26px] py-[23px] max-md:px-5">
        <p className="font-manrope text-base font-normal leading-[22px] tracking-[0.16px] text-[rgba(90,90,90,1)]">
          {content}
        </p>
        <div className="mt-[22px] flex gap-2.5">
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="aspect-[1] w-[42px] shrink-0 rounded-[42px] object-contain"
          />
          <div className="flex flex-col items-stretch">
            <h4 className="font-manrope text-lg font-semibold leading-none tracking-[-0.36px] text-black">
              {name}
            </h4>
            <p className="mt-3 font-manrope text-base font-normal leading-none tracking-[0.16px] text-[rgba(90,90,90,1)]">
              {role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
