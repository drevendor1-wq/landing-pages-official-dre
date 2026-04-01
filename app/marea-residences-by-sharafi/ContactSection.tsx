"use client";

import { useState, useRef, useEffect } from "react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ fullName: "", email: "", telephone: "" });
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
      // Sophisticated slide-in for the form side
      gsap.from(".form_side_inner", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      });
      
      // Scale effect for the visual side
      gsap.from(".visual_side_img", {
        scale: 1.2,
        duration: 2.5,
        ease: "power2.out",
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${phoneCode}${formData.telephone}`,
          message: `Enquiry For: Marea Residences | Dubai Islands`,
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
    <section id="contact" className="zenith_contact_grid" ref={sectionRef}>
      
      {/* VISUAL SIDE - High Fashion/Interior Shot */}
      <div className="visual_side">
        <div className="visual_side_img">
          <Image 
            src="/images/marea-residences/T6.jpg" 
            alt="Marea Luxury Interior" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="visual_overlay">
        </div>
      </div>

      {/* FORM SIDE - Minimalist Concierge */}
      <div className="form_side">
        <div className="form_side_inner">
          <div className="header_group">
            <span className="zenith_eyebrow">GET IN TOUCH</span>
            <h2 className="zenith_title">
              Interested in <br/> <span className="cursive_accent">Marea Residences?</span>
            </h2>
            <p className="zenith_subtitle">
              Request Pricing, Floor Plans, and a Private Presentation at our Dubai Islands.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="zenith_form">
            <div className="input_row">
               <div className="zenith_field">
                 <input 
                   type="text" 
                   placeholder="Your Full Name" 
                   value={formData.fullName}
                   onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                   required 
                 />
                 <div className="line_anim"></div>
               </div>
               
               <div className="zenith_field">
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   required 
                 />
                 <div className="line_anim"></div>
               </div>
            </div>

            <div className="zenith_field full">
              <div className="phone_wrap">
                <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.telephone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required 
                />
              </div>
              <div className="line_anim"></div>
            </div>

            <div className="consent_wrap">
              <label className="custom_check">
                <input 
                  type="checkbox" 
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  required 
                />
                <span className="checkmark"></span>
                <p>I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products and offers, regardless of my DNC/NDNC registration.</p>
              </label>
            </div>

            <button type="submit" className="zenith_submit" disabled={isSubmitting}>
               <span>{isSubmitting ? "SUBMITTING." : "SUBMIT"}</span>
               <div className="btn_bg"></div>
            </button>
          </form>

          <div className="form_footer">
             <span>ESTIMATED HANDOVER Q3 2027</span>
             <div className="sep"></div>
             <span>DEIRA DISTRICT, DUBAI ISLANDS</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Birthstone&family=Inter:wght@300;400;700;800&display=swap');

        .zenith_contact_grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          min-height: 100vh;
          background: #ffffff;
        }

        /* VISUAL SIDE */
        .visual_side { position: relative; overflow: hidden; }
        .visual_side_img { position: relative; width: 100%; height: 100%; transition: transform 0.8s ease-out; }
        .visual_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,43,60,0.8), transparent);
          display: flex;
          align-items: flex-end;
          padding: 60px;
        }
        .coord { color: rgba(255,255,255,0.5); font-size: 10px; letter-spacing: 4px; }
        .vision_text { color: #fff; font-size: 24px; font-weight: 300; letter-spacing: 8px; margin-top: 15px; }

        /* FORM SIDE */
        .form_side { display: flex; align-items: center; justify-content: center; padding: 80px; background: #fafafa; }
        .form_side_inner { max-width: 600px; width: 100%; }
        
        .zenith_eyebrow { font-size: 10px; letter-spacing: 6px; color: #89a8b2; font-weight: 700; display: block; margin-bottom: 20px; }
        .zenith_title { font-family: 'Inter', sans-serif; font-size: 56px; font-weight: 800; line-height: 1; color: #1a2b3c; letter-spacing: -2px; }
        .cursive_accent { font-family: 'Birthstone', cursive; color: #4a7c92; font-size: 1.3em; font-weight: 400; }
        .zenith_subtitle { font-size: 16px; color: #666; margin-top: 30px; line-height: 1.6; }

        /* FORM ELEMENTS */
        .zenith_form { margin-top: 60px; }
        .input_row { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .zenith_field { position: relative; padding-bottom: 10px; }
        .zenith_field input {
          width: 100%; border: none; background: transparent; padding: 10px 0;
          font-size: 16px; outline: none; color: #1a2b3c; font-family: 'Inter', sans-serif;
        }
        .line_anim { position: absolute; bottom: 0; left: 0; width: 100%; height: 1px; background: #e0e0e0; transition: 0.4s; }
        .zenith_field input:focus + .line_anim { background: #4a7c92; height: 2px; }
        
        .phone_wrap { display: flex; gap: 15px; align-items: center; }

        .consent_wrap { margin: 40px 0; }
        .custom_check { display: flex; gap: 15px; cursor: pointer; align-items: flex-start; }
        .custom_check input { display: none; }
       /* 1. Ensure the checkmark is the container for the tick */
.checkmark { 
  min-width: 18px; 
  height: 18px; 
  border: 1px solid #ccc; 
  margin-top: 3px; 
  position: relative; 
  transition: all 0.3s ease;
  background: #fff;
}

/* 2. Style for the tick mark (the 'L' shape) */
.checkmark::after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* 3. Show the tick and change background when checked */
.custom_check input:checked + .checkmark { 
  background: #4a7c92; 
  border-color: #4a7c92; 
}

.custom_check input:checked + .checkmark::after {
  display: block;
}

/* 4. Optional: Add a hover effect for a premium feel */
.custom_check:hover .checkmark {
  border-color: #4a7c92;
}
        .custom_check input:checked + .checkmark { background: #4a7c92; border-color: #4a7c92; }
        .custom_check p { font-size: 12px; color: #888; line-height: 1.6; }

        /* SUBMIT BUTTON */
        .zenith_submit {
          width: 100%; padding: 25px; background: #1a2b3c; color: #fff; border: none;
          font-size: 12px; letter-spacing: 5px; font-weight: 700; cursor: pointer;
          position: relative; overflow: hidden; transition: 0.4s;
        }
        .zenith_submit:hover { letter-spacing: 7px; background: #4a7c92; }

        .form_footer { display: flex; align-items: center; gap: 20px; margin-top: 40px; font-size: 10px; color: #bbb; letter-spacing: 2px; font-weight: 700; }
        .sep { width: 4px; height: 4px; background: #ddd; border-radius: 50%; }

        /* MOBILE */
        @media (max-width: 1100px) {
          .zenith_contact_grid { grid-template-columns: 1fr; }
          .visual_side { height: 40vh; }
          .form_side { padding: 60px 30px; }
          .zenith_title { font-size: 42px; }
          .input_row { grid-template-columns: 1fr; gap: 30px; }
        }
      `}</style>
    </section>
  );
}