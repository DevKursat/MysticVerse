import { SERVICES } from '@/lib/constants';
import { Star, ChevronDown } from 'lucide-react';

// TODO: Move these to a separate component file
const CosmicBackground = () => (
  <div className="absolute inset-0 z-0">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>
);

const FeaturedPsychicCard = ({ psychic }) => (
    <div className="glass-card p-4 text-center">
        <img src={psychic.image} alt={psychic.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gold-bright"/>
        <h3 className="font-bold text-lg">{psychic.name}</h3>
        <p className="text-sm text-text-tertiary">{psychic.specialty}</p>
        <div className="flex justify-center items-center mt-2">
            <Star className="text-gold-bright h-4 w-4 mr-1" fill="currentColor" />
            <span>{psychic.rating}</span>
        </div>
    </div>
)

export default function LandingPage() {
  const psychics = [
      { name: 'Elena', specialty: 'Tarot Reader', rating: 4.9, image: '/images/psychic1.jpg' },
      { name: 'Marcus', specialty: 'Astrologer', rating: 4.8, image: '/images/psychic2.jpg' },
      { name: 'Seraphina', specialty: 'Clairvoyant', rating: 5.0, image: '/images/psychic3.jpg' },
      { name: 'Orion', specialty: 'Numerologist', rating: 4.9, image: '/images/psychic4.jpg' },
  ];
  const testimonials = [
      { name: 'Sarah J.', text: "I was blown away by the accuracy of my reading. I've been a skeptic my whole life, but this has made me a believer." },
      { name: 'Michael B.', text: "The psychic I spoke with was so compassionate and insightful. I feel like I have a new sense of purpose." },
      { name: 'Emily R.', text: "This is the best fortune-telling site I've ever used. The readings are so detailed and the psychics are amazing." },
  ]
  const faqs = [
      { q: "Is this service really free?", a: "Yes, we offer a free tier with limited access to our services. You can upgrade to a premium plan for more features." },
      { q: "Are your psychics certified?", a: "Yes, all of our psychics go through a rigorous screening process to ensure they are qualified and experienced." },
      { q: "Is my personal information secure?", a: "Yes, we take your privacy very seriously. We use state-of-the-art encryption to protect your data." },
  ]

  return (
    <div className="bg-cosmic-deep text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <CosmicBackground />
        <div className="absolute inset-0 bg-gradient-cosmic opacity-80 z-10"></div>
        <div className="relative z-20 animate-[fadeUp_0.8s_ease-out]">
          <h1 className="text-display font-display font-bold text-gradient-gold">
            Unlock the Secrets of the Cosmos
          </h1>
          <p className="text-body-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Experience world-class divination services, from AI-powered tarot readings to live consultations with gifted psychics.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="h-12 px-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-midnight-dark font-semibold rounded-xl shadow-[0_4px_16px_rgba(255,215,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 animate-[pulseGlow_2s_ease-in-out_infinite]">
              Start Free Reading
            </button>
            <button className="h-12 px-8 bg-transparent border border-[#FFD700] text-[#FFD700] font-medium rounded-xl hover:bg-[rgba(255,215,0,0.1)] transition-all duration-200">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-midnight-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-display font-bold text-center">Our Mystical Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((service) => (
              <div key={service.title} className="glass-card text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-rich rounded-full flex items-center justify-center">
                  {/* Placeholder for icon */}
                </div>
                <h3 className="text-h4 font-semibold font-accent">{service.title}</h3>
                <p className="text-small text-text-tertiary mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-display font-bold text-center">Your Journey to Clarity</h2>
          <div className="mt-12 max-w-3xl mx-auto grid md:grid-cols-4 gap-8 text-center">
              <div>
                  <div className="text-4xl font-bold text-aurora-purple">1</div>
                  <h3 className="mt-2 font-semibold">Choose a Service</h3>
              </div>
              <div>
                  <div className="text-4xl font-bold text-aurora-purple">2</div>
                  <h3 className="mt-2 font-semibold">Provide Your Details</h3>
              </div>
              <div>
                  <div className="text-4xl font-bold text-aurora-purple">3</div>
                  <h3 className="mt-2 font-semibold">Receive Your Reading</h3>
              </div>
              <div>
                  <div className="text-4xl font-bold text-aurora-purple">4</div>
                  <h3 className="mt-2 font-semibold">Gain Clarity</h3>
              </div>
          </div>
        </div>
      </section>

      {/* Featured Psychics */}
      <section className="py-24 bg-midnight-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-display font-bold text-center">Connect With Our Gifted Psychics</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {psychics.map(p => <FeaturedPsychicCard key={p.name} psychic={p} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-display font-bold text-center">Praised by Seekers Worldwide</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
              {testimonials.map(t => (
                  <div key={t.name} className="glass-card p-6">
                      <p>"{t.text}"</p>
                      <p className="mt-4 font-bold text-right">- {t.name}</p>
                  </div>
              ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-indigo-rich">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
              <div>
                  <div className="text-4xl font-bold">500K+</div>
                  <div>Readings</div>
              </div>
              <div>
                  <div className="text-4xl font-bold">10K+</div>
                  <div>Psychics</div>
              </div>
              <div>
                  <div className="text-4xl font-bold">4.9★</div>
                  <div>Average Rating</div>
              </div>
              <div>
                  <div className="text-4xl font-bold">98%</div>
                  <div>Satisfied Clients</div>
              </div>
          </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-h2 font-display font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
              {faqs.map(faq => (
                  <details key={faq.q} className="glass-card p-4 cursor-pointer">
                      <summary className="flex justify-between items-center font-semibold">
                          {faq.q}
                          <ChevronDown />
                      </summary>
                      <p className="mt-2 text-text-secondary">{faq.a}</p>
                  </details>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-aurora text-center">
        <h2 className="text-h2 font-display font-bold">Ready to Discover Your Path?</h2>
        <button className="mt-8 h-12 px-8 bg-white text-midnight-dark font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-200">
          Sign Up for Free
        </button>
      </section>
    </div>
  );
}
