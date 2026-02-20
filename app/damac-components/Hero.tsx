import { open } from 'node:inspector/promises';
import React, {useState, useEffect} from 'react';
import ContactModal from "../damac-components/ContactModal"

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  
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
        style={{ backgroundImage: `url('/images/damac-islands/CoverDamacIslands.webp')` }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col justify-end h-full pb-20">
        
        {/* Main Title Section */}
       <div className="mb-3">
  <h1 className="mb-4 text-white font-['Playfair_Display'] text-4xl md:text-7xl lg:text-8xl leading-none 
    uppercase tracking-[0.1em]
    opacity-100 mix-blend-difference selection:bg-white selection:text-black
    transition-all duration-1000 hover:tracking-[0.2em] cursor-default">
    DAMAC <br />
    <span className="text-stroke-thin text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>
      ISLANDS 2
    </span>
  </h1>

  <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
    <div className="max-w-2xl">
      <h2 className="text-zinc-100 text-lg md:text-lg font-serif tracking-wide mb-12 leading-snug">
       Inspired by the world’s most captivating island destinations, this exclusive community is designed with intention, emotion and nature at its heart.
      </h2>

      {/* Button Container */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
        {/* Brochure Button */}
        <button 
          onClick={() => openEnquiryModal("Request Brochure")} 
          className="relative px-12 py-4 bg-white text-black text-sm font-bold tracking-[0.1em] rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:-translate-y-2 transition-all duration-300"
        >
          REQUEST BROCHURE
          <div className="absolute -bottom-2 -left-2 w-full h-full border border-white/20 -z-10"></div>
        </button>

         <button 
          onClick={() => openEnquiryModal("CALL BACK FROM DAMAC EXPERT")}  // Ensure this function is defined in your props/component
          className="relative text-sm md: 2xl px-12 py-4 bg-white text-black font-bold tracking-[0.1em] rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-2 hover:-translate-y-2 transition-all duration-300"
        >
          CALL BACK FROM DAMAC EXPERT
          <div className="absolute -bottom-2 -left-2 w-full h-full border border-white/20 -z-10"></div>
        </button>

      </div>
    </div>
      <div>
      <ContactModal
            isOpen={enquiryModalOpen}
            onClose={closeEnquiryModal}
            floorPlanTitle="DAMAC ISLANDS 2"
            buttonText={buttonText}
            projectTitle="Damac Islands 2 | Premium Waterfront Townhouses and Villas"
          />
          </div>
  </div>
</div>
    </div>
    </div>

  );
};

export default Hero;