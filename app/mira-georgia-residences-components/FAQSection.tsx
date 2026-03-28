"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MoveRight } from 'lucide-react';

const FAQLuxuryFloat = () => {
  const faqs = [
    { q: "What properties are available for sale in Mira Verde?", a: "Mira Verde offers a curated selection of branded, fully furnished residences, including studios, apartments, townhouses, villas, and mansions ranging from 37.98 to 1,500 m2." },
    { q: "How much do properties in Mira Verde cost?", a: "Prices start at $175,000 for branded studios, $295,000 for 1-BR apartments, $415,000 for 2-BR apartments, $990,000 for townhouses, $2.2 million for villas, and $5.5 million for branded mansions." },
    { q: "What payment plans are available for Mira Verde?", a: "A 60/40 payment plan is available, allowing 60% during construction and 40% upon completion." },
    { q: "What is Mira Verde’s handover date?", a: "The handover of Trussardi Residences, Mira Verde, the first phase of the Mira Verde master development, is scheduled for Q4 2028 in accordance with the current construction schedule." },
    { q: "How do I buy property in Mira Verde?", a: "You can register directly through this website to receive full details and availability. All sales are managed directly by Mira Developments." },
    { q: "Is Mira Verde an off-plan property?", a: "Yes, Mira Verde is currently an off-plan development available for early-stage investment." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-50 py-32 md:py-48 px-6 relative overflow-hidden">

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-xl mx-auto">
          <motion.span initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-[#047857] font-bold tracking-[0.5em] uppercase text-[9px] mb-4 block">Information Center</motion.span>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tighter">Frequently Asked <span className="italic text-[#047857]">Questions</span></motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i:any) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className={`rounded-[30px] transition-all duration-500 bg-white ${
                openIndex === i 
                ? "shadow-2xl shadow-[#047857]/10" 
                : "hover:shadow-xl hover:shadow-[#047857]/5"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 md:p-10 flex justify-between gap-8 text-left group"
              >
                <span className={`text-xl font-medium transition-colors duration-300 ${openIndex === i ? "text-[#047857]" : "text-slate-800"}`}>
                  {faq.q}
                </span>
                <ChevronDown size={28} strokeWidth={1.5} className={`transition-transform duration-500 mt-1 ${openIndex === i ? "rotate-180 text-[#047857]" : "text-slate-300 group-hover:text-[#047857]"}`} />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <div className="px-8 md:px-10 pb-10 pr-12 text-slate-500 font-light leading-relaxed max-w-3xl">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mt-24 text-center">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-6">Still have questions?</p>
          <button 
             onClick={() => { document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' }); }}
             className="btext-black px-10 py-5 rounded-full flex items-center gap-3 font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-lg shadow-[#047857]/20 mx-auto"
          >
            CONNECT WITH OUR EXPERTS <MoveRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQLuxuryFloat;