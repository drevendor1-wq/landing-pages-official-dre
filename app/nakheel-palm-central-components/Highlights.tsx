"use client"
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import ContactModal from "./ContactModal";

const Highlights: React.FC = () => {
  const highlights = [
    "Situated on the central Spine of Palm Jebel Ali along the island's main artery",
    "Prime waterfront lifestyle development by Nakheel Properties",
    "Opportunity to own in Dubai's next iconic island destination",
    "Access to upcoming retail, wellness hubs and community centres within the island",
    "Excellent connectivity to Dubai Marina, Downtown Dubai and Dubai International Airport",
    "Anticipated strong rental demand — ideal for lifestyle living and investment"
  ];
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
    <section id="highlights" className="py-24 bg-white px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section based on Image 2cea7b */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.5em] uppercase text-green-500 mb-4 block"
          >
            Our Highlights
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-serif text-[#062C2D] max-w-4xl mx-auto leading-tight md:leading-[1.2]"
          >
            Where Every Angle Amazes – Our Features And Finishes Ensure A Complete, Panoramic Experience
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Cinematic Image based on Image 6fbc3f */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
              <img 
                src="https://cdn.opr.ae/upload/photo/Bay%20Grove%20Residences.jpg" 
                alt="Palm Central Waterfront" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062C2D]/20 to-transparent" />
            </div>
            
            {/* Decorative Element matching the refined brand style */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-50 rounded-full -z-10 blur-2xl opacity-60" />
          </motion.div>

          {/* Right Side: Elegant List based on Image 2cea7b */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-0">
              {highlights.map((text, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start gap-6 py-6 border-b border-slate-100 last:border-0"
                >
                  {/* Custom Bullet Point matching image_2cea7b */}
                  <div className="relative mt-1.5 shrink-0">
                    <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-green-500 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed group-hover:text-[#062C2D] transition-colors">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

          
          <motion.button
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.7 }}
  className="mt-10 flex items-center justify-center gap-3 bg-green-500 text-white px-6 md:px-10 py-4 rounded-full text-xs md:text-[14px] font-bold uppercase tracking-[0.1em] hover:bg-green-600 transition-all shadow-xl shadow-[#062C2D]/10 w-full sm:w-fit"
>
  <span className="text-center" onClick={() => openEnquiryModal("Request Information")} >
    Learn More About Palm Central
  </span>

  <div className="hidden sm:block w-5 h-[1px] bg-white/50" />
</motion.button>
            
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

export default Highlights;