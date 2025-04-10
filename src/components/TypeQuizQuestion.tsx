import React, { useMemo } from 'react';
import { Question } from '../types/quizTypes';
import { motion } from 'framer-motion';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (type: string) => void;
}

// Helper function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const TypeQuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer
}) => {
  // Randomize options once when component renders
  const randomizedOptions = useMemo(() => {
    return shuffleArray(question.options);
  }, [question.id]); // Only re-shuffle when question ID changes
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="quiz-question"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-700 mb-6">
        {question.text}
      </h2>
      
      <div className="options-container grid grid-cols-1 sm:grid-cols-2 gap-4">
        {randomizedOptions.map((option, index) => (
          <button
            key={index}
            className={`option-button flex items-center p-4 border rounded-lg transition-all ${
              selectedAnswer === option.type
                ? 'option-button-selected'
                : 'border-secondary-300 hover:border-primary-500 hover:bg-primary-50'
            }`}
            onClick={() => onSelectAnswer(option.type)}
          >
            <span className="text-xl sm:text-2xl mr-3">{option.icon}</span>
            <span className="text-sm sm:text-base text-left">{option.text}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}; 