import type { Metadata } from "next";
import DamacIslandsBanner from "./Banner";
import OverviewSection from "./OverviewSection";
import PropertyCards from "./PropertyCards";
import GallerySlider from "./GallerySlider";
import FloorPlans from "./FloorPlans";
import AmenitiesSection from "./AmenitiesSection";
import LocationAmenities from "./LocationAmenities";
import AboutDeveloperSection from "./AboutDeveloperSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import StickyMobileButton from "./StickyMobileButton";
import AboutSection from "./AboutSection";
import './style.css'

export const metadata: Metadata = {
  title: "Damac Islands 2 | Premium Waterfront Townhouses and Villas",
  description: "Damac Islands 2",
};

export default function DamacIslands2Page() {
  return (
    <div>
      <DamacIslandsBanner />
      <AboutSection />
      <AmenitiesSection />
      {/* <PropertyCards /> */}
      <GallerySlider />
      <FloorPlans />
      <LocationAmenities />
      <AboutDeveloperSection />
      <ContactSection />
      <Footer />
      <StickyMobileButton />
    </div>
  );
}
