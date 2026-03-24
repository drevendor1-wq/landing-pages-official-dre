"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

export default function ContactModal({ isOpen, floorPlanTitle, onClose, buttonText = "ENQUIRE NOW" }: any) {
  const [enquiryData, setEnquiryData] = useState({ name: "", email: "", phone: "" });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      detectCountryCode().then(setPhoneCode);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md bg-[#0A0A0A] p-10 md:p-14 border border-white/5"
        >
          {/* Close Icon */}
          <button onClick={onClose} className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors">
            <X size={20} strokeWidth={1} />
          </button>

          {/* Minimal Header */}
          <div className="mb-12">
            <p className="text-[#D4AF37] text-[9px] tracking-[0.6em] uppercase font-bold mb-2">Inquiry</p>
            <h2 className="text-3xl font-serif italic text-white">{buttonText}</h2>
            <p className="text-white/30 text-[10px] uppercase tracking-widest mt-4 border-l border-[#D4AF37] pl-4">
              {floorPlanTitle || "ZED Sheikh Zayed"}
            </p>
          </div>

          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            {/* Minimal Underline Inputs */}
            {[
              { label: "Full Name", type: "text", key: "name" },
              { label: "Email Address", type: "email", key: "email" }
            ].map((field) => (
              <div key={field.key} className="relative group">
                <input
                  type={field.type}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-2 text-[9px] uppercase tracking-widest text-white/30 transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-4">
                  {field.label}
                </label>
              </div>
            ))}

            {/* Phone Input */}
            <div className="flex border-b border-white/10 focus-within:border-[#D4AF37] transition-all pb-1">
              <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent pl-3 focus:outline-none text-sm text-white placeholder:text-white/10"
              />
            </div>

            {/* Submit: Text-Based Button */}
            <button className="group flex items-center justify-between w-full pt-4 border-t border-white/5 hover:border-[#D4AF37] transition-colors duration-500">
              <span className="text-white text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-[#D4AF37] transition-colors">
                Send Request
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                <ArrowRight size={14} className="text-white group-hover:text-black transition-colors" />
              </div>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}