export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Unlock the Secrets of Your Destiny</h1>
        <p className="text-xl mt-4">Your mystical journey begins here.</p>
        <button className="mt-8 px-8 py-3 bg-purple-600 rounded-full font-bold hover:bg-purple-700">
          Get a Free Reading
        </button>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold">1. Choose a Service</h3>
            <p className="mt-2 text-gray-400">Select from a wide range of services, including tarot readings, astrology, and more.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">2. Connect with a Psychic</h3>
            <p className="mt-2 text-gray-400">Get matched with a certified psychic who can provide the guidance you need.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">3. Get Your Reading</h3>
            <p className="mt-2 text-gray-400">Receive your personalized reading and gain the clarity you're looking for.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-lg">"I was blown away by the accuracy of my reading. I've been a skeptic my whole life, but this has made me a believer."</p>
            <p className="mt-4 font-bold">- Sarah J.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-lg">"The psychic I spoke with was so compassionate and insightful. I feel like I have a new sense of purpose."</p>
            <p className="mt-4 font-bold">- Michael B.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-lg">"This is the best fortune-telling site I've ever used. The readings are so detailed and the psychics are amazing."</p>
            <p className="mt-4 font-bold">- Emily R.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
