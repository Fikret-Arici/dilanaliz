import { Question, TestResult, UserAnswer } from '../types/test';

export const analyzeTestResults = (
  questions: Question[],
  userAnswers: UserAnswer[]
): TestResult => {
  let totalScore = 0;
  let maxScore = 0;
  const categoryScores = {
    grammar: 0,
    vocabulary: 0,
    reading: 0,
    listening: 0
  };
  const categoryMaxScores = {
    grammar: 0,
    vocabulary: 0,
    reading: 0,
    listening: 0
  };

  // Calculate scores
  questions.forEach((question) => {
    const userAnswer = userAnswers.find(ua => ua.questionId === question.id);
    maxScore += question.points;
    categoryMaxScores[question.category] += question.points;

    if (userAnswer && userAnswer.answer === question.correctAnswer) {
      totalScore += question.points;
      categoryScores[question.category] += question.points;
    }
  });

  const percentage = (totalScore / maxScore) * 100;
  
  // Determine level based on score with more nuanced logic
  let level = 'A1';
  if (percentage >= 95) level = 'C2';
  else if (percentage >= 85) level = 'C1';
  else if (percentage >= 75) level = 'B2';
  else if (percentage >= 65) level = 'B1';
  else if (percentage >= 55) level = 'A2';
  else if (percentage >= 45) level = 'A1';

  // Analyze strengths and weaknesses with better thresholds
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  Object.entries(categoryScores).forEach(([category, score]) => {
    const maxCategoryScore = categoryMaxScores[category as keyof typeof categoryMaxScores];
    if (maxCategoryScore > 0) {
      const categoryPercentage = (score / maxCategoryScore) * 100;
      if (categoryPercentage >= 80) {
        strengths.push(category.charAt(0).toUpperCase() + category.slice(1));
      } else if (categoryPercentage < 60) {
        weaknesses.push(category.charAt(0).toUpperCase() + category.slice(1));
      }
    }
  });

  // Generate more detailed recommendations
  const recommendations: string[] = [];
  
  // Level-specific recommendations
  if (level === 'A1') {
    recommendations.push('Start with basic English courses focusing on essential vocabulary and simple grammar structures');
    recommendations.push('Practice daily with beginner-friendly apps like Duolingo or Memrise');
    recommendations.push('Watch English videos with subtitles and listen to simple English podcasts');
  } else if (level === 'A2') {
    recommendations.push('Focus on building vocabulary and mastering present and past tenses');
    recommendations.push('Start reading simple English books and news articles');
    recommendations.push('Practice speaking with language exchange partners or tutors');
  } else if (level === 'B1') {
    recommendations.push('Work on intermediate grammar topics like conditionals and reported speech');
    recommendations.push('Read English literature and practice writing short essays');
    recommendations.push('Take conversation classes to improve fluency and confidence');
  } else if (level === 'B2') {
    recommendations.push('Focus on advanced grammar and academic vocabulary');
    recommendations.push('Read complex texts and practice academic writing');
    recommendations.push('Consider taking IELTS or TOEFL preparation courses');
  } else if (level === 'C1') {
    recommendations.push('Refine your understanding of nuanced grammar and idiomatic expressions');
    recommendations.push('Read academic papers and professional literature');
    recommendations.push('Practice public speaking and formal presentations');
  } else if (level === 'C2') {
    recommendations.push('Maintain your high level through regular practice with native speakers');
    recommendations.push('Read challenging literature and academic texts');
    recommendations.push('Consider teaching English or pursuing advanced language certifications');
  }

  // Category-specific recommendations
  if (weaknesses.includes('Grammar')) {
    recommendations.push('Focus on grammar exercises and sentence structure practice');
    recommendations.push('Use grammar workbooks and online resources like Grammarly');
  }
  if (weaknesses.includes('Vocabulary')) {
    recommendations.push('Expand your vocabulary through reading and word learning apps');
    recommendations.push('Create flashcards and practice with spaced repetition techniques');
  }
  if (weaknesses.includes('Reading')) {
    recommendations.push('Practice reading comprehension with various text types and genres');
    recommendations.push('Read English newspapers, magazines, and books regularly');
  }
  if (weaknesses.includes('Listening')) {
    recommendations.push('Listen to English podcasts, audiobooks, and watch English media');
    recommendations.push('Practice with listening comprehension exercises and dictation');
  }

  // Performance-based recommendations
  if (percentage < 50) {
    recommendations.push('Consider taking a structured English course to build a strong foundation');
  } else if (percentage >= 80) {
    recommendations.push('Challenge yourself with more advanced materials and native content');
  }

  // Remove duplicates and limit recommendations
  const uniqueRecommendations = [...new Set(recommendations)].slice(0, 5);

  return {
    totalScore,
    maxScore,
    percentage,
    level,
    strengths,
    weaknesses,
    recommendations: uniqueRecommendations,
    categoryScores
  };
};

export const getLevelDescription = (level: string): string => {
  const descriptions = {
    'A1': 'Beginner - Can understand and use familiar everyday expressions and basic phrases. Can introduce themselves and ask simple questions.',
    'A2': 'Elementary - Can communicate in simple tasks requiring direct exchange of information. Can describe family, shopping, and immediate environment.',
    'B1': 'Intermediate - Can deal with most situations likely to arise while traveling in English-speaking areas. Can describe experiences and give reasons.',
    'B2': 'Upper-Intermediate - Can understand complex texts and interact with native speakers fluently. Can express ideas clearly on various topics.',
    'C1': 'Advanced - Can use English flexibly and effectively for social, academic and professional purposes. Can understand implicit meaning.',
    'C2': 'Proficient - Can understand virtually everything heard or read with ease and express themselves spontaneously, very fluently and precisely.'
  };
  return descriptions[level as keyof typeof descriptions] || '';
};

export const getLevelColor = (level: string): string => {
  const colors = {
    'A1': 'text-green-600 bg-green-100',
    'A2': 'text-blue-600 bg-blue-100',
    'B1': 'text-yellow-600 bg-yellow-100',
    'B2': 'text-orange-600 bg-orange-100',
    'C1': 'text-red-600 bg-red-100',
    'C2': 'text-purple-600 bg-purple-100'
  };
  return colors[level as keyof typeof colors] || 'text-gray-600 bg-gray-100';
};

export const getPerformanceEmoji = (percentage: number): string => {
  if (percentage >= 95) return "🏆";
  if (percentage >= 85) return "🎉";
  if (percentage >= 75) return "👍";
  if (percentage >= 65) return "💪";
  if (percentage >= 55) return "📚";
  if (percentage >= 45) return "🌱";
  return "🌱";
};