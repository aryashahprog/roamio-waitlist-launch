
import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import FeatureCard from '../components/FeatureCard';
import { Instagram, Linkedin } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header/Logo */}
      <header className="py-6 px-6 max-container">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-roamio bg-gradient-to-r from-roamio to-roamio-light bg-clip-text text-transparent">Roamio</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-12 md:py-24 max-container">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up">
            Navigate Campus Life Seamlessly
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Discover events, find your way, and connect on campus with Roamio.
          </p>
          
          <div className="pt-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-container space-y-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why Roamio?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <FeatureCard 
              icon="calendar"
              title="Discover Campus Events"
              description="Instantly find what's happening around you — clubs, free food, and more."
            />
            <FeatureCard 
              icon="compass"
              title="Find Your Way"
              description="Real-time navigation across campus — buildings, classrooms, and events."
            />
            <FeatureCard 
              icon="sparkles"
              title="Smart Nudges"
              description="AI-powered reminders so you never miss what matters."
            />
          </div>
          
          {/* Tagline */}
          <div className="text-center pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-gray-500 italic">Made for students, by students.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
            <div className="prose mx-auto text-gray-600 space-y-4 text-center sm:text-left">
              <p className="leading-relaxed">
                We started Roamio because we're active on campus and noticed a pattern: a lot of good events went unnoticed, and many students felt out of the loop. Flyers were everywhere, but nobody was sure where to go in between classes.
              </p>
              <p className="leading-relaxed">
                Roamio is our way of solving that — by making it easier to find events that actually match your interests, connect with others through shared interests, and navigate your campus stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 max-container">
        <div className="flex justify-center md:justify-start items-center gap-6 text-sm">
          <a 
            href="https://www.instagram.com/roamio.atl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-roamio transition-colors duration-300 transform hover:scale-110"
            aria-label="Follow Roamio on Instagram"
          >
            <Instagram size={22} />
          </a>
          <a 
            href="https://www.linkedin.com/company/roamioatl/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-roamio transition-colors duration-300 transform hover:scale-110"
            aria-label="Connect with Roamio on LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
