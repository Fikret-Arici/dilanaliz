import React, { useState } from 'react';
import { Edit3, CheckCircle, XCircle } from 'lucide-react';

interface FillInTheBlankProps {
  question: string;
  correctAnswer: string;
  onAnswerSubmit: (answer: string) => void;
  selectedAnswer?: string;
}

export const FillInTheBlank: React.FC<FillInTheBlankProps> = ({
  question,
  correctAnswer,
  onAnswerSubmit,
  selectedAnswer
}) => {
  const [userInput, setUserInput] = useState(selectedAnswer || '');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = () => {
    if (userInput.trim()) {
      onAnswerSubmit(userInput.trim());
      setShowFeedback(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Edit3 className="h-5 w-5 text-blue-600" />
          <p className="text-blue-800 text-sm font-medium">Fill in the blank:</p>
        </div>
        <p className="text-blue-900 leading-relaxed">{question}</p>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer here..."
            className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
            disabled={showFeedback}
          />
          <button
            onClick={handleSubmit}
            disabled={!userInput.trim() || showFeedback}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Submit
          </button>
        </div>

        {showFeedback && (
          <div className={`p-4 rounded-lg border-2 ${
            isCorrect 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center space-x-2">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
              <span className="font-medium">
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            {!isCorrect && (
              <p className="mt-2 text-sm">
                Correct answer: <span className="font-semibold">{correctAnswer}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}; 