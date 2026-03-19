"use client"
import { motion } from 'motion/react';
import { ArrowUpRight, Phone } from 'lucide-react';
import ContactModal from "./ContactModal";
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
      if (enquiryModalOpen && e.key === "Escape") closeEnquiryModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enquiryModalOpen]);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black">

        {/* Background */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          src="https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Communities-Marassi-North-Coast-6.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Maraasi"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />

        {/* Moving Light Sweep */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        />

        {/* Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')"
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-6 md:px-20">

          {/* Glass Panel */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative backdrop-blur-2xl bg-white/[0.08] border border-white/20 p-8 md:p-16 rounded-3xl max-w-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >

            {/* Glow Accent */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20 blur-xl opacity-70 pointer-events-none" />

            {/* Title */}
            <h1 className="relative font-serif leading-[0.78] tracking-tight text-white">
              
              <span className="block text-3xl md:text-5xl tracking-[0.2em] text-white/60">
                EMAAR
              </span>

              <span className="block text-6xl md:text-[8rem] font-light text-emerald-400 mt-3">
                MARASSI
              </span>

            </h1>

            {/* Divider */}
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent my-8" />

            {/* Buttons */}
            <div className="flex flex-col gap-4">

              {/* Primary CTA */}
              <button
                onClick={() => openEnquiryModal("Request Brochure")}
                className="relative group overflow-hidden p-5 flex items-center justify-between text-white border border-white/20"
              >
                <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Request Brochure
                </span>

                <ArrowUpRight
                  size={20}
                  className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />

                {/* Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 pointer-events-none" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => openEnquiryModal("Request Call Back")}
                className="group border border-white/30 p-5 flex items-center justify-center gap-3 text-white hover:border-emerald-400 transition"
              >
                <Phone size={14} className="text-emerald-400" />

                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  Request Call Back
                </span>
              </button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Enquiry For: MARASSI NORTH COAST EGYPT"
        buttonText={buttonText}
      />
    </>
  );
};

export default Hero;