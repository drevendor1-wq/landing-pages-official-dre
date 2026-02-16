"use client"
import React, { useState } from 'react';

const faqs = [
  { q: "What are the floor plans like at Damac Islands 2?", a: "Damac Islands features contemporary architectural designs with spacious layouts, including 4 and 5-bedroom townhouses and 6 and 7-bedroom villas. Each unit is thoughtfully designed, offering private swimming pools, landscaped gardens, and elegant interiors." },
  { q: "What are the payment plans for Damac Islands 2?", a: "Damac Islands offers a flexible 75/25 payment plan, with 75% during construction and 25% on handover. Secure your unit with just a 10% downpayment as the booking amount." },
  { q: "When will Damac Islands 2 be completed?", a: "The Damac Islands development is expected to be completed by 2029." },
  { q: "What are the clusters in Damac Islands 2?", a: "Damac Islands Phase 2 comprises 8 exclusive clusters — Antigua, Mauritius, Cuba, Bermuda, Maui, Barbados, Bahamas, and Tahiti — offering luxurious 4 and 5-bedroom townhouses. These elegant residences feature built-up areas ranging from 2,186 to 3,158 sq.ft with plot sizes between 1,552 and 2,583 sq.ft." },
  { q: "What are the plot sizes and saleable areas available at Damac Islands 2?", a: "Plot sizes range from 1,645 sq.ft (152.8 sq.m) for 4-bedroom townhouses to 13,472 sq.ft (1,251 sq.m) for 7-bedroom villas. Saleable areas vary from 2,208 sq.ft (205 sq.m) to 17,079 sq.ft (1,586 sq.m)." },
  { q: "Why should I invest in Damac Islands 2?", a: " Investing in Damac Islands offers a lucrative opportunity in Dubai’s booming real estate market. With competitive pricing, a flexible payment plan, and a prime location near top attractions, it ensures high returns and an unparalleled luxury living experience." }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">Support</span>
        <h2 className="text-4xl font-heading font-light text-zinc-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-zinc-100 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-50 transition-colors"
            >
              <span className="font-medium text-lg text-zinc-900">{faq.q}</span>
              <div className={`w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'rotate-45' : ''}`}>
                 <svg className="w-5 h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
               <div className="p-6 pt-4 text-zinc-500 font-light leading-relaxed border-t border-zinc-50">
                  {faq.a}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;