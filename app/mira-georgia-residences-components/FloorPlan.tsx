"use client"
import React, { useState } from 'react';
import ContactModal from "./ContactModal";

const MiraVerdeShowcase = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const openEnquiryModal = (text: string = "Register Interest") => {
    setButtonText(text);
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="mira-verde" className="bg-white font-sans selection:bg-[#047857] selection:text-white">
      
      {/* SECTION 1: Header & Introduction */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-4xl mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#047857] mb-8 leading-[1.1] tracking-tight">
            Mira Verde: A New Residential <br className="hidden md:block" /> Benchmark for Tbilisi
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Developed by Mira Developments, Mira Verde is a fully branded, master-planned community that 
            redefines contemporary living in Georgia. A fully integrated district bringing together residences, 
            villas, townhouses, and hospitality within a single master plan.
          </p>
        </div>

        {/* Feature Row 1: The Setting */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 lg:mb-32">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-200">
              <img 
                src="https://mira-verde.com/assets/v039.jpg" 
                alt="Mira Verde Aerial View" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
            <h3 className="text-3xl font-serif text-[#047857] leading-snug">
              A Prestigious Setting with Panoramic Views
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Set above the historic Krtsanisi Residence District, long associated with Georgia's 
              diplomatic and governmental elite, Mira Verde occupies one of the most prestigious 
              natural elevations in Tbilisi.
            </p>
            <div className="space-y-3 pt-4">
              <button 
                onClick={() => openEnquiryModal("DOWNLOAD BROCHURE")}
                className="w-full py-4 border border-[#047857] text-[#047857] text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                Download Brochure
              </button>
              <div className='bg-[#047857]'>
              <button 
                onClick={() => openEnquiryModal("REGISTER NOW")}
                className="w-full py-4 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#035e44] transition-all duration-300 shadow-lg shadow-emerald-900/10"
              >
                Register Your Interest
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Row 2: Nature (Reversed Layout) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center space-y-8">
            <h3 className="text-3xl font-serif text-[#047857] leading-snug">
              Nature as Part of the Community
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Positioned 400 metres above central Tbilisi, Mira Verde commands fresh mountain air 
              and natural forest landscape. Features lush green corridors and direct links to world-class golf.
            </p>
            <div className="space-y-3 pt-4">
              <button 
                onClick={() => openEnquiryModal("DOWNLOAD BROCHURE")}
                className="w-full py-4 border border-[#047857] text-[#047857] text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                Download Brochure
              </button>
              <div className='bg-[#047857]'>
              <button 
                onClick={() => openEnquiryModal("REGISTER NOW")}
                className="w-full py-4 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#035e44] transition-all duration-300 shadow-lg shadow-emerald-900/10"
              >
                Register Your Interest
              </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-200">
              <img 
                src="https://mira-verde.com/assets/gallery4.webp" 
                alt="Mira Verde Nature" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
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

export default MiraVerdeShowcase;