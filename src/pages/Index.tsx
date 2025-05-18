
import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import FeatureCard from '../components/FeatureCard';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header/Logo */}
      <header className="py-6 px-6 max-container">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-roamio">Roamio</h1>
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
      <section className="py-16 bg-gray-50">
        <div className="max-container space-y-12">
          <h2 className="text-3xl font-bold text-center animate-fade-in-up">Why Roamio?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <FeatureCard 
              icon="calendar"
              title="Discover Campus Events"
              description="Instantly find what's happening around you, from club meetings to free food popups."
            />
            <FeatureCard 
              icon="compass"
              title="Find Your Way"
              description="Real-time navigation across multiple campuses with step-by-step directions."
            />
            <FeatureCard 
              icon="sparkles"
              title="Smart Nudges"
              description="Get AI-powered reminders so you never miss what matters most."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 max-container">
        <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-4 text-sm text-gray-500">
          <a 
            href="https://www.instagram.com/roamio.atl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-roamio transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/roamioatl/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-roamio transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
