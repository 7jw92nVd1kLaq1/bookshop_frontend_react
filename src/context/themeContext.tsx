import { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeName, getTheme } from "../style/theme";
import { ThemeProvider } from "styled-components";

const DEFAULT_THEME : ThemeName  = "light";
const THEME_LOCAL_STORAGE_KEY : string = "theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

export const state = {
  themeName: DEFAULT_THEME,
  toggleTheme : () => {}
};

export const ThemeContext = createContext<State>(state);

export interface ThemeProviderProps {
  children: ReactNode;
}

export const BookStoreThemeProvider = ({children}: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME);

  const toggleTheme = () => {
    window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeName === "light" ? "dark" : "light");
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeName;
    setThemeName(localTheme || "light");
  }, []);

  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={getTheme(themeName)}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};