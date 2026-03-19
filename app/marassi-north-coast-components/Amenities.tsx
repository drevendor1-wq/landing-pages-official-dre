"use client"
import { Ship, Dumbbell, Sun, Waves, Anchor, Flag, Circle, Mountain, Tent, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Amenities = () => {
  const amenities = [
    { title: "6 Beachesat Rides", icon: <Ship size={20} /> },
    { title: "11 World Class Hotels", icon: <Dumbbell size={20} /> },
    { title: "23 Residential Villages", icon: <Sun size={20} /> },
    { title: "18-Hole Golf Course", icon: <Anchor size={20} /> },
    { title: "International Marina", icon: <Waves size={20} /> },
    { title: "Marassi Water World", icon: <Flag size={20} /> },
    { title: "Nightlife & Entertainment", icon: <Circle size={20} /> },
    { title: "Mporium", icon: <Mountain size={20} /> },
    { title: "Sports Facilities", icon: <Tent size={20} /> },
  ];

  return (
    <section id="amenities" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold tracking-[0.5em] uppercase text-green-500 mb-4 block"
          >
            Lifestyle Curated
          </motion.span>
          <h2 className="text-3xl md:text-6xl font-serif text-[#062C2D] leading-tight">
            World Class <span className="italic text-green-500">Amenities</span>
          </h2>
        </div>

        {/* The List: Clean, Row-based layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between py-8 border-b border-slate-100 hover:border-green-500 transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-6">
                <div className="text-slate-300 group-hover:text-green-500 transition-colors duration-500">
                  {item.icon}
                </div>
                <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-[#062C2D]">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;