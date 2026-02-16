import React from 'react';
import { Home, BedDouble, Wallet, Calendar, Key } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlightItems = [
    { title: "Property Type", desc: "Townhouses & Villas", icon: <Home size={20} /> },
    { title: "Bedrooms", desc: "4, 5, 6 & 7 BHK", icon: <BedDouble size={20} /> },
    { title: "Starting Price", desc: "2.75 M AED", icon: <Wallet size={20} /> },
    { title: "Payment Plan", desc: "75/25", icon: <Calendar size={20} /> },
    { title: "Handover", desc: "Q2 2029", icon: <Key size={20} /> },
  ];

  return (
    <section className="bg-zinc-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          {highlightItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:bg-zinc-50 border-b md:border-b-0 md:border-r border-zinc-100 last:border-0"
            >
              {/* Icon Container */}
              <div className="mb-4 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                {item.icon}
              </div>
              
              {/* Text Content */}
              <span className="text-zinc-400 uppercase tracking-[0.15em] text-[10px] font-bold mb-1">
                {item.title}
              </span>
              <p className="text-zinc-900 text-sm md:text-base font-semibold leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;