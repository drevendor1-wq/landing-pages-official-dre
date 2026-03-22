"use client"
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
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
        <video 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50  hover:grayscale-0 transition-all duration-1000"
          src="https://marassi.eg/wp-content/uploads/2025/09/out_2025-09-09-16-51-30_1.mp4#t=0,54" // Placeholder link
        />
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
              <span className="block text-2xl md:text-4xl text-white/40 tracking-widest uppercase">Emaar</span>
              <span className="block text-4xl md:text-[12rem] font-bold leading-none -ml-1 md:-ml-2">CAIRO GATE</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-4 space-y-4"
          >
            <button 
              onClick={() => openEnquiryModal("Request Brochure")}
              className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-black p-6 tracking-[0.2em] uppercase transition-all"
            >
              Request Brochure
            </button>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} floorPlanTitle="Enquiry For: EMAAR CAIRO GATE EGYPT" buttonText={buttonText} />
    </>
  );
};

export default Hero;