import { createContext, useContext, useEffect, useMemo, useState } from "react";
import i18n from "@/lib/i18n";

type Language = "en" | "tr";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (lng: Language) => void;
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "app-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(storageKey) as Language | null;
    return saved ?? (i18n.language as Language) ?? defaultLanguage;
  });

  // keep <html lang> and i18n in sync
  useEffect(() => {
    // Persist and apply
    localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    if (i18n.language !== language) {
      i18n.changeLanguage(language).catch(() => {/* noop */});
    }

    // Listen to external i18n changes (if changed elsewhere)
    const onChange = (lng: string) => {
      const next = (lng as Language) ?? defaultLanguage;
      document.documentElement.lang = next;
      if (next !== language) {
        // reflect into state without re-persist storm
        setLanguage(next);
      }
    };
    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, [language, defaultLanguage, storageKey]);

  const value = useMemo<LanguageProviderState>(() => ({
    language,
    setLanguage: (lng: Language) => setLanguage(lng),
  }), [language]);

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);
  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
