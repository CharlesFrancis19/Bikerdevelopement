import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
    { text: 'Home', url: '#' },
    { text: 'Bike sales', url: '#', dropdown: [
        { text: 'Service1', url: '#' },
        { text: 'Service2', url: '#' },
        { text: 'Service3', url: '#' },
    ]},
    { text: 'Bike Service', url: '#', dropdown: [
        { text: 'ServiceA', url: '#' },
        { text: 'ServiceB', url: '#' },
        { text: 'ServiceC', url: '#' },
    ]},
    { text: 'About', url: '#' },
    { text: 'Contact', url: '#' },
];

const HeaderBanner = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const closeDropdown = () => {
            setActiveDropdown(null);
        };
        
        window.addEventListener('click', closeDropdown);
        
        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
      <>
        <nav className="hidden md:flex justify-between items-center max-w-[1200px] m-auto py-4">
            <div className="flex items-center">
                <Image src="/logo.png" width={200} height={200} alt="Logo" />
            </div>
            <ul className="flex gap-8">
                {navLinks.map((link, index) => (
                    <li
                        key={index}
                        className="relative"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(index === activeDropdown ? null : index);
                        }}
                    >
                        {link.text === 'Talk to an Expert' ? (
                            <button className="block px-4  font-semibold border border-solid border-gray-300 rounded-md p-4">
                                {link.text}
                            </button>
                        ) : (
                            <a href={link.url} className="block mt-4 font-semibold hover:text-orange-500">
                                {link.text}
                            </a>
                        )}
                        {link.dropdown && activeDropdown === index && (
                            <ul className="absolute top-full left-0 mt-2 space-y-2 bg-white border border-gray-300 z-50">
                                {link.dropdown.map((subLink, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subLink.url} className="block px-4 py-2 hover:bg-gray-100">
                                            {subLink.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
        </>
    );
};

export default HeaderBanner;
