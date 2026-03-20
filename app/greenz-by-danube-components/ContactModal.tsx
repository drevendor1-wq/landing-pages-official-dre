"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, Send } from "lucide-react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

interface FloorPlanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  floorPlanTitle?: string;
  buttonText?: string;
}

export default function ContactModal({
  isOpen,
  floorPlanTitle,
  onClose,
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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setEnquiryData({ name: "", email: "", phone: "" });

      const detectCountry = async () => {
        const code = await detectCountryCode();
        setPhoneCode(code);
      };

      detectCountry();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current && cardRef.current) {
      document.body.style.overflow = "hidden";

      const ctx = gsap.context(() => {
        gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(
          cardRef.current,
          { y: 15, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      }, modalRef.current);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setEnquiryData({ ...enquiryData, phone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: enquiryData.name,
      email: enquiryData.email,
      phone: `${phoneCode}${enquiryData.phone}`,
      message: `Enquiry for: ${floorPlanTitle || "Floor Plan"}`,
      consent: isChecked,
    };

    console.log("📤 FINAL PAYLOAD (Sheets) →", payload);

    // ✅ Correct Zoho format
    const zohoData = {
      data: {
        Name_First: enquiryData.name,
        Email: enquiryData.email,
        PhoneNumber: `${phoneCode}${enquiryData.phone}`,
        MultiLine: `Enquiry for: Greenz Danube`,
        DecisionBox: isChecked,
      },
    };

    console.log(" ZOHO DATA →", zohoData);

    try {
      // 🔹 1. Google Sheets
      const sheetPromise = fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // 🔹 2. Zoho
      const zohoResponse = await fetch(
        "https://forms.zohopublic.com/drehomesrealestate/form/GreenzbyDanubeTafrax/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(zohoData),
        }
      );

      const zohoResult = await zohoResponse.text();

      console.log("✅ ZOHO STATUS →", zohoResponse.status);
      console.log("✅ ZOHO RESPONSE →", zohoResult);

      // 🔥 Ensure Sheets completes
      await sheetPromise;

      // ✅ Redirect
      window.location.href = "/thank-you";

    } catch (error) {
      console.error("❌ ERROR →", error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-emerald-950/20 backdrop-blur-md"
      onClick={onClose}
      ref={modalRef}
    >
      <div
        className="relative w-full max-w-[420px] bg-white border border-emerald-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        ref={cardRef}
      >
        <div className="h-1 w-full bg-emerald-500" />

        <button
          className="absolute top-5 right-5 text-zinc-300 hover:text-emerald-500 transition-all z-20"
          onClick={onClose}
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="p-8 md:p-10">
          <div className="text-center mb-10">
            <span className="text-[8px] font-bold tracking-[0.5em] text-emerald-500 uppercase block mb-2">
              Greenz By Danube
            </span>
            <h2 className="text-2xl font-serif italic text-zinc-900 leading-tight">
              {buttonText}
            </h2>
            <div className="w-6 h-[1px] bg-emerald-200 mx-auto mt-4" />
          </div>

          <form className="space-y-7" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={enquiryData.name}
              onChange={(e) =>
                setEnquiryData({ ...enquiryData, name: e.target.value })
              }
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={enquiryData.email}
              onChange={(e) =>
                setEnquiryData({ ...enquiryData, email: e.target.value })
              }
              required
            />

            {/* Phone */}
            <div className="flex">
              <CountryPhoneDropdown
                value={phoneCode || "+971"}
                onChange={setPhoneCode}
              />
              <input
                type="tel"
                value={enquiryData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                required
              />
            </div>

            {/* Consent */}
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              I agree to be contacted
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
              <Send size={12} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}