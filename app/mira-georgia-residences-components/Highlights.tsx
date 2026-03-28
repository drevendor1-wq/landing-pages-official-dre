"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import ContactModal from "./ContactModal";

const Highlights: React.FC = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const pricingData = [
    { label: "Apartments from", value: "AED 642,657" },
    { label: "Townhouses from", value: "AED 3.7M" },
    { label: "Villas from", value: "AED 8.1M" },
    { label: "Mansions from", value: "AED 20.4M" },
    { label: "Areas from", value: "38 m²" },
    { label: "Payment plan", value: "60/40" },
  ];

  const openEnquiryModal = (text: string = "Request Brochure") => {
    setButtonText(text);
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="highlights" className="py-24 bg-white px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Column: Typography & Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#062C2D] leading-tight">
              Tbilisi’s Next <br /> 
              <span className="text-[#047857]">Investment Milestone</span>
            </h2>
            
            <p className="text-slate-500 font-light leading-relaxed max-w-lg text-base md:text-lg">
              Georgia’s first branded, master-planned community, set amid the rolling green landscapes of Tbilisi Hills, just ten minutes from the historic city center. Featuring villas, townhouses, and residences overlooking the capital, an international 18-hole golf course, and a complete lifestyle ecosystem, the project is positioned to become the country’s premier luxury neighborhood.
            </p>

            <div className="bg-[#047857] w-fit rounded-full shadow-lg transition-all duration-300">
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => openEnquiryModal("REGISTER NOW")}
    className="flex items-center gap-3 text-white px-8 py-4 rounded-full"
  >
    <span className="text-xs font-bold tracking-widest uppercase">
      REGISTER YOUR INTEREST
    </span>
  </motion.button>
</div>
          </motion.div>

          {/* Right Column: Pricing Table */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="divide-y divide-slate-200">
              {pricingData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-end py-6 group transition-colors hover:bg-slate-50/50"
                >
                  <span className="text-lg md:text-xl font-serif text-slate-700 group-hover:text-[#2D5A27] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-lg md:text-xl font-serif text-[#062C2D] text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Subtle bottom accent matching the sunset theme */}
            <div className="h-1 w-20 bg-[#047857] mt-8 rounded-full opacity-60" />
          </motion.div>
        </div>
      </div>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Mira Georgia Residences"
        buttonText={buttonText}
      />
    </section>
  );
};

export default Highlights;