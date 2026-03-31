"use client"
import React, { useState, useEffect } from 'react';
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { X, Loader2, ArrowRight } from 'lucide-react';
import { useRouter } from "next/navigation";
import { detectCountryCode } from "../utils/countryDetection";

const TimedPopUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [phoneCode, setPhoneCode] = useState<string> ("+971"); 
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const code = await detectCountryCode();
        if (code) setPhoneCode(code);
      } catch (error) {
        console.error("Country detection failed", error);
      }
    };
    fetchCountry();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
        document.body.style.overflow = "hidden";
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    document.body.style.overflow = "unset";
  };

  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const payload = { ...data, phone: `${phoneCode}${data.phone}`, consent: isChecked, message: "Enquiry for Sobha Sanctuary" };
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) { router.push(`/thank-you`); }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Container: Reduced mobile width to 300px and max-height to 80vh */}
      <div className="relative bg-white w-full max-w-[300px] md:max-w-4xl flex flex-col md:flex-row overflow-hidden rounded-lg md:rounded-sm shadow-2xl max-h-[80vh] md:max-h-[90vh]">
        
        {/* Minimized Close Button for Mobile */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 z-[60] p-1 bg-white hover:bg-orange-600 hover:text-white transition-all rounded-full shadow-md border border-gray-100 md:top-3 md:right-3 md:p-2"
        >
          <X className="w-3.5 h-3.5 md:w-5 md:h-5" />
        </button>

        {/* 1. Image Section: 35% height on mobile - Key Visual */}
        <div className="w-full md:w-1/2 h-[35vh] md:h-auto relative shrink-0">
          <img 
            src="/images/sobha-sanctuary/SobhaPopUp.jpeg" 
            alt="Sobha Sanctuary"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* 2. Form Section: Micro-padding and tiny fonts for mobile */}
        <div className="w-full md:w-1/2 p-4 md:p-12 overflow-y-auto bg-white">
          <header className="mb-3 md:mb-6">
            <h2 className="text-[7px] md:text-[10px] font-bold text-orange-600 uppercase mb-0.5">Sobha Sanctuary</h2>
            <h3 className="text-sm md:text-2xl font-bold font-title text-gray-900 leading-tight">FULL PROJECT DETAIL</h3>
          </header>

          <form className="space-y-2 md:space-y-6" onSubmit={handleSubmit}>
            
            <div className="space-y-1.5 md:space-y-4">
  {/* Name Input */}
  <input 
    type="text" 
    placeholder="NAME" 
    className="w-full border-b border-gray-200 py-1 md:py-3 text-[8px] md:text-[11px] font-bold tracking-widest focus:border-orange-600 outline-none uppercase"
    onChange={(e) => setData({...data, name: e.target.value})}
  />
  
  {/* Phone Input Group */}
  <div className="flex items-center border-b border-gray-200 focus-within:border-orange-600 transition-all">
    {/* Ensure your CountryPhoneDropdown also scales down its internal text if possible */}
    <CountryPhoneDropdown value={phoneCode} onChange={setPhoneCode} />
    <input
      required
      type="tel"
      placeholder="PHONE"
      className="w-full px-1 py-1 md:py-3 text-[8px] md:text-[11px] font-bold tracking-widest outline-none uppercase bg-transparent"
      onChange={(e) => setData({ ...data, phone: e.target.value.replace(/\D/g, "") })}
    />
  </div>

  {/* Email Input */}
  <input 
    type="email" 
    placeholder="EMAIL" 
    className="w-full border-b border-gray-200 py-1 md:py-3 text-[8px] md:text-[11px] font-bold tracking-widest focus:border-orange-600 outline-none uppercase"
    onChange={(e) => setData({...data, email: e.target.value})}
  />
</div>

{/* Consent Section */}
<div className="flex items-start gap-1 py-1">
  <input 
    type="checkbox" 
    checked={isChecked} 
    id="consent-popup" 
    className="mt-0.5 accent-orange-600 w-2.5 h-2.5 shrink-0" 
    onChange={(e) => setIsChecked(e.target.checked)}
    required 
  />
  <label htmlFor="consent-popup" className="text-[6.5px] md:text-[9px] text-gray-400 leading-tight uppercase font-medium">
    I authorize company representatives to reach out via Call, SMS, Email, or WhatsApp.
  </label>
</div>
            <div className='bg-orange-600'>
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full text-white py-2.5 md:py-5 text-[9px] md:text-[11px] font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2 mt-1 shadow-md active:bg-orange-700 disabled:bg-gray-400"
            >
              {isLoading ? (
                <Loader2 className="animate-spin w-3 h-3" />
              ) : (
                <>SUBMIT <ArrowRight className="w-3 h-3" /></>
              )}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TimedPopUp;