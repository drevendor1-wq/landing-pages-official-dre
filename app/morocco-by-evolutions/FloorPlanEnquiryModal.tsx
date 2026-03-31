"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

interface FloorPlanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  floorPlanTitle?: string;
  buttonText?: string;
}

export default function FloorPlanEnquiryModal({
  isOpen,
  onClose,
  floorPlanTitle,
  buttonText = "ENQUIRE NOW",
}: FloorPlanEnquiryModalProps) {
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "971527543245";
  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in ELIE SAAB Casablanca Art of Living Project in Morocco. Please provide more information regarding the project and available units."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    if (isOpen) {
      setEnquiryData({ name: "", email: "", phone: "" });
      const detectCountry = async () => {
        const code = await detectCountryCode();
        setPhoneCode(code);
      };
      detectCountry();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      document.body.style.overflow = "hidden";
      const ctx = gsap.context(() => {
        gsap.to(modalRef.current, { opacity: 1, duration: 0.4, ease: "none" });
        gsap.fromTo(contentRef.current, 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, ease: "power4.out", delay: 0.1 }
        );
      }, modalRef.current);
      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setEnquiryData({ ...enquiryData, phone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: enquiryData.name,
          email: enquiryData.email,
          phone: `${phoneCode}${enquiryData.phone}`,
          message: `Enquiry for: ${floorPlanTitle || "Floor Plan"}`,
          consent: isChecked,
        }),
      });
      if (response.ok) { window.location.href = "/thank-you"; } 
      else { alert("Error submitting enquiry."); }
    } catch (error) {
      alert("Error submitting enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="lux-modal-overlay" onClick={onClose} ref={modalRef}>
      <div className="lux-modal-card" onClick={(e) => e.stopPropagation()} ref={contentRef}>
        <button className="lux-modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>

        <div className="lux-modal-body">
          <div className="lux-modal-header">
            <span className="lux-eyebrow">ELIE SAAB RESIDENCES | CASABLANCA</span>
            <h2 className="lux-modal-title">{buttonText}</h2>
            <div className="lux-separator"></div>
          </div>

          <form className="lux-form" onSubmit={handleSubmit}>
            <div className="lux-input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={enquiryData.name}
                onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                required
              />
            </div>

            <div className="lux-input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={enquiryData.email}
                onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                required
              />
            </div>

            <div className="lux-input-group">
              <label>Phone Number</label>
              <div className="lux-phone-flex">
                <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                <input
                  type="tel"
                  placeholder="50 123 4567"
                  value={enquiryData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="lux-checkbox-container">
              <input
                type="checkbox"
                id="consent"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <label htmlFor="consent">
                I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products and offers, regardless of my DNC/NDNC registration.
              </label>
            </div>

            <button type="submit" className="lux-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "PROCESSING..." : "SUBMIT ENQUIRY"}
            </button>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="lux-whatsapp-link">
              <Image src="/images/whatsapp.png" alt="" width={18} height={18} />
              CONTACT US DIRECTLY VIA WHATSAPP
            </a>
          </form>
        </div>
      </div>

      <style jsx>{`
        .lux-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(26, 26, 26, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          opacity: 0;
        }

        .lux-modal-card {
          background: #fdfcf9;
          width: 100%;
          max-width: 500px;
          position: relative;
          border-radius: 2px;
          box-shadow: 0 30px 90px rgba(0,0,0,0.2);
          overflow: hidden;
        }

        .lux-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #1a1a1a;
          z-index: 10;
          padding: 5px;
          transition: 0.3s;
        }

        .lux-modal-close:hover { color: #b89562; transform: rotate(90deg); }

        .lux-modal-body {
          padding: 50px 45px;
        }

        .lux-modal-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .lux-eyebrow {
          color: #b89562;
          font-size: 11px;
          letter-spacing: 4px;
          font-weight: 700;
          display: block;
          margin-bottom: 10px;
        }

        .lux-modal-title {
          font-family: serif;
          font-size: 28px;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }

        .lux-separator {
          width: 40px;
          height: 1px;
          background: #b89562;
          margin: 15px auto 0;
        }

        .lux-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .lux-input-group label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 700;
          color: #888;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .lux-input-group input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e0e0e0;
          padding: 10px 0;
          font-size: 15px;
          color: #1a1a1a;
          transition: 0.3s;
        }

        .lux-input-group input:focus {
          outline: none;
          border-color: #b89562;
        }

        .lux-phone-flex {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .lux-checkbox-container {
          display: flex;
          gap: 12px;
          margin: 10px 0;
        }

        .lux-checkbox-container input {
          width: 16px;
          height: 16px;
          accent-color: #b89562;
          cursor: pointer;
        }

        .lux-checkbox-container label {
          font-size: 12px;
          color: #666;
          line-height: 1.5;
          cursor: pointer;
        }

        .lux-submit-btn {
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 18px;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 13px;
          cursor: pointer;
          transition: 0.4s;
          margin-top: 10px;
        }

        .lux-submit-btn:hover {
          background: #b89562;
          transform: translateY(-2px);
        }

        .lux-whatsapp-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          color: #1a1a1a;
          text-decoration: none;
          letter-spacing: 1px;
          margin-top: 5px;
          opacity: 0.7;
          transition: 0.3s;
        }

        .lux-whatsapp-link:hover { opacity: 1; color: #25d366; }

        @media (max-width: 480px) {
          .lux-modal-body { padding: 40px 25px; }
          .lux-modal-title { font-size: 24px; }
        }
      `}</style>
    </div>
  );
}