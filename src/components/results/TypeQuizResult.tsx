import React, { useEffect } from 'react';
import { UserData } from '../../types';
import { PersonalityType } from '../../types/quizTypes';
import { Share2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Coach information
const COACH_NAME = "Adalgisa Holtrop";

interface TypeQuizResultProps {
  result: PersonalityType;
  userData: UserData;
  typeCounts: Record<string, number>;
}

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const TypeQuizResult: React.FC<TypeQuizResultProps> = ({
  result,
  userData,
  typeCounts
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Calculate percentages for visualization
  const totalAnswers = Object.values(typeCounts).reduce((sum, count) => sum + count, 0);
  const typePercentages = Object.entries(typeCounts).map(([type, count]) => ({
    type,
    percentage: Math.round((count / totalAnswers) * 100)
  }));

  // Get emoji based on type
  const getTypeEmoji = (type: string) => {
    if (type.includes('Strategic')) return '🧠';
    if (type.includes('Visionary')) return '🤩';
    if (type.includes('Empathetic')) return '😊';
    if (type.includes('Dynamic')) return '😎';
    return '👑';
  };

  // Create personalized sharing messages
  const emoji = getTypeEmoji(result.type);
  const shareMessage = `${emoji} I just took ${COACH_NAME}'s Leadership Style quiz and discovered I'm a "${result.type}"! Curious about your leadership style? Take this 5-minute quiz: `;
  const shareUrl = window.location.href;
  
  // Share functions
  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + shareUrl)}`, '_blank');
  };
  
  const shareOnMessenger = () => {
    window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=181374745748345&redirect_uri=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <motion.div 
      className="quiz-result"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="result-title"
        variants={itemVariants}
      >
        {userData.firstName}, you are <span className="highlight">{result.type}</span>
      </motion.h1>
      
      <motion.div 
        className="result-description"
        variants={itemVariants}
      >
        <p>{result.description}</p>
      </motion.div>
      
      <motion.div 
        className="type-distribution my-8"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold mb-2">Your Leadership Style Breakdown:</h3>
        <div className="type-bars">
          {typePercentages.map(({ type, percentage }) => (
            <div key={type} className="type-bar-container mb-3">
              <div className="flex items-center mb-1">
                <span className="type-label font-medium">{type}:</span>
                <span className="ml-2">{percentage}%</span>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: '0%' }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="type-details grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <motion.div 
          className="strengths bg-primary-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4">Your Natural Strengths:</h3>
          <ul className="list-disc pl-5 space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="challenges bg-accent-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4">Growth Opportunities:</h3>
          <ul className="list-disc pl-5 space-y-2">
            {result.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div 
        className="recommendations bg-secondary-50 p-6 rounded-lg my-8"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold mb-4">Personalized Strategies:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {result.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        className="cta-section text-center mt-10 bg-primary-50 p-6 rounded-lg"
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold mb-3">🤩 Know someone who'd love to discover their leadership type? 😊</h3>
        <p className="mb-6">
          Who in your life would benefit from understanding their leadership style? Share this quiz with them!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            onClick={shareOnWhatsApp}
            className="share-button flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={18} />
            <span>Share on WhatsApp</span>
          </motion.button>
          
          <motion.button 
            onClick={shareOnMessenger}
            className="share-button flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={18} />
            <span>Share on Messenger</span>
          </motion.button>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 italic">
          "Great leadership is about understanding your unique style and leveraging it effectively." - {COACH_NAME}
        </p>
      </motion.div>
    </motion.div>
  );
}; 