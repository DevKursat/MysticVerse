'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, Container, Section } from '@/components/ui';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah J.',
    location: 'New York, NY',
    text: "I was blown away by the accuracy of my reading. I've been a skeptic my whole life, but this has made me a believer. The insights I received helped me make a major career decision.",
    service: 'Tarot Reading',
  },
  {
    name: 'Michael B.',
    location: 'Los Angeles, CA',
    text: 'The psychic I spoke with was so compassionate and insightful. I feel like I have a new sense of purpose and direction in my life.',
    service: 'Live Psychic',
  },
  {
    name: 'Emily R.',
    location: 'Chicago, IL',
    text: "This is the best fortune-telling site I have ever used. The readings are so detailed and the psychics are amazing. Highly recommend!",
    service: 'Astrology',
  },
];

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-display font-bold text-center mb-4">
            Praised by Seekers Worldwide
          </h2>
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Join thousands of satisfied clients who have found clarity and guidance through
            our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col">
                <Quote className="w-10 h-10 text-gold-bright mb-6" />
                <p className="text-body text-text-secondary mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-glass-border pt-6">
                  <p className="font-semibold text-text-primary mb-1">{testimonial.name}</p>
                  <p className="text-small text-text-tertiary mb-2">{testimonial.location}</p>
                  <p className="text-small text-gold-bright font-medium">
                    {testimonial.service}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
