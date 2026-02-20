
import React from 'react';
import { 
  Waves, 
  Palmtree, 
  Trees, 
  Activity, 
  Dribbble, 
  School, 
  Hospital, 
  ShoppingBag 
} from 'lucide-react';
import { Amenity, FAQItem } from './types';

export const AMENITIES: Amenity[] = [
  { name: 'Crystal Lagoons', icon: <Palmtree className="w-12 h-12" /> },
  { name: 'Landscaped Parks and Green Zones', icon: <Trees className="w-12 h-12" /> },
  { name: 'Waterfront Walkways and Promenades', icon: <Waves className="w-12 h-12" /> },
  { name: 'Jogging Tracks and Fitness Facilities', icon: <Activity className="w-12 h-12" /> },
  { name: 'Sports Courts and Recreation Areas', icon: <Dribbble className="w-12 h-12" /> },
  { name: 'International School', icon: <School className="w-12 h-12" /> },
  { name: 'Healthcare Facilities', icon: <Hospital className="w-12 h-12" /> },
  { name: 'Shopping Center', icon: <ShoppingBag className="w-12 h-12" /> },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is Sobha Sanctuary?",
    answer: "Sobha Sanctuary is a large master-planned residential community in Dubailand, envisioned around nature, open spaces, crystal lagoons, and a fully integrated lifestyle."
  },
  {
    question: "Where is Sobha Sanctuary Dubai located?",
    answer: "Sobha Sanctuary is situated in Dubailand, with easy access to key highways and major destinations across the city."
  },
  {
    question: "What types of properties are available at Sobha Sanctuary?",
    answer: "The Sobha Sanctuary residential community features a premium collection of 4 to 6-bedroom villas."
  },
  {
    question: "What lifestyle amenities will Sobha Sanctuary offer?",
    answer: "Sobha Sanctuary is planned to include landscaped parks, lagoons, a school, healthcare facilities, retail, dining, sports areas, and outdoor leisure spaces."
  },
  {
    question: "What Payment plan is offered for Sobha Sanctuary?",
    answer: "Buyers can benefit from a structured 60/40 payment plan aligned with the development milestones."
  },
  {
    question: "How can I invest in Sobha Sanctuary?",
    answer: "Discover your future home at Sobha Sanctuary; our team is ready to provide personalized insights and a curated list of available units."
  }
];