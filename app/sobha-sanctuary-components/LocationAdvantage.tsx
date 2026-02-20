import React from 'react';
import { Building2, Compass } from 'lucide-react';

const LocationAdvantage: React.FC = () => {
  const proximityPoints = [
    { name: 'DAMAC HILLS 2', time: '10 MINS', icon: <Building2 className="w-5 h-5" />, desc: 'A lush, self-contained community sanctuary.' },
    { name: 'THE VALLEY', time: '18 MINS', icon: <Building2 className="w-5 h-5" />, desc: 'The perfect blend of community and calm.' },
    { name: 'Dubailand Residence Complex (DLRC)', time: '20 MINS', icon: <Building2 className="w-5 h-5" />, desc: 'Urban serenity meets natural beauty.' },
    { name: 'BUSINESS BAY', time: '30 MINS', icon: <Building2 className="w-5 h-5" />, desc: "The city's premier corporate and residential hub." },
    { name: 'DUBAI MALL', time: '35 MINS', icon: <Building2 className="w-5 h-5" />, desc: 'The ultimate destination for retail and leisure.' }
  ];

  return (
    <section id="location" className="py-16 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative Background Text - Hidden on mobile to prevent overflow issues */}
      <div className="hidden lg:block absolute top-20 -left-20 pointer-events-none opacity-[0.03] select-none text-[20vw] font-title font-black leading-none uppercase rotate-90">
        LOCATION
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
          
          {/* Right Column (Visual Map) - Moved to TOP on mobile for better visual hierarchy */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-video md:aspect-square lg:aspect-[4/5] bg-gray-100 overflow-hidden shadow-xl md:shadow-2xl rounded-sm">
               <img 
                 src="https://sobhasanctuary.info/wp-content/uploads/2026/01/SOBHA-SANCTUARY-Location.png" 
                 alt="Dubai Cityscape Integration" 
                 className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
               
               {/* Marker Overlay */}
               <div className="absolute top-[33%] left-[47%] md:top-[40%] md:left-[54%] group cursor-pointer">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-amber-700/30 rounded-full animate-ping"></div>
                    <div className="w-7 h-7 md:w-9 md:h-9 bg-amber-700 border-2 border-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    {/* Tooltip - Always visible on mobile for UX, hover on desktop */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-black text-white px-3 py-1.5 rounded-sm whitespace-nowrap opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity shadow-xl">
                       <p className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Sobha Sanctuary</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Floating Architectural Card - Optimized for tablet+ and hidden on small mobile */}
            <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] p-6 lg:p-10 text-white max-w-[280px] hidden md:block shadow-2xl">
               <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3">Centricity</h5>
               <p className="text-[10px] lg:text-[11px] leading-loose text-gray-400 font-medium uppercase tracking-widest">
                 A masterplan designed for accessibility, ensuring you are never more than 15 minutes away from Dubai's primary infrastructure.
               </p>
            </div>
          </div>

          {/* Left Column: Context & Landmarks */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="mb-8 md:mb-12 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Compass className="w-4 h-4 text-amber-700" />
                <h2 className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700">Strategic Proximity</h2>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-3xl font-title font-bold leading-tight mb-6">
                Connected Yet Serene Living in <span className="text-amber-700">Dubailand</span>.
              </h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 font-medium">
                Sobha Sanctuary Dubai is located in Dubailand, offering convenient access to Jebel Ali – Lehbab Road (E77) and Dubai – Al Ain Road (E66).
              </p>
            </div>
            
            {/* Proximity List - Better spacing on mobile */}
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {proximityPoints.map((point, idx) => (
                <div key={idx} className="flex items-center lg:items-start gap-4 p-4 md:p-6 border border-gray-100 bg-white hover:border-amber-700/30 transition-all active:scale-[0.98] lg:active:scale-100">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gray-50 flex items-center justify-center text-amber-700">
                    {point.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <p className="text-[9px] md:text-[10px] font-bold tracking-widest text-gray-400 uppercase truncate mr-2">{point.name}</p>
                      <p className="text-[10px] md:text-xs font-black text-amber-700 shrink-0">{point.time}</p>
                    </div>
                    <p className="text-[10px] md:text-[11px] text-gray-500 font-medium leading-snug uppercase tracking-wider line-clamp-1 md:line-clamp-none">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;