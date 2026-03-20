"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BannerHeader from "./BannerHeader";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

const heroImages = [
  "/images/damac-nine-tower/DamacTowerNineMainCover.jpg",
  "/images/damac-nine-tower/DamacTowerNineGallery1.jpg" // Added second image for the switch
];

export default function RoyalNoirBanner() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  // Image Switching Logic (Every 4 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="noir_hero">
      <BannerHeader />
      
      <div className="noir_inner">
        {/* Cinematic Image Frame */}
        <div className="noir_image_box">
          {heroImages.map((img, index) => (
            <div 
              key={index} 
              className={`slide_container ${currentImg === index ? "active" : ""}`}
            >
              <Image 
                src={img} 
                alt={`Damac Luxury View ${index + 1}`} 
                fill 
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                className="ken_burns_img"
              />
            </div>
          ))}

          {/* Persistent Branding Overlay */}
          <div className="noir_overlay_text">
            <h1 className="noir_h1">TOWER NINE ELMS</h1>
            <p className="noir_subheading">Versace Branded Apartments in Nine Elms London.</p>
          </div>

          {/* Subtle Slide Progress Indicator */}
          <div className="slide_indicator_wrap">
             <div className={`dot ${currentImg === 0 ? 'dot_active' : ''}`}></div>
             <div className={`dot ${currentImg === 1 ? 'dot_active' : ''}`}></div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="noir_actions">
          <button 
            className="gold_pill" 
            onClick={() => setEnquiryModalOpen(true)}
          >
            GET FREE CONSULTATION
          </button>
          <button 
            className="outline_pill" 
            onClick={() => setEnquiryModalOpen(true)}
          >
            Get Brochure
          </button>
        </div>
      </div>

      <style jsx>{`
        .noir_hero { 
          background: #000; 
          min-height: 100vh; 
          padding: 60px 40px 40px 40px; 
          display: flex; 
          flex-direction: column; 
          overflow: hidden;
        }

        .noir_inner { 
          flex: 1; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          align-items: center; 
        }

        /* Image Frame */
        .noir_image_box { 
          width: 100%; 
          max-width: 1300px; 
          height: 65vh; 
          position: relative; 
          overflow: hidden; 
          border-radius: 2px; 
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8);
          border: 1px solid rgba(197, 163, 104, 0.1);
        }

        /* Slider Logic */
        .slide_container {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .slide_container.active {
          opacity: 1;
          z-index: 2;
        }

        /* Ken Burns Effect (Slow Zoom) */
        .ken_burns_img {
          transform: scale(1.1);
          transition: transform 6s linear;
        }

        .active .ken_burns_img {
          transform: scale(1);
        }

        /* Overlay Text Styling */
        .noir_overlay_text { 
          position: absolute; 
          bottom: 0; 
          left: 0; 
          padding: 60px; 
          background: linear-gradient(transparent, rgba(0,0,0,0.9)); 
          width: 100%; 
          z-index: 10;
        }

        .noir_h1 { 
          font-family: 'Playfair Display', serif; 
          font-size: clamp(40px, 5vw, 75px); 
          color: #fff; 
          letter-spacing: 6px; 
          margin: 0; 
          font-weight: 300;
          text-transform: uppercase;
        }

        .noir_subheading { 
          color: #c5a368; 
          letter-spacing: 3px; 
          text-transform: uppercase; 
          font-size: 11px; 
          margin-top: 15px; 
          font-weight: 600;
        }

        /* Slide Dots */
        .slide_indicator_wrap {
          position: absolute;
          top: 40px;
          right: 40px;
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .dot {
          width: 30px;
          height: 2px;
          background: rgba(255,255,255,0.2);
          transition: 0.6s;
        }

        .dot_active {
          background: #c5a368;
          width: 50px;
        }

        /* Action Buttons */
        .noir_actions { 
          margin-top: 60px; 
          display: flex; 
          gap: 25px; 
          z-index: 10;
        }

        .gold_pill { 
          background: #c5a368; 
          border: none; 
          padding: 22px 50px; 
          color: #000;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 800; 
          cursor: pointer; 
          transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1); 
        }

        .outline_pill { 
          background: transparent; 
          border: 1px solid rgba(197, 163, 104, 0.5); 
          color: #c5a368; 
          padding: 22px 50px; 
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 800; 
          cursor: pointer; 
          transition: 0.4s;
        }

        .gold_pill:hover { background: #fff; transform: translateY(-5px); }
        .outline_pill:hover { border-color: #fff; color: #fff; }

        @media (max-width: 1024px) {
           .noir_hero { padding: 40px 20px; }
           .noir_image_box { height: 50vh; }
           .noir_h1 { font-size: 38px; }
        }

        @media (max-width: 768px) { 
          .noir_overlay_text { padding: 30px; }
          .noir_actions { flex-direction: column; width: 100%; align-items: stretch; margin-top: 40px; } 
          .gold_pill, .outline_pill { text-align: center; }
        }
      `}</style>

      <FloorPlanEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
        floorPlanTitle="Enquiry: DAMAC TOWER NINE ELMS LONDON" 
        buttonText="GET FREE CONSULTATION" 
      />
    </section>
  );
}