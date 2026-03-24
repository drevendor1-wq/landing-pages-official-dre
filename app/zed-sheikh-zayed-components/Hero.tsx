"use client"
import { motion } from 'framer-motion';
import ContactModal from "./ContactModal";
import { useState } from 'react';

const Hero = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const openEnquiryModal = (text: string) => {
    setButtonText(text);
    setEnquiryModalOpen(true);
  };

  return (
    <>
      <section className="relative h-screen bg-black overflow-hidden flex items-end pb-20 px-6 md:px-20">
      
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-emerald-400 mb-6"
            >
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-serif"
            >
              <span className="block text-2xl md:text-4xl text-white/40 tracking-widest uppercase">ORA DEVELOPERS</span>
              <span className="block text-3xl md:text-[12rem] font-bold leading-none -ml-1 md:-ml-2">ZED SHEIKH ZAYED</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-4 space-y-4"
          >
            <div className='bg-gold'>
            <button 
              onClick={() => openEnquiryModal("Request Brochure")}
              className="w-full backdrop-blur-md border border-white/10 text-white font-black p-6 tracking-[0.2em] uppercase transition-all"
            >
              Request Brochure
            </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} floorPlanTitle="Enquiry For: Tierra Viva Marbella | DarGlobal" buttonText={buttonText} />
    </>
  );
};

export default Hero;