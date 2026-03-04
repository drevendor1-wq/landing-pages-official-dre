"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { X } from "lucide-react";
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
  const contentRef = useRef<HTMLDivElement>(null);

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
    if (isOpen && modalRef.current && contentRef.current) {
      document.body.style.overflow = "hidden";
      const ctx = gsap.context(() => {
        gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(
          contentRef.current,
          { scale: 0.95, y: 20, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: "power3.out", delay: 0.1 }
        );
      }, modalRef.current);
      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
        alert("Error submitting enquiry.");
      }
    } catch (error) {
      alert("Error submitting enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-sm" 
      onClick={onClose} 
      ref={modalRef}
    >
      <div 
        className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden rounded-sm" 
        onClick={(e) => e.stopPropagation()} 
        ref={contentRef}
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 p-2 text-emerald-900/50 hover:text-emerald-900 transition-colors z-50"
          onClick={onClose} 
          aria-label="Close"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-700 block mb-2">
              Exclusive Access
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-emerald-950 uppercase tracking-tight">
              {buttonText}
            </h2>
            <div className="w-12 h-[2px] bg-emerald-800 mx-auto mt-4"></div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-emerald-900/60">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-emerald-50/30 border border-emerald-100 focus:border-emerald-500 focus:outline-none transition-all text-sm"
                value={enquiryData.name}
                onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-emerald-900/60">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-emerald-50/30 border border-emerald-100 focus:border-emerald-500 focus:outline-none transition-all text-sm"
                value={enquiryData.email}
                onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold text-emerald-900/60">Phone Number</label>
              <div className="flex border border-emerald-100 focus-within:border-emerald-500 transition-all bg-emerald-50/30">
                <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-transparent focus:outline-none text-sm"
                  value={enquiryData.phone}
                  inputMode="numeric"
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 py-2">
              <div className="relative flex items-center h-5">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 border-emerald-200 rounded text-emerald-700 focus:ring-emerald-500 accent-emerald-800"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                />
              </div>
              <label htmlFor="consent" className="text-[10px] leading-relaxed text-emerald-900/70">
                I authorize company representatives to reach out via Call, SMS, Email, or WhatsApp.
              </label>
            </div>

            <div className="bg-emerald-950">
            <button 
              type="submit" 
              className="w-full text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-emerald-800 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Submit"}
            </button>
            </div>

            {/* Direct WhatsApp link */}
            <div className="pt-4 border-t border-emerald-50 text-center">
              <a
                href="https://wa.me/971505786682?text=Hello, I am interested in the Floor Plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-emerald-800 hover:text-emerald-600 transition-colors uppercase"
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={16} height={16} className="opacity-80" />
                Or WhatsApp us directly
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}