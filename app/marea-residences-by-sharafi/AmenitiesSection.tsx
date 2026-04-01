"use client";

import { useEffect, useRef, ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Amenity {
  icon: ReactElement;
  name: string;
}

const amenities: Amenity[] = [
  {
    name: "Luxury infinity pool",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M2 14 Q4 12 6 14 T10 14 T14 14 T18 14 T22 14" />
        <path d="M2 18 Q4 16 6 18 T10 18 T14 18 T18 18 T22 18" />
        <path d="M7 8 V11 M11 7 V11 M15 8 V11" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Sun deck & tanning zones",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    )
  },
  {
    name: "Panoramic sauna",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 19h16M4 15h16M4 11h16M8 7l2-2M14 7l2-2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Panoramic steam room",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 22v-4M8 22v-2M16 22v-2" />
        <circle cx="12" cy="9" r="5" />
      </svg>
    )
  },
  {
    name: "Residents' lounge",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19H3" />
      </svg>
    )
  },
  {
    name: "Rooftop outdoor seating areas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 10v11M6 21h12M12 10L6 14M12 10l6 4" />
      </svg>
    )
  },
  {
    name: "Panoramic gym with pool views",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 7v10M18 7v10M3 12h18" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: "Spa & wellness studio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
      </svg>
    )
  },
  {
    name: "Emotional (sensory) shower",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 4c0 4.4 3.6 8 8 8s8-3.6 8-8" />
        <path d="M12 12v8M10 22h4" />
      </svg>
    )
  },
  {
    name: "Concierge & 24/7 security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

export default function PremiumAmenities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
  ".lux_amenity_card",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 1.4,
    stagger: 0.1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".lux_amenity_grid",
      start: "top 85%",
      toggleActions: "play none none none",
    }
  }
);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="amenities" ref={containerRef} className="lux_wrapper">
      <div className="lux_container">
        
        {/* EDITORIAL CURSIVE HEADER */}
        <div className="lux_header">
          <span className="eyebrow">AMENITIES</span>
          <h2 className="heading_cursive">
            The <span className="beachfront_accent">Beachfront</span> Frontier
          </h2>
        </div>

        {/* ARCHITECTURAL AMENITY GRID */}
        <div className="lux_amenity_grid">
          {amenities.map((item, idx) => (
            <div key={idx} className="lux_amenity_card">
              <div className="lux_icon">{item.icon}</div>
              <h3 className="amenity_name">{item.name}</h3>
              <div className="hover_accent"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Birthstone&family=Inter:wght@400;700&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');

        .lux_wrapper {
          padding: 160px 0;
          background: #ffffff;
        }

        .lux_container {
          max-width: 1600px;
          margin: auto;
          padding: 0 60px;
        }

        /* HEADER STYLES */
        .lux_header {
          text-align: center;
          margin-bottom: 120px;
        }

        .eyebrow {
          display: block;
          font-family: 'Inter', sans-serif;
          letter-spacing: 8px;
          font-size: 11px;
          color: #89a8b2;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .heading_cursive {
          font-family: 'Birthstone', cursive;
          font-size: clamp(70px, 9vw, 130px);
          color: #1a2b3c;
          font-weight: 400;
          line-height: 0.9;
          margin: 0;
        }

        .beachfront_accent {
          color: #4a7c92;
          display: inline-block;
          padding: 0 15px;
          position: relative;
        }

        /* GRID STYLES: 1PX LINE TECHNIQUE */
        .lux_amenity_grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          background: #f0f0f0; /* The "Line" color */
          gap: 1px;
          border: 1px solid #f0f0f0;
        }

        .lux_amenity_card {
          padding: 60px 40px;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 30px;
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          min-height: 250px;
          position: relative;
          overflow: hidden;
        }

        .lux_amenity_card:hover {
          background: #f8fafb;
        }

        .lux_icon {
          width: 35px;
          height: 35px;
          color: #1a2b3c;
          transition: transform 0.4s ease;
        }

        .lux_icon svg {
          width: 100%;
          height: 100%;
          stroke-width: 1.2;
        }

        .amenity_name {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.5;
          color: #1a2b3c;
          font-weight: 500;
          letter-spacing: -0.01em;
          max-width: 90%;
        }

        /* HOVER DECORATION */
        .hover_accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #4a7c92;
          transition: width 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .lux_amenity_card:hover .hover_accent {
          width: 100%;
        }

        .lux_amenity_card:hover .lux_icon {
          transform: translateY(-8px) scale(1.05);
          color: #4a7c92;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 1400px) {
          .lux_amenity_grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .lux_amenity_grid { grid-template-columns: repeat(2, 1fr); }
          .lux_container { padding: 0 30px; }
          .heading_cursive { font-size: 70px; }
        }

        @media (max-width: 500px) {
          .lux_amenity_grid { grid-template-columns: 1fr; }
          .lux_header { margin-bottom: 80px; }
        }
      `}</style>
    </section>
  );
}