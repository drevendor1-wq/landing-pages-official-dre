"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerHeader from "./BannerHeader";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AtelierBlue() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("REQUEST BROCHURE");
  
  const sectionRef = useRef(null);
  const imageBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ON LOAD ANIMATION (Premium Reveal)
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.8 } });

      tl.from(".atelier_eyebrow", { y: 20, opacity: 0, delay: 0.2 })
        .from(".atelier_h1", { y: 40, opacity: 0 }, "-=1.4")
        .from(".atelier_desc", { y: 30, opacity: 0 }, "-=1.4")
        .from(".atelier_btn_row", { y: 20, opacity: 0 }, "-=1.4")
        .from(imageBoxRef.current, { 
          scale: 1.1, 
          y: 60, 
          opacity: 0, 
          duration: 2 
        }, "-=1.6");

      // 2. ON SCROLL ANIMATION (Luxury Parallax)
      // As you scroll down, the image subtly scales and moves
      gsap.to(imageBoxRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.05,
        y: -30,
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="atelier_banner" ref={sectionRef}>
      <BannerHeader />
      <div className="atelier_container">
        <div className="atelier_content_box">
           <span className="atelier_eyebrow">EAGLE HILLS</span>
           <h1 className="atelier_h1">
             TBILISI <span className="atelier_gold">WATERFRONT</span>
           </h1>
           <p className="atelier_desc">
             The 1st Master-Plan Project in Georgia by Burj Khalifa developer
           </p>
           <div className="atelier_btn_row">
              <button className="atelier_solid" onClick={() => { setButtonText("DOWNLOAD BROCHURE"); setEnquiryModalOpen(true); }}>
                DOWNLOAD BROCHURE
              </button>
              <button className="atelier_outline" onClick={() => { setButtonText("GET FREE CONSULTATION"); setEnquiryModalOpen(true); }}>
                GET FREE CONSULTATION
              </button>
           </div>
        </div>
        
        <div className="atelier_visual_box" ref={imageBoxRef}>
           <Image 
             src="/images/tbilisi-water-front/10.png" 
             alt="Tbilisi Waterfront" 
             fill 
             style={{ objectFit: 'cover' }} 
             priority
           />
        </div>
      </div>

      <style jsx>{`
        .atelier_banner { background: #ffffff; min-height: 100vh; display: flex; flex-direction: column; overflow: hidden; }
        .atelier_container { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px; text-align: center; }
        .atelier_content_box { max-width: 900px; margin-bottom: 60px; z-index: 2; }
        .atelier_eyebrow { display: block; letter-spacing: 10px; font-size: 12px; color: #c5a35d; margin-bottom: 30px; font-weight: 800; will-change: transform, opacity; }
        .atelier_h1 { font-size: clamp(40px, 7vw, 100px); color: #111; font-weight: 900; line-height: 1; margin: 0 0 30px 0; letter-spacing: -3px; will-change: transform, opacity; }
        .atelier_gold { color: #c5a35d; -webkit-text-stroke: 1px #c5a35d; color: transparent; }
        .atelier_desc { font-size: 22px; color: #666; margin-bottom: 40px; font-weight: 300; will-change: transform, opacity; }
        .atelier_btn_row { display: flex; gap: 20px; justify-content: center; will-change: transform, opacity; }
        .atelier_solid { background: #c5a35d; color: #fff; border: none; padding: 22px 45px; font-weight: 700; letter-spacing: 2px; cursor: pointer; transition: 0.4s; }
        .atelier_outline { background: transparent; border: 1px solid #ddd; color: #111; padding: 22px 45px; font-weight: 700; letter-spacing: 2px; cursor: pointer; transition: 0.4s; }
        .atelier_solid:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(197, 163, 93, 0.3); }
        .atelier_outline:hover { background: #111; color: #fff; border-color: #111; }
        .atelier_visual_box { width: 100%; max-width: 1200px; height: 500px; position: relative; box-shadow: 0 50px 100px rgba(0,0,0,0.1); will-change: transform; }
        
        @media (max-width: 768px) {
          .atelier_btn_row { flex-direction: column; width: 100%; }
          .atelier_visual_box { height: 300px; }
        }
      `}</style>
      
      <FloorPlanEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => { setEnquiryModalOpen(false); document.body.style.overflow = "unset"; }} 
        floorPlanTitle="Eagle Hills Tbilisi Waterfront" 
        buttonText={buttonText} 
      />
    </section>
  );
}