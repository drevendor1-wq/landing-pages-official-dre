"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    phone: '', 
    interest: 'Brochure', 
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) { 
        window.location.href = "./damac-thank-you"
      } else { 
        alert("Submission failed. Please try again."); 
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row p-4 lg:p-8 gap-4">
      {/* Sidebar Info */}
      <div className="lg:w-1/3 bg-white text-black p-10 flex flex-col justify-between border-4 border-white">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase leading-[0.8] mb-8">CONTACT</h1>
          <p className="text-lg font-medium max-w-xs mb-12">
            Interested in starting a project or touring one of our available properties? Our concierge team is ready to assist you.
          </p>
        </div>
      </div>

      {/* Brutalist Form */}
      <div className="lg:w-2/3 border-4 border-white p-8 lg:p-16 flex items-center bg-zinc-950">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold tracking-widest text-zinc-500">NAME</label>
              <input 
                type="text" required placeholder="Full Name"
                className="bg-transparent border-b-2 border-zinc-800 py-3 outline-none focus:border-white transition-all text-xl"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email Input - ADDED */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold tracking-widest text-zinc-500">EMAIL</label>
              <input 
                type="email" required placeholder="email@example.com"
                className="bg-transparent border-b-2 border-zinc-800 py-3 outline-none focus:border-white transition-all text-xl"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {/* Phone Input */}
             <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold tracking-widest text-zinc-500">Phone Number</label>
              <input 
                type="tel" required placeholder="+1 234 567 890"
                className="bg-transparent border-b-2 border-zinc-800 py-3 outline-none focus:border-white transition-all text-xl"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* Inquiry Select */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold tracking-widest text-zinc-500">Requirement</label>
              <select 
                className="bg-transparent border-b-2 border-zinc-800 py-3 outline-none focus:border-white cursor-pointer text-xl appearance-none"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                <option className="bg-black" value="Brochure">Brochure</option>
                <option className="bg-black" value="Floor Plan">Floor Plan</option>
                <option className="bg-black" value="Payment Plan">Payment Plan</option>
                <option className="bg-black" value="Others">Others</option>
              </select>
            </div>
          </div>

          {/* Centered Submit Button */}
          <div className="flex justify-center pt-6">
            <button 
                type="submit" disabled={isSubmitting}
                className="md:w-2/3 px-12 py-6 bg-white text-black font-black uppercase tracking-tighter"
            >
                <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;