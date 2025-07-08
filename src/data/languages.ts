import { LanguageInfo } from '../types/test';

export const languages: LanguageInfo[] = [
  {
    code: 'english',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    description: 'The most widely spoken language in the world, essential for international communication, business, and travel.'
  },
  {
    code: 'french',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    description: 'A Romance language spoken in France, Canada, Belgium, Switzerland, and many African countries. Official language of international organizations.'
  },
  {
    code: 'german',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    description: 'The most widely spoken native language in Europe, important for business, science, and technology in German-speaking countries.'
  },
  {
    code: 'italian',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    description: 'A Romance language known for its musicality, spoken in Italy, Switzerland, and San Marino. Rich in culture, art, and history.'
  }
];

export const getLanguageInfo = (code: string): LanguageInfo | undefined => {
  return languages.find(lang => lang.code === code);
}; 