"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Maximize2 } from 'lucide-react';
import ContactModal from "./ContactModal";

const Properties = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const propertyTypes = [
    {
      project: "EIGHTEEN ISLAMABAD",
      title: "1 KANAL",
      size: "135 M2",
      price: "18,500,000",
      image: "https://wirasat.com/wp-content/uploads/2024/11/Eighteen-Islamabad.webp",
    },
    {
      project: "EIGHTEEN ISLAMABAD",
      title: "2 KANAL",
      size: "195 M2",
      price: "29,000,000",
      image: "https://wirasat.com/wp-content/uploads/2024/11/Eighteen-Islamabad.webp",
    },
    {
      project: "EIGHTEEN ISLAMABAD",
      title: "4 KANAL",
      size: "240 M2",
      price: "35,200,000",
      image: "https://wirasat.com/wp-content/uploads/2024/11/Eighteen-Islamabad.webp",
    },
    {
      project: "EIGHTEEN ISLAMABAD",
      title: "8 KANAL",
      size: "240 M2",
      price: "35,200,000",
      image: "https://wirasat.com/wp-content/uploads/2024/11/Eighteen-Islamabad.webp",
    }
  ];

  const openEnquiryModal = (text:any) => {
    setButtonText(text);
    setEnquiryModalOpen(true);
  };

  return (
    <section id="properties" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#22c55e] text-[10px] tracking-[0.8em] uppercase font-bold mb-4 block"
          >
            Available Units
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-light text-white tracking-tighter"
          >
            The <span className="font-serif italic text-[#22c55e]">Properties</span>
          </motion.h2>
        </div>

        {/* GRID → FIXED 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {propertyTypes.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative flex flex-col cursor-pointer"
              onClick={() => openEnquiryModal(`Enquiry: ${item.title}`)}
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* VIEW BUTTON */}
                <button className="absolute top-0 right-0 bg-white p-4 flex flex-col items-center gap-1 hover:bg-[#22c55e] transition">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-black">
                    EIGHTEEN
                  </span>
                </button>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Maximize2 size={24} strokeWidth={1} />
                  </div>
                </div>
              </div>

              {/* INFO BOX */}
              <div className="relative -mt-20 ml-auto w-[90%] bg-white p-8 shadow-2xl transition group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    {item.project}
                  </p>
                </div>

                <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-8 leading-tight group-hover:text-[#22c55e] transition-colors">
                  {item.title}
                </h3>

                <div className="flex justify-between items-end border-t border-neutral-100 pt-6">
                  <div>
                    <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] mb-1">
                      Request Pricing
                    </p>
                  </div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="p-2 border border-neutral-200 rounded-full text-[#22c55e]"
                  >
                    <ArrowRight size={20} />
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
        floorPlanTitle="Eighteen Islamabad | ORA Developers"
        buttonText="Request Property Information"
      />

      {/* BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#22c55e]/[0.03] pointer-events-none" />
    </section>
  );
};

export default Properties;