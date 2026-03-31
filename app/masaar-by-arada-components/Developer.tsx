"use client"
import { motion } from 'framer-motion';

const Developer = () => {
  return (
    <section id="developer" className="py-24 px-6 bg-[#F8FAFC] text-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#047857] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
            ABOUT THE DEVELOPER
          </span>
          
          <h2 className="text-5xl md:text-6xl font-serif mb-8 tracking-tighter text-[#062C2D]">
            ARADA
          </h2>
          
          <div className="w-20 h-1 bg-[#047857] mb-10"></div> {/* Aesthetic accent line */}
          
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
            Launched in 2017 and headquartered in the UAE, Arada was created to build spaces people connect with for healthier, happier and more meaningful lives.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
            The master developer has launched ten record-breaking communities in the UAE and expanded into the UK and Australian market.
          </p>
        </motion.div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Architectural Frame - Light Blue & Dark Green combo */}
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-sky-100 rounded-sm -z-10 transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
          <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-[#062C2D]/5 -z-10 rounded-sm"></div>
          
          <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden shadow-2xl shadow-blue-900/10">
            <img 
              src="https://cdn.insiderealty.ae/photos/akala-residences-1-by-arada-1.webp" 
              alt="Developer HQ" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay: Dark Green Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062C2D]/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Developer;