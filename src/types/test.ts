export type Language = 'english' | 'french' | 'german' | 'italian';

export interface Question {
  id: number;
  language: Language;
  type: 'multiple-choice' | 'fill-blank' | 'reading-comprehension' | 'listening';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  points: number;
  // Yeni alanlar
  audioUrl?: string; // Listening soruları için ses dosyası
  readingPassage?: string; // Reading soruları için uzun metin
  transcript?: string; // Listening soruları için transkript
  imageUrl?: string; // Görsel destekli sorular için
  difficulty?: 'easy' | 'medium' | 'hard'; // Soru zorluğu
  timeLimit?: number; // Soru başına süre sınırı (saniye)
}

export interface TestResult {
  language: Language;
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  categoryScores: {
    grammar: number;
    vocabulary: number;
    reading: number;
    listening: number;
  };
}

export interface UserAnswer {
  questionId: number;
  answer: string | number;
  timeSpent: number;
}

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
}