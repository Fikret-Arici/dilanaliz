import React, { useState, useEffect } from 'react';
import { LanguageSelection } from './components/LanguageSelection';
import { WelcomeScreen } from './components/WelcomeScreen';
import { TestHeader } from './components/TestHeader';
import { QuestionCard } from './components/QuestionCard';
import { ResultsAnalysis } from './components/ResultsAnalysis';
import { questions } from './data/questions';
import { analyzeTestResults } from './utils/testAnalysis';
import { UserAnswer, TestResult, Language } from './types/test';
import { ChevronRight, ChevronLeft, Save, AlertCircle } from 'lucide-react';

// TestState'den test-selection ve testType ile ilgili state'leri kaldır

type TestState = 'language-selection' | 'welcome' | 'testing' | 'results';

// LocalStorage keys
const STORAGE_KEYS = {
  TEST_STATE: 'dilanaliz_test_state',
  SELECTED_LANGUAGE: 'dilanaliz_selected_language',
  CURRENT_QUESTION: 'dilanaliz_current_question',
  USER_ANSWERS: 'dilanaliz_user_answers',
  TIME_REMAINING: 'dilanaliz_time_remaining',
  TEST_RESULTS: 'dilanaliz_test_results'
};

function App() {
  const [testState, setTestState] = useState<TestState>('language-selection');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(900); // 15 dakika
  const [testResults, setTestResults] = useState<TestResult | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [showSaveMessage, setShowSaveMessage] = useState(false);

  // Load saved state from localStorage on component mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(STORAGE_KEYS.TEST_STATE);
      const savedLanguage = localStorage.getItem(STORAGE_KEYS.SELECTED_LANGUAGE);
      const savedQuestion = localStorage.getItem(STORAGE_KEYS.CURRENT_QUESTION);
      const savedAnswers = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
      const savedTime = localStorage.getItem(STORAGE_KEYS.TIME_REMAINING);
      const savedResults = localStorage.getItem(STORAGE_KEYS.TEST_RESULTS);

      if (savedState && savedState !== 'language-selection') {
        setTestState(savedState as TestState);
        if (savedLanguage) setSelectedLanguage(savedLanguage as Language);
        if (savedQuestion) setCurrentQuestionIndex(parseInt(savedQuestion));
        if (savedAnswers) setUserAnswers(JSON.parse(savedAnswers));
        if (savedTime) setTimeRemaining(parseInt(savedTime));
        if (savedResults) setTestResults(JSON.parse(savedResults));
      }
    } catch (error) {
      console.error('Error loading saved state:', error);
      // Clear corrupted localStorage data
      Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TEST_STATE, testState);
      if (selectedLanguage) {
        localStorage.setItem(STORAGE_KEYS.SELECTED_LANGUAGE, selectedLanguage);
      }
      localStorage.setItem(STORAGE_KEYS.CURRENT_QUESTION, currentQuestionIndex.toString());
      localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(userAnswers));
      localStorage.setItem(STORAGE_KEYS.TIME_REMAINING, timeRemaining.toString());
      if (testResults) {
        localStorage.setItem(STORAGE_KEYS.TEST_RESULTS, JSON.stringify(testResults));
      }
    } catch (error) {
      console.error('Error saving state:', error);
    }
  }, [testState, selectedLanguage, currentQuestionIndex, userAnswers, timeRemaining, testResults]);

  // Timer effect
  useEffect(() => {
    if (testState === 'testing' && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleFinishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [testState, timeRemaining]);

  // Set selected answer if returning to a previously answered question
  useEffect(() => {
    if (testState === 'testing' && selectedLanguage) {
      const languageQuestions = questions.filter(q => q.language === selectedLanguage);
      if (languageQuestions[currentQuestionIndex]) {
        const currentQuestion = languageQuestions[currentQuestionIndex];
        const existingAnswer = userAnswers.find(ua => ua.questionId === currentQuestion.id);
        
        if (existingAnswer) {
          setSelectedAnswer(existingAnswer.answer);
        } else {
          setSelectedAnswer(null);
        }
      }
    }
  }, [currentQuestionIndex, userAnswers, testState, selectedLanguage]);

  // Get questions for selected language
  const getQuestionsForLanguage = (language: Language) => {
    return questions.filter(q => q.language === language);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setTestState('welcome');
  };

  const handleStartTest = () => {
    setTestState('testing');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    
    // Set time based on test type
    // For now, a default duration or logic to set based on selectedLanguage if needed
    setTimeRemaining(900); // Default to 15 minutes
    
    setSelectedAnswer(null);
    setTestResults(null);
    
    // Clear any existing results
    localStorage.removeItem(STORAGE_KEYS.TEST_RESULTS);
  };

  const handleAnswerSelect = (answer: string | number) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null && selectedLanguage) {
      const languageQuestions = questions.filter(q => q.language === selectedLanguage);
      const currentQuestion = languageQuestions[currentQuestionIndex];
      const newAnswer: UserAnswer = {
        questionId: currentQuestion.id,
        answer: selectedAnswer,
        timeSpent: 0 // Could track actual time spent
      };

      const updatedAnswers = [...userAnswers];
      const existingIndex = updatedAnswers.findIndex(ua => ua.questionId === currentQuestion.id);
      
      if (existingIndex >= 0) {
        updatedAnswers[existingIndex] = newAnswer;
      } else {
        updatedAnswers.push(newAnswer);
      }
      
      setUserAnswers(updatedAnswers);

      if (currentQuestionIndex < languageQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        handleFinishTest(updatedAnswers);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0 && selectedLanguage) {
      setCurrentQuestionIndex(prev => prev - 1);
      const languageQuestions = questions.filter(q => q.language === selectedLanguage);
      const previousAnswer = userAnswers.find(ua => ua.questionId === languageQuestions[currentQuestionIndex - 1].id);
      setSelectedAnswer(previousAnswer?.answer ?? null);
    }
  };

  const handleFinishTest = (answers = userAnswers) => {
    if (selectedLanguage) {
      const languageQuestions = questions.filter(q => q.language === selectedLanguage);
      const results = analyzeTestResults(languageQuestions, answers);
      results.language = selectedLanguage;
      setTestResults(results);
      setTestState('results');
    }
  };

  const handleRestartTest = () => {
    setTestState('language-selection');
    setSelectedLanguage(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeRemaining(900);
    setTestResults(null);
    setSelectedAnswer(null);
    
    // Clear localStorage
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  };

  const handleSaveProgress = () => {
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 2000);
  };

  if (testState === 'language-selection') {
    return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
  }

  if (testState === 'welcome') {
    return <WelcomeScreen onStartTest={handleStartTest} selectedLanguage={selectedLanguage || 'english'} />;
  }

  if (testState === 'results' && testResults) {
    return <ResultsAnalysis results={testResults} onRestart={handleRestartTest} />;
  }

  if (!selectedLanguage) {
    return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
  }

  const languageQuestions = questions.filter(q => q.language === selectedLanguage);
  const currentQuestion = languageQuestions[currentQuestionIndex];
  const answeredQuestions = userAnswers.length;
  const progressPercentage = Math.round(((currentQuestionIndex + 1) / languageQuestions.length) * 100);

  // Eğer currentQuestion yoksa veya test state'i testing değilse, loading göster
  if (!currentQuestion || testState !== 'testing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading test...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-4">
        <TestHeader
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={languageQuestions.length}
          timeRemaining={timeRemaining}
          language={selectedLanguage}
        />

        {/* Progress indicator */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{answeredQuestions}/{languageQuestions.length} answered</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-700 to-amber-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-center mt-2">
            <span className="text-sm text-gray-600">{progressPercentage}% Complete</span>
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Navigation and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSaveProgress}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Save className="h-4 w-4" />
              <span className="text-sm">Save</span>
            </button>
            
            <button
              onClick={() => handleFinishTest()}
              className="text-gray-600 hover:text-red-700 text-sm underline transition-colors duration-200"
            >
              Finish early
            </button>
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              selectedAnswer === null
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-700 to-red-600 text-white hover:from-red-800 hover:to-red-700 shadow-md hover:shadow-lg transform hover:scale-105'
            }`}
          >
            <span>{currentQuestionIndex === languageQuestions.length - 1 ? 'Finish Test' : 'Next'}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Save confirmation message */}
        {showSaveMessage && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
            <Save className="h-4 w-4" />
            <span>Progress saved!</span>
          </div>
        )}

        {/* Time warning */}
        {timeRemaining <= 300 && timeRemaining > 0 && (
          <div className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
            <AlertCircle className="h-4 w-4" />
            <span>Time running out! ({Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')})</span>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;