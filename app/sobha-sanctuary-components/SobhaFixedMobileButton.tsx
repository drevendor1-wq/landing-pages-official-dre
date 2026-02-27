"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

const SobhaFixedMobileButton = () => {
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

  useEffect(() => {
    if (isOpen) {
      setData({ name: "", email: "", phone: "" });

      const detectCountry = async () => {
        const code = await detectCountryCode();
        setPhoneCode(code);
      };

      detectCountry();
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setData({ ...data, phone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        ...data,
        phone: `${phoneCode}${data.phone}`,
        consent: isChecked,
        message: "Enquiry for Sobha Sanctuary",
      };

      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push(`/thank-you`);
      } else {
        const errorData = await response.json();
        alert(
          `Submission failed: ${
            errorData.message || "Something went wrong"
          }`
        );
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
      {/* Fixed Mobile Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-lg">
        <button
          onClick={togglePopup}
          className="w-full mt-4 bg-black hover:bg-neutral-800 text-white py-2 rounded-xl font-semibold text-lg shadow-lg transition active:scale-[0.98] disabled:opacity-60"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* Floating Card Modal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] flex items-end justify-center px-4 pb-6 md:hidden"
            >
              <div className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 max-h-[90vh] overflow-y-auto">

                {/* Orange Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-2xl"></div>

                {/* Close Button */}
                <button
                  onClick={togglePopup}
                  className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition"
                >
                  ✕
                </button>

                {/* Header */}
                <div className="mt-4 mb-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 uppercase">
                    Get Costing Details
                  </h2>
                  <p className="text-gray-500 text-lg mt-1">
                    Sobha Sanctuary
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  
                  {/* Name */}
                  <input
                    required
                    value={data.name}
                    onChange={(e) =>
                      setData({ ...data, name: e.target.value })
                    }
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                  />

                  {/* Email */}
                  <input
                    required
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                  />

                  {/* Phone */}
                  <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-orange-200">
                    <CountryPhoneDropdown
                      value={phoneCode || "+971"}
                      onChange={setPhoneCode}
                    />
                    <input
                      required
                      value={data.phone}
                      onChange={(e) =>
                        handlePhoneChange(e.target.value)
                      }
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-3 py-3 outline-none"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 text-xs text-gray-600 mt-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) =>
                        setIsChecked(e.target.checked)
                      }
                      required
                      className="mt-1 accent-orange-500"
                    />
                    <span>
                     I authorize company representatives to reach out via Call, SMS, Email, or WhatsApp.
                    </span>
                  </div>

                  {/* CTA */}
                  <button
  type="submit"
  disabled={isLoading}
  className="w-full mt-4 bg-black hover:bg-neutral-800 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition active:scale-[0.98] disabled:opacity-60"
>
  {isLoading ? "Submitting..." : "SUBMIT"}
</button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SobhaFixedMobileButton;