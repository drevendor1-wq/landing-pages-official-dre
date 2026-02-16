"use client"
import React, { useState, useEffect } from 'react';
import ContactModal from "../damac-components/ContactModal"

const plans = [
  { id: '2bhk', name: '4-BEDROOM TH', size: '2208 sq. ft.', price: '2.75 M', img: '/images/damac-islands/DamacIslandFloor4.jpg' },
  { id: '3bhk', name: '5-BEDROOM MID TH', size: '3492.24 sq. ft.', price: '3.75 M', img: '/images/damac-islands/DamacIslandFloor5.jpg' },
  { id: 'villa', name: '6-BEDROOM VILLA', size: '4440 sq. ft.', price: '6.35 M', img: '/images/damac-islands/DamacIslandFloor6.jpg' },
  { id: 'villas', name: '7-BEDROOM VILLA', size: '17,078 sq. ft.', price: '18.5 M', img: '/images/damac-islands/DamacIslandFloor7.jpg' }
];

const FloorPlan: React.FC = () => {
  const [activePlan, setActivePlan] = useState(plans[0]);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Location Growth Insights");
  
  const openEnquiryModal = (text: string = "Location Growth Insights") => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-16">
        <span className="text-zinc-500 uppercase tracking-widest text-xs md:text-sm font-medium mb-2 block">Layouts</span>
        <h2 className="text-xl md:text-4xl font-heading font-light text-zinc-900">Choose Your Floor Plan</h2>
      </div>

      {/* Navigation - Improved horizontal scroll for mobile */}
      <div className="flex justify-start md:justify-center gap-3 mb-8 md:mb-16 overflow-x-auto pb-4 no-scrollbar touch-pan-x">
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePlan(p)}
            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              activePlan.id === p.id 
                ? 'bg-black text-white shadow-md' 
                : 'bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-zinc-100 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Text Section - Adjusted padding for mobile */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
          <div className="space-y-4 mb-8">
            <h3 className="text-xl md:text-2xl font-heading text-zinc-900">{activePlan.name}</h3>
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
              The townhouses and villas at Damac Islands are meticulously designed to provide a luxurious lifestyle with a focus on comfort and elegance. The interiors feature premium finishes and contemporary styling.
            </p>
          </div>

          {/* Price Section */}
          {activePlan.id === '2bhk' && (
            <div className="mb-8">
              <div className="inline-block p-4 md:p-6 bg-zinc-50 rounded-xl min-w-[160px]">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">STARTING PRICE</p>
                <p className="text-xl md:text-2xl font-heading text-black">AED {activePlan.price}</p>
              </div>
            </div>
          )}

          <button onClick={() => openEnquiryModal("Request Floor Plan")} className="w-full bg-black text-white py-4 md:py-5 rounded-xl font-medium text-base md:text-lg hover:bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]">
            REQUEST FLOOR PLAN
          </button>
        </div>

        {/* Image Section - Scaled for better visibility on mobile */}
        <div className="w-full lg:w-1/2 bg-zinc-50/50 flex items-center justify-center p-6 md:p-10 lg:p-12 order-1 lg:order-2">
          <div className="relative group w-full aspect-square flex items-center justify-center">
            <img 
              src={activePlan.img} 
              alt={activePlan.name} 
              className="max-w-full max-h-[300px] md:max-h-full rounded-xl shadow-xl transition-all duration-500 blur-sm select-none pointer-events-none group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div>
                <ContactModal
                         isOpen={enquiryModalOpen}
                         onClose={closeEnquiryModal}
                         floorPlanTitle="DAMAC ISLANDS 2"
                         buttonText={buttonText}
                       />
                       </div>
      </div>
    </div>
  );
};

export default FloorPlan;