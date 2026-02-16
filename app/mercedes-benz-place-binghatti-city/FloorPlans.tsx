"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FloorPlan {
  src: string;
  alt: string;
  title: string;
}

const floorPlans: FloorPlan[] = [
  { src: "/images/mercedes-benz/floor-plan-1.jpeg", alt: "Floor Plan 1", title: "Floor Plan 1" },
  { src: "/images/mercedes-benz/floor-plan-2.jpeg", alt: "Floor Plan 2", title: "Floor Plan 2" },
  { src: "/images/mercedes-benz/floor-plan-3.jpeg", alt: "Floor Plan 3", title: "Floor Plan 3" },
  { src: "/images/mercedes-benz/floor-plan-4.jpeg", alt: "Floor Plan 4", title: "Floor Plan 4" },
];

export default function MasterPlan() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && headerRef.current && sliderRef.current) {
      const ctx = gsap.context(() => {
        // Animate header
        gsap.from(headerRef.current!.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Animate slider
        gsap.from(sliderRef.current, {
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? floorPlans.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === floorPlans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openEnquiryModal = () => {
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (enquiryModalOpen && e.key === "Escape") {
        closeEnquiryModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enquiryModalOpen]);

  return (
    <>
      <section id="master-plan" className="damac_master_plan_section" ref={sectionRef}>
        <div className="container">
          <div className="damac_master_plan_header" ref={headerRef}>
            <p className="damac_master_plan_subheading"></p>
            <h2 className="damac_master_plan_heading">FLOOR PLAN</h2>
            <p className="damac_master_plan_tagline">Thoughtfully planned layouts that balance space, elegance, and functionality.</p>
          </div>

          <div className="damac_master_plan_wrapper" ref={sliderRef}>
            <div className="damac_floor_plan_slider">
              <button
                className="damac_floor_plan_nav_btn damac_floor_plan_prev_btn"
                onClick={goToPrevious}
                aria-label="Previous floor plan"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="damac_floor_plan_slider_container">
                <div
                  className="damac_floor_plan_slider_track"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {floorPlans.map((plan, index) => (
                    <div key={index} className="damac_floor_plan_slide">
                      <div className="damac_master_plan_image_container">
                        <Image
                          src={plan.src}
                          alt={plan.alt}
                          width={1200}
                          height={800}
                          className="damac_master_plan_image"
                        />
                        <button
                          className="damac_floor_plan_slide_button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(index);
                            openEnquiryModal();
                          }}
                        >
                         Get all Floor Plans
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="damac_floor_plan_nav_btn damac_floor_plan_next_btn"
                onClick={goToNext}
                aria-label="Next floor plan"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="damac_floor_plan_dots">
              {floorPlans.map((_, index) => (
                <button
                  key={index}
                  className={`damac_floor_plan_dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to floor plan ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle={floorPlans[currentIndex]?.title || "Floor Plan"}
        buttonText="Get all Floor Plans"
      />
    </>
  );
}
