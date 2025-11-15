'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Coffee, Star, MessageCircle, Layers, Book } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, Container, Section } from '@/components/ui';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  'Tarot Reading': Layers,
  'Coffee Fortune': Coffee,
  'Astrology': Star,
  'Live Psychic': MessageCircle,
  'Playing Cards': Layers,
  'Yıldızname': Book,
};

export function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

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
            Our Mystical Services
          </h2>
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Choose from our range of divination services, each designed to provide clarity
            and guidance for your journey.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.title as keyof typeof iconMap] || Sparkles;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href}>
                  <Card className="h-full p-8 text-center group cursor-pointer">
                    <CardHeader className="p-0 items-center">
                      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-indigo-rich to-aurora-purple rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-8 h-8 text-gold-bright" />
                      </div>
                      <CardTitle className="mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-center">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="mt-6 text-gold-bright text-small font-medium group-hover:text-gold-muted transition-colors duration-200 flex items-center justify-center gap-2">
                      Learn More
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
