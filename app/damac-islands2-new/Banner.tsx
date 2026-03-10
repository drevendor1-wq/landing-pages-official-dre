"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerHeader from "./BannerHeader";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DamacIslandsBanner() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Location Growth Insights");
  const bannerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current && contentRef.current && imageRef.current) {
      const ctx = gsap.context(() => {
        // Animate content
        gsap.from(contentRef.current!.children, {
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Animate image
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Refresh ScrollTrigger after animations are set up
        ScrollTrigger.refresh();
      }, bannerRef.current);

      return () => ctx.revert();
    }
  }, []);

  const openEnquiryModal = (text: string = "Location Growth Insights") => {
    setButtonText(text);
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
    <section className="damac_contact_banner_section" ref={bannerRef}>
      <div className="damac_contact_banner_container">
            <BannerHeader />
        <div className="damac_contact_banner_row">
          <div className="damac_contact_banner_content_col">
            <div className="damac_contact_banner_content_wrapper" ref={contentRef}>
              <div className="damac_contact_banner_content_area">
                <h1 className="damac_contact_banner_heading">
                  DAMAC ISLANDS  <span className="damac_contact_banner_heading_gold">2</span>
                </h1>
                <p className="damac_contact_banner_content_text">
                  Inspired by the world’s most captivating island destinations, this exclusive community is designed with intention, emotion and nature at its heart.
                </p>
                
                <div className="damac_contact_banner_project_details">
                  <div className="damac_contact_banner_detail_item">
                    <span className="damac_contact_banner_detail_label">Starting Price:</span>
                    <span className="damac_contact_banner_detail_value"> AED 2.75M</span>
                  </div>
                  <div className="damac_contact_banner_detail_item">
                    <span className="damac_contact_banner_detail_label">Unit Types:</span>
                    <span className="damac_contact_banner_detail_value">4, 5, 6 & 7 BR</span>
                  </div>
                  <div className="damac_contact_banner_detail_item">
                    <span className="damac_contact_banner_detail_label">Payment Plan:</span>
                    <span className="damac_contact_banner_detail_value">75/25</span>
                  </div>
                   <div className="damac_contact_banner_detail_item">
                    <span className="damac_contact_banner_detail_label">Handover:</span>
                    <span className="damac_contact_banner_detail_value">Q2 2029</span>
                  </div>
                </div>
                
                <div className="damac_contact_banner_cta_buttons">
                  <button 
                    className="damac_contact_banner_cta_btn damac_contact_banner_cta_btn_filled"
                    onClick={() => openEnquiryModal("Location Growth Insights")}
                  >
                    Location Growth Insights
                  </button>
                  <button 
                    className="damac_contact_banner_cta_btn damac_contact_banner_cta_btn_bordered"
                    onClick={() => openEnquiryModal("Get Brochure")}
                  >
                    Get Brochure
                  </button>
                </div>
             
              </div>
            </div>
          </div>
          
          <div className="damac_contact_banner_image_col" ref={imageRef}>
        
            <div className="damac_contact_banner_image_wrapper">
              <Image
                src="/images/damac-islands/CoverDamacIslands.webp"
                alt="Modern Houses"
                width={1200}
                height={700}
                className="damac_contact_banner_image"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Damac ISlands 2"
        buttonText={buttonText}
      />
    </section>
  );
}
