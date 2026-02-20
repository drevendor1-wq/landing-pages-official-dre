"use client";
import type { Metadata } from "next";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";

const DamacFixedMobileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const router = useRouter();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          phone: `${phoneCode}${data.phone}`,
          consent: isChecked,
        }),
      });

      if (response.ok) {
        router.push("/damac-thank-you"); // Use Next.js router for smoother transitions
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Fixed Mobile Button - Visible only on small screens */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-black/90 backdrop-blur-md border-t border-blue-900/30">
        <button
          onClick={togglePopup}
          className="w-full bg-gradient-to-r from-[#001f3f] to-[#000000] text-white py-4 px-6 border border-blue-800/50 rounded-sm font-bold tracking-[0.2em] text-sm uppercase transition-all active:scale-95 shadow-[0_0_15px_rgba(0,31,63,0.5)]"
        >
          Get Costing Details
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={togglePopup}
              className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
            />

            {/* Slide-up Modal */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] text-white z-[70] rounded-t-3xl p-8 border-t border-blue-900/50 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button 
                onClick={togglePopup} 
                className="absolute top-6 right-6 text-blue-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-xl font-light tracking-widest mb-2 uppercase text-blue-100">
                GET COSTING DETAILS
              </h2>
              <p className="text-blue-400/60 text-xs mb-8 uppercase tracking-tighter">
                DAMAC ISLANDS 2
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-transparent border-b border-blue-900/50 py-3 focus:border-blue-400 outline-none transition-colors placeholder:text-gray-600 text-white" 
                    placeholder="FULL NAME" 
                  />
                </div>
                <div className="relative">
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-transparent border-b border-blue-900/50 py-3 focus:border-blue-400 outline-none transition-colors placeholder:text-gray-600 text-white" 
                    placeholder="EMAIL ADDRESS" 
                  />
                </div>
                <div className="relative border-b border-blue-900/50 focus-within:border-blue-400 transition-colors flex items-center">
                  <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                  <input 
                    required 
                    type="number" 
                    className="w-full bg-transparent border-blue-900/50 py-3 pl-2 focus:border-blue-400 outline-none transition-colors placeholder:text-gray-600 text-white" 
                    placeholder="PHONE NUMBER" 
                  />
                </div>

                 <div className="bwt_checkbox_group">
              <input
                type="checkbox"
                id="consent"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <label htmlFor="consent">
                I authorize company representatives to reach out via Call, SMS, Email, or WhatsApp.
              </label>
            </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-blue-700 hover:bg-blue-600 disabled:bg-blue-900 disabled:text-blue-300 text-white py-4 mt-4 font-black uppercase tracking-[0.3em] transition-all flex justify-center items-center shadow-lg shadow-blue-900/20"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      PROCESSING...
                    </span>
                  ) : "SUBMIT"}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DamacFixedMobileButton;