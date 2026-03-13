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

  // Auto-detect country every time modal opens
  useEffect(() => {
    if (isOpen) {
      // Reset form data when modal opens
      setEnquiryData({
        name: "",
        email: "",
        phone: "",
      });
      
      // Detect country
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
        gsap.from(modalRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.from(contentRef.current, {
          scale: 0.9,
          y: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.1,
        });
      }, modalRef.current);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: enquiryData.name,
          email: enquiryData.email,
          phone: `${phoneCode}${enquiryData.phone}`,
          message: `Enquiry for: ${floorPlanTitle || "Floor Plan"}`,
          consent: isChecked,
        }),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error submitting enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="damac_floor_plan_enquiry_modal_overlay"
      onClick={onClose}
      ref={modalRef}
    >
      <div
        className="damac_floor_plan_enquiry_modal"
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        <button
          className="damac_floor_plan_enquiry_modal_close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="damac_floor_plan_enquiry_modal_content">
          <div className="damac_floor_plan_enquiry_header">
            <p className="damac_floor_plan_enquiry_subtitle">{buttonText}</p>
            <div className="damac_floor_plan_enquiry_header_buttons">
              <a
                href="https://wa.me/971505786682?text=Hello%2C%20I%20would%20like%20to%20understand%20the%20growth%20potential%20of%20Mercedes-Benz%20Palace%2C%20Bhighatti%20City.%20Thank%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="damac_floor_plan_enquiry_header_btn damac_floor_plan_enquiry_header_btn_whatsapp"
                aria-label="WhatsApp"
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                Contact Us Directly
                
              </a>
            </div>
          </div>

          <form className="damac_floor_plan_enquiry_form" onSubmit={handleSubmit}>
            <div className="damac_floor_plan_enquiry_form_group">
              <label htmlFor="floor_plan_name">Full Name</label>
              <input
                type="text"
                id="floor_plan_name"
                placeholder="Enter your full name"
                value={enquiryData.name}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="damac_floor_plan_enquiry_form_group">
              <label htmlFor="floor_plan_email">Email Address</label>
              <input
                type="email"
                id="floor_plan_email"
                placeholder="Enter your email address"
                value={enquiryData.email}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="damac_floor_plan_enquiry_form_group">
              <label htmlFor="floor_plan_phone">Phone Number</label>
              <div className="damac_floor_plan_enquiry_phone_wrapper damac_floor_plan_phone_dropdown_black">
                <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                <input
                  type="tel"
                  id="floor_plan_phone"
                  placeholder="50 123 4567"
                  value={enquiryData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="damac_floor_plan_enquiry_checkbox_group">
              <input
                type="checkbox"
                id="floor_plan_consent"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <label htmlFor="floor_plan_consent">
                I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products and offers, regardless of my DNC/NDNC registration.
              </label>
            </div>

            <button
              type="submit"
              className="damac_floor_plan_enquiry_submit_btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="damac_floor_plan_enquiry_spinner" width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="32" strokeDashoffset="32">
                      <animate attributeName="stroke-dasharray" dur="2s" values="0 32;16 16;0 32;0 32" repeatCount="indefinite"/>
                      <animate attributeName="stroke-dashoffset" dur="2s" values="0;-16;-32;-32" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Now"
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
