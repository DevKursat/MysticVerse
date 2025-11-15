'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const stats = [
  { value: '500K+', label: 'Readings Delivered' },
  { value: '10K+', label: 'Certified Psychics' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '98%', label: 'Satisfied Clients' },
];

export function StatsSection() {
  return (
    <Section className="py-16 bg-indigo-rich">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-gold-bright mb-2">
                {stat.value}
              </div>
              <div className="text-body text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
