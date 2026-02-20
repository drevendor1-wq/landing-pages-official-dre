import React, {useEffect, useState} from 'react';
import { ArrowRight} from 'lucide-react';
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
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background with subtle zoom and overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-[30s] scale-110 animate-slow-zoom"
          style={{ backgroundImage: 'url("https://sanctuary-dubai.com/wp-content/uploads/2026/01/sobha-sanctuary-600-430-1.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <p className="text-amber-100 text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-6 animate-fade-in-down">
          A New Expression of Private Community Living
        </p>
        
        <h1 className="text-5xl md:text-[8vw] font-black tracking-tighter mb-10 drop-shadow-2xl">
          SOBHA SANCTUARY
        </h1>

        {/* Floating Glass Price Card */}
 <div className="inline-flex items-stretch bg-white/10 backdrop-blur-xl border border-white/20 p-1.5 pl-6 rounded-full mb-12 shadow-2xl overflow-hidden min-w-[320px] md:min-w-[400px] justify-between transition-all hover:border-white/40 group">
  
  {/* Left Section: Label */}
  <p className="flex items-center text-[12px] md:text-xl font-bold tracking-[0.2em] text-white/90 uppercase whitespace-nowrap">
    Starting From
  </p>
  
  <div className="bg-[#E27000] text-white px-8 md:px-10 py-3 ml-6 rounded-full font-black text-base md:text-xl tracking-wide shadow-lg flex items-center justify-center transition-transform group-hover:scale-[1.02] active:scale-95 cursor-pointer">
    AED 5.0M
  </div>
</div>

<div className="flex flex-wrap justify-center gap-6 my-8 sm:my-0">
  <button onClick={() => openEnquiryModal("Request Brochure")} className="group relative overflow-hidden bg-white text-black px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] transition-all">
    <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
      Request Brochure <ArrowRight size={16} />
    </span>
    <div className="absolute inset-0 bg-amber-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
  </button>
</div>
      </div>

      <div>
            <ContactModal
                  isOpen={enquiryModalOpen}
                  onClose={closeEnquiryModal}
                  floorPlanTitle="SOBHA SANCTUARY"
                  buttonText={buttonText}
                />
                </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px white;
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;