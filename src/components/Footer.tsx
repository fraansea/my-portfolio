import React from "react";
import { Home, Instagram, Images, Linkedin, Dribbble, X } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center py-12 min-h-[160px] w-full px-4 sm:px-8 md:px-12">
      <p className="text-[rgba(90,90,90,1)] text-base font-normal font-manrope leading-none tracking-[0.16px] text-center mt-28 max-md:mt-10">
        Copyright © 2025 Francis Gigi. All rights reserved.
      </p>
      <FooterLinks/>
    </footer>
  );
};

const FooterLinks = () => {
    const insta="https://www.instagram.com/fraansea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  // const twitter=""
  const linkedIn="https://www.linkedin.com/in/francis-gigi-kuyilanparambil-39942a27b/"
  const dribble="https://dribbble.com/"

  return (
    <div className="flex  gap-8 mt-8">
      <NavIcon
        icon={<Instagram size={20} color="#111" strokeWidth={1.5} />}
        link={insta}
      />
      <NavIcon
        icon={<Linkedin size={20} color="#111" strokeWidth={1.5} />}
        link={linkedIn}
      />
      <NavIcon
        icon={<Dribbble size={20} color="#111" strokeWidth={1.5} />}
        link={dribble}
      />
    </div>
  );
};

const NavIcon = ({ icon, link }: { icon: React.ReactNode; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center hover:cursor-pointer"
    >
      {icon}
    </a>
  );
};
