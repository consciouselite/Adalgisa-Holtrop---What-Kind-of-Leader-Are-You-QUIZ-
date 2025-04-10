import React, { useState } from 'react';
import { UserData } from '../types';
import { motion } from 'framer-motion';

// Coach information
const COACH_NAME = "Adalgisa Holtrop";

interface LeadFormProps {
  userData: UserData;
  onSubmit: (formData: Partial<UserData>) => Promise<void>;
  onChange: (field: keyof UserData, value: string) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  userData,
  onSubmit,
  onChange
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await onSubmit(userData);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lead-form"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-700 mb-3">
        Where should we send your leadership results?
      </h2>
      
      <p className="text-secondary-700 mb-6">
        Enter your details below to receive your personalized leadership insights from {COACH_NAME}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={userData.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="Your email address"
            required
            disabled={isSubmitting}
            className="input-field"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-1">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={userData.firstName}
              onChange={(e) => onChange('firstName', e.target.value)}
              placeholder="Your first name"
              required
              disabled={isSubmitting}
              className="input-field"
            />
          </div>
          
          <div className="w-full">
            <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={userData.lastName}
              onChange={(e) => onChange('lastName', e.target.value)}
              placeholder="Your last name"
              required
              disabled={isSubmitting}
              className="input-field"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
            Phone Number (optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={userData.phone || ''}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="Your phone number"
            disabled={isSubmitting}
            className="input-field"
          />
        </div>
        
        {error && (
          <div className="text-error text-sm mt-2">{error}</div>
        )}
        
        <div className="pt-4">
          <button 
            type="submit" 
            className="primary-button w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Get My Leadership Insights'}
          </button>
        </div>
        
        <p className="text-xs text-secondary-500 mt-3 text-center">
          We value your privacy and will never share your details. By submitting, you agree to receive leadership insights from {COACH_NAME}.
        </p>
      </form>
    </motion.div>
  );
};