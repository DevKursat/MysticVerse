'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Container } from '@/components/ui';

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-aurora relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-bright rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aurora-purple rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-display font-display font-bold text-white mb-6">
            Ready to Discover Your Path?
          </h2>
          <p className="text-body-lg text-white/90 max-w-2xl mx-auto mb-12">
            Join thousands of seekers who have found clarity and guidance through MysticVerse.
            Your cosmic journey begins today.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-white text-midnight-dark hover:scale-105 hover:shadow-2xl min-w-[240px] text-lg h-14"
            >
              Sign Up for Free
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
