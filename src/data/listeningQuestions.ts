import { Question } from '../types/test';

export const listeningQuestions: Question[] = [
  // İngilizce Listening Soruları
  {
    id: 1001,
    language: 'english',
    type: 'listening',
    level: 'A1',
    category: 'listening',
    question: 'What is the weather like today?',
    options: ['Sunny', 'Rainy', 'Cloudy', 'Snowy'],
    correctAnswer: 0,
    explanation: 'The audio mentions that it is a sunny day.',
    points: 1,
    audioUrl: '/audio/weather-a1.mp3',
    transcript: 'Today is a beautiful sunny day. The sky is blue and there are no clouds.',
    timeLimit: 30
  },
  {
    id: 1002,
    language: 'english',
    type: 'listening',
    level: 'A2',
    category: 'listening',
    question: 'Where does the person want to go?',
    options: ['To the library', 'To the restaurant', 'To the park', 'To the store'],
    correctAnswer: 1,
    explanation: 'The speaker mentions wanting to go to a restaurant for dinner.',
    points: 1,
    audioUrl: '/audio/restaurant-a2.mp3',
    transcript: 'I\'m hungry. Let\'s go to the restaurant for dinner. I heard they have great food.',
    timeLimit: 45
  },
  {
    id: 1003,
    language: 'english',
    type: 'listening',
    level: 'B1',
    category: 'listening',
    question: 'What is the main topic of the conversation?',
    options: ['Travel plans', 'Work schedule', 'Shopping list', 'Movie review'],
    correctAnswer: 0,
    explanation: 'The conversation is about planning a trip to Europe.',
    points: 1,
    audioUrl: '/audio/travel-b1.mp3',
    transcript: 'I\'m thinking about traveling to Europe next summer. Have you been there before? I heard the food is amazing and the cities are beautiful.',
    timeLimit: 60
  },
  {
    id: 1004,
    language: 'english',
    type: 'listening',
    level: 'B2',
    category: 'listening',
    question: 'What is the speaker\'s opinion about the new policy?',
    options: ['Strongly supports it', 'Has mixed feelings', 'Opposes it', 'Doesn\'t care'],
    correctAnswer: 1,
    explanation: 'The speaker mentions both positive and negative aspects of the policy.',
    points: 1,
    audioUrl: '/audio/policy-b2.mp3',
    transcript: 'The new policy has some good points, but I\'m concerned about how it will affect small businesses. We need to find a balance.',
    timeLimit: 75
  },

  // Fransızca Listening Soruları
  {
    id: 1101,
    language: 'french',
    type: 'listening',
    level: 'A1',
    category: 'listening',
    question: 'Quel est le nom de la personne?',
    options: ['Marie', 'Pierre', 'Sophie', 'Jean'],
    correctAnswer: 0,
    explanation: 'L\'audio mentionne que son nom est Marie.',
    points: 1,
    audioUrl: '/audio/name-fr-a1.mp3',
    transcript: 'Bonjour, je m\'appelle Marie. Je suis étudiante.',
    timeLimit: 30
  },
  {
    id: 1102,
    language: 'french',
    type: 'listening',
    level: 'A2',
    category: 'listening',
    question: 'Quelle heure est-il?',
    options: ['10h00', '11h00', '12h00', '13h00'],
    correctAnswer: 2,
    explanation: 'L\'audio indique qu\'il est midi.',
    points: 1,
    audioUrl: '/audio/time-fr-a2.mp3',
    transcript: 'Il est midi maintenant. C\'est l\'heure du déjeuner.',
    timeLimit: 45
  },

  // Almanca Listening Soruları
  {
    id: 1201,
    language: 'german',
    type: 'listening',
    level: 'A1',
    category: 'listening',
    question: 'Wie heißt die Person?',
    options: ['Anna', 'Hans', 'Lisa', 'Thomas'],
    correctAnswer: 2,
    explanation: 'Der Audio erwähnt, dass ihr Name Lisa ist.',
    points: 1,
    audioUrl: '/audio/name-de-a1.mp3',
    transcript: 'Hallo, ich heiße Lisa. Ich komme aus Deutschland.',
    timeLimit: 30
  },
  {
    id: 1202,
    language: 'german',
    type: 'listening',
    level: 'A2',
    category: 'listening',
    question: 'Wo wohnt die Person?',
    options: ['In Berlin', 'In München', 'In Hamburg', 'In Köln'],
    correctAnswer: 0,
    explanation: 'Der Audio erwähnt, dass sie in Berlin wohnt.',
    points: 1,
    audioUrl: '/audio/city-de-a2.mp3',
    transcript: 'Ich wohne in Berlin. Es ist eine schöne Stadt.',
    timeLimit: 45
  },

  // İtalyanca Listening Soruları
  {
    id: 1301,
    language: 'italian',
    type: 'listening',
    level: 'A1',
    category: 'listening',
    question: 'Come si chiama la persona?',
    options: ['Marco', 'Giulia', 'Luca', 'Sofia'],
    correctAnswer: 1,
    explanation: 'L\'audio menziona che il suo nome è Giulia.',
    points: 1,
    audioUrl: '/audio/name-it-a1.mp3',
    transcript: 'Ciao, mi chiamo Giulia. Sono italiana.',
    timeLimit: 30
  },
  {
    id: 1302,
    language: 'italian',
    type: 'listening',
    level: 'A2',
    category: 'listening',
    question: 'Dove abita la persona?',
    options: ['A Roma', 'A Milano', 'A Napoli', 'A Firenze'],
    correctAnswer: 0,
    explanation: 'L\'audio menziona che abita a Roma.',
    points: 1,
    audioUrl: '/audio/city-it-a2.mp3',
    transcript: 'Abito a Roma. È una città bellissima.',
    timeLimit: 45
  }
]; 