import React, { useState } from "react";
import { Home, Instagram, Images, Linkedin, Dribbble, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const insta =
    "https://www.instagram.com/fraansea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  // const twitter=""
  const linkedIn =
    "https://www.linkedin.com/in/francis-gigi-kuyilanparambil-39942a27b/";
  const dribble = "https://dribbble.com/";

  // Helper function to handle navigation and close the menu
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-100 bg-white sm:border-0">
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:justify-center sm:py-6">
        {/* Home icon left (mobile only) */}
        <div className="block sm:hidden">
          <span className="inline-flex items-center justify-center hover:cursor-pointer">
            <Home
              onClick={() => navigate("/")}
              size={36}
              color="#111"
              strokeWidth={2.5}
            />
          </span>
        </div>

        {/* Center nav (hidden on mobile) */}
        <div
          className="hidden items-center gap-6 rounded-[2rem] border border-gray-200 bg-white px-8 py-2 sm:flex"
          style={{ minWidth: 500 }}
        >
          {/* ... (Desktop nav content remains the same) ... */}
          <div className="flex gap-4">
            <span className="inline-flex items-center justify-center hover:cursor-pointer">
              <Home
                onClick={() => navigate("/")}
                size={22}
                color="#111"
                strokeWidth={2}
              />
            </span>
            <Divider />
          </div>
          <div className="flex gap-12">
            <NavIcon
              icon={<Instagram size={22} color="#111" strokeWidth={2} />}
              link={insta}
            />
            <NavIcon
              icon={<Linkedin size={22} color="#111" strokeWidth={2} />}
              link={linkedIn}
            />
            <NavIcon
              icon={<Dribbble size={22} color="#111" strokeWidth={2} />}
              link={dribble}
            />
            <span
              onClick={() => navigate("/gallery")}
              className="inline-flex items-center justify-center hover:cursor-pointer"
            >
              <Images size={22} color="#111" strokeWidth={2} />
            </span>
            <Divider />
          </div>
          <button
            className="rounded-[1.5rem] bg-black px-6 py-2 font-manrope text-lg font-normal text-white hover:cursor-pointer"
            style={{ minWidth: 120, letterSpacing: 0.2 }}
          >
            <a
              href="https://wa.me/+919495703736"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s Talk
            </a>
          </button>
        </div>

        {/* Hamburger/Close Icon Toggle (mobile only) */}
        <div className="block sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the menu state
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 focus:outline-none"
          >
            {isMenuOpen ? (
              <X size={28} color="#111" strokeWidth={2.5} />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-7 rounded bg-gray-700"></span>
                <span className="block h-0.5 w-7 rounded bg-gray-700"></span>
                <span className="block h-0.5 w-7 rounded bg-gray-700"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* --- Mobile Push-Down Menu --- */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-8 border-t border-gray-100 bg-white py-8 sm:hidden">
          {/* Gallery Link */}
          <span
            onClick={() => handleNavigate("/gallery")}
            className="flex w-40 items-center gap-6 text-xl font-medium text-gray-800 hover:cursor-pointer"
          >
            <Images size={24} color="#111" strokeWidth={2} />
            <span>Gallery</span>
          </span>

          {/* Social Links Section */}
          <div className="flex flex-col items-center gap-6">
            <SocialLink
              icon={<Instagram size={28} />}
              link={insta}
              text="Instagram"
            />
            <SocialLink
              icon={<Linkedin size={28} />}
              link={linkedIn}
              text="LinkedIn"
            />
            <SocialLink
              icon={<Dribbble size={28} />}
              link={dribble}
              text="Dribbble"
            />
          </div>

          {/* Let's Talk Button */}
          <button className="rounded-[2rem] bg-black px-6 py-3 font-manrope text-lg font-normal text-white">
            <a
              href="https://wa.me/+919495703736"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s Talk
            </a>
          </button>
        </div>
      )}
    </header>
  );
};

// --- Helper Components ---

// This component is now only used for the desktop view
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

// A new component for the mobile social links to keep the code clean
const SocialLink = ({
  icon,
  link,
  text,
}: {
  icon: React.ReactNode;
  link: string;
  text: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-40 items-center gap-4 text-xl font-medium text-gray-800"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

const Divider = () => (
  <div className="mx-2 h-8 w-px bg-gray-200" style={{ opacity: 0.5 }} />
);
