import { AnimatePresence, motion } from 'framer-motion';
import { QuizProgress } from './components/QuizProgress';
import { TypeQuizQuestion } from './components/TypeQuizQuestion';
import { LeadForm } from './components/LeadForm';
import { TypeQuizResult } from './components/results/TypeQuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { typeQuestions, quizTitle, quizSubtitle, personalityTypes } from './data/typeQuizData';
import { useTypeQuiz } from './hooks/useTypeQuiz';
import './styles/index.css';

// Coach information
const COACH_NAME = "Adalgisa Holtrop";
const COACH_IMAGE = "https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Adalgisa%20Holtrop%20PP.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0FkYWxnaXNhIEhvbHRyb3AgUFAuanBlZyIsImlhdCI6MTc0MzUxNTU3OCwiZXhwIjoxNzc1MDUxNTc4fQ.jwKlSeEiiMYvc2m5hWV-L45gnvvN0acuha5H_hFhZAs"; // Profile picture URL from branding.json

function App() {
  const {
    state,
    userData,
    result,
    typeCounts,
    handleAnswer,
    handleFormSubmit,
    setUserData,
    updateOnboarding,
    nextStep
  } = useTypeQuiz();

  const handleFormChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  // Helper function to replace [Name] placeholders with the user's first name
  const replaceNamePlaceholder = (text: string): string => {
    return text.replace(/\[Name\]/g, state.onboardingData.firstName || '');
  };

  return (
    <div className="min-h-screen bg-secondary-100 py-12 px-4">
      <div className="quiz-container">
        {state.step !== 'welcome' && COACH_IMAGE && (
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={COACH_IMAGE}
            alt={`Coach ${COACH_NAME}`}
            className="coach-image w-20 h-20 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
          />
        )}

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <WelcomeScreen key="welcome" onStart={nextStep} />
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <h1 key="quiz-title" className="quiz-title">{quizTitle}</h1>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'form' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && (
            <p key="quiz-subtitle" className="quiz-subtitle">
              {quizSubtitle}
            </p>
          )}

          {state.step === 'name' && (
            <NameInput
              key="name-input"
              value={state.onboardingData.firstName}
              onChange={(name) => updateOnboarding({ firstName: name })}
              onNext={nextStep}
            />
          )}

          {state.step === 'gender' && (
            <GenderSelect
              key="gender-select"
              value={state.onboardingData.gender}
              onChange={(gender) => updateOnboarding({ gender })}
              onNext={nextStep}
            />
          )}

          {state.step === 'age' && (
            <AgeSelect
              key="age-select"
              value={state.onboardingData.ageGroup}
              onChange={(ageGroup) => updateOnboarding({ ageGroup })}
              onNext={nextStep}
              gender={state.onboardingData.gender as 'male' | 'female'}
            />
          )}

          {state.step === 'questions' && (
            <div key="questions-container">
              <QuizProgress
                currentQuestion={state.currentQuestion + 1}
                totalQuestions={typeQuestions.length}
              />
              <TypeQuizQuestion
                key={`question-${state.currentQuestion}`}
                question={{
                  ...typeQuestions[state.currentQuestion],
                  text: replaceNamePlaceholder(typeQuestions[state.currentQuestion].text)
                }}
                selectedAnswer={null}
                onSelectAnswer={handleAnswer}
              />
            </div>
          )}

          {state.step === 'form' && (
            <LeadForm
              key="lead-form"
              userData={userData}
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
            />
          )}

          {state.step === 'result' && result && (
            <TypeQuizResult
              key="quiz-result"
              result={result}
              userData={userData}
              typeCounts={typeCounts}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;