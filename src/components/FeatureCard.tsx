
import React, { useEffect, useRef } from 'react';
import { Calendar, Compass, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'calendar' | 'compass' | 'sparkles';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const renderIcon = () => {
    switch (icon) {
      case 'calendar':
        return <Calendar className="feature-icon" />;
      case 'compass':
        return <Compass className="feature-icon" />;
      case 'sparkles':
        return <Sparkles className="feature-icon" />;
      default:
        return null;
    }
  };

  return (
    <div 
      ref={cardRef} 
      className="feature-card opacity-0 translate-y-8 transition-all duration-700"
    >
      <div>
        {renderIcon()}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
