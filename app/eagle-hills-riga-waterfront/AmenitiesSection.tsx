"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Amenity {
  name: string;
  icon: React.ReactNode;
}

const amenities: Amenity[] = [
  { name: "City Center Convenience", icon: <path d="M50 10c-15 0-27 12-27 27 0 20 27 53 27 53s27-33 27-53c0-15-12-27-27-27zm0 37a10 10 0 110-20 10 10 0 010 20z" /> },
  { name: "Luxury Residentials", icon: <path d="M20 50h15m30 0h15M35 30l15-15 15 15M35 70l15 15 15-15M50 15v70" /> },
  { name: "History & Architecture", icon: <path d="M20 80V40h15v10h10V30h10v20h10V40h15v40H20z M35 80V65h30v15" /> },
  { name: "Waterfront Promenade", icon: <path d="M20 40c15-10 45 10 60 0M20 60c15-10 45 10 60 0M20 80c15-10 45 10 60 0" /> },
  { name: "World-Class Marina", icon: <path d="M30 40l20-20 20 20v30H30z M20 70h60M40 85h20" /> },
  { name: "Restaurants & Bars", icon: <path d="M30 40c0 20 10 35 20 35s20-15 20-35H30z M45 15l-5 25M55 15l5 25" /> },
  { name: "Luxury Shopping", icon: <path d="M30 35V25c0-11 9-20 20-20s20 9 20 20v10M25 35h50l5 50H20l5-50z" /> },
  { name: "Luxury Hotels", icon: <path d="M25 85V15h40l10 10v60H25z M40 35h5M40 50h5M40 65h5" /> },
  { name: "Yacht Club", icon: <path d="M20 75l10-25h40l10 25H20z M50 50V25M50 35h15" /> },
  { name: "Art & Entertainment", icon: <path d="M30 65l10-10 15 15 10-10 5 5" /> },
  { name: "Museum", icon: <path d="M50 15L20 35v10h60V35L50 15z M30 45v30M43 45v30M57 45v30M70 45v30M20 75h60" /> },
  { name: "Urban Beach", icon: <path d="M40 75a30 30 0 0060 0M50 75L70 35M60 45h20" /> },
  { name: "Smart City & Tech", icon: <path d="M50 20v10M80 50h-10M20 50h10M50 80v-10M30 30l7 7M70 30l-7 7M30 70l7-7M70 70l-7-7" /> },
  { name: "Security & Sustainability", icon: <path d="M50 85c-20-10-20-40-20-40s10-10 20-10 20 10 20 10 0 30-20 40z M50 35s5 10-5 20" /> },
  { name: "Exclusive Amenities", icon: <path d="M30 40h40" /> },
  { name: "Premium Services", icon: <path d="M20 80h60M30 80V40h40v40" /> },
];

export default function LuxuryAmenityGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".amenity-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.1,
          grid: "auto",
        },
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".amenity-grid",
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{ 
        padding: "160px 0", 
        backgroundColor: "#0F0F0F", 
        fontFamily: "'Cormorant Garamond', serif" 
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 60px" }}>
        
        <header style={{ textAlign: "center", marginBottom: "120px" }}>
          <span style={{ 
            color: "#C5A059", 
            letterSpacing: "0.3em", 
            textTransform: "uppercase", 
            fontSize: "0.8rem",
            display: "block",
            marginBottom: "20px"
          }}>
            Curated Excellence
          </span>
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 6vw, 4rem)", 
            color: "#FFFFFF", 
            fontWeight: "300",
            margin: "0"
          }}>
            Lifestyle <span style={{ fontStyle: "italic", color: "#C5A059" }}>Amenities</span>
          </h2>
        </header>

        <div className="amenity-grid">
          {amenities.map((item, idx) => (
            <div key={idx} className="amenity-card">
              <div className="icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                  {item.icon}
                </svg>
              </div>
              <h3 className="amenity-name">{item.name}</h3>
              <div className="hover-line" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .amenity-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(197, 160, 89, 0.2);
          border-left: 1px solid rgba(197, 160, 89, 0.2);
        }

        .amenity-card {
          position: relative;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-right: 1px solid rgba(197, 160, 89, 0.2);
          border-bottom: 1px solid rgba(197, 160, 89, 0.2);
          transition: background-color 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          overflow: hidden;
        }

        .icon-wrapper {
          color: #C5A059;
          margin-bottom: 30px;
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .amenity-name {
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0;
          height: 3rem;
          display: flex;
          align-items: center;
        }

        .hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #C5A059;
          transform: scaleX(0);
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .amenity-card:hover {
          background-color: rgba(197, 160, 89, 0.05);
        }

        .amenity-card:hover .icon-wrapper {
          transform: translateY(-10px) scale(1.1);
        }

        .amenity-card:hover .hover-line {
          transform: scaleX(1);
        }

        @media (max-width: 1200px) {
          .amenity-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .amenity-grid { grid-template-columns: repeat(2, 1fr); }
          .amenity-card { padding: 40px 20px; }
        }
        @media (max-width: 480px) {
          .amenity-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}