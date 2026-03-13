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
          <span className="text-green-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
            ABOUT THE DEVELOPER
          </span>
          
          <h2 className="text-5xl md:text-6xl font-serif mb-8 tracking-tighter text-[#062C2D]">
            NAKHEEL
          </h2>
          
          <div className="w-20 h-1 bg-green-500 mb-10"></div> {/* Aesthetic accent line */}
          
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
            Dubai-based Nakheel is a world-leading master developer whose innovative, landmark projects form an iconic portfolio of master communities and residential, retail, hospitality and leisure developments that are pivotal to realising Dubai’s vision. 
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
            Nakheel’s waterfront projects, including the world-famous, award-winning Palm Jumeirah, have added more than 300 kilometres to Dubai’s original, 70km coastline, paving the way for the development of hundreds of seafront homes, resorts, hotels and attractions.
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
              src="https://mira-international.com/uploads/1729599002.2487254.jpg" 
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