import { Question } from '../types/test';

export const readingQuestions: Question[] = [
  // İngilizce Reading Soruları
  {
    id: 2001,
    language: 'english',
    type: 'reading-comprehension',
    level: 'A1',
    category: 'reading',
    question: 'What is the main topic of this text?',
    options: ['Animals', 'Food', 'Colors', 'Numbers'],
    correctAnswer: 0,
    explanation: 'The text is about different animals and their characteristics.',
    points: 1,
    readingPassage: `Animals are living creatures. Dogs are friendly animals. Cats like to sleep. Birds can fly in the sky. Fish live in water.`,
    timeLimit: 60
  },
  {
    id: 2002,
    language: 'english',
    type: 'reading-comprehension',
    level: 'A2',
    category: 'reading',
    question: 'What does Sarah like to do on weekends?',
    options: ['Watch TV', 'Go shopping', 'Read books', 'Play sports'],
    correctAnswer: 2,
    explanation: 'The text mentions that Sarah loves reading books on weekends.',
    points: 1,
    readingPassage: `Sarah is a student. She is 15 years old. On weekends, she likes to stay at home and read books. Her favorite books are about adventure and mystery.`,
    timeLimit: 90
  },
  {
    id: 2003,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B1',
    category: 'reading',
    question: 'What is the author\'s main argument about technology?',
    options: ['Technology is always good', 'Technology has both benefits and drawbacks', 'Technology should be avoided', 'Technology is too expensive'],
    correctAnswer: 1,
    explanation: 'The author discusses both positive and negative aspects of technology.',
    points: 1,
    readingPassage: `Technology has changed our lives in many ways. On one hand, it makes communication easier and provides access to information. On the other hand, it can be distracting and reduce face-to-face interaction. We need to find a balance in how we use technology.`,
    timeLimit: 120
  },
  {
    id: 2004,
    language: 'english',
    type: 'reading-comprehension',
    level: 'B2',
    category: 'reading',
    question: 'What can be inferred about climate change from this passage?',
    options: ['It\'s not a real problem', 'It requires immediate action', 'It only affects certain countries', 'It\'s too late to do anything'],
    correctAnswer: 1,
    explanation: 'The passage emphasizes the urgency and need for immediate action.',
    points: 1,
    readingPassage: `Climate change is one of the most pressing issues of our time. Scientific evidence shows that global temperatures are rising at an unprecedented rate. If we don't take immediate action to reduce greenhouse gas emissions, we will face severe consequences including extreme weather events, rising sea levels, and loss of biodiversity.`,
    timeLimit: 150
  },

  // Fransızca Reading Soruları
  {
    id: 2101,
    language: 'french',
    type: 'reading-comprehension',
    level: 'A1',
    category: 'reading',
    question: 'Quel est le sujet principal de ce texte?',
    options: ['Les animaux', 'La nourriture', 'Les couleurs', 'Les nombres'],
    correctAnswer: 0,
    explanation: 'Le texte parle des animaux et de leurs caractéristiques.',
    points: 1,
    readingPassage: `Les animaux sont des créatures vivantes. Les chiens sont des animaux amicaux. Les chats aiment dormir. Les oiseaux peuvent voler dans le ciel. Les poissons vivent dans l'eau.`,
    timeLimit: 60
  },
  {
    id: 2102,
    language: 'french',
    type: 'reading-comprehension',
    level: 'A2',
    category: 'reading',
    question: 'Que fait Marie le weekend?',
    options: ['Regarder la télé', 'Faire du shopping', 'Lire des livres', 'Faire du sport'],
    correctAnswer: 2,
    explanation: 'Le texte mentionne que Marie aime lire des livres le weekend.',
    points: 1,
    readingPassage: `Marie est étudiante. Elle a 15 ans. Le weekend, elle aime rester à la maison et lire des livres. Ses livres préférés sont sur l'aventure et le mystère.`,
    timeLimit: 90
  },

  // Almanca Reading Soruları
  {
    id: 2201,
    language: 'german',
    type: 'reading-comprehension',
    level: 'A1',
    category: 'reading',
    question: 'Was ist das Hauptthema dieses Textes?',
    options: ['Tiere', 'Essen', 'Farben', 'Zahlen'],
    correctAnswer: 0,
    explanation: 'Der Text handelt von Tieren und ihren Eigenschaften.',
    points: 1,
    readingPassage: `Tiere sind lebende Geschöpfe. Hunde sind freundliche Tiere. Katzen schlafen gerne. Vögel können im Himmel fliegen. Fische leben im Wasser.`,
    timeLimit: 60
  },
  {
    id: 2202,
    language: 'german',
    type: 'reading-comprehension',
    level: 'A2',
    category: 'reading',
    question: 'Was macht Lisa am Wochenende?',
    options: ['Fernsehen', 'Einkaufen', 'Bücher lesen', 'Sport treiben'],
    correctAnswer: 2,
    explanation: 'Der Text erwähnt, dass Lisa am Wochenende gerne Bücher liest.',
    points: 1,
    readingPassage: `Lisa ist Studentin. Sie ist 15 Jahre alt. Am Wochenende bleibt sie gerne zu Hause und liest Bücher. Ihre Lieblingsbücher sind über Abenteuer und Krimis.`,
    timeLimit: 90
  },

  // İtalyanca Reading Soruları
  {
    id: 2301,
    language: 'italian',
    type: 'reading-comprehension',
    level: 'A1',
    category: 'reading',
    question: 'Qual è l\'argomento principale di questo testo?',
    options: ['Animali', 'Cibo', 'Colori', 'Numeri'],
    correctAnswer: 0,
    explanation: 'Il testo parla degli animali e delle loro caratteristiche.',
    points: 1,
    readingPassage: `Gli animali sono creature viventi. I cani sono animali amichevoli. I gatti amano dormire. Gli uccelli possono volare nel cielo. I pesci vivono nell'acqua.`,
    timeLimit: 60
  },
  {
    id: 2302,
    language: 'italian',
    type: 'reading-comprehension',
    level: 'A2',
    category: 'reading',
    question: 'Cosa fa Sofia nel weekend?',
    options: ['Guardare la TV', 'Fare shopping', 'Leggere libri', 'Fare sport'],
    correctAnswer: 2,
    explanation: 'Il testo menziona che Sofia ama leggere libri nel weekend.',
    points: 1,
    readingPassage: `Sofia è una studentessa. Ha 15 anni. Nel weekend, ama stare a casa e leggere libri. I suoi libri preferiti sono sull'avventura e il mistero.`,
    timeLimit: 90
  }
]; 