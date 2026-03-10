"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const developerPoints = [
  "Timely project delivery",
  "Iconic designs",
  "Strategic locations",
  "Strong brand collaborations"
];

export default function AboutDeveloperSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about-developer" className="damac_about_developer_section" ref={sectionRef}>
      <div className="container">
        <div className="damac_about_developer_main_wrapper">
          <div className="damac_about_developer_background" ref={backgroundRef}>
            <img src="https://www.cbnme.com/wp-content/uploads/2018/07/DAMAC-Heights-Welcomes-Tenants-to-Waterfront-Living.jpg" />
          </div>
          <div className="damac_about_developer_content">
            <div className="damac_about_developer_text_wrapper" ref={contentRef}>
              <p className="damac_about_developer_subheading">ABOUT THE DEVELOPER</p>
              <h2 className="damac_about_developer_heading">WHY DAMAC?</h2>
              <p className="damac_about_developer_description">
                Renowned for iconic developments and exceptional craftsmanship, DAMAC Properties blends elegance, innovation, and world-class amenities. With a presence in the UAE, Saudi Arabia, Qatar, and beyond, its portfolio of luxury residential, commercial, and leisure properties sets a global standard for excellence.
              </p>
              <div className="damac_about_developer_list">
                {developerPoints.map((point, index) => (
                  <div key={index} className="damac_about_developer_item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <p className="damac_about_developer_footer">
                DAMAC brings new and exciting living concepts to life, with superior designs and details, by working with the finest designers and partnering with some of the most prestigious fashion and lifestyle brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
