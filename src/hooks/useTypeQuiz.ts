import { useState } from 'react';
import { QuizState, UserData, OnboardingData, QuizStep } from '../types';
import { personalityTypes } from '../data/typeQuizData';
import { quizService } from '../services/quiz.service';

export const useTypeQuiz = () => {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    currentQuestion: 0,
    answers: [],
    onboardingData: {
      firstName: '',
      gender: null,
      ageGroup: null
    }
  });

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: null,
    ageGroup: null
  });

  const [result, setResult] = useState<any>(null);
  const [typeCounts, setTypeCounts] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (type: string) => {
    const newAnswers = [...state.answers, type];
    setState((prev: QuizState) => ({
      ...prev,
      answers: newAnswers,
      currentQuestion: prev.currentQuestion + 1,
      step: prev.currentQuestion === 8 ? 'form' : 'questions' // We have 9 questions (0-8)
    }));
  };

  const calculateResult = () => {
    // Count frequency of each type in answers
    const counts: Record<string, number> = state.answers.reduce((acc: Record<string, number>, type: string) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find the most frequent type
    let maxCount = 0;
    let dominantType = "";

    Object.entries(counts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantType = type;
      }
    });

    // Map the dominant type to the full personality profile
    const typeMap: Record<string, string> = {
      "Strategic": "The Strategic Architect",
      "Visionary": "The Visionary Catalyst",
      "Empathetic": "The Empathetic Guide",
      "Dynamic": "The Dynamic Executor"
    };

    // Get the profile for the dominant type
    const mappedTypeName = typeMap[dominantType] || "The Strategic Architect";
    const profile = personalityTypes.find(p => p.type === mappedTypeName) || personalityTypes[0];

    // Log for debugging
    console.log("Dominant type:", dominantType);
    console.log("Mapped type name:", mappedTypeName);
    console.log("Type counts:", counts);
    console.log("Selected personality profile:", profile.type);

    return { 
      profile, 
      dominantType, 
      dominancePercentage: maxCount / state.answers.length * 100, 
      typeCounts: counts 
    };
  };

  const updateOnboarding = (data: Partial<OnboardingData>) => {
    setState((prev: QuizState) => ({
      ...prev,
      onboardingData: { ...prev.onboardingData, ...data }
    }));
  };

  const nextStep = () => {
    setState((prev: QuizState) => {
      const steps: QuizStep[] = ['welcome', 'name', 'gender', 'age', 'questions', 'form', 'result'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1];
      return { ...prev, step: nextStep };
    });
  };

  const handleFormSubmit = async (formData: Partial<UserData>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullUserData = {
        ...userData,
        ...state.onboardingData,
        ...formData,
        ageGroup: formData.ageGroup || userData.ageGroup || state.onboardingData.ageGroup || null
      };

      const { profile, typeCounts: counts, dominantType } = calculateResult();
      setResult(profile);
      setTypeCounts(counts);

      try {
        // Try to save to server but don't block moving to results if it fails
        await quizService.saveQuizResults(
          fullUserData,
          0, // No score in type framework
          dominantType,
          state.answers.map(_ => 0) // Convert type answers to scores (all 0)
        );
      } catch (serverError) {
        console.error('Error saving quiz results to server:', serverError);
        setError('Failed to save quiz results, but your results are still available.');
        // Continue to results page despite the error
      }

      // Always move to results page, even if saving to server fails
      setState((prev: QuizState) => ({ ...prev, step: 'result' }));
    } catch (err) {
      console.error('Error calculating quiz results:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state,
    userData,
    result,
    typeCounts,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep
  };
}; 