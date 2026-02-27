"use client";

import Image from "next/image";
import { useFormModal } from "./FormModalContext";

export default function Banner() {
  const { openFormModal } = useFormModal();
  return (
    <div id="home" className="banner_section">
      <div className="container">
        <div className="banner_content_wrapper">
          <div className="content_left">
            <Image
              src="/images/hado-logo.png"
              alt="HADO by Beyond"
              className="hado_logo"
              width={100}
              height={100}
              style={{ width: "160px", height: "auto", objectFit: "contain" }}
            />
            <h1>6KM Waterfront Japanese-Inspired Living</h1>
            <p>1-4BR BEACH WATERFRONT APARTMENT WITH BEACH ACCESS</p>
            <div className="buttons">
              <button onClick={() => openFormModal("brochure")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
                Download Brochure
              </button>
                  <button
                    onClick={() => openFormModal("roi")}
                    className="call_to_action"
                  >
                Check Available Units
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

