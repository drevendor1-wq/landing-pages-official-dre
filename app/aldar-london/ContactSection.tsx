"use client";

import { useState, useEffect, useRef } from "react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    detectCountryCode().then(setPhoneCode);

    const ctx = gsap.context(() => {
      gsap.from(".fade_up", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${phoneCode}${formData.telephone}`,
          message: `Enquiry for: Aldar London`,
          consent: consentChecked,
        }),
      });

      if (res.ok) window.location.href = "/thank-you";
      else alert("Error submitting form.");
    } catch {
      alert("Error submitting form.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact_section" ref={sectionRef}>
      <div className="container">

        {/* HEADER */}
        <div className="contact_header fade_up">
          <span className="eyebrow">CONTACT</span>
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p>
            Interested in ALDAR LONDON PROJECT? Get exclusive Details, Pricing,
            Floor Plans, and Availability delivered to your inbox.
          </p>
        </div>

        {/* GRID */}
        <div className="contact_grid">

          {/* LEFT SIDE */}
          <div className="contact_info fade_up">
            <h3>
              ALDAR <br />
              <span>LONDON</span>
            </h3>

            <div className="divider"></div>

            <p className="info_text">
              Speak with our property specialists to explore premium investment opportunities.
            </p>
          </div>

          {/* FORM */}
          <form className="contact_form fade_up" onSubmit={handleSubmit}>

            <div className="field_row">
              <input
                type="text"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={(e)=>setFormData({...formData, fullName:e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                required
              />
            </div>

            <div className="phone_row">
              <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode}/>
              <input
                type="tel"
                placeholder="Phone Number*"
                value={formData.telephone}
                onChange={(e)=>setFormData({...formData, telephone:e.target.value})}
                required
              />
            </div>

            {/* CONSENT */}
            <label className="consent">
  <input
    type="checkbox"
    checked={consentChecked}
    onChange={(e)=>setConsentChecked(e.target.checked)}
  />
  <span className="checkmark"></span>
  <p>
    I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products.
  </p>
</label>

            {/* SUBMIT */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "PROCESSING..." : "SUBMIT"}
            </button>

          </form>
        </div>
      </div>

      <style jsx>{`
        .contact_section {
          padding: 140px 20px;
          background: linear-gradient(to bottom, #f7f9fb, #fff);
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        /* HEADER */
        .contact_header {
          text-align: center;
          margin-bottom: 80px;
        }

        .eyebrow {
          letter-spacing: 5px;
          font-size: 11px;
          color: #c5a35d;
        }

        h2 {
          font-size: 60px;
          font-family: "Playfair Display", serif;
          font-weight: 300;
        }

        h2 span {
          color: #003366;
          font-style: italic;
        }

        .contact_header p {
          max-width: 600px;
          margin: 20px auto;
          color: #777;
        }

        /* GRID */
        .contact_grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
        }

        /* LEFT */
        .contact_info h3 {
          font-size: 40px;
          font-weight: 800;
        }

        .contact_info span {
          color: #003366;
          font-family: serif;
          font-weight: 400;
        }

        .divider {
          width: 50px;
          height: 2px;
          background:#003366; 
          margin: 20px 0;
        }

        .info_text {
          color: #666;
          margin-bottom: 40px;
        }

        .whatsapp_float {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25d366;
          color: #fff;
          padding: 12px 18px;
          border-radius: 50px;
          font-size: 13px;
          transition: 0.3s;
        }

        .whatsapp_float:hover {
          transform: scale(1.05);
        }

        /* FORM */
        .contact_form input {
          width: 100%;
          padding: 18px;
          border: 1px solid #eee;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .field_row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .phone_row {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 15px;
        }

        /* CONSENT */
        .consent {
          display: flex;
          gap: 10px;
          font-size: 12px;
          color: #777;
          margin: 20px 0;
        }

        .consent input { display: none; }

        .consent span {
          width: 18px;
          height: 18px;
          border: 1px solid #ccc;
        }

        .consent input:checked + span {
          background: #003366;
        }

        /* BUTTON */
        button {
          width: 100%;
          padding: 20px;
          background: #003366;
          color: #fff;
          letter-spacing: 3px;
          font-size: 12px;
        }

       .consent {
  display: flex;
  gap: 12px;
  cursor: pointer;
  align-items: flex-start;
  line-height: 1.5;
}

/* hide default */
.consent input {
  display: none;
}

/* checkbox */
.checkmark {
  flex-shrink: 0; /* 🔥 prevents shrinking */
  width: 20px;
  height: 20px;
  border: 1.5px solid #003366;
  border-radius: 4px;
  position: relative;
  margin-top: 3px; /* 🔥 aligns with first text line */
  transition: all 0.25s ease;
}

/* tick */
.checkmark::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0);
  transition: 0.25s ease;
}

/* checked */
.consent input:checked + .checkmark {
  background: #003366;
  border-color: #003366;
}

.consent input:checked + .checkmark::after {
  transform: rotate(45deg) scale(1);
}

/* text */
.consent p {
  font-size: 13px;
  color: #666;
  margin: 0;
  flex: 1; /* 🔥 allows wrapping nicely */
}


        /* MOBILE */
        @media (max-width: 768px) {
          .contact_grid {
            grid-template-columns: 1fr;
          }

          h2 {
            font-size: 36px;
          }

          .field_row {
            grid-template-columns: 1fr;
          }
              .consent {
    gap: 10px;
  }

  .checkmark {
    width: 18px;
    height: 18px;
    margin-top: 2px;
  }

  .checkmark::after {
    left: 5px;
    top: 2px;
  }

  .consent p {
    font-size: 12px;
    line-height: 1.5;
  }
        }
      `}</style>
    </section>
  );
}