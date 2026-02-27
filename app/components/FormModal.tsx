"use client";
import { useState, useEffect } from "react";
import CountryPhoneDropdown from "./CountryPhoneDropdown";
import { useFormModal } from "./FormModalContext";
import { detectCountryCode } from "../utils/countryDetection";

export default function FormModal() {
  const { isFormModalOpen, modalType, closeFormModal } = useFormModal();
  const [formData, setFormData] = useState({ name: "", whatsapp: "" });
  const [formPhoneCode, setFormPhoneCode] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-detect country on mount
  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setFormPhoneCode(code);
    };
    detectCountry();
  }, []);

  const handleWhatsAppChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setFormData({ ...formData, whatsapp: digitsOnly });
  };

  const getModalHeading = () => {
    switch (modalType) {
      case "roi":
        return "Get available units & price list on Whatsapp & Telegram";
      case "brochure":
        return "DOWNLOAD HADO BY BEYOND BROCHURE...";
      case "layout":
        return "Get HADO by Beyond's layouts on WhatsApp.";
      default:
        return "View available units. Get project details on WhatsApp";
    }
  };

  const getModalButtonText = () => {
    switch (modalType) {
      case "brochure":
        return "Request Brochure";
      case "roi":
      case "layout":
      default:
        return "Submit Now";
    }
  };

  if (!isFormModalOpen) return null;

  return (
    <div
      className="form_modal_overlay"
      onClick={closeFormModal}
    >
      <div className="form_modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="form_modal_close"
          onClick={closeFormModal}
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

        <div className="form_modal_content">
          <div className="form_header">
            <p className="form_heading">{getModalHeading()}</p>
          </div>

          <form
            className="contact_form"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              try {
                const response = await fetch("/api/submit-form", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: formData.name,
                    whatsapp: `${formPhoneCode}${formData.whatsapp}`,
                    consent: isChecked,
                  }),
                });
                const data = await response.json();
                if (response.ok) {
                  window.location.href = "/thank-you";
                } else {
                  console.error("Form submission error:", data);
                  alert(
                    `Error: ${
                      data.error ||
                      "Failed to submit form. Please try again."
                    }`
                  );
                }
              } catch (error) {
                console.error("Error:", error);
                alert(
                  "Error submitting form. Please check console for details."
                );
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <div className="form_group">
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="form_group phone_input_wrapper">
              <CountryPhoneDropdown
                value={formPhoneCode || "+971"}
                onChange={setFormPhoneCode}
              />
              <input
                type="tel"
                id="whatsapp"
                placeholder="50 123 4567"
                value={formData.whatsapp}
                onChange={(e) => handleWhatsAppChange(e.target.value)}
                required
              />
            </div>

            <div className="form_checkbox_group">
              <input
                type="checkbox"
                id="consent"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <label htmlFor="consent">
                I hereby authorize company representatives to reach out to
                me via Call, SMS, Email, or WhatsApp to share details about
                their products and offers, regardless of my DNC/NDNC
                registration.
              </label>
            </div>

            <button
              type="submit"
              className="form_submit_btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : getModalButtonText()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

