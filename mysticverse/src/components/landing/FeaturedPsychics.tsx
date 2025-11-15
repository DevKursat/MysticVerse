'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, Container, Section } from '@/components/ui';

interface Psychic {
  name: string;
  specialty: string;
  rating: number;
  image: string;
  readingsCount: number;
}

const psychics: Psychic[] = [
  {
    name: 'Elena Moonstone',
    specialty: 'Tarot Master',
    rating: 4.9,
    image: '/images/psychics/elena.jpg',
    readingsCount: 2500,
  },
  {
    name: 'Marcus Starling',
    specialty: 'Astrologer',
    rating: 4.8,
    image: '/images/psychics/marcus.jpg',
    readingsCount: 1800,
  },
  {
    name: 'Seraphina Rose',
    specialty: 'Clairvoyant',
    rating: 5.0,
    image: '/images/psychics/seraphina.jpg',
    readingsCount: 3200,
  },
  {
    name: 'Orion Divine',
    specialty: 'Numerologist',
    rating: 4.9,
    image: '/images/psychics/orion.jpg',
    readingsCount: 2100,
  },
];

export function FeaturedPsychics() {
  return (
    <Section variant="dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-display font-bold text-center mb-4">
            Connect With Our Gifted Psychics
          </h2>
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Our carefully selected psychics have helped thousands find clarity and guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {psychics.map((psychic, index) => (
            <motion.div
              key={psychic.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center group cursor-pointer" hover>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold-bright shadow-lg">
                    {/* Placeholder gradient until real images */}
                    <div className="w-full h-full bg-gradient-to-br from-indigo-rich via-aurora-purple to-cosmic-mid" />
                  </div>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1">{psychic.name}</h3>
                <p className="text-small text-text-tertiary mb-3">{psychic.specialty}</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="text-gold-bright h-4 w-4" fill="currentColor" />
                  <span className="text-small font-semibold">{psychic.rating}</span>
                  <span className="text-micro text-text-disabled">
                    ({psychic.readingsCount}+ readings)
                  </span>
                </div>
                <div className="mt-4 text-gold-bright text-small font-medium group-hover:text-gold-muted transition-colors duration-200">
                  View Profile
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
