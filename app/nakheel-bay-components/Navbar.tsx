"use client"
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import ContactModal from "./ContactModal";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const scrollToSection = (id: string) => {
  setIsOpen(false); // close menu first

  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 300); // match your motion exit duration
};

  return (
    <section>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="cursor-pointer"
>
  <Image
    src="/images/DRE_BLACK_LOGO.png"
    alt="Bay Villas Logo"
    width={40}
    height={20}
    priority
    className="object-contain"
  />
</button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {['Overview', 'Amenities', 'Location'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-600 hover:text-black transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-600 transition-all group-hover:w-full"></span>
            </button>
          ))}
          
          <button 
            onClick={() => openEnquiryModal("Request Brochure")}
            className="bg-black text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-emerald-700 transition-all duration-300 rounded-sm"
          >
            REQUEST BROCHURE
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-black text-white overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-6">
              {['Overview', 'Amenities', 'Location'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-left text-xl font-light tracking-wide border-b border-zinc-800 pb-2 hover:text-emerald-400"
                >
                  {item}
                </button>
              ))}
              <div className='bg-emerald-600 text-center'>
              <button 
                onClick={() => openEnquiryModal("Request Brochure")}
                className="text-white px-6 py-4 font-bold uppercase tracking-widest text-sm"
              >
                Request Brochure
              </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <ContactModal
            isOpen={enquiryModalOpen}
            onClose={closeEnquiryModal}
            floorPlanTitle="BAY VILLAS BY NAKHEEL"
            buttonText={buttonText}
          />
    </section>
    
  );
};

export default Navbar;