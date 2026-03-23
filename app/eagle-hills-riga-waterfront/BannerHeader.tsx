"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

export default function BannerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isListingsOpen, setIsListingsOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const whatsappNumber = "971527543245";
  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in Eagle Hills Riga Waterfront Project. Please provide more information regarding the project and available units."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsListingsOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    closeMenu();
    
    // Wait for menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = 100; // Offset for fixed header
        const targetY = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        const startY = window.pageYOffset;
        
        // Create an object to animate
        const scrollObj = { y: startY };
        
        // Use GSAP to animate scroll position with smooth easing
        gsap.to(scrollObj, {
          y: targetY,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: function() {
            window.scrollTo(0, scrollObj.y);
          }
        });
      }
    }, 300); // Wait for drawer animation to complete
  };

  const openEnquiryModal = () => {
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <header className="damac_banner_header">
        <div className="damac_banner_header_container">
          <div className="damac_banner_header_logo">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={60}
              className="damac_banner_header_logo_image"
              priority
            />
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      <div className={`damac_banner_drawer_overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
        <div className="damac_banner_drawer" onClick={(e) => e.stopPropagation()}>
          <button 
            className="damac_banner_drawer_close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <nav className="damac_banner_drawer_nav">
            <ul className="damac_banner_drawer_nav_list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("overview"); }}>OVERVIEW</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("amenities"); }}>AMENITIES</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("gallery"); }}>GALLERY</a>
              </li>
               <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("projects"); }}>PROPERTIES</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("contact"); }}>CONTACT</a>
              </li>
            </ul>
          </nav>

          <div className="damac_banner_drawer_footer">
            <button 
              onClick={() => {
                closeMenu();
                openEnquiryModal();
              }}
              className="damac_banner_drawer_button"
            >
              GET FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Eagle Hills Belgrade Water Front"
        buttonText="GET FREE CONSULTATION"
      />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="40"
          height="40"
          fill="currentColor"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.708 2.193 8.19L.07 31.93l7.53-2.06a15.94 15.94 0 0 0 8.4 2.31h.007c8.835 0 16-7.164 16-16S24.842.396 16 .396zm0 29.25a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.47 1.22 1.2-4.36-.31-.5a13.21 13.21 0 1 1 10.79 5.76zm7.36-9.86c-.4-.2-2.36-1.17-2.73-1.3-.37-.13-.64-.2-.91.2s-1.05 1.3-1.28 1.57c-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-2-.59-.52-1-1.17-1.12-1.37-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.91-2.2-1.25-3-.33-.8-.66-.7-.91-.7h-.77c-.25 0-.66.1-1 .46s-1.32 1.29-1.32 3.15 1.35 3.65 1.54 3.9c.2.25 2.65 4.04 6.43 5.66.9.39 1.6.62 2.14.8.9.28 1.72.24 2.36.15.72-.11 2.36-.96 2.7-1.88.34-.92.34-1.7.24-1.88-.1-.18-.37-.28-.77-.48z" />
        </svg>
      </a>
    </>
  );
}
