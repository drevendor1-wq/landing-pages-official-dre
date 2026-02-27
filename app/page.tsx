import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Off Plan Properties in Dubai - Apartment, Villas, Townhouse for sale",
  description: "Off-plan apartments, villas & townhouses for sale in Dubai. Find upcoming projects with flexible payments and high capital growth opportunities.",
};

export default function HomePage() {
  return <HomePageClient />;
}
