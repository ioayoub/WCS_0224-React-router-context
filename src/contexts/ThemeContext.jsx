import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// Création
const ThemeContext = createContext();

// Provider -> Charger le composant

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Exporter
export const useTheme = () => useContext(ThemeContext);
