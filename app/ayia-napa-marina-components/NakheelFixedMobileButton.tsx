"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const NakheelFixedMobileButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [phoneCode, setPhoneCode] = useState<string | null>(null);

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const router = useRouter();

  const togglePopup = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      setData({ name: "", email: "", phone: "" });

      const detectCountry = async () => {
        const code = await detectCountryCode();
        setPhoneCode(code);
      };

      detectCountry();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setData((prev) => ({ ...prev, phone: digitsOnly }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        ...data,
        phone: `${phoneCode ?? ""}${data.phone}`,
        consent: isChecked,
        message: "Enquiry For: Eighteen Islamabad | ORA Developers",
      };

      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 💎 MOBILE CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-10 md:hidden px-3 pb-3">
        <div className="backdrop-blur-xl bg-black/80 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.15)]">
          <button
            onClick={togglePopup}
            className="w-full py-4 text-white text-[11px] uppercase tracking-[0.3em] active:scale-95 transition"
          >
            INTERESTED? LET'S CONNECT
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={togglePopup}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
            />

            {/* 💎 BOTTOM SHEET */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 z-[70] md:hidden"
            >
              <div className="relative w-full bg-[#020617] rounded-t-[2.5rem] p-6 pb-10 border-t border-white/10 shadow-[0_-20px_80px_rgba(0,0,0,0.8)] text-white">

                {/* HANDLE */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-white/20 rounded-full" />

                {/* CLOSE */}
                <button
                  onClick={togglePopup}
                  className="absolute top-5 right-5 text-white/80"
                >
                  <X size={20} />
                </button>

                {/* HEADER */}
                <div className="mt-6 mb-8">
                  <span className="text-[#38bdf8] tracking-[0.5em] uppercase text-[10px] block mb-2">
                    Exclusive Access
                  </span>

                  <h2 className="text-2xl font-serif text-white leading-tight">
                    Explore Pricing & Availability
                  </h2>

                  <p className="text-white/60 text-xs mt-2">
                    AYIA NAPA MARINA | ORA DEVELOPERS
                  </p>
                </div>

                {/* FORM */}
                <form className="space-y-4" onSubmit={handleSubmit}>

                  <input
                    required
                    value={data.name}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/30 outline-none text-sm"
                  />

                  <input
                    required
                    value={data.email}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/30 outline-none text-sm"
                  />

                  <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#38bdf8]">
                    <CountryPhoneDropdown
                      value={phoneCode || "+971"}
                      onChange={(val: string) => setPhoneCode(val)}
                    />
                    <input
                      required
                      value={data.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-transparent px-3 py-4 text-white placeholder:text-white/40 outline-none text-sm"
                    />
                  </div>

                  {/* CONSENT */}
                  <div className="flex items-start gap-3 text-[11px] text-white/60">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      required
                      className="mt-0.5 accent-[#38bdf8]"
                    />
                    <p>
                      I agree to receive updates via Call, WhatsApp, or Email.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="border border-[#38bdf8]/40">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-5 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-[#38bdf8] hover:text-black transition-all"
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </div>

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