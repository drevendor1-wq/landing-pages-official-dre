"use client";

import { useState, useEffect, useRef } from "react";
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
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

      tl.from(bannerRef.current, { opacity: 0, duration: 0.8 })
        .from(videoContainerRef.current, { 
          clipPath: "inset(0% 0% 100% 0%)", // Top-to-bottom reveal for mobile feel
          duration: 1.8,
          ease: "expo.inOut" 
        }, "-=0.4")
        .from(contentRef.current?.children || [], {
          y: 20,
          opacity: 0,
          stagger: 0.1,
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
    <section className="zenith-hero" ref={bannerRef}>
      <BannerHeader />

      <div className="zenith-container">
        <div className="zenith-hero-grid">
          
          {/* Video Side - Reordered for Mobile via CSS Order */}
          <div className="zenith-visual-side" ref={videoContainerRef}>
            <div className="zenith-video-frame">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="zenith-video-element"
                poster="/images/marea-residences/T1.jpg"
              >
                <source src="/images/marea-residences/bannerVideo.mp4" type="video/mp4" />
              </video>
              <div className="zenith-video-overlay"></div>
            </div>
            
            <div className="zenith-floating-stats">
              <span className="stat-label">COMPLETION</span>
              <span className="stat-value">Q3 2027</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="zenith-text-side" ref={contentRef}>
            <div className="zenith-eyebrow-box">
              <div className="zenith-line"></div>
              <span className="zenith-eyebrow">Luxury Beachfront Homes</span>
            </div>
            
            <h1 className="zenith-main-title">
              MAREA<br />
              <span className="zenith-cursive-text">Residences</span>
            </h1>
            
            <p className="zenith-description">
              An exclusive residential project by Sharafi Development, offering apartments and penthouses with private jacuzzis and wellness amenities.
            </p>

            <div className="zenith-actions">
              <button className="zenith-btn-fill" onClick={() => openModal("DOWNLOAD BROCHURE")}>
                DOWNLOAD BROCHURE
              </button>
              <button className="zenith-btn-ghost" onClick={() => openModal("REQUEST BOOKING")}>
                BOOK A VIEWING
              </button>
            </div>
          </div>

        </div>
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => { setEnquiryModalOpen(false); document.body.style.overflow = "unset"; }}
        floorPlanTitle="Marea Residences by Sharafi"
        buttonText={buttonText}
      />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Birthstone&family=Inter:wght@300;400;600;800&display=swap');

        .zenith-hero {
          background: #ffffff;
          color: #1a2b3c;
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .zenith-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 60px;
          flex: 1;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .zenith-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr; /* Video right, Text left on desktop */
          gap: 80px;
          align-items: center;
          width: 100%;
        }

        /* Text Styling */
        .zenith-eyebrow-box { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
        .zenith-line { width: 30px; height: 1px; background: #89a8b2; }
        .zenith-eyebrow { color: #89a8b2; font-size: 10px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; }

        .zenith-main-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(50px, 5.5vw, 85px);
          line-height: 0.9;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 30px;
        }

        .zenith-cursive-text {
          font-family: 'Birthstone', cursive;
          color: #4a7c92;
          font-weight: 400;
          font-size: 1.1em;
          display: block;
          margin-top: -5px;
        }

        .zenith-description {
          font-size: 16px;
          color: #5a6d7a;
          max-width: 450px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        /* Actions */
        .zenith-actions { display: flex; gap: 15px; }
        .zenith-btn-fill {
          background: #1a2b3c;
          color: #fff;
          padding: 20px 35px;
          border: none;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.4s;
        }
        .zenith-btn-ghost {
          background: transparent;
          color: #1a2b3c;
          padding: 20px 35px;
          border: 1px solid #e5e5e5;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.4s;
        }

        /* Video Side */
        .zenith-visual-side { position: relative; height: 70vh; }
        .zenith-video-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          overflow: hidden;
        }
        .zenith-video-element { width: 100%; height: 100%; object-fit: cover; }
        .zenith-floating-stats {
          position: absolute;
          bottom: 40px;
          left: -20px;
          background: #fff;
          padding: 25px 35px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        .stat-label { font-size: 9px; letter-spacing: 2px; color: #89a8b2; display: block; }
        .stat-value { font-size: 22px; font-weight: 800; color: #1a2b3c; }

        /* --- MOBILE ADAPTATIONS --- */
        @media (max-width: 1024px) {
          .zenith-container { padding: 40px 24px; align-items: flex-start; }
          .zenith-hero-grid { 
            grid-template-columns: 1fr; 
            gap: 40px;
            margin-top: 80px; /* Space for BannerHeader */
          }
          .zenith-visual-side { 
            order: -1; /* Video on TOP for mobile */
            height: 45vh; 
            width: calc(100% + 48px);
            margin-left: -24px; /* Bleed to edges */
          }
          .zenith-video-frame { border-radius: 0; }
          .zenith-text-side { text-align: center; }
          .zenith-eyebrow-box { justify-content: center; }
          .zenith-description { margin: 0 auto 30px; }
          .zenith-actions { flex-direction: column; gap: 10px; }
          .zenith-btn-fill, .zenith-btn-ghost { width: 100%; padding: 22px; }
          .zenith-floating-stats { left: 24px; bottom: 20px; padding: 15px 25px; }
        }

        @media (max-width: 480px) {
          .zenith-main-title { font-size: 44px; letter-spacing: -1px; }
          .zenith-visual-side { height: 40vh; }
          .stat-value { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}