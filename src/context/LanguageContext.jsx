// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Vos traductions (dictionnaire)
const translations = {
  fr: {
    about: "À propos",
    projects: "Projets",
    contact: "Contactez-moi",
    // Ajoutez vos autres textes ici
  },
  en: {
    about: "About Me",
    projects: "Projects",
    contact: "Get in touch",
    // Add other texts here
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // On vérifie si une langue est déjà sauvegardée, sinon on prend le français par défaut
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr';
  });

  // À chaque changement, on sauvegarde dans le localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language]; // L'objet contenant les textes actuels

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);