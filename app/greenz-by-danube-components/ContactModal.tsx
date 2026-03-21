"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";

interface FloorPlanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  floorPlanTitle?: string;
  buttonText?: string;
}

export default function ContactModal({
  isOpen,
  floorPlanTitle,
  onClose,
  buttonText = "ENQUIRE NOW",
}: FloorPlanEnquiryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // 🎬 Animation
  useEffect(() => {
    if (isOpen && modalRef.current && cardRef.current) {
      document.body.style.overflow = "hidden";

      const ctx = gsap.context(() => {
        gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(
          cardRef.current,
          { y: 15, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      }, modalRef.current);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // 🚀 Detect Zoho form submission → redirect manually
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only allow Zoho domain
      if (!event.origin.includes("zoho")) return;

      // Detect submission success
      const data = event.data;

      if (
        typeof data === "string" && data.toLowerCase().includes("submitted")
      ) {
        window.location.href = "/thank-you";
      }

      if (typeof data === "object" && data?.status === "success") {
        window.location.href = "/thank-you";
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-emerald-950/20 backdrop-blur-md"
      onClick={onClose}
      ref={modalRef}
    >
      <div
        className="relative w-full max-w-[420px] h-[600px] bg-white border border-emerald-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        ref={cardRef}
      >
        {/* Top Accent */}
        <div className="h-1 w-full bg-emerald-500" />

        {/* Close */}
        <button
          className="absolute top-5 right-5 text-zinc-300 hover:text-emerald-500 transition-all z-20"
          onClick={onClose}
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="text-[8px] font-bold tracking-[0.5em] text-emerald-500 uppercase block mb-2">
              Greenz By Danube
            </span>
            <h2 className="text-2xl font-serif italic text-zinc-900 leading-tight">
              {buttonText}
            </h2>
            <div className="w-6 h-[1px] bg-emerald-200 mx-auto mt-4" />
          </div>

          {/* Zoho Form */}
          <div className="flex-1">
            <iframe
              src="https://forms.zohopublic.com/drehomesrealestate/form/GreenzbyDanubeTafrax/formperma/vWRNfQOrxtXN81bWQJ2ngywzZQjK8ATw02Uv6Y65698"
              className="w-full h-full border-0"
              title="Enquiry Form"
            />
          </div>
        </div>
      </div>
    </div>
  );
}