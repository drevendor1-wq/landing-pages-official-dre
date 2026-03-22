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

      tl.from(imageRef.current, { scale: 1.2, opacity: 0, duration: 2 })
        .from(contentRef.current?.children || [], {
          x: -30,
          opacity: 0,
          stagger: 0.1,
        }, "-=1.5");
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
            <div className="accent-line"></div>
            <span className="eyebrow">EAGLE HILLS</span>
            <h1 className="main-title">
              RIGA <br />
              <span className="gold-text">WATERFRONT</span>
            </h1>
            <p className="description">
              A monumental urban revitalization project by Eagle Hills. 
              Experience world-class riverside living in the heart of the Serbia.
            </p>
            
            <div className="button-group">
              <button className="btn-gold" onClick={() => openModal("DOWNLOAD BROCHURE")}>
                DOWNLOAD BROCHURE
              </button>
              <button className="btn-outline" onClick={() => openModal("GET FREE CONSULTATION")}>
                GET FREE CONSULTATION
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="image-side" ref={imageRef}>
            <div className="img-wrapper">
              <Image
                src="/images/eagle-hills-belgrade/eagleHillsBanners.webp"
                alt="Belgrade Waterfront"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="img-overlay"></div>
            </div>
          </div>
        </div>

        {/* Floating Detail Bar */}
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
        </div> */}
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => { setEnquiryModalOpen(false); document.body.style.overflow = "unset"; }}
        floorPlanTitle="Eagle Hills Riga Waterfront"
        buttonText={buttonText}
      />

      {/* INTERNAL CSS */}
      <style jsx>{`
        .premium-banner {
          background: #0d0d0d;
          color: #fff;
          min-height: 100vh;
          position: relative;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 40px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .accent-line {
          width: 40px;
          height: 2px;
          background: #c5a35d;
          margin-bottom: 20px;
        }

        .eyebrow {
          color: #c5a35d;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 15px;
        }

        .main-title {
          font-size: 80px;
          line-height: 0.95;
          font-weight: 700;
          margin-bottom: 25px;
          letter-spacing: -2px;
        }

        .gold-text {
          color: #c5a35d;
          font-weight: 300;
          
        }

        .description {
          font-size: 18px;
          color: #a0a0a0;
          max-width: 450px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .button-group {
          display: flex;
          gap: 20px;
        }

        .btn-gold {
          background: #c5a35d;
          color: #000;
          padding: 18px 35px;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 13px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-outline {
          background: transparent;
          color: #fff;
          padding: 18px 35px;
          border: 1px solid rgba(255,255,255,0.3);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 13px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-gold:hover { background: #e0bc74; transform: translateY(-2px); }
        .btn-outline:hover { background: #fff; color: #000; }

        .image-side {
          position: relative;
        }

        .img-wrapper {
          position: relative;
          height: 650px;
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #0d0d0d, transparent 30%);
        }

        .info-bar {
          margin-top: 60px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 30px 60px;
          display: flex;
          justify-content: space-between;
          border-radius: 4px;
        }

        .info-item label {
          display: block;
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .info-item span {
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .divider {
          width: 1px;
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .main-title { font-size: 50px; }
          .info-bar { flex-direction: column; gap: 20px; padding: 30px; }
          .divider { display: none; }
        }

        @media (max-width: 768px){
         .btn-gold {
          background: #c5a35d;
          color: #000;
          padding: 18px 35px;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 13px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-outline {
          background: transparent;
          color: #fff;
          padding: 18px 35px;
          border: 1px solid rgba(255,255,255,0.3);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 13px;
          cursor: pointer;
          transition: 0.3s;
        }
        }
      `}</style>
    </section>
  );
}