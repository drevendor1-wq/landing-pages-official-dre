"use client"
import React, { useState } from 'react';

const plans = [
  { id: '2bhk', name: '4-BEDROOM TH', size: '2208 sq. ft.', price: '2.75 M', img: '/images/damac-islands/DamacIslandFloor4.jpg' },
  { id: '3bhk', name: '5-BEDROOM MID TH', size: '3492.24 sq. ft.', price: '3.75 M', img: '/images/damac-islands/DamacIslandFloor5.jpg' },
  { id: 'villa', name: '6-BEDROOM VILLA', size: '4440 sq. ft.', price: '6.35 M', img: '/images/damac-islands/DamacIslandFloor6.jpg' },
  { id: 'villas', name: '7-BEDROOM VILLA', size: '17,078 sq. ft.', price: '18.5 M', img: '/images/damac-islands/DamacIslandFloor7.jpg' }
];

const FloorPlan: React.FC = () => {
  const [activePlan, setActivePlan] = useState(plans[0]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">Layouts</span>
        <h2 className="text-4xl font-heading font-light text-zinc-900">Choose Your Floor Plan</h2>
      </div>

      <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4 px-4">
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePlan(p)}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activePlan.id === p.id 
                ? 'bg-black text-white shadow-lg' 
                : 'bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] shadow-sm border border-zinc-100 overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading text-zinc-900">{activePlan.name}</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              The townhouses and villas at Damac Islands are meticulously designed to provide a luxurious lifestyle with a focus on comfort and elegance. The interiors feature premium finishes, large windows for natural light, and contemporary styling throughout. 
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-zinc-50 rounded-2xl">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">PLOT AREA</p>
              <p className="text-2xl font-heading">{activePlan.size}</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">PRICE</p>
              <p className="text-2xl font-heading">{activePlan.price}</p>
            </div>
          </div>

          <button className="w-full bg-black text-white py-5 rounded-xl font-medium text-lg hover:bg-zinc-800 transition-colors shadow-lg">
            REQUEST FLOOR PLAN
          </button>
        </div>

        <div className="lg:w-1/2 bg-transparent flex items-center justify-center p-10 lg:p-1">
          <img 
            src={activePlan.img} 
            alt="Floor Plan Visual" 
            className="max-w-full max-h-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;