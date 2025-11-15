'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const steps = [
  {
    number: '1',
    title: 'Choose a Service',
    description: 'Select from tarot, astrology, coffee fortune, or live psychic readings',
  },
  {
    number: '2',
    title: 'Provide Your Details',
    description: 'Share your birth information or upload images for accurate readings',
  },
  {
    number: '3',
    title: 'Receive Your Reading',
    description: 'Get instant AI-powered insights or connect with a live psychic',
  },
  {
    number: '4',
    title: 'Gain Clarity',
    description: 'Use your personalized guidance to navigate life with confidence',
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-display font-bold text-center mb-4">
            Your Journey to Clarity
          </h2>
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Getting your reading is simple and intuitive. Follow these four steps to unlock
            your cosmic wisdom.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-aurora-purple to-transparent" />
              )}

              {/* Step content */}
              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-rich to-aurora-purple rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-gold-bright">{step.number}</span>
                </div>
                <h3 className="text-h4 font-semibold mb-2">{step.title}</h3>
                <p className="text-small text-text-tertiary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
