import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff } from 'lucide-react';
import { Question } from '../types/test';

interface ReadingQuestionProps {
  question: Question;
  selectedAnswer: string | number | null;
  onAnswerSelect: (answer: string | number) => void;
}

export const ReadingQuestion: React.FC<ReadingQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect
}) => {
  const [showPassage, setShowPassage] = useState(true);

  const handlePassageToggle = () => {
    setShowPassage(!showPassage);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
      {/* Question Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-6 w-6 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Reading Comprehension</h3>
            <p className="text-sm text-gray-600">Read the passage and answer the question</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePassageToggle}
            className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {showPassage ? (
              <EyeOff className="h-4 w-4 text-gray-600" />
            ) : (
              <Eye className="h-4 w-4 text-gray-600" />
            )}
            <span className="text-sm text-gray-700">
              {showPassage ? 'Hide' : 'Show'} Passage
            </span>
          </button>
        </div>
      </div>

      {/* Reading Passage */}
      {showPassage && question.readingPassage && (
        <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg max-h-96 overflow-y-auto">
          <div className="flex items-center space-x-2 mb-3">
            <BookOpen className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800">Reading Passage:</h4>
          </div>
          <div className="text-green-900 leading-relaxed text-sm sm:text-base">
            {question.readingPassage.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Question Text */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          {question.question}
        </h4>
      </div>

      {/* Answer Options */}
      {question.options && (
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
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index 
                    ? 'border-green-700 bg-green-700' 
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
              <span className="font-medium text-sm sm:text-base">{option}</span>
            </button>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-green-600" />
          <p className="text-green-800 text-sm font-medium">
            Read the passage above and select your answer.
          </p>
        </div>
      </div>

      {/* Reading Tips */}
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h5 className="font-medium text-blue-800 mb-2">Reading Tips:</h5>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Read the passage carefully before answering</li>
          <li>• Look for key words in the question</li>
          <li>• Eliminate obviously wrong answers first</li>
          <li>• Pay attention to details and context</li>
        </ul>
      </div>
    </div>
  );
}; 