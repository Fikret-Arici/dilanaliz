import React, { useState } from 'react';
import { Headphones, Play, Pause, Volume2, VolumeX, Clock } from 'lucide-react';
import { Question } from '../types/test';
import { AudioPlayer } from './AudioPlayer';

interface ListeningQuestionProps {
  question: Question;
  selectedAnswer: string | number | null;
  onAnswerSelect: (answer: string | number) => void;
}

export const ListeningQuestion: React.FC<ListeningQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect
}) => {
  const [hasPlayed, setHasPlayed] = useState(true); // Geçici olarak true yapıyoruz
  const [playCount, setPlayCount] = useState(0);
  const maxPlays = 2; // Maksimum dinleme sayısı

  const handlePlay = () => {
    if (!hasPlayed) {
      setHasPlayed(true);
    }
    setPlayCount(prev => prev + 1);
  };

  const handlePause = () => {
    // Pause işlemi
  };

  const handleEnded = () => {
    // Ses bittiğinde
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
      {/* Question Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <Headphones className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Listening Comprehension</h3>
            <p className="text-sm text-gray-600">Listen to the audio and answer the question</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-50 px-3 py-1 rounded-full text-sm">
            <span className="text-blue-700 font-medium">
              {playCount}/{maxPlays} plays
            </span>
          </div>
          {question.timeLimit && (
            <div className="bg-amber-50 px-3 py-1 rounded-full text-sm">
              <Clock className="h-4 w-4 text-amber-600 inline mr-1" />
              <span className="text-amber-700 font-medium">
                {Math.floor(question.timeLimit / 60)}:{(question.timeLimit % 60).toString().padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Audio Player */}
      {question.audioUrl && (
        <div className="mb-6">
          <AudioPlayer
            audioUrl={question.audioUrl}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          />
        </div>
      )}

      {/* Question Text */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          {question.question}
        </h4>
        
        {/* Transcript */}
        {question.transcript && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <h5 className="font-medium text-gray-700 mb-2">Transcript:</h5>
            <p className="text-gray-600 text-sm leading-relaxed">{question.transcript}</p>
          </div>
        )}
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
                  ? 'border-blue-700 bg-blue-50 text-blue-900 shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
              }`}
            >
              <div className="flex-shrink-0">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index 
                    ? 'border-blue-700 bg-blue-700' 
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
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <Headphones className="h-5 w-5 text-blue-600" />
          <p className="text-blue-800 text-sm font-medium">
            Read the transcript and select your answer. (Audio files will be added later)
          </p>
        </div>
      </div>

      {/* Play Limit Warning */}
      {playCount >= maxPlays && (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-amber-600" />
            <p className="text-amber-800 text-sm font-medium">
              You have reached the maximum number of plays. Please select your answer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}; 