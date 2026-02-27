"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CountryPhoneDropdown from "./CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

interface EnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function EnquiryModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }: EnquiryModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [enquiryPhoneCode, setEnquiryPhoneCode] = useState<string | null>(null);
  const [isEnquiryChecked, setIsEnquiryChecked] = useState(true);
  const [isEnquirySubmitting, setIsEnquirySubmitting] = useState(false);

  // Use controlled or internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const onClose = controlledOnClose || (() => setInternalIsOpen(false));

  // Auto-detect country on mount
  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setEnquiryPhoneCode(code);
    };
    detectCountry();
  }, []);

  // Auto-open after 5 seconds if not controlled
  useEffect(() => {
    if (controlledIsOpen === undefined) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [controlledIsOpen]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setEnquiryData({ ...enquiryData, phone: digitsOnly });
  };

  if (!isOpen) return null;

  return (
    <div
      className="form_modal_overlay"
      onClick={onClose}
    >
      <div className="enquiry_modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="form_modal_close"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="enquiry_modal_content">
          <div className="enquiry_header">
            <h3 className="enquiry_heading">
              Contact our advisor for available units and pricing details
            </h3>
            <div className="enquiry_icons">
              <a
                href="tel:+971505786682"
                className="enquiry_icon_btn call_icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/971505786682?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20availability%20and%20the%20best%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="enquiry_icon_btn whatsapp_icon"
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
              </a>
            </div>
          </div>

          <form
            className="enquiry_form"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsEnquirySubmitting(true);
              try {
                const response = await fetch("/api/submit-enquiry", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: enquiryData.name,
                    email: enquiryData.email,
                    phone: `${enquiryPhoneCode}${enquiryData.phone}`,
                    consent: isEnquiryChecked,
                  }),
                });
                const data = await response.json();
                if (response.ok) {
                  window.location.href = "/thank-you";
                } else {
                  alert("Error submitting enquiry. Please try again.");
                }
              } catch (error) {
                console.error("Error:", error);
                alert("Error submitting enquiry. Please try again.");
              } finally {
                setIsEnquirySubmitting(false);
              }
            }}
          >
            <div className="form_group">
              <input
                type="text"
                id="enquiry_name"
                placeholder="Name"
                value={enquiryData.name}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="form_group">
              <input
                type="email"
                id="enquiry_email"
                placeholder="Email ID"
                value={enquiryData.email}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form_group phone_input_wrapper">
              <CountryPhoneDropdown
                value={enquiryPhoneCode || "+971"}
                onChange={setEnquiryPhoneCode}
              />
              <input
                type="tel"
                id="enquiry_phone"
                placeholder="50 123 4567"
                value={enquiryData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                required
              />
            </div>

            <div className="form_checkbox_group">
              <input
                type="checkbox"
                id="enquiry_consent"
                checked={isEnquiryChecked}
                onChange={(e) => setIsEnquiryChecked(e.target.checked)}
                required
              />
              <label htmlFor="enquiry_consent">
                I hereby authorize company representatives to reach out to
                me via Call, SMS, Email, or WhatsApp to share details about
                their products and offers, regardless of my DNC/NDNC
                registration.
              </label>
            </div>

            <button
              type="submit"
              className="enquiry_submit_btn"
              disabled={isEnquirySubmitting}
            >
              {isEnquirySubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

