"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CountryPhoneDropdown from "./CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

export default function ContactSection() {
  const [sectionEnquiryData, setSectionEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [sectionEnquiryPhoneCode, setSectionEnquiryPhoneCode] = useState<string | null>(null);
  const [isSectionEnquiryChecked, setIsSectionEnquiryChecked] = useState(true);
  const [isSectionEnquirySubmitting, setIsSectionEnquirySubmitting] = useState(false);

  // Auto-detect country on mount
  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setSectionEnquiryPhoneCode(code);
    };
    detectCountry();
  }, []);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setSectionEnquiryData({ ...sectionEnquiryData, phone: digitsOnly });
  };

  return (
    <section id="contact" className="enquiry-section">
      <div className="container">
        <div className="enquiry-section-wrapper">
          <div className="enquiry-image-wrapper">
            <Image
              src="/images/banner.webp"
              alt="HADO by Beyond"
              width={600}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="enquiry-logo-overlay">
              <Image
                src="/images/logo.png"
                alt="Beyond Logo"
                width={200}
                height={200}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "180px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="enquiry-form-wrapper">
            <div className="enquiry-form-content">
              <h2 className="enquiry-section-title">Get in Touch</h2>
              <p className="enquiry-section-subtitle">
                Contact our advisor for available units and pricing details
              </p>
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

              <form
                className="enquiry_form section_enquiry_form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSectionEnquirySubmitting(true);
                  try {
                    const response = await fetch("/api/submit-enquiry", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: sectionEnquiryData.name,
                        email: sectionEnquiryData.email,
                        phone: `${sectionEnquiryPhoneCode}${sectionEnquiryData.phone}`,
                        consent: isSectionEnquiryChecked,
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
                    setIsSectionEnquirySubmitting(false);
                  }
                }}
              >
                <div className="form_group">
                  <input
                    type="text"
                    id="section_enquiry_name"
                    placeholder="Name"
                    value={sectionEnquiryData.name}
                    onChange={(e) =>
                      setSectionEnquiryData({
                        ...sectionEnquiryData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form_group">
                  <input
                    type="email"
                    id="section_enquiry_email"
                    placeholder="Email ID"
                    value={sectionEnquiryData.email}
                    onChange={(e) =>
                      setSectionEnquiryData({
                        ...sectionEnquiryData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form_group phone_input_wrapper">
                  <CountryPhoneDropdown
                    value={sectionEnquiryPhoneCode || "+971"}
                    onChange={setSectionEnquiryPhoneCode}
                  />
                  <input
                    type="tel"
                    id="section_enquiry_phone"
                    placeholder="50 123 4567"
                    value={sectionEnquiryData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    required
                  />
                </div>

                <div className="form_checkbox_group">
                  <input
                    type="checkbox"
                    id="section_enquiry_consent"
                    checked={isSectionEnquiryChecked}
                    onChange={(e) =>
                      setIsSectionEnquiryChecked(e.target.checked)
                    }
                    required
                  />
                  <label htmlFor="section_enquiry_consent">
                    I hereby authorize company representatives to reach out to
                    me via Call, SMS, Email, or WhatsApp to share details
                    about their products and offers, regardless of my DNC/NDNC
                    registration.
                  </label>
                </div>

                <button
                  type="submit"
                  className="enquiry_submit_btn"
                  disabled={isSectionEnquirySubmitting}
                >
                  {isSectionEnquirySubmitting
                    ? "Submitting..."
                    : "Submit Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

