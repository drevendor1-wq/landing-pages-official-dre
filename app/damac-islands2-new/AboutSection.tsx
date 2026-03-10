"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
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
    }

  useEffect(() => {
    if (sectionRef.current && backgroundRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        // Animate background image
        gsap.from(backgroundRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Animate content box
        if (contentRef.current) {
          gsap.from(contentRef.current.children, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            x: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          });
        }

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="damac_about_section" ref={sectionRef}>
      <div className="container">
        <div className="main_wrapper">
          <div className="damac_about_background" ref={backgroundRef}>
            <Image src="/images/damac-islands/DamacIslandsGallery5.webp" alt="About Section Background" width={1000} height={1000} />
          </div> 
          <div className="damac_about_content">
            <div className="damac_about_text_wrapper" ref={contentRef}>
              <p className="damac_about_subheading">The Visionary</p>
              <h2 className="damac_about_heading">About Damac Islands 2</h2>
              
              <div className="damac_about_body">
                <p className="damac_about_paragraph">
               DAMAC Islands 2 is a premium waterfront residential community designed around a tropical island lifestyle. This master-planned development blends crystal lagoons, private beaches, lush landscapes, and resort-style amenities with spacious luxury townhouses and villas. Each cluster is inspired by iconic island destinations, creating a holiday-at-home experience every day. The project is ideal for families seeking space, privacy, and lifestyle, as well as investors looking for strong long-term capital appreciation in Dubai’s expanding suburban luxury corridor. </p>
              </div>
              
              <button className="damac_about_button" onClick={openEnquiryModal}>
               CALL BACK FROM DAMAC EXPERT
              </button>
            </div>
          </div>
        </div>
      </div>

        <FloorPlanEnquiryModal
              isOpen={enquiryModalOpen}
              onClose={closeEnquiryModal}
              floorPlanTitle="Damac Islands 2"
              buttonText="Callback from Damac Expert"
            />
            
    </section>
    
  );
}
