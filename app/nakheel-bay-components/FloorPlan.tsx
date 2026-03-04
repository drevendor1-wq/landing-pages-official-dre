"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import ContactModal from "./ContactModal";

const FloorPlan: React.FC = () => {
  const [activePlan, setActivePlan] = useState('4 BR Villa');
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
    '4 BR Villa': { size: '850 sq. ft.', image: '/images/damac-islands/DamacIslandFloor4.jpg' },
    '5 BR Villa': { size: '5,500 sq. ft.', image: '/images/damac-islands/DamacIslandFloor4.jpg' },
    '6 BR Villa': { size: '5,500 sq. ft.', image: '/images/damac-islands/DamacIslandFloor4.jpg' }
  };

  return (
    <section id="floor-plan" className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-emerald-700 mb-3 block">
            Architectural Mastery
          </span>
          <h3 className="text-3xl md:text-5xl font-serif text-black tracking-tighter uppercase">
            <span className="italic font-light text-emerald-900/60">Floor Plan</span>
          </h3>
          <div className="w-12 md:w-16 h-1 bg-emerald-100 mx-auto mt-4 md:mt-6"></div>
        </div>

        {/* Tab Navigation - Scrollable on Mobile */}
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 md:gap-3 mb-10 pb-4 md:pb-0">
          {Object.keys(plans).map((key) => (
            <button
              key={key}
              onClick={() => setActivePlan(key)}
              className={`whitespace-nowrap px-6 md:px-10 py-3 md:py-4 text-[10px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all border rounded-sm ${
                activePlan === key 
                  ? 'bg-black text-white border-black shadow-md' 
                  : 'border-emerald-100 text-emerald-900/40 bg-emerald-50/30'
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image Container */}
          <div className="relative group cursor-pointer" onClick={() => openEnquiryModal("Request Floor Plan")}>
            <div className="absolute inset-0 bg-emerald-900/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="bg-emerald-50/50 p-3 md:p-6 border border-emerald-100 relative overflow-hidden">
              <img 
                src={plans[activePlan as keyof typeof plans].image} 
                alt="Floor Plan" 
                className="w-full h-auto blur-md grayscale transition-all duration-1000 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
                <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 shadow-xl border border-emerald-100 flex flex-col items-center gap-3 w-full max-w-[200px]">
                  <Lock size={18} className="text-emerald-700" />
                  <p className="text-[9px] md:text-[10px] font-bold tracking-widest text-black uppercase text-center">
                    Click to view details
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="lg:pl-8 flex justify-center lg:justify-start">
            <button
              onClick={() => openEnquiryModal("Request Floor Plan")}
              className="group w-full md:w-auto bg-black text-white px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-emerald-800 flex items-center justify-center gap-3 md:gap-4"
            >
              <span className="block text-[9px] md:hidden">REQUEST ALL PLANS & PRICES</span>
              <span className="hidden md:inline">REQUEST ALL FLOOR PLANS WITH PRICES</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="BAY VILLAS BY NAKHEEL"
        buttonText={buttonText}
      />
    </section>
  );
};

export default FloorPlan;