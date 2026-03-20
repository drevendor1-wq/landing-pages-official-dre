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
    interestedUnitType: "",
  });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setPhoneCode(code);
    };
    detectCountry();

    // Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from(".animate-text", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
      gsap.from(formCardRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${phoneCode}${formData.telephone}`,
          unitType: formData.interestedUnitType,
          message: `Enquiry: DAMAC NINE TOWER ELMS LONDON`,
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
    <section id="contact" className="premium_contact_section" ref={sectionRef}>
      <div className="container">
        <div className="contact_grid">
          
          {/* Left Side: Content */}
          <div className="contact_info">
            <span className="gold_eyebrow animate-text">Private Inquiry</span>
            <h2 className="contact_heading animate-text">Interested in <br/>Nine Elms Tower?</h2>
            <p className="contact_description animate-text">
              Request a private consultation to receive exclusive pricing, 
              bespoke floor plans, and current availability.
            </p>

            <div className="checklist animate-text">
              {[
                "No obligation",
                "No sales pressure",
                "Personalized consultation"
              ].map((item, i) => (
                <div key={i} className="checklist_item">
                  <div className="check_icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c5a368" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="form_card_wrapper" ref={formCardRef}>
            <div className="form_card">
              <form onSubmit={handleSubmit}>
                <div className="input_group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  <label>Full Name*</label>
                </div>

                <div className="input_group">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label>Email Address*</label>
                </div>

                <div className="phone_row">
                  <div className="dropdown_wrapper">
                    <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                  </div>
                  <div className="input_group phone_input">
                    <input
                      type="tel"
                      required
                      placeholder=" "
                      value={formData.telephone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                    />
                    <label>Phone Number*</label>
                  </div>
                </div>

                <div className="input_group">
                  <select
                    required
                    value={formData.interestedUnitType}
                    onChange={(e) => setFormData({ ...formData, interestedUnitType: e.target.value })}
                  >
                    <option value="" disabled hidden>Select Requirement</option>
                    <option value="Brochure">Download Brochure</option>
                    <option value="Floor Plan">View Floor Plans</option>
                    <option value="Payment Plan">Payment Schedule</option>
                    <option value="Others">General Inquiry</option>
                  </select>
                </div>

                <div className="consent_wrapper">
                  <label className="custom_checkbox">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      required
                    />
                    <span className="checkmark"></span>
                    <p>I authorize company representatives to reach out via Call, SMS, or WhatsApp regarding Damac products.</p>
                  </label>
                </div>

                <button type="submit" className="submit_btn" disabled={isSubmitting}>
                  {isSubmitting ? "SUBMITTING" : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .premium_contact_section {
          background: #0a0a0a;
          padding: 120px 0;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        .contact_grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .gold_eyebrow {
          color: #c5a368;
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
          display: block;
        }

        .contact_heading {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .contact_description {
          color: #aaa;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .checklist { display: flex; flex-direction: column; gap: 15px; }
        .checklist_item { display: flex; align-items: center; gap: 12px; color: #ddd; font-size: 15px; }
        .check_icon { width: 24px; height: 24px; border: 1px solid #c5a368; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

        /* Form Card Styling */
        .form_card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          padding: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .input_group { position: relative; margin-bottom: 30px; }
        
        .input_group input, .input_group select {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 0;
          color: #fff;
          font-size: 16px;
          outline: none;
          transition: 0.3s;
        }

        .input_group label {
          position: absolute;
          left: 0;
          top: 12px;
          color: #666;
          pointer-events: none;
          transition: 0.3s;
        }

        /* Floating Label Effect */
        .input_group input:focus ~ label,
        .input_group input:not(:placeholder-shown) ~ label {
          top: -12px;
          font-size: 12px;
          color: #c5a368;
        }

        .input_group input:focus { border-bottom: 1px solid #c5a368; }

        .phone_row { display: flex; gap: 15px; }
        .dropdown_wrapper { width: 100px; }
        .phone_input { flex: 1; }

        .consent_wrapper { margin-bottom: 35px; }
        
        .custom_checkbox {
          display: flex;
          gap: 12px;
          cursor: pointer;
          font-size: 12px;
          color: #888;
          line-height: 1.4;
        }

        .custom_checkbox input { display: none; }
        .checkmark {
          min-width: 18px;
          height: 18px;
          border: 1px solid #444;
          position: relative;
          transition: 0.3s;
        }

        .custom_checkbox input:checked + .checkmark { background: #c5a368; border-color: #c5a368; }
        .custom_checkbox input:checked + .checkmark::after {
          content: '✓';
          position: absolute;
          color: #000;
          font-size: 12px;
          left: 3px;
          top: 0;
        }

        .submit_btn {
          width: 100%;
          background: #c5a368;
          color: #000;
          padding: 18px;
          font-weight: 700;
          letter-spacing: 2px;
          border: none;
          cursor: pointer;
          transition: 0.4s;
        }

        .submit_btn:hover { background: #fff; letter-spacing: 4px; }
        .submit_btn:disabled { background: #444; color: #888; cursor: not-allowed; }

        @media (max-width: 968px) {
          .contact_grid { grid-template-columns: 1fr; gap: 60px; }
          .contact_info { text-align: center; }
          .checklist { align-items: center; }
          .form_card { padding: 30px; }
          .contact_heading { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}