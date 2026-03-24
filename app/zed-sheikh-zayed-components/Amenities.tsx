"use client"
import { motion } from 'framer-motion';
import { useRef } from 'react';

const PremiumAmenities = () => {
  const containerRef = useRef(null);

  // Content precisely from the provided image
  const amenities = [
    { title: "Retail", icon: "https://cdn-icons-png.flaticon.com/512/3050/3050212.png" },
    { title: "ZED Strip", icon: "https://cdn-icons-png.flaticon.com/512/1018/1018573.png" },
    { title: "Medical Facility", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
    { title: "Central Fire Alarm & Firefighting systems", icon: "https://cdn-icons-png.flaticon.com/512/580/580833.png" },
    { title: "24/7 security, surveillance system & facility management", icon: "https://cdn-icons-png.flaticon.com/512/1067/1067555.png" },
    { title: "Gym", icon: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png" },
    { title: "Banks", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png" },
    { title: "Parking", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830305.png" },
    { title: "Luxurious & Spacious Entrances", icon: "https://cdn-icons-png.flaticon.com/512/2413/2413032.png" },
    { title: "Centralized Air Conditioning", icon: "https://cdn-icons-png.flaticon.com/512/911/911413.png" },
    { title: "Integrated building management system", icon: "https://cdn-icons-png.flaticon.com/512/4243/4243103.png" },
    { title: "Internal Courtyards", icon: "https://cdn-icons-png.flaticon.com/512/2163/2163350.png" },
    { title: "Different Interior Design Options", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048348.png" },
  ];

  return (
    <section id="amenities" ref={containerRef} className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.8em] uppercase mb-4">
              The Lifestyle
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none mb-6">
              World Class <span className="font-serif italic text-[#D4AF37]">Amenities</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#D4AF37]/50"></div>
          </motion.div>
        </div>

        {/* AMENITIES GRID - High-End Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              className={`
                group relative flex items-center p-8 lg:p-12 border-b border-white/10 transition-all duration-500 hover:bg-white/[0.02]
                ${i % 2 === 0 ? 'md:border-r md:border-white/10' : ''}
              `}
            >
              {/* Animated Gold Indicator */}
              <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#D4AF37] transition-all duration-700 group-hover:h-full" />
              
              <div className="flex items-center gap-8 w-full">
                {/* ICON - Filtered to Gold */}
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-full h-full object-contain filter invert-[.7] sepia-[.6] saturate-[5] hue-rotate-[10deg] brightness-[1] transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                    style={{ filter: 'invert(75%) sepia(35%) saturate(583%) hue-rotate(5deg) brightness(92%) contrast(91%)' }}
                  />
                </div>

                {/* TITLE */}
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-light tracking-[0.15em] uppercase text-white/80 group-hover:text-[#D4AF37] transition-colors duration-500 leading-relaxed">
                    {item.title}
                  </h3>
                </div>

                {/* DESIGN ELEMENT: Staggered Index */}
                <span className="text-[10px] font-serif italic text-white/10 group-hover:text-[#D4AF37]/20 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mt-20"
        />
      </div>

      {/* BACKGROUND ACCENT TEXT */}
      <div className="absolute bottom-0 right-10 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20vw] font-serif leading-none italic">ZED</h2>
      </div>
    </section>
  );
};

export default PremiumAmenities;