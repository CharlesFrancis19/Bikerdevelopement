import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { text: "Home", url: "#" },
  {
    text: "Bike Service",
    url: "#",
  },
  {
    text: "Bike Sales",
    url: "#",
  },
  { text: "About", url: "#" },
  { text: "Contact", url: "#" },
  { text: "Talk to Us", url: "#" },
];

const MHeaderBanner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="md:hidden flex justify-between items-center max-w-[1200px] m-auto pr-4 p-2">
      <div className="flex items-center">
        <Image src="/logo.png" width={200} height={200} alt="Logo" />
      </div>
      <div className="relative">
        <div
          className="cursor-pointer font-semibold border border-solid border-gray-300 rounded-md p-4"
          onClick={toggleDropdown}
        ></div>
        {isDropdownOpen && (
          <div className="absolute bg-white p-2 border border-gray-300 rounded-md min-w-max min-h-fit right-0 mt-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block py-2 hover:bg-gray-100"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MHeaderBanner;
