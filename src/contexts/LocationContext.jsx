import { useState } from "react";
import { createContext, useContext } from "react";

// Création
const LocationContext = createContext();

// Provider

export const LocationProvider = ({ children }) => {
  const [lang, setLang] = useState("fr");

  const toggleLanguage = () => {
    setLang(lang === "fr" ? "en" : "fr");
  };

  return (
    <LocationContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LocationContext.Provider>
  );
};

// Export
export const useLanguage = () => useContext(LocationContext);
