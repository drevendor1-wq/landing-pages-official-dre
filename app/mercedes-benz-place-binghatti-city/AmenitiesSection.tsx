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
  name: string;
}

const amenities: Amenity[] = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h20M12 2v20" />
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16M4 12h16" />
      </svg>
    ),
    name: "Infinity swimming pool"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4h12v16H6z" />
        <path d="M10 8h4M10 12h4M10 16h4" />
      </svg>
    ),
    name: "Fully equipped gymnasium"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    name: "Luxury spa & wellness zones"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    name: "Landscaped leisure areas"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    name: "Concierge & valet services"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
    name: "Dedicated parking"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" />
      </svg>
    ),
    name: "High-speed elevators"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M9 4v16" />
      </svg>
    ),
    name: "Residents' lounge"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    name: "24/7 security & surveillance"
  }
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && bgImageRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        // Animate content on scroll
        gsap.from(contentRef.current!.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="amenities" className="damac_amenities_section" ref={sectionRef}>
      {/* Background Image with Blur */}
      <div className="damac_amenities_bg" ref={bgImageRef}>
        <Image
          src="/images/mercedes-benz/gallery-2.webp"
          alt="Amenities Background"
          fill
          className="damac_amenities_bg_image"
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Dark Overlay */}
        <div className="damac_amenities_overlay"></div>
      </div>

      {/* Content */}
      <div className="damac_amenities_content" ref={contentRef}>
        <div className="container">
   
          
          {/* Header */}
          <div className="damac_amenities_header">
            <h2 className="damac_amenities_title">AMENITIES</h2>
            <p className="damac_amenities_question">Residents enjoy a curated selection of luxury lifestyle amenities, designed for comfort, wellness, and exclusivity.</p>
          </div>

          {/* Amenities Grid */}
          <div className="damac_amenities_grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="damac_amenity_item">
                <div className="damac_amenity_icon_wrapper">
                  {amenity.icon}
                </div>
                <span className="damac_amenity_name">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
