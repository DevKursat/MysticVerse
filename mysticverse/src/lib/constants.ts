// lib/constants.ts
import { NavLink, Service } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/psychics', label: 'Psychics' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Tarot Reading',
    description: 'Gain insight into your past, present, and future with a personalized tarot reading.',
    icon: '/icons/tarot.svg',
    href: '/services/tarot'
  },
  {
    title: 'Coffee Fortune',
    description: 'Discover hidden meanings in the patterns of your coffee cup.',
    icon: '/icons/coffee.svg',
    href: '/services/coffee'
  },
  {
    title: 'Astrology',
    description: 'Explore your natal chart and understand your cosmic blueprint.',
    icon: '/icons/astrology.svg',
    href: '/services/astrology'
  },
    {
    title: 'Live Psychic',
    description: 'Connect with gifted psychics for real-time guidance and clarity.',
    icon: '/icons/psychic.svg',
    href: '/services/live-chat'
  },
  {
    title: 'Playing Cards',
    description: 'A traditional method of divination to answer your pressing questions.',
    icon: '/icons/playing-cards.svg',
    href: '/services/playing-cards'
  },
  {
    title: 'Yıldızname',
    description: 'A comprehensive life report based on Turkish astrological traditions.',
    icon: '/icons/yildizname.svg',
    href: '/services/yildizname'
  }
];
