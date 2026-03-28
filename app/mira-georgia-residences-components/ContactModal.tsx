// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { X, Send } from "lucide-react";
// import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
// import { detectCountryCode } from "../utils/countryDetection";

// interface FloorPlanEnquiryModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   floorPlanTitle?: string;
//   buttonText?: string;
// }

// export default function ContactModal({
//   isOpen,
//   floorPlanTitle,
//   onClose,
//   buttonText = "ENQUIRE NOW",
// }: FloorPlanEnquiryModalProps) {
//   const [enquiryData, setEnquiryData] = useState({ name: "", email: "", phone: "" });
//   const [phoneCode, setPhoneCode] = useState<string | null>(null);
//   const [isChecked, setIsChecked] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (isOpen) {
//       setEnquiryData({ name: "", email: "", phone: "" });
//       const detectCountry = async () => {
//         const code = await detectCountryCode();
//         setPhoneCode(code);
//       };
//       detectCountry();
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (isOpen && modalRef.current && cardRef.current) {
//       document.body.style.overflow = "hidden";
//       const ctx = gsap.context(() => {
//         gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
//         gsap.fromTo(
//           cardRef.current,
//           { y: 15, opacity: 0, scale: 0.98 },
//           { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
//         );
//       }, modalRef.current);
//       return () => ctx.revert();
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isOpen]);

//   const handlePhoneChange = (value: string) => {
//     const digitsOnly = value.replace(/\D/g, "");
//     setEnquiryData({ ...enquiryData, phone: digitsOnly });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("/api/submit-enquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...enquiryData,
//           phone: `${phoneCode}${enquiryData.phone}`,
//           message: `Enquiry for: ${floorPlanTitle || "Floor Plan"}`,
//           consent: isChecked,
//         }),
//       });
//       if (response.ok) {
//         window.location.href = "/thank-you";
//       } else {
//         alert("Error.");
//       }
//     } catch (error) {
//       alert("Error.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-emerald-950/20 backdrop-blur-md"
//       onClick={onClose}
//       ref={modalRef}
//     >
//       <div
//         className="relative w-full max-w-[840px] bg-white border border-emerald-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden rounded-sm grid md:grid-cols-2"
//         onClick={(e) => e.stopPropagation()}
//         ref={cardRef}
//       >
//         {/* Left Side (Form) */}
//         <div className="relative">
//           {/* Top Accent Bar */}
//           <div className="h-1 w-full bg-emerald-500 absolute top-0 left-0" />

//           <div className="p-8 md:p-10 pt-16">
//             {/* Minimal Header */}
//             <div className="text-center mb-10">
//               <span className="text-[8px] font-bold tracking-[0.5em] text-emerald-500 uppercase block mb-2">
//                 Nakheel Palm Central
//               </span>
//               <h2 className="text-2xl font-serif italic text-zinc-900 leading-tight">
//                 {buttonText}
//               </h2>
//               <div className="w-6 h-[1px] bg-emerald-200 mx-auto mt-4" />
//             </div>

//             <form className="space-y-7" onSubmit={handleSubmit}>
//               {/* Name Input */}
//               <div className="space-y-1 group">
//                 <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-transparent border-b border-zinc-100 py-1 focus:border-emerald-500 focus:outline-none transition-all text-sm font-light"
//                   value={enquiryData.name}
//                   onChange={(e) =>
//                     setEnquiryData({ ...enquiryData, name: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="space-y-1 group">
//                 <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-transparent border-b border-zinc-100 py-1 focus:border-emerald-500 focus:outline-none transition-all text-sm font-light"
//                   value={enquiryData.email}
//                   onChange={(e) =>
//                     setEnquiryData({ ...enquiryData, email: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               {/* Phone Input */}
//               <div className="space-y-1 group">
//                 <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
//                   Phone
//                 </label>
//                 <div className="flex border-b border-zinc-100 group-focus-within:border-emerald-500 transition-all">
//                   <CountryPhoneDropdown
//                     value={phoneCode || "+971"}
//                     onChange={setPhoneCode}
//                   />
//                   <input
//                     type="tel"
//                     className="w-full bg-transparent py-1 pl-3 focus:outline-none text-sm"
//                     value={enquiryData.phone}
//                     inputMode="numeric"
//                     onChange={(e) => handlePhoneChange(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Compact Consent */}
//               <div className="flex items-start gap-3 pt-2">
//                 <input
//                   type="checkbox"
//                   className="w-3.5 h-3.5 mt-0.5 accent-emerald-500 border-zinc-200 rounded-none"
//                   checked={isChecked}
//                   onChange={(e) => setIsChecked(e.target.checked)}
//                   required
//                 />
//                 <span className="text-[8px] text-zinc-400 uppercase tracking-widest leading-relaxed">
//                   I authorize company representatives to reach out via Call, SMS, Email,
//                   or WhatsApp.
//                 </span>
//               </div>

//               <div className="bg-green-500">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full text-white py-4 text-[10px] font-light uppercase hover:bg-emerald-600 transition-all duration-500 flex items-center justify-center gap-2 group"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                   <Send
//                     size={10}
//                     className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//                   />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Right Side (Image) with Close Button */}
//         <div
//           className="relative bg-cover bg-center h-[300px] md:h-full"
//           style={{ backgroundImage: `url('https://mira-verde.com/assets/gallery22.webp')` }} // <-- IMPORTANT: Replace with the actual image path
//         >
//           {/* Close Button on Image */}
//           <button
//             className="absolute top-5 right-5 text-white hover:text-white transition-all z-20 bg-black/30 rounded-full p-1.5"
//             onClick={onClose}
//           >
//             <X size={18} strokeWidth={1.5} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, Send } from "lucide-react";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";
import { detectCountryCode } from "../utils/countryDetection";

interface FloorPlanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  floorPlanTitle?: string;
  buttonText?: string;
}

export default function ContactModal({
  isOpen,
  floorPlanTitle,
  onClose,
  buttonText = "ENQUIRE NOW",
}: FloorPlanEnquiryModalProps) {
  const [enquiryData, setEnquiryData] = useState({ name: "", email: "", phone: "" });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setEnquiryData({ name: "", email: "", phone: "" });
      const detectCountry = async () => {
        const code = await detectCountryCode();
        setPhoneCode(code);
      };
      detectCountry();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current && cardRef.current) {
      document.body.style.overflow = "hidden";
      const ctx = gsap.context(() => {
        gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(
          cardRef.current,
          { y: 15, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      }, modalRef.current);
      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setEnquiryData({ ...enquiryData, phone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...enquiryData,
          phone: `${phoneCode}${enquiryData.phone}`,
          message: `Enquiry for: ${floorPlanTitle || "Floor Plan"}`,
          consent: isChecked,
        }),
      });
      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error.");
      }
    } catch (error) {
      alert("Error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-emerald-950/20 backdrop-blur-md"
      onClick={onClose}
      ref={modalRef}
    >
      <div
        className="relative w-full max-w-[840px] max-h-[95vh] overflow-y-auto md:overflow-hidden bg-white border border-emerald-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] rounded-sm flex flex-col md:grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
        ref={cardRef}
      >
        
        {/* Top/Right Section (Image) */}
        <div
          className="relative h-[770px] md:h-auto md:order-2 bg-cover bg-center"
          style={{ backgroundImage: `url('https://mira-verde.com/assets/gallery22.webp')` }}
        >
          {/* Close Button - positioned absolutely on the image container */}
          <button
            className="absolute top-4 right-4 text-white hover:scale-110 transition-transform z-30 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2"
            onClick={onClose}
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Bottom/Left Section (Form) */}
        <div className="relative md:order-1 bg-white">
          {/* Top Accent Bar (Hidden on mobile if preferred, or kept for style) */}
          <div className="h-1 w-full bg-emerald-700 absolute top-0 left-0" />

          <div className="p-6 md:p-10 pt-10 md:pt-16">
            <div className="text-center mb-8 md:mb-10">
              <span className="text-[8px] font-bold tracking-[0.5em] text-[#047857] uppercase block mb-2">
                MIRA GEORGIA RESIDENCES
              </span>
              <h2 className="text-xl md:text-2xl font-serif italic text-zinc-900 leading-tight">
                {buttonText}
              </h2>
              <div className="w-6 h-[1px] bg-emerald-200 mx-auto mt-4" />
            </div>

            <form className="space-y-6 md:space-y-7" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="space-y-1 group">
                <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-100 py-1 focus:border-emerald-500 focus:outline-none transition-all text-sm font-light"
                  value={enquiryData.name}
                  onChange={(e) =>
                    setEnquiryData({ ...enquiryData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1 group">
                <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-zinc-100 py-1 focus:border-emerald-500 focus:outline-none transition-all text-sm font-light"
                  value={enquiryData.email}
                  onChange={(e) =>
                    setEnquiryData({ ...enquiryData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-1 group">
                <label className="text-[9px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-emerald-500 transition-colors">
                  Phone
                </label>
                <div className="flex border-b border-zinc-100 group-focus-within:border-emerald-500 transition-all">
                  <CountryPhoneDropdown
                    value={phoneCode || "+971"}
                    onChange={setPhoneCode}
                  />
                  <input
                    type="tel"
                    className="w-full bg-transparent py-1 pl-3 focus:outline-none text-sm"
                    value={enquiryData.phone}
                    inputMode="numeric"
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Compact Consent */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 mt-0.5 accent-emerald-700 border-zinc-200 rounded-none flex-shrink-0"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                />
                <span className="text-[8px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                  I authorize company representatives to reach out via Call, SMS, Email,
                  or WhatsApp.
                </span>
              </div>

              <div className="bg-green-700">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-4 text-[10px] font-light uppercase hover:bg-emerald-700 transition-all duration-500 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <Send
                    size={10}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}