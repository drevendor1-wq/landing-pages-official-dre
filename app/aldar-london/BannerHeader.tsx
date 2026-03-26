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
  const whatsappNumber = "971527543245";
  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in Aldar's London Projects. Please provide more information regarding the project and available units."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
    src="/images/dre-logo/dre_white.png"
    alt="Logo"
    width={120}
    height={120}
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
            </div>
          )}

        </div>
      </header>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Eagle Hills Tbilisi Water Front"
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
          width="50"
          height="50"
          fill="currentColor"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.708 2.193 8.19L.07 31.93l7.53-2.06a15.94 15.94 0 0 0 8.4 2.31h.007c8.835 0 16-7.164 16-16S24.842.396 16 .396zm0 29.25a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.47 1.22 1.2-4.36-.31-.5a13.21 13.21 0 1 1 10.79 5.76zm7.36-9.86c-.4-.2-2.36-1.17-2.73-1.3-.37-.13-.64-.2-.91.2s-1.05 1.3-1.28 1.57c-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-2-.59-.52-1-1.17-1.12-1.37-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.91-2.2-1.25-3-.33-.8-.66-.7-.91-.7h-.77c-.25 0-.66.1-1 .46s-1.32 1.29-1.32 3.15 1.35 3.65 1.54 3.9c.2.25 2.65 4.04 6.43 5.66.9.39 1.6.62 2.14.8.9.28 1.72.24 2.36.15.72-.11 2.36-.96 2.7-1.88.34-.92.34-1.7.24-1.88-.1-.18-.37-.28-.77-.48z" />
        </svg>
      </a>

     <style jsx>{`
  .atelier_header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 28px 0;

    background: transparent;
    transition: all 0.5s ease;
  }

  /* SCROLLED STATE */
  .atelier_header.scrolled {
    background: #ffffff;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    padding: 18px 0;
  }

  .header_hidden {
    transform: translateY(-100%);
    opacity: 0;
  }

  .header_container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* LOGO */
  .header_logo {
    width: 120px;
    transition: 0.4s;
    filter: brightness(0) invert(1); /* white initially */
  }

  .atelier_header.scrolled .header_logo {
    filter: none; /* dark logo on scroll */
  }

  /* CTA BUTTON */
  .header_cta {
    position: relative;
    background:  #fff;
    color: #1a1818;
    border: 1px solid rgba(255,255,255,0.6);
    padding: 12px 26px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    margin-right: 35px;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  /* HOVER LINE EFFECT */
  .header_cta::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #fff;
    z-index: -1;
    transition: 0.4s ease;
  }

  .header_cta:hover::after {
    width: 100%;
  }

  .header_cta:hover {
    color: #000;
  }

  /* SCROLLED CTA */
  .atelier_header.scrolled .header_cta {
    color: #1e3a5f;
    border: 1px solid #dbe7f3;
  }

  .atelier_header.scrolled .header_cta::after {
    background: #6aaed6;
  }

  .atelier_header.scrolled .header_cta:hover {
    color: #fff;
  }

  /* HAMBURGER */
  .hamburger_btn {
    width: 28px;
    height: 18px;
    position: relative;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .hamburger_btn span {
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    transition: 0.4s;
  }

  .hamburger_btn span:first-child { top: 0; }
  .hamburger_btn span:last-child { bottom: 0; width: 60%; right: 0; }

  /* SCROLLED MENU COLOR */
  .atelier_header.scrolled .hamburger_btn span {
    background: #1e3a5f;
  }

  /* ACTIVE STATE */
  .hamburger_btn.active span:first-child {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger_btn.active span:last-child {
    transform: translateY(-8px) rotate(-45deg);
    width: 100%;
  }

  /* DRAWER (EDITORIAL STYLE) */
  .drawer_overlay {
    position: fixed;
    inset: 0;
    background: #ffffff;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
  }

  .drawer_overlay.open {
    opacity: 1;
    visibility: visible;
  }

  .atelier_drawer {
    position: absolute;
    right: 0;
    top: 0;
    width: 480px;
    height: 100vh;
    background: #f9fcff;
    padding: 80px 70px;

    transform: translateX(100%);
    transition: 0.7s ease;
  }

  .drawer_overlay.open .atelier_drawer {
    transform: translateX(0);
  }

  .nav_list {
    list-style: none;
    padding: 0;
    margin: 60px 0;
  }

  .nav_list li {
    margin-bottom: 25px;
  }

  .nav_list a {
    font-size: 36px;
    color: #1e3a5f;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: -1px;
    position: relative;
  }

  /* UNDERLINE HOVER */
  .nav_list a::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 1px;
    background: #6aaed6;
    transition: 0.4s;
  }

  .nav_list a:hover::after {
    width: 100%;
  }

  .drawer_cta_btn {
    width: 100%;
    background: #6aaed6;
    color: #fff;
    border: none;
    padding: 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    cursor: pointer;
  }

  .drawer_brand {
    margin-top: 20px;
    font-size: 10px;
    letter-spacing: 5px;
    color: #7a9bb8;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    .header_container {
      padding: 0 20px;
    }

    .header_logo {
      width: 155px;
    }
  }
`}</style>
    </>
  );
}