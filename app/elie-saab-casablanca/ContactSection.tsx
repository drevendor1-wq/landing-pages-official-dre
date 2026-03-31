"use client";

import { useState, useRef, useEffect } from "react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";
import { gsap } from "gsap";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
  });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setPhoneCode(code);
    };
    detectCountry();

    const ctx = gsap.context(() => {
      gsap.from(".premium_form_reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setFormData({ ...formData, telephone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${phoneCode}${formData.telephone}`,
          message: `Enquiry For: Elie Saab Casablanca`,
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="lux_contact_wrap" ref={sectionRef}>
      <div className="lux_container">
        
        {/* Editorial Header */}
        <div className="lux_form_header premium_form_reveal">
          <span className="lux_eyebrow">GET IN TOUCH</span>
          <h2 className="lux_form_title">
            INTERESTED IN <span className="serif_gold">Elie Saab</span> CASABLANCA?
          </h2>
          <p className="lux_form_subtitle">
            Experience the Art of Living. Request Pricing, Floor Plans, and a Private Presentation.
          </p>
        </div>

        {/* The Form Card */}
        <div className="lux_form_card premium_form_reveal">
          <form onSubmit={handleSubmit}>
            <div className="lux_input_grid">
              
              <div className="lux_field">
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="lux_field">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="lux_field full_width">
                <label>PHONE NUMBER</label>
                <div className="lux_phone_flex">
                  <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                  <input
                    type="tel"
                    placeholder="00 000 0000"
                    value={formData.telephone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="lux_consent_area">
              <label className="lux_checkbox">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  required
                />
                <span className="lux_box"></span>
                <p>
                 I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products and offers, regardless of my DNC/NDNC registration.
                </p>
              </label>
            </div>

            <button type="submit" className="lux_submit_btn" disabled={isSubmitting}>
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </form>

          {/* Quick Perks Footer inside Form */}
          <div className="lux_form_footer">
            <span>NO OBLIGATION</span>
            <div className="dot"></div>
            <span>PERSONALIZED CONSULTATION</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lux_contact_wrap {
          padding: 120px 0;
          background-color: #fdfcf9;
          color: #1a1a1a;
        }

        .lux_container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 25px;
        }

        .lux_form_header {
          text-align: center;
          margin-bottom: 60px;
        }

        .lux_eyebrow {
          font-size: 11px;
          letter-spacing: 5px;
          color: #b89562;
          font-weight: 700;
          display: block;
          margin-bottom: 15px;
        }

        .lux_form_title {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .serif_gold {
          font-family: serif;
          font-style: italic;
          color: #b89562;
          text-transform: none;
        }

        .lux_form_subtitle {
          font-size: 15px;
          color: #777;
          margin-top: 15px;
        }

        /* --- Form Card --- */
        .lux_form_card {
          background: #fff;
          padding: 60px;
          border: 1px solid #eeebe6;
          box-shadow: 0 40px 100px rgba(0,0,0,0.03);
        }

        .lux_input_grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .lux_field {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #eeebe6;
          padding-bottom: 8px;
          transition: border-color 0.3s;
        }

        .lux_field:focus-within {
          border-color: #b89562;
        }

        .lux_field label {
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 700;
          color: #b89562;
          margin-bottom: 10px;
        }

        .lux_field input {
          border: none;
          background: transparent;
          font-size: 16px;
          outline: none;
          color: #1a1a1a;
          padding: 5px 0;
        }

        .full_width { grid-column: span 2; }

        .lux_phone_flex {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        /* --- Custom Checkbox --- */
        .lux_consent_area {
          margin-bottom: 40px;
        }

        .lux_checkbox {
          display: flex;
          gap: 15px;
          cursor: pointer;
          align-items: flex-start;
        }

        .lux_checkbox input { display: none; }

        .lux_box {
          min-width: 18px;
          height: 18px;
          border: 1px solid #ddd;
          position: relative;
          margin-top: 2px;
        }

        .lux_checkbox input:checked + .lux_box {
          background: #b89562;
          border-color: #b89562;
        }

        .lux_checkbox p {
          font-size: 12px;
          color: #888;
          line-height: 1.6;
          text-align: left;
        }

        /* --- Button --- */
        .lux_submit_btn {
          width: 100%;
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 22px;
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.4s ease;
        }

        .lux_submit_btn:hover {
          background: #b89562;
        }

        .lux_form_footer {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          font-size: 10px;
          letter-spacing: 2px;
          color: #bbb;
        }

        .dot { width: 4px; height: 4px; background: #ddd; border-radius: 50%; }

        /* --- MOBILE --- */
        @media (max-width: 768px) {
          .lux_form_card { padding: 40px 25px; }
          .lux_input_grid { grid-template-columns: 1fr; gap: 30px; }
          .full_width { grid-column: span 1; }
          .lux_form_footer { flex-direction: column; gap: 8px; }
          .dot { display: none; }
          .lux_contact_wrap { padding: 80px 0; }
        }
      `}</style>
    </section>
  );
}