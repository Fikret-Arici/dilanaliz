import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Question, UserAnswer } from '../types/test';

interface TestProgressProps {
  questions: Question[];
  userAnswers: UserAnswer[];
  currentQuestionIndex: number;
  onQuestionClick: (index: number) => void;
}

export const TestProgress: React.FC<TestProgressProps> = ({
  questions,
  userAnswers,
  currentQuestionIndex,
  onQuestionClick
}) => {
  const getQuestionStatus = (questionIndex: number) => {
    const question = questions[questionIndex];
    const userAnswer = userAnswers.find(ua => ua.questionId === question.id);
    
    if (questionIndex === currentQuestionIndex) return 'current';
    if (userAnswer) return 'answered';
    return 'unanswered';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'current':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'answered':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Circle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-blue-50 border-blue-300 text-blue-700';
      case 'answered':
        return 'bg-green-50 border-green-300 text-green-700';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Progress</h3>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((_, index) => {
          const status = getQuestionStatus(index);
          return (
            <button
              key={index}
              onClick={() => onQuestionClick(index)}
              className={`flex items-center justify-center p-3 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getStatusClass(status)}`}
              disabled={status === 'current'}
            >
              {getStatusIcon(status)}
              <span className="ml-1 text-sm font-medium">{index + 1}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Answered: {userAnswers.length}/{questions.length}</span>
        <span>Progress: {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
      </div>
    </div>
  );
}; 