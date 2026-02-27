"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

const highlights = [
  "Official Mercedes-Benz branded residences",
  "Signature architectural design by Binghatti",
  "Premium residences with luxury finishes",
  "Smarthome integration",
  "Iconic skyline and city views",
  "High-demand urban location",
  "World-class lifestyle amenities",
  "Limited-edition luxury living",
  "Ideal for investors & end users"
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
              <Image src="/images/mercedes-benz/banner.webp" alt="Highlights Background" width={1000} height={1000} />
            </div>
            <div className="damac_highlights_content">
              <div className="damac_highlights_text_wrapper" ref={contentRef}>
                <p className="damac_highlights_subheading">WHY CHOOSE US</p>
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
                <button className="damac_highlights_button" onClick={openEnquiryModal}>
                  Callback from Binghatti Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Mercedes-Benz Places | Binghatti City"
        buttonText="Callback from Binghatti Expert"
      />
    </>
  );
}
