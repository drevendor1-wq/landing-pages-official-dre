"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

export default function EditorialOverview() {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    gsap.from(".mask_img", { scrollTrigger: ".mask_img", clipPath: "inset(0 100% 0 0)", duration: 1.5, ease: "power4.inOut" });
    gsap.from(".slide_text", { scrollTrigger: ".slide_text", x: -50, opacity: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section id="overview" className="edit_section" ref={container}>
      <div className="edit_container">
        <div className="edit_visual mask_img">
          <Image src="/images/tbilisi-water-front/6.jpg" alt="Tbilisi" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="edit_card slide_text">
          <span className="edit_eyebrow">THE MASTERPLAN</span>
          <h2 className="edit_title">Tbilisi Waterfront<br /></h2>
          <div className="edit_sep"></div>
          <p className="edit_p">
            Our vision is to contribute meaningfully to the country’s growth — creating jobs, attracting investment, and showcasing Georgia’s immense potential to the world. We are deeply honored to partner with the Government of Georgia to drive sustainable progress, innovation, and prosperity for generations to come.
          </p>
          <button className="edit_cta" onClick={() => setIsOpen(true)}>LEARN MORE</button>
        </div>
      </div>
      <style jsx>{`
        .edit_section { padding: 120px 0; background: #f8f8f8; position: relative; }
        .edit_container { max-width: 1200px; margin: 0 auto; position: relative; height: 700px; }
        .edit_visual { width: 70%; height: 100%; position: absolute; right: 0; top: 0; }
        .edit_card { width: 50%; background: #fff; padding: 80px; position: absolute; left: 0; top: 50%; transform: translateY(-50%); box-shadow: 40px 40px 80px rgba(0,0,0,0.05); z-index: 2; }
        .edit_eyebrow { font-size: 10px; letter-spacing: 5px; color: #c5a35d; font-weight: 700; margin-bottom: 20px; display: block; }
        .edit_title { font-size: 40px; font-weight: 900; margin-bottom: 30px; letter-spacing: -1px; }
        .blue_italic { color: #003366; font-family: serif; font-style: italic; font-weight: 400; }
        .edit_sep { width: 40px; height: 2px; background: #c5a35d; margin-bottom: 30px; }
        .edit_p { font-size: 17px; line-height: 1.9; color: #444; margin-bottom: 40px; }
        .edit_cta { background: #111; color: #fff; border: none; padding: 20px 40px; font-size: 11px; letter-spacing: 2px; font-weight: 700; cursor: pointer; }
        @media (max-width: 1024px) { .edit_container { height: auto; display: flex; flex-direction: column; } .edit_visual, .edit_card { position: relative; width: 100%; transform: none; top: 0; padding: 40px 20px; } .edit_visual { height: 300px; } }
      `}</style>
      <FloorPlanEnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} floorPlanTitle="Eagle Hills Tbilisi Waterfront" buttonText="Learn More About the Project" />
    </section>
  );
}