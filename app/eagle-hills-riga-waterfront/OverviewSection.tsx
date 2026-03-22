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
                Belgrade Waterfront represents the next phase of Belgrade’s development and a new chapter of Serbia’s capital. Located on the right bank of the Sava River, between Ada Bridge and the revitalized pedestrian bridge, this new urban district redefines the city’s relationship with the river.
              </p>
              
              <p>
              Welcome to a place where mornings begin with river views, days unfold in greenery and leisurely walks, and evenings are spent in an atmosphere reminiscent of the world’s most renowned marinas.
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
        buttonText="Learn More About the Project"
      />
    </>
  );
}
