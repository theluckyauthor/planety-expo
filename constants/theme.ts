import { Dimensions } from 'react-native';

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

export const COLORS = {
  primary: '#FF6B00', // Carrot orange from logo
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F5F5F5',
    200: '#E0E0E0',
    300: '#CCCCCC',
    400: '#999999',
    500: '#666666',
    600: '#333333',
    700: '#1E1E1E',
    800: '#121212',
  },
  
  // Space Theme Colors
  spacePurple: {
    light: '#9b87f5',
    DEFAULT: '#7E69AB',
    dark: '#6E59A5',
  },
  spaceBlue: {
    light: '#D3E4FD',
    DEFAULT: '#0EA5E9',
    dark: '#221F26',
  },
  
  // System Colors
  background: {
    light: '#FFFFFF',
    dark: '#0F172A',
  },
  text: {
    light: '#1F2937',
    dark: '#F3F4F6',
  },
  
  // Semantic Colors
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
};

export const SPACING = {
  xs: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,
};

export const FONTS = {
  body: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  display: {
    regular: 'Outfit_400Regular',
    medium: 'Outfit_500Medium',
    semibold: 'Outfit_600SemiBold',
    bold: 'Outfit_700Bold',
  },
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
};

export const BORDER_RADIUS = {
  sm: 8,
  base: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: COLORS.spacePurple.light,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  base: {
    shadowColor: COLORS.spacePurple.light,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: COLORS.spacePurple.light,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
};

export const ANIMATIONS = {
  duration: {
    fast: 200,
    base: 300,
    slow: 500,
  },
  easing: {
    easeInOut: 'ease-in-out',
    easeOut: 'ease-out',
    easeIn: 'ease-in',
  },
};

// Glass card effect utility
export const glassCard = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderColor: 'rgba(255, 255, 255, 0.2)',
  borderWidth: 1,
};

// Gradient configurations
export const GRADIENTS = {
  primary: ['#9b87f5', '#7E69AB'],
  accent: ['#F97316', '#FEC6A1'],
  dark: ['#1F2937', '#111827'],
}; 