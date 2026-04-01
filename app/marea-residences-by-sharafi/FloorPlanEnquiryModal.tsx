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
  const [enquiryData, setEnquiryData] = useState({ name: "", email: "", phone: "" });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = "971527543245";
  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in Marea Residences in Dubai Islands. Please provide more information regarding the project and available units."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    if (isOpen) {
      setEnquiryData({ name: "", email: "", phone: "" });
      detectCountryCode().then(setPhoneCode);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      document.body.style.overflow = "hidden";
      const ctx = gsap.context(() => {
        gsap.to(modalRef.current, { opacity: 1, duration: 0.4 });
        gsap.fromTo(contentRef.current, 
          { y: 30, opacity: 0 }, 
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
    <div className="zenith-modal-overlay" onClick={onClose} ref={modalRef}>
      <div className="zenith-modal-container" onClick={(e) => e.stopPropagation()} ref={contentRef}>
        
        {/* Visual Column - Desktop Only */}
        <div className="zenith-modal-visual">
          <Image 
             src="/images/marea-residences/SH3-HQ.png" 
             alt="Luxury Interior" 
             fill 
             className="object-cover"
          />
        </div>

        {/* Content Column */}
        <div className="zenith-modal-content">
          <button className="zenith-close-trigger" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>

          <div className="zenith-header">
            <span className="zenith-brand-eyebrow">MAREA RESIDENCES</span>
            <h2 className="zenith-title-main">{buttonText}</h2>
          </div>

          <form className="zenith-haute-form" onSubmit={handleSubmit}>
            <div className="zenith-field">
              <label>FULL NAME</label>
              <input
                type="text"
                placeholder="Your Name"
                value={enquiryData.name}
                onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                required
              />
              <div className="border-glow"></div>
            </div>

            <div className="zenith-field">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={enquiryData.email}
                onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                required
              />
              <div className="border-glow"></div>
            </div>

            <div className="zenith-field">
              <label>PHONE NUMBER</label>
              <div className="zenith-phone-grid">
                <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                <input
                  type="tel"
                  placeholder="50 123 4567"
                  value={enquiryData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
              <div className="border-glow"></div>
            </div>

            <div className="zenith-legal">
  <label className="checkbox-haute">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
      required
    />
    <span className="check-mark"></span>
    <p>
      I hereby authorize company representatives to reach out to me via Call, 
      SMS, Email, or WhatsApp to share details about their products and offers, 
      regardless of my DNC/NDNC registration.
    </p>
  </label>
</div>
            <button type="submit" className="zenith-btn-submit" disabled={isSubmitting}>
              {isSubmitting ? "SUBMITTING." : "SUBMIT ENQUIRY"}
            </button>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="zenith-wa-minimal">
              <Image src="/images/whatsapp.png" alt="" width={14} height={14} />
              DIRECT WHATSAPP CONSULTATION
            </a>
          </form>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Montserrat:wght@300;500;700&display=swap');

        .zenith-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 20, 0.6);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          opacity: 0;
        }

        .zenith-modal-container {
          background: #ffffff;
          width: 100%;
          max-width: 900px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          position: relative;
          box-shadow: 0 40px 80px rgba(0,0,0,0.2);
          overflow: hidden;
          border-radius: 2px;
        }

        .zenith-modal-visual {
          position: relative;
          background: #1a2b3c;
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(26,43,60,0.4));
          display: flex;
          padding: 40px;
          align-items: flex-end;
        }

        .visual-tag {
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 4px;
          border-left: 2px solid #4a7c92;
          padding-left: 12px;
        }

        .zenith-modal-content {
          padding: 60px 50px;
          position: relative;
          background: #fff;
        }

        .zenith-close-trigger {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          border: none;
          cursor: pointer;
          color: #1a2b3c;
          padding: 5px;
        }

        .zenith-header { margin-bottom: 35px; }

        .zenith-brand-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: #89a8b2;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }

        .zenith-title-main {
          font-family: 'Bodoni Moda', serif;
          font-size: 24px;
          font-weight: 400;
          color: #1a2b3c;
          line-height: 1.1;
        }

        .zenith-haute-form { display: flex; flex-direction: column; gap: 24px; }

        .zenith-field { position: relative; }
        .zenith-field label {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #1a2b3c;
          margin-bottom: 4px;
        }

        .zenith-field input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #eee;
          padding: 10px 0;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          color: #1a2b3c;
          background: transparent;
          outline: none;
        }

        .border-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #4a7c92;
          transition: 0.4s ease;
        }

        .zenith-field input:focus ~ .border-glow { width: 100%; }

        .zenith-phone-grid { display: flex; gap: 12px; align-items: center; }

        .checkbox-haute { display: flex; gap: 12px; cursor: pointer; }
        .checkbox-haute input { display: none; }
        .check-mark {
          min-width: 14px;
          height: 14px;
          border: 1px solid #1a2b3c;
          margin-top: 3px;
        }
        .checkbox-haute input:checked + .check-mark { background: #1a2b3c; }
        .checkbox-haute p { font-size: 10px; color: #777; font-family: 'Montserrat', sans-serif; line-height: 1.4; }

        .zenith-btn-submit {
          background: #1a2b3c;
          color: #fff;
          border: none;
          padding: 18px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          letter-spacing: 3px;
          font-size: 11px;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 5px;
        }

        .zenith-btn-submit:hover { background: #4a7c92; }

        .zenith-wa-minimal {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #1a2b3c;
          text-decoration: none;
          letter-spacing: 1.5px;
          opacity: 0.7;
        }

        .zenith-legal {
          margin-top: 10px;
        }

        .checkbox-haute {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  cursor: pointer;
  position: relative;
  user-select: none;
}

/* Hide the default browser checkbox */
.checkbox-haute input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* The custom tick box (The Square) */
.check-mark {
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: 1px solid #1a2b3c; /* Deep Navy to match your theme */
  position: relative;
  flex-shrink: 0; /* Prevents shrinking on mobile */
  margin-top: 2px;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

/* When the checkbox is checked, fill the background */
.checkbox-haute input:checked ~ .check-mark {
  background-color: #1a2b3c;
  border-color: #1a2b3c;
}

/* Create the checkmark (the "L" shape) */
.check-mark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(45deg);
}

/* Show the checkmark when checked */
.checkbox-haute input:checked ~ .check-mark:after {
  display: block;
}

/* Legal text styling */
.checkbox-haute p {
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  line-height: 1.6;
  color: #777;
  margin: 0;
}

        /* MOBILE OPTIMIZATION */
        @media (max-width: 1024px) {
          .zenith-modal-container { 
            grid-template-columns: 1fr; 
            max-width: 450px; 
          }
          .zenith-modal-visual { display: none; }
          .zenith-modal-content { padding: 50px 35px; }
          .zenith-title-main { font-size: 28px; }
        }

        @media (max-width: 480px) {
          .zenith-modal-overlay { padding: 15px; align-items: flex-end; }
          .zenith-modal-container { 
            max-height: 90vh; 
            overflow-y: auto; 
            border-radius: 20px 20px 0 0; /* Elegant bottom sheet style */
          }
          .zenith-modal-content { padding: 40px 25px 30px; }
          .zenith-title-main { font-size: 18px; }
          .zenith-btn-submit { padding: 22px; }
          .check-mark {
    height: 20px; /* Slightly larger for easier tapping on mobile */
    width: 20px;
  }
  
  .checkbox-haute p {
    font-size: 10px; /* Sharper legibility for long text */
  }

  .check-mark:after {
    left: 6px;
    top: 2px;
  }
        }
      `}</style>
    </div>
  );
}