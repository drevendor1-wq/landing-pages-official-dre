"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PlanCard {
  id: string;
  title: string;
  price: string;
  size: string;
  beds: string;
  image: string;
}

const apartmentPlans: PlanCard[] = [
  { id: "A-1F", title: "Apt A-1F", price: "AED 4.1M", size: "2,879 sq. ft.", beds: "2 BR", image: "/images/marea-residences/mareaAptFloor1.png" },
  { id: "B-1F", title: "Apt B-1F", price: "AED 3.58M", size: "1,628 sq. ft.", beds: "2 BR", image: "/images/marea-residences/mareaAptFloor2.png" }
];

const penthousePlans: PlanCard[] = [
  { id: "APT H-12F SS", title: "APT H-12F SS", price: "AED 8.25M", size: "3,519 sq. ft.", beds: "4 BR", image: "/images/marea-residences/mareaPentFloor1.avif" },
  { id: "APT G-12F SS", title: "APT G-12F SS", price: "AED 8.54M", size: "3,546 sq. ft.", beds: "5 BR", image: "/images/marea-residences/mareaPentFloor2.avif" }
];

export default function FloorPlanSection() {
  const [activeTab, setActiveTab] = useState<"Apartments" | "Penthouses">("Apartments");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  const currentPlans = activeTab === "Apartments" ? apartmentPlans : penthousePlans;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".plan-animate", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [activeTab]);

  const handleEnquiry = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setEnquiryModalOpen(true);
  };

  return (
    <section id="floor plan" ref={sectionRef} className="fp-section">
      <div className="fp-container">
        
        <div className="fp-header">
          <span className="plan-animate fp-eyebrow">The Residences</span>
          <h2 className="plan-animate fp-title">Floor Plans</h2>
          
          <div className="plan-animate fp-tabs">
            <button 
              className={`fp-tab-btn ${activeTab === "Apartments" ? "active" : ""}`}
              onClick={() => setActiveTab("Apartments")}
            >
              APARTMENTS
            </button>
            <button 
              className={`fp-tab-btn ${activeTab === "Penthouses" ? "active" : ""}`}
              onClick={() => setActiveTab("Penthouses")}
            >
              PENTHOUSES
            </button>
          </div>
        </div>

        <div className="fp-grid">
          {currentPlans.map((plan) => (
            <div key={plan.id} className="plan-animate fp-card">
              <div className="fp-image-wrapper">
                <Image 
                  src={plan.image} 
                  alt={plan.title} 
                  fill 
                  className="fp-img"
                />
              </div>
              
              <div className="fp-details">
                <h3 className="fp-card-title">{plan.title}</h3>
                
                <div className="fp-specs">
                  <div className="spec-item">
                    <span className="spec-label">Sell Price</span>
                    <span className="spec-value">{plan.price}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Unit Size</span>
                    <span className="spec-value">{plan.size}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Bedrooms</span>
                    <span className="spec-value">{plan.beds}</span>
                  </div>
                </div>

                <button 
                  className="fp-cta" 
                  onClick={() => handleEnquiry(plan.title)}
                >
                  REQUEST ALL FLOOR PLANS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Marea Residences | Dubai Islands"
        buttonText="REQUEST FLOOR PLANS"
      />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Montserrat:wght@300;500;700&display=swap');

        .fp-section {
          padding: 100px 0;
          background-color: #ffffff;
        }

        .fp-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fp-header {
          text-align: left;
          margin-bottom: 60px;
          border-bottom: 1px solid #eee;
          padding-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .fp-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          color: #89a8b2;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .fp-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 400;
          color: #1a2b3c;
          margin-bottom: 30px;
          line-height: 1;
        }

        .fp-tabs {
          display: flex;
          gap: 30px;
        }

        .fp-tab-btn {
          padding: 10px 0;
          border: none;
          background: transparent;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #89a8b2;
          cursor: pointer;
          position: relative;
          transition: 0.3s;
        }

        .fp-tab-btn.active { color: #1a2b3c; }
        .fp-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #1a2b3c;
        }

        .fp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .fp-card {
          background: #fff;
          border: 1px solid #f2f2f2;
        }

        .fp-image-wrapper {
          position: relative;
          height: 500px;
          width: 100%;
          background: #fcfcfc;
          border-bottom: 1px solid #f2f2f2;
        }

        .fp-img { object-fit: contain; padding: 40px; }

        .fp-details { padding: 40px; }

        .fp-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 24px;
          font-weight: 500;
          color: #1a2b3c;
          margin-bottom: 25px;
        }

        .fp-specs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .spec-item { display: flex; flex-direction: column; }
        .spec-label { 
          font-family: 'Montserrat', sans-serif; 
          font-size: 9px; 
          text-transform: uppercase; 
          color: #89a8b2; 
          font-weight: 700; 
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .spec-value { 
          font-family: 'Montserrat', sans-serif; 
          font-size: 15px; 
          font-weight: 700; 
          color: #1a2b3c; 
        }

        .fp-cta {
          width: 100%;
          padding: 22px;
          background: #1a2b3c;
          color: #fff;
          border: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          cursor: pointer;
          transition: 0.4s ease;
        }

        .fp-cta:hover { background: #4a7c92; }

        @media (max-width: 1024px) {
          .fp-grid { grid-template-columns: 1fr; }
          .fp-image-wrapper { height: 400px; }
          .fp-header { text-align: center; align-items: center; }
        }

        @media (max-width: 480px) {
          .fp-section { padding: 60px 0; }
          .fp-details { padding: 30px 20px; }
          .fp-card-title { font-size: 20px; }
          .fp-image-wrapper { height: 320px; }
          .fp-tabs { width: 100%; justify-content: space-between; gap: 0; }
        }
      `}</style>
    </section>
  );
}