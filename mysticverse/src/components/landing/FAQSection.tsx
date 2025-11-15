'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container, Section } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Is this service really free?',
    answer:
      'Yes, we offer a free tier with limited access to our services. You can get your first reading completely free. For unlimited access and premium features, you can upgrade to one of our paid plans.',
  },
  {
    question: 'Are your psychics certified?',
    answer:
      'Yes, all of our psychics go through a rigorous screening process to ensure they are qualified and experienced. We verify their credentials, conduct background checks, and review client feedback regularly.',
  },
  {
    question: 'Is my personal information secure?',
    answer:
      'Absolutely. We take your privacy very seriously and use state-of-the-art encryption to protect your data. Your personal information is never shared with third parties without your explicit consent.',
  },
  {
    question: 'How accurate are the AI-powered readings?',
    answer:
      'Our AI is trained on thousands of traditional divination texts and patterns. While no reading can be 100% accurate, our users report high satisfaction rates and find the insights meaningful and helpful.',
  },
  {
    question: 'Can I get a refund if I am not satisfied?',
    answer:
      'Yes, we offer a 30-day money-back guarantee on all premium plans. If you are not completely satisfied with your readings, contact our support team for a full refund.',
  },
  {
    question: 'How do live psychic sessions work?',
    answer:
      'You can book a session with any of our available psychics through the platform. Sessions are conducted via video chat, voice call, or text messaging, depending on your preference.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-glass-border rounded-2xl overflow-hidden bg-glass backdrop-blur-lg"
    >
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-text-primary pr-8">{faq.question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gold-bright flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-8 pb-6 text-body text-text-secondary">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Frequently Asked Questions
          </h2>
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Have questions? We've got answers. If you can't find what you're looking for,
            feel free to contact us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
