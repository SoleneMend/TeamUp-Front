import { createContext, type ReactNode, useState } from "react";

// 1. Le contexte contient aussi toggleTheme
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
interface ThemeContextProviderType {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: "Détente",
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }: ThemeContextProviderType) {
  const [theme, setTheme] = useState("Détente");

  const toggleTheme = () => {
    setTheme(theme === "Détente" ? "Compétitif" : "Détente");
  };

  // 2. On passe les deux dans le Provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
