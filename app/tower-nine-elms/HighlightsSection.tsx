"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const highlights = [
  "Exclusive Resident only facilities",
  "Indoor pool with fabulous views",
  "Residents' Lounge",
  "Gymnasium with the latest equipment",
  "24-hour concierge & hospitality à la carte",
  "Housekeeping, Valet & at-home dining",
  "Children's Play Area",
  "Private Cinema",
  "Steam Room, Sauna and Jacuzzi",
  "Excellent transport links"
];

export default function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the list items with a stagger
      gsap.from(".highlight_item", {
        opacity: 0,
        x: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".highlights_grid",
          start: "top 85%",
        }
      });

      // Parallax effect on the image
      gsap.to(".parallax_bg", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="highlights" className="damac_highlights_section" ref={sectionRef}>
        <div className="highlights_container">
          
          {/* Layout Wrapper */}
          <div className="highlights_flex_layout">
            
            {/* Left Side: Editorial Image */}
            <div className="highlights_image_side">
              <div className="image_reveal_wrapper">
                <Image 
                  src="/images/damac-nine-tower/DamacTowerNineGallery3.jpg" 
                  alt="Versace Tower Exterior" 
                  fill
                  className="parallax_bg"
                  style={{ objectFit: 'cover' }}
                />
                <div className="image_overlay_gradient"></div>
              </div>
            </div>

            {/* Right Side: Luxury List */}
            <div className="highlights_content_side">
              <div className="content_inner">
                <header className="highlights_header">
                  <h2 className="luxury_heading">
                    VERSACE <br /> 
                    <span className="gold_text">ULTIMATE</span> <br /> 
                    LUXURY
                  </h2>
                  <p className="luxury_subheading">
                    PRIVATE RESIDENT-ONLY AMENITIES WITH VERSACE DESIGN DETAIL EVERYWHERE
                  </p>
                  <div className="gold_divider"></div>
                </header>

                <div className="highlights_grid">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="highlight_item">
                      <span className="item_text">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="cta_holder">
                  <button className="gold_button" onClick={() => setEnquiryModalOpen(true)}>
                    CALLBACK FROM DAMAC EXPERT
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style jsx>{`
          .damac_highlights_section {
            background-color: #000;
            color: #fff;
            padding: 100px 0;
            overflow: hidden;
            position: relative;
          }

          .highlights_container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .highlights_flex_layout {
            display: flex;
            align-items: stretch;
            min-height: 80vh;
            gap: 80px;
          }

          /* Image Side */
          .highlights_image_side {
            flex: 1;
            position: relative;
            border: 1px solid rgba(197, 163, 104, 0.2);
          }

          .image_reveal_wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .image_overlay_gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(to right, rgba(0,0,0,0.4), transparent);
          }

          /* Content Side */
          .highlights_content_side {
            flex: 1.2;
            display: flex;
            align-items: center;
          }

          .content_inner { width: 100%; }

          .luxury_heading {
            font-family: 'Playfair Display', serif;
            font-size: clamp(40px, 4vw, 64px);
            line-height: 1;
            letter-spacing: 4px;
            font-weight: 300;
            margin-bottom: 30px;
          }

          .gold_text { color: #c5a368; }

          .luxury_subheading {
            color: #888;
            letter-spacing: 3px;
            font-size: 11px;
            text-transform: uppercase;
            line-height: 1.8;
            margin-bottom: 30px;
            max-width: 450px;
          }

          .gold_divider {
            width: 60px;
            height: 2px;
            background: #c5a368;
            margin-bottom: 50px;
          }

          /* Grid Layout for Amenities */
          .highlights_grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px 40px;
          }

          .highlight_item {
  display: flex;
  align-items: center; /* center vertically instead of flex-start */
  gap: 12px;
}

          .bullet_icon { margin-top: 6px; flex-shrink: 0; }

          .item_text {
  font-size: 14px;
  color: #ccc;
  line-height: 1.4;
  font-weight: 300;
  transition: 0.3s;
  white-space: nowrap; /* keeps text on one line */
}

          .highlight_item:hover .item_text { color: #fff; }

          .cta_holder { margin-top: 60px; }

          .gold_button {
            background: #c5a368;
            color: #000;
            border: none;
            padding: 20px 40px;
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 12px;
            text-transform: uppercase;
            cursor: pointer;
            transition: 0.4s;
          }

          .gold_button:hover {
            background: #fff;
            transform: translateY(-5px);
          }

          /* Mobile Responsiveness */
          @media (max-width: 1024px) {
            .highlights_flex_layout { flex-direction: column; gap: 40px; }
            .highlights_image_side { height: 400px; }
            .highlights_grid { grid-template-columns: 1fr; }
            .luxury_heading { font-size: 40px; }
          }

          @media (max-width: 768px) {
            .highlights_container { padding: 0 25px; }
            .damac_highlights_section { padding: 60px 0; }
            .highlights_image_side { height: 300px; }
            .gold_button { width: 100%; }
          }
        `}</style>
      </section>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Enquiry: DAMAC TOWER NINE ELMS LONDON"
        buttonText="Callback from Damac Expert"
      />
    </>
  );
}