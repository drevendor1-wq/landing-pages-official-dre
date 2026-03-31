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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect - only active if screen is wider than 1024px
      if (window.innerWidth > 1024) {
        gsap.to(imageRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Smooth reveal for the card
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-developer" className="lux-dev-section" ref={sectionRef}>
      <div className="lux-dev-container">
        
        {/* Image Section */}
        <div className="lux-dev-image-column">
          <div className="lux-dev-image-inner" ref={imageRef}>
            <Image 
              src="/images/moroccoProject/evolutionsDeveloper.jpg" 
              alt="Evolutions Developer" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="lux-dev-mobile-overlay"></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="lux-dev-content-column">
          <div className="lux-dev-card" ref={contentRef}>
            <span className="lux-eyebrow">THE MASTERMIND</span>
            <h2 className="lux-dev-heading">EVOLUTIONS</h2>
            <div className="lux-dev-line"></div>
            
            <p className="lux-dev-description">
              Evolutions is the first-of-its-kind real estate intelligence hub in Dubai that combines a concept store of exclusive developments, a 360-degree consultancy, and a global network of industry experts.
            </p>

            <div className="lux-dev-list">
              {developerPoints.map((point, index) => (
                <div key={index} className="lux-dev-item">
                  <span className="lux-dev-dot"></span>
                  <span className="lux-dev-point">{point}</span>
                </div>
              ))}
            </div>

            <p className="lux-dev-footer">
              Evolutions has solidified its position in the industry with innovative approaches and bespoke solutions.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .lux-dev-section {
          background: #fdfcf9;
          padding: 120px 0;
          overflow: hidden;
        }

        .lux-dev-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 60px;
          position: relative;
        }

        /* Image Logic */
        .lux-dev-image-column {
          position: relative;
          height: 650px;
          border-radius: 4px;
          overflow: hidden;
        }

        .lux-dev-image-inner {
          position: relative;
          width: 100%;
          height: 110%; /* Extra height for parallax */
          top: -5%;
        }

        /* Card Logic */
        .lux-dev-card {
          background: white;
          padding: 60px;
          box-shadow: 0 30px 70px rgba(0,0,0,0.05);
          border: 1px solid #f0efeb;
          z-index: 2;
        }

        .lux-eyebrow {
          display: block;
          color: #b89562;
          font-size: 11px;
          letter-spacing: 5px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .lux-dev-heading {
          font-family: serif;
          font-size: clamp(32px, 4vw, 48px);
          color: #1a1a1a;
          margin: 0;
        }

        .lux-dev-line {
          width: 50px;
          height: 1px;
          background: #b89562;
          margin: 25px 0;
        }

        .lux-dev-description {
          font-size: 16px;
          line-height: 1.7;
          color: #666;
          margin-bottom: 35px;
        }

        .lux-dev-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 35px;
        }

        .lux-dev-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lux-dev-dot {
          width: 5px;
          height: 5px;
          background: #b89562;
          border-radius: 50%;
        }

        .lux-dev-point {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .lux-dev-footer {
          font-size: 13px;
          font-style: italic;
          color: #999;
          border-top: 1px solid #f5f5f5;
          padding-top: 25px;
        }

        /* --- MOBILE ADAPTATIONS --- */
        @media (max-width: 1024px) {
          .lux-dev-section {
            padding: 80px 0;
          }

          .lux-dev-container {
            grid-template-columns: 1fr; /* Switch to single column */
            gap: 0;
            padding: 0 20px;
          }

          .lux-dev-image-column {
            height: 400px;
            width: 100%;
            border-radius: 4px 4px 0 0;
          }

          .lux-dev-image-inner {
            height: 100%;
            top: 0;
          }

          .lux-dev-card {
            padding: 40px 25px;
            margin-top: -40px; /* Overlap the image slightly for style */
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }

          .lux-dev-mobile-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent 50%, rgba(253,252,249,0.8));
          }
        }
      `}</style>
    </section>
  );
}