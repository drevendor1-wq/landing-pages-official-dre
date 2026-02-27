
import React from 'react';
import { Layout, Maximize, Map, Clock } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlightItems = [
    {
      title: 'Backward Integration',
      desc: 'Sobha controls every aspect from design and engineering to manufacturing and construction ensuring unparalleled quality control.',
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: '50+ Years of Legacy',
      desc: 'Founded in 1976, Sobha has a proven global track record spanning five decades of delivering world-class developments.',
      icon: <Maximize className="w-6 h-6" />,
    },
    {
      title: 'Signature Craftsmanship',
      desc: 'Every Sobha home is finished with premium Italian marble, hand-crafted joinery, and meticulous attention to the finest details.',
      icon: <Map className="w-6 h-6" />,
    },
    {
      title: 'On-Time Delivery',
      desc: '95% on-time delivery track record, giving investors confidence that their property will be ready as promised.',
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <section id="highlights" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-4">THE SOBHA DIFFERENCE</h2>
          <h3 className="text-3xl md:text-5xl font-title font-bold tracking-tight">WHY SOBHA REALTY?</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {highlightItems.map((item, idx) => (
            <div key={idx} className="group p-8 border border-gray-100 transition-all hover:bg-gray-50">
              <div className="mb-6 text-amber-700 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              <h4 className="text-sm md:text-lg font-bold mb-3 tracking-tight">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
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