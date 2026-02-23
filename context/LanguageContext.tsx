
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../types';
import { translations, Translations } from '../content/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Initialize state from URL parameter if present, otherwise default to CA
  const getInitialLanguage = (): Language => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam && Object.values(Language).includes(langParam as Language)) {
      return langParam as Language;
    }
    return Language.CA;
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Sync state if URL param changes (e.g. user navigates to a link with ?lang=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    if (langParam && Object.values(Language).includes(langParam as Language) && langParam !== language) {
      setLanguage(langParam as Language);
    }
  }, [location.search]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
