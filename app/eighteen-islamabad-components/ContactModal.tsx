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
        if (modalRef.current) {
          gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        }

        if (cardRef.current) {
          gsap.fromTo(
            cardRef.current,
            { y: 15, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
          );
        }
      }, modalRef);

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
        className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
      >
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md bg-black p-10 md:p-14 border border-white/10"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:text-[#22c55e] transition"
          >
            <X size={20} strokeWidth={1} />
          </button>

          {/* HEADER */}
          <div className="mb-12">
            <p className="text-[#22c55e] text-[9px] tracking-[0.6em] uppercase font-bold mb-2">
              Inquiry
            </p>

            <h2 className="text-3xl font-serif text-white">
              {buttonText}
            </h2>

            <p className="text-white/30 text-[10px] uppercase tracking-widest mt-4 border-l border-[#22c55e] pl-4">
              {floorPlanTitle || "ZED Sheikh Zayed"}
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-7" onSubmit={handleSubmit}>
            
            {/* NAME */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-[#22c55e] transition">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-zinc-600 py-1 focus:border-[#22c55e] focus:outline-none text-sm font-light"
                value={enquiryData.name}
                onChange={(e) =>
                  setEnquiryData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-[#22c55e] transition">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-zinc-600 py-1 focus:border-[#22c55e] focus:outline-none text-sm font-light"
                value={enquiryData.email}
                onChange={(e) =>
                  setEnquiryData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>

            {/* PHONE */}
            <div className="space-y-1 group">
              <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-[#22c55e] transition">
                Phone
              </label>
              <div className="flex border-b border-zinc-600 group-focus-within:border-[#22c55e] transition">
                <CountryPhoneDropdown
                  value={phoneCode || "+971"}
                  onChange={(val: string) => setPhoneCode(val)}
                />
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

            {/* CONSENT */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mt-0.5 accent-[#22c55e] border-zinc-200 rounded-none"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <span className="text-[8px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                I authorize company representatives to contact me via Call, SMS, Email, or WhatsApp.
              </span>
            </div>

            {/* SUBMIT */}
            <div className="bg-[#22c55e]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-black py-4 text-[10px] font-bold uppercase transition-all duration-500 flex items-center justify-center gap-2 group"
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