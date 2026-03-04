"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: "", email: "", telephone: "", interestedUnitType: "" });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const detectCountry = async () => {
      const code = await detectCountryCode();
      setPhoneCode(code);
    };
    detectCountry();
  }, []);

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, telephone: value.replace(/\D/g, "") });
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${phoneCode}${formData.telephone}`,
          unitType: formData.interestedUnitType,
          message: `Enquiry for: BAY VILLAS BY NAKHEEL`,
          consent: consentChecked,
        }),
      });

      if (response.ok) {
       window.location.href = `/thank-you`;;
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }; 

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 bg-emerald-50/50 py-12 px-6 rounded-2xl border border-emerald-100">
          <span className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Enquire Now</span>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 tracking-tighter">Find Your Ideal Home at <span className="italic">Bay Villas</span></h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[ { icon: <Clock size={16}/>, text: "No obligation" }, { icon: <ShieldCheck size={16}/>, text: "No sales pressure" }, { icon: <CheckCircle2 size={16}/>, text: "Personalized" } ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-emerald-900/60 text-xs font-bold uppercase tracking-widest">
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <form className="max-w-4xl mx-auto space-y-8" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-emerald-900/50 mb-2 block">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full border-b-2 border-emerald-100 focus:border-black transition-colors py-3 outline-none bg-transparent" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} required />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-emerald-900/50 mb-2 block">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full border-b-2 border-emerald-100 focus:border-black transition-colors py-3 outline-none bg-transparent" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-emerald-900/50 mb-2 block">Requirement</label>
                <select className="w-full border-b-2 border-emerald-100 focus:border-black transition-colors py-3 outline-none bg-transparent cursor-pointer" value={formData.interestedUnitType} onChange={(e) => setFormData({ ...formData, interestedUnitType: e.target.value })} required>
                  <option value="Brochure">Brochure</option>
                  <option value="Payment Plan">Payment Plan</option>
                  <option value="Floor Plan">Floor Plan</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-emerald-900/50 mb-2 block">Phone Number</label>
                <div className="flex items-center gap-2 border-b-2 border-emerald-100 focus-within:border-black transition-colors">
                  <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                  <input type="tel" placeholder="50 123 4567" className="w-full py-3 outline-none bg-transparent" value={formData.telephone} onChange={(e) => handlePhoneChange(e.target.value)} required />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-emerald-50/30 p-4 rounded-lg border border-emerald-100/50">
            <input type="checkbox" id="consent" checked={consentChecked} onChange={(e) => setConsentChecked(e.target.checked)} required className="mt-1 accent-emerald-600" />
            <label htmlFor="consent" className="text-[11px] text-emerald-900/70 leading-relaxed">
              I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp...
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-emerald-800 transition-all">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}