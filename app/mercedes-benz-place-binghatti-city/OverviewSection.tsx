"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OverviewSection() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Removed animations as requested

  const openEnquiryModal = () => {
    setIsEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="overview" className="damac_overview_section" ref={sectionRef}>
        <div className="container">
          <div className="damac_overview_content" ref={contentRef}>
            <div className="damac_overview_header">
              <p className="damac_overview_subheading">PROJECT OVERVIEW</p>
              <h2 className="damac_overview_heading">ABOUT THE PROJECT</h2>
            </div>
            <div className="damac_overview_text">
              <p>
                Mercedes-Benz Places at Binghatti City is a landmark branded residential development that blends automotive-inspired design, architectural excellence, and modern urban luxury
              </p>
              <p>
               Crafted for those who appreciate refined living, this exclusive project offers meticulously designed residences with premium finishes, intelligent layouts, and breathtaking city views. Every detail reflects the Mercedes-Benz legacy of precision, comfort, and innovation —creating a lifestyle that goes beyond real estate.
              </p>
              <p>
              Whether for living or investment, this project stands as a symbol of prestige and long-term value in Dubai’s evolving skyline.
              </p>
            </div>
            <button className="damac_overview_button" onClick={openEnquiryModal}>
              Callback from Binghatti Expert
            </button>
          </div>
        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Mercedes-Benz Places | Binghatti City"
        buttonText="Callback from Binghatti Expert"
      />
    </>
  );
}
