"use client"
import { MapPin, Plane, Car, ShoppingBag, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationAdvantage = () => {
  const travelTimes = [
    { time: "10 min", label: "Dubai Outlet Mall", icon: <Landmark size={18} /> },
    { time: "15 min", label: "Global Village", icon: <Landmark size={18} /> },
    { time: "18 min", label: "Dubai Silicon Oasis", icon: <Landmark size={18} /> },
    { time: "25 min", label: "Dubai International Airport", icon: <Plane size={18} /> },
    { time: "35 min", label: "Al Maktoum International Airport", icon: <Plane size={18} /> },
  ];

  return (
    <section id="location" className="py-12 md:py-32 px-4 md:px-6 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0 rounded-[32px] md:rounded-[40px] overflow-hidden bg-white shadow-2xl shadow-blue-900/5 border border-white">
          
          {/* Top on Mobile / Right on Laptop: The Map Stage */}
          <div className="lg:w-[60%] relative h-[350px] md:h-[500px] lg:h-auto overflow-hidden group order-1 lg:order-2">
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src="https://www.dubai-sales-office.com/Projects/Danube-Properties/Danube-Greenz-Al-Rowaiyah-First-Dubai/images/LocationMap.jpg?_gl=1*23c0e4*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HXwP7whc6UNtaTr1RgQcX8XC1t_Wf4hLmzk9ijSeEMMk5f3wlKk8ksaAh9SEALw_wcB&gbraid=0AAAAABb1S8-iumgcua0uwvaaO7rPibdTF" 
              alt="Map View" 
              className="w-full h-full object-cover grayscale-[100%] md:grayscale-[100%] lg:group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Desktop Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
            
            {/* Mobile Gradient Overlay (Bottom to Top) */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden"></div>
            
            {/* Pulsing Pin Marker */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                <div className="relative bg-[#062C2D] p-3 md:p-4 rounded-full border-2 border-white shadow-2xl">
                  <MapPin size={20} className="text-white md:hidden" />
                  <MapPin size={24} className="text-white hidden md:block" />
                </div>
              </div>
            </div> */}
          </div>

          {/* Bottom on Mobile / Left on Laptop: The Data Panel */}
          <div className="lg:w-[40%] p-8 md:p-16 flex flex-col justify-between bg-white relative z-10 order-2 lg:order-1">
            <div className="mb-10 md:mb-0">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-green-500 mb-4 md:mb-6 block"
              >
                Prime Connectivity
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif mb-6 md:mb-10 text-[#062C2D] tracking-tighter leading-[1.1] md:leading-[0.9]"
              >
                The <span className="italic text-green-500">Location</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-500 text-sm md:text-base font-light leading-relaxed mb-8 md:mb-12 border-l-2 border-green-500 pl-6 md:pl-8"
              >
                Strategically positioned on the island's central Spine, between Fronds M and N, offering unparalleled connectivity and lifestyle access.
              </motion.p>
            </div>

            {/* Travel Times: Grid on Mobile, Stack on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
              {travelTimes.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 md:p-5 rounded-2xl bg-[#F8FAFC] lg:bg-transparent lg:hover:bg-green-50 transition-all group"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 md:gap-4 mb-2 lg:mb-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white lg:bg-[#F8FAFC] flex items-center justify-center text-[#062C2D] group-hover:text-green-500 transition-all shadow-sm lg:shadow-none">
                      {item.icon}
                    </div>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-[#062C2D]">
                      {item.label.split(' ').slice(0, 2).join(' ')} {/* Shorter labels for mobile grid */}
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl font-serif text-[#062C2D]">{item.time}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;