
import React from 'react';

export interface ProjectHighlight {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Amenity {
  name: string;
  icon: React.ReactNode;
}