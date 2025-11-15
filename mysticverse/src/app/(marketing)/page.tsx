import {
  HeroSection,
  ServicesGrid,
  HowItWorks,
  FeaturedPsychics,
  TestimonialsSection,
  StatsSection,
  FAQSection,
  CTASection,
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="bg-cosmic-deep text-text-primary">
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <FeaturedPsychics />
      <TestimonialsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
