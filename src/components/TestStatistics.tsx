import React from 'react';
import { BarChart3, TrendingUp, Clock, Target, Award } from 'lucide-react';
import { Question, UserAnswer } from '../types/test';

interface TestStatisticsProps {
  questions: Question[];
  userAnswers: UserAnswer[];
  timeSpent: number;
  totalTime: number;
}

export const TestStatistics: React.FC<TestStatisticsProps> = ({
  questions,
  userAnswers,
  timeSpent,
  totalTime
}) => {
  const calculateStats = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = userAnswers.length;
    const correctAnswers = userAnswers.filter(ua => {
      const question = questions.find(q => q.id === ua.questionId);
      return question && ua.answer === question.correctAnswer;
    }).length;

    const accuracy = answeredQuestions > 0 ? (correctAnswers / answeredQuestions) * 100 : 0;
    const completionRate = (answeredQuestions / totalQuestions) * 100;
    const timeEfficiency = totalTime > 0 ? (timeSpent / totalTime) * 100 : 0;

    // Category breakdown
    const categoryStats = questions.reduce((acc, question) => {
      const userAnswer = userAnswers.find(ua => ua.questionId === question.id);
      const isCorrect = userAnswer && userAnswer.answer === question.correctAnswer;
      
      if (!acc[question.category]) {
        acc[question.category] = { total: 0, correct: 0 };
      }
      
      acc[question.category].total++;
      if (isCorrect) acc[question.category].correct++;
      
      return acc;
    }, {} as Record<string, { total: number; correct: number }>);

    return {
      totalQuestions,
      answeredQuestions,
      correctAnswers,
      accuracy,
      completionRate,
      timeEfficiency,
      categoryStats
    };
  };

  const stats = calculateStats();

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 90) return 'text-green-600';
    if (accuracy >= 70) return 'text-yellow-600';
    if (accuracy >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  const getCompletionColor = (completion: number) => {
    if (completion >= 90) return 'text-green-600';
    if (completion >= 70) return 'text-yellow-600';
    if (completion >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
        Test Statistics
      </h3>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{stats.answeredQuestions}</div>
          <div className="text-sm text-gray-600">Answered</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className={`text-2xl font-bold ${getAccuracyColor(stats.accuracy)}`}>
            {Math.round(stats.accuracy)}%
          </div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>

        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className={`text-2xl font-bold ${getCompletionColor(stats.completionRate)}`}>
            {Math.round(stats.completionRate)}%
          </div>
          <div className="text-sm text-gray-600">Completion</div>
        </div>

        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">
            {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600">Time Used</div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Category Performance</h4>
        {Object.entries(stats.categoryStats).map(([category, data]) => {
          const percentage = data.total > 0 ? (data.correct / data.total) * 100 : 0;
          return (
            <div key={category} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize font-medium text-gray-700">{category}</span>
                <span className="text-sm text-gray-600">
                  {data.correct}/{data.total} ({Math.round(percentage)}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 