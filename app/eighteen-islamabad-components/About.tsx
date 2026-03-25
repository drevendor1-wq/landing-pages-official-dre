"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactModal from "./ContactModal";

const About = () => {
  const containerRef = useRef(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const openEnquiryModal = (text:any) => {
    setButtonText(text);
    setEnquiryModalOpen(true);
  };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      id="overview" 
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center py-16 sm:py-20 lg:py-0"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: imgY }} 
          className="relative w-full h-[110%] lg:h-[120%] -top-[5%] lg:-top-[10%]"
        >
          <img
            src="https://gondalgroupofmarketing.com/wp-content/uploads/2025/10/Gondal-Group-of-Marketing-Project-Eighteen-Islamabad-03.webp"
            alt="Luxury Estate Interior"
            className="w-full h-full object-cover opacity-40 lg:opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 lg:via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-center lg:text-left">
          
          {/* LEFT */}
          <motion.div 
            style={{ y: textY }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[1px] bg-[#22c55e]" />
                <span className="text-white text-[9px] sm:text-[10px] uppercase tracking-[0.5em] sm:tracking-[0.6em] font-bold">
                  ORA DEVELOPERS PRESENTS
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight tracking-tight leading-[1.1] lg:leading-[0.9] mb-6 sm:mb-10">
                EIGHTEEN <br /> 
                <span className="font-serif text-[#22c55e] tracking-normal">
                  ISLAMABAD
                </span>
              </h2>

              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 font-light italic border-l-0 lg:border-l border-[#22c55e]/30 pl-0 lg:pl-8">
                
Eighteen is Pakistan’s first lifestyle destination developed by Egypt’s 𝐎𝐫𝐚 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 in partnership with Saif Group and Kohistan Builders.

              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-4 space-y-4"
            >
              <div className="bg-[#22c55e]">
                <button 
                  onClick={() => openEnquiryModal("Request Brochure")}
                  className="w-full backdrop-blur-md border border-white/10 text-black font-black p-6 tracking-[0.2em] uppercase transition-all"
                >
                  Request Brochure
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative p-[1px] bg-gradient-to-br from-[#22c55e]/40 via-transparent to-white/10"
            >
              <div className="bg-black/80 backdrop-blur-2xl sm:backdrop-blur-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden">
                
                <motion.div 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-1/2 h-full bg-white/5 skew-x-12 hidden sm:block"
                />

                <div className="space-y-8 sm:space-y-12 lg:space-y-14 relative z-10 text-center lg:text-left">
                  {[
                    { label: "Location", val: "Islamabad, Pakistan" },
                    { label: "Property Type", val: "Apartments and Villas" },
                    { label: "Services", val: "Architecture + Design" }
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <p className="text-[#22c55e] text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold mb-2 sm:mb-3 opacity-80">
                        {item.label}
                      </p>
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-light tracking-wide text-white/90">
                        {item.val}
                      </h3>
                      <div className="w-12 sm:w-0 h-[1px] bg-[#22c55e]/50 mt-3 sm:mt-4 sm:group-hover:w-full transition-all duration-700 mx-auto lg:mx-0" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#22c55e]/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* SIDE LINE */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#22c55e] to-transparent" />
      </div>

      <ContactModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
        floorPlanTitle="Eighteen Islamabad | ORA Developers" 
        buttonText={buttonText} 
      />
    </section>
  );
};

export default About;