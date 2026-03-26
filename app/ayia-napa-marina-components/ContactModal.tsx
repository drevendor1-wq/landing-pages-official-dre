"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { X, ArrowRight } from "lucide-react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

interface FloorPlanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  floorPlanTitle?: string;
  buttonText?: string;
}

interface EnquiryData {
  name: string;
  email: string;
  phone: string;
}

export default function ContactModal({
  isOpen,
  floorPlanTitle,
  onClose,
  buttonText = "ENQUIRE NOW",
}: FloorPlanEnquiryModalProps) {

  const [enquiryData, setEnquiryData] = useState<EnquiryData>({
    name: "",
    email: "",
    phone: "",
  });

  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

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
          { y: 20, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      });

      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setEnquiryData((prev) => ({ ...prev, phone: digitsOnly }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...enquiryData,
          phone: `${phoneCode ?? ""}${enquiryData.phone}`,
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
      console.error(error);
      alert("Error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        ref={modalRef}
        className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md text-white"
      >
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md bg-[#020617]/90 backdrop-blur-2xl p-8 sm:p-10 md:p-14 border border-white/10 shadow-[0_0_80px_rgba(56,189,248,0.1)]"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition"
          >
            <X size={20} strokeWidth={1} />
          </button>

          {/* HEADER */}
          <div className="mb-10">
            <p className="text-[#38bdf8] text-[9px] tracking-[0.6em] uppercase font-semibold mb-2">
              Inquiry
            </p>

            <h2 className="text-3xl font-serif text-white">
              {buttonText}
            </h2>

            <p className="text-white/60 text-[10px] uppercase tracking-widest mt-4 border-l border-[#38bdf8] pl-4">
              {floorPlanTitle || "ZED Sheikh Zayed"}
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-7" onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-semibold text-white/60 group-focus-within:text-[#38bdf8] transition">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#38bdf8] focus:outline-none text-sm"
                value={enquiryData.name}
                onChange={(e) =>
                  setEnquiryData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-semibold text-white/60 group-focus-within:text-[#38bdf8] transition">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#38bdf8] focus:outline-none text-sm"
                value={enquiryData.email}
                onChange={(e) =>
                  setEnquiryData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>

            {/* PHONE */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-semibold text-white/60 group-focus-within:text-[#38bdf8] transition">
                Phone
              </label>
              <div className="flex border-b border-white/20 group-focus-within:border-[#38bdf8] transition">
                <CountryPhoneDropdown
                  value={phoneCode || "+971"}
                  onChange={(val: string) => setPhoneCode(val)}
                />
                <input
                  type="tel"
                  className="w-full bg-transparent py-2 pl-3 text-white focus:outline-none text-sm"
                  value={enquiryData.phone}
                  inputMode="numeric"
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* CONSENT */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mt-0.5 accent-[#38bdf8]"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <span className="text-[8px] text-white/60 uppercase tracking-widest leading-relaxed">
                I authorize company representatives to contact me via Call, SMS, Email, or WhatsApp.
              </span>
            </div>

            {/* SUBMIT */}
            <div className="border border-[#38bdf8]/40">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-white text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}