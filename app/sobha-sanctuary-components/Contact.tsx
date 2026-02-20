"use client";

import { useState, useRef, useEffect } from "react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    interestedUnitType: "",
  });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-detect country on mount
  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setPhoneCode(code);
    };
    detectCountry();
  }, []);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setFormData({ ...formData, telephone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${phoneCode}${formData.telephone}`,
          unitType: formData.interestedUnitType,
          consent: consentChecked,
        }),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }; 
  return (
    <section id="contact" className="damac_contact_section" ref={sectionRef}>
      <div className="container">
        <div className="damac_contact_header">
          <h2 className="damac_contact_heading">Find Your Ideal Home at Sobha Sanctuary</h2>
          <p className="damac_contact_description">
           Connect with DRE to access Sobha Sanctuary, an exclusive master-planned community in Dubailand.
          </p>
          <div className="damac_contact_checklist_wrapper">
            <div className="damac_contact_checklist_item">
              <div className="damac_contact_checklist_icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="damac_contact_checklist_text">No obligation</p>
            </div>
            <div className="damac_contact_checklist_item">
              <div className="damac_contact_checklist_icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="damac_contact_checklist_text">No sales pressure</p>
            </div>
            <div className="damac_contact_checklist_item">
              <div className="damac_contact_checklist_icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="damac_contact_checklist_text">Personalized consultation</p>
            </div>
          </div>
        </div>

        <form className="damac_contact_form" onSubmit={handleSubmit}>
          <div className="damac_contact_form_columns">
    
    {/* LEFT COLUMN */}
    <div className="damac_contact_form_column">
      <div className="damac_contact_form_group">
        <label htmlFor="contact_full_name">Full Name</label>
        <input
          type="text"
          id="contact_full_name"
          placeholder="Full Name*"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
        />
      </div>

      <div className="damac_contact_form_group">
        <label htmlFor="contact_email">Email Address</label>
        <input
          type="email"
          id="contact_email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="damac_contact_form_column">
      {/* Moved Requirement inside this column */}
      <div className="damac_contact_form_group">
        <label htmlFor="contact_unit_type">Requirement</label>
        <select
          id="contact_unit_type"
          value={formData.interestedUnitType}
          onChange={(e) => setFormData({ ...formData, interestedUnitType: e.target.value })}
          required
          className="damac_contact_select"
        >
          <option value="Studio">Brochure</option>
          <option value="1 Bedroom">Payment Plan</option>
          <option value="2 Bedroom">Floor Plan</option>
          <option value="3 Bedroom">Others</option>
        </select>
      </div>

      <div className="damac_contact_form_group">
        <label htmlFor="contact_telephone">Phone Number</label>
        <div className="damac_contact_phone_wrapper">
          <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
          <input
            type="tel"
            id="contact_telephone"
            placeholder="Phone Number*"
            value={formData.telephone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
    </div>

          <div className="damac_contact_consent_group">
            <input
              type="checkbox"
              id="contact_consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              required
            />
            <label htmlFor="contact_consent">
              I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products and offers, regardless of my DNC/NDNC registration.
            </label>
          </div>


          <button
            type="submit"
            className="damac_contact_submit_btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
}