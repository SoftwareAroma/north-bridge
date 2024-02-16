import React, { createContext, useState, useEffect, useRef, useLayoutEffect, useMemo, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

function usePrevious(theme: string): string {
  const ref = useRef<string>();
  useEffect(() => {
    ref.current = theme;
  });
  return ref.current as string;
}

function useStorageTheme(key: string): [string, React.Dispatch<React.SetStateAction<string>>] {
  const userPreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<string>(
    localStorage.getItem(key) || (userPreference ? 'dark' : 'light')
  );

  useEffect(() => {
    localStorage.setItem(key, theme);
  }, [theme, key]);

  return [theme, setTheme];
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => { }
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useStorageTheme('theme');
  const oldTheme = usePrevious(theme);

  useLayoutEffect(() => {
    document.documentElement.classList.remove(`theme-${oldTheme}`);
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme, oldTheme]);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
