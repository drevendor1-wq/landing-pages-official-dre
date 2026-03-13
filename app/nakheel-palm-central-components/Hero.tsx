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
      if (enquiryModalOpen && e.key === "Escape") {
        closeEnquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enquiryModalOpen]);

  return (
    <>
      {/* ================= MOBILE HERO ================= */}
      {/* Changed min-h-screen to min-h-[100svh] to account for mobile browser toolbars */}
      <section className="relative min-h-[100svh] md:hidden overflow-hidden">
        <img
          src="https://metropolitan.realestate/wp-content/uploads/2025/11/Palm-Central-6.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Palm Central"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* CHANGE: Changed justify-end to justify-center to prevent top-clipping.
            Added pt-20 to ensure it clears fixed navbars if content grows.
        */}
        <div className="relative flex flex-col justify-center h-full p-8 pt-44">
          
          {/* ADJUSTED: Reduced text size from 15rem (which is massive for mobile) to 5xl/6xl */}
          <h1 className="text-6xl font-serif leading-[0.85] tracking-tighter text-white">
            PALM <br/>
            <span className="italic font-light text-emerald-400 relative">
              CENTRAL
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute -bottom-2 left-0 h-[1px] bg-emerald-200"
              />
            </span>
          </h1>

          <p className="text-xl hidden font-light text-white uppercase mt-6 tracking-widest">
            PRIVATE RESIDENCES
          </p>

          <div className="mt-10 flex flex-col gap-3 w-full">
            <div className='bg-green-500'>
              <button
                onClick={() => openEnquiryModal("Request Brochure")}
                className="w-full group text-white p-6 flex items-center justify-between hover:bg-emerald-600 transition-all duration-500"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Request Brochure</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            <button
              onClick={() => openEnquiryModal("Call Back From Nakheel Expert")}
              className="group border border-white/40 p-6 flex items-center justify-center gap-3 hover:border-emerald-500 transition-all"
            >
              <Phone size={14} className="text-emerald-400" />
              <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white">
                Call Back From Nakheel Expert
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= DESKTOP HERO (UNCHANGED) ================= */}
      <section className="relative min-h-screen bg-white hidden md:flex flex-col md:flex-row overflow-hidden">
        {/* LEFT CONTENT AREA */}
        <div className="relative z-20 flex-1 flex flex-col justify-between p-6 md:p-16 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between md:justify-start gap-6"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="text-[4rem] sm:text-8xl md:text-[9.5rem] font-serif leading-[0.85] tracking-tighter text-zinc-900">
              PALM<br />
              <span className="italic font-light text-emerald-500/90 relative">
                CENTRAL
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -bottom-2 left-0 h-[1px] bg-emerald-200" 
                />
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light tracking-[0.1em] text-zinc-700 uppercase mt-6 md:mt-10">
              PRIVATE RESIDENCES
            </p>

            <div className="mt-16 flex flex-col gap-3 max-w-sm">
              <div className='bg-green-500'>
                <button 
                  onClick={() => openEnquiryModal("Request Brochure")} 
                  className="group text-white p-6 flex items-center justify-between hover:bg-emerald-600 transition-all duration-500"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Request Brochure</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
              
              <button 
                onClick={() => openEnquiryModal("Call Back From Nakheel Expert")} 
                className="group border border-zinc-200 p-6 flex items-center justify-center gap-3 hover:border-emerald-500 transition-all"
              >
                <Phone size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 group-hover:text-zinc-900">
                 Call Back From Nakheel Expert
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative flex-1 h-[50vh] md:h-screen order-1 md:order-2">
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full relative"
          >
            <img 
              src="https://metropolitan.realestate/wp-content/uploads/2025/11/Palm-Central-6.webp" 
              alt="Palm Central" 
              className="w-full h-full object-cover"
              style={{
                  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)"
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay"></div>
          </motion.div>

          <div className="absolute bottom-12 right-12 hidden md:block bg-white/90 backdrop-blur-md p-6 border border-white/20">
              <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-1">Location</p>
              <p className="text-zinc-900 font-serif text-lg tracking-tight"> Palm Jebel Ali</p>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Enquiry For: Palm Central Nakheel"
        buttonText={buttonText}
      />
    </>
  );
};

export default Hero;