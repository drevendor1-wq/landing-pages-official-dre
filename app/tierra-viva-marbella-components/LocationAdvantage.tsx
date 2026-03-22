"use client"
import { MapPin, Plane, Car, Navigation, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationAdvantage = () => {
  const mapLink = "https://www.google.com/maps/place/Tierra+Viva+by+DarGlobal/@36.541326,-5.042879,50792m/data=!3m1!1e3!4m15!1m8!3m7!1s0xd72d54743c6f715:0xac7f381eab842178!2zMjk2NzkgQmVuYWhhdsOtcywgTcOhbGFnYSwgU3BhaW4!3b1!8m2!3d36.5204891!4d-5.0455575!16zL20vMGRmdDNj!3m5!1s0xd61a1df51075377:0x6481053b07731ada!8m2!3d36.48966!4d-5.03337!16s%2Fg%2F11kqdszymn?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

  const travelTimes = [
    { time: "2:00 HR", label: "Alexandria City", icon: <Car size={18} /> },
    { time: "1:30 HR", label: "Borg El Arab Int. Airport", icon: <Plane size={18} /> },
    { time: "30 MINS", label: "Al Alamein Airport", icon: <Navigation size={18} /> } 
  ];

  return (
    <section id="location" className="py-12 md:py-24 px-4 md:px-10 bg-[#0A0C10] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-emerald-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-500">
              The Location
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif leading-tight"
          >
            Prime <span className="italic text-green-400 font-light">Connectivity</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* THE MAP CARD - Clickable */}
          <motion.a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 relative h-[400px] md:h-[550px] rounded-[32px] overflow-hidden group border border-white/10 block"
          >
            {/* Map Image - Improved Visibility */}
            <img 
              src="https://cdn-ilejccm.nitrocdn.com/PsNDsZusNRsFVvmxCCWStyMIXqjeEsbK/assets/images/optimized/rev-3e977cb/www.emaarmisr.com/wp-content/uploads/2026/01/Emaar-Misr-Communities-2026-V2-Location-Map-Marassi-North-Coast.jpg" 
              alt="Marassi Location" 
              className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-105 saturate-[0.7] brightness-100 group-hover:saturate-100"
            />
            
            {/* Glossy Overlay UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/60 md:via-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className=" hidden bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl inline-flex items-center gap-4">
                <div className="bg-emerald-500 p-2 rounded-lg text-black">
                  <MapPin size={20} />
                </div>
              </div>
              
              <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs tracking-tighter flex items-center gap-2 self-start md:self-auto">
                GET DIRECTIONS <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>

          {/* TRAVEL TIMES PANEL */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {travelTimes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-[#16181D] border border-white/5 p-6 rounded-[28px] flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-500"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {/* Smaller, stylized time font */}
                  <span className="text-sm font-medium tracking-[0.2em] text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-serif italic text-white/90 mb-1 leading-none">
                    {item.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;