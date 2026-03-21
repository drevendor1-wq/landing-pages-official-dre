"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

export default function BannerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSectionClick = (sectionId: string) => {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const targetY = element.getBoundingClientRect().top + window.pageYOffset;
        const scrollObj = { y: window.pageYOffset };
        
        gsap.to(scrollObj, {
          y: targetY,
          duration: 1.5,
          ease: "expo.inOut",
          onUpdate: () => window.scrollTo(0, scrollObj.y)
        });
      }
    }, 400);
  };

  return (
    <>
      <header className={`atelier_header ${!isVisible ? "header_hidden" : ""}`}>
        <div className="header_container">
          
         <div className="header_logo">
  <Image
    src="/images/DRE_BLACK_LOGO.png"
    alt="Logo"
    width={70}
    height={70}
    className="logo_img"
    priority
  />
</div>

          {/* DESKTOP ONLY */}
          {!isMobile && (
            <div className="header_right">
              <button onClick={() => { setEnquiryModalOpen(true); }} className="header_cta">
                GET FREE CONSULTATION
              </button>

              <button 
                className={`hamburger_btn ${isMenuOpen ? "active" : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          )}

        </div>
      </header>

      {/* DESKTOP ONLY DRAWER */}
      {!isMobile && (
        <div className={`drawer_overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
          <div className="atelier_drawer" onClick={(e) => e.stopPropagation()}>
            <nav className="drawer_nav">
              <ul className="nav_list">
                {['OVERVIEW', 'AMENITIES', 'GALLERY', 'LOCATION', 'CONTACT'].map((item) => (
                  <li key={item}>
                    <a href="#" onClick={(e) => { 
                      e.preventDefault(); 
                      handleSectionClick(item.toLowerCase()); 
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="drawer_footer">
              <button 
                onClick={() => { closeMenu(); setEnquiryModalOpen(true); }}
                className="drawer_cta_btn"
              >
                GET FREE CONSULTATION
              </button>
              <div className="drawer_line"></div>
              <p className="drawer_brand">EAGLE HILLS TBILISI</p>
            </div>
          </div>
        </div>
      )}

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Eagle Hills Tbilisi Water Front"
        buttonText="GET FREE CONSULTATION"
      />

      <style jsx>{`
        .atelier_header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 40px 0;
          background: transparent;
          transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), 
                      opacity 0.6s ease;
          pointer-events: all;
        }
         
        .header_logo {
  width: 60px;
}
        .header_hidden {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .header_container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header_cta {
          background: #c5a35d;
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          cursor: pointer;
          margin-right: 40px;
          transition: 0.3s;
        }

        .header_cta:hover { background: #111; }

        .hamburger_btn {
          background: transparent;
          border: none;
          width: 30px;
          height: 18px;
          position: relative;
          cursor: pointer;
        }

        .hamburger_btn span {
          display: block;
          width: 100%;
          height: 2px;
          background: #111;
          position: absolute;
          transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .hamburger_btn span:first-child { top: 0; }
        .hamburger_btn span:last-child { bottom: 0; width: 60%; right: 0; }

        .hamburger_btn.active span:first-child { transform: translateY(8px) rotate(45deg); }
        .hamburger_btn.active span:last-child { transform: translateY(-8px) rotate(-45deg); width: 100%; }

        .drawer_overlay {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }

        .drawer_overlay.open { opacity: 1; visibility: visible; }

        .atelier_drawer {
          position: absolute;
          right: 0;
          top: 0;
          width: 500px;
          height: 100vh;
          background: #fff;
          padding: 80px 80px;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
          box-shadow: -20px 0 60px rgba(0,0,0,0.05);
        }

        .drawer_overlay.open .atelier_drawer { transform: translateX(0); }

        .nav_list { list-style: none; padding: 0; margin: 60px 0; }
        .nav_list li { margin-bottom: 30px; }
        
        .nav_list a {
          font-size: 38px;
          font-family: serif;
          color: #111;
          text-decoration: none;
          letter-spacing: -1.5px;
          transition: 0.4s;
          display: block;
          font-weight: 300;
        }

        .nav_list a:hover { color: #c5a35d; padding-left: 15px; }

        .drawer_footer { margin-top: auto; }
        .drawer_cta_btn {
          width: 100%;
          background: #111;
          color: #fff;
          border: none;
          padding: 22px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          cursor: pointer;
          margin-bottom: 30px;
        }

        .drawer_line { width: 40px; height: 1px; background: #c5a35d; margin-bottom: 15px; }
        .drawer_brand { font-size: 10px; letter-spacing: 5px; color: #999; font-weight: 800; }

        /* MOBILE FIX */
        @media (max-width: 768px) {
  .header_logo {
    width: 50px; /* 👈 control size here */
  }

  .header_logo :global(img) {
    width: 100% !important;
    height: auto !important;
  }
}
  
}
      `}</style>
    </>
  );
}