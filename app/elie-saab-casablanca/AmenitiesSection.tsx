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
    name: "Club House",
    description: "Exclusively designed social spaces by SAOTA",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M20 80 L80 80 M30 80 V40 L50 20 L70 40 V80 M45 80 V65 H55 V80" />
      </svg>
    )
  },
  {
    name: "Cutting-edge fitness",
    description: "State-of-the-art equipment for wellness",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M30 50 A8 8 0 1 0 30 51 M70 50 A8 8 0 1 0 70 51 M38 50 H62 M20 50 H22 M78 50 H80" />
      </svg>
    )
  },
  {
  name: "Lush gardens",
  description: "Meticulously landscaped botanical escapes",
  icon: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
      {/* Central trunk */}
      <path d="M50 85 V45" strokeLinecap="round" />
      {/* Detailed leaf structure */}
      <path d="M50 45 L75 25 M50 55 L25 35 M50 65 L70 50 M50 75 L30 60" strokeLinecap="round" />
    </svg>
  )
},
  {
    name: "Yoga Area",
    description: "Dedicated zen spaces for mindful meditation",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M50 18 A7 7 0 1 0 50 19 M30 50 H70 M50 32 V70 L35 90 M50 70 L65 90" />
      </svg>
    )
  },
  {
    name: "Running tracks",
    description: "Scenic pathways designed for morning jogs",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M20 70 Q50 50 80 70 M20 50 Q50 30 80 50" />
      </svg>
    )
  },
  {
    name: "Inviting pools",
    description: "Temperature-controlled waters with views",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M10 40 Q30 30 50 40 T90 40 M10 55 Q30 45 50 55 T90 55" />
      </svg>
    )
  },
  {
    name: "Children's play",
    description: "Inspiring environments for young residents",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M40 30 A10 10 0 1 0 40 31 M40 50 V80 M20 80 H60 M75 70 A5 5 0 1 0 75 71" />
      </svg>
    )
  },
  {
    name: "Coworking Lounge",
    description: "Professional hubs designed for productivity",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M25 30 H75 V65 H25 Z M40 65 V75 M60 65 V75 M30 75 H70" />
      </svg>
    )
  },
  {
    name: "24/HR Concierge",
    description: "Round-the-clock bespoke assistance",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M30 40 H70 V80 H30 Z M50 20 V40 M50 57 A3 3 0 1 0 50 58" />
      </svg>
    )
  },
  {
    name: "Valet Service",
    description: "Seamless arrivals with white-glove service",
    icon: (
      <svg viewBox="0 0 100 100">
        <path d="M20 60 H80 L75 40 H25 Z M35 60 V70 M65 60 V70 M35 70 A5 5 0 1 0 35 71 M65 70 A5 5 0 1 0 65 71" />
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
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".lux_amenity_grid",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="lux_wrapper">
      <div className="lux_container">
        <div className="lux_header">
          <span>DISTINCTIVE LIVING</span>
          <h2>THE <i className="text-[#b89562]">Art</i> OF LIVING WELL</h2>
        </div>

        <div className="lux_amenity_grid">
          {amenities.map((item, idx) => (
            <div key={idx} className="lux_amenity_card">
              <div className="lux_icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .lux_wrapper {
          padding: 120px 0;
          background: #fdfcf9;
        }

        .lux_container {
          max-width: 1400px;
          margin: auto;
          padding: 0 40px;
        }

        .lux_header {
          text-align: center;
          margin-bottom: 80px;
        }

        .lux_header span {
          letter-spacing: 4px;
          font-size: 11px;
          color: #b89562;
        }

        .lux_header h2 {
          font-size: 42px;
          font-weight: 300;
          color: #111;
        }

        .lux_amenity_grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .lux_amenity_card {
          padding: 40px;
          background: #fff;
          border: 1px solid #eee;
          transition: 0.4s;
        }

        .lux_amenity_card:hover {
          border-color: #b89562;
        }

        .lux_icon {
          width: 40px;
          height: 40px;
          margin-bottom: 20px;
        }

        .lux_icon svg {
          width: 100%;
          height: 100%;
          stroke: #b89562; /* FIXED VISIBILITY */
          stroke-width: 1.4;
          fill: none;
        }

        h3 {
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 10px;
          color: #111;
        }

        p {
          font-size: 14px;
          color: #444;
        }

        @media (max-width: 900px) {
          .lux_amenity_grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .lux_amenity_grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}