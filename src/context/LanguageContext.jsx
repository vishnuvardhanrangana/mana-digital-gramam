import React, { createContext, useContext, useState, useEffect } from 'react';
import { uiTranslations } from '../data/translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'mana_digital_gramam_lang';

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'te' || saved === 'en' || saved === 'hi')) {
        return saved;
      }
    } catch {
      // Fallback if localStorage unavailable
    }
    return 'te'; // Telugu is default as specified
  });

  const [textScale, setTextScale] = useState(() => {
    try {
      return localStorage.getItem('mana_digital_text_scale') || 'normal';
    } catch {
      return 'normal';
    }
  });

  const setLang = (newLang) => {
    if (newLang === 'te' || newLang === 'en' || newLang === 'hi') {
      setLangState(newLang);
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // Ignore storage errors
      }
      // Update HTML lang attribute for screen readers and hyphenation
      document.documentElement.lang = newLang;
    }
  };

  const toggleTextScale = () => {
    const next = textScale === 'normal' ? 'large' : 'normal';
    setTextScale(next);
    try {
      localStorage.setItem('mana_digital_text_scale', next);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    const langDict = uiTranslations[lang] || uiTranslations.te;
    return langDict[key] || uiTranslations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, textScale, toggleTextScale }}>
      <div className={textScale === 'large' ? 'text-lg [&_h1]:text-4xl [&_h2]:text-3xl' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
