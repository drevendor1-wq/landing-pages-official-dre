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

  const bannerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      if (videoRef.current && contentRef.current) {
        tl.from(videoRef.current, { scale: 1.1, opacity: 0, duration: 2 })
          .from(Array.from(contentRef.current.children), {
            y: 40,
            opacity: 0,
            stagger: 0.12,
          }, "-=1.5");
      }
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
      {/* FULLSCREEN VIDEO BACKGROUND */}
      <div className="video-bg" ref={videoRef}>
        <video
          src="https://rigawaterfrontcdn.eaglehills.ai/videos/en/home-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="overlay" />
      </div>

      <BannerHeader />

      <div className="container">
        <div className="content-side" ref={contentRef}>
          <div className="accent-line"></div>
          <span className="eyebrow">EAGLE HILLS</span>
          <h1 className="main-title">
            RIGA <br />
            <span className="gold-text">WATERFRONT</span>
          </h1>
          <p className="description">
            A New European Centre Rising in the Heart of Riga.
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
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => { setEnquiryModalOpen(false); document.body.style.overflow = "unset"; }}
        floorPlanTitle="Enquiry: Eagle Hills Riga Waterfront"
        buttonText={buttonText}
      />

      <style jsx>{`
        .premium-banner {
          position: relative;
          min-height: 100vh;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        /* FULL VIDEO BACKGROUND */
        .video-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .video-bg video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(0,0,0,0.3), rgba(0,0,0,0.85));
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 40px;
          display: flex;
          align-items: center;
          min-height: 100vh;
        }

        .content-side {
          max-width: 600px;
        }

        .accent-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #c5a35d, transparent);
          margin-bottom: 25px;
        }

        .eyebrow {
          color: #c5a35d;
          font-size: 11px;
          letter-spacing: 6px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 18px;
          opacity: 0.9;
        }

        .main-title {
          font-size: 100px;
          line-height: 0.9;
          font-weight: 600;
          margin-bottom: 30px;
          letter-spacing: -3px;
        }

        .gold-text {
           background: linear-gradient(135deg, #ffffff, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 00;
        }

        .description {
          font-size: 18px;
          color: #ddd;
          max-width: 480px;
          line-height: 1.7;
          margin-bottom: 45px;
        }

        .button-group {
          display: flex;
          gap: 20px;
        }

        .btn-gold {
          background: linear-gradient(135deg, #c5a35d, #e6c27a);
          color: #000;
          padding: 18px 40px;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(197,163,93,0.4);
        }

        .btn-outline {
          background: rgba(255,255,255,0.05);
          color: #fff;
          padding: 18px 40px;
          border: 1px solid rgba(255,255,255,0.2);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .btn-gold:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(197,163,93,0.6);
        }

        .btn-outline:hover {
          background: rgba(255,255,255,0.15);
          border-color: #c5a35d;
        }

        @media (max-width: 1024px) {
          .main-title { font-size: 60px; }
          .container { padding: 100px 25px; }
        }

        @media (max-width: 768px) {
          .main-title { font-size: 42px; }
          .button-group { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
