"use client"
import { motion } from 'motion/react';
import ContactModal from "./ContactModal";
import { Download, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const openEnquiryModal = (text: string = "Request Brochure") => {
    setButtonText(text);
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (enquiryModalOpen && e.key === "Escape") {
        closeEnquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enquiryModalOpen]);

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src="https://masaar-sharjah.com/wp-content/uploads/2025/08/masaar-3-arada-villas.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />

        {/* Sunset Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:via-black/20 md:to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

          <div className="max-w-2xl">

            {/* Title */}
            {/* Adjusted Heading Component */}
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="text-white font-serif 
             /* Better mobile leading */
             leading-[1.1] sm:leading-[0.9] 
             /* Responsive sizing */
             text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] 
             tracking-tight"
>
  MASAAR
</motion.h1>

{/* Enhanced Overlay for readability */}
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:from-black/60 sm:via-black/30"></div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white text-sm md:text-lg mt-6"
            >
              Exclusive living by the woodland.
            </motion.p>

            {/* Price */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <p className="text-white/70 text-sm">Starting from</p>
              <p className="text-white text-3xl font-light tracking-wide">
                USD 175,000
              </p>
            </motion.div> */}

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >

              {/* Primary Button */}
              <button 
  onClick={() => openEnquiryModal("DOWNLOAD BROCHURE")}
  className="group relative flex items-center gap-3 px-10 py-4 bg-white border border-zinc-200 text-black transition-all duration-500 ease-in-out overflow-hidden"
>
  {/* The Sunset/Green background slide effect */}
  <span className="absolute inset-0 bg-[#1a3a32] translate-y-full"></span>

  {/* Button Content */}
  <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold">
    Download Brochure
  </span>
  
  <Download 
    size={16} 
    strokeWidth={1.5} 
    className="relative z-10 transition-transform duration-300" 
  />
</button>

              {/* Secondary Button */}
             <div className="bg-[#047857] rounded-full shadow-lg transition-all duration-300">
  <button
    onClick={() => openEnquiryModal("REQUEST CALL BACK")}
    className="flex items-center gap-3 text-white px-8 py-4 rounded-full"
  >
    <Phone size={18} />
   <span className="relative z-10 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
  Request Call Back From Expert
</span>
  </button>
</div>

            </motion.div>

          </div>
        </div>
      </section>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Masaar By Arada at Sharjah"
        buttonText={buttonText}
      />
    </>
  );
};

export default Hero;