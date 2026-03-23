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
    "Hello, I am interested in Eagle Hills Tbilisi Waterfront Project. Please provide more information regarding the project and available units."
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
        gsap.to(modalRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
        gsap.fromTo(contentRef.current, 
          { scale: 0.95, y: 30, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: "expo.out", delay: 0.1 }
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
      if (response.ok) window.location.href = "/thank-you";
      else alert("Error submitting enquiry.");
    } catch (error) {
      alert("Error submitting enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal_overlay" onClick={onClose} ref={modalRef}>
      <div className="modal_card" onClick={(e) => e.stopPropagation()} ref={contentRef}>
        
        <button className="close_x" onClick={onClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal_body">
          <header className="modal_header">
            <span className="subtitle_badge">{buttonText}</span>
            <h2 className="main_heading">Request <span className="gold_italic">Details</span></h2>
            
            <a
              href={whatsappUrl}
              rel="noopener noreferrer"
              className="whatsapp_link"
            >
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={18} height={18} />
              <span>Contact Us Directly</span>
            </a>
          </header>

          <form className="modal_form" onSubmit={handleSubmit}>
            <div className="input_group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={enquiryData.name}
                onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                required
              />
            </div>

            <div className="input_group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={enquiryData.email}
                onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                required
              />
            </div>

            <div className="input_group">
              <label>Phone Number</label>
              <div className="phone_flex">
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

            <div className="consent_wrap">
              <input
                type="checkbox"
                id="consent"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <label htmlFor="consent">
                I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp regarding products and offers.
              </label>
            </div>

            <button type="submit" className="submit_btn" disabled={isSubmitting}>
              {isSubmitting ? <span className="loader"></span> : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .modal_overlay {
          position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px); display: flex; align-items: center;
          justify-content: center; z-index: 9999; padding: 20px; opacity: 0;
        }
        .modal_card {
          background: #fff; width: 100%; max-width: 480px; position: relative;
          border-radius: 4px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }
        .close_x {
          position: absolute; top: 20px; right: 20px; background: #f5f5f5;
          border: none; width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.3s; z-index: 10;
        }
        .close_x:hover { background: #000; color: #fff; }

        .modal_body { padding: 50px 40px; }
        
        .modal_header { text-align: center; margin-bottom: 35px; }
        .subtitle_badge { 
          font-size: 11px; letter-spacing: 3px; color: #c5a35d; 
          font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 10px;
        }
        .main_heading { 
          font-size: 32px; font-weight: 900; color: #111; 
          letter-spacing: -1px; margin-bottom: 20px; 
        }
        .gold_italic { color: #c5a35d; font-family: serif; font-weight: 400; }
        
        .whatsapp_link {
          display: inline-flex; align-items: center; gap: 8px;
          background: #f9f9f9; padding: 10px 20px; border-radius: 50px;
          color: #25d366; font-size: 13px; font-weight: 700;
          text-decoration: none; transition: 0.3s; border: 1px solid #eee;
        }
        .whatsapp_link:hover { background: #25d366; color: #fff; border-color: #25d366; }

        .modal_form { display: flex; flex-direction: column; gap: 20px; }
        .input_group { display: flex; flex-direction: column; gap: 8px; }
        .input_group label { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #888; letter-spacing: 1px; }
        
        .input_group input {
          padding: 14px 16px; border: 1px solid #e2e2e2; border-radius: 4px;
          font-size: 15px; transition: 0.3s; background: #fff;
        }
        .input_group input:focus { border-color: #111; outline: none; background: #fafafa; }

        .phone_flex { display: grid; grid-template-columns: 100px 1fr; gap: 10px; }
        
        .consent_wrap { display: flex; gap: 12px; align-items: flex-start; margin-top: 5px; }
        .consent_wrap input { width: 16px; height: 16px; margin-top: 3px; cursor: pointer; accent-color: #000; }
        .consent_wrap label { font-size: 11px; line-height: 1.6; color: #666; cursor: pointer; }

        .submit_btn {
          margin-top: 10px; padding: 18px; background: #111; color: #fff;
          border: none; border-radius: 4px; font-size: 13px; font-weight: 800;
          letter-spacing: 2px; cursor: pointer; transition: 0.3s;
          display: flex; align-items: center; justify-content: center;
        }
        .submit_btn:hover { background: #c5a35d; transform: translateY(-2px); }
        .submit_btn:disabled { background: #ccc; cursor: not-allowed; transform: none; }

        .loader {
          width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 480px) {
          .modal_body { padding: 40px 25px; }
          .main_heading { font-size: 26px; }
        }
      `}</style>
    </div>
  );
}