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
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.message || "Something went wrong"}`);
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
      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-10 md:hidden p-2 border-t bg-[#22c55e] border-[#22c55e]">
        <button
          onClick={togglePopup}
          className="w-full bg-[#22c55e] text-black py-4 rounded-lg font-bold text-xs uppercase tracking-[0.2em] active:scale-[0.96] transition-all"
        >
          INTERESTED? LET'S CONNECT
        </button>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-[70] flex items-end justify-center md:hidden"
            >
              <div className="relative w-full bg-black rounded-t-[2.5rem] p-8 pb-12 border-t border-white/10">

                {/* HANDLE */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/20 rounded-full" />

                {/* CLOSE */}
                <button
                  onClick={togglePopup}
                  className="absolute top-6 right-6 text-white hover:text-[#22c55e]"
                >
                  <X size={20} />
                </button>

                {/* HEADER */}
                <div className="mt-6 mb-8">
                  <span className="text-[#22c55e] font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">
                    Exclusive Access
                  </span>

                  <h2 className="text-2xl font-serif text-white leading-tight">
                    Explore Pricing & Availability
                  </h2>

                  <p className="text-white/50 text-xs mt-2">
                    EIGHTEEN ISLAMABAD | ORA DEVELOPERS
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]/30 outline-none text-sm text-white"
                  />

                  <input
                    required
                    value={data.email}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]/30 outline-none text-sm text-white"
                  />

                  <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#22c55e]">
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
                      className="w-full bg-transparent px-3 py-4 outline-none text-sm text-white"
                    />
                  </div>

                  {/* CONSENT */}
                  <div className="flex items-start gap-3 text-[11px] text-white/50">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      required
                      className="mt-0.5 accent-[#22c55e]"
                    />
                    <p>
                      I agree to receive updates via Call, WhatsApp, or Email.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-[#22c55e]">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-5 text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-[#22c55e] transition-all flex justify-center"
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