"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PropertySlide {
  title: string;
  description: string[];
  image: string;
  ctaText: string;
}

const propertySlides: PropertySlide[] = [
  {
    title: "MARINA & YACHT CLUB",
    description: [
      "At the very heart of Belgrade Waterfront Marina lies a grand city marina, envisioned as a new landmark of Belgrade and one of the city’s most important meeting points on the water.",
      "The yacht club features a large outdoor pool, riverside lounging areas with sunbeds, and spaces dedicated to exceptional gastronomy and social experiences."
    ],
    image: "/images/eagle-hills-belgrade/EagleHillsGallery3.webp",
    ctaText: "REGISTER NOW"
  },
  {
    title: "BELGRADE EYE, PROMENADES & PARKS",
    description: [
      "Belgrade Waterfront Marina brings the extension of the Sava Promenada all the way to Ada Ciganlija, creating a continuous riverfront walkway with a total length of 4.2 kilometers.",
      "The panoramic wheel Belgrade Eye is planned as a new city and tourist landmark—an emblem of a contemporary Belgrade."
    ],
    image: "/images/eagle-hills-belgrade/EagleHillsGallery8.jpeg",
    ctaText: "REGISTER NOW"
  },
  {
    title: "OPERA HOUSE AT BELGRADE WATERFRONT",
    description: [
      "With the transformation of Hall 1 into an opera house, Belgrade Waterfront Marina gains one of the most significant cultural centers in the region.",
      "A new cultural district will emerge around the opera, dedicated to music, performing arts, and major national and international productions."
    ],
    image: "/images/eagle-hills-belgrade/EagleHillsGallery7.webp",
    ctaText: "REGISTER NOW"
  },
  {
    title: "AN IMPRESSIVE 120-METER TOWER",
    description: [
      "In close proximity to the marina, an architecturally striking mixed-use tower rising approximately 120 meters will be developed, becoming a new visual landmark.",
      "The entire architectural concept is designed to create harmony between contemporary architecture, public spaces, and the natural surroundings."
    ],
    image: "/images/eagle-hills-belgrade/EagleHillsGallery6.webp",
    ctaText: "REGISTER NOW"
  }
];

export default function PropertiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  
 
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
 
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".prop_fade_in", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef.current); // safe to pass now

    return () => ctx.revert();
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % propertySlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? propertySlides.length - 1 : prev - 1));

  return (
    <>
      <section 
      id="projects"
        ref={sectionRef} 
        className="properties_main_section"
        style={{ 
          padding: "140px 0", 
          backgroundColor: "#fff", 
          overflow: "hidden"
        }}
      >
        <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 25px" }}>
          
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "90px" }}>
            <h2 className="prop_fade_in" style={{ 
              fontSize: "13px", 
              letterSpacing: "8px", 
              color: "#9E816C", 
              marginBottom: "15px",
              textTransform: "uppercase",
              fontWeight: "600"
            }}>
              The Collection
            </h2>
            <h1 className="prop_fade_in" style={{ 
              fontSize: "clamp(2.5rem, 6vw, 4rem)", 
              fontWeight: "300", 
              color: "#1a1a1a",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em"
            }}>
              PROPERTIES
            </h1>
          </div>

          <div style={{ 
            display: "flex", 
            flexDirection: currentIndex % 2 === 0 ? "row" : "row-reverse",
            alignItems: "stretch",
            gap: "80px",
            transition: "all 0.8s ease-in-out"
          }} className="flex_container">
            
            {/* Image Section */}
            <div style={{ flex: "1.3", position: "relative", minHeight: "650px", overflow: "hidden" }}>
              <Image
                src={propertySlides[currentIndex].image}
                alt={propertySlides[currentIndex].title}
                fill
                style={{ objectFit: "cover" }}
                className="property_hero_image"
                priority
              />
              
              {/* Luxury Navigation Overlay */}
              <div style={{ 
                position: "absolute", 
                bottom: "40px", 
                right: currentIndex % 2 === 0 ? "40px" : "auto", 
                left: currentIndex % 2 !== 0 ? "40px" : "auto",
                display: "flex", 
                gap: "1px",
                backgroundColor: "#fff",
                padding: "5px"
              }}>
                <button onClick={prevSlide} style={navStyle}>PREV</button>
                <div style={{ width: "1px", backgroundColor: "#eee" }} />
                <button onClick={nextSlide} style={navStyle}>NEXT</button>
              </div>
            </div>

            {/* Content Section */}
            <div className="prop_fade_in" style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ 
                fontSize: "2rem", 
                fontWeight: "300", 
                marginBottom: "35px", 
                lineHeight: "1.2",
                color: "#1a1a1a",
                fontFamily: "'Playfair Display', serif",
                textTransform: "uppercase"
              }}>
                {propertySlides[currentIndex].title}
              </h3>
              
              {propertySlides[currentIndex].description.map((p, i) => (
                <p key={i} style={{ 
                  fontSize: "1.05rem", 
                  lineHeight: "1.9", 
                  color: "#4a4a4a", 
                  marginBottom: "25px",
                  fontWeight: "300",
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {p}
                </p>
              ))}

              <button 
                onClick={() => setEnquiryModalOpen(true)}
                style={{
                  alignSelf: "flex-start",
                  marginTop: "20px",
                  padding: "20px 45px",
                  backgroundColor: "#9E816C",
                  color: "#fff",
                  border: "none",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#866d5b"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#9E816C"}
              >
                {propertySlides[currentIndex].ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Eagle Hills Belgrade Water Front"
        buttonText={propertySlides[currentIndex].ctaText}
      />

      <style jsx>{`
        @media (max-width: 1100px) {
          .flex_container { flex-direction: column !important; gap: 40px !important; }
          .flex_container > div { width: 100%; min-height: 450px !important; }
        }
      `}</style>
    </>
  );
}

const navStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  border: "none",
  padding: "15px 25px",
  cursor: "pointer",
  fontSize: "10px",
  letterSpacing: "2px",
  fontWeight: "700",
  transition: "background 0.3s ease"
};