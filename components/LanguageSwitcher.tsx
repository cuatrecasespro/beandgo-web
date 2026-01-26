
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { key: Language; label: string, flag: string }[] = [
    { key: Language.CA, label: 'CA', flag: '🇦🇩' },
    { key: Language.ES, label: 'ES', flag: '🇪🇸' },
    { key: Language.EN, label: 'EN', flag: '🇬🇧' },
  ];

  return (
    <div className="flex items-center bg-brand-light-grey rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.key}
          onClick={() => setLanguage(lang.key)}
          className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
            language === lang.key ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-gray-500 hover:text-primary'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
