
import React, { useState } from 'react';
import { toast } from 'sonner';
import { submitEmail } from '../utils/api';
import { Button } from './ui/button';
import { Input } from './ui/input';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await submitEmail(email);
      
      if (response.success) {
        setSubmitted(true);
        toast.success(response.message);
        setEmail('');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-roamio focus:ring-roamio/20 h-12"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            className="w-full bg-roamio hover:bg-roamio-dark text-white h-12 font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
          </p>
        </form>
      ) : (
        <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="font-semibold text-green-400 mb-2">✅ You're on the list!</h3>
          <p className="text-gray-300">We'll notify you when Roamio is ready.</p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
