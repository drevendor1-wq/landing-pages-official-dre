
import React, { useState, useEffect } from 'react';
import ContactModal from "./ContactModal"

const FloorPlan: React.FC = () => {
  const [activePlan, setActivePlan] = useState('Townhouses');
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
    'Townhouses': {
      size: '850 sq. ft.',
      image: '/images/damac-islands/DamacIslandFloor4.jpg',
    },
    'Villas': {
      size: '5,500 sq. ft.',
      image: '/images/damac-islands/DamacIslandFloor4.jpg',
    }
  };

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700 mb-4">FLOOR PLAN</h2>
          <h3 className="text-3xl md:text-4xl font-title font-bold">SOBHA SANCTUARY FLOOR PLAN</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(plans).map((key) => (
            <button
              key={key}
              onClick={() => setActivePlan(key)}
              className={`px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-all border ${activePlan === key ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'}`}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 p-4 border border-gray-100 group overflow-hidden">
             <img 
              src={plans[activePlan as keyof typeof plans].image} 
              alt="Floor Plan" 
              className="w-full h-auto blur-sm grayscale group-hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="lg:pl-12">
            <h4 className="text-3xl font-bold mb-2">{activePlan}</h4>
            <p className="text-amber-700 font-bold mb-8 uppercase tracking-widest text-sm">TOTAL AREA: {plans[activePlan as keyof typeof plans].size}</p>
            
            <button onClick={() => openEnquiryModal("Request Floor Plan")}className="mt-12 w-full md:w-auto bg-black text-white px-12 py-5 text-[11px] font-bold tracking-widest uppercase transition-colors hover:bg-amber-700">
              REQUEST FLOOR PLAN
            </button>
          </div>
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
    </section>
  );
};

export default FloorPlan;
