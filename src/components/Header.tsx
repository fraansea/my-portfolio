import React from 'react';
import { Home, Instagram, FileText, X as TwitterX } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sm:border-0">
      <nav className="flex items-center justify-between w-full px-4 py-4 sm:justify-center sm:py-6">
        {/* Home icon left (mobile only) */}
        <div className="block sm:hidden">
          <NavIcon icon={<Home size={36} color="#111" strokeWidth={2.5} />} />
        </div>
        {/* Center nav (hidden on mobile) */}
        <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-[2rem] px-8 py-2 gap-6" style={{ minWidth: 500 }}>
          <div className='flex gap-4'>
            <NavIcon icon={<Home size={22} color="#111" strokeWidth={2} />} />
            <Divider/>
          </div>
          <div className='flex gap-12'>
            <NavIcon icon={<TwitterX className='' size={22} color="#111" strokeWidth={2} />} />
            <NavIcon icon={<Instagram size={22} color="#111" strokeWidth={2} />} />
            <NavIcon icon={<FileText size={22} color="#111" strokeWidth={2} />} />
            <Divider />
          </div>
          <button className=" bg-black text-white text-lg font-manrope font-normal px-6 py-2 rounded-[1.5rem]" style={{ minWidth: 120, letterSpacing: 0.2 }}>
            Book a Call
          </button>
        </div>
        {/* Hamburger menu right (mobile only) */}
        <div className="block sm:hidden">
          <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="flex flex-col gap-1.5">
              <span className="block w-7 h-0.5 bg-gray-700 rounded"></span>
              <span className="block w-7 h-0.5 bg-gray-700 rounded"></span>
              <span className="block w-7 h-0.5 bg-gray-700 rounded"></span>
            </div>
          </div>
        </div>
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
