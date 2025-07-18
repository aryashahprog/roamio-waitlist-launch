
import React from 'react';
import WaitlistForm from '../components/WaitlistForm';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Roamio
        </h1>
        
        {/* Tagline */}
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
          Spotify Discover Weekly{' '}
          <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent font-bold">
            for college events
          </span>
        </h2>
        
        {/* Waitlist Form */}
        <div className="pt-4">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
