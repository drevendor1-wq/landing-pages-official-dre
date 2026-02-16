"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', interest: 'Brochure', message: ''
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
      if (response.ok) { window.location.href = "./thank-you"; } 
      else { alert("ERROR IS HERE"); }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Visual Identity Section */}
      <div className="lg:w-1/3 bg-zinc-50 p-12 lg:p-24 flex flex-col justify-between border-r border-zinc-100">
        <div className="space-y-6">
          <div className="h-1 w-12 bg-black mb-12"></div>
          <h2 className="text-3xl font-serif italic tracking-tight text-zinc-900">CONTACT US</h2>
          <p className="text-zinc-500 font-light leading-relaxed max-w-sm">
            Interested in starting a project or touring one of our available properties? Our concierge team is ready to assist you.
          </p>
        </div>
      </div>

      {/* Modern Form Section */}
      <div className="lg:w-2/3 p-8 lg:p-24 flex items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-10">
          <div className="space-y-8">
            <div className="relative group">
              <input 
                type="text" required placeholder="Full Name"
                className="w-full border-b border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent text-lg"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="relative group">
              <input 
                type="email" required placeholder="Email Address"
                className="w-full border-b border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent text-lg"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-end">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Inquiry Type</label>
                <select 
                  className="w-full border-b border-zinc-200 py-2 outline-none focus:border-black transition-colors bg-transparent cursor-pointer"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  <option>Brochure</option>
                  <option>Floor Plan</option>
                  <option>Payment Plan</option>
                   <option>Others</option>
                </select>
              </div>
            </div>
            <textarea 
              rows={3} required placeholder="Tell us about your project..."
              className="w-full border-b border-zinc-200 py-4 outline-none focus:border-black transition-colors bg-transparent text-lg resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button 
            type="submit" disabled={isSubmitting}
            className="group flex items-center gap-4 text-black font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all"
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
            <span className="text-xl">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;