"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Plus, Maximize2 } from 'lucide-react';
import ContactModal from "./ContactModal";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

const Properties: React.FC = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const propertyTypes = [
    {
      project: "ZED El Sheikh Zayed / Z Tower",
      title: "2 Bedrooms Apartment",
      size: "135 M2",
      price: "18,500,000",
      image: "https://www.ora-egypt.com/_next/image?url=https%3A%2F%2Fd2e34kt1c5hzm6.cloudfront.net%2Fora%2F597baa7d-02dc-4474-bdd8-9541be3fd7b8.png&w=1080&q=75",
    },
    {
      project: "ZED El Sheikh Zayed / Z Tower",
      title: "3 Bedrooms Apartment Type 4",
      size: "195 M2",
      price: "29,000,000",
      image: "https://www.ora-egypt.com/_next/image?url=https%3A%2F%2Fd2e34kt1c5hzm6.cloudfront.net%2Fora%2F331b6e12-a5c7-4a45-a374-b490ea072537.png&w=1080&q=75",
    },
  {
      project: "ZED El Sheikh Zayed / Z Tower",
      title: "3 Bedrooms Apartment Type 2",
      size: "240 M2",
      price: "35,200,000",
      image: "https://www.ora-egypt.com/_next/image?url=https%3A%2F%2Fd2e34kt1c5hzm6.cloudfront.net%2Fora%2F00169d3f-5066-4339-80a6-2da63df38d95.png&w=1080&q=75",
    }
  ];

  const openEnquiryModal = (text: string) => {
    setButtonText(text);
    setEnquiryModalOpen(true);
  };

  return (
    <section id="properties" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#D4AF37] text-[10px] tracking-[0.8em] uppercase font-bold mb-4 block"
          >
            Available Units
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-light text-white tracking-tighter"
          >
            The <span className="font-serif italic text-[#D4AF37]">Properties</span>
          </motion.h2>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
          {propertyTypes.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col"
              onClick={() => openEnquiryModal(`Enquiry: ${item.title}`)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* Compare Button (Top Right as per image) */}
                <button className="absolute top-0 right-0 bg-white p-4 flex flex-col items-center gap-1 group/btn hover:bg-[#D4AF37] transition-colors duration-300">
                  <Plus size={18} className="text-black" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-black">VIEW PROPERTY</span>
                </button>

                {/* Hover Interaction Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Maximize2 size={24} strokeWidth={1} />
                   </div>
                </div>
              </div>

              {/* Information Box (The signature ZED white-box offset) */}
              <div className="relative -mt-20 ml-auto w-[90%] bg-white p-8 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    {item.project}
                  </p>
                  <div className="flex items-center gap-2 text-neutral-800">
                    <Maximize2 size={12} />
                    <span className="text-xs font-medium">{item.size}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-8 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <div className="flex justify-between items-end border-t border-neutral-100 pt-6">
                  <div>
                    <p className="text-[9px] text-neutral-400 uppercase tracking-[0.2em] mb-1">Request Pricing</p>
                  </div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="p-2 border border-neutral-200 rounded-full text-[#D4AF37]"
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
        floorPlanTitle="Enquiry For: Zed Sheikh Zayed | Ora Developers"
        buttonText="Request Property Information"
      />

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/[0.02] pointer-events-none" />
    </section>
  );
};

export default Properties;