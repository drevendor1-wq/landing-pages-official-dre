"use client"
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from "./ContactModal";

const PaymentPlan = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
    const [buttonText, setButtonText] = useState("");
  
    const openEnquiryModal = (text: string = "Request Brochure") => {
      setButtonText(text);
      setEnquiryModalOpen(true);
      document.body.style.overflow = "hidden";
    };
  
    const closeEnquiryModal = () => {
      setEnquiryModalOpen(false);
      document.body.style.overflow = "unset";
    };
  
  return (
    <section id="payment-plan" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block"
          >
            Investment Structure
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-serif text-[#062C2D] tracking-tighter mb-6"
          >
            Flexible <span className="italic text-teal-800">Payment Plan</span>
          </motion.h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45%] left-0 w-full h-[2px] bg-sky-100 -z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-200 via-green-400 to-sky-200"
            />
          </div>

          {stepData.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group z-10"
            >
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-white group-hover:border-sky-100 transition-all duration-500 h-full flex flex-col items-center text-center">
                
                {/* Floating Circle Badge */}
                <div className="mb-8 w-20 h-20 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-[#062C2D] transition-all duration-500 shadow-inner group-hover:shadow-green-900/20">
                  <span className="text-2xl font-serif text-[#062C2D]">
                    {step.percent}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#062C2D]">
                    {step.label}
                  </h4>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                  {step.desc}
                </p>
              </div>

              {i < 2 && (
                <div className="hidden lg:flex absolute -right-6 top-[40%] -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg z-20 group-hover:scale-125 transition-transform duration-500 border border-sky-50">
                   <ArrowRight className="text-green-500" size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Updated Bottom CTA: Stylish Download Button */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8 }}
           className="mt-24 flex flex-col items-center"
        >
          <button className="group relative px-10 py-5 overflow-hidden rounded-full border border-green-500 transition-all duration-500">
            {/* Fill Effect */}
            
            {/* Button Content */}
            <span className="relative flex items-center gap-3 text-[#062C2D]">
              <Download size={18} className="group-hover:animate-bounce" />
              <span className="text-xs font-bold uppercase" onClick={() => openEnquiryModal("Download Payment Plan")}>Download Payment Plan</span>
            </span>
          </button>
        </motion.div>
      </div>
      <ContactModal isOpen={enquiryModalOpen} onClose={closeEnquiryModal} floorPlanTitle="Enquiry For: Nakheel Palm Central" buttonText={buttonText} />
    </section>
  );
};

const stepData = [
  { percent: "20%", label: "Down Payment", desc: "Secure your luxury beachfront Townhouse at Palm Central with only a 20% down payment." },
  { percent: "50%", label: "During Construction", desc: "Enjoy flexible installments during the construction period for a stress-free investment journey." },
  { percent: "30%", label: "On Handover", desc: "Complete your investment with a comfortable 30% final payment upon handover completion." },
];

export default PaymentPlan;