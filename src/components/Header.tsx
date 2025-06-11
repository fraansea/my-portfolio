import React from 'react';
import { Home, Instagram, FileText, X as TwitterX } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-center py-6 bg-transparent">
      <nav className="flex items-center bg-white border border-gray-200 rounded-[2rem] px-8 py-2 gap-6" style={{ minWidth: 500 }}>
        <NavIcon icon={<Home size={22} color="#111" strokeWidth={2} />} />
        <Divider />
        <NavIcon icon={<TwitterX size={22} color="#111" strokeWidth={2} />} />
        <NavIcon icon={<Instagram size={22} color="#111" strokeWidth={2} />} />
        <NavIcon icon={<FileText size={22} color="#111" strokeWidth={2} />} />
        <Divider />
        <button className="ml-6 bg-black text-white text-lg font-manrope font-normal px-6 py-2 rounded-[1.5rem]" style={{ minWidth: 120, letterSpacing: 0.2 }}>
          Book a Call
        </button>
      </nav>
    </header>
  );
};

const NavIcon = ({ icon }: { icon: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center">
    {icon}
  </span>
);

const Divider = () => (
  <div className="h-8 w-px bg-gray-200 mx-2" style={{ opacity: 0.5 }} />
);
