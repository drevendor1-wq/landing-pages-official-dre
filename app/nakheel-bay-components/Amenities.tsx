"use client"
import { Waves, Trees, ShieldCheck, Car, Wifi, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Amenities = () => {
  const list = [
    { 
      icon: <Waves className="text-emerald-700" size={24} />, 
      title: "Infinity Pool with Scenic Views", 
      desc: "A stunning temperature-controlled pool offering panoramic horizons and a relaxing deck." 
    },
    { 
      icon: <Trees className="text-emerald-700" size={24} />, 
      title: "Fully Equipped Fitness Studio", 
      desc: "State-of-the-art cardio and weight-lifting equipment to help you maintain your peak performance." 
    },
    { 
      icon: <ShieldCheck className="text-emerald-700" size={24} />, 
      title: "Landscaped Parks & Gardens", 
      desc: "Lush, sustainable greenery and manicured lawns designed for peaceful strolls and relaxation." 
    },
    { 
      icon: <Car className="text-emerald-700" size={24} />, 
      title: "Cycling & Jogging Tracks", 
      desc: "Dedicated, safe pathways winding through the community for your daily outdoor exercise." 
    },
    { 
      icon: <Wifi className="text-emerald-700" size={24} />, 
      title: "Retail & F&B Outlets", 
      desc: "Convenient doorstep access to boutique shops and a variety of essential retail services." 
    },
    { 
      icon: <Coffee className="text-emerald-700" size={24} />, 
      title: "Restaurants and Cafés", 
      desc: "A vibrant selection of on-site dining options ranging from casual coffee spots to fine cuisine." 
    },
  ];

  return (
    <section id="amenities" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-700 mb-4 block">
            Lifestyle Curated
          </span>
          <h2 className="text-2xl md:text-5xl font-serif text-emerald-950 uppercase tracking-tight mb-6">
            World-Class Amenities
          </h2>
          <div className="w-16 h-1 bg-emerald-100 mx-auto mb-8"></div>
          <p className="text-emerald-900/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Every detail is designed to elevate your lifestyle to new heights of comfort and convenience.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-emerald-100">
          {list.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 md:p-12 bg-white border-r border-b border-emerald-100 hover:bg-emerald-50/30 transition-colors duration-500"
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="p-4 bg-emerald-50 rounded-sm group-hover:bg-emerald-100 transition-colors duration-500">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-sm md:text-lg font-serif text-emerald-950 mb-4 uppercase tracking-tight group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-emerald-900/60 text-[12px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;