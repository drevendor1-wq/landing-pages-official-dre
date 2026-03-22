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
  const [enquiryData, setEnquiryData] = useState({ name: "", email: "", phone: "" });
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
    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...enquiryData,
          phone: `${phoneCode}${enquiryData.phone}`,
          message: `Enquiry for: ${floorPlanTitle || "Floor Plan"}`,
          consent: isChecked,
        }),
      });
      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error.");
      }
    } catch (error) {
      alert("Error.");
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
        {/* Top Accent Bar */}
        <div className="h-1 w-full bg-emerald-500" />

        {/* Close Button */}
        <button 
          className="absolute top-5 right-5 text-zinc-300 hover:text-emerald-500 transition-all z-20"
          onClick={onClose}
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="p-8 md:p-10">
          {/* Minimal Header */}
          <div className="text-center mb-10">
            <span className="text-[9px] font-bold tracking-[0.5em] text-emerald-500 uppercase block mb-2">
              TIERRA VIVA MARBELLA BY DAR GLOBAL
            </span>
            <h2 className="text-2xl font-serif italic text-zinc-900 leading-tight">
              {buttonText}
            </h2>
            <div className="w-6 h-[1px] bg-emerald-200 mx-auto mt-4" />
          </div>

          <form className="space-y-7" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">Full Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-zinc-100 py-1 focus:border-emerald-500 focus:outline-none transition-all text-sm font-light"
                value={enquiryData.name}
                onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-zinc-100 py-1 focus:border-emerald-500 focus:outline-none transition-all text-sm font-light"
                value={enquiryData.email}
                onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                required
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">Phone</label>
              <div className="flex border-b border-zinc-100 group-focus-within:border-emerald-500 transition-all">
                <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                <input
                  type="tel"
                  className="w-full bg-transparent py-1 pl-3 focus:outline-none text-sm"
                  value={enquiryData.phone}
                  inputMode="numeric"
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Compact Consent */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mt-0.5 accent-emerald-500 border-zinc-200 rounded-none"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <span className="text-[8px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                I authorize company representatives to reach out via Call, SMS, Email, or WhatsApp.
              </span>
            </div>

            <div className="bg-green-500">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full text-white py-4 text-[10px] font-light uppercase hover:bg-emerald-600 transition-all duration-500 flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <Send size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}