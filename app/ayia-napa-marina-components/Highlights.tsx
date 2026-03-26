"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';
import ContactModal from "./ContactModal";

const Properties = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const propertyTypes = [
    {
      project: "AYIA NAPA MARINA",
      title: "EAST TOWER",
      size: "135 M2",
      price: "18,500,000",
      image: "https://d3lfybzdo3x59a.cloudfront.net/website-assets/ANM%20June%202023-06893.jpg",
    },
    {
      project: "AYIA NAPA MARINA",
      title: "WEST TOWER",
      size: "195 M2",
      price: "29,000,000",
      image: "https://marinaayianapa.com/wp-content/uploads/2025/11/675x700-EDIT-06-1922x2048.jpg",
    },
    {
      project: "AYIA NAPA MARINA",
      title: "BEACH VILLAS",
      size: "240 M2",
      price: "35,200,000",
      image: "https://cyprusmarinas.com.cy/wp-content/uploads/2022/11/agiya-napa-marina-header.jpg",
    },
    {
      project: "AYIA NAPA MARINA",
      title: "ISLAND VILLAS",
      size: "240 M2",
      price: "35,200,000",
      image: "https://luxurylifestyleawards.com/wp-content/uploads/2023/02/AYIA-NAPA-MARINA-ISLAND-VILLAS-2-1.png",
    }
  ];

  const openEnquiryModal = (text: any) => {
    setEnquiryModalOpen(true);
  };

  return (
    <section id="residences" className="py-24 md:py-32 bg-black relative overflow-hidden text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#38bdf8] text-[10px] tracking-[0.7em] uppercase mb-4 block"
          >
            Available Units
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight"
          >
            The <span className="font-serif italic text-[#38bdf8]">Residences</span>
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {propertyTypes.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openEnquiryModal(`Enquiry: ${item.title}`)}
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">

                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* TOP LABEL */}
                <div className="absolute top-4 left-4 text-[9px] tracking-[0.4em] uppercase text-white/80">
                  {item.project}
                </div>

                {/* CENTER ICON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-14 h-14 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 size={20} />
                  </div>
                </div>

              </div>

              {/* GLASS INFO CARD */}
              <div className="relative -mt-16 mx-4 bg-[#020617]/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_10px_60px_rgba(0,0,0,0.6)] transition group-hover:-translate-y-2">

                <h3 className="text-xl md:text-2xl font-light mb-6 group-hover:text-[#38bdf8] transition">
                  {item.title}
                </h3>

                <div className="flex justify-between items-center border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[11px] text-white/50 uppercase tracking-[0.3em]">
                      Request Pricing
                    </p>
                  </div>

                  <motion.div 
                    whileHover={{ x: 6 }}
                    className="p-2 border border-white/20 rounded-full text-[#38bdf8]"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Ayia Napa Marina | ORA Developers"
        buttonText="Request Property Information"
      />

      {/* BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#38bdf8]/[0.04] blur-3xl pointer-events-none" />
    </section>
  );
};

export default Properties;