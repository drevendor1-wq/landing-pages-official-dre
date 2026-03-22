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
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#9E816C" strokeWidth="1.5">
        <path d="M10 70 L90 70 L80 50 L20 50 Z" />
        <path d="M40 50 L40 40 L65 40 L60 50" />
        <path d="M50 40 L50 25" />
      </svg>
    ),
    name: "Yacht club & Outdoor Pool",
    description: "A contemporary yacht club, outdoor pool and loungers along the Sava River"
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#9E816C" strokeWidth="1.5">
        <circle cx="50" cy="30" r="10" />
        <path d="M50 40 V90 M30 60 H70" />
        <path d="M30 60 Q30 85 50 85 Q70 85 70 60" />
      </svg>
    ),
    name: "City Marina",
    description: "The largest city marina and a new hub of life on the river"
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#9E816C" strokeWidth="1.5">
        <circle cx="50" cy="45" r="35" />
        <circle cx="50" cy="45" r="5" />
        <path d="M50 10 V80 M15 45 H85 M50 80 L40 95 H60 L50 80" />
        <path d="M25 20 L75 70 M75 20 L25 70" />
      </svg>
    ),
    name: "Belgrade Eye",
    description: "PA panoramic wheel – a new city landmark and tourist attraction"
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#9E816C" strokeWidth="1.5">
        <path d="M30 10 Q60 30 30 50 Q0 70 30 90" strokeDasharray="3 3" />
        <path d="M70 10 Q40 30 70 50 Q100 70 70 90" />
        <circle cx="70" cy="15" r="4" />
      </svg>
    ),
    name: "Green Corridor",
    description: "A linear park connecting the riverfront, parks and urban districts"
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#9E816C" strokeWidth="1.5">
        <path d="M30 40 Q30 20 50 20 Q70 20 70 40 Q70 60 50 80 Q30 60 30 40 Z" />
        <path d="M40 45 Q50 35 60 45" />
        <path d="M40 55 Q50 65 60 55" />
      </svg>
    ),
    name: "Opera & Cultural District",
    description: "An opera house in the restored Hall 1 and a new center of cultural events"
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#9E816C" strokeWidth="1.5">
        <rect x="40" y="10" width="20" height="70" />
        <path d="M40 25 H60 M40 40 H60 M40 55 H60 M40 70 H60" />
        <path d="M30 80 H70" />
      </svg>
    ),
    name: "New Architectural Icon",
    description: "A mixed-use tower rising approximately 120 meters"
  }
];

export default function PremiumAmenities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the title first
      gsap.from(".premium_title", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".premium_title",
          start: "top 90%",
        }
      });

      // Stagger reveal the items
      gsap.from(".premium_item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".premium_grid",
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="amenities"
      ref={containerRef}
      style={{ 
        padding: "120px 0", 
        backgroundColor: "#FCFBFA", 
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden" 
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        
        {/* Elegant Minimal Header */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2 className="premium_title" style={{ 
            fontSize: "clamp(2rem, 5vw, 2.75rem)", 
            fontWeight: "300", 
            color: "#1A1A1A",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            A New <span style={{ fontWeight: "600" }}>Riverfront</span> Experience
          </h2>
          <div style={{ 
            width: "50px", 
            height: "1px", 
            backgroundColor: "#9E816C", 
            margin: "2px auto" 
          }} />
        </div>

        {/* The Grid */}
        <div className="premium_grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(6, 1fr)", 
          gap: "20px",
          "@media (max-width: 1024px)": { gridTemplateColumns: "repeat(3, 1fr)" },
          "@media (max-width: 640px)": { gridTemplateColumns: "repeat(1, 1fr)" }
        } as any}>
          
          {amenities.map((item, idx) => (
            <div 
              key={idx} 
              className="premium_item"
              style={{ 
                textAlign: "center",
                padding: "20px",
                transition: "transform 0.4s ease"
              }}
            >
              {/* Icon Container with subtle scale hover */}
              <div style={{ 
                marginBottom: "30px", 
                display: "inline-block",
                transition: "transform 0.3s ease",
              }}>
                {item.icon}
              </div>

              <h3 style={{ 
                fontSize: "1rem", 
                fontWeight: "600", 
                color: "#1A1A1A", 
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "15px",
                minHeight: "3em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {item.name}
              </h3>

              <p style={{ 
                fontSize: "0.85rem", 
                color: "#6B6B6B", 
                lineHeight: "1.7",
                fontWeight: "400",
                margin: "0 auto",
                maxWidth: "180px"
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .premium_item:hover {
          transform: translateY(-10px);
        }
        @media (max-width: 1024px) {
          .premium_grid { grid-template-columns: repeat(3, 1fr) !important; row-gap: 60px !important; }
        }
        @media (max-width: 640px) {
          .premium_grid { grid-template-columns: repeat(1, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}