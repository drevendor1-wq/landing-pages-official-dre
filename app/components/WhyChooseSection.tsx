"use client";

import Image from "next/image";
import { useFormModal } from "./FormModalContext";

export default function WhyChooseSection() {
  const { openFormModal } = useFormModal();
  return (
    <section className="why_choose_section">
      <div className="container">
        <div className="section_content">
          <div className="section_text">
            <h2>Why Buyers Choose HADO by Beyond?</h2>
            <ul className="benefits_list">
              <li>
                <strong>Low-Density Waterfront Living</strong>
                <p>
                  Fewer residences, more open space, and a calm island
                  environment—unlike crowded beachfront towers.
                </p>
              </li>
              <li>
                <strong>Future-Ready Island Destination</strong>
                <p>
                  Dubai Islands is one of the city's next major growth zones,
                  located within a developing master planned district.
                </p>
              </li>
              <li>
                <strong>Lifestyle + Privacy Balance</strong>
                <p>
                  Designed for residents who want beachfront living without
                  tourist congestion or short-term rental chaos.
                </p>
              </li>
              <li>
                <strong>Spacious, Efficient Layouts</strong>
                <p>
                  Well-planned interiors with larger usable space, wide
                  balconies, and practical room proportions across all unit
                  types.
                </p>
              </li>
              <li>
                <strong>Designed for Long-Term Ownership</strong>
                <p>
                  Timeless architecture, protected views, and master-planned
                  surroundings that age well and hold value over time.
                </p>
              </li>
            </ul>
            <button
              className="roi_report_btn"
              onClick={() => openFormModal("roi")}
            >
              PROJECT DETAIL
            </button>
          </div>
          <div className="section_image">
            <Image
              src="/images/wcu.jpg"
              alt="HADO Lifestyle"
              width={600}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

