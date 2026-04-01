"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

const projectImages = [
  "/images/marea-residences/T01.jpg",
  "/images/marea-residences/T5.jpg",
  "/images/marea-residences/T6.jpg",
];

const stats = [
  { label: "Starting Price", value: "AED 2.6M" },
  { label: "Handover", value: "Q3 2027" },
  { label: "Payment Plan", value: "40/30/30" },
  { label: "Location", value: "Dubai Islands" },
];

export default function HighlightsSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const sectionRef = useRef(null);

  // 1. Automatic Image Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 2. GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="highlights" className="zenith-highlights" ref={sectionRef}>
        <div className="zenith-container">
          
          {/* STATS BAR (Based on your image) */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-label">{stat.label}</span>
                <h3 className="stat-value">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* DYNAMIC IMAGE STAGE */}
          <div className="gallery-stage">
            <div className="image-wrapper">
              {projectImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`gallery-slide ${activeImage === idx ? "active" : ""}`}
                >
                  <Image 
                    src={img} 
                    alt="Project Highlight" 
                    fill 
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="image-overlay"></div>
                </div>
              ))}
            </div>

            {/* CONTENT OVERLAY */}
            <div className="gallery-content">
              <div className="gallery-nav">
                {projectImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`nav-dot ${activeImage === i ? "active" : ""}`}
                    onClick={() => setActiveImage(i)}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Marea Residences"
        buttonText="CALLBACK FROM EXPERT"
      />

      <style jsx>{`
        .zenith-highlights {
          background: #ffffff;
          padding-bottom: 120px;
        }

        .zenith-container {
          max-width: 1720px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* STATS GRID STYLING */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 80px;
        }

        .stat-card {
          padding: 60px 40px;
          border-right: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .stat-card:last-child { border-right: none; }

        .stat-label {
          font-size: 13px;
          letter-spacing: 2px;
          color: #89a8b2;
          text-transform: uppercase;
          font-weight: 500;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 2.5vw, 42px);
          color: #1a2b3c;
          margin: 0;
          font-weight: 400;
        }

        /* GALLERY STAGE */
        .gallery-stage {
          position: relative;
          height: 75vh;
          width: 100%;
          overflow: hidden;
          background: #1a2b3c;
        }

        .image-wrapper { position: absolute; inset: 0; }

        .gallery-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.1);
          transition: opacity 1.5s ease-in-out, transform 6s linear;
        }

        .gallery-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(26,43,60,0.8) 0%, transparent 60%);
          z-index: 2;
        }

        /* OVERLAY CONTENT */
        .gallery-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 80px;
          color: #ffffff;
        }

        .eyebrow {
          font-size: 11px;
          letter-spacing: 6px;
          color: #89a8b2;
          display: block;
          margin-bottom: 20px;
        }

        .display-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5vw, 80px);
          line-height: 1.1;
          font-weight: 400;
        }

        .serif-italic { font-style: italic; color: #89a8b2; }

        /* DOT NAV */
        .gallery-nav {
          display: flex;
          gap: 15px;
          margin: 40px 0;
        }

        .nav-dot {
          width: 40px;
          height: 2px;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: 0.3s;
        }

        .nav-dot.active { background: #89a8b2; width: 60px; }

        /* BUTTON */
        .expert-btn {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          padding: 0;
          color: #fff;
          margin-top: 20px;
        }

        .btn-circle {
          width: 50px;
          height: 50px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          position: relative;
          transition: 0.4s;
        }

        .btn-circle::after {
          content: '→';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 18px;
        }

        .btn-text { font-size: 12px; letter-spacing: 3px; font-weight: 700; }

        .expert-btn:hover .btn-circle {
          background: #89a8b2;
          border-color: #89a8b2;
          transform: rotate(-45deg);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-content { padding: 0 40px; }
        }

        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr; }
          .stat-card { padding: 40px 20px; border-right: none; border-bottom: 1px solid #f0f0f0; }
          .gallery-stage { height: 60vh; }
        }
      `}</style>
    </>
  );
}