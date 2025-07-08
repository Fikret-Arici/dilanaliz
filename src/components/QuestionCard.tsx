import React from 'react';
import { Question } from '../types/test';
import { CheckCircle, Circle, BookOpen, Edit3, Headphones } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | number | null;
  onAnswerSelect: (answer: string | number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect
}) => {
  const getLevelColor = (level: string) => {
    const colors = {
      'A1': 'bg-green-100 text-green-800 border-green-200',
      'A2': 'bg-blue-100 text-blue-800 border-blue-200',
      'B1': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'B2': 'bg-orange-100 text-orange-800 border-orange-200',
      'C1': 'bg-red-100 text-red-800 border-red-200',
      'C2': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      grammar: '📝',
      vocabulary: '📚',
      reading: '📖',
      listening: '🎧'
    };
    return icons[category as keyof typeof icons] || '❓';
  };

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case 'multiple-choice':
        return <Circle className="h-4 w-4" />;
      case 'fill-blank':
        return <Edit3 className="h-4 w-4" />;
      case 'reading-comprehension':
        return <BookOpen className="h-4 w-4" />;
      case 'listening':
        return <Headphones className="h-4 w-4" />;
      default:
        return <Circle className="h-4 w-4" />;
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'multiple-choice':
        return 'Multiple Choice';
      case 'fill-blank':
        return 'Fill in the Blank';
      case 'reading-comprehension':
        return 'Reading Comprehension';
      case 'listening':
        return 'Listening';
      default:
        return 'Question';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Question Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="flex items-center space-x-2">
          <span className="text-2xl">{getCategoryIcon(question.category)}</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(question.level)}`}>
              Level {question.level}
            </span>
              <span className="text-gray-600 capitalize text-sm sm:text-base">{question.category}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            {getQuestionTypeIcon(question.type)}
            <span>{getQuestionTypeLabel(question.type)}</span>
          </div>
          <div className="text-amber-600 font-semibold text-sm sm:text-base">
          {question.points} {question.points === 1 ? 'point' : 'points'}
          </div>
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-relaxed">
        {question.question}
      </h3>
      </div>

      {/* Answer Options */}
      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 text-left hover:shadow-md ${
                selectedAnswer === index
                  ? 'border-red-700 bg-red-50 text-red-900 shadow-md'
                  : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
              }`}
            >
              <div className="flex-shrink-0">
              {selectedAnswer === index ? (
                <CheckCircle className="h-5 w-5 text-red-700" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
              </div>
              <span className="font-medium text-sm sm:text-base">{option}</span>
            </button>
          ))}
        </div>
      )}

      {question.type === 'fill-blank' && question.options && (
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 text-sm font-medium mb-2">Fill in the blank:</p>
            <p className="text-blue-900">{question.question}</p>
          </div>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 text-left hover:shadow-md ${
                selectedAnswer === index
                  ? 'border-blue-700 bg-blue-50 text-blue-900 shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
              }`}
            >
              <div className="flex-shrink-0">
              {selectedAnswer === index ? (
                  <CheckCircle className="h-5 w-5 text-blue-700" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
              </div>
              <span className="font-medium text-sm sm:text-base">{option}</span>
            </button>
          ))}
        </div>
      )}

      {question.type === 'reading-comprehension' && question.options && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-green-800 text-sm font-medium mb-2">Reading passage:</p>
            <p className="text-green-900 leading-relaxed">{question.question}</p>
          </div>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 text-left hover:shadow-md ${
                  selectedAnswer === index
                    ? 'border-green-700 bg-green-50 text-green-900 shadow-md'
                    : 'border-gray-200 hover:border-green-300 hover:bg-green-25'
                }`}
              >
                <div className="flex-shrink-0">
                  {selectedAnswer === index ? (
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <span className="font-medium text-sm sm:text-base">{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};