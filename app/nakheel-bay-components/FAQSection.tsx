"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    { q: "What is Bay Villas?", a: "Bay Villas is a premium, waterfront residential development located on Island B of the Dubai Islands" },
    { q: "Where is Bay Villas located?", a: "Bay Villas by Nakheel is located on Island B of the Dubai Islands" },
    { q: "What types of properties are available at Bay Villas?", a: "The Bay Villas residential community features a premium collection of 3 to 6-bedroom villas." },
    { q: "What lifestyle amenities will Bay Villas offer?", a: "Bay Villas is planned to include landscaped parks, lagoons, healthcare facilities, retail, dining, sports areas, and outdoor leisure spaces." },
    { q: "What Payment plan is offered for Bay Villas?", a: "Buyers can benefit from a structured 80/20 payment plan aligned with the development milestones." },
    { q: "How can I invest in Bay Villas?", a: "Discover your future home at Bay Villas; our team is ready to provide personalized insights and a curated list of available units." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-black/5 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-bay-blue/10 transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-bay-dark/60 text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;