"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"; // Using motion/react as per your previous code
import { useRouter } from "next/navigation";
import { X, ShieldCheck } from "lucide-react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

const NakheelFixedMobileButton = () => {
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

  const togglePopup = () => setIsOpen(!isOpen);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      name: data.name,
      email: data.email,
      phone: `${phoneCode}${data.phone}`,
      message: `Enquiry for: Greenz Danube`,
      consent: isChecked
   };

    try {
      // 🔹 1. Google Sheets (existing API)
      const sheetPromise = fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      // 🔹 2. Zoho Forms submission
      const zohoPromise = fetch("/api/zoho-submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: `${phoneCode}${data.phone}`
    })
  });

  // ✅ Run both
  await Promise.allSettled([
    sheetPromise,
    zohoPromise
  ]);

  // ✅ Redirect
  window.location.href = "/thank-you";

} catch (error) {
  console.error("Submission failed:", error);
  alert("Inquiry failed. Please try again.");
}
finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Sticky Mobile CTA - Refined with Glassmorphism */}
      <div className="fixed bottom-0 left-0 right-0 z-10 md:hidden p-1 bg-green-500 backdrop-blur-lg border-t border-emerald-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <button
          onClick={togglePopup}
          className="w-full text-white py-4 rounded-lg font-bold text-xs uppercase tracking-[0.2em] shadow-xl active:scale-[0.96] transition-all"
        >
          Explore Pricing & Availability
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
              className="fixed inset-0 bg-emerald-950/40 backdrop-blur-md z-[60]"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-[70] flex items-end justify-center px-0 md:hidden"
            >
              <div className="relative w-full bg-white rounded-t-[2.5rem] shadow-2xl p-8 pb-12 overflow-hidden border-t border-emerald-50">
                
                {/* Visual Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-emerald-100 rounded-full mt-3 opacity-50"></div>

                {/* Close Button */}
                <button
                  onClick={togglePopup}
                  className="absolute top-6 right-6 p-2 bg-emerald-50 text-emerald-900 rounded-full transition"
                >
                  <X size={20} />
                </button>

                {/* Header */}
                <div className="mt-4 mb-8">
                  <span className="text-green-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">
                    Exclusive Access
                  </span>
                  <h2 className="text-3xl font-serif text-black tracking-tighter leading-none">
                    Explore Pricing & Availability<br /><span className="text-green-500 font-light text-[19px]">Greenz by Danube</span>
                  </h2>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <input
                      required
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition text-sm font-medium"
                    />

                    <input
                      required
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition text-sm font-medium"
                    />

                    <div className="flex bg-emerald-50/50 border border-emerald-100 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition">
                      <CountryPhoneDropdown
                        value={phoneCode || "+971"}
                        onChange={setPhoneCode}
                      />
                      <input
                        required
                        value={data.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-transparent px-3 py-4 outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3 text-[11px] text-zinc-500 leading-tight py-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      required
                      className="mt-0.5 accent-emerald-700 h-4 w-4"
                    />
                    <p>
                      I agree to receive updates via Call, WhatsApp, or Email regarding Bay Villas.
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 bg-green-500 text-white py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-900 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isLoading ? "Submitting" : "Submit"}
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

export default NakheelFixedMobileButton;