'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Container } from '@/components/ui';
import { CosmicBackground } from './CosmicBackground';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <CosmicBackground />

      <Container className="relative z-20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-display font-display font-bold text-gradient-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the Secrets
            <br />
            of the Cosmos
          </motion.h1>

          <motion.p
            className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience world-class divination services, from AI-powered tarot readings to
            live consultations with gifted psychics.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/signup">
              <Button size="lg" className="animate-pulseGlow min-w-[200px]">
                Start Free Reading
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-small text-text-tertiary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="text-gold-bright text-lg">★★★★★</div>
              <span>4.9/5 from 10K+ readings</span>
            </div>
            <div>✓ 500K+ Happy Seekers</div>
            <div>✓ Certified Psychics</div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
      >
        <div className="w-6 h-10 border-2 border-gold-bright rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold-bright rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
