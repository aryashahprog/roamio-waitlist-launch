import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { Instagram, Linkedin, Calendar, Clock, MapPin, QrCode } from 'lucide-react';
import { Button } from '../components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 flex flex-col">
      {/* Header/Logo */}
      <header className="py-6 px-6 max-container relative">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-roamio bg-gradient-to-r from-roamio to-roamio-light bg-clip-text text-transparent">Roamio</h1>
          
          {/* Floating Badge */}
          <div className="hidden sm:block absolute top-6 right-6 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 shadow-lg">
            <span className="text-sm font-medium text-gray-700">🎟 Free Drinks • Real Vibes • One Night Only</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-12 md:py-24 max-container">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Mobile Badge */}
          <div className="sm:hidden bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 shadow-lg inline-block">
            <span className="text-sm font-medium text-gray-700">🎟 Free Drinks • Real Vibes • One Night Only</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up text-gray-900">
            Roamio Social: July 11 @ HUB Atlanta
          </h1>
          
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Kick off the summer at our first-ever Roamio event.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A night of music, real people, and good energy — with free drinks.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              No networking pressure. Just show up.
            </p>
          </div>
          
          {/* Event Details Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 md:p-8 shadow-xl animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                <div className="bg-roamio/10 p-3 rounded-full">
                  <Calendar size={24} className="text-roamio" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Thursday</p>
                  <p className="text-gray-600">July 11</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                <div className="bg-roamio/10 p-3 rounded-full">
                  <Clock size={24} className="text-roamio" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">7:00 PM</p>
                  <p className="text-gray-600">– 11:00 PM</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                <div className="bg-roamio/10 p-3 rounded-full">
                  <MapPin size={24} className="text-roamio" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">HUB Atlanta</p>
                  <p className="text-gray-600 text-sm">960 Spring St NW<br />Atlanta, GA 30309</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="pt-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
              <div className="w-full md:w-auto space-y-4">
                <Button
                  asChild
                  className="w-full md:w-auto bg-roamio hover:bg-roamio-dark text-white font-bold py-4 px-12 rounded-xl transform transition-all duration-300 hover:scale-[1.03] text-lg shadow-lg hover:shadow-xl"
                >
                  <a 
                    href="https://tally.so/r/mYbOeJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    RSVP Now
                  </a>
                </Button>
                <p className="text-sm text-gray-600 text-center md:text-left">
                  Free drinks. Instant calendar invite. Limited spots.
                </p>
              </div>
              
              {/* QR Code Section */}
              <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-4 shadow-lg">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <QrCode size={80} className="text-gray-700" />
                </div>
                <p className="text-xs text-gray-600 text-center">Scan for<br />Instagram Stories</p>
              </div>
            </div>
          </div>
          
          {/* Brand Tie-In */}
          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-gray-500 italic text-sm">
              Powered by Roamio — the app that helps you show up.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
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
