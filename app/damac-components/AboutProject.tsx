import React, {useState, useEffect} from 'react';
import ContactModal from "../damac-components/ContactModal"

const AboutProject: React.FC = () => {
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
    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
      <div className="space-y-8">
        <div>
          <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">The Vision</span>
          <h2 className="text-2xl md:text-5xl font-heading font-light leading-tight text-zinc-900">
            About Damac Islands 2
          </h2>
        </div>
        
        <div className="space-y-4 text-zinc-500 font-light">
          <p>DAMAC Islands 2 is a premium waterfront residential community designed around a tropical island lifestyle. This master-planned development blends crystal lagoons, private beaches, lush landscapes, and resort-style amenities with spacious luxury townhouses and villas.
Each cluster is inspired by iconic island destinations, creating a holiday-at-home experience every day. The project is ideal for families seeking space, privacy, and lifestyle, as well as investors looking for strong long-term capital appreciation in Dubai’s expanding suburban luxury corridor.</p>
        </div>

           <button 
  onClick={() => openEnquiryModal("CALL BACK FROM DAMAC EXPERT")} 
  className="px-12 py-4 bg-gradient-to-br from-gray-800 to-black text-white text-sm font-bold tracking-widest rounded-sm shadow-[0_10_20px_rgba(0,0,0,1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all duration-300 border-t border-white/10"
>
  CALL BACK FROM DAMAC EXPERT
</button>

      </div>

      <div className="relative">
        <img 
          src="/images/damac-islands/DamacAboutPage.jpg" 
          alt="Project Tower" 
          className="w-full h-[650px] object-cover rounded-[2rem] shadow-2xl"
        />
        </div>
        <div>
                
              <ContactModal
                    isOpen={enquiryModalOpen}
                    onClose={closeEnquiryModal}
                    floorPlanTitle="DAMAC ISLANDS 2"
                    buttonText={buttonText} />
        
                  </div>
    </div>
  );
};

export default AboutProject;