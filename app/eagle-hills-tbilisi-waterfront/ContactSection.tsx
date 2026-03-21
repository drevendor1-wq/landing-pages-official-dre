"use client";

import { useState, useEffect, useRef } from "react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AtelierContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
  });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);

  // Auto-detect country
  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setPhoneCode(code);
    };
    detectCountry();

    // GSAP Entrance Animations
    const ctx = gsap.context(() => {
      gsap.from(sidebarRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(formWrapperRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
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
          message: `Eagle Hills Tbilisi Waterfront`,
          consent: consentChecked,
        }),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="atelier_section" ref={sectionRef}>
      <div className="atelier_container">
        <div className="atelier_grid">
          
          {/* Left Side: Editorial Sidebar */}
          <div className="atelier_sidebar" ref={sidebarRef}>
            <div>
              <h2 className="atelier_side_title">
                EAGLE HILLS <br /> <br />
                <span>TBILISI WATER FRONT</span>
              </h2>
              <div className="atelier_divider"></div>
            </div>

            <div className="contact_meta">
               <div className="meta_item">
                <span className="meta_label">LOCATION</span>
                <span className="meta_value">Tbilisi, Georgia</span>
              </div>
              <div className="meta_item">
                <span className="meta_label">Availability</span>
                <span className="meta_value">Get in Touch to Know More</span>
              </div>
              <div className="meta_item">
                <span className="meta_label">CONSULTATION</span>
                <span className="meta_value">Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Premium Form */}
          <div className="atelier_form_wrapper" ref={formWrapperRef}>
            <header className="form_header">
              <h3 className="form_title">Interested in Tbilisi Water- Front?</h3>
              <p className="form_subtitle">
                Get exclusive Details, Pricing, Floor Plans, and Availability delivered to your inbox.
              </p>
            </header>

            <form className="atelier_form" onSubmit={handleSubmit}>
              <div className="field_row">
                <div className="atelier_field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div className="atelier_field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="atelier_field">
                <label>Mobile Number</label>
                <div className="phone_box">
                  <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    value={formData.telephone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="atelier_consent">
                <label className="checkbox_container">
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    required
                  />
                  <span className="checkmark"></span>
                  <p>
                    I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products.
                  </p>
                </label>
              </div>

              <button type="submit" className="atelier_submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  "PROCESSING..."
                ) : (
                  <>
                    SUBMIT
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      <style jsx>{`
        .atelier_section {
          background: #fff;
          padding: 120px 0;
          border-top: 1px solid #f0f0f0;
          font-family: 'Inter', sans-serif;
        }
        .atelier_container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .atelier_grid {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 100px;
        }
        
        /* Sidebar Styles */
        .atelier_sidebar {
          border-right: 1px solid #eee;
          padding-right: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .atelier_side_title {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 2px;
          line-height: 1.1;
          color: #111;
        }
        .atelier_side_title span {
          font-size: 23px;
          color: #c5a35d;
          font-weight: 200;
          font-family: serif;
        }
        .atelier_divider {
          width: 40px;
          height: 3px;
          background: #c5a35d;
          margin-top: 20px;
        }
        
        .contact_meta { margin-top: 80px; }
        .meta_item { margin-bottom: 35px; }
        .meta_label {
          display: block;
          font-size: 10px;
          font-weight: 800;
          color: #c5a35d;
          letter-spacing: 3px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .meta_value {
          font-size: 15px;
          color: #666;
          font-weight: 500;
        }

        /* Form Wrapper Styles */
        .form_header { margin-bottom: 50px; }
        .form_title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: -1px;
        }
        .form_subtitle {
          color: #888;
          font-size: 17px;
          line-height: 1.6;
          max-width: 800px;
        }

        /* Form Field Styles */
        .field_row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .atelier_field { margin-bottom: 30px; }
        .atelier_field label {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
          color: #111;
        }
        .atelier_field input {
          width: 100%;
          padding: 20px;
          background: #fcfcfc;
          border: 1px solid #efefef;
          font-size: 15px;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        .atelier_field input:focus {
          background: #fff;
          border-color: #c5a35d;
          box-shadow: 0 10px 20px rgba(0,0,0,0.02);
          outline: none;
        }
        
        .phone_box {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 15px;
        }
        
        /* Custom Checkbox */
        .atelier_consent { margin: 20px 0 40px; }
        .checkbox_container {
          display: flex;
          gap: 15px;
          cursor: pointer;
          align-items: flex-start;
        }
        .checkbox_container input { display: none; }
        .checkmark {
          min-width: 20px;
          height: 20px;
          border: 1px solid #ddd;
          background: #fff;
          position: relative;
          margin-top: 2px;
          transition: 0.2s;
        }
        .checkbox_container input:checked + .checkmark {
          background: #111;
          border-color: #111;
        }
        .checkbox_container input:checked + .checkmark::after {
          content: "✓";
          color: #fff;
          position: absolute;
          left: 4px;
          top: 0px;
          font-size: 12px;
        }
        .checkbox_container p {
          font-size: 12px;
          color: #888;
          line-height: 1.6;
        }

        /* Button Style */
        .atelier_submit {
          background: #111;
          color: #fff;
          border: none;
          padding: 25px 40px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 4px;
          cursor: pointer;
          transition: 0.4s;
          border-radius: 2px;
        }
        .atelier_submit:hover {
          background: #c5a35d;
          padding-left: 50px;
        }
        .atelier_submit:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        @media (max-width: 991px) {
          .atelier_grid { grid-template-columns: 1fr; gap: 60px; }
          .atelier_sidebar {
            border-right: none;
            border-bottom: 1px solid #eee;
            padding-bottom: 40px;
            padding-right: 0;
          }
          .field_row { grid-template-columns: 1fr; gap: 0; }
          .atelier_side_title { font-size: 28px; }
        }
      `}</style>
    </section>
  );
}