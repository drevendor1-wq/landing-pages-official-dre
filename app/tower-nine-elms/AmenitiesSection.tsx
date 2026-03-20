"use client";

import { useEffect, useRef, ReactElement } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Amenity {
  icon: ReactElement;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    title: "INTERIOR DESIGN",
    description: "The hand and influence of Donatella Versace can be felt throughout the Tower, ultimate luxury.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l8-4v18M13 7l6 3v11M9 9h1M9 12h1M9 15h1" />
      </svg>
    ),
  },
  {
    title: "ROOF TERRACE",
    description: "8,010 Sq feet of outdoor communal space for the exclusive use of Damac Tower residents.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    title: "AMENITIES",
    description: "Resident only five star facilities including a pool, jacuzzi, gymnasium, sauna, steam room, children's area and cinema room.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    title: "GREAT LOCATION",
    description: "London and international travel is easily accessible with multiple transport links on your doorstep.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "MODERN TECHNOLOGY",
    description: "All apartments feature thermostatically controlled heating and comfort cooling in the apartments.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "NINE ELMS & BATTERSEA",
    description: "London's new place to be, with two miles of Thames river frontage, high end retail and excellent cafes, bars and restaurants.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".damac_amenity_item", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        });
      }, sectionRef.current);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="amenities" className="damac_amenities_section" ref={sectionRef} style={{ backgroundColor: '#000', padding: '80px 0' }}>
      <div className="container" ref={contentRef}>
        <div className="damac_amenities_grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '60px 40px',
          textAlign: 'center'
        }}>
          {amenities.map((amenity, index) => (
            <div key={index} className="damac_amenity_item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="damac_amenity_icon_wrapper" style={{ 
                border: '1px solid #c5a368', 
                borderRadius: '50%', 
                padding: '20px', 
                marginBottom: '20px',
                color: '#c5a368'
              }}>
                {amenity.icon}
              </div>
              <h3 className="damac_amenity_title" style={{ 
                color: '#fff', 
                fontSize: '1.1rem', 
                letterSpacing: '2px', 
                marginBottom: '15px',
                fontWeight: '400'
              }}>
                {amenity.title}
              </h3>
              <p className="damac_amenity_description" style={{ 
                color: '#aaa', 
                fontSize: '0.9rem', 
                lineHeight: '1.6',
                maxWidth: '300px'
              }}>
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}