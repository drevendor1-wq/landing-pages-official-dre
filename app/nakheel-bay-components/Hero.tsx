"use client"
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-zinc-50">
      
      {/* 1. IMAGE LAYER: Background on Mobile, Right Column on Desktop */}
      <div className="absolute inset-0 md:relative md:flex-1 h-full z-0 md:z-auto order-1 md:order-2 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/bay-villas.jpg?sfvrsn=fb880d25_1" 
            alt="Island Paradise" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Mobile-only overlay for text contrast */}
          <div className="absolute inset-0 bg-black/30 md:bg-emerald-950/20 mix-blend-multiply md:mix-blend-normal"></div>
          {/* Subtle gradient to make bottom text pop on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 md:hidden"></div>
        </motion.div>
      </div>

      {/* 2. CONTENT LAYER: Floating on Mobile, Left Column on Desktop */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-20 md:p-20 md:bg-emerald-50/40 order-2 md:order-1">
        
        {/* Desktop-only Background Pattern */}
        <div className="hidden md:block absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
  <span className="w-8 h-[1px] bg-emerald-500 sm:bg-emerald-100 md:bg-emerald-800"></span>
  
  <span className="text-emerald-500 sm:text-emerald-400 md:text-emerald-800 font-bold tracking-[0.3em] text-[9px] uppercase">
    Beachfront Luxury, Island Serenity
  </span>
</div>

          {/* Headline - White on Mobile, Black on Desktop */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif leading-[0.95] md:leading-[0.8] tracking-tighter mb-10 text-white md:text-black">
            BAY&nbsp;
            <span className="italic font-light text-emerald-400 md:text-emerald-900/80">VILLAS</span>
            <br className="hidden sm:block" /> 
            <span className="block sm:inline"> BY NAKHEEL</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Primary Button */}
            <button onClick={() => openEnquiryModal("Request Brochure")} className="w-full sm:w-auto bg-white md:bg-black text-black md:text-white px-8 py-5 text-xs uppercase tracking-widest font-bold hover:bg-emerald-50 md:hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 group">
              Request Brochure
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className='w-auto bg-emerald-700/80 text-white'>
            <button onClick={() => openEnquiryModal("Call Back From Nakheel Expert")} className="w-full text-white px-8 py-5 text-xs uppercase tracking-widest font-bold hover:bg-emerald-50 md:hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 group">
              CALL BACK FROM NAKHEEL EXPERT
            </button>
            </div>
          </div>
        </motion.div>
      </div>
       <ContactModal
              isOpen={enquiryModalOpen}
              onClose={closeEnquiryModal}
              floorPlanTitle="BAY VILLAS BY NAKHEEL"
              buttonText={buttonText}
            />
    </section>
  );
};

export default Hero;