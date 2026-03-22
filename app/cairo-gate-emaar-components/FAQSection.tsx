"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    { q: "What is Palm Central?", a: "Palm Central by Nakheel is an exclusive, beachfront residential development on Palm Jebel Ali in Dubai, featuring 212 luxury units, including 1–5 bedroom apartments, townhouses, and penthouses." },
    { q: "Where is Palm Central located?", a: "Palm Central Private Residences is located in Palm Jebel Ali, Dubai." },
    { q: "What types of properties are available at Palm Central?", a: "The Palm residential community features a premium collection of 3 to 6-bedroom villas.The development offers apartments, townhouses & penthouses, ranging from 1 to 5 bedrooms and size starting from 731 sq. ft." },
    { q: "What lifestyle amenities will Palm Central offer?", a: "Palm Central is planned to include landscaped parks, lagoons, healthcare facilities, retail, dining, sports areas, and outdoor leisure spaces." },
    { q: "What Payment plan is offered for Palm Central?", a: "Buyers can benefit from a structured 70/30 payment plan aligned with the development milestones." },
    { q: "How can I invest in Palm Central?", a: "Discover your future home at Palm Central; our team is ready to provide personalized insights and a curated list of available units." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#F8FAFC]"> {/* Light Blue-tinted white */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Information Center
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#062C2D] tracking-tighter">
            Frequently Asked <span className="italic text-green-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={false}
              animate={{ backgroundColor: openIndex === i ? "#ffffff" : "transparent" }}
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === i 
                ? "shadow-xl shadow-blue-900/5 border border-sky-100" 
                : "border border-transparent hover:border-sky-100"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex justify-between items-center text-left group"
              >
                <span className={`text-lg font-medium transition-colors duration-300 ${
                  openIndex === i ? "text-[#062C2D]" : "text-slate-600 group-hover:text-[#062C2D]"
                }`}>
                  {faq.q}
                </span>
                
                <div className={`transition-all duration-500 transform ${openIndex === i ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown 
                    size={24} 
                    className={openIndex === i ? "text-green-500" : "text-slate-300 group-hover:text-green-500"} 
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-slate-500 leading-relaxed max-w-2xl border-t border-sky-50 pt-4 mt-[-10px] ml-0">
                      <p className="text-sm md:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-4">Still have questions?</p>
          <button 
  onClick={() => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="inline-block border-b-2 border-green-500 pb-1 text-[#062C2D] font-bold hover:text-green-500 transition-colors"
>
  CONNECT WITH OUR EXPERTS
</button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;