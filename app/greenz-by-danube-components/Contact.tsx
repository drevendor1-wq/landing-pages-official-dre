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

 const [phoneCode, setPhoneCode] = useState<string>("+971");
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
      message: `Enquiry For: Greenz Danube`,
      consent: consentChecked
    };

   try {
  // 🔹 TASK 1: Google Sheets
  const sheetPromise = fetch("/api/submit-enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  // 🔹 TASK 2: Zoho via Backend API (NEW ✅)
  const zohoPromise = fetch("/api/zoho-submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      phone: `${phoneCode}${formData.telephone}`
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

          <div className="w-full h-[500px]">
  <iframe
    src="https://forms.zohopublic.com/drehomesrealestate/form/GreenzbyDanubeTafrax/formperma/vWRNfQOrxtXN81bWQJ2ngywzZQjK8ATw02Uv6Y65698"
    className="w-full h-full border-0"
    title="Enquiry Form"
  />
</div>
        </div>
      </div>
    </section>
  );
}