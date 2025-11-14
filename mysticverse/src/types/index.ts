// types/index.ts

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  birth_date: string; // YYYY-MM-DD
  birth_time?: string; // HH:MM
  birth_location?: string;
  zodiac_sign?: string;
}

export interface TarotCard {
  name: string;
  position: 'upright' | 'reversed';
  meaning?: string;
  image: string;
}

export interface Reading {
  id?: string;
  type: 'tarot' | 'coffee' | 'astrology';
  data: any; // The input data for the reading
  interpretation: any; // The AI-generated interpretation
  created_at?: string;
}
