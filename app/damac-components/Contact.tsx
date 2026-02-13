"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
        }),
      });
      const data = await response.json();
      console.log("Server Error:", data);
      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("ERROR IS HERE");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
};

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-20">
      <div className="lg:col-span-2 space-y-12">
          <h2 className="text-4xl font-heading font-light mb-8">Let's build your legacy.</h2>
          <p className="text-xl text-zinc-500 font-light leading-relaxed">
            Interested in starting a project or touring one of our available properties? Our concierge team is ready to assist you.
          </p>
      </div>

      <div className="lg:col-span-3">
        <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-zinc-100 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-black outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-black outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Nature of Inquiry</label>
            <select 
              className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-black outline-none transition-all appearance-none"
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
            >
              <option>Brochure</option>
              <option>Floor Plan</option>
              <option>Payment Plan</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-zinc-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-black outline-none transition-all"
              placeholder="How can we help you?"
              value={formData.message}
              required={true}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-5 rounded-xl font-medium text-lg hover:bg-zinc-800 transition-colors shadow-lg"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;