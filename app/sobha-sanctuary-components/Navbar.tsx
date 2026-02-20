import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactModal from "./ContactModal"

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
    const [buttonText, setButtonText] = useState("");
    
    const openEnquiryModal = (text: string = "Request Brochure") => {
        setButtonText(text);
        setEnquiryModalOpen(true);
        document.body.style.overflow = "hidden";
      };
    
      const closeEnquiryModal = () => {
        setEnquiryModalOpen(false);
        document.body.style.overflow = "unset";
      };

 // Effect 1: Handle the Scroll Listener (Only runs once on mount)
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Effect 2: Handle the Keyboard Listener (Depends on modal state)
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (enquiryModalOpen && e.key === "Escape") {
      closeEnquiryModal();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [enquiryModalOpen]);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'LOCATION', href: '#location' },
    { name: 'AMENITIES', href: '#amenities' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'md:py-3 py-6' : 'py-6'
    }`}>
      
      <div className={`mx-auto px-6 transition-all duration-700 ${
        isScrolled ? 'md:max-w-5xl max-w-7xl' : 'max-w-7xl'
      }`}>
        <div className={`flex items-center justify-between px-6 py-3 transition-all duration-500 ${
          isScrolled 
            ? 'md:bg-white/80 md:backdrop-blur-md md:shadow-2xl md:border md:border-white/20 md:rounded-full' 
            : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <Link href="/" className="relative h-10 w-24 transition-transform hover:scale-105">
            <Image
              src={isScrolled ? "/images/DRE_BLACK_LOGO.png" : "/images/DRE White Logo.png"}
              alt="DRE Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
  <a 
    key={link.name} 
    href={link.href}
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className={`text-[10px] font-bold tracking-[0.2em] transition-colors relative group ${
      isScrolled ? 'text-zinc-900' : 'text-white'
    }`}
  >
    {link.name}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-600 transition-all duration-300 group-hover:w-full" />
  </a>
))}
          </div>

 <div className="hidden md:block">
  {isScrolled && (
    <div className="bg-[#E27000] rounded-full inline-flex items-center">
      <button
        type="button"
        onClick={() => openEnquiryModal("Request Brochure")}
        className="bg-[#B35109] text-white hover:bg-zinc-900 px-4 py-1.5 rounded-full text-[7px] font-bold transition-all uppercase"
      >
        Request Brochure
      </button>
    </div>
  )}
</div>
        </div>
      </div>
        <div>
                  <ContactModal
                        isOpen={enquiryModalOpen}
                        onClose={closeEnquiryModal}
                        floorPlanTitle="SOBHA SANCTUARY"
                        buttonText={buttonText}
                      />
                      </div>
    </nav>
  );
};

export default Navbar;