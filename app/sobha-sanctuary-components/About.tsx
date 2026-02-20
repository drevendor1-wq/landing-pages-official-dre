import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
          src="/images/sobha-sanctuary/SobhaSanctuaryAboutPage.webp" 
          alt="Project Tower" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
          </div>
        </div>

        <div>
          <h2 className="text-[10px] font-bold tracking-[0.1em] uppercase text-amber-500 mb-6">Master-Planned Community</h2>
          <h3 className="text-xl md:text-3xl font-title font-light md:font-bold leading-tight mb-8">
            SOBHA SANCTUARY
          </h3>
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p>
              Sobha Sanctuary is a visionary master planned community spanning approximately 35 million square feet in Dubailand, conceived as a natural evolution of Sobha’s lifestyle philosophy. It brings together lush landscaping, crystal lagoons, and carefully structured neighborhoods to create a refined, nature-focused residential destination.
            </p>
            <p>
              Sobha Sanctuary will offer an exclusive mix of premium townhouses and luxury villas, planned for families seeking space and long-term value. Complemented by schools, healthcare, retail, leisure amenities, and recreational facilities, the development is envisioned as a self-sustained community built to Sobha’s standards.
            </p>
          </div>

          <div className="mt-12 flex flex-col md:flex-row border border-white/10 rounded-2xl overflow-hidden bg-white/[0.03]">
  {[
    { label: 'PROPERTY TYPE', value: 'Townhouses and Villas' },
    { label: 'PAYMENT PLAN', value: '60:40' },
    { label: 'HANDOVER', value: '2029' }
  ].map((item, idx) => (
    <div 
      key={idx} 
      className={`p-8 flex-1 flex flex-col justify-center ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
    >
      <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-500 mb-3 whitespace-nowrap">
        {item.label}
      </p>
      <p className="text-xl font-medium text-white whitespace-nowrap">
        {item.value}
      </p>
    </div>
  ))}
</div>
      
        </div>
      </div>
      
      {/* Background large text */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none text-[30vw] font-bold font-title leading-none">
        SOBHA
      </div>
    </section>
  );
};

export default About;