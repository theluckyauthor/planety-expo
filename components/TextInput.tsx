import React from 'react';
import { TextInput as RNTextInput, TextInputProps, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../constants/theme';

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>((props, ref) => {
  const { theme } = useTheme();

  return (
    <RNTextInput
      ref={ref}
      placeholderTextColor={theme.textSecondary}
      style={[
        styles.input,
        {
          color: theme.text,
          backgroundColor: theme.backgroundSecondary,
          borderColor: theme.border,
        },
        props.style,
      ]}
      {...props}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: SPACING.medium,
    fontSize: 16,
  },
}); 