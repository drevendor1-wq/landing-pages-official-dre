"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: "/images/tbilisi-water-front/3.png", alt: "Modern Waterfront Exterior" },
  { src: "/images/tbilisi-water-front/4.png", alt: "Masterplan Overview" },
  { src: "/images/tbilisi-water-front/2.jpg", alt: "Luxury Interior Concept" },
  { src: "/images/tbilisi-water-front/5.jpg", alt: "Luxury Interior Concept" },
  { src: "/images/tbilisi-water-front/1.png", alt: "Luxury Interior Concept" },
];

export default function SplitShiftGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".split_left",
        start: "top top",
        endTrigger: containerRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="split_section">
      <div className="split_left">
        <div className="content">
          <span className="eyebrow">Visual Journey</span>
          <h2> <br/><span className="blue_italic">GALLERY</span><br/></h2>
          <p>Explore the essence of Tbilisi Water Front inspired living through stunning visuals.</p>
        </div>
      </div>
      
      <div className="split_right">
        {galleryImages.map((img, i) => (
          <div key={i} className="img_frame">
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .split_section { display: flex; background: #fff; min-height: 200vh; }
        .split_left { width: 45%; height: 100vh; display: flex; align-items: center; padding: 100px; background: #f9f9f9; }
        .split_right { width: 55%; padding: 100px 50px; display: flex; flex-direction: column; gap: 100px; }
        .eyebrow { font-size: 12px; letter-spacing: 5px; color: #c5a35d; font-weight: 800; }
        h2 { font-size: clamp(40px, 5vw, 70px); line-height: 0.9; margin: 30px 0; font-weight: 900; }
        .blue_italic { color: #003366; font-family: serif; font-weight: 400; }
        .img_frame { position: relative; width: 100%; height: 80vh; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        .img_label { position: absolute; bottom: 20px; left: 20px; color: #fff; font-size: 10px; letter-spacing: 2px; z-index: 2; background: rgba(0,0,0,0.3); padding: 5px 15px; }
        .scroll_indicator { margin-top: 50px; font-size: 10px; letter-spacing: 3px; border-left: 2px solid #c5a35d; padding-left: 20px; }
        @media (max-width: 1024px) { .split_section { flex-direction: column; } .split_left, .split_right { width: 100%; height: auto; padding: 40px; } .split_left { position: relative !important; } }
      `}</style>
    </section>
  );
}