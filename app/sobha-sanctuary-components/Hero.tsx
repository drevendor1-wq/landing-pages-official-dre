import { open } from 'node:inspector/promises';
import React, {useState, useEffect} from 'react';
import ContactModal from "./ContactModal"

const Hero: React.FC = () => {
  
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

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/images/sobha-sanctuary/SobhaHeroPage.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col justify-end h-full pb-20">
        
        {/* Main Title Section */}
       <div className="mb-3">

  <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
    <div className="max-w-2xl">
<h1 className="text-4xl md:text-9xl font-bold uppercase relative inline-block group">
  <span className="relative z-10 text-white">Sobha Sanctuary</span>
  <span className="absolute inset-0 text-[#FF6B00] clip-path-middle group-hover:translate-x-4 transition-transform duration-500 opacity-50">
    Sobha Sanctuary
  </span>
</h1>
{/* Clip path would be defined in CSS as a horizontal strip through the middle */}
      <h2 className="text-zinc-100 text-xs md:text-lg font-serif tracking-wide mt-4 leading-snug">
       Set within a vast master-planned landscape in Dubailand, Sobha Sanctuary brings together crystal lagoons, lush greenery, and refined architecture to create a self-sustained residential destination defined by privacy, balance, and long-term value.
      </h2>

      {/* Button Container */}
      <div className="mt-4 flex flex-col sm:flex-row gap-6 md:gap-8">
        {/* Brochure Button */}

       <div className="bg-[#E27000] rounded-full inline-flex items-center">
  <button 
  type="button" 
  onClick={() => openEnquiryModal("LOCATION GROWTH INSIGHTS")} 
  className="
    /* 1. Centering logic */
    flex items-center justify-center text-center
    
    /* 2. Shape & Background */
    bg-[#B35109] rounded-full whitespace-nowrap
    
    /* 3. Typography */
    text-white font-bold uppercase tracking-[0.1em]
    text-[6px] sm:text-[7px]
    
    /* 4. Sizing & Spacing */
    px-4 py-2 min-w-[140px]
    
    /* 5. Effects */
    transition-all duration-300 hover:bg-zinc-900 active:scale-95
  "
>
  LOCATION GROWTH INSIGHTS
</button>
</div>
    <button 
        onClick={() => openEnquiryModal("CALL BACK FROM SOBHA EXPERT")}
        className="px-3 py-2 md:px-6 md:py-4 font-light uppercase text-black bg-white rounded-lg shadow-lg transition-all duration-500 hover:scale-105">
  CALL BACK FROM SOBHA EXPERT
</button>
      </div>
    </div>
      <div>
        
      <ContactModal
            isOpen={enquiryModalOpen}
            onClose={closeEnquiryModal}
            floorPlanTitle="SOBHA SANCTUARY"
            buttonText={buttonText} />

          </div>
  </div>
</div>
    </div>
    </div>

  );
};     

export default Hero;