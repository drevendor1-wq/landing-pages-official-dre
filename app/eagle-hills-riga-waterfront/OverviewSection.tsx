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
                Riga Waterfront development in Latvia is the largest private master-planned project in Northern Europe.
              </p>
              
              <p>
              Spanning 5 km along the historic port, it features 8,000 residential units, 1,000 hotel rooms, world-class shopping, fine dining, and more.
              </p>
              <p>
                Developed by Eagle Hills, a subsidiary of Emaar—the renowned developer behind Burj Khalifa and Downtown Dubai.
              </p>
            </div>
            <button className="damac_overview_button" onClick={openEnquiryModal}>
             Learn More About the Project
            </button>
          </div>
        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Eagle Hills Belgrade Waterfront"
        buttonText="Request Information"
      />
    </>
  );
}
