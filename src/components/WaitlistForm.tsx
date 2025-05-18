
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
    <div className="w-full max-w-md mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="input-primary transition-all duration-300 focus:ring-4 focus:ring-roamio/20"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="btn-primary transform transition-all duration-300 hover:scale-[1.03] hover:bg-roamio-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
            </Button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Get early access to Roamio before we launch.
          </p>
        </form>
      ) : (
        <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100 animate-fade-in">
          <h3 className="font-semibold text-green-800 mb-2">You're on the list!</h3>
          <p className="text-green-700">We'll notify you when Roamio is ready.</p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
