import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuizProgress } from './components/QuizProgress';
import { TypeQuizQuestion } from './components/TypeQuizQuestion';
import { LeadForm } from './components/LeadForm';
import { TypeQuizResult } from './components/results/TypeQuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { typeQuestions, quizTitle, quizSubtitle } from './data/typeQuizData';
import { useTypeQuiz } from './hooks/useTypeQuiz';
import { UserData } from './types';
import './styles/index.css';

function TypeQuizApp() {
  const {
    state,
    userData,
    result,
    typeCounts,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    setUserData,
    updateOnboarding,
    nextStep
  } = useTypeQuiz();
  
  const [showRetakeMessage, setShowRetakeMessage] = useState(false);

  // Monitor error state and show error notifications
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [error]);

  // Custom form submit handler with error handling
  const handleFormSubmitWithFeedback = async (formData: Partial<UserData>) => {
    try {
      await handleFormSubmit(formData);
      // Show success notification when we don't get an error
      if (!error) {
        toast.success("Your results are ready!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (err) {
      // This is a fallback in case error handling in the hook fails
      toast.error("There was a problem submitting your information. Your results are still available.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Even if saving to server fails, show the results
      if (state.step === 'form') {
        nextStep();
      }
    }
  };

  const handleFormChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };
  
  // Function to handle quiz retake attempt
  const handleRetakeAttempt = () => {
    // Show message to user
    toast.info("You've already completed the quiz. Your results are shown below. Sharing is available at the bottom of the page.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setShowRetakeMessage(true);
    
    // Scroll to results section
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-secondary-100 py-12 px-4">
      <ToastContainer />
      <div className="quiz-container">
        {state.step !== 'welcome' && (
          <img
            src="https://zcrrryrpcibqtdrzetbk.supabase.co/storage/v1/object/public/images/Coaches%20Profile%20Pictures/Pamela.jpeg"
            alt="Coach Pamela"
            className="coach-image"
          />
        )}

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <WelcomeScreen 
              key="welcome" 
              onStart={nextStep} 
            />
          )}
          
          {state.step === 'form' && (
            <h2 key="form-title" className="text-2xl font-bold text-primary-600 mb-4">Where should we send you your results?</h2>
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
                  text: typeQuestions[state.currentQuestion].text.replace(
                    '{firstName}',
                    state.onboardingData.firstName
                  )
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
              onSubmit={handleFormSubmitWithFeedback}
              onChange={handleFormChange}
              isSubmitting={isSubmitting}
              error={error}
            />
          )}

          {state.step === 'result' && result && (
            <>
              <TypeQuizResult
                key="quiz-result"
                result={result}
                userData={userData}
                typeCounts={typeCounts}
              />
              <div className="mt-8 text-center">
                <button
                  onClick={handleRetakeAttempt}
                  className="text-primary-600 underline hover:text-primary-800 transition"
                >
                  Retake Quiz
                </button>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TypeQuizApp; 