"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface NavbarProps {
  onNavClick: (id: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Location', id: 'location' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Floor Plans', id: 'floorplan' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      }`}
    >
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => onNavClick('home')}
      >
        <div className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                    <Image
                                    src={isScrolled ? "/images/DRE_BLACK_LOGO.png" :  "/images/DRE White Logo.png" }
                                    alt="DRE Logo"
                                    width={120}
                                    height={150}
                                    style={{ width: "auto", height: "40px", objectFit:"cover" }}
                                  />

            </div>
      </div>

      <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-all ${
        isScrolled ? 'bg-zinc-100 border-zinc-200' : 'bg-white/10 border-white/20'
      }`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all uppercase tracking-widest ${
              activeSection === item.id 
                ? 'bg-white text-black shadow-sm' 
                : isScrolled ? 'text-zinc-600 hover:text-black' : 'text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button 
        onClick={() => onNavClick('contact')}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all group border ${
          isScrolled 
            ? 'bg-black text-white border-black hover:bg-zinc-800' 
            : 'bg-white text-black border-white hover:bg-zinc-100'
        }`}
      >
        <span className="text-sm">GET IN TOUCH</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="14" height="14" 
          viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" 
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
    </header>
  );
};

export default Navbar;