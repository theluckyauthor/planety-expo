import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../constants/theme';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ children, variant = 'primary', loading = false, style, ...props }, ref) => {
    const { theme } = useTheme();

    const buttonStyle = variant === 'primary'
      ? { backgroundColor: theme.primary }
      : { backgroundColor: 'transparent', borderWidth: 1, borderColor: theme.primary };

    const textColor = variant === 'primary' ? theme.textInverse : theme.primary;

    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.button, buttonStyle, style]}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <Text style={[styles.text, { color: textColor }]}>{children}</Text>
        )}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.medium,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 