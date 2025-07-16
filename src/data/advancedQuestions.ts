import { Question } from '../types/test';

export const advancedQuestions: Question[] = [
  // İngilizce - Daha Zorlu Sorular
  {
    id: 4001,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'grammar',
    question: 'The research findings ___ that climate change is accelerating at an unprecedented rate.',
    options: ['indicate', 'indicates', 'indicating', 'indicated'],
    correctAnswer: 0,
    explanation: 'Plural subject "findings" requires plural verb "indicate"',
    points: 2
  },
  {
    id: 4002,
    language: 'english',
    type: 'multiple-choice',
    level: 'B2',
    category: 'vocabulary',
    question: 'The company\'s ___ approach to innovation has led to significant breakthroughs in technology.',
    options: ['pioneering', 'traditional', 'conservative', 'reluctant'],
    correctAnswer: 0,
    explanation: 'Pioneering means leading the way in new developments',
    points: 2
  },
  {
    id: 4003,
    language: 'english',
    type: 'multiple-choice',
    level: 'C1',
    category: 'grammar',
    question: 'Had the government ___ earlier, the crisis could have been averted.',
    options: ['acted', 'acting', 'to act', 'acts'],
    correctAnswer: 0,
    explanation: 'Past perfect subjunctive in conditional sentence',
    points: 3
  },
  {
    id: 4004,
    language: 'english',
    type: 'multiple-choice',
    level: 'C1',
    category: 'vocabulary',
    question: 'The professor\'s argument was ___ by numerous studies and empirical evidence.',
    options: ['substantiated', 'contradicted', 'questioned', 'ignored'],
    correctAnswer: 0,
    explanation: 'Substantiated means supported with evidence',
    points: 3
  },
  {
    id: 4005,
    language: 'english',
    type: 'reading-comprehension',
    level: 'C1',
    category: 'reading',
    question: 'What is the author\'s stance on artificial intelligence?',
    options: ['Completely supportive', 'Cautiously optimistic', 'Strongly opposed', 'Indifferent'],
    correctAnswer: 1,
    explanation: 'The author acknowledges both benefits and risks',
    points: 3,
    readingPassage: 'Artificial intelligence represents both an unprecedented opportunity and a significant challenge for humanity. While AI has the potential to revolutionize healthcare, education, and scientific research, it also raises profound ethical questions about privacy, employment, and human autonomy. The key lies in developing robust regulatory frameworks that maximize benefits while minimizing risks. Recent developments in machine learning have demonstrated remarkable capabilities, but they also highlight the importance of human oversight and ethical considerations in AI development.'
  },
  {
    id: 4006,
    language: 'english',
    type: 'multiple-choice',
    level: 'C2',
    category: 'grammar',
    question: 'The complexity of the situation ___ that a multifaceted approach be adopted.',
    options: ['necessitates', 'necessitate', 'necessitating', 'necessitated'],
    correctAnswer: 0,
    explanation: 'Subjunctive mood with "that" clause',
    points: 4
  },
  {
    id: 4007,
    language: 'english',
    type: 'multiple-choice',
    level: 'C2',
    category: 'vocabulary',
    question: 'The diplomat\'s ___ remarks were interpreted as a veiled threat by the international community.',
    options: ['equivocal', 'explicit', 'candid', 'transparent'],
    correctAnswer: 0,
    explanation: 'Equivocal means deliberately ambiguous or unclear',
    points: 4
  },
  {
    id: 4008,
    language: 'english',
    type: 'reading-comprehension',
    level: 'C2',
    category: 'reading',
    question: 'What can be inferred about the author\'s view of globalization?',
    options: ['It is inherently beneficial', 'It requires careful management', 'It should be reversed', 'It is irrelevant'],
    correctAnswer: 1,
    explanation: 'The author presents a nuanced view acknowledging both benefits and challenges',
    points: 4,
    readingPassage: 'Globalization, while fostering unprecedented economic integration and cultural exchange, has also exacerbated income inequality and environmental degradation in many regions. The phenomenon has created both winners and losers, with developed nations often benefiting disproportionately while developing countries face complex challenges. The solution lies not in rejecting globalization outright, but in implementing policies that ensure more equitable distribution of its benefits while addressing its negative externalities. International cooperation and thoughtful regulation are essential to harnessing globalization\'s potential while mitigating its adverse effects.'
  },

  // Fransızca - Daha Zorlu Sorular
  {
    id: 4101,
    language: 'french',
    type: 'multiple-choice',
    level: 'B2',
    category: 'grammar',
    question: 'Les résultats de l\'étude ___ que le changement climatique s\'accélère.',
    options: ['indiquent', 'indique', 'indiquant', 'indiqué'],
    correctAnswer: 0,
    explanation: 'Pluriel "résultats" nécessite le verbe au pluriel',
    points: 2
  },
  {
    id: 4102,
    language: 'french',
    type: 'multiple-choice',
    level: 'B2',
    category: 'vocabulary',
    question: 'L\'approche ___ de l\'entreprise a mené à des innovations importantes.',
    options: ['novatrice', 'traditionnelle', 'conservatrice', 'réticente'],
    correctAnswer: 0,
    explanation: 'Novatrice signifie qui innove, qui crée de nouvelles méthodes',
    points: 2
  },
  {
    id: 4103,
    language: 'french',
    type: 'multiple-choice',
    level: 'C1',
    category: 'grammar',
    question: 'Si le gouvernement ___ plus tôt, la crise aurait pu être évitée.',
    options: ['avait agi', 'agissait', 'agirait', 'agisse'],
    correctAnswer: 0,
    explanation: 'Plus-que-parfait dans une phrase conditionnelle',
    points: 3
  },
  {
    id: 4104,
    language: 'french',
    type: 'reading-comprehension',
    level: 'C1',
    category: 'reading',
    question: 'Quelle est la position de l\'auteur sur l\'intelligence artificielle?',
    options: ['Totalement favorable', 'Optimiste avec prudence', 'Fortement opposé', 'Indifférent'],
    correctAnswer: 1,
    explanation: 'L\'auteur reconnaît à la fois les avantages et les risques',
    points: 3,
    readingPassage: 'L\'intelligence artificielle représente à la fois une opportunité sans précédent et un défi majeur pour l\'humanité. Bien que l\'IA ait le potentiel de révolutionner la santé, l\'éducation et la recherche scientifique, elle soulève également des questions éthiques profondes concernant la vie privée, l\'emploi et l\'autonomie humaine. La clé réside dans le développement de cadres réglementaires robustes qui maximisent les avantages tout en minimisant les risques. Les développements récents en apprentissage automatique ont démontré des capacités remarquables, mais ils soulignent également l\'importance de la supervision humaine et des considérations éthiques dans le développement de l\'IA.'
  },

  // Almanca - Daha Zorlu Sorular
  {
    id: 4201,
    language: 'german',
    type: 'multiple-choice',
    level: 'B2',
    category: 'grammar',
    question: 'Die Forschungsergebnisse ___ , dass der Klimawandel sich beschleunigt.',
    options: ['zeigen', 'zeigt', 'zeigend', 'gezeigt'],
    correctAnswer: 0,
    explanation: 'Plural "Ergebnisse" erfordert Verb im Plural',
    points: 2
  },
  {
    id: 4202,
    language: 'german',
    type: 'multiple-choice',
    level: 'B2',
    category: 'vocabulary',
    question: 'Der ___ Ansatz des Unternehmens führte zu wichtigen Innovationen.',
    options: ['bahnbrechende', 'traditionelle', 'konservative', 'zögerliche'],
    correctAnswer: 0,
    explanation: 'Bahnbrechend bedeutet wegweisend, innovativ',
    points: 2
  },
  {
    id: 4203,
    language: 'german',
    type: 'multiple-choice',
    level: 'C1',
    category: 'grammar',
    question: 'Hätte die Regierung früher ___ , hätte die Krise verhindert werden können.',
    options: ['gehandelt', 'handelte', 'handeln würde', 'handele'],
    correctAnswer: 0,
    explanation: 'Konjunktiv II Plusquamperfekt in Konditionalsatz',
    points: 3
  },
  {
    id: 4204,
    language: 'german',
    type: 'reading-comprehension',
    level: 'C1',
    category: 'reading',
    question: 'Was ist die Haltung des Autors zur künstlichen Intelligenz?',
    options: ['Vollständig unterstützend', 'Vorsichtig optimistisch', 'Stark ablehnend', 'Gleichgültig'],
    correctAnswer: 1,
    explanation: 'Der Autor erkennt sowohl Vorteile als auch Risiken an',
    points: 3,
    readingPassage: 'Künstliche Intelligenz stellt sowohl eine beispiellose Chance als auch eine bedeutende Herausforderung für die Menschheit dar. Während KI das Potenzial hat, Gesundheitswesen, Bildung und wissenschaftliche Forschung zu revolutionieren, wirft sie auch tiefgreifende ethische Fragen zu Privatsphäre, Beschäftigung und menschlicher Autonomie auf. Der Schlüssel liegt in der Entwicklung robuster regulatorischer Rahmenbedingungen, die Vorteile maximieren und Risiken minimieren. Jüngste Entwicklungen im maschinellen Lernen haben bemerkenswerte Fähigkeiten demonstriert, aber sie unterstreichen auch die Bedeutung menschlicher Aufsicht und ethischer Überlegungen bei der KI-Entwicklung.'
  },

  // İtalyanca - Daha Zorlu Sorular
  {
    id: 4301,
    language: 'italian',
    type: 'multiple-choice',
    level: 'B2',
    category: 'grammar',
    question: 'I risultati della ricerca ___ che il cambiamento climatico si sta accelerando.',
    options: ['indicano', 'indica', 'indicando', 'indicato'],
    correctAnswer: 0,
    explanation: 'Plurale "risultati" richiede verbo al plurale',
    points: 2
  },
  {
    id: 4302,
    language: 'italian',
    type: 'multiple-choice',
    level: 'B2',
    category: 'vocabulary',
    question: 'L\'approccio ___ dell\'azienda ha portato a importanti innovazioni.',
    options: ['pionieristico', 'tradizionale', 'conservatore', 'riluttante'],
    correctAnswer: 0,
    explanation: 'Pionieristico significa che apre nuove strade, innovativo',
    points: 2
  },
  {
    id: 4303,
    language: 'italian',
    type: 'multiple-choice',
    level: 'C1',
    category: 'grammar',
    question: 'Se il governo ___ prima, la crisi avrebbe potuto essere evitata.',
    options: ['avesse agito', 'agisse', 'agirebbe', 'agisca'],
    correctAnswer: 0,
    explanation: 'Congiuntivo trapassato in frase condizionale',
    points: 3
  },
  {
    id: 4304,
    language: 'italian',
    type: 'reading-comprehension',
    level: 'C1',
    category: 'reading',
    question: 'Qual è la posizione dell\'autore sull\'intelligenza artificiale?',
    options: ['Completamente favorevole', 'Ottimista con cautela', 'Fortemente contrario', 'Indifferente'],
    correctAnswer: 1,
    explanation: 'L\'autore riconosce sia i vantaggi che i rischi',
    points: 3,
    readingPassage: 'L\'intelligenza artificiale rappresenta sia un\'opportunità senza precedenti che una sfida significativa per l\'umanità. Mentre l\'IA ha il potenziale di rivoluzionare la sanità, l\'istruzione e la ricerca scientifica, solleva anche profonde questioni etiche riguardo alla privacy, all\'occupazione e all\'autonomia umana. La chiave sta nello sviluppo di quadri normativi robusti che massimizzino i benefici riducendo al minimo i rischi. I recenti sviluppi nell\'apprendimento automatico hanno dimostrato capacità notevoli, ma evidenziano anche l\'importanza della supervisione umana e delle considerazioni etiche nello sviluppo dell\'IA.'
  }
]; 