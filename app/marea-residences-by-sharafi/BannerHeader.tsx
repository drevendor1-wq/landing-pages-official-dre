"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

export default function BannerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappNumber = "971527543245";
  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in Marea Residences in Dubai Islands. Please provide more information regarding the project and available units."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = 80;
        const targetY = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        const scrollObj = { y: window.pageYOffset };
        
        gsap.to(scrollObj, {
          y: targetY,
          duration: 1.2,
          ease: "power3.inOut",
          onUpdate: () => window.scrollTo(0, scrollObj.y)
        });
      }
    }, 400);
  };

  const openEnquiryModal = () => {
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <header className={`lux-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="lux-header-container">
          <div className="lux-logo">
            <Image
              src="/images/dre-logo/dre_black.png" // Switched to black logo for light theme
              alt="DRE Logo"
              width={120}
              height={50}
              className="logo-img"
              priority
            />
          </div>
          
          <div className="lux-header-right">
            <button onClick={openEnquiryModal} className="lux-consultation-btn">
              REQUEST FREE CONSULTATION
            </button>
            
            <button 
              className={`lux-hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className="bar top"></div>
              <div className="bar mid"></div>
              <div className="bar bot"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      <div className={`lux-drawer-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
        <div className="lux-drawer" onClick={(e) => e.stopPropagation()}>
          <nav className="lux-nav">
            <ul className="lux-nav-list">
              {['OVERVIEW', 'AMENITIES', 'PAYMENT PLAN','GALLERY', 'FLOOR PLAN', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => { 
                    e.preventDefault(); 
                    handleSectionClick(item.toLowerCase()); 
                  }}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="drawer-footer">
             <p className="footer-tag">MAREA RESIDENCES | DUBAI ISLANDS</p>
          </div>
        </div>
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => { setEnquiryModalOpen(false); document.body.style.overflow = "unset"; }}
        floorPlanTitle="Marea Residences | Dubai Islands"
        buttonText="REQUEST FREE CONSULTATION"
      />

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="lux-whatsapp-float">
        <svg viewBox="0 0 32 32"><path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.708 2.193 8.19L.07 31.93l7.53-2.06a15.94 15.94 0 0 0 8.4 2.31h.007c8.835 0 16-7.164 16-16S24.842.396 16 .396zm0 29.25a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.47 1.22 1.2-4.36-.31-.5a13.21 13.21 0 1 1 10.79 5.76zm7.36-9.86c-.4-.2-2.36-1.17-2.73-1.3-.37-.13-.64-.2-.91.2s-1.05 1.3-1.28 1.57c-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-2-.59-.52-1-1.17-1.12-1.37-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.91-2.2-1.25-3-.33-.8-.66-.7-.91-.7h-.77c-.25 0-.66.1-1 .46s-1.32 1.29-1.32 3.15 1.35 3.65 1.54 3.9c.2.25 2.65 4.04 6.43 5.66.9.39 1.6.62 2.14.8.9.28 1.72.24 2.36.15.72-.11 2.36-.96 2.7-1.88.34-.92.34-1.7.24-1.88-.1-.18-.37-.28-.77-.48z" /></svg>
      </a>

      <style jsx>{`
        .lux-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 25px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .lux-header.scrolled {
          background: rgba(253, 252, 249, 0.95);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
        }

        .lux-header-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .lux-consultation-btn {
          background: transparent;
          border: 1px solid #1a1a1a;
          color: #1a1a1a;
          padding: 12px 24px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: 0.3s;
          margin-right: 30px;
        }

        .lux-consultation-btn:hover {
          background: #1a1a1a;
          color: #fff;
        }

        .lux-header-right {
          display: flex;
          align-items: center;
        }

        .lux-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 5px;
        }

        .bar {
          width: 28px;
          height: 1px;
          background: #1a1a1a;
          transition: 0.4s;
        }

        .lux-hamburger.active .top { transform: translateY(7px) rotate(45deg); }
        .lux-hamburger.active .mid { opacity: 0; }
        .lux-hamburger.active .bot { transform: translateY(-7px) rotate(-45deg); }

        /* Drawer Styling */
        .lux-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(253, 252, 249, 0);
          visibility: hidden;
          transition: 0.5s;
          z-index: 999;
        }

        .lux-drawer-overlay.open {
          visibility: visible;
          background: rgba(253, 252, 249, 0.98);
        }

        .lux-drawer {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.5s 0.2s;
        }

        .lux-drawer-overlay.open .lux-drawer {
          opacity: 1;
          transform: translateY(0);
        }

        .lux-nav-list {
          list-style: none;
          text-align: center;
          padding: 0;
        }

        .lux-nav-list li {
          margin: 25px 0;
        }

        .lux-nav-list a {
          font-family: serif;
          font-size: 42px;
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 400;
          transition: 0.3s;
          letter-spacing: -1px;
        }

        .lux-nav-list a:hover {
          color: #4a7c92;
          padding-left: 15px;
        }

        .drawer-footer {
          position: absolute;
          bottom: 60px;
          text-align: center;
        }

        .footer-tag {
          color: #4a7c92;
          font-size: 12px;
          letter-spacing: 4px;
        }

        .lux-whatsapp-float {
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 100;
          background: #25d366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .lux-whatsapp-float:hover { transform: scale(1.1) translateY(-5px); }
        .lux-whatsapp-float svg { width: 32px; height: 32px; fill: currentColor; }

        @media (max-width: 768px) {
          .lux-header-container { padding: 0 25px; }
          .lux-consultation-btn { display: none; }
          .lux-nav-list a { font-size: 32px; }
        }
      `}</style>
    </>
  );
}