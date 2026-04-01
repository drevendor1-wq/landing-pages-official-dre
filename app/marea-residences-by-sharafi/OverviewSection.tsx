"use client";

import { useState, useRef } from "react";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

export default function OverviewSection() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      <section id="overview" className="zenith_overview_wrap" ref={sectionRef}>
        <div className="zenith_container">
          <div className="zenith_overview_grid">
            
            {/* Left Side: Editorial Heading */}
            <div className="zenith_header_col">
              <span className="zenith_eyebrow">THE VISION</span>
              <h2 className="zenith_main_heading">
                MAREA <br />
                <span className="cursive_accent">Residences</span>
              </h2>
              <div className="zenith_decor_line"></div>
            </div>

            {/* Right Side: Description & Action */}
            <div className="zenith_content_col">
              <div className="zenith_text_block">
                <p className="zenith_lead_para">
                  Marea Residences is a G+2+12 residential building located in the 
                  beachfront district of Dubai Islands. The project includes 68 apartments 
                  and penthouses, each designed with practical layouts, premium 
                  materials, and private outdoor jacuccis.
                </p>
                
                <p className="zenith_body_para">
                  Residents benefit from an infinity pool, wellness amenities, and access 
                  to facilities at the adjacent Sharafi hotel. Its location provides 
                  fast access to Dubai Islands Beach, the new mall, and central Dubai.
                </p>
              </div>

              <div className="zenith_action_box">
                <button className="zenith_minimal_btn" onClick={openEnquiryModal}>
                  LEARN MORE
                  <svg width="25" height="10" viewBox="0 0 25 10" fill="none">
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
        floorPlanTitle="Marea Residences"
        buttonText="REQUEST MORE INFORMATION"
      />

      <style jsx>{`
        /* Import the exact same fonts used in your banner */
        @import url('https://fonts.googleapis.com/css2?family=Birthstone&family=Inter:wght@300;400;600;800&display=swap');

        .zenith_overview_wrap {
          background: #ffffff; 
          padding: 160px 0; /* Premium spacing matching other Zenith sections */
          position: relative;
          overflow: hidden;
        }

        .zenith_container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .zenith_overview_grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 120px;
          align-items: start;
        }

        .zenith_eyebrow {
          color: #89a8b2; /* Signature Slate blue accent */
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 8px;
          font-weight: 700;
          display: block;
          margin-bottom: 25px;
        }

        .zenith_main_heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(55px, 6vw, 95px);
          line-height: 0.85;
          color: #1a2b3c; /* Deep Navy */
          margin: 0;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .cursive_accent {
          font-family: 'Birthstone', cursive; /* The exact same font as the banner */
          color: #4a7c92; /* Signature Ocean blue accent */
          text-transform: none; /* Sentence case is essential for cursive flow */
          font-weight: 400;
          font-size: 1.2em;
          display: block;
          margin-top: -10px;
          padding-left: 5px;
          letter-spacing: 0;
        }

        .zenith_decor_line {
          width: 60px;
          height: 1px;
          background: #1a2b3c;
          margin-top: 50px;
        }

        .zenith_text_block {
          display: flex;
          flex-direction: column;
          gap: 35px;
          margin-top: 25px;
        }

        .zenith_lead_para {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          line-height: 1.6;
          color: #1a2b3c;
          font-weight: 300; /* Light weight for sophisticated editorial feel */
          max-width: 550px;
        }

        .zenith_body_para {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #5a6d7a;
          max-width: 90%;
          font-weight: 400;
        }

        .zenith_action_box {
          margin-top: 70px;
        }

        .zenith_minimal_btn {
          background: transparent;
          border: none;
          border-bottom: 1px solid #1a2b3c;
          padding: 10px 0;
          display: inline-flex;
          align-items: center;
          gap: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          color: #1a2b3c;
        }

        .zenith_minimal_btn:hover {
          color: #4a7c92;
          border-color: #4a7c92;
          gap: 35px;
        }

        .zenith_minimal_btn svg {
          transition: transform 0.4s ease;
        }

        /* --- MOBILE ADAPTATIONS --- */
        @media (max-width: 1024px) {
          .zenith_overview_grid {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
          .zenith_container { padding: 0 30px; }
          .zenith_decor_line { display: none; }
          .zenith_main_heading { font-size: 60px; }
          .zenith_eyebrow { justify-content: center; }
          .zenith_lead_para { margin: 0 auto; }
          .zenith_action_box { margin-top: 40px; }
        }

        @media (max-width: 768px) {
          .zenith_overview_wrap { padding: 100px 0; }
          .zenith_main_heading { font-size: 48px; letter-spacing: -1px; }
          .cursive_accent { font-size: 56px; margin-top: -5px; }
          .zenith_lead_para { font-size: 19px; }
        }
      `}</style>
    </>
  );
}