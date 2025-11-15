import React from 'react';
import Link from 'next/link';
import { Sparkles, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Container } from '@/components/ui';

const footerLinks = {
  services: [
    { label: 'Tarot Reading', href: '/services/tarot' },
    { label: 'Coffee Fortune', href: '/services/coffee' },
    { label: 'Astrology', href: '/services/astrology' },
    { label: 'Live Psychic', href: '/services/live-chat' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Psychics', href: '/psychics' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  legal: [
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Mail, href: 'mailto:support@mysticverse.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-dark border-t border-glass-border">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="w-6 h-6 text-cosmic-deep" />
              </div>
              <span className="text-xl font-display font-bold text-gradient-gold">
                MysticVerse
              </span>
            </Link>
            <p className="text-small text-text-tertiary mb-6 max-w-sm">
              Your trusted portal to the mystical realm. Unlock the secrets of your destiny
              with world-class divination services.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center hover:border-gold-bright hover:text-gold-bright transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-tertiary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-tertiary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-tertiary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-base font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-tertiary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-small text-text-tertiary text-center sm:text-left">
            © {currentYear} MysticVerse. All rights reserved.
          </p>
          <p className="text-micro text-text-disabled text-center sm:text-right">
            For entertainment purposes only. Not a substitute for professional advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
