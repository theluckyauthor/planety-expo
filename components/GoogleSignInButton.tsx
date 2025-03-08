import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SPACING } from '../constants/theme';

export const GoogleSignInButton = () => {
  const { theme } = useTheme();
  
  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign-in
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.backgroundSecondary }]}
      onPress={handleGoogleSignIn}
    >
      <Image
        source={require('../assets/google-logo.png')}
        style={styles.logo}
      />
      <Text style={[styles.text, { color: theme.text }]}>
        Continue with Google
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.medium,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: SPACING.small,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 