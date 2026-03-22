"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';
import ContactModal from "./ContactModal";

// Explicitly defining the variants to avoid TypeScript errors
const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(4px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a "premium" slide
    } 
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const Properties: React.FC = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const openEnquiryModal = (text: string = "Request Details") => {
    setButtonText(text);
    setEnquiryModalOpen(true);
  };

  const propertyTypes = [
    {
      title: "Standalone Villas",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Grand-Residences-2-Amenities.jpg",
      tag: "Aspen II"
    },
    {
      title: "Serviced Residence",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Eden-1.jpg",
      tag: "Locanda Serviced Residences"
    },
    {
      title: "Standalone Villas",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Elan-Amenities.jpg",
      tag: "Haven Villas"
    },
    {
      title: "Standalone Villas",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Elie-Saab-Signature-Villas-Hero.jpg",
      tag: "Elie Saab Signature Villas"
    },
    {
      title: "Standalone Villas",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Grand-Residences-2-Hero.jpg",
      tag: "Eden"
    },
    {
      title: "Offices",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-TownSquare-Boutique-Offices-Hero.jpg",
      tag: "Townsquare"
    },
    {
      title: "Apartments",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Aspen-Villas-2.jpg",
      tag: "Grand Residences"
    },
    {
      title: "Standalone Villas",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Aspen-Villas-Amenities.jpg",
      tag: "Elan"
    },
    {
      title: "Standalone Villas",
      image: "https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Cairo-Gate-Elan-Waterfront-Villas-1.jpg",
      tag: "Aspen Villas"
    }
  ];

  return (
    <section id="properties" className="py-24 bg-[#FAF9F6] px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-stone-300" />
            <Home className="text-stone-400" size={18} strokeWidth={1.5} />
            <div className="h-[1px] w-12 bg-stone-300" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mb-8 tracking-tight"
          >   <div>
             <h2 className="text-4xl md:text-6xl font-serif text-[#062C2D] tracking-tighter">
          <span>PROPERTIES</span>
          </h2>
          </div>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
           <span className="text-green-500 font-normal">Cairo Gate</span>, 
             is offering your house with a range of possibilities for a more personalized touch turning any house into a home with a variety of unit options to truly match your signature lifestyle.
          </motion.p>
        </div>

        {/* Properties Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {propertyTypes.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => openEnquiryModal(`Enquiry: ${item.title}`)}
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-stone-100 shadow-sm transition-shadow hover:shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Clean Label Overlay from Image 1 */}
                <div className="absolute top-0 left-0 p-6">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 shadow-sm border-l-2 border-stone-800">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-900">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white px-6 py-3 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     View Property <ArrowRight size={12} />
                   </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-black text-lg tracking-widest uppercase mt-2">
                  {item.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle={buttonText}
        buttonText="Request Information"
      />
    </section>
  );
};

export default Properties;