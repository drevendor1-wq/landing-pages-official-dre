import type { Metadata } from "next";
import App from '../damac-components/App';

  export const metadata: Metadata = {
  title: "Damac Islands 2 | Premium Waterfront Townhouses and Villas",
  description: "Discover Mercedes-Benz Places | Binghatti City, a prestigious residential development in Dubai's Business Bay. Experience luxury living with world-class amenities, premium finishes, and exceptional connectivity. Explore 2, 3, 4, and 5-bedroom apartments with flexible payment plans.",
};

export default function DamacIslandsPage() {


  return (
    <main>
      <App />
    </main>
  );
}