import React from 'react';
import { Brain, Clock, Target, AlertTriangle } from 'lucide-react';
import { Language } from '../types/test';

interface TestHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: number;
  language: Language;
}

export const TestHeader: React.FC<TestHeaderProps> = ({
  currentQuestion,
  totalQuestions,
  timeRemaining,
  language
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = (seconds: number) => {
    if (seconds <= 300) return 'text-red-600 bg-red-50 border-red-200';
    if (seconds <= 600) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-amber-600 bg-amber-50 border-amber-200';
  };

  const getLanguageName = (lang: Language) => {
    const names = {
      english: 'English',
      french: 'French',
      german: 'German',
      italian: 'Italian'
    };
    return names[lang];
  };

  const getLanguageFlag = (lang: Language) => {
    const flags = {
      english: '🇬🇧',
      french: '🇫🇷',
      german: '🇩🇪',
      italian: '🇮🇹'
    };
    return flags[lang];
  };

  const isTimeWarning = timeRemaining <= 300;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 mb-6">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-3 md:space-y-0">
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="Academico" className="h-8 w-8 md:h-10 md:w-10 rounded-lg" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">{getLanguageName(language)} Level Assessment</h1>
            <p className="text-gray-600 text-sm md:text-base">AI-Powered Analysis</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-blue-50 px-3 md:px-4 py-2 rounded-lg">
            <span className="text-lg md:text-xl">{getLanguageFlag(language)}</span>
            <span className="text-blue-700 font-semibold text-sm md:text-base">{getLanguageName(language)}</span>
          </div>
          <div className="flex items-center space-x-2 bg-red-50 px-3 md:px-4 py-2 rounded-lg">
            <Brain className="h-4 w-4 md:h-5 md:w-5 text-red-700" />
            <span className="text-red-700 font-semibold text-sm md:text-base">AI Analysis</span>
          </div>
        </div>
      </div>
      
      {/* Progress and Time Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Progress Section */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />
            <span className="text-gray-700 text-sm md:text-base">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <div className="w-full sm:w-64 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-700 to-amber-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Time Section */}
        <div className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-lg border ${getTimeColor(timeRemaining)}`}>
          {isTimeWarning ? (
            <AlertTriangle className="h-4 w-4 md:h-5 md:w-5" />
          ) : (
            <Clock className="h-4 w-4 md:h-5 md:w-5" />
          )}
          <span className="font-mono font-semibold text-sm md:text-base">
            {formatTime(timeRemaining)}
          </span>
          {isTimeWarning && (
            <span className="text-xs font-medium">Time running out!</span>
          )}
        </div>
      </div>

      {/* Mobile Progress Bar */}
      <div className="block lg:hidden mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-600">Progress</span>
          <span className="text-xs text-gray-600">{Math.round((currentQuestion / totalQuestions) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-red-700 to-amber-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};