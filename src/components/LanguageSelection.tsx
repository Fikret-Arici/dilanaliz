import React from 'react';
import { Language, LanguageInfo } from '../types/test';
import { ChevronRight } from 'lucide-react';

interface LanguageSelectionProps {
  onLanguageSelect: (language: Language) => void;
}

const languages: LanguageInfo[] = [
  {
    code: 'english',
    name: 'İngilizce',
    nativeName: 'English',
    flag: '🇬🇧',
    description: 'Uluslararası iletişim, iş ve seyahat için en çok konuşulan dildir.'
  },
  {
    code: 'french',
    name: 'Fransızca',
    nativeName: 'Français',
    flag: '🇫🇷',
    description: 'Birçok ülkede konuşulan, diplomasi ve kültür dili.'
  },
  {
    code: 'german',
    name: 'Almanca',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    description: 'Avrupa’da en çok konuşulan ana dildir, bilim ve teknoloji için önemlidir.'
  },
  {
    code: 'italian',
    name: 'İtalyanca',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    description: 'Sanat, tarih ve kültürün dili. İtalya ve çevresinde konuşulur.'
  }
];

export const LanguageSelection: React.FC<LanguageSelectionProps> = ({ onLanguageSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hoş Geldiniz!</h1>
          <p className="text-red-100 text-lg mb-4">CEFR standartlarına uygun seviye belirleme testi için bir dil seçin.</p>
          <div className="bg-white/10 rounded-lg p-4 mt-4">
            <p className="text-red-100 text-sm">
              <strong>CEFR Seviyeleri:</strong> A1 (Başlangıç) → A2 (Temel) → B1 (Orta) → B2 (Orta-üstü) → C1 (İleri) → C2 (Ustalık)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language) => (
            <div
              key={language.code}
              onClick={() => onLanguageSelect(language.code)}
              className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl md:text-4xl">{language.flag}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl">{language.name}</h3>
                    <p className="text-red-200 text-sm">{language.nativeName}</p>
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </div>
              <p className="text-red-100 text-sm md:text-base mb-2">{language.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 