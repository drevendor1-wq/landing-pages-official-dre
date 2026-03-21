"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const faqs = [
  { 
    q: "Can I obtain residency in Georgia if I buy property in Tbilisi Waterfront?", 
    a: "Yes. A minimum purchase of USD 300,000 allows a foreign buyer and his/her family to apply for a 5-year temporary residency permit (golden visa) in Georgia, subject to local laws." 
  },
  { 
    q: "What is the completion date of the Tbilisi Waterfront project?", 
    a: "Tbilisi Waterfront is a large-scale project, with full completion in 8–10 years." 
  },
  { 
    q: "What taxes do I have to pay?", 
    a: "Purchase — No stamp duty or purchase tax. Property registration costs 50–200 GEL (USD 20–80) only." 
  },
  { 
    q: "Is buying an apartment in Tbilisi Waterfront a good investment?", 
    a: "Absolutely. Tbilisi Waterfront stands out due to its scale, developer track record and early entry pricing. Projects of this size and structure are new for the Georgian market, which limits direct competition. Combined with growing interest from regional buyers, this creates solid long-term upside rather than short-term speculation." 
  }
];

export default function ArchitecturalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq_section_arch">
      <div className="container">
        <div className="faq_header">
          <span className="eyebrow">INQUIRIES</span>
          <h2 className="heading">FREQUENTLY ASKED <span className="gold_italic">QUESTIONS</span></h2>
        </div>

        <div className="faq_list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq_item ${openIndex === i ? 'active' : ''}`}>
              <button className="faq_trigger" onClick={() => toggle(i)}>
                <span className="faq_number">0{i + 1}</span>
                <span className="faq_question">{faq.q}</span>
                <span className="faq_icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq_content" style={{ height: openIndex === i ? 'auto' : 0 }}>
                <div className="faq_answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq_section_arch { padding: 120px 0; background: #fff; color: #1a1a1a; font-family: 'Inter', sans-serif; }
        .container { max-width: 900px; margin: 0 auto; padding: 0 20px; }
        .faq_header { text-align: center; margin-bottom: 80px; }
        .eyebrow { letter-spacing: 5px; font-size: 12px; color: #c5a35d; font-weight: 700; }
        .heading { font-size: 42px; font-weight: 900; margin-top: 10px; letter-spacing: -1px; }
        .gold_italic { color: #c5a35d; font-family: serif; font-weight: 400; }
        .faq_item { border-bottom: 1px solid #e5e5e5; }
        .faq_trigger { width: 100%; display: flex; align-items: center; padding: 35px 0; border: none; background: none; cursor: pointer; text-align: left; transition: 0.3s; }
        .faq_number { font-size: 12px; color: #c5a35d; margin-right: 40px; font-weight: 800; }
        .faq_question { font-size: 18px; font-weight: 600; flex: 1; transition: 0.3s; }
        .faq_item.active .faq_question { color: #c5a35d; }
        .faq_icon { font-size: 24px; font-weight: 300; margin-left: 20px; }
        .faq_content { overflow: hidden; transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .faq_answer { padding: 0 0 35px 65px; color: #666; line-height: 1.8; font-size: 16px; max-width: 80%; }
      `}</style>
    </section>
  );
}