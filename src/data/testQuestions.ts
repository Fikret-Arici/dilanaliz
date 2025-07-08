import { Question } from '../types/test';

// Dilbilgisi Testi Soruları
export const grammarQuestions: Question[] = [
  {
    id: 1,
    language: 'english',
    type: 'multiple-choice',
    level: 'A1',
    category: 'grammar',
    question: 'Choose the correct form: "I _____ a student."',
    options: ['am', 'is', 'are', 'be'],
    correctAnswer: 0,
    explanation: 'With "I", we always use "am" in the present tense of the verb "to be".',
    points: 1
  },
  {
    id: 2,
    language: 'english',
    type: 'multiple-choice',
    level: 'A1',
    category: 'grammar',
    question: 'Complete: "She _____ to school every day."',
    options: ['go', 'goes', 'going', 'gone'],
    correctAnswer: 1,
    explanation: 'With third person singular (she/he/it), we add -s to the verb in present simple.',
    points: 1
  },
  {
    id: 3,
    language: 'english',
    type: 'multiple-choice',
    level: 'A2',
    category: 'grammar',
    question: 'Choose the correct past tense: "Yesterday, I _____ to the cinema."',
    options: ['go', 'went', 'going', 'gone'],
    correctAnswer: 1,
    explanation: '"Went" is the past tense of "go".',
    points: 2
  },
  {
    id: 4,
    language: 'english',
    type: 'multiple-choice',
    level: 'A2',
    category: 'grammar',
    question: 'Complete with the correct preposition: "I live _____ London."',
    options: ['in', 'on', 'at', 'by'],
    correctAnswer: 0,
    explanation: 'We use "in" with cities, countries, and large places.',
    points: 2
  },
  {
    id: 5,
    language: 'english',
    type: 'multiple-choice',
    level: 'B1',
    category: 'grammar',
    question: 'Choose the correct form: "If I _____ rich, I would travel the world."',
    options: ['am', 'was', 'were', 'will be'],
    correctAnswer: 2,
    explanation: 'In second conditional, we use "were" for all persons after "if".',
    points: 3
  },
  {
    id: 6,
    language: 'english',
    type: 'multiple-choice',
    level: 'B1',
    category: 'grammar',
    question: 'Select the correct form: "I have _____ this book three times."',
    options: ['read', 'readed', 'reading', 'reads'],
    correctAnswer: 0,
    explanation: '"Read" is the same in present and past participle forms.',
    points: 3
  },
  {
    id: 7,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'grammar',
    question: 'Choose the correct form: "I wish I _____ studied harder for the exam."',
    options: ['have', 'had', 'would have', 'could have'],
    correctAnswer: 1,
    explanation: 'For past regrets, we use "wish + past perfect" (had + past participle).',
    points: 4
  },
  {
    id: 8,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'grammar',
    question: 'Complete: "The movie _____ by millions of people."',
    options: ['has been watched', 'has watched', 'is watching', 'watches'],
    correctAnswer: 0,
    explanation: 'This is a present perfect passive construction.',
    points: 4
  },
  {
    id: 9,
    language: 'english',
    type: 'multiple-choice',
    level: 'C1',
    category: 'grammar',
    question: 'Choose the most appropriate form: "_____ the weather, we decided to proceed with the outdoor event."',
    options: ['Despite', 'Although', 'Notwithstanding', 'Regardless of'],
    correctAnswer: 2,
    explanation: '"Notwithstanding" is a more formal and sophisticated way to express "despite".',
    points: 5
  },
  {
    id: 10,
    language: 'english',
    type: 'multiple-choice',
    level: 'C1',
    category: 'grammar',
    question: 'Select the correct inversion: "_____ I known about the meeting, I would have attended."',
    options: ['Had', 'If', 'Should', 'Were'],
    correctAnswer: 0,
    explanation: 'This is an inverted conditional structure: "Had I known" = "If I had known".',
    points: 5
  }
];

// Kelime Bilgisi Testi Soruları
export const vocabularyQuestions: Question[] = [
  {
    id: 11,
    language: 'english',
    type: 'multiple-choice',
    level: 'A1',
    category: 'vocabulary',
    question: 'What do you use to write?',
    options: ['Pen', 'Cup', 'Book', 'Chair'],
    correctAnswer: 0,
    explanation: 'A pen is the most common writing instrument.',
    points: 1
  },
  {
    id: 12,
    language: 'english',
    type: 'multiple-choice',
    level: 'A1',
    category: 'vocabulary',
    question: 'What color is the sky on a sunny day?',
    options: ['Blue', 'Red', 'Green', 'Yellow'],
    correctAnswer: 0,
    explanation: 'The sky appears blue on clear, sunny days.',
    points: 1
  },
  {
    id: 13,
    language: 'english',
    type: 'multiple-choice',
    level: 'A2',
    category: 'vocabulary',
    question: 'What\'s the opposite of "expensive"?',
    options: ['cheap', 'costly', 'valuable', 'precious'],
    correctAnswer: 0,
    explanation: '"Cheap" is the direct opposite of "expensive".',
    points: 2
  },
  {
    id: 14,
    language: 'english',
    type: 'multiple-choice',
    level: 'A2',
    category: 'vocabulary',
    question: 'What do you call a person who teaches?',
    options: ['Student', 'Teacher', 'Doctor', 'Engineer'],
    correctAnswer: 1,
    explanation: 'A teacher is someone who educates others.',
    points: 2
  },
  {
    id: 15,
    language: 'english',
    type: 'multiple-choice',
    level: 'B1',
    category: 'vocabulary',
    question: 'What does "procrastinate" mean?',
    options: ['To hurry up', 'To delay doing something', 'To finish quickly', 'To start immediately'],
    correctAnswer: 1,
    explanation: 'Procrastinate means to delay or postpone doing something.',
    points: 3
  },
  {
    id: 16,
    language: 'english',
    type: 'multiple-choice',
    level: 'B1',
    category: 'vocabulary',
    question: 'What is a "deadline"?',
    options: ['A type of computer', 'A final date for completion', 'A meeting time', 'A lunch break'],
    correctAnswer: 1,
    explanation: 'A deadline is the latest time or date by which something should be completed.',
    points: 3
  },
  {
    id: 17,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'vocabulary',
    question: 'Which word best completes: "The evidence was _____ and could not be disputed."',
    options: ['ambiguous', 'irrefutable', 'questionable', 'dubious'],
    correctAnswer: 1,
    explanation: '"Irrefutable" means impossible to deny or disprove, fitting the context.',
    points: 4
  },
  {
    id: 18,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'vocabulary',
    question: 'What does "resilient" mean?',
    options: ['Weak and fragile', 'Able to recover quickly', 'Always happy', 'Very intelligent'],
    correctAnswer: 1,
    explanation: 'Resilient means able to withstand or recover quickly from difficult conditions.',
    points: 4
  },
  {
    id: 19,
    language: 'english',
    type: 'multiple-choice',
    level: 'C1',
    category: 'vocabulary',
    question: 'What does "ubiquitous" mean?',
    options: ['Rare and valuable', 'Present everywhere', 'Difficult to understand', 'Extremely large'],
    correctAnswer: 1,
    explanation: '"Ubiquitous" means present, appearing, or found everywhere.',
    points: 5
  },
  {
    id: 20,
    language: 'english',
    type: 'multiple-choice',
    level: 'C1',
    category: 'vocabulary',
    question: 'What does "perspicacious" mean?',
    options: ['Stubborn and inflexible', 'Having keen insight and understanding', 'Prone to making mistakes', 'Overly cautious'],
    correctAnswer: 1,
    explanation: '"Perspicacious" means having a ready insight into and understanding of things.',
    points: 5
  }
];

// Kapsamlı Test Soruları (Dilbilgisi + Kelime + Okuma)
export const comprehensiveQuestions: Question[] = [
  // Dilbilgisi soruları (ID'leri 100+ yapıyoruz)
  ...grammarQuestions.map(q => ({ ...q, id: q.id + 100 })),
  // Kelime soruları (ID'leri 200+ yapıyoruz)
  ...vocabularyQuestions.map(q => ({ ...q, id: q.id + 200 })),
  // Okuma anlama soruları
  {
    id: 301,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B1',
    category: 'reading',
    question: 'Read: "The company announced significant changes to its policy. Employees will now have more flexible working hours." What is the main change?',
    options: ['Salary increase', 'Flexible working hours', 'New office location', 'Reduced working days'],
    correctAnswer: 1,
    explanation: 'The text clearly states that employees will have more flexible working hours.',
    points: 3
  },
  {
    id: 302,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B1',
    category: 'reading',
    question: 'Read: "Climate change is affecting weather patterns worldwide. Scientists predict more extreme weather events in the coming decades." What is the main concern?',
    options: ['Economic problems', 'Extreme weather events', 'Population growth', 'Technology development'],
    correctAnswer: 1,
    explanation: 'The text mentions that scientists predict more extreme weather events.',
    points: 3
  },
  {
    id: 303,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B2',
    category: 'reading',
    question: 'Read: "Despite the economic downturn, the tech sector has shown remarkable resilience, with many companies reporting steady growth." What can be inferred?',
    options: ['All sectors are struggling', 'Tech companies are immune to economic problems', 'The tech sector is performing better than expected', 'Economic problems don\'t affect technology'],
    correctAnswer: 2,
    explanation: 'The text suggests the tech sector is doing well despite general economic difficulties.',
    points: 4
  },
  {
    id: 304,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B2',
    category: 'reading',
    question: 'Read: "The novel explores themes of identity and belonging through the protagonist\'s journey across three continents." What is the main focus of the novel?',
    options: ['Travel adventures', 'Identity and belonging', 'Historical events', 'Romance'],
    correctAnswer: 1,
    explanation: 'The text explicitly states that the novel explores themes of identity and belonging.',
    points: 4
  },
  {
    id: 305,
    language: 'english',
    type: 'reading-comprehension',
    level: 'C1',
    category: 'reading',
    question: 'Read: "The paradigm shift in educational methodology necessitates a comprehensive reevaluation of pedagogical approaches." This sentence suggests:',
    options: ['Education is becoming more expensive', 'Teaching methods need to be completely reconsidered', 'Students are not learning effectively', 'Technology is replacing teachers'],
    correctAnswer: 1,
    explanation: 'The sentence indicates that changes in educational thinking require a thorough review of teaching methods.',
    points: 5
  }
];

// Hızlı Test Soruları (Kısa ve temel)
export const quickQuestions: Question[] = [
  {
    id: 31,
    language: 'english',
    type: 'multiple-choice',
    level: 'A1',
    category: 'grammar',
    question: 'Choose the correct form: "I _____ a student."',
    options: ['am', 'is', 'are', 'be'],
    correctAnswer: 0,
    explanation: 'With "I", we always use "am" in the present tense.',
    points: 1
  },
  {
    id: 32,
    language: 'english',
    type: 'multiple-choice',
    level: 'A1',
    category: 'vocabulary',
    question: 'What do you use to write?',
    options: ['Pen', 'Cup', 'Book', 'Chair'],
    correctAnswer: 0,
    explanation: 'A pen is used for writing.',
    points: 1
  },
  {
    id: 33,
    language: 'english',
    type: 'multiple-choice',
    level: 'A2',
    category: 'grammar',
    question: 'Complete: "She _____ to school every day."',
    options: ['go', 'goes', 'going', 'gone'],
    correctAnswer: 1,
    explanation: 'With third person singular, we add -s to the verb.',
    points: 2
  },
  {
    id: 34,
    language: 'english',
    type: 'multiple-choice',
    level: 'A2',
    category: 'vocabulary',
    question: 'What\'s the opposite of "expensive"?',
    options: ['cheap', 'costly', 'valuable', 'precious'],
    correctAnswer: 0,
    explanation: '"Cheap" is the opposite of "expensive".',
    points: 2
  },
  {
    id: 35,
    language: 'english',
    type: 'multiple-choice',
    level: 'B1',
    category: 'grammar',
    question: 'Choose the correct form: "If I _____ rich, I would travel."',
    options: ['am', 'was', 'were', 'will be'],
    correctAnswer: 2,
    explanation: 'In second conditional, we use "were" after "if".',
    points: 3
  },
  {
    id: 36,
    language: 'english',
    type: 'multiple-choice',
    level: 'B1',
    category: 'vocabulary',
    question: 'What does "procrastinate" mean?',
    options: ['To hurry up', 'To delay doing something', 'To finish quickly', 'To start immediately'],
    correctAnswer: 1,
    explanation: 'Procrastinate means to delay doing something.',
    points: 3
  },
  {
    id: 37,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B1',
    category: 'reading',
    question: 'Read: "The company announced flexible working hours." What changed?',
    options: ['Salary', 'Working hours', 'Office location', 'Job title'],
    correctAnswer: 1,
    explanation: 'The text mentions flexible working hours.',
    points: 3
  },
  {
    id: 38,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'grammar',
    question: 'Complete: "I wish I _____ studied harder."',
    options: ['have', 'had', 'would have', 'could have'],
    correctAnswer: 1,
    explanation: 'For past regrets, we use "wish + past perfect".',
    points: 4
  },
  {
    id: 39,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'vocabulary',
    question: 'What does "resilient" mean?',
    options: ['Weak', 'Able to recover quickly', 'Always happy', 'Very intelligent'],
    correctAnswer: 1,
    explanation: 'Resilient means able to recover quickly from difficulties.',
    points: 4
  },
  {
    id: 40,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B2',
    category: 'reading',
    question: 'Read: "The tech sector showed resilience despite economic problems." What can be inferred?',
    options: ['All sectors struggled', 'Tech sector did well', 'Economy improved', 'Technology failed'],
    correctAnswer: 1,
    explanation: 'The text suggests the tech sector performed well despite economic difficulties.',
    points: 4
  }
];

// Test türlerine göre soru getirme fonksiyonları
export const getQuestionsByTestType = (testType: string): Question[] => {
  switch (testType) {
    case 'grammar':
      return grammarQuestions;
    case 'vocabulary':
      return vocabularyQuestions;
    case 'comprehensive':
      return comprehensiveQuestions;
    case 'quick':
      return quickQuestions;
    default:
      return quickQuestions;
  }
};

export const getTestInfo = (testType: string) => {
  const testInfos = {
    grammar: {
      title: 'Dilbilgisi Testi',
      duration: 15 * 60, // 15 dakika
      questionCount: grammarQuestions.length
    },
    vocabulary: {
      title: 'Kelime Bilgisi Testi',
      duration: 10 * 60, // 10 dakika
      questionCount: vocabularyQuestions.length
    },
    comprehensive: {
      title: 'Kapsamlı Test',
      duration: 25 * 60, // 25 dakika
      questionCount: comprehensiveQuestions.length
    },
    quick: {
      title: 'Hızlı Test',
      duration: 5 * 60, // 5 dakika
      questionCount: quickQuestions.length
    }
  };
  
  return testInfos[testType as keyof typeof testInfos] || testInfos.quick;
}; 