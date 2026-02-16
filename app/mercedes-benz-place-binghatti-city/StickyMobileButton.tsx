"use client";

import { useState } from "react";
import Image from "next/image";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

export default function StickyMobileButton() {
  const [showPopover, setShowPopover] = useState(true);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleButtonClick = () => {
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="damac_sticky_mobile_button_wrapper">
        {showPopover && (
          <div className="damac_sticky_mobile_popover">
            <button
              className="damac_sticky_mobile_popover_close"
              onClick={() => setShowPopover(false)}
              aria-label="Close popover"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <p className="damac_sticky_mobile_popover_text">our experts help you</p>
            <div className="damac_sticky_mobile_popover_arrow"></div>
          </div>
        )}
        <div className="damac_mobile_guide_button" onClick={handleButtonClick}>
          <div className="damac_mobile_guide_button_content">
            <div className="damac_mobile_guide_button_text">
              <span className="damac_mobile_guide_button_text_fallback">understand potential growth</span>
            </div>
            <div className="damac_mobile_guide_button_hand">
              <Image 
                src="/images/mercedes-benz/btn-hand.png" 
                alt="guide"
                width={120}
                height={120}
                className="damac_mobile_guide_button_hand_img"
              />
            </div>
          </div>
        </div>
      </div>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Mercedes-Benz Places | Binghatti City"
        buttonText="understand potential growth"
      />
    </>
  );
}
