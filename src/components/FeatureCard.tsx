
import React from 'react';
import { Calendar, Compass, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'calendar' | 'compass' | 'sparkles';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
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
    <div className="feature-card animate-fade-in-up">
      {renderIcon()}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
