import React, { useState, useRef, useEffect } from 'react';
import { Home, Instagram, FileText, X as TwitterX, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click or Escape
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  return (
    <header className="w-full flex justify-center py-6 bg-transparent">
      <nav className="flex items-center bg-white border border-gray-200 rounded-[2rem] px-8 py-2 gap-6 min-w-[300px] relative w-full max-w-2xl">
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-between gap-6">
          <div className='flex gap-4 items-center'>
            <NavIcon icon={<Home size={22} color="#111" strokeWidth={2} />} />
            <Divider />
          </div>
          <div className='flex gap-12 items-center'>
            <NavIcon icon={<TwitterX size={22} color="#111" strokeWidth={2} />} />
            <NavIcon icon={<Instagram size={22} color="#111" strokeWidth={2} />} />
            <NavIcon icon={<FileText size={22} color="#111" strokeWidth={2} />} />
            <Divider />
          </div>
          <button className="bg-black text-white text-lg font-manrope font-normal px-6 py-2 rounded-[1.5rem] min-w-[120px]" style={{ letterSpacing: 0.2 }}>
            Book a Call
          </button>
        </div>
        {/* Mobile Nav */}
        <div className="flex md:hidden flex-1 items-center justify-between w-full">
          <NavIcon icon={<Home size={22} color="#111" strokeWidth={2} />} />
          <button
            className="ml-auto p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu size={28} />
          </button>
          {/* Dropdown */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute top-full right-0 mt-3 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 flex flex-col py-4 animate-fadeIn"
              tabIndex={-1}
            >
              <button
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5L15 15M15 5L5 15" stroke="#111" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <div className="flex flex-col gap-4 mt-6 px-6 items-center justify-center text-center">
                <NavIcon icon={<TwitterX size={22} color="#111" strokeWidth={2} />} />
                <NavIcon icon={<Instagram size={22} color="#111" strokeWidth={2} />} />
                <NavIcon icon={<FileText size={22} color="#111" strokeWidth={2} />} />
                <button className="bg-black text-white text-lg font-manrope font-normal px-6 py-2 rounded-[1.5rem] mt-2">
                  Book a Call
                </button>
              </div>
            </div>
          )}
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
