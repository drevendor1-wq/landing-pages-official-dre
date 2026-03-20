"use client";

import { useState, useEffect } from "react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

export default function ContactFloating() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    interestedUnitType: ""
  });

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
    setFormData({
      ...formData,
      telephone: value.replace(/\D/g, "")
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: `${phoneCode}${formData.telephone}`,
      unitType: formData.interestedUnitType,
      message: `Greenz Danube | ${formData.interestedUnitType}`,
      consent: consentChecked
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
      const zohoPromise = fetch(
        "https://forms.zoho.com/yadunathdxbofficialgm1/form/NEEWFORMTOTESTINCODE",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            data: {
              Name_First: formData.fullName,
              Email: formData.email,
              PhoneNumber_countrycode: phoneCode,
              PhoneNumber: formData.telephone,
              SingleLine: formData.interestedUnitType,
              MultiLine: `Greenz Danube | ${formData.interestedUnitType}`,
              DecisionBox: consentChecked
            }
          })
        }
      );

      // 🔥 Run both in parallel
      await sheetPromise; // ensure Sheets always saves
      await zohoPromise.catch(() => null); // don’t block if Zoho fails

      // ✅ Redirect
      window.location.href = "/thank-you";

    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="relative bg-sky-50 pb-32">

      {/* HERO IMAGE */}
      <div
        className="h-[520px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://buyown.house/wp-content/uploads/2026/02/Swimming-Pool-2.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4"></div>
      </div>

      {/* FLOATING FORM */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative -mt-32 bg-white rounded-2xl shadow-2xl p-10 md:p-14 border border-gray-100">

          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-1 bg-green-500 mb-6 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tighter text-black/90 text-center">
              GET IN TOUCH<span className="text-green-500">.</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">

            {/* FULL NAME */}
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-green-900/60 block mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-sky-200 focus:border-green-900 outline-none py-3"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-green-900/60 block mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-sky-200 focus:border-green-900 outline-none py-3"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            {/* REQUIREMENT */}
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-green-900/60 block mb-2">
                Requirement
              </label>
              <select
                className="w-full border-b-2 border-sky-200 focus:border-green-900 outline-none py-3 bg-transparent"
                value={formData.interestedUnitType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    interestedUnitType: e.target.value
                  })
                }
                required
              >
                <option value="Brochure">Brochure</option>
                <option value="Payment Plan">Payment Plan</option>
                <option value="Floor Plan">Floor Plan</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-green-900/60 block mb-2">
                Phone Number
              </label>

              <div className="flex items-center gap-2 border-b-2 border-sky-200 focus-within:border-green-900">
                <CountryPhoneDropdown
                  value={phoneCode || "+971"}
                  onChange={setPhoneCode}
                />

                <input
                  type="tel"
                  className="w-full py-3 outline-none"
                  value={formData.telephone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* CONSENT */}
            <div className="md:col-span-2 flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                id="consent"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                required
                className="mt-1 accent-green-900"
              />
              <label htmlFor="consent" className="text-xs text-gray-600">
                I authorize company representatives to contact me via Call,
                WhatsApp, SMS, or Email regarding this property enquiry.
              </label>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 bg-black text-white py-5 font-bold uppercase tracking-[0.25em] text-xs hover:bg-green-500 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}