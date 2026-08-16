import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  tMenu: (label: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const storedLang = localStorage.getItem('app_language') as Language;
    if (storedLang && (storedLang === 'pt' || storedLang === 'en')) {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const t = (path: string, fallback?: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        return fallback || path; // Return the fallback or path if translation is missing
      }
      current = current[key];
    }
    
    return current as string;
  };

  const tMenu = (label: string): string => {
    const menuDict = translations[language]['menu'] as any;
    if (menuDict && menuDict[label]) {
      return menuDict[label];
    }
    return label; // Fallback to original
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tMenu }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
