"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    { q: "What is Greenz by Danube?", a: "Greenz by Danube is the first green-focused villa community by Danube Properties in Academic City, Dubai. It features premium 3-6 bedroom townhouses and villas designed with sustainable living and contemporary architecture." },
    { q: "Where is Greenz by Danube located?", a: "The project is located near Academic City, Dubai, offering easy access to major educational institutions, Downtown Dubai, and Dubai International Airport." },
    { q: "What types of properties are available at Greenz?", a: "The project offers 3, 4, 5, and 6 bedroom townhouses and villas. All units feature private gardens, open-plan living areas, premium finishes, and smart home pre-wiring." },
    { q: "What lifestyle amenities will Greenz offer?", a: "Residents can enjoy Central Park, lap pool, kids' pool, fitness centre, cycling tracks, jogging tracks, sports courts, children's play areas, retail boulevard, café, and EV charging stations." },
    { q: "What Payment plan is offered for Greenz?", a: "Greenz by Danube offers a flexible 70/30 payment plan: 10% down payment, 60% during construction (1% monthly instalments), and 30% post-handover. Handover date to be announced." },
    { q: "How can I invest in Greenz?", a: "Discover your future home at Greenz; our team is ready to provide personalized insights and a curated list of available units." },
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