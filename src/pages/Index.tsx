import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { Instagram, Linkedin, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header/Logo */}
      <header className="py-6 px-6 max-container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-roamio bg-gradient-to-r from-roamio to-roamio-light bg-clip-text text-transparent">Roamio</h1>
        </div>
      </header>

      {/* Hero Section - RSVP Focused */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-12 md:py-24 max-container">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in-up">
            Roamio Social – July 11 @ HUB Atlanta
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Free drinks. Real people. One summer night.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-gray-800 font-medium">
              <Calendar size={20} className="text-roamio" />
              <span>Thursday, July 11</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 font-medium">
              <Clock size={20} className="text-roamio" />
              <span>7–11 PM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 font-medium">
              <MapPin size={20} className="text-roamio" />
              <span>960 Spring St NW, Atlanta</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-full max-w-sm mx-auto space-y-3">
              <Button
                asChild
                className="w-full bg-roamio hover:bg-roamio-dark text-white font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-[1.02] text-lg shadow-lg"
              >
                <a 
                  href="https://tally.so/r/mYbOeJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  RSVP Now
                </a>
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Takes 10 seconds. You'll get a calendar invite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-container space-y-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why Roamio?</h2>
          
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            College is better when you don't have to navigate it alone. We believe every student deserves to feel connected — to people, places, and opportunities.
          </p>
          
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
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
            <div className="prose mx-auto text-gray-600 space-y-4 text-center sm:text-left">
              <p className="leading-relaxed">
                Roamio was born from a simple realization: even on a busy campus, it's easy to feel disconnected. As active students ourselves, we saw great events go unnoticed and classmates unsure where to go or how to get involved. Flyers were scattered, group chats were overwhelming, and finding your place felt harder than it should.
              </p>
              <p className="leading-relaxed">
                We created Roamio to change that — a smarter way to discover events that match your interests, connect with others who share them, and navigate campus life with confidence and ease.
              </p>
            </div>
            
            {/* Tagline */}
            <div className="text-center pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-gray-500 italic">Made for students, by students.</p>
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
