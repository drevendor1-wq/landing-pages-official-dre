"use client";

import { useState } from "react";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

export default function NewPaymentPlanLayout() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const steps = [
    { percent: "10%", label: "BOOKING FEE", desc: "4% DLD + Admin Fee", icon: "01" },
    { percent: "30%", label: "CONSTRUCTION", desc: "In 4 Equal Installments", icon: "02" },
    { percent: "30%", label: "ON HANDOVER", desc: "Q3 2027", icon: "03" },
    { percent: "30%", label: "POST-HANDOVER", desc: "24 Months Plan", icon: "04" },
  ];

  return (
    <section id="payment plan" className="npl-section">
      <div className="npl-container">
        
        {/* Header Block */}
        <div className="npl-header">
          <div className="npl-title-wrap">
            <span className="npl-eyebrow">Investment Structure</span>
            <h2 className="npl-main-title">Payment Plan</h2>
          </div>
          <div className="npl-intro-text">
            <p>
              Marea Residences offers a clear 40/30/30 payment plan, allowing buyers to spread payments across construction, handover and a two-year post-handover period while securing a home in the growing Dubai Islands residential district.
            </p>
          </div>
        </div>

        {/* The New Grid Layout */}
        <div className="npl-grid">
          {steps.map((step, index) => (
            <div key={index} className="npl-card">
              <div className="npl-card-content">
                <h3 className="npl-percent">{step.percent}</h3>
                <h4 className="npl-label">{step.label}</h4>
                <p className="npl-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="npl-footer">
          <button 
            className="npl-cta-btn"
            onClick={() => setEnquiryModalOpen(true)}
          >
            REQUEST PAYMENT PLAN
          </button>
        </div>
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Marea Residences | Dubai Islands"
        buttonText="REQUEST PAYMENT PLAN"
      />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Montserrat:wght@300;600;700&display=swap');

        .npl-section {
          padding: 140px 0;
          background-color: #fcfcfc;
          font-family: 'Montserrat', sans-serif;
        }

        .npl-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
        }

        /* Header logic: Split top */
        .npl-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 80px;
          gap: 60px;
        }

        .npl-eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #89a8b2;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .npl-main-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(40px, 6vw, 80px);
          color: #1a2b3c;
          line-height: 1;
        }

        .npl-intro-text {
          max-width: 400px;
          font-size: 15px;
          line-height: 1.8;
          color: #666;
          padding-bottom: 10px;
        }

        /* Grid logic: 4 equal pillars with a premium hover */
        .npl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background-color: #eee; /* This creates the thin divider lines */
          border: 1px solid #eee;
        }

        .npl-card {
          background-color: #fff;
          padding: 60px 40px;
          position: relative;
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .npl-card:hover {
          background-color: #1a2b3c;
        }

        .npl-card:hover .npl-percent,
        .npl-card:hover .npl-label,
        .npl-card:hover .npl-desc {
          color: #fff;
        }

        .npl-card-number {
          position: absolute;
          top: 30px;
          right: 30px;
          font-family: 'Bodoni Moda', serif;
          font-size: 14px;
          color: #89a8b2;
          opacity: 0.5;
        }

        .npl-percent {
          font-family: 'Bodoni Moda', serif;
          font-size: 52px;
          color: #1a2b3c;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .npl-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #1a2b3c;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .npl-desc {
          font-size: 13px;
          color: #89a8b2;
          transition: color 0.3s ease;
        }

        .npl-footer {
          margin-top: 80px;
          text-align: center;
        }

        .npl-cta-btn {
          background: #1a2b3c;
          color: #fff;
          border: none;
          padding: 25px 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          cursor: pointer;
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .npl-cta-btn:hover {
          background: #4a7c92;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Mobile adaptation */
        @media (max-width: 1100px) {
          .npl-grid { grid-template-columns: repeat(2, 1fr); }
          .npl-header { flex-direction: column; align-items: flex-start; gap: 30px; }
        }

        @media (max-width: 600px) {
          .npl-grid { grid-template-columns: 1fr; }
          .npl-section { padding: 80px 0; }
          .npl-card { padding: 40px 30px; }
          .npl-percent { font-size: 40px; }
        }
      `}</style>
    </section>
  );
}