"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && backgroundRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        // Animate background image
        gsap.from(backgroundRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Animate content box
        if (contentRef.current) {
          gsap.from(contentRef.current.children, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            x: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          });
        }

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="damac_about_section" ref={sectionRef}>
      <div className="container">
        <div className="main_wrapper">
          <div className="damac_about_background" ref={backgroundRef}>
            <Image src="/images/mercedes-benz/banner.webp" alt="About Section Background" width={1000} height={1000} />
          </div> 
          <div className="damac_about_content">
            <div className="damac_about_text_wrapper" ref={contentRef}>
              <p className="damac_about_subheading">MERCEDES-BENZ PLACES</p>
              <h2 className="damac_about_heading">ABOUT THE PROJECT</h2>
              
              <div className="damac_about_body">
                <p className="damac_about_paragraph">
               Mercedes-Benz Places at Binghatti City is a landmark branded residential development that blends automotive-inspired design, architectural excellence, and modern urban luxury. </p>
                <p className="damac_about_paragraph">
               Crafted for those who appreciate refined living, this exclusive project offers meticulously designed residences with premium finishes, intelligent layouts, and breathtaking city views. Every detail reflects the Mercedes-Benz legacy of precision, comfort, and innovation —creating a lifestyle that goes beyond real estate.</p>
              
                  <p className="damac_about_paragraph">
                  Whether for living or investment, this project stands as a symbol of prestige and long-term value in Dubai’s evolving skyline.
                  </p>
              </div>
              
              <button className="damac_about_button">
                EXPLORE PROPERTIES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
