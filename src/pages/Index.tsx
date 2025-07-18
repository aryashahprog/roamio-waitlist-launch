
import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import FeatureCard from '../components/FeatureCard';
import { Instagram, Linkedin, Calendar, Clock, MapPin } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50 flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 max-container">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-roamio">Roamio</h1>
          <a 
            href="https://tally.so/r/mYbOeJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-roamio text-white px-6 py-2 rounded-full font-medium hover:bg-roamio-dark transition-colors text-sm"
          >
            GET STARTED
          </a>
        </div>
      </header>

      {/* Announcement Banner */}
      <section className="px-6 max-container mb-8">
        <div className="bg-white border border-blue-100 rounded-2xl px-4 py-3 inline-flex items-center gap-2 shadow-sm">
          <span className="text-2xl">🎉</span>
          <span className="text-gray-700 font-medium">Now live! Our first Atlanta event is happening July 11th</span>
          <span className="text-roamio">→</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-12 max-container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Roamio Social – July 11 @ HUB Atlanta
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
              Free drinks. Real people. One summer night.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-700 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-roamio" />
              <span className="font-medium">Friday, July 11</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-roamio" />
              <span className="font-medium">7–11 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-roamio" />
              <span className="font-medium">960 Spring St NW, Atlanta</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4 pt-4">
            <a
              href="https://tally.so/r/mYbOeJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-roamio text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-roamio-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              RSVP Now
            </a>
            <p className="text-gray-500 text-sm font-medium">
              🎟 Limited spots. You'll get a calendar invite.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-6 max-container">
        <div className="text-center space-y-8">
          <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">
            TRUSTED BY STUDENTS
          </p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <div className="text-gray-600 font-bold text-lg">Georgia Tech</div>
            <div className="text-gray-600 font-bold text-lg">Emory</div>
            <div className="text-gray-600 font-bold text-lg">GSU</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Why Roamio?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              College is better when you don't have to navigate it alone. We believe every student deserves to feel connected — to people, places, and opportunities.
            </p>
          </div>
          
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
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <div className="prose mx-auto text-gray-600 space-y-4 text-lg leading-relaxed">
              <p>
                Roamio was born from a simple realization: even on a busy campus, it's easy to feel disconnected. As active students ourselves, we saw great events go unnoticed and classmates unsure where to go or how to get involved.
              </p>
              <p>
                We created Roamio to change that — a smarter way to discover events that match your interests, connect with others who share them, and navigate campus life with confidence and ease.
              </p>
            </div>
            <p className="text-gray-500 italic text-lg pt-4">Made for students, by students.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 max-container border-t border-gray-100">
        <div className="flex justify-center items-center gap-6">
          <a 
            href="https://www.instagram.com/roamio.ai?igsh=dWdtNjJ1MDcyNGNt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-roamio transition-colors duration-300 transform hover:scale-110"
            aria-label="Follow Roamio on Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/company/roamioatl/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-roamio transition-colors duration-300 transform hover:scale-110"
            aria-label="Connect with Roamio on LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
