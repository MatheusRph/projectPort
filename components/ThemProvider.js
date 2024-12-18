// themeProvider.js

"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Cria um contexto para armazenar e acessar o tema
const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

 // Efeito para aplicar o tema do localStorage ou definir o valor padrão
 useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  document.body.dataset.bsTheme = savedTheme;
  if (savedTheme === "dark") {
    document.body.classList.add('darkmode');
  } else {
    document.body.classList.remove('darkmode');
  }
}, []); // O efeito será executado apenas uma vez após a primeira renderização

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.dataset.bsTheme = newTheme;
    if (newTheme === "dark") {
      document.body.classList.add('darkmode');
    } else{
      document.body.classList.remove('darkmode');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
