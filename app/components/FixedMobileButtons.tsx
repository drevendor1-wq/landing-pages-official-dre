"use client";

import { useFormModal } from "./FormModalContext";

export default function FixedMobileButtons() {
  const { openFormModal } = useFormModal();

  return (
    <div className="fixed_mobile_buttons">
      <button
        className="fixed_mobile_cta_button"
        onClick={() => openFormModal("roi")}
      >
        GET AVAILABLE UNITS & PRICE LIST
      </button>
    </div>
  );
}

