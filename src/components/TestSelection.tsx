import React from 'react';
import { BookOpen, Brain, Clock, Target } from 'lucide-react';

export interface TestOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  questionCount: number;
  difficulty: 'Başlangıç' | 'Orta' | 'İleri' | 'Uzman';
  color: string;
}

interface TestSelectionProps {
  onTestSelect: (testId: string) => void;
  selectedLanguage: string;
}

const testOptions: TestOption[] = [
  {
    id: 'grammar',
    title: 'Dilbilgisi Testi',
    description: 'Temel dilbilgisi kurallarını test edin. Fiil çekimleri, zamanlar ve cümle yapıları.',
    icon: <BookOpen className="w-8 h-8" />,
    duration: '15 dakika',
    questionCount: 20,
    difficulty: 'Orta',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    id: 'vocabulary',
    title: 'Kelime Bilgisi',
    description: 'Kelime dağarcığınızı genişletin. Günlük hayat, iş ve akademik kelimeler.',
    icon: <Brain className="w-8 h-8" />,
    duration: '10 dakika',
    questionCount: 15,
    difficulty: 'Başlangıç',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    id: 'comprehensive',
    title: 'Kapsamlı Test',
    description: 'Tüm becerileri kapsayan kapsamlı bir test. Dilbilgisi, kelime ve okuma.',
    icon: <Target className="w-8 h-8" />,
    duration: '25 dakika',
    questionCount: 30,
    difficulty: 'İleri',
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    id: 'quick',
    title: 'Hızlı Test',
    description: '5 dakikada seviyenizi öğrenin. Hızlı ve etkili bir değerlendirme.',
    icon: <Clock className="w-8 h-8" />,
    duration: '5 dakika',
    questionCount: 10,
    difficulty: 'Başlangıç',
    color: 'bg-orange-500 hover:bg-orange-600'
  }
];

export const TestSelection: React.FC<TestSelectionProps> = ({ onTestSelect, selectedLanguage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Test Seçimi
          </h1>
          <p className="text-lg text-gray-600">
            {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} dilinde hangi testi yapmak istiyorsunuz?
          </p>
        </div>

        {/* Test Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testOptions.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => onTestSelect(test.id)}
            >
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${test.color} text-white mr-4`}>
                    {test.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {test.title}
                    </h3>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      test.difficulty === 'Başlangıç' ? 'bg-green-100 text-green-800' :
                      test.difficulty === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                      test.difficulty === 'İleri' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {test.difficulty}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {test.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {test.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {test.questionCount} soru
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`h-1 rounded-b-xl ${test.color.replace('bg-', 'bg-').replace('hover:bg-', '')}`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Test Hakkında Bilgi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Test sonuçlarınız kaydedilir
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              İstediğiniz zaman devam edebilirsiniz
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Detaylı analiz raporu alırsınız
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 