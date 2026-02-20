import React from 'react';

const PropertyOverview: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
      <div className="space-y-8">
        <div>
          <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">The Project</span>
          <h2 className="text-5xl font-heading font-light leading-tight text-zinc-900">
            A Masterpiece of Contemporary Living
          </h2>
        </div>
        
        <p className="text-xl text-zinc-600 font-light leading-relaxed">
          Foundation represents the pinnacle of luxury architectural development. Our design philosophy integrates the raw beauty of natural materials with the precision of modern engineering.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-6 p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Structural Integrity</h3>
              <p className="text-zinc-500 text-sm">Engineered with high-tensile steel and reinforced glass to withstand the test of time and nature.</p>
            </div>
          </div>

          <div className="flex gap-6 p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Signature Finishes</h3>
              <p className="text-zinc-500 text-sm">Hand-picked marbles, reclaimed woods, and bespoke metalwork detailing in every corner.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-zinc-100 rounded-[2.5rem] -z-10 transition-transform group-hover:scale-[1.02] duration-500"></div>
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
          alt="Architectural Interior" 
          className="w-full h-[600px] object-cover rounded-[2rem] shadow-xl"
        />
        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/50 max-w-[240px]">
          <p className="italic text-zinc-600 text-sm font-light">
            "We didn't just build a home; we crafted a sanctuary that blurs the line between indoor and outdoor life."
          </p>
          <p className="mt-4 font-medium text-xs tracking-widest uppercase">— Chief Architect</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;