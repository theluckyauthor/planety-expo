import * as React from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  isDark: boolean;
  colors: typeof lightColors;
  toggleTheme?: () => void;
};

const lightColors = {
  text: '#000000',
  background: '#FFFFFF',
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF2D55',
  border: '#C7C7CC',
};

const darkColors = {
  text: '#FFFFFF',
  background: '#000000',
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  accent: '#FF375F',
  border: '#38383A',
};

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  colors: lightColors,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const value = React.useMemo(
    () => ({
      isDark,
      colors: isDark ? darkColors : lightColors,
    }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}; 