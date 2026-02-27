import React from 'react';

const PaymentPlan: React.FC = () => {
  const milestones = [
    { step: "10%", label: "On Booking"},
    { step: "10%", label: "After 30 Days"},
    { step: "55%", label: "1% Every month"},
    { step: "25%", label: "On Handover"},
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-2xl md:text-5xl font-heading font-light text-zinc-900 mb-8">
            Flexible Payment Plan
          </h2>
          <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
            We offer structured payment milestones that align with the construction progress, providing you with financial peace of mind.
          </p>
        </div>

        <div className="space-y-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="flex items-center gap-8 p-8 rounded-3xl bg-white border border-zinc-100 hover:shadow-lg transition-all group">
               <div className="w-20 h-20 rounded-2xl bg-black text-white flex flex-col items-center justify-center shrink-0">
                  <span className="text-2xl font-heading">{m.step}</span>
               </div>
               <div>
                  <h4 className="text-lg md:text-xl font-medium mb-1 group-hover:text-zinc-600">{m.label}</h4>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;