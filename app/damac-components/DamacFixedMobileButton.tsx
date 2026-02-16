import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DamacFixedMobileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    // Reset submission state when closing/reopening
    if (isOpen) setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating an API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* Fixed Mobile Button - Blue & Black Gradient */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-black/90 backdrop-blur-md border-t border-blue-900/30">
        <button
          onClick={togglePopup}
          className="w-full bg-gradient-to-r from-[#001f3f] to-[#000000] text-white py-4 px-6 border border-blue-800/50 rounded-sm font-bold tracking-[0.2em] text-sm uppercase transition-all active:scale-95 shadow-[0_0_15px_rgba(0,31,63,0.5)]"
        >
          Get Costing Details
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={togglePopup}
              className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] text-white z-[70] rounded-t-3xl p-8 border-t border-blue-900/50 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button onClick={togglePopup} className="absolute top-6 right-6 text-blue-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="text-xl font-light tracking-widest mb-2 uppercase text-blue-100">GET AVAILABLE PRICE LIST </h2>
                  <p className="text-blue-400/60 text-xs mb-8 uppercase tracking-tighter">DAMAC ISLANDS 2 </p>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                      <input required type="text" className="w-full bg-transparent border-b border-blue-900/50 py-3 focus:border-blue-400 outline-none transition-colors placeholder:text-gray-600" placeholder="FULL NAME" />
                    </div>
                    <div className="relative">
                      <input required type="email" className="w-full bg-transparent border-b border-blue-900/50 py-3 focus:border-blue-400 outline-none transition-colors placeholder:text-gray-600" placeholder="EMAIL ADDRESS" />
                    </div>
                    <div className="relative">
                      <input required type="tel" className="w-full bg-transparent border-b border-blue-900/50 py-3 focus:border-blue-400 outline-none transition-colors placeholder:text-gray-600" placeholder="PHONE NUMBER" />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-blue-700 hover:bg-blue-600 text-white py-4 mt-4 font-black uppercase tracking-[0.3em] transition-all flex justify-center items-center"
                    >
                      {isLoading ? "PROCESSING..." : "SUBMIT"}
                    </button>
                  </form>
                </>
              ) : (
                /* Success Message - Only shown after submit */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/50">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Inquiry Received</h3>
                  <p className="text-blue-200/80 text-sm leading-relaxed max-w-[250px] mx-auto">
                    Our team will contact you shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DamacFixedMobileButton;