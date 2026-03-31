"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerHeader from "./BannerHeader";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BelgradeWaterfrontBanner() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("REQUEST BROCHURE");

  const bannerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(bannerRef.current, { opacity: 0, duration: 1 })
        .from(imageRef.current, { x: 50, opacity: 0, duration: 1.5 }, "-=0.5")
        .from(contentRef.current?.children || [], {
          y: 30,
          opacity: 0,
          stagger: 0.15,
        }, "-=1");
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const openModal = (text: string) => {
    setButtonText(text);
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="premium-banner" ref={bannerRef}>
      <BannerHeader />

      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="content-side" ref={contentRef}>
            <div className="eyebrow-wrapper">
              <div className="accent-line"></div>
              <span className="eyebrow">CASABLANCA | MOROCCO</span>
            </div>
            
            <h1 className="main-title">
              ELIE SAAB<br />
              <span className="gold-text">CASABLANCA</span>
            </h1>
            
            <p className="description">
              The first ELIE SAAB branded residences in Casablanca, bringing a fresh and innovative vision of luxury living in Morocco.
            </p>

            <div className="button-group">
              <button className="btn-primary" onClick={() => openModal("DOWNLOAD BROCHURE")}>
                DOWNLOAD BROCHURE
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-secondary" onClick={() => openModal("GET FREE CONSULTATION")}>
                REQUEST FREE CONSULTATION
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="image-side" ref={imageRef}>
            <div className="img-wrapper">
              <Image
                src="/images/moroccoProject/moroccoCover.webp"
                alt="Elie Saab Residences Casablanca"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="img-frame deco-1"></div>
              <div className="img-frame deco-2"></div>
            </div>
          </div>
        </div>

        {/* Floating Detail Bar - Integrated into the light design */}
        {/* <div className="info-bar">
          <div className="info-item">
            <label>Starting From</label>
            <span>€210,000</span>
          </div>
          <div className="divider"></div>
          <div className="info-item">
            <label>Completion</label>
            <span>Q3 2026</span>
          </div>
          <div className="divider"></div>
          <div className="info-item">
            <label>Investment Yield</label>
            <span>Up to 8%</span>
          </div>
        </div> 
        */}
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => { setEnquiryModalOpen(false); document.body.style.overflow = "unset"; }}
        floorPlanTitle="Elie Saab Residences Casablanca"
        buttonText={buttonText}
      />

      {/* INTERNAL CSS - REVISED FOR LIGHT LUXURY */}
      <style jsx>{`
        .premium-banner {
          background: #fdfcf9; /* Ultra light, warm off-white */
          color: #1a1a1a; /* Soft black for text */
          min-height: 100vh;
          position: relative;
          font-family: 'optima', sans-serif; /* Placeholder for a serif/classy font if available, falls back to serif */
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 60px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .content-side {
          position: relative;
          z-index: 2;
        }

        .eyebrow-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .accent-line {
          width: 50px;
          height: 1px;
          background: #b89562; /* Refined Gold */
        }

        .eyebrow {
          color: #b89562;
          font-size: 13px;
          letter-spacing: 5px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .main-title {
          font-size: 72px;
          line-height: 1.05;
          font-weight: 700;
          margin-bottom: 30px;
          letter-spacing: -1.5px;
          font-family: serif; /* More luxurious title font */
        }

        .gold-text {
          color: #b89562;
          font-weight: 400;
          font-style: italic; /* Elegant touch */
        }

        .description {
          font-size: 19px;
          color: #555;
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 50px;
          font-family: 'Inter', sans-serif;
        }

        .button-group {
          display: flex;
          gap: 25px;
          align-items: center;
          font-family: 'Inter', sans-serif;
        }

        .btn-primary {
          background: #1a1a1a;
          color: #fff;
          padding: 20px 40px;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: 0.4s cubic-bezier(0.3, 0, 0, 1);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-primary:hover {
          background: #b89562;
          transform: translateY(-3px);
        }

        .btn-arrow {
          font-size: 18px;
          transition: transform 0.3s;
        }
        
        .btn-primary:hover .btn-arrow {
          transform: translateX(5px);
        }

        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          padding: 20px 0;
          border: none;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
          cursor: pointer;
          position: relative;
          transition: 0.3s;
        }

        .btn-secondary::after {
          content: '';
          position: absolute;
          bottom: 15px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #1a1a1a;
          transform: scaleX(1);
          transition: transform 0.3s;
        }

        .btn-secondary:hover {
          color: #b89562;
        }
        
        .btn-secondary:hover::after {
          background: #b89562;
          transform: scaleX(0.5);
        }

        .image-side {
          position: relative;
          padding: 20px;
        }

        .img-wrapper {
          position: relative;
          height: 700px;
          width: 100%;
          overflow: visible; /* To show decorative frames */
        }

        .img-wrapper :global(img) {
          border-radius: 2px;
          z-index: 1;
          box-shadow: 0 30px 70px rgba(0,0,0,0.07);
        }

        /* Decorative frames for ultra luxury feel */
        .img-frame {
          position: absolute;
          border: 1px solid rgba(184, 149, 98, 0.2);
          z-index: 0;
          transition: 0.5s;
        }

        .deco-1 {
          inset: -20px 20px 20px -20px;
        }

        .deco-2 {
          inset: 30px -30px -30px 30px;
          border-color: rgba(184, 149, 98, 0.1);
        }
        
        .image-side:hover .deco-1 { transform: translate(5px, -5px); }
        .image-side:hover .deco-2 { transform: translate(-5px, 5px); }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .main-title { font-size: 60px; }
          .hero-grid { gap: 60px; }
        }

        @media (max-width: 1024px) {
    .container { 
      padding: 100px 24px 60px; /* Space for BannerHeader */
      display: block; /* Simpler flow for mobile */
    }

    .hero-grid { 
      display: flex;
      flex-direction: column;
      gap: 40px; 
    }

    .image-side { 
      order: 1; 
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      padding: 0; /* Remove extra padding to maximize image size */
    }

    .img-wrapper { 
      position: relative;
      height: 55vh; /* Responsive height based on viewport */
      min-height: 400px;
      width: 100%;
      border-radius: 4px;
      overflow: hidden; /* Prevent frames from causing horizontal scroll */
    }

    .content-side { 
      order: 2; 
      text-align: center; 
      display: flex; 
      flex-direction: column; 
      align-items: center;
    }

    .main-title { 
      font-size: clamp(38px, 8vw, 56px); /* Fluid typography */
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .description { 
      font-size: 17px;
      margin-bottom: 40px;
      padding: 0 10px;
    }

    .button-group { 
      width: 100%;
      flex-direction: column; 
      gap: 15px; 
    }

    .btn-primary, .btn-secondary { 
      width: 100%; 
      justify-content: center;
      padding: 18px 0;
    }

    .btn-secondary::after {
      left: 25%;
      width: 50%; /* Centered underline for mobile */
    }
      .eyebrow-wrapper { 
    justify-content: center; 
    white-space: nowrap; /* Prevents text from breaking into two lines */
    width: 100%;
    gap: 10px; /* Reduced gap from 15px */
  }

  .eyebrow { 
    font-size: 11px; /* Slightly smaller to fit width */
    letter-spacing: 3px; /* Reduced from 5px to save space on mobile */
  }

  .accent-line {
    width: 30px; /* Shorter line on mobile */
    flex-shrink: 0; /* Ensures the line doesn't disappear */
  }
  }

  @media (max-width: 768px) {
    .img-wrapper { 
      height: 45vh; 
      min-height: 320px;
    }
    
    .main-title {
      letter-spacing: -0.5px;
    }

    /* Hide decorative frames on small mobile to prevent layout shifts */
    .deco-1, .deco-2 { display: none; }
  }
      `}</style>
    </section>
  );
}