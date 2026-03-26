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

  const whatsappUrl = `https://wa.me/971527543245?text=${encodeURIComponent(
    "Hello, I am interested in Aldar London Projects. Could you share more details"
  )}`;

  useEffect(() => {
    if (isOpen) {
      setEnquiryData({ name: "", email: "", phone: "" });

      detectCountryCode().then(setPhoneCode);

      document.body.style.overflow = "hidden";

      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 60, scale: 0.95, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.7, ease: "expo.out" }
      );
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: enquiryData.name,
          email: enquiryData.email,
          phone: `${phoneCode}${enquiryData.phone}`,
          message: floorPlanTitle,
        }),
      });

      if (res.ok) window.location.href = "/thank-you";
      else alert("Error submitting form");
    } catch {
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" ref={modalRef} onClick={onClose}>
      <div className="modal" ref={contentRef} onClick={(e) => e.stopPropagation()}>
        
        {/* CLOSE */}
        <button className="close" onClick={onClose}>
          ✕
        </button>

        {/* HEADER */}
        <div className="header">
          <span className="badge">{buttonText}</span>
          <h2>
            Request <span>Details</span>
          </h2>

          <a href={whatsappUrl} target="_blank" className="whatsapp">
            <div className="wa_icon">
              <Image src="/images/whatsapp.png" alt="" width={18} height={18} />
            </div>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="form">
          
          <div className="field">
            <input
              type="text"
              required
              placeholder="Full Name"
              value={enquiryData.name}
              onChange={(e) =>
                setEnquiryData({ ...enquiryData, name: e.target.value })
              }
            />
          </div>

          <div className="field">
            <input
              type="email"
              required
              placeholder="Email Address"
              value={enquiryData.email}
              onChange={(e) =>
                setEnquiryData({ ...enquiryData, email: e.target.value })
              }
            />
          </div>

          <div className="phone">
            <CountryPhoneDropdown
              value={phoneCode || "+971"}
              onChange={setPhoneCode}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={enquiryData.phone}
              onChange={(e) =>
                setEnquiryData({ ...enquiryData, phone: e.target.value })
              }
              required
            />
          </div>

          <div className="consent">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <p>
              I agree to be contacted via Call, SMS, Email or WhatsApp.
            </p>
          </div>

          <button className="submit" disabled={isSubmitting}>
            {isSubmitting ? "PROCESSING..." : "SUBMIT ENQUIRY"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.7), #000);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal {
          width: 100%;
          max-width: 480px;
          padding: 50px 35px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          color: #fff;
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .badge {
          font-size: 10px;
          letter-spacing: 3px;
          color: #c5a35d;
        }

        h2 {
          font-size: 32px;
          font-weight: 800;
        }

        h2 span {
          font-family: serif;
          color: #c5a35d;
        }

        .whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
          font-size: 13px;
          color: #25d366;
        }

        .wa_icon {
          background: rgba(37,211,102,0.1);
          padding: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
          70% { box-shadow: 0 0 0 10px transparent; }
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .field input,
        .phone input {
          width: 100%;
          padding: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          border-radius: 8px;
        }

        .phone {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 10px;
        }

        .consent {
          display: flex;
          gap: 10px;
          font-size: 12px;
          color: #aaa;
        }

        .submit {
          margin-top: 10px;
          padding: 16px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #c5a35d, #fff);
          color: #000;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 480px) {
          .modal {
            padding: 35px 20px;
          }
        }
      `}</style>
    </div>
  );
}