import React from 'react';

const AboutProject: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
      <div className="space-y-8">
        <div>
          <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">The Vision</span>
          <h2 className="text-2xl md:text-5xl font-heading font-light leading-tight text-zinc-900">
            About Damac Islands 2
          </h2>
        </div>
        
        <div className="space-y-4 text-zinc-500 font-light">
          <p>DAMAC Islands 2 is a premium waterfront residential community designed around a tropical island lifestyle. This master-planned development blends crystal lagoons, private beaches, lush landscapes, and resort-style amenities with spacious luxury townhouses and villas.
Each cluster is inspired by iconic island destinations, creating a holiday-at-home experience every day. The project is ideal for families seeking space, privacy, and lifestyle, as well as investors looking for strong long-term capital appreciation in Dubai’s expanding suburban luxury corridor.</p>
        </div>

      </div>

      <div className="relative">
        <img 
          src="/images/damac-islands/DamacAboutPage.jpg" 
          alt="Project Tower" 
          className="w-full h-[650px] object-cover rounded-[2rem] shadow-2xl"
        />
        </div>
    </div>
  );
};

export default AboutProject;