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

  // Professional URL-encoded message
  const whatsappNumber = "971527543245";
  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in Greenz by Danube. Please provide more information regarding the project and available units."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <section>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer"
          >
            <Image
              src="/images/DRE_BLACK_LOGO.png"
              alt="Logo"
              width={40}
              height={20}
              priority
              className="object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-10">
            {['Overview', 'Highlights','Amenities', 'Location'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-600 hover:text-black transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
            
            <div className='bg-green-500'>
              <button 
                onClick={() => openEnquiryModal("Request Brochure")}
                className="text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-emerald-700 transition-all duration-300 rounded-sm"
              >
                GET FREE CONSULTATION
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 left-0 w-full bg-black text-white overflow-hidden md:hidden shadow-2xl"
            >
              <div className="p-8 flex flex-col gap-6">
                {['Overview', 'Highlights','Amenities', 'Location'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="text-left text-xl font-light tracking-wide border-b border-zinc-800 pb-2 hover:text-emerald-400"
                  >
                    {item}
                  </button>
                ))}
                <div className='bg-green-500 text-center'>
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
        floorPlanTitle="GREENZ BY DANUBE"
        buttonText={buttonText}
      />

      {/* WhatsApp Button with Auto-Message */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.708 2.193 8.19L.07 31.93l7.53-2.06a15.94 15.94 0 0 0 8.4 2.31h.007c8.835 0 16-7.164 16-16S24.842.396 16 .396zm0 29.25a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.47 1.22 1.2-4.36-.31-.5a13.21 13.21 0 1 1 10.79 5.76zm7.36-9.86c-.4-.2-2.36-1.17-2.73-1.3-.37-.13-.64-.2-.91.2s-1.05 1.3-1.28 1.57c-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-2-.59-.52-1-1.17-1.12-1.37-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.91-2.2-1.25-3-.33-.8-.66-.7-.91-.7h-.77c-.25 0-.66.1-1 .46s-1.32 1.29-1.32 3.15 1.35 3.65 1.54 3.9c.2.25 2.65 4.04 6.43 5.66.9.39 1.6.62 2.14.8.9.28 1.72.24 2.36.15.72-.11 2.36-.96 2.7-1.88.34-.92.34-1.7.24-1.88-.1-.18-.37-.28-.77-.48z" />
        </svg>
      </a>
    </section>
  );
};

export default Navbar;