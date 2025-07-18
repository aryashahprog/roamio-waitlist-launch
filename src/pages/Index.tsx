
import React from 'react';
import WaitlistForm from '../components/WaitlistForm';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Roamio
        </h1>
        
        {/* Tagline */}
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
          Stay ahead of everyone
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
