"use client"
import { motion } from 'motion/react';
import { ArrowUpRight, Phone } from 'lucide-react';
import ContactModal from "./ContactModal";
import { useState, useEffect } from 'react';

export default function HeroV2() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const openEnquiryModal = (text = "Request Brochure") => {
    setButtonText(text);
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden grid md:grid-cols-2">

        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          src="https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Aspen-Villas-2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* LEFT EMPTY (Luxury spacing) */}
        <div />

        {/* RIGHT PANEL */}
        <div className="relative z-10 flex items-center px-10 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg"
          >

            <h1 className="font-serif text-white">
              <span className="block text-lg tracking-[0.5em] text-white">EMAAR</span>
              <span className="block text-4xl md:text-7xl mt-2">CAIRO GATE </span>
            </h1>

            <div className="h-[1px] w-full bg-white/10 my-5" />

            <div className="flex flex-col gap-4">
              <button onClick={() => openEnquiryModal("Request Brochure")} className="group py-5 border-b border-white/30 text-white flex justify-between">
                Request Brochure <ArrowUpRight />
              </button>

              <button onClick={() => openEnquiryModal("Request Call Back")} className="group py-5 border-b border-white/20 text-white flex justify-between">
                Request Call Back <Phone size={14} />
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Enquiry For: EMAAR CAIRO GATE EGYPT"
        buttonText={buttonText}
      />
    </>
  );
}

