import React from 'react';
import { motion } from 'framer-motion';

interface GenderSelectProps {
  value: 'male' | 'female' | null;
  onChange: (gender: 'male' | 'female') => void;
  onNext: () => void;
}

// Define animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.2
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

export const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange, onNext }) => {
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
        className="text-xl sm:text-2xl font-semibold text-primary-700 mb-6"
      >
        Please select your gender
      </motion.h2>
      
      <div className="grid grid-cols-2 gap-5 max-w-2xl mx-auto">
        <motion.button
          variants={itemVariants}
          onClick={() => {
            onChange('male');
            onNext();
          }}
          className={`gender-option ${value === 'male' ? 'gender-option-selected' : ''}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
            <img
              src="https://images.pexels.com/photos/27897903/pexels-photo-27897903.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Male"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base sm:text-lg text-secondary-700">👨 Male</span>
        </motion.button>
        
        <motion.button
          variants={itemVariants}
          onClick={() => {
            onChange('female');
            onNext();
          }}
          className={`gender-option ${value === 'female' ? 'gender-option-selected' : ''}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
            <img
              src="https://images.pexels.com/photos/3021538/pexels-photo-3021538.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Female"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base sm:text-lg text-secondary-700">👩 Female</span>
        </motion.button>
      </div>
    </motion.div>
  );
};