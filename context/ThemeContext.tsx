import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

interface Theme {
  primary: string;
  text: string;
  textSecondary: string;
  textInverse: string;
  background: string;
  backgroundSecondary: string;
  border: string;
}

const lightTheme: Theme = {
  primary: '#FF6B00', // Carrot orange from logo
  text: '#000000',
  textSecondary: '#666666',
  textInverse: '#FFFFFF',
  background: '#FFFFFF',
  backgroundSecondary: '#F5F5F5',
  border: '#E0E0E0',
};

const darkTheme: Theme = {
  primary: '#FF6B00',
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  textInverse: '#000000',
  background: '#121212',
  backgroundSecondary: '#1E1E1E',
  border: '#333333',
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

const THEME_MODE_KEY = '@theme_mode';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    // Load saved theme mode
    const loadThemeMode = async () => {
      try {
        const savedMode = await SecureStore.getItemAsync(THEME_MODE_KEY);
        if (savedMode) {
          setIsDark(savedMode === 'dark');
        }
      } catch (error) {
        console.warn('Failed to load theme mode:', error);
      }
    };

    loadThemeMode();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 