import React from 'react';
import { motion } from 'framer-motion';

interface AgeSelectProps {
  value: string | null;
  onChange: (age: '18-25' | '26-35' | '36-45' | '46+') => void;
  onNext: () => void;
  gender?: 'male' | 'female' | null;
}

// Define animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.15
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Gender-specific age group images
const maleAgeGroups = [
  {
    range: '18-25',
    icon: '🧑‍💼',
    image: 'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '👨‍💼',
    image: 'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '👨‍💻',
    image: 'https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '👨‍🦳',
    image: 'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '46+ years'
  }
] as const;

const femaleAgeGroups = [
  {
    range: '18-25',
    icon: '🧑‍💼',
    image: 'https://images.pexels.com/photos/1447771/pexels-photo-1447771.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '👩‍💼',
    image: 'https://images.pexels.com/photos/325865/pexels-photo-325865.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '👩‍💻',
    image: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '👩‍🦳',
    image: 'https://images.pexels.com/photos/8417210/pexels-photo-8417210.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '46+ years'
  }
] as const;

export const AgeSelect: React.FC<AgeSelectProps> = ({ value, onChange, onNext, gender = 'male' }) => {
  // Choose the appropriate age groups based on gender
  const ageGroups = gender === 'female' ? femaleAgeGroups : maleAgeGroups;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-center w-full"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-xl sm:text-2xl font-semibold text-primary-700 mb-4 sm:mb-6"
      >
        Which age group do you belong to?
      </motion.h2>
      
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        {ageGroups.map((group) => (
          <motion.button
            key={group.range}
            variants={itemVariants}
            onClick={() => {
              onChange(group.range);
              onNext();
            }}
            className={`age-option ${value === group.range ? 'age-option-selected' : ''}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm sm:text-base text-secondary-700">
              {group.icon} {group.title}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};