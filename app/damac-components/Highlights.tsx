
import React from 'react';

const Highlights: React.FC = () => {
  const highlightItems = [
    { title: "Property Type", desc: "Townhouses and Villas" },
    { title: "Bedrooms", desc: "4,5,6 & 7 BHK" },
    { title: "Starting Price", desc: "2.75 M AED" },
    { title: "Payment Plan", desc: "75/25" },
    { title: "Handover", desc: "Q2 2030" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {highlightItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-2 border-r border-zinc-200 last:border-0 group">
            <h4 className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold">{item.title}</h4>
            <p className="text-zinc-900 font-heading text-sm md:text-base font-medium group-hover:text-black transition-colors">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;