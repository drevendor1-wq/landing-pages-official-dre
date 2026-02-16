"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ReverseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && backgroundRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        // Animate background image (from right)
        gsap.from(backgroundRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Animate content box (from left)
        if (contentRef.current) {
          gsap.from(contentRef.current.children, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            x: -100,
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
    <section className="damac_reverse_section" ref={sectionRef}>
      <div className="container">
        <div className="main_wrapper_reverse">
          <div className="damac_reverse_background" ref={backgroundRef}>
            <Image src="/images/mercedes-benz/banner.webp" alt="Reverse Section Background" width={1000} height={1000} />
          </div> 
          <div className="damac_reverse_content">
            <div className="damac_reverse_text_wrapper" ref={contentRef}>
              <p className="damac_reverse_subheading">BINGHATTI DEVELOPERS</p>
              <h2 className="damac_reverse_heading">EXCEPTIONAL DESIGN & CRAFTSMANSHIP</h2>
              
              <div className="damac_reverse_body">
                <p className="damac_reverse_paragraph">
                  Binghatti Developers, in collaboration with Mercedes-Benz, brings you a residential masterpiece that sets new standards in luxury living. Every detail has been carefully considered to create spaces that inspire and delight.
                </p>
                <p className="damac_reverse_paragraph">
                  From the stunning architecture to the premium finishes, Mercedes-Benz Places | Binghatti City offers residents an exclusive lifestyle experience with world-class amenities, breathtaking views, and unmatched quality.
                </p>
              </div>
              
              <button className="damac_reverse_button">
                VIEW AMENITIES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
