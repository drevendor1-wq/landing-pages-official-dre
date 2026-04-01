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
      // Premium Parallax for desktop
      if (window.innerWidth > 1024) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Sophisticated reveal for the content card
      gsap.from(contentRef.current, {
        x: 40,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-developer" className="zenith-dev-section" ref={sectionRef}>
      <div className="zenith-dev-container">
        
        {/* Image Column - The Legacy Visual */}
        <div className="zenith-dev-image-column">
          <div className="zenith-dev-image-inner" ref={imageRef}>
            <Image 
              src="/images/marea-residences/developerMarea.jpg" 
              alt="Sharafi Development Legacy" 
              fill
              className="object-cover grayscale-hover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="zenith-image-overlay"></div>
          </div>
        </div>

        {/* Content Column - The Editorial Card */}
        <div className="zenith-dev-content-column">
          <div className="zenith-dev-card" ref={contentRef}>
            <span className="zenith-eyebrow">THE MASTERMIND</span>
            <h2 className="zenith-dev-heading">
              SHARAFI <span className="cursive-accent">Development</span>
            </h2>
            <div className="zenith-dev-divider"></div>
            
            <p className="zenith-dev-description">
              Sharafi Development is an Emirati family-owned company established in 1924. The group has worked across real estate, construction and hospitality for over a century, operating under a fully integrated model that manages each stage of development in-house. 
            </p>

            <div className="zenith-dev-list">
              {developerPoints.map((point, index) => (
                <div key={index} className="zenith-dev-item">
                  <div className="zenith-dev-marker"></div>
                  <span className="zenith-dev-point">{point}</span>
                </div>
              ))}
            </div>

            <div className="zenith-dev-footer-wrap">
               <p className="zenith-dev-footer">
                This structure allows Sharafi to control design, execution and long-term quality across all its projects, including Marea Residences on Dubai Islands.
               </p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Birthstone&family=Inter:wght@300;400;700;800&display=swap');

        .zenith-dev-section {
          background: #ffffff;
          padding: 160px 0;
          overflow: hidden;
        }

        .zenith-dev-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
          gap: 100px;
          position: relative;
        }

        /* Image Styling */
        .zenith-dev-image-column {
          position: relative;
          height: 750px;
          overflow: hidden;
          box-shadow: 20px 20px 0px #f4f7f8; /* Architectural background accent */
        }

        .zenith-dev-image-inner {
          position: relative;
          width: 100%;
          height: 115%;
          top: -7.5%;
        }

        .grayscale-hover {
          filter: contrast(1.05);
          transition: filter 0.8s ease;
        }

        .zenith-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(26,43,60,0.1), transparent);
        }

        /* Card Styling */
        .zenith-dev-card {
          background: white;
          padding: 80px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 40px 90px rgba(26, 43, 60, 0.04);
          z-index: 2;
          position: relative;
        }

        .zenith-eyebrow {
          display: block;
          color: #89a8b2;
          font-size: 11px;
          letter-spacing: 6px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .zenith-dev-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 800;
          color: #1a2b3c;
          margin: 0;
          letter-spacing: -1px;
          line-height: 1.1;
        }

        .cursive-accent {
          font-family: 'Birthstone', cursive;
          color: #4a7c92;
          font-size: 1.2em;
          font-weight: 400;
          margin-left: 5px;
        }

        .zenith-dev-divider {
          width: 60px;
          height: 2px;
          background: #4a7c92;
          margin: 35px 0;
        }

        .zenith-dev-description {
          font-size: 17px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 40px;
          font-weight: 400;
        }

        /* List Styling */
        .zenith-dev-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 50px;
        }

        .zenith-dev-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .zenith-dev-marker {
          width: 8px;
          height: 8px;
          border: 2px solid #89a8b2;
          border-radius: 50%;
        }

        .zenith-dev-point {
          font-size: 10px;
          font-weight: 700;
          color: #1a2b3c;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Footer Styling */
        .zenith-dev-footer-wrap {
          border-top: 1px solid #f0f0f0;
          padding-top: 30px;
        }

        .zenith-dev-footer {
          font-size: 14px;
          line-height: 1.6;
          color: #89a8b2;
          font-weight: 500;
        }

        /* --- MOBILE ADAPTATIONS --- */
        @media (max-width: 1024px) {
          .zenith-dev-section { padding: 100px 0; }

          .zenith-dev-container {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 0 25px;
          }

          .zenith-dev-image-column {
            height: 450px;
            width: 100%;
            box-shadow: none;
          }

          .zenith-dev-image-inner { height: 100%; top: 0; }

          .zenith-dev-card {
            padding: 50px 30px;
            margin-top: -60px;
            width: 95%;
            margin-left: auto;
            margin-right: auto;
          }

          .zenith-dev-list { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  );
}