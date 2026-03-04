"use client"
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const PaymentPlan = () => {
  const steps = [
    { percent: "15%", label: "Down Payment", desc: "Secure your luxury beachfront villa at Bay Villas with only a 15% down payment." },
    { percent: "65%", label: "During Construction", desc: "Enjoy flexible installments during the construction period for a stress-free investment journey." },
    { percent: "20%", label: "On Handover", desc: "Complete your investment with a comfortable 20% final payment upon villa handover completion." },
  ];

  return (
    <section id="payment-plan" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block"
          >
            Investment Structure
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif text-black tracking-tighter mb-6">
            Flexible <span className="italic text-emerald-900/80">Payment Plan</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-100 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-emerald-100 -z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative p-10 bg-emerald-50/50 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:bg-white transition-all duration-500 group z-10"
            >
              {/* Icon / Numbering */}
              <div className="mb-6 flex justify-between items-start">
                <div className="text-6xl font-serif text-black group-hover:text-emerald-700 transition-colors duration-500">
                  {step.percent}
                </div>
                <CheckCircle2 size={20} className="text-emerald-200 group-hover:text-emerald-600 transition-colors" />
              </div>

              <h4 className="text-xs uppercase tracking-widest font-bold text-black mb-3">
                {step.label}
              </h4>
              
              <p className="text-zinc-500 text-sm leading-relaxed font-light">
                {step.desc}
              </p>

              {/* Decorative Arrow for Flow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-emerald-100 rounded-full items-center justify-center shadow-sm z-20 group-hover:scale-110 transition-transform">
                  <ArrowRight className="text-emerald-700" size={14} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;