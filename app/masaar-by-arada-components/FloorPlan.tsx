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
            Welcome to Masaar
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
           Masaar by Arada, a newly launched development that offers a selection of 2 to 4-bedroom townhouses and 4 & 5-bedroom park villas at Sharjah, UAE. This limited edition home offers two different colour schemes as warm and cool type within the green forest community.
          </p>
        </div>

        {/* Feature Row 1: The Setting */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 lg:mb-32">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-200">
              <img 
                src="https://aradawebcontent.blob.core.windows.net/arada-com/2024/01/masaar6.jpg" 
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
              Take a moment to breathe it in — the cool tranquillity that welcomes you home. This is your new address. A place to restore your spirit — just minutes from the city, yet a world away. Masaar is a residential sanctuary formed by seven gated communities, with abundant green space and every necessity close at hand. <br /> <br />
              From two-bedroom townhouses to majestic five-bedroom signature villas, all units come with smart home features as standard and have direct access to lush green parks.
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
                onClick={() => openEnquiryModal("REGISTER YOUR INTEREST")}
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
              Masaar is an upscale forested community with a ‘green spine’ featuring more than 50,000 trees connecting each of the seven gated districts to the community hub. <br /> <br />
              The project was designed for residents to spend more time outdoors and provide an active, healthy lifestyle. Masaar comes with a community center, 13 kilometers of cycling and jogging trails, while the green spine features quiet zones, unique engaging installations, and football, tennis, basketball and padel tennis courts.
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
                src="https://aradawebcontent.blob.core.windows.net/arada-com/2022/08/masaar-arialview.png" 
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
        floorPlanTitle="Masaar By Arada at Sharjah"
        buttonText={buttonText}
      />
    </section>
  );
};

export default MiraVerdeShowcase;