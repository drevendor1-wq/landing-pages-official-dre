import type { Metadata } from "next";
import DamacIslandsBanner from "./Banner";
import OverviewSection from "./OverviewSection";
import PropertyCards from "./PropertyCards";
import GallerySlider from "./GallerySlider";
import FloorPlans from "./FloorPlans";
import HighlightsSection from "./HighlightsSection";
import AmenitiesSection from "./AmenitiesSection";
import LocationAmenities from "./LocationAmenities";
import AboutDeveloperSection from "./AboutDeveloperSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import StickyMobileButton from "./StickyMobileButton";
import AboutSection from "./AboutSection";
import './style.css'

export const metadata: Metadata = {
  title: "TOWER NINE ELMS | DAMAC",
  description: "TOWER NINE ELMS | DAMAC",
};

export default function DamacIslands2Page() {
  return (
    <div>
      <DamacIslandsBanner />
      <AboutSection />
      <HighlightsSection />
      <AmenitiesSection />
      {/* <PropertyCards /> */}
      <GallerySlider />
      <FloorPlans />
      {/* <LocationAmenities /> */}
      <AboutDeveloperSection />
      <ContactSection />
      <Footer />
      {/* <StickyMobileButton /> */}
    </div>
  );
}
