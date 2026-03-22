"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from "./ContactModal";

const FloorPlan = () => {
  const [activePlan, setActivePlan] = useState('1 & 2 Bedroom Apartments');
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

  const plans = {
    '1 & 2 Bedroom Apartments': { 
      price: '2.5M', 
      description: 'Contemporary living spaces with open-plan layouts flowing seamlessly onto private balconies. Perfect for young professionals and couples seeking a beachfront lifestyle.',
      features: ['Spacious living areas', 'Modern kitchens', 'Private balconies', 'Built-in wardrobes'],
      image: 'https://www.palmcentral-bynakheel.com/images/Palm%20Central%20Brochure/open%20kitchen.jpg' 
    },
    '3 Bedroom Residences': { 
      price: '4.2M', 
      description: 'Expansive family homes offering generous proportions and multiple living zones. Designed for those who appreciate space and sophisticated comfort.',
      features: ['Master suite with ensuite', 'Guest bathroom', 'Large terraces', 'Maid\'s room available'],
      image: 'https://www.palmcentral-bynakheel.com/images/Palm%20Central%20Brochure/living%20room%20overlooking%20water.jpg' 
    },
    '4 & 5 Bedroom Prime Residences': { 
      price: '6.8M', 
      description: 'Elevated waterfront living with panoramic beach vistas. These prestigious homes include private garage access and showcase refined architectural details.',
      features: ['Floor-to-ceiling windows', 'Private garages', 'Expansive terraces', 'Premium finishes'],
      image: 'https://www.palmcentral-bynakheel.com/images/Palm%20Central%20Brochure/spacious%20living%20room%20with%20decor.jpg' 
    },
    'Exclusive Townhouses': { 
      price: '8.5M', 
      description: 'Four-bedroom sanctuaries featuring double-height living spaces and direct landscaped access to the beach. Your private coastal estate.',
      features: ['Private garage', 'Direct beach access', 'Double-height ceilings', 'Multiple outdoor terraces'],
      image: 'https://www.palmcentral-bynakheel.com/images/Palm%20Central%20Brochure/living%20room%20ground%20floor%20with%20large%20outdoor%20balcony.jpg' 
    },
    'Signature Penthouses': { 
      price: '12M', 
      description: 'The pinnacle of Palm Central living. Five-bedroom sky villas with private pools, rooftop lounges, and unrivaled 360-degree views of sea and sky.',
      features: ['Private swimming pool', 'Rooftop lounge', 'His & hers wardrobes', 'Spa-inspired bathrooms'],
      image: 'https://www.palmcentral-bynakheel.com/images/Palm%20Central%20Brochure/large%20balcony.jpg' 
    }
  };

  const currentPlan = plans[activePlan as keyof typeof plans];

  return (
    <section id="floor-plan" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Sticky Vertical Navigation */}
          <div className="lg:w-1/4">
  <div className="sticky top-24">
    {/* Section Tag */}
    <span className="text-[8px] md:text-[9px] font-medium tracking-[0.5em] text-green-500 uppercase mb-4 md:mb-8 block">
      Architectural Mastery
    </span>
    
    {/* Title */}
    <h3 className="text-2xl md:text-4xl font-serif text-[#062C2D] mb-8 md:mb-12 tracking-tight">
      Floor Plans
    </h3>

    {/* Navigation Container */}
    {/* Mobile: Horizontal Scroll | Laptop: Vertical Stack */}
    <div className="flex flex-row lg:flex-col overflow-x-auto no-scrollbar gap-5 md:gap-0 lg:space-y-1">
      {Object.keys(plans).map((key, index) => (
        <button
          key={key}
          onClick={() => setActivePlan(key)}
          className={`group flex items-center justify-between whitespace-nowrap lg:whitespace-normal text-left transition-all duration-500 pb-3 lg:pb-5 lg:pt-2 border-b lg:w-full min-w-max lg:min-w-0 ${
            activePlan === key 
              ? 'text-[#062C2D] border-green-500 opacity-100' 
              : 'text-slate-400 border-slate-100 hover:border-slate-300 opacity-60 hover:opacity-100'
          }`}
        >
          <div className="flex items-baseline gap-5">
            
            {/* Reduced Font Size & Sophisticated Tracking */}
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase leading-relaxed">
              {key}
            </span>
          </div>

          {/* Minimal Arrow indicator for Desktop */}
          <ArrowRight 
            size={12} 
            className={`hidden lg:block transition-all duration-500 ${
              activePlan === key ? 'translate-x-0 opacity-100 text-green-500' : '-translate-x-4 opacity-0'
            }`} 
          />
        </button>
      ))}
    </div>
  </div>
</div>

          {/* Right: Content Area */}
          <div className="lg:w-3/4 bg-[#F8FAFC] rounded-3xl p-8 md:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative group cursor-pointer" onClick={() => openEnquiryModal("Request Floor Plan")}>
                   <div className="bg-white p-4 rounded-2xl shadow-sm overflow-hidden">
                     <img src={currentPlan.image} className="w-full h-full" />
                     <div className="absolute inset-0 flex items-center justify-center">
                     </div>
                   </div>
                </div>

                <div>
                  <h4 className=" text-lg md:text-2xl font-serif text-[#062C2D] mb-6">{activePlan}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{currentPlan.description}</p>
                  <div className="grid grid-cols-1 gap-4 mb-10">
                    {currentPlan.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check size={14} className="text-green-500" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{f}</span>
                      </div>
                    ))}
                  </div>
                
                 <button 
  onClick={() => openEnquiryModal("Request Floor Plan")} 
  className="w-full text-white bg-green-500 py-2 md:py-3 rounded-full text-[4px] md:text-[8px] font-bold tracking-[0.1em] uppercase flex items-center justify-center gap-3 md:gap-4"
>
  <span className="opacity-90">Request Floor Plan</span> 
  <ArrowRight size={12} className="md:size-[14px]" />
</button>
            
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <ContactModal
              isOpen={enquiryModalOpen}
              onClose={closeEnquiryModal}
              floorPlanTitle="Enquiry For: Palm Central Nakheel"
              buttonText={buttonText}
            />
    </section>
  );
};
export default FloorPlan;