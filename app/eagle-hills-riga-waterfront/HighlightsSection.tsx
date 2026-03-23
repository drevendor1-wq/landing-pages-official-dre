"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

const highlights = [
  "Over 6,000 Residential Apartments",
  "Office space for 300+ businesses",
  "A 5 km-long public promenade along the Daugava River",
  "A Yacht Club, Two Marinas, and a City Beach Area",
  "Expansive green zones, public plazas, a skating rink, fountains, and pedestrian walkways",
  "The redevelopment of Riga’s historic power station into a culinary and shopping destination with more than 60 concept stores and restaurants.",
  "Luxury hotels offering more than 330 serviced apartments and 300 retail spaces",
];

export default function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const openEnquiryModal = () => {
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="highlights" className="damac_highlights_section" ref={sectionRef}>
        <div className="container">
          <div className="damac_highlights_main_wrapper">
            <div className="damac_highlights_background" ref={backgroundRef}>
              <Image src="/images/riga/rigaHighlights.jpg" alt="Highlights Background" width={1000} height={1000} />
            </div>
            <div className="damac_highlights_content">
              <div className="damac_highlights_text_wrapper" ref={contentRef}>
                <p className="damac_highlights_subheading">RIGA WATER FRONT</p>
                <h2 className="damac_highlights_heading">PROJECT HIGHLIGHTS</h2>
                <div className="damac_highlights_list">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="damac_highlight_item highlight-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
