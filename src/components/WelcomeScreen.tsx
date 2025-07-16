import React from 'react';

interface WelcomeScreenProps {
  onStartTest: () => void;
  selectedLanguage: string;
}

const languageInfo: Record<string, { name: string; description: string }> = {
  english: {
    name: 'İngilizce',
    description: 'Bu testte İngilizce dilinde gramer, kelime bilgisi, okuma ve dinleme becerilerin ölçülecek. Test CEFR standartlarına uygun olarak hazırlanmıştır.'
  },
  french: {
    name: 'Fransızca',
    description: 'Bu testte Fransızca dilinde gramer, kelime bilgisi, okuma ve dinleme becerilerin ölçülecek. Test CEFR standartlarına uygun olarak hazırlanmıştır.'
  },
  german: {
    name: 'Almanca',
    description: 'Bu testte Almanca dilinde gramer, kelime bilgisi, okuma ve dinleme becerilerin ölçülecek. Test CEFR standartlarına uygun olarak hazırlanmıştır.'
  },
  italian: {
    name: 'İtalyanca',
    description: 'Bu testte İtalyanca dilinde gramer, kelime bilgisi, okuma ve dinleme becerilerin ölçülecek. Test CEFR standartlarına uygun olarak hazırlanmıştır.'
  }
};

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartTest, selectedLanguage }) => {
  const info = languageInfo[selectedLanguage] || languageInfo.english;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-700">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-red-800 mb-4">{info.name} Seviye Belirleme Testi</h1>
        <p className="text-gray-700 text-lg mb-6">{info.description}</p>
        <ul className="text-left text-gray-700 mb-6 space-y-2">
          <li>• <b>Kapsamlı soru seti</b> (20+ soru)</li>
          <li>• <b>20 dakika</b> süre</li>
          <li>• Gramer, kelime, okuma ve dinleme becerileri</li>
          <li>• CEFR standartlarına uygun seviye belirleme</li>
          <li>• Detaylı analiz ve öneriler</li>
        </ul>
        <button
          onClick={onStartTest}
          className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Teste Başla
        </button>
      </div>
    </div>
  );
};