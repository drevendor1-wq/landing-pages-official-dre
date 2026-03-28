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
          src="https://mira-verde.com/assets/0355.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />

        {/* Sunset Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

          <div className="max-w-2xl">

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-xs tracking-[0.4em] uppercase mb-6"
            >
              TBILISI HILLS, TBILISI, GEORGIA
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white font-serif leading-[0.9]
              text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight"
            >
              Mira Verde
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white text-sm md:text-lg mt-6"
            >
              Georgia’s First Branded Master-Planned Community
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
  onClick={() => openEnquiryModal("Download Brochure")}
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
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => openEnquiryModal("Request Call Back")}
    className="flex items-center gap-3 text-white px-8 py-4 rounded-full"
  >
    <Phone size={18} />
    <span className="text-xs font-bold tracking-widest uppercase">
      Request Call Back From Expert
    </span>
  </motion.button>
</div>

            </motion.div>

          </div>
        </div>
      </section>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Mira Georgia Residences"
        buttonText={buttonText}
      />
    </>
  );
};

export default Hero;