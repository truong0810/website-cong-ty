
"use client";

import { createContext, useContext, useState } from "react";
import { content, type Language } from "../lib/content";

type Translation = (typeof content)[Language];

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  text: Translation;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("vi");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        text: content[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return value;
}
