"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OverviewSection() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const openEnquiryModal = () => {
    setIsEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="overview" className="lux-overview-section" ref={sectionRef}>
        <div className="lux-container">
          <div className="lux-overview-grid" ref={contentRef}>
            
            {/* Left Side: Large Stylized Heading */}
            <div className="lux-overview-col-left">
              <span className="lux-eyebrow">THE VISION</span>
              <h2 className="lux-main-heading">
                ELIE SAAB <br />
                <span className="italic-serif">Casablanca</span>
              </h2>
              <div className="lux-accent-line"></div>
            </div>

            {/* Right Side: Refined Text & Action */}
            <div className="lux-overview-col-right">
              <div className="lux-overview-text-wrapper">
                <p className="lux-lead-para">
                  ELIE SAAB and ART OF LIVING x EKTAR, the luxury brand of ARENA GROUP, a leading name in real estate in Morocco, announce the launch of ELIE SAAB Casablanca - Art of Living. This exclusive development introduces the first ELIE SAAB branded residences in Casablanca, bringing a new vision of luxury and lifestyle to the country.
                </p>
                
                <p className="lux-body-para">
                  The project stands out for its bold contemporary architecture by Saota and Casablanca-based firm Uniarchi and refined interiors signed by ELIE SAAB. Each residence reflects the brand’s philosophy: a perfect balance of sophistication, bespoke design, and timelessness. ELIE SAAB Casablanca - Art of Living offers an exceptional residential environment blending nature, elegance, and serenity.
                </p>
              </div>

              <div className="lux-button-wrapper">
                <button className="lux-outline-button" onClick={openEnquiryModal}>
                  EXPLORE THE VISION
                  <svg width="20" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5H24M24 5L20 1M24 5L20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Elie Saab Residences Casablanca"
        buttonText="Learn More About This Project"
      />

      <style jsx>{`
        .lux-overview-section {
          background: #fdfcf9; /* Matching the Gallery background */
          padding: 140px 0;
          position: relative;
          overflow: hidden;
        }

        .lux-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .lux-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 100px;
          align-items: start;
        }

        .lux-eyebrow {
          color: #b89562;
          font-size: 12px;
          letter-spacing: 5px;
          font-weight: 700;
          display: block;
          margin-bottom: 20px;
        }

        .lux-main-heading {
          font-family: serif;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.1;
          color: #1a1a1a;
          margin: 0;
          letter-spacing: -1px;
        }

        .italic-serif {
          font-style: italic;
          font-weight: 400;
          color: #b89562;
        }

        .lux-accent-line {
          width: 80px;
          height: 1px;
          background: #b89562;
          margin-top: 40px;
        }

        .lux-overview-text-wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .lux-lead-para {
          font-size: 20px;
          line-height: 1.6;
          color: #1a1a1a;
          font-weight: 500;
          font-family: serif;
        }

        .lux-body-para {
          font-size: 16px;
          line-height: 1.8;
          color: #666;
          max-width: 90%;
        }

        .lux-button-wrapper {
          margin-top: 50px;
        }

        .lux-outline-button {
          background: transparent;
          border: none;
          border-bottom: 1px solid #1a1a1a;
          padding: 10px 0;
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.4s ease;
          color: #1a1a1a;
        }

        .lux-outline-button:hover {
          color: #b89562;
          border-color: #b89562;
          gap: 30px;
        }

        .lux-outline-button svg {
          transition: transform 0.4s ease;
        }

        @media (max-width: 1024px) {
          .lux-overview-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .lux-container {
            padding: 0 30px;
          }
          .lux-accent-line {
             display: none;
          }
        }

        @media (max-width: 768px) {
          .lux-overview-section {
            padding: 80px 0;
          }
          .lux-main-heading {
            font-size: 38px;
          }
          .lux-lead-para {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}