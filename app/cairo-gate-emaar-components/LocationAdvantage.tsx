"use client"
import { MapPin, Plane, Car, Navigation, ArrowUpRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationAdvantage = () => {
  const mapLink = "https://www.google.com/maps/place/324G%2B6GW,+First+6th+of+October,+First+Al+Sheikh+Zayed,+Giza+Governorate,+Egypt/@30.0568028,31.0257144,1710m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14585baf649ca8b9:0x2aac29f466a28fd8!8m2!3d30.0556215!4d31.0263428!16s%2Fg%2F11b8t9813f?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"; // Updated to valid link placeholder

  const travelTimes = [
    { time: "Directly On", label: "Cairo Alex Rd", icon: <Car size={20} strokeWidth={1.5} /> },
    { time: "20 MINS", label: "Sphinx Int. Airport", icon: <Plane size={20} strokeWidth={1.5} /> },
    { time: "30 MINS", label: "Grand Egyptian Museum", icon: <Navigation size={20} strokeWidth={1.5} /> } 
  ];

  return (
    <section id="location" className="py-24 md:py-32 px-6 bg-[#050607] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Architectural & Minimal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-[1px] bg-emerald-500 mb-6"
            />
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-bold tracking-[0.6em] uppercase text-emerald-500 block mb-4"
            >
              The Connectivity
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter"
            >
             THE 
              <span className="italic font-light text-emerald-400/80"> LOCATION</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-white/40 text-sm font-light leading-relaxed tracking-wide"
          >
            Strategically anchored at the intersection of heritage and modern speed, Cairo Gate redefines the luxury of time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* THE MAP: Cinematic Viewport */}
          <motion.a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative h-[500px] md:h-[650px] group overflow-hidden border border-white/5 shadow-2xl block"
          >
            {/* Visual scanline effect */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[linear-gradient(rgba(16,185,129,0)_50%,rgba(16,185,129,0.1)_50%),linear-gradient(90deg,rgba(16,185,129,0.02),rgba(16,185,129,0.05),rgba(16,185,129,0.02))] bg-[length:100%_4px,4px_100%]" />
            
            <img 
              src="https://cdn-ilejccm.nitrocdn.com/PsNDsZusNRsFVvmxCCWStyMIXqjeEsbK/assets/images/optimized/rev-3e977cb/www.emaarmisr.com/wp-content/uploads/2026/01/Emaar-Misr-Communities-2026-V2-Location-Map-Cairo-Gate.jpg" 
              alt="Location Masterplan" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale-[0.3] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100"
            />
            
            {/* Corner Accents */}
            <div className="absolute top-8 left-8 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-xl p-4 border border-white/10">
                <Compass className="text-emerald-500 animate-spin-slow" size={20} />
                <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white">Live Location</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-2xl font-serif italic text-white">Sheikh Zayed</h3>
                <p className="text-emerald-500/60 text-[10px] tracking-[0.3em] uppercase font-bold">The Golden District</p>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 backdrop-blur-md">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </motion.a>

          {/* TRAVEL DATA: Precision Modules */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            {travelTimes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative group flex items-center justify-between p-10 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-500"
              >
                {/* Numbering */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[100px] font-black text-white/[0.02] pointer-events-none select-none">
                  0{i + 1}
                </span>

                <div className="flex items-center gap-8 relative z-10">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-emerald-400 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-700">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.4em] text-emerald-500 font-bold uppercase mb-2">Estimated Arrival</p>
                    <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:translate-x-2 transition-transform duration-700">
                      {item.label}
                    </h4>
                  </div>
                </div>

                <div className="text-right relative z-8">
                  <span className="block text-3xl font-light tracking-tighter text-white/90">{item.time}</span>
                  <div className="h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-700 ml-auto mt-2" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LocationAdvantage;