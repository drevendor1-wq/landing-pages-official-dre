"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const developerPoints = [
  "Timely project delivery",
  "Iconic designs",
  "Strategic locations",
  "Strong brand collaborations"
];

export default function AboutDeveloperSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the background image
      gsap.fromTo(imageRef.current, 
        { scale: 1.2, y: 50 },
        { 
          scale: 1, 
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Staggered text entrance
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-developer" className="dev_section" ref={sectionRef}>
      <div className="dev_container">
        
        <div className="dev_layout">
          {/* IMAGE SIDE */}
          <div className="dev_image_side" ref={imageRef}>
            <div className="image_overlay"></div>
            <img 
              src="https://www.cbnme.com/wp-content/uploads/2018/07/DAMAC-Heights-Welcomes-Tenants-to-Waterfront-Living.jpg" 
              alt="DAMAC Heights"
              className="main_img"
            />
            {/* <div className="floating_stat reveal-item">
              <span className="stat_num">46K+</span>
              <span className="stat_label">Homes Delivered</span>
            </div> */}
          </div>

          {/* CONTENT SIDE */}
          <div className="dev_content_side" ref={textRef}>
            <div className="content_glass_box">
              <span className="gold_eyebrow reveal-item">About Developer</span>
              <h2 className="dev_title reveal-item">Why DAMAC?</h2>
              
              <div className="dev_divider reveal-item"></div>

              <p className="dev_desc reveal-item">
                Renowned for iconic developments and exceptional craftsmanship, 
                DAMAC Properties blends elegance, innovation, and world-class amenities. 
                With a presence in the UAE, Saudi Arabia, Qatar, and beyond, 
                its portfolio sets a global standard for excellence.
              </p>

              <div className="dev_list">
                {developerPoints.map((point, index) => (
                  <div key={index} className="dev_list_item reveal-item">
                    <div className="dot_icon">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c5a368" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <p className="dev_footer reveal-item">
                DAMAC brings new living concepts to life by partnering with 
                prestigious fashion and lifestyle brands including Versace, Fendi, and de GRISOGONO.
              </p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .dev_section {
          background: #000;
          padding: 150px 0;
          overflow: hidden;
        }

        .dev_container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .dev_layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 0;
          align-items: center;
          position: relative;
        }

        /* Image Side */
        .dev_image_side {
          position: relative;
          height: 700px;
          overflow: hidden;
          z-index: 1;
        }

        .main_img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent, #000);
          z-index: 2;
        }

        .floating_stat {
          position: absolute;
          bottom: 40px;
          left: 40px;
          background: rgba(197, 163, 104, 0.9);
          padding: 25px 35px;
          color: #000;
          z-index: 3;
          display: flex;
          flex-direction: column;
        }

        .stat_num { font-size: 32px; font-weight: 800; }
        .stat_label { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }

        /* Content Side */
        .dev_content_side {
          position: relative;
          z-index: 4;
          margin-left: -100px; /* Overlap effect */
        }

        .content_glass_box {
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(20px);
          padding: 70px;
          border: 1px solid rgba(197, 163, 104, 0.2);
        }

        .gold_eyebrow {
          color: #c5a368;
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 12px;
          font-weight: 700;
          display: block;
          margin-bottom: 20px;
        }

        .dev_title {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          color: #fff;
          margin-bottom: 30px;
        }

        .dev_divider {
          width: 60px;
          height: 2px;
          background: #c5a368;
          margin-bottom: 35px;
        }

        .dev_desc {
          color: #ccc;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .dev_list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 40px;
        }

        .dev_list_item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          font-size: 14px;
        }

        .dot_icon {
          width: 24px;
          height: 24px;
          border: 1px solid rgba(197, 163, 104, 0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dev_footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          color: #888;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .dev_layout { grid-template-columns: 1fr; }
          .dev_image_side { height: 450px; }
          .dev_content_side { margin-left: 0; margin-top: -50px; padding: 0 20px; }
          .content_glass_box { padding: 40px; }
          .dev_title { font-size: 40px; }
          .dev_list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}