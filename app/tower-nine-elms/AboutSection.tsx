"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Parallax + Scale Reveal
      gsap.fromTo(".luxury_img", 
        { scale: 1.4, y: 100 },
        { 
          scale: 1, 
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        }
      );

      // Kinetic Text Masking
      gsap.from(".mask_text", {
        y: 100,
        skewY: 7,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about_content_side",
          start: "top 85%",
        }
      });

      // Floating Accent Frame
      gsap.to(".gold_floating_frame", {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 2
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="overview" className="private_atelier_section" ref={sectionRef}>
      
      <div className="atelier_container" ref={containerRef}>
        <div className="atelier_layout">
          
          {/* LEFT: THE ARCHITECTURAL COMPOSITION */}
          <div className="visual_side">
            <div className="image_canvas">
              <div className="canvas_overflow">
                <Image 
                  src="/images/damac-nine-tower/DamacTowerNineGallery8.jpg" 
                  alt="Damac Tower London" 
                  width={1000} 
                  height={1200} 
                  className="luxury_img"
                  priority
                />
              </div>
              
              {/* Floating Gold Wireframe Accent */}
              <div className="gold_floating_frame"></div>
            
            </div>
          </div>

          {/* RIGHT: THE NARRATIVE */}
          <div className="about_content_side">
            <div className="content_inner">
              <div className="eyebrow_mask">
                <span className="mask_text gold_eyebrow">The Visionary</span>
              </div>
              
              <h2 className="luxury_heading">
                <div className="line_mask">
                  <span className="mask_text">Tower Nine Elms</span>
                </div>
                <div className="line_mask">
                  <span className="mask_text serif_italic">London</span>
                </div>
              </h2>

              <div className="description_block">
                <div className="para_mask">
                  <p className="mask_text lead_text">
                    DAMAC Towers Nine ELMS is a 50–storey premium residential complex on the banks 
                    of the Thames in the Nine Elms area, in south-west London. This is the first 
                    residential project in London that has been implemented with the participation 
                    of the iconic Versace Home brand.
                  </p>
                </div>
                
                <div className="para_mask">
                  <p className="mask_text body_text">
                    The development company of DAMAC Towers Nine ELMS is Nine Elms Property Limited, 
                    which is a subsidiary of DAMAC Properties, and is one of the largest developers 
                    in the UAE and the entire Middle East. DAMAC Towers Nine ELMS offers 360 
                    luxurious and ready-to-move-in residences with interiors by Versace Home for purchase.
                  </p>
                </div>
              </div>

              <div className="cta_signature_group">
                <button className="btn_primary_gold" onClick={() => setEnquiryModalOpen(true)}>
                  LEARN MORE
                </button>
                
              </div>
            </div>
          </div>

        </div>
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Enquiry: DAMAC TOWER NINE ELMS LONDON"
        buttonText="Learn More"
      />

      <style jsx>{`
        .private_atelier_section {
          padding: 200px 0;
          background-color: #fdfdfb;
          position: relative;
          overflow: hidden;
        }

        .section_background_decor {
          position: absolute;
          top: 10%;
          right: 5%;
          font-family: 'Playfair Display', serif;
          font-size: 25vw;
          line-height: 1;
          color: rgba(197, 163, 93, 0.04);
          font-weight: 900;
          pointer-events: none;
        }

        .atelier_container { max-width: 1500px; margin: 0 auto; padding: 0 80px; }
        
        .atelier_layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: center;
        }

        /* Visual Side */
        .visual_side { position: relative; }
        
        .image_canvas {
          position: relative;
          width: 90%;
          z-index: 2;
        }

        .canvas_overflow {
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          box-shadow: 0 60px 100px rgba(0,0,0,0.1);
        }

        .luxury_img { width: 100%; height: 100%; object-fit: cover; }

        .gold_floating_frame {
          position: absolute;
          top: -40px;
          left: -40px;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(197, 163, 93, 0.4);
          z-index: -1;
        }

        .vertical_stamp {
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          font-size: 9px;
          letter-spacing: 6px;
          color: #c5a35d;
          font-weight: 600;
          white-space: nowrap;
        }

        /* Content Side */
        .line_mask, .para_mask, .eyebrow_mask { overflow: hidden; display: block; }

        .gold_eyebrow {
          color: #c5a35d;
          text-transform: uppercase;
          letter-spacing: 7px;
          font-size: 11px;
          font-weight: 700;
          display: block;
          margin-bottom: 25px;
        }

        .luxury_heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(45px, 5.5vw, 75px);
          line-height: 0.95;
          color: #1a1a1a;
          margin-bottom: 50px;
          font-weight: 400;
        }

        .serif_italic { font-style: italic; color: #c5a35d; }

        .description_block { max-width: 520px; }
        .mask_text { display: block; }

        .lead_text { font-size: 20px; color: #1a1a1a; line-height: 1.6; margin-bottom: 30px; font-weight: 400; }
        .body_text { font-size: 16px; color: #666; line-height: 1.9; font-weight: 300; }

        /* CTA Section */
        .cta_signature_group {
          display: flex;
          align-items: center;
          gap: 50px;
          margin-top: 70px;
        }

        .btn_primary_gold {
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 22px 45px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          cursor: pointer;
          transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .btn_primary_gold:hover {
          background: #c5a35d;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(197, 163, 93, 0.2);
        }

        .btn_secondary_ghost {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          position: relative;
        }

        .btn_label {
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 10px;
          transition: 0.3s;
        }

        .btn_underline {
          width: 30px;
          height: 1px;
          background: #c5a35d;
          display: block;
          transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .btn_secondary_ghost:hover .btn_underline { width: 100%; }
        .btn_secondary_ghost:hover .btn_label { color: #c5a35d; }

        @media (max-width: 1200px) {
          .atelier_container { padding: 0 40px; }
          .atelier_layout { gap: 60px; }
        }

        @media (max-width: 900px) {
          .private_atelier_section { padding: 100px 0; }
          .atelier_layout { grid-template-columns: 1fr; }
          .section_background_decor { display: none; }
          .visual_side { order: 2; margin-top: 80px; }
          .about_content_side { order: 1; }
          .cta_signature_group { flex-direction: column; align-items: flex-start; gap: 30px; }
          .vertical_stamp { display: none; }
        }
      `}</style>
    </section>
  );
}